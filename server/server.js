import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ 
  model: 'gemini-2.5-flash',
  generationConfig: {
    temperature: 0.7,
    maxOutputTokens: 1000,
  }
});

// Load knowledge base
let knowledgeBase = '';
try {
  knowledgeBase = fs.readFileSync(
    path.join(__dirname, 'knowledge-base.txt'),
    'utf-8'
  );
} catch (error) {
  console.error('Error loading knowledge base:', error);
}

// Store conversation history (in production, use a proper database)
const conversationHistory = new Map();

// Create prompt
function createPrompt(knowledge, history, question) {
  return `You are an AI assistant representing the person described in the knowledge base below. 
Your role is to answer questions about them in first person, as if you ARE them. 
Be conversational, friendly, and professional. Use their tone and personality.

If someone asks about their skills, experience, projects, or background, use the information 
provided. If you don't have specific information, be honest and say you'd be happy to 
connect them directly.

KNOWLEDGE BASE:
${knowledge}

CONVERSATION HISTORY:
${history}

USER QUESTION: ${question}

RESPONSE (answer in first person as if you are the person):`;
}

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, sessionId = 'default' } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Get or initialize conversation history
    if (!conversationHistory.has(sessionId)) {
      conversationHistory.set(sessionId, []);
    }
    const history = conversationHistory.get(sessionId);

    // Format history
    const historyText = history
      .slice(-5) // Keep last 5 exchanges
      .map((h) => `User: ${h.user}\nAssistant: ${h.assistant}`)
      .join('\n');

    // Create the prompt
    const prompt = createPrompt(knowledgeBase, historyText, message);

    // Generate response using Gemini
    const result = await model.generateContent(prompt);
    const response = result.response.text();

    // Update history
    history.push({ user: message, assistant: response });
    if (history.length > 10) {
      history.shift(); // Keep only last 10 exchanges
    }

    res.json({ response });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: 'Failed to generate response',
      details: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Clear conversation history endpoint
app.post('/api/chat/clear', (req, res) => {
  const { sessionId = 'default' } = req.body;
  conversationHistory.delete(sessionId);
  res.json({ message: 'Conversation history cleared' });
});

app.listen(PORT, () => {
  console.log(`Chatbot server running on port ${PORT}`);
  console.log(`API Key configured: ${!!process.env.GEMINI_API_KEY}`);
});
