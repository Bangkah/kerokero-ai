import { useState, useEffect } from 'react';
import { OllamaModel, Message, ChatRequest } from '../types/chat';

const OLLAMA_BASE_URL = 'http://localhost:11434';

export const useOllama = () => {
  const [models, setModels] = useState<OllamaModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    checkConnection();
    fetchModels();
  }, []);

  const checkConnection = async () => {
    try {
      const response = await fetch(`${OLLAMA_BASE_URL}/api/version`);
      setIsConnected(response.ok);
      setError(null);
    } catch (err) {
      setIsConnected(false);
      setError('Tidak dapat terhubung ke Ollama. Pastikan Ollama berjalan di localhost:11434');
    }
  };

  const fetchModels = async () => {
    try {
      const response = await fetch(`${OLLAMA_BASE_URL}/api/tags`);
      if (response.ok) {
        const data = await response.json();
        setModels(data.models || []);
        setError(null);
      }
    } catch (err) {
      console.error('Error fetching models:', err);
      setError('Gagal mengambil daftar model');
    }
  };

  const sendMessage = async (
    messages: Message[],
    selectedModel: string
  ): Promise<string> => {
    if (!isConnected) {
      throw new Error('Tidak terhubung ke Ollama');
    }

    setIsLoading(true);
    setError(null);

    try {
      const chatMessages = messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      }));

      const requestBody: ChatRequest = {
        model: selectedModel,
        messages: chatMessages,
        stream: false,
      };

      const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.message?.content || 'Tidak ada response dari model';
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan saat mengirim pesan';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    models,
    isLoading,
    error,
    isConnected,
    sendMessage,
    checkConnection,
    fetchModels,
  };
};