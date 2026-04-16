import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Portfolio.css';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'security', label: 'Security' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'devsecops', label: 'DevSecOps' },
  { id: 'access', label: 'UX & Access' }
];

const projects = [
  {
    id: 'security-1',
    category: 'security',
    title: 'IoT Threat Simulator',
    description: 'Simulates IoT and blockchain node vulnerabilities, smart contract exploits, and DeFi attack scenarios for security testing and risk assessment.',
    image: '/images/IoT-threat-Simulator.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'security-2',
    category: 'security',
    title: 'Secure Chatbot',
    description: 'AI-powered secure chatbot with end-to-end encryption for financial services, integrated with payment rails and real-time fraud risk detection.',
    image: '/images/Secure-Chatbot.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'security-3',
    category: 'security',
    title: 'Phishing Builder',
    description: 'Advanced phishing simulation platform for cybersecurity training, emphasizing social engineering risks in crypto wallets and payment systems.',
    image: '/images/Phishing-Builder.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'analytics-1',
    category: 'analytics',
    title: 'Fraud Dashboard',
    description: 'Real-time fraud detection dashboard monitoring payment rails, blockchain transactions, and digital asset flows with ML-powered risk scoring.',
    image: '/images/Fraud-Dashboard.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'analytics-2',
    category: 'analytics',
    title: 'Risk BI Portal',
    description: 'Enterprise risk intelligence portal for financial institutions, tracking credit risk, operational risk, and blockchain investment exposures.',
    image: '/images/Risk-BI-Portal.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'analytics-3',
    category: 'analytics',
    title: 'Transaction Forecast',
    description: 'Financial forecasting engine for high-volume payment rails, crypto exchanges, and cross-border remittance flows using time-series ML models.',
    image: '/images/Transaction-Forecast.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'devsecops-1',
    category: 'devsecops',
    title: 'Automated CI/CD Pipeline',
    description: 'Secure CI/CD pipeline for fintech deployments with automated smart contract auditing, payment gateway testing, and compliance validation.',
    image: '/images/Automate-CI-CD-Pipeline.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'devsecops-2',
    category: 'devsecops',
    title: 'Vulnerability-as-Code Toolkit',
    description: 'Automated security toolkit for smart contract vulnerability detection, blockchain node hardening, and crypto wallet security assessment.',
    image: '/images/Vulnerability-as-Code-Toolkit.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'devsecops-3',
    category: 'devsecops',
    title: 'M-Pesa Alert Engine',
    description: 'Real-time M-Pesa transaction monitoring with fraud detection, risk scoring, and blockchain-verified payment reconciliation for African markets.',
    image: '/images/mpesa-fraud-alert.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'access-1',
    category: 'access',
    title: 'WCAG & OWASP Audit',
    description: 'Comprehensive security and accessibility audit for fintech platforms, ensuring PCI-DSS compliance, OWASP standards, and blockchain UI security.',
    image: '/images/OWASP_Audit.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'access-2',
    category: 'access',
    title: 'ARIA-First UI Kit',
    description: 'Accessible UI component library designed for secure financial applications, crypto dashboards, and risk management interfaces with ARIA compliance.',
    image: '/images/ARIA-First-UI-Kit.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03'
  },
  {
    id: 'access-3',
    category: 'access',
    title: 'Compliance Checklist App',
    description: 'Regulatory compliance engine for payment service providers, covering PCI-DSS, GDPR, blockchain KYC/AML, and financial risk frameworks.',
    image: '/images/Compliance-Checklist-App.jpg',
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
          <h2 className="portfolio-title">My Creative Work</h2>

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
                        Live Demo
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
