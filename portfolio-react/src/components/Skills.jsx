import './Skills.css';

// SimpleIcons CDN slugs — always returns the correct official brand SVG
// https://cdn.simpleicons.org/[slug]/[hex-color]
const ICON_SLUGS = {
  JavaScript: { slug: 'javascript', color: 'F7DF1E' },
  CSS3: { slug: 'css3', color: '1572B6' },
  HTML5: { slug: 'html5', color: 'E34F26' },
  React: { slug: 'react', color: '61DAFB' },
  Python: { slug: 'python', color: '3776AB' },
  Solidity: { slug: 'solidity', color: '818CF8' },
  GitHub: { slug: 'github', color: 'e2e8f0' },
  Docker: { slug: 'docker', color: '2496ED' },
  Linux: { slug: 'linux', color: 'FCC624' },
  'CI/CD': { slug: 'githubactions', color: '2088FF' },
  'Blockchain SDKs': { slug: 'ethereum', color: '00ff88' },
  'Security Tools': { slug: 'letsencrypt', color: '003A70' },
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
  { name: 'JavaScript', level: 'Proficient' },
  { name: 'CSS3', level: 'Proficient' },
  { name: 'HTML5', level: 'Proficient' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'Solidity', level: 'Intermediate' },
  { name: 'GitHub', level: 'Proficient' },
  { name: 'Docker', level: 'Intermediate' },
  { name: 'Linux', level: 'Intermediate' },
  { name: 'CI/CD', level: 'Intermediate' },
  { name: 'Blockchain SDKs', level: 'Intermediate' },
  { name: 'Security Tools', level: 'Intermediate' },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-header">
          <div className="section-header">Skills &amp; Technologies</div>
          <h2 className="skills-title">Core Technologies</h2>
          <p className="skills-intro">
            Technologies I use to design, build, and secure digital systems, from risk modeling to blockchain
            infrastructure.
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