import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">About Me</div>

            <h2 className="about-subtitle">
              🎯 Mission
            </h2>

            <p className="about-description">
              <strong>Build secure and trustworthy financial systems.</strong> Reduce fraud in everyday
              digital transactions. Apply risk analysis to real-world technology. Use blockchain to improve
              transparency and trust.
            </p>

            <p className="about-description" style={{ marginTop: '1rem' }}>
              With a background in Actuarial Science, I bring a unique perspective to security—
              thinking in terms of risk, patterns, and system vulnerabilities. I'm particularly interested
              in how blockchain (including Stellar) can enable fast, verifiable, and low-cost transactions
              for businesses and individuals.
            </p>

            <a
              href="/documents/MAGRET FAITH AKINYI CV.pdf"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My CV
            </a>
          </div>

          <div className="photo-container">
            <div className="photo-wrapper">
              <img
                src="/images/magret.jpg"
                alt="Profile Photo"
                className="profile-photo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
