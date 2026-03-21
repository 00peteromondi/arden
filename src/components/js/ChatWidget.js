import React, { useEffect, useRef, useState } from "react";
import "../css/Chatwidget.css";

const initialMessages = [
  {
    id: 1,
    sender: "bot",
    text: "Welcome to Luguma Constructions Limited. Share your product request, equipment need, or project requirement and the enquiry can be guided from there.",
  },
];

const cannedResponses = [
  "You can share the product type, expected quantity, and project location to begin a more useful enquiry.",
  "If your request is about machine hire, include the site activity and preferred mobilisation timing.",
  "If you are comparing options, start with the service or product section and then continue through the contact area.",
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [responseIndex, setResponseIndex] = useState(0);
  const [isLauncherVisible, setIsLauncherVisible] = useState(false);
  const messagesEndRef = useRef(null);
  const lastScrollY = useRef(0);

  const toggleChat = () => {
    setIsOpen((current) => !current);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY.current;
      const shouldShow = currentScrollY > 260 && (scrollingUp || currentScrollY > 720);

      setIsLauncherVisible(shouldShow || isOpen);
      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleSendMessage = () => {
    const trimmedValue = input.trim();

    if (!trimmedValue) {
      return;
    }

    setMessages((current) => [
      ...current,
      { id: Date.now(), sender: "user", text: trimmedValue },
    ]);
    setInput("");

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: cannedResponses[responseIndex % cannedResponses.length],
        },
      ]);
      setResponseIndex((current) => current + 1);
    }, 650);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className={`chat-widget ${isLauncherVisible || isOpen ? "is-visible" : ""}`}>
      {!isOpen ? (
        <button type="button" className="chat-toggle" onClick={toggleChat}>
          <span className="chat-toggle__icon">
            <i className="bi bi-chat-dots-fill" aria-hidden="true" />
          </span>
          <span>
            <strong>Talk to Luguma</strong>
            <small>For product and equipment enquiries</small>
          </span>
        </button>
      ) : (
        <section className="chat-box" aria-label="Chat support">
          <div className="chat-header">
            <div>
              <strong>Luguma Enquiry Desk</strong>
              <small>For products, machine hire, and request guidance</small>
            </div>
            <button type="button" className="chat-close" onClick={toggleChat}>
              <span>&#x2715;</span>
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${
                  message.sender === "user" ? "user" : "bot"
                }`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe your request"
            />
            <button type="button" onClick={handleSendMessage} className="send-icon">
              Send
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default ChatWidget;
