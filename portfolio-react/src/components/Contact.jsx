import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, Send } from 'lucide-react';
import './Contact.css';

const contactDetails = [
  { icon: Mail, label: 'faithmagret10@gmail.com', href: 'mailto:faithmagret10@gmail.com' },
  { icon: Phone, label: '(+254) 758 343 080', href: 'tel:+254758343080' },
  { icon: MapPin, label: 'Nairobi, Kenya', href: '#' }
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/magretfaith/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/faith_magret', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/magretfaith/', label: 'Instagram' },
  { icon: Github, href: 'https://github.com/secbyteX03', label: 'GitHub' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage('');

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setFormMessage('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <footer className="contact-footer" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="section-header">Contact</div>
            <h3>Let&apos;s Work Together</h3>
            <p>
              I&apos;m passionate about cybersecurity, digital safety, and risk-driven solutions. Let&apos;s collaborate to build
              secure, innovative tech.
            </p>

            <div className="contact-details">
              {contactDetails.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} className="contact-item">
                  <div className="contact-icon">
                    <Icon size={18} />
                  </div>
                  <span>{label}</span>
                </a>
              ))}
            </div>

            <div className="contact-social">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {formMessage && (
              <div className="form-message success">{formMessage}</div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                maxLength={100}
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                minLength={5}
                maxLength={200}
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={2000}
                rows={5}
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
