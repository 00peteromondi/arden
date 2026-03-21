import React, { useEffect, useMemo, useState } from "react";
import "../css/Hero.css";
import HeroAlerts from "./HeroAlerts";
import ChatWidget from "./ChatWidget";
import brandMark from "../../luguma-brandmark.svg";

const services = [
  {
    icon: "bi-bricks",
    title: "Precast concrete production",
    text: "Luguma Concrete Products offer strong, high-quality precast solutions for residential works, commercial developments, and infrastructure projects.",
  },
  {
    icon: "bi-truck-front-fill",
    title: "Machine and equipment hire",
    text: "Clients can request dependable equipment support for lifting, movement, handling, and on-site execution without wasting time on unclear service descriptions.",
  },
  {
    icon: "bi-boxes",
    title: "Supply and delivery planning",
    text: "From product quantities to site delivery timing, Luguma helps customers move from enquiry to supply with better coordination and smoother communication.",
  },
];

const products = [
  {
    icon: "bi-bricks",
    title: "Concrete blocks",
    price: "From KSh 85 per piece",
    text: "Suitable for durable walling works where strength, shape, and finish matter.",
  },
  {
    icon: "bi-bezier2",
    title: "Precast culverts",
    price: "From KSh 8,500 per unit",
    text: "Prepared for drainage and road works that need dependable precast concrete output.",
  },
  {
    icon: "bi-grid-3x3-gap-fill",
    title: "Paving blocks",
    price: "From KSh 1,250 per square metre",
    text: "Designed for walkways, compounds, and external surfaces that demand both form and strength.",
  },
  {
    icon: "bi-layout-text-window-reverse",
    title: "Kerbstones",
    price: "From KSh 650 per piece",
    text: "Produced for roadside finishing, compound definition, and cleaner edge detailing.",
  },
  {
    icon: "bi-columns-gap",
    title: "Concrete slabs",
    price: "From KSh 2,800 per piece",
    text: "Suitable for structured site use where reliable precast support is required.",
  },
  {
    icon: "bi-bounding-box-circles",
    title: "Concrete pipes",
    price: "Price on request",
    text: "Available for projects that need size-specific concrete pipe supply and production guidance.",
  },
];

const machineHire = [
  {
    icon: "bi-truck-front-fill",
    title: "Tipper truck hire",
    price: "From KSh 18,000 per day",
    text: "Suitable for material movement, spoil haulage, and general transport support on active sites.",
  },
  {
    icon: "bi-cone-striped",
    title: "Concrete mixer support",
    price: "From KSh 22,000 per day",
    text: "Ideal for projects that need organised concrete production and efficient site delivery support.",
  },
  {
    icon: "bi-tools",
    title: "Excavation equipment hire",
    price: "From KSh 28,000 per day",
    text: "Useful for groundwork, trenching, site clearance, and earth-moving tasks across project stages.",
  },
  {
    icon: "bi-boxes",
    title: "Loader and handling support",
    price: "From KSh 20,000 per day",
    text: "Built for loading, offloading, movement, and practical material handling on busy sites.",
  },
  {
    icon: "bi-diagram-3-fill",
    title: "Site logistics package",
    price: "Price on request",
    text: "For clients who need combined equipment support, coordination, and planning around project delivery.",
  },
  {
    icon: "bi-gear-wide-connected",
    title: "Custom machine deployment",
    price: "Price on request",
    text: "Best for projects with specialised machinery needs that require scope review before mobilisation.",
  },
];

const processSteps = [
  {
    title: "Tell us what you need",
    text: "Share the product type, equipment requirement, quantity, and project location so the Luguma team can understand your project properly.",
  },
  {
    title: "Align on scope",
    text: "Once your needs are clear, Luguma can advise on the right product option, service path, or equipment support for the work ahead.",
  },
  {
    title: "Move toward delivery",
    text: "With the right scope in place, the conversation can move toward pricing, production planning, and site delivery arrangements.",
  },
];

const banners = {
  about:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
  services:
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80",
  products:
    "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1400&q=80",
  equipment:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
  process:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
  contact:
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80",
};

const SectionHeader = ({ eyebrow, title, text, image, align = "left" }) => (
  <div
    className={`section-header-banner section-header-banner--${align} scroll-reveal`}
    style={{
      backgroundImage: `linear-gradient(90deg, rgba(36, 31, 25, 0.62), rgba(36, 31, 25, 0.28)), url(${image})`,
    }}
  >
    <div className="section-header-banner__content">
      <span className="eyebrow eyebrow--light">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </div>
);

