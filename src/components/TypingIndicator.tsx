import React from 'react';
import { Bot } from 'lucide-react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex space-x-4">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-sm bg-gray-900 flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-semibold text-gray-900">Kerokero AI</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-sm text-gray-500 ml-2">Thinking...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};