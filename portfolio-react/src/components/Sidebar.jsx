import { useState, useEffect } from 'react';
import { Home, User, Heart, Settings, Code, Folder, Phone, Linkedin, Twitter, Instagram, Github, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'interests', label: 'Interests', icon: Heart },
  { id: 'services', label: 'Services', icon: Settings },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'portfolio', label: 'Portfolio', icon: Folder },
  { id: 'blog', label: 'Blog', icon: Folder },
  { id: 'contact', label: 'Contact', icon: Phone },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/magretfaith/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/faith_magret', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/magretfaith/', label: 'Instagram' },
  { icon: Github, href: 'https://github.com/secbyteX03', label: 'GitHub' },
];

export default function Sidebar({ onCollapseChange }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (onCollapseChange) {
      onCollapseChange(sidebarCollapsed);
    }
  }, [sidebarCollapsed, onCollapseChange]);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${mobileMenuOpen ? 'open' : ''} ${sidebarCollapsed ? 'collapsed' : ''}`}>

        {/* Collapse Toggle Button */}
        <button
          className="sidebar-collapse-toggle"
          onClick={toggleSidebar}
          aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>

        <div className="sidebar-header">
          <div className="profile-circle">
            <img
              src="/images/sideprofile.png"
              alt="Magret Faith"
              className="profile-image"
              loading="eager"
            />
          </div>
          <div className="profile-name">Magret Faith</div>
          <div className="profile-title">Risk-Focused Security Builder</div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`nav-item ${activeSection === id ? 'active' : ''}`}
              onClick={() => handleNavClick(id)}
            >
              <span className="nav-icon">
                <Icon size={18} />
              </span>
              <span className="nav-label">{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="social-links-sidebar">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
