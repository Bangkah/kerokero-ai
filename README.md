# 🐸 Kerokero AI

A beautiful, modern ChatGPT-style interface for interacting with local AI models using Ollama. Built with React, TypeScript, and Tailwind CSS.

![Kerokero AI Screenshot](https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center)

## ✨ Features

- **ChatGPT-style Interface** - Clean, modern design inspired by ChatGPT
- **Local AI Models** - Powered by Ollama for privacy and offline usage
- **Multiple Conversations** - Create and manage multiple chat sessions
- **Model Selection** - Switch between different AI models easily
- **Real-time Chat** - Smooth, responsive messaging experience
- **Conversation History** - Automatic saving of chat sessions
- **Copy Messages** - Easy copying of AI responses
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Privacy First** - All conversations stay on your local machine

## 🚀 Quick Start

### Prerequisites

1. **Install Ollama**
   ```bash
   # Visit https://ollama.ai and download for your OS
   # Or use package managers:
   
   # macOS
   brew install ollama
   
   # Linux
   curl -fsSL https://ollama.ai/install.sh | sh
   ```

2. **Start Ollama Server**
   ```bash
   ollama serve
   ```

3. **Download AI Models**
   ```bash
   # Popular models to get started:
   ollama pull llama2          # General purpose (3.8GB)
   ollama pull mistral         # Fast and efficient (4.1GB)
   ollama pull codellama       # Code assistant (3.8GB)
   ollama pull llama2:13b      # Larger, more capable (7.3GB)
   ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kerokero-ai.git
   cd kerokero-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure CORS (Important!)**
   
   For security reasons, you need to allow CORS for the web interface:
   ```bash
   # Set environment variable before starting Ollama
   export OLLAMA_ORIGINS="http://localhost:5173,http://localhost:3000"
   ollama serve
   
   # Or start with the variable inline
   OLLAMA_ORIGINS="http://localhost:5173" ollama serve
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` and start chatting!

## 🎯 Usage

### Basic Chat
1. Select an AI model from the sidebar
2. Type your message in the input field
3. Press Enter or click Send
4. Wait for the AI response

### Managing Conversations
- **New Chat**: Click "New Chat" in the sidebar
- **Switch Chats**: Click on any conversation in the sidebar
- **Auto-save**: Conversations are automatically saved locally

### Model Selection
- Choose different models for different tasks
- Code-related queries: Use `codellama`
- General chat: Use `llama2` or `mistral`
- Complex reasoning: Use larger models like `llama2:13b`

## 🛠️ Development

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **AI Backend**: Ollama

### Project Structure
```
src/
├── components/          # React components
│   ├── Sidebar.tsx     # Navigation and model selection
│   ├── Header.tsx      # Top navigation bar
│   ├── MessageBubble.tsx # Individual chat messages
│   ├── ChatInput.tsx   # Message input field
│   ├── TypingIndicator.tsx # Loading animation
│   └── EmptyState.tsx  # Welcome screen
├── hooks/
│   └── useOllama.ts    # Ollama API integration
├── types/
│   └── chat.ts         # TypeScript type definitions
└── App.tsx             # Main application component
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_OLLAMA_BASE_URL=http://localhost:11434
```

### Ollama Configuration
You can customize Ollama settings by creating a `~/.ollama/config.json`:
```json
{
  "origins": ["http://localhost:5173", "http://localhost:3000"],
  "models_path": "/path/to/your/models"
}
```

## 📱 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The built files in `dist/` can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

**Note**: Make sure your Ollama server is accessible from your deployment environment.

## 🐛 Troubleshooting

### Common Issues

**1. "Connection Failed" Error**
- Ensure Ollama is running: `ollama serve`
- Check if Ollama is accessible: `curl http://localhost:11434/api/version`
- Verify CORS settings are configured

**2. "No Models Available"**
- Download at least one model: `ollama pull llama2`
- Check available models: `ollama list`

**3. CORS Errors**
- Set OLLAMA_ORIGINS environment variable
- Restart Ollama server after setting the variable

**4. Slow Responses**
- Use smaller models like `mistral` for faster responses
- Ensure sufficient RAM (8GB+ recommended for most models)
- Close other resource-intensive applications

### Performance Tips
- **RAM Usage**: Models require significant RAM (4-8GB per model)
- **CPU**: Modern multi-core processors recommended
- **Storage**: Models range from 2-20GB each
- **GPU**: NVIDIA GPUs can accelerate inference (optional)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit: `git commit -m 'Add amazing feature'`
5. Push: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Ollama](https://ollama.ai) - For making local AI accessible
- [OpenAI](https://openai.com) - For ChatGPT interface inspiration
- [Tailwind CSS](https://tailwindcss.com) - For the beautiful styling system
- [Lucide](https://lucide.dev) - For the clean, consistent icons

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing [GitHub Issues](https://github.com/yourusername/kerokero-ai/issues)
3. Create a new issue with detailed information
4. Join our community discussions

---

**Made with @Bangkah for the AI community**

*Kerokero AI - Your friendly local AI assistant* 🐸
