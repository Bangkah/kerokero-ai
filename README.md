# 🐸 Kerokero AI

A beautiful, modern ChatGPT-style interface for interacting with AI models using Groq API. Built with React, TypeScript, and Tailwind CSS.

![Kerokero AI Screenshot](https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center)

## ✨ Features

- **ChatGPT-style Interface** - Clean, modern design inspired by ChatGPT
- **Online AI Models** - Powered by Groq API for fast responses
- **Multiple Conversations** - Create and manage multiple chat sessions
- **Model Selection** - Switch between different AI models easily
- **Real-time Chat** - Smooth, responsive messaging experience
- **Conversation History** - Automatic saving of chat sessions
- **Copy Messages** - Easy copying of AI responses
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Cross-Platform** - Works on any device with internet connection

## 🚀 Quick Start

### Prerequisites

1. **Get Groq API Key**
   - Visit [console.groq.com](https://console.groq.com)
   - Sign up for a free account
   - Create an API key in the dashboard

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bangkah/kerokero-ai.git
   cd kerokero-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Key**
   
   Create a `.env` file in the root directory and add your Groq API key:
   ```env
   VITE_GROQ_API_KEY=your_groq_api_key_here
   VITE_API_BASE_URL=https://api.groq.com/openai/v1
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
Available models:
- **Llama 3 8B**: Fast and efficient for general tasks
- **Llama 3 70B**: More capable, better for complex tasks  
- **Mixtral 8x7B**: Great for coding and analysis
- **Gemma 7B**: Google's efficient model

## 🛠️ Development

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **AI Backend**: Groq API

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
│   └── useGroqAPI.ts   # Groq API integration
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
VITE_GROQ_API_KEY=your_groq_api_key_here
VITE_API_BASE_URL=https://api.groq.com/openai/v1
```

### API Configuration
- Get your free API key from [Groq Console](https://console.groq.com)
- The free tier includes generous usage limits
- No credit card required for getting started

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

**Note**: Make sure to set your environment variables in your hosting platform.

## 🐛 Troubleshooting

### Common Issues

**1. "API Key Required" Error**
- Make sure you have a valid Groq API key
- Check that the key is properly set in your `.env` file
- Verify the key has the correct permissions

**2. "Connection Failed" Error**
- Check your internet connection
- Verify the API endpoint is correct
- Make sure your API key is not expired

**3. "Rate Limited" Error**
- You've exceeded the free tier limits
- Wait for the rate limit to reset
- Consider upgrading your Groq plan

**4. Slow Responses**
- Try using smaller models like Llama 3 8B
- Check your internet connection speed
- Groq API is generally very fast

### Performance Tips
- **Internet**: Stable internet connection recommended
- **Model Choice**: Smaller models respond faster
- **Caching**: Conversations are cached locally for better UX

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

- [Groq](https://groq.com) - For providing fast AI inference
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
