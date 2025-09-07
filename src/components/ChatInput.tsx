import React, { useState, KeyboardEvent, useRef, useEffect } from 'react';
import { Send, Square } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  disabled: boolean;
  onStopGeneration?: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  isLoading,
  disabled,
  onStopGeneration,
}) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading) {
        handleSend();
      }
    }
  };

  const handleStop = () => {
    if (onStopGeneration) {
      onStopGeneration();
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="relative flex items-end space-x-3">
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                disabled 
                  ? "Select a model to start chatting..." 
                  : "Send a message..."
              }
              disabled={disabled}
              rows={1}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-500 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
              style={{ minHeight: '48px', maxHeight: '200px' }}
            />
            
            {/* Send/Stop Button */}
            <div className="absolute right-2 bottom-2">
              {isLoading ? (
                <button
                  onClick={handleStop}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
                  title="Stop generation"
                >
                  <Square className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={handleSend}
                  disabled={!message.trim() || disabled}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-2 text-xs text-gray-500 text-center">
          Kerokero AI can make mistakes. Consider checking important information.
        </div>
      </div>
    </div>
  );
};