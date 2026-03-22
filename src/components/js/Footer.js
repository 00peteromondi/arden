import React from "react";
import "../css/Footer.css";
import brandMark from "../../Lugumalogo.jpeg";

const quickLinks = [
  { label: "About Luguma", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Equipment", href: "#equipment" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const enquiryGuide = [
  "Concrete product requirement",
  "Approximate quantity or scope",
  "Project location",
  "Preferred delivery or mobilisation window",
];

function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="site-footer__inner">
        <div className="footer-brand">
          <img
            src={brandMark}
            alt="Luguma Constructions Limited logo"
            className="footer-brand__logo"
          />
          <div>
            <h2>Luguma Constructions Limited</h2>
            <p>
              Luguma Constructions Limited now stands online as a stronger destination for clients
              seeking concrete production services, equipment hire, and project support.
            </p>
          </div>
        </div>

        <div className="footer-columns">
          <div>
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Client Enquiry Checklist</h3>
            <ul>
              {enquiryGuide.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Next Step</h3>
            <p>
              Review the service and product sections, then move into contact when you are ready to
              discuss concrete production, equipment support, or project requirements.
            </p>
            <div className="footer-actions">
              <a href="#contact">Open Contact Section</a>
              <a href="#home">Back to Top</a>
            </div>
          </div>
        </div>

        <div className="footer-base">
          <span>Concrete production services, equipment hire, and project support presented for serious client enquiries.</span>
          <span>© Luguma Constructions Limited</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
