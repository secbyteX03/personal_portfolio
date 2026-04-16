import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Portfolio.css';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'security', label: 'Cybersecurity' },
  { id: 'blockchain', label: 'Blockchain' },
  { id: 'fraud', label: 'Fraud Prevention' }
];

const projects = [
  {
    id: 'security-1',
    category: 'security',
    title: 'IoT Threat Simulator',
    description: 'Simulates IoT and blockchain node vulnerabilities for security testing and risk assessment.',
    image: '/images/IoT-threat-Simulator.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'security-2',
    category: 'security',
    title: 'Secure Chatbot',
    description: 'AI-powered secure chatbot with end-to-end encryption and real-time fraud risk detection.',
    image: '/images/Secure-Chatbot.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'fraud-1',
    category: 'fraud',
    title: 'Fraud Dashboard',
    description: 'Real-time fraud detection dashboard monitoring payment rails and blockchain transactions with ML-powered risk scoring.',
    image: '/images/Fraud-Dashboard.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'fraud-2',
    category: 'fraud',
    title: 'M-Pesa Alert Engine',
    description: 'Real-time M-Pesa transaction monitoring with fraud detection and blockchain-verified payment reconciliation.',
    image: '/images/mpesa-fraud-alert.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'blockchain-1',
    category: 'blockchain',
    title: 'Stellar Payment Integration',
    description: 'Secure blockchain paymentrails built on Stellar for fast, low-cost, verifiable transactions.',
    image: '/images/infrastructure-as-Code-Demo.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'blockchain-2',
    category: 'blockchain',
    title: 'Vulnerability-as-Code Toolkit',
    description: 'Automated security toolkit for smart contract vulnerability detection and blockchain node hardening.',
    image: '/images/Vulnerability-as-Code-Toolkit.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'security-3',
    category: 'security',
    title: 'OWASP Security Audit',
    description: 'Comprehensive security audit for fintech platforms ensuring OWASP standards and compliance.',
    image: '/images/OWASP_Audit.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'blockchain-3',
    category: 'blockchain',
    title: 'Risk BI Portal',
    description: 'Enterprise risk intelligence portal tracking blockchain investment exposures and financial risk.',
    image: '/images/Risk-BI-Portal.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div className="section-header">Portfolio</div>
          <h2 className="portfolio-title">Featured Projects</h2>

          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div
                className="portfolio-image"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <div className="portfolio-category">{project.category}</div>
                    <h3>{project.title}</h3>
                    <p className="portfolio-description">{project.description}</p>
                    <div className="portfolio-links">
                      <a
                        href={project.demoLink}
                        className="portfolio-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                      <a
                        href={project.githubLink}
                        className="portfolio-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more-container">
          <a
            href="https://github.com/secbyteX03"
            className="view-more-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
