import { Shield, Wallet, TrendingUp, FileCheck } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Shield,
    title: 'Cybersecurity & Risk Analysis',
    subtitle: 'Threat modeling | Risk assessment',
    description: 'Vulnerability assessments, threat intelligence, and risk analysis to protect financial systems and prevent fraud.'
  },
  {
    icon: Wallet,
    title: 'Blockchain & Payment Security',
    subtitle: 'Smart contracts | Payment rails',
    description: 'Secure blockchain integrations (Stellar, Ethereum) and payment system security to ensure safe, verifiable transactions.'
  },
  {
    icon: TrendingUp,
    title: 'Fraud Prevention',
    subtitle: 'Detection | Prevention systems',
    description: 'Build systems that detect and prevent fraud in real-time, protecting businesses and customers from financial loss.'
  },
  {
    icon: FileCheck,
    title: 'Compliance & Audit',
    subtitle: 'Security audits | Compliance',
    description: 'OWASP security audits, compliance verification, and risk frameworks for financial services and fintech.'
  }
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <div className="section-header">My Expertise</div>
          <h2 className="services-title">What I Do</h2>
          <p className="services-intro">
            Focused on building secure financial systems and preventing fraud in digital transactions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-card__icon">
                <service.icon size={28} />
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <h4 className="service-card__subtitle">{service.subtitle}</h4>
              <p className="service-card__description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
