import './Hero.css';

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* Animated Background */}
      <div className="hero-background">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="hero-video"
        >
          <source src="/images/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="gradient-overlay"></div>
        <div className="gradient-mesh"></div>
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <p className="hero-greeting">Hello, I&apos;m</p>
        <h1 className="hero-title">Magret Faith</h1>
        <h2 className="hero-subtitle">
          Cyber Risk Analyst | Blockchain Security Engineer | Security Strategist
        </h2>
        <p className="hero-description">
          I design digital products and brand systems for SMEs,
          add automated workflows and secure development, and I&apos;m
          expanding into blockchain engineering to build and secure
          smart contracts, payment rails, and the ecosystems they power.
        </p>
        <div className="hero-buttons">
          <button 
            className="hero-btn-primary"
            onClick={() => handleScrollTo('portfolio')}
          >
            View My Work
          </button>
          <button 
            className="hero-btn-secondary"
            onClick={() => handleScrollTo('contact')}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
