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
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-title">Magret Faith</h1>
        <h2 className="hero-subtitle">
          Cybersecurity & Blockchain Developer | Building Secure Payment Systems
        </h2>
        <p className="hero-description">
          I build systems with security first—focusing on fraud prevention, transaction safety,
          and trust in digital environments. My background in Actuarial Science helps me think
          in terms of risk, patterns, and system vulnerabilities.
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
