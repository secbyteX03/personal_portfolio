import { Shield, Network, Settings, Laptop } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Shield,
    title: 'Cybersecurity & Risk Analysis',
    subtitle: 'Threat modelling | Risk dashboards',
    description: 'Vulnerability assessments, secure-by-design architecture, and incident playbooks that reduce operational and financial risk for SMEs.'
  },
  {
    icon: Network,
    title: 'Blockchain & Payment Rails',
    subtitle: 'Smart contracts | Node & integration',
    description: 'Audit-ready smart-contract development and payment-rail integrations (testnet deploys, node setup, and secure payment flows) to protect funds and automate settlements.'
  },
  {
    icon: Settings,
    title: 'Automation & Integrations',
    subtitle: 'Workflows | CI/CD',
    description: 'Lightweight automations and integrations (CI/CD, payment hooks, admin workflows) that eliminate manual work, reduce errors, and speed time-to-market.'
  },
  {
    icon: Laptop,
    title: 'Digital Product & UX Design',
    subtitle: 'Research | Prototyping',
    description: 'User-centred design and accessible prototypes that improve conversions, reduce friction, and make security usable for real customers.'
  }
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <div className="section-header">My Services & Expertise</div>
          <h2 className="services-title">Solutions I Provide</h2>
          <p className="services-intro">
            End-to-end product, automation, and security services for startups and SMEs.
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
