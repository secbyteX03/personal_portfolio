import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">About Me</div>

            <p className="about-description">
              I am a cybersecurity and blockchain developer focused on building secure, reliable digital systems.
              My work centers on fraud prevention, payment security, and strengthening trust in digital transactions.
            </p>

            <p className="about-description" style={{ marginTop: '1rem' }}>
              With a background in Actuarial Science, I approach system design through a risk-focused lens,
              analyzing patterns, identifying vulnerabilities, and building solutions that are both resilient and efficient.
              I am particularly interested in leveraging blockchain technologies to enhance transparency, reduce fraud,
              and improve access to secure financial services.
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
