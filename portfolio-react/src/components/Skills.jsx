import './Skills.css';

// SimpleIcons CDN slugs — always returns the correct official brand SVG
// https://cdn.simpleicons.org/[slug]/[hex-color]
const ICON_SLUGS = {
  Python: { slug: 'python', color: '3776AB' },
  Solidity: { slug: 'solidity', color: '818CF8' },
  Ethereum: { slug: 'ethereum', color: '627EEA' },
  Stellar: { slug: 'stellar', color: '08B5E5' },
  Bitcoin: { slug: 'bitcoin', color: 'F7931A' },
  Docker: { slug: 'docker', color: '2496ED' },
  Linux: { slug: 'linux', color: 'FCC624' },
  'Security Auditing': { slug: 'shield', color: '00ff88' },
  'Risk Analysis': { slug: 'chart', color: 'FF6B6B' },
  'OWASP': { slug: 'lock', color: '003A70' },
  'CI/CD': { slug: 'githubactions', color: '2088FF' },
  'Python (Sec)': { slug: 'pythonsecurity', color: '3776AB' },
};

function BrandIcon({ name, size = 32 }) {
  const icon = ICON_SLUGS[name];
  if (!icon) return null;
  return (
    <img
      src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color}`}
      width={size}
      height={size}
      alt={name}
      style={{ display: 'block' }}
      onError={(e) => {
        // Fallback if CDN fails
        e.target.style.display = 'none';
        const parent = e.target.parentElement;
        if (parent) {
          parent.innerHTML = `<span style="color: #${icon.color}; font-weight: bold; font-size: ${size / 2}px;">${name}</span>`;
        }
      }}
    />
  );
}

const skills = [
  { name: 'Python', level: 'Proficient' },
  { name: 'Solidity', level: 'Intermediate' },
  { name: 'Ethereum', level: 'Intermediate' },
  { name: 'Stellar', level: 'Beginner' },
  { name: 'Bitcoin', level: 'Beginner' },
  { name: 'Docker', level: 'Intermediate' },
  { name: 'Linux', level: 'Intermediate' },
  { name: 'Security Auditing', level: 'Intermediate' },
  { name: 'Risk Analysis', level: 'Proficient' },
  { name: 'OWASP', level: 'Intermediate' },
  { name: 'CI/CD', level: 'Intermediate' },
  { name: 'Python (Sec)', level: 'Intermediate' },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-header">
          <div className="section-header">Skills & Technologies</div>
          <h2 className="skills-title">Security & Blockchain</h2>
          <p className="skills-intro">
            Technologies I use to build secure systems, analyze risk, and develop blockchain solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => {
            const iconDef = ICON_SLUGS[skill.name];
            const color = iconDef ? `#${iconDef.color}` : '#ffffff';
            return (
              <div key={skill.name} className="skill-card">
                <div className="skill-card__icon" style={{ '--skill-color': color }}>
                  <BrandIcon name={skill.name} size={32} />
                </div>
                <div className="skill-card__content">
                  <h4 className="skill-card__name">{skill.name}</h4>
                  <span className={`skill-card__level skill-card__level--${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}