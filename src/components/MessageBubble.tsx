import React from 'react';
import { User, Bot, Copy, Check } from 'lucide-react';
import { Message } from '../types/chat';
import { useState } from 'react';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className={`group w-full ${isUser ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100`}>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex space-x-4">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className={`w-8 h-8 rounded-sm flex items-center justify-center ${
              isUser 
                ? 'bg-green-500' 
                : 'bg-gray-900'
            }`}>
              {isUser ? (
                <User className="h-5 w-5 text-white" />
              ) : (
                <Bot className="h-5 w-5 text-white" />
              )}
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-semibold text-gray-900">
                {isUser ? 'You' : 'Kerokero AI'}
              </span>
              <span className="text-xs text-gray-500">
                {message.timestamp.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            </div>
            
            <div className="prose prose-sm max-w-none">
              <div className="text-gray-800 leading-relaxed whitespace-pre-wrap break-words">
                {message.content}
              </div>
            </div>
            
            {/* Actions */}
            {!isUser && (
              <div className="flex items-center space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};