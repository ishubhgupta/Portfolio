import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faTimes, faPaperPlane, faRobot, faUser } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm Shubh. Feel free to ask me anything about my skills, experience, projects, or background!",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session-${Date.now()}`);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');

    // Add user message
    setMessages((prev) => [
      ...prev,
      { type: 'user', text: userMessage, timestamp: new Date() },
    ]);

    setIsLoading(true);

    try {
      const response = await fetch('https://ishubhgupta-portfolio-chatbot.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      // Add bot response
      setMessages((prev) => [
        ...prev,
        { type: 'bot', text: data.response, timestamp: new Date() },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: "Sorry, I'm having trouble connecting right now. Please make sure the chatbot server is running or try again later.",
          timestamp: new Date(),
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const clearChat = async () => {
    try {
      await fetch('https://ishubhgupta-portfolio-chatbot.vercel.app/api/chat/clear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId }),
      });
      
      setMessages([
        {
          type: 'bot',
          text: "Hi! I'm an AI assistant representing this portfolio's owner. Feel free to ask me anything about their skills, experience, projects, or background!",
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error('Error clearing chat:', error);
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chat Button */}
      <button
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        aria-label="Toggle chatbot"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faComments} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-title">
              <FontAwesomeIcon icon={faRobot} />
              <span>Ask Me Anything</span>
            </div>
            <button
              className="chatbot-clear-btn"
              onClick={clearChat}
              title="Clear conversation"
            >
              Clear
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.type} ${message.isError ? 'error' : ''}`}
              >
                <div className="message-icon">
                  <FontAwesomeIcon icon={message.type === 'user' ? faUser : faRobot} />
                </div>
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-icon">
                  <FontAwesomeIcon icon={faRobot} />
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form className="chatbot-input" onSubmit={sendMessage}>
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your question..."
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              aria-label="Send message"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
