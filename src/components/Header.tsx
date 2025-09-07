import React from 'react';
import { Menu, Bot } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  currentModel: string;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleSidebar,
  currentModel,
}) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Kerokero AI</h1>
            </div>
          </div>
        </div>

        {currentModel && (
          <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
            <span>Model:</span>
            <span className="font-medium text-gray-900">{currentModel}</span>
          </div>
        )}
      </div>
    </header>
  );
};