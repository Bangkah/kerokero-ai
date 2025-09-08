import { useState, useEffect } from 'react';
import { AIModel, Message, ChatRequest } from '../types/chat';

const GROQ_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.groq.com/openai/v1';

// Available Groq models
const AVAILABLE_MODELS: AIModel[] = [
  {
    id: 'llama3-8b-8192',
    name: 'Llama 3 8B',
    description: 'Fast and efficient for general tasks'
  },
  {
    id: 'llama3-70b-8192',
    name: 'Llama 3 70B',
    description: 'More capable, better for complex tasks'
  },
  {
    id: 'mixtral-8x7b-32768',
    name: 'Mixtral 8x7B',
    description: 'Great for coding and analysis'
  },
  {
    id: 'gemma-7b-it',
    name: 'Gemma 7B',
    description: 'Google\'s efficient model'
  }
];

export const useGroqAPI = () => {
  const [models, setModels] = useState<AIModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    
    if (!apiKey || apiKey === 'your_groq_api_key_here') {
      setIsConnected(false);
      setError('API Key Groq belum diatur. Silakan tambahkan VITE_GROQ_API_KEY di file .env');
      return;
    }

    try {
      const response = await fetch(`${GROQ_BASE_URL}/models`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsConnected(true);
        setModels(AVAILABLE_MODELS);
        setError(null);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (err) {
      setIsConnected(false);
      setError('Tidak dapat terhubung ke Groq API. Periksa koneksi internet dan API key Anda.');
      console.error('Connection error:', err);
    }
  };

  const sendMessage = async (
    messages: Message[],
    selectedModel: string
  ): Promise<string> => {
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    
    if (!apiKey || apiKey === 'your_groq_api_key_here') {
      throw new Error('API Key Groq belum diatur');
    }

    if (!isConnected) {
      throw new Error('Tidak terhubung ke Groq API');
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
        max_tokens: 1024,
        temperature: 0.7,
      };

      const response = await fetch(`${GROQ_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content || 'Tidak ada response dari model';
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
  };
};