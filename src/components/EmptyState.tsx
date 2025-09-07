import React from 'react';
import { Bot, Zap, Shield, Cpu, AlertCircle } from 'lucide-react';

interface EmptyStateProps {
  isConnected: boolean;
  hasModels: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ isConnected, hasModels }) => {
  if (!isConnected) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Connection Failed</h3>
          <p className="text-gray-600 mb-6">
            Unable to connect to Ollama. Make sure Ollama is running on localhost:11434
          </p>
          <div className="bg-gray-50 rounded-lg p-4 text-left">
            <p className="text-sm font-medium text-gray-900 mb-2">Quick Setup:</p>
            <ol className="text-sm text-gray-600 space-y-1">
              <li>1. Install Ollama from <a href="https://ollama.ai" className="text-green-600 hover:underline" target="_blank" rel="noopener">ollama.ai</a></li>
              <li>2. Run: <code className="bg-gray-200 px-1 rounded font-mono">ollama serve</code></li>
              <li>3. Download a model: <code className="bg-gray-200 px-1 rounded font-mono">ollama pull llama2</code></li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  if (!hasModels) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Cpu className="h-8 w-8 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">No Models Available</h3>
          <p className="text-gray-600 mb-6">
            Download an AI model to start chatting
          </p>
          <div className="bg-gray-50 rounded-lg p-4 text-left">
            <p className="text-sm font-medium text-gray-900 mb-2">Popular models:</p>
            <div className="text-sm text-gray-600 space-y-1">
              <div><code className="bg-gray-200 px-1 rounded font-mono">ollama pull llama2</code> - General purpose</div>
              <div><code className="bg-gray-200 px-1 rounded font-mono">ollama pull codellama</code> - Code assistant</div>
              <div><code className="bg-gray-200 px-1 rounded font-mono">ollama pull mistral</code> - Fast model</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Bot className="h-10 w-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Kerokero AI</h2>
        <p className="text-lg text-gray-600 mb-8">
          Your personal AI assistant powered by Ollama. Start a conversation below.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Private & Secure</h3>
            <p className="text-sm text-gray-600">Your conversations stay on your device</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Fast & Responsive</h3>
            <p className="text-sm text-gray-600">No internet required for conversations</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Cpu className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Multiple Models</h3>
            <p className="text-sm text-gray-600">Choose the right AI for your needs</p>
          </div>
        </div>
        
        <p className="text-sm text-gray-500">
          Select a model from the sidebar and start typing your message below
        </p>
      </div>
    </div>
  );
};