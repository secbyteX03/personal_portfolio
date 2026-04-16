import React from 'react'
import { Linkedin, ArrowRight, PenLine } from 'lucide-react'
import './Blog.css'

const blogPosts = [
  {
    id: 1,
    category: 'Fraud Prevention',
    title: 'Building Real-Time Fraud Detection for Payment Systems',
    excerpt: 'How to implement effective fraud detection systems that protect customers without adding friction.',
    date: 'Nov 15, 2024',
    readTime: '6 min read',
    image: '/images/Fraud-Dashboard.jpg',
    link: '#'
  },
  {
    id: 2,
    category: 'Blockchain',
    title: 'Stellar vs Ethereum: Choosing the Right Blockchain for Payments',
    excerpt: 'A practical comparison of Stellar and Ethereum for secure, low-cost payment systems.',
    date: 'Nov 8, 2024',
    readTime: '7 min read',
    image: '/images/infrastructure-as-Code-Demo.jpg',
    link: '#'
  },
  {
    id: 3,
    category: 'Risk Analysis',
    title: 'Applying Actuarial Science to Cybersecurity Risk',
    excerpt: 'How my background in Actuarial Science helps me think about security risks and system vulnerabilities.',
    date: 'Oct 28, 2024',
    readTime: '5 min read',
    image: '/images/Risk-BI-Portal.jpg',
    link: '#'
  },
  {
    id: 4,
    category: 'Smart Contracts',
    title: 'Smart Contract Security: Common Vulnerabilities',
    excerpt: 'A deep dive into most common smart contract vulnerabilities in DeFi applications.',
    date: 'Oct 15, 2024',
    readTime: '6 min read',
    image: '/images/Vulnerability-as-Code-Toolkit.jpg',
    link: '#'
  },
  {
    id: 5,
    category: 'Threat Intel',
    title: 'Modern Threat Vectors in Digital Payments',
    excerpt: 'Understanding the evolving threat landscape in digital payments.',
    date: 'Oct 2, 2024',
    readTime: '5 min read',
    image: '/images/IoT-threat-Simulator.jpg',
    link: '#'
  },
  {
    id: 6,
    category: 'Blockchain',
    title: 'Bitcoin Security Best Practices for Businesses',
    excerpt: 'Essential security practices for businesses accepting Bitcoin and cryptocurrencies.',
    date: 'Sep 20, 2024',
    readTime: '4 min read',
    image: '/images/mpesa-fraud-alert.jpg',
    link: '#'
  }
]

function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="blog-header">
          <div className="section-header">Latest Insights</div>
          <h2 className="blog-title">Blog & Writing</h2>
          <p className="blog-intro">
            Thoughts on cybersecurity, blockchain security, fraud prevention, and building trustworthy financial systems.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.category} loading="lazy" />
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title-card">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={post.link} className="blog-link">
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-footer">
          <a href="#" className="blog-view-all">
            View All Articles <ArrowRight size={16} />
          </a>
          <div className="blog-social">
            <span>Follow my writing:</span>
            <a href="https://medium.com/@faithmagret" className="blog-social-link" target="_blank" rel="noopener noreferrer">
              <PenLine size={18} />
            </a>
            <a href="https://linkedin.com/in/magretfaith" className="blog-social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
