import { Gamepad2, BookOpen, Music, Dumbbell, Users } from 'lucide-react';
import './Interests.css';

const interests = [
  {
    icon: Gamepad2,
    title: 'Gaming & Strategy',
    subtitle: 'Problem-solving through chess, RPGs and complex puzzles'
  },
  {
    icon: BookOpen,
    title: 'Tech Writing & Blogging',
    subtitle: 'Sharing insights on risk analysis, development workflows & cybersecurity'
  },
  {
    icon: Music,
    title: 'Music & Arts',
    subtitle: 'Drawing creativity from Afrobeats, jazz sessions & live performances'
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Wellness',
    subtitle: 'Staying sharp with gym sessions, yoga practice & mental health routines'
  },
  {
    icon: Users,
    title: 'Tech Community',
    subtitle: 'Empowering others via mentoring, workshops & collaborative hackathons'
  }
];

export default function Interests() {
  return (
    <section className="interests-section" id="interests">
      <div className="container">
        <div className="interests-header">
          <div className="section-header">My Interests</div>
          <h2 className="interests-title">Beyond the Code</h2>
          <p className="interests-subtitle">
            When I&apos;m not securing systems or designing interfaces, you will
            find me exploring these passions that keep me creative, balanced,
            and constantly learning new perspectives.
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
