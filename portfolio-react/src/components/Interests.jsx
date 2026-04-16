import { Bitcoin, Globe, BookOpen, Users } from 'lucide-react';
import './Interests.css';

const interests = [
  {
    icon: Bitcoin,
    title: 'Crypto & DeFi',
    subtitle: 'Exploring decentralized finance, Bitcoin security, and blockchain innovation'
  },
  {
    icon: Globe,
    title: 'Financial Inclusion',
    subtitle: 'How blockchain can enable safe transactions for the unbanked'
  },
  {
    icon: BookOpen,
    title: 'Tech Reading',
    subtitle: 'Staying current with cybersecurity trends and risk modeling'
  },
  {
    icon: Users,
    title: 'Community',
    subtitle: 'Mentoring and helping others break into tech'
  }
];

export default function Interests() {
  return (
    <section className="interests-section" id="interests">
      <div className="container">
        <div className="interests-header">
          <div className="section-header">What Drives Me</div>
          <h2 className="interests-title">Beyond Security</h2>
          <p className="interests-subtitle">
            My passions outside of cybersecurity that shape my approach to
            building secure, trustworthy financial systems.
          </p>
        </div>

        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div
              key={interest.title}
              className="interest-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="interest-card__icon">
                <interest.icon size={20} />
              </div>
              <h3 className="interest-card__title">{interest.title}</h3>
              <p className="interest-card__subtitle">{interest.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
