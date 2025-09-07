export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  model?: string;
}

export interface OllamaModel {
  name: string;
  size: number;
  digest: string;
  modified_at: string;
}

export interface ChatRequest {
  model: string;
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
  stream: boolean;
}