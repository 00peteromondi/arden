import React, { useState, useEffect, useRef } from "react";
import "../css/Chatwidget.css"; // Add styles for the widget
import CustomerSupport from "../../customer-support-chat-2-svgrepo-com.svg";
import CustomerCare from "../../customer-service-hotel-svgrepo-com.svg";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [newMessageCount, setNewMessageCount] = useState(0);
  const messagesEndRef = useRef(null); // Ref to track the end of the messages container
  const messagesContainerRef = useRef(null); // Ref to track the messages container

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages, { text: input, sender: "user" }];
        return newMessages.slice(-50); // Limit the number of visible messages to 50
      });
      setInput("");

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => {
          const newMessages = [
            ...prevMessages,
            {
              text: "Hello! Welcome to Arden Constructions Limited. One of our agents will be with you shortly...",
              sender: "bot",
            },
          ];
          return newMessages.slice(-50); // Limit the number of visible messages to 50
        });
        if (isScrolledUp) {
          setNewMessageCount((count) => count + 1);
        }
      }, 1000);
    }
  };

  // Scroll to the latest message
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsScrolledUp(false);
    setNewMessageCount(0);
  };

  // Detect if the user has scrolled up
  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        messagesContainerRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
      setIsScrolledUp(!isAtBottom);
      if (isAtBottom) {
        setNewMessageCount(0);
      }
    }
  };

  useEffect(() => {
    if (!isScrolledUp) {
      scrollToBottom();
    }
  }, [messages, isScrolledUp]);

  return (
    <div className="chat-widget">
      {!isOpen && (
        <div>
          <button className="chat-toggle" onClick={toggleChat}>
            <img
              src={CustomerSupport}
              alt="Chat Icon"
              className="chat-icon"
              height={40}
              width={40}
            />
            {"  "}Chat with us
          </button>
        </div>
      )}
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <img
              src={CustomerCare}
              alt="Chat Icon"
              className="chat-icon"
              height={30}
              width={30}
            />
            {"  "}Chat Support
            <button className="chat-close" onClick={toggleChat}>
              <span>&#x2715;</span>
            </button>
          </div>
          <div
            className="chat-messages mb-1"
            ref={messagesContainerRef}
            onScroll={handleScroll}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === "user" ? "user" : "bot"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {/* Invisible div to track the end of the messages */}
            <div ref={messagesEndRef} />
          </div>
          {isScrolledUp && newMessageCount > 0 && (
            <button className="scroll-to-bottom" onClick={scrollToBottom}>
              {newMessageCount} New Message{newMessageCount > 1 ? "s" : ""}
            </button>
          )}
          <div className="chat-input">
            <div className="input-container">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
              />
              <button onClick={handleSendMessage} className="send-icon">
                <span>&#x27A4;</span> {/* Unicode for a right arrow icon */}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
