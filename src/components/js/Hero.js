import React, { useState } from "react";
import "../css/Hero.css"; // Import the CSS file for styling
import { FaChevronRight, FaChevronDown, FaComments } from "react-icons/fa"; // Import FaComments for the chat icon
import Construction from "../../construction-svgrepo-com.svg";
import Discount from "../../discount-promo-ecommerce-svgrepo-com.svg";
import ConcreteBag from "../../concrete-bag-svgrepo-com.svg";
import ConcreteBrick from "../../brick-pile-svgrepo-com.svg";
import Transportation from "../../logistics-delivery-truck-and-clock-svgrepo-com.svg";
import EcoFriendly from "../../eco-home-eco-house-svgrepo-com.svg";
import Crane from "../../construction-truck-svgrepo-com.svg";

import Excavator from "../../bobcat-bulldozer-construction-svgrepo-com.svg";
import HeroAlerts from "./HeroAlerts";
import ChatWidget from "./ChatWidget"; // Import your ChatWidget component

const Hero = () => {
  const [isChatWidgetVisible, setIsChatWidgetVisible] = useState(false);

  const handleChatClick = () => {
    setIsChatWidgetVisible((prev) => !prev); // Toggle chat widget visibility
  };
  const handleChatClose = () => {
    setIsChatWidgetVisible(false); // Toggle chat widget visibility
  };

  return (
    <div
      className="hero-mask"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", opacity: 0.7 }}
    >
      <div className="hero-container bg-image">
        <div className="hero-content">
          <h1 className="hero-title">Arden Constructions Limited</h1>
          <p className="hero-subtitle">
            One Stop Reliable Site for all your Pre-Cast Concrete Products,
            Equipment & Machine Hiring Needs
          </p>
          <div className="hero-icons mb-3 mt-1">
            <img
              src={EcoFriendly}
              alt="Eco-Friendly"
              className="construction-icon"
              style={{ width: "1.8rem", height: "1.8rem", margin: "0 0.5rem" }}
            />
            <img
              src={Construction}
              alt="Crane-construction"
              className="construction-icon"
              style={{ width: "1.8rem", height: "1.8rem", margin: "0 0.5rem" }}
            />
            <img
              src={Discount}
              alt="Discount"
              className="construction-icon"
              style={{ width: "1.8rem", height: "1.8rem", margin: "0 0.5rem" }}
            />
            <img
              src={ConcreteBag}
              alt="Concrete Bag"
              className="construction-icon"
              style={{ width: "1.8rem", height: "1.8rem", margin: "0 0.5rem" }}
            />
            <img
              src={ConcreteBrick}
              alt="Concrete Brick"
              className="construction-icon"
              style={{ width: "1.8rem", height: "1.8rem", margin: "0 0.5rem" }}
            />
            <img
              src={Crane}
              alt="Crane"
              className="construction-icon"
              style={{ width: "1.8rem", height: "1.8rem", margin: "0 0.5rem" }}
            />
            <img
              src={Excavator}
              alt="Excavator"
              className="construction-icon"
              style={{ width: "1.8rem", height: "1.8rem", margin: "0 0.5rem" }}
            />
            <img
              src={Transportation}
              alt="Transportation"
              className="construction-icon"
              style={{ width: "1.8rem", height: "1.8rem", margin: "0 0.5rem" }}
            />
          </div>
          <button className="btn hero-button btn-dark">
            Get Started <FaChevronRight className="arrow-right" />{" "}
            <FaChevronDown className="arrow-down" />
          </button>
          <HeroAlerts />
        </div>
      </div>
      {/* Chat with Us Icon */}
      <div
        className="chat-icon"
        onClick={handleChatClick}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "goldenrod",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <FaComments style={{ fontSize: "1.5rem" }} />
      </div>
      {/* Render ChatWidget conditionally */}
      {isChatWidgetVisible && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            left: "20px",
            width: "300px",
            height: "400px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <button className="chat-close" onClick={handleChatClose}>
            <span>&#x2715;</span> {/* Unicode for a close icon */}
          </button>
          <ChatWidget />
        </div>
      )}
    </div>
  );
};

export default Hero;
