import React, { useEffect, useMemo, useState } from "react";

const HeroAlerts = () => {
  const phrases = useMemo(
    () => [
      "Luguma Concrete Products support clients looking for quality, strength, and dependable production service.",
      "Machine hire enquiries can now move more directly from interest to action through a clearer contact path.",
      "Concrete products, site support, and project-related requests are presented more clearly for prospective clients.",
      "The page now gives customers a more direct route into products, services, and project support.",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFadeClass("fade-out");

      window.setTimeout(() => {
        setIndex((current) => (current + 1) % phrases.length);
        setFadeClass("fade-in");
      }, 250);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className={`hero-alert ${fadeClass}`} aria-live="polite">
      <span className="hero-alert__label">Now delivering</span>
      <p className="hero-phrases">{phrases[index]}</p>
    </div>
  );
};

export default HeroAlerts;
