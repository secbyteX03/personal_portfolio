import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">About Me</div>
            
            <h2 className="about-subtitle">
              Model Risk. Build Secure. Scale Safely.
            </h2>
            
            <p className="about-description">
              Magret Faith is a Cyber Risk Analyst and Secure Systems Engineer with a BSc in Actuarial Science. I
              combine actuarial risk modelling with security-first development to help startups and SMEs reduce
              financial and operational risk. My work focuses on building resilient digital systems, integrating
              automation, and designing secure payment and blockchain-enabled solutions.
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
