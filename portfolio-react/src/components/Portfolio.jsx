import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Portfolio.css';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'payments', label: 'Payments' },
  { id: 'security', label: 'Security' },
  { id: 'blockchain', label: 'Blockchain' },
  { id: 'analytics', label: 'Analytics' }
];

const projects = [
  // Real GitHub Projects
  {
    id: 'payments-1',
    category: 'payments',
    title: 'PILB',
    description: 'Private, Instant, Low-Barrier Payments. Send money to any M-Pesa user in Kenya anonymously.',
    image: '/images/mpesa-fraud-alert.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03/pilb',
    tech: 'TypeScript'
  },
  {
    id: 'security-1',
    category: 'security',
    title: 's-pay',
    description: 'Secure fraud detection backend with 2FA, transaction monitoring, and real-time fraud detection.',
    image: '/images/Fraud-Dashboard.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03/s-pay',
    tech: 'JavaScript'
  },
  {
    id: 'blockchain-1',
    category: 'blockchain',
    title: 'PayMint',
    description: 'AI agents marketplace with x402 micropayments via Stellar.',
    image: '/images/infrastructure-as-Code-Demo.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03/PayMint',
    tech: 'TypeScript'
  },
  {
    id: 'security-2',
    category: 'security',
    title: 'Aegis_Desk',
    description: 'Real-time collaborative incident response platform for human-AI teamwork.',
    image: '/images/IoT-threat-Simulator.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03/Aegis_Desk',
    tech: 'JavaScript'
  },
  // Original Projects with Demo Links
  {
    id: 'security-3',
    category: 'security',
    title: 'IoT Threat Simulator',
    description: 'Simulates IoT and blockchain node vulnerabilities for security testing and risk assessment.',
    image: '/images/IoT-threat-Simulator.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03',
    tech: 'Security'
  },
  {
    id: 'analytics-1',
    category: 'analytics',
    title: 'Fraud Dashboard',
    description: 'Real-time fraud detection dashboard monitoring payment rails and blockchain transactions.',
    image: '/images/Fraud-Dashboard.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03',
    tech: 'Analytics'
  },
  {
    id: 'payments-2',
    category: 'payments',
    title: 'M-Pesa Alert Engine',
    description: 'Real-time M-Pesa transaction monitoring with fraud detection and blockchain reconciliation.',
    image: '/images/mpesa-fraud-alert.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03',
    tech: 'Payments'
  },
  {
    id: 'blockchain-2',
    category: 'blockchain',
    title: 'Risk BI Portal',
    description: 'Enterprise risk intelligence portal tracking blockchain investment exposures.',
    image: '/images/Risk-BI-Portal.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03',
    tech: 'Blockchain'
  },
  {
    id: 'security-4',
    category: 'security',
    title: 'OWASP Security Audit',
    description: 'Comprehensive security audit for fintech platforms ensuring OWASP standards.',
    image: '/images/OWASP_Audit.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03',
    tech: 'Security'
  },
  {
    id: 'analytics-2',
    category: 'analytics',
    title: 'Transaction Forecast',
    description: 'Financial forecasting engine for payment rails and crypto exchanges.',
    image: '/images/Transaction-Forecast.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03',
    tech: 'Analytics'
  },
  {
    id: 'blockchain-3',
    category: 'blockchain',
    title: 'Vulnerability Toolkit',
    description: 'Automated security toolkit for smart contract vulnerability detection.',
    image: '/images/Vulnerability-as-Code-Toolkit.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03',
    tech: 'Blockchain'
  },
  {
    id: 'security-5',
    category: 'security',
    title: 'Compliance Checklist',
    description: 'Regulatory compliance engine for payment service providers.',
    image: '/images/Compliance-Checklist-App.jpg',
    demoLink: '#',
    githubLink: 'https://github.com/secbyteX03',
    tech: 'Security'
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
                    <div className="portfolio-category">{project.category} • {project.tech}</div>
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
            View More on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
