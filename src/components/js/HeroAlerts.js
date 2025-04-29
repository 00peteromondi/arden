import React, { useState, useEffect } from "react";
import "../css/Hero.css";

const HeroAlerts = () => {
  const phrases = React.useMemo(
    () => [
      "On site transportation available with us!",
      "Quality construction material at affordable prices.",
      "Guaranteed value for money and customer satisfaction.",
      "Expert team delivering projects on time, every time.",
      "Eco-friendly solutions for sustainable construction.",
      "Innovative designs tailored to your unique needs.",
    ],
    []
  );

  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [index, setIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out"); // Start fade-out animation
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setFadeClass("fade-in"); // Start fade-in animation
      }, 500); // Duration of fade-out animation
    }, 10000); // Change phrase every 10 seconds

    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    setCurrentPhrase(phrases[index]);
  }, [index, phrases]);

  return (
    <div
      className={`hero-alert mt-4 ${fadeClass}`}
      style={{
        textAlign: "center",
        fontSize: "1rem",
        backgroundColor: "rgb(218, 165, 32, 0.5)",
        padding: "8px",
        borderRadius: "5px",
      }}
    >
      <p className="hero-phrases">{currentPhrase}</p>
    </div>
  );
};

export default HeroAlerts;
