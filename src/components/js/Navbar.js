import React, { useEffect, useRef, useState } from "react";
import "../css/Navbar.css";
import brandMark from "../../Lugumalogo.jpeg";

const navLinks = [
  { label: "About", href: "#about", icon: "bi-buildings" },
  { label: "Services", href: "#services", icon: "bi-grid-1x2-fill" },
  { label: "Products", href: "#products", icon: "bi-box-seam" },
  { label: "Gallery", href: "#gallery", icon: "bi-images" },
  { label: "Equipment", href: "#equipment", icon: "bi-truck" },
  { label: "Process", href: "#process", icon: "bi-diagram-3-fill" },
  { label: "Contact", href: "#contact", icon: "bi-envelope-paper-fill" },
];

const quickFacts = [
  { icon: "bi-bricks", label: "Precast products" },
  { icon: "bi-truck-front-fill", label: "Equipment movement" },
  { icon: "bi-clipboard2-check-fill", label: "Project requests" },
];

function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuPanelRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    if (isMenuOpen && menuPanelRef.current) {
      menuPanelRef.current.scrollTop = 0;
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="utility-bar" aria-label="Service highlights">
        {quickFacts.map((fact) => (
          <div className="utility-pill" key={fact.label}>
            <i className={`bi ${fact.icon}`} aria-hidden="true" />
            <span>{fact.label}</span>
          </div>
        ))}
      </div>

      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={() => setIsMenuOpen(false)}>
          <img
            src={brandMark}
            alt="Luguma Constructions Limited logo"
            className="brand__logo"
          />
          <span className="brand__text">
            <strong>Luguma Constructions Limited</strong>
            <small>Precast concrete products, machine hire, and project enquiries</small>
          </span>
        </a>

        <button
          type="button"
          className={`nav-toggle ${isMenuOpen ? "is-open" : ""}`}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isMenuOpen ? "is-open" : ""}`}>
          <div className="nav-links__panel" ref={menuPanelRef}>
            <div className="nav-links__top">
              <span>Explore Luguma</span>
              <button
                type="button"
                className="nav-links__close"
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="bi bi-x-lg" aria-hidden="true" />
              </button>
            </div>

            <div className="nav-links__items">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className={`bi ${link.icon}`} aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="nav-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              Request a Quote
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MyNavbar;