const Hero = () => {
  const carouselSlides = useMemo(
    () => [
      {
        icon: "bi-buildings-fill",
        title: "About Luguma",
        text: "A stronger first impression for clients looking for dependable concrete products and project support.",
        href: "#about",
        image: banners.about,
      },
      {
        icon: "bi-grid-1x2-fill",
        title: "Services",
        text: "Concrete production, equipment hire, and supply planning presented with clearer structure.",
        href: "#services",
        image: banners.services,
      },
      {
        icon: "bi-box-seam",
        title: "Products",
        text: "Product pricing and concrete item visibility now help clients compare options more easily.",
        href: "#products",
        image: banners.products,
      },
      {
        icon: "bi-truck-front-fill",
        title: "Equipment",
        text: "Machine hire is now displayed as a major service path with its own price-led cards.",
        href: "#equipment",
        image: banners.equipment,
      },
      {
        icon: "bi-diagram-3-fill",
        title: "Process",
        text: "The page now guides visitors from interest to quote with a more practical enquiry flow.",
        href: "#process",
        image: banners.process,
      },
      {
        icon: "bi-envelope-paper-fill",
        title: "Contact",
        text: "The site ends with a more direct path into product, machine hire, and project support enquiries.",
        href: "#contact",
        image: banners.contact,
      },
    ],
    []
  );

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselSlides.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [carouselSlides.length]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".scroll-reveal"));

    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const currentSlide = carouselSlides[activeSlide];

  return (
    <main className="page-shell" id="home">
      <section className="hero-section scroll-reveal is-visible">
        <div className="hero-background" />
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Luguma Constructions Limited</span>
            <h1 className="hero-title">
              Luguma Concrete Products offer high quality concrete products, reliable machine hire, and practical support for real construction projects.
            </h1>
            <p className="hero-subtitle">
              From concrete blocks and paving units to machine hire and delivery planning, Luguma helps clients source
              the products and support they need to keep projects moving with confidence.
            </p>
            <div className="hero-actions">
              <a className="hero-button hero-button--primary" href="#contact">
                Request a Quote
              </a>
              <a className="hero-button hero-button--secondary" href="#products">
                View Product Prices
              </a>
            </div>
            <HeroAlerts />
          </div>

          <div className="hero-showcase">
            <article className="hero-image-card hero-image-card--logo">
              <img
                src={brandMark}
                alt="Luguma Constructions Limited logo"
                className="hero-image-card__logo"
              />
              <div className="hero-image-card__copy">
                <span>Trusted construction partner</span>
                <strong>Built to present Luguma as a serious concrete production company ready to serve more clients online.</strong>
              </div>
            </article>

            <article className="hero-image-card hero-image-card--carousel">
              <div className="hero-image-card__eyebrow">Explore the site</div>
              <div className="hero-carousel" aria-live="polite">
                <div
                  className="hero-carousel__slide"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(22, 20, 18, 0.24), rgba(22, 20, 18, 0.64)), url(${currentSlide.image})`,
                  }}
                >
                  <div className="hero-carousel__badge">
                    <i className={`bi ${currentSlide.icon}`} aria-hidden="true" />
                    <span>{currentSlide.title}</span>
                  </div>
                  <div className="hero-carousel__copy">
                    <h3>{currentSlide.title}</h3>
                    <p>{currentSlide.text}</p>
                    <a href={currentSlide.href}>Open Section</a>
                  </div>
                </div>
                <div className="hero-carousel__thumbs" aria-hidden="true">
                  {carouselSlides.slice(0, 3).map((slide, index) => (
                    <div
                      key={slide.title}
                      className={`hero-carousel__thumb ${
                        carouselSlides[activeSlide].title === slide.title ? "is-active" : ""
                      }`}
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(26, 22, 18, 0.16), rgba(26, 22, 18, 0.5)), url(${slide.image})`,
                        animationDelay: `${index * 0.12}s`,
                      }}
                    >
                      <span>{slide.title}</span>
                    </div>
                  ))}
                </div>
                <div className="hero-carousel__progress" aria-hidden="true">
                  {carouselSlides.map((slide, index) => (
                    <span
                      key={slide.title}
                      className={`hero-carousel__dot ${
                        index === activeSlide ? "is-active" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section" id="about">
        <SectionHeader
          eyebrow="About Luguma"
          title="Luguma Concrete Products serve clients looking for dependable quality, practical support, and strong project delivery."
          text="Luguma Constructions Limited is positioned to welcome contractors, developers, and project teams who need quality concrete products and dependable support."
          image={banners.about}
          align="left"
        />
        <div className="trust-grid">
          {[
            ["bi-buildings-fill", "For developers and contractors", "Clients can quickly see that Luguma is ready to support building works, infrastructure jobs, and concrete supply needs."],
            ["bi-box-seam", "For concrete product enquiries", "The site now gives concrete products the visibility they deserve so customers can move toward a quote more confidently."],
            ["bi-truck", "For equipment support requests", "Machine hire now sits clearly within the offer so clients can approach Luguma for both products and project support."],
          ].map(([icon, title, text], index) => (
            <article className="trust-card scroll-reveal" key={title} style={{ "--reveal-delay": `${index * 0.08}s` }}>
              <div className="trust-card__icon">
                <i className={`bi ${icon}`} aria-hidden="true" />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="services">
        <SectionHeader
          eyebrow="Services"
          title="Our services are now presented to help clients understand exactly how Luguma can support their projects."
          text="Every service block speaks more directly to concrete production, machine hire, and supply coordination needs that matter on active jobs."
          image={banners.services}
          align="right"
        />
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card scroll-reveal" key={service.title} style={{ "--reveal-delay": `${index * 0.08}s` }}>
              <div className="service-card__icon">
                <i className={`bi ${service.icon}`} aria-hidden="true" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="products">
        <SectionHeader
          eyebrow="Products"
          title="Luguma Concrete Products include quality precast solutions prepared for building, drainage, paving, and site finishing works."
          text="Indicative prices are shown below to help clients understand the offer faster before moving into a full product enquiry."
          image={banners.products}
          align="left"
        />
        <div className="product-grid product-grid--wide">
          {products.map((product, index) => (
            <article className="product-card scroll-reveal" key={product.title} style={{ "--reveal-delay": `${index * 0.06}s` }}>
              <div className="product-card__icon">
                <i className={`bi ${product.icon}`} aria-hidden="true" />
              </div>
              <div className="product-card__price">{product.price}</div>
              <h3>{product.title}</h3>
              <p>{product.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="equipment">
        <SectionHeader
          eyebrow="Equipment Hire"
          title="Luguma equipment hire helps clients access practical support for movement, handling, and on-site execution."
          text="This section now makes it easier for customers to understand that machinery and project support are part of Luguma's construction offer."
          image={banners.equipment}
          align="right"
        />
        <div className="equipment-grid equipment-grid--light">
          {machineHire.map((item, index) => (
            <article className="equipment-card equipment-card--light scroll-reveal" key={item.title} style={{ "--reveal-delay": `${index * 0.06}s` }}>
              <i className={`bi ${item.icon}`} aria-hidden="true" />
              <div className="product-card__price">{item.price}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="process">
        <SectionHeader
          eyebrow="How It Works"
          title="The enquiry flow is structured to help clients move from interest to action with less delay."
          text="Whether you need concrete products or equipment support, Luguma now gives you a clearer path into the right conversation."
          image={banners.process}
          align="left"
        />
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card scroll-reveal" key={step.title} style={{ "--reveal-delay": `${index * 0.08}s` }}>
              <span className="process-card__index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="contact">
        <SectionHeader
          eyebrow="Contact"
          title="Ready to discuss concrete products, machine hire, or project support."
          text="Use this section to move from browsing into a direct conversation with Luguma about your next requirement."
          image={banners.contact}
          align="right"
        />
        <div className="contact-panel scroll-reveal">
          <div className="contact-panel__copy">
            <span className="eyebrow">Start Your Enquiry</span>
            <h2>Speak with Luguma about quality concrete products, equipment hire, and project support.</h2>
            <p>
              If you are planning a project and need concrete products or site support, this is the best place to begin
              the next conversation with the Luguma team.
            </p>
          </div>
          <div className="contact-actions">
            <a href="#services" className="contact-action">
              <strong>Review Services Again</strong>
              <span>Return to the service section before sending your request.</span>
            </a>
            <a href="#products" className="contact-action">
              <strong>Check Product Presentation</strong>
              <span>Browse the product section and return here when ready to engage.</span>
            </a>
          </div>
        </div>
      </section>

      <ChatWidget />
    </main>
  );
};

export default Hero;
