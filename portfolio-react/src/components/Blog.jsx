import React from 'react'
import './Blog.css'

const blogPosts = [
  {
    id: 1,
    category: 'Cybersecurity',
    title: 'Building Secure Authentication Systems in 2024',
    excerpt: 'Exploring modern authentication patterns, from passwordless flows to multi-factor security, and how to implement them without compromising user experience.',
    date: 'Nov 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1a16a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    id: 2,
    category: 'UX Design',
    title: 'Accessibility-First Design for Financial Applications',
    excerpt: 'How to design financial interfaces that are both secure and accessible, ensuring compliance with WCAG standards while maintaining robust security.',
    date: 'Nov 8, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1559063664-6188241cda3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    id: 3,
    category: 'Blockchain',
    title: 'Smart Contract Security: Common Vulnerabilities',
    excerpt: 'A deep dive into most common smart contract vulnerabilities and how to prevent them, with real-world examples from DeFi security audits.',
    date: 'Oct 28, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1639762681055-ee8a3d0a56a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    id: 4,
    category: 'Web Development',
    title: 'Performance Optimization for Secure Web Apps',
    excerpt: 'Balancing security measures with application performance, and techniques to maintain fast load times while implementing robust security protocols.',
    date: 'Oct 15, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1467232692858-6e11b9e5b0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    id: 5,
    category: 'Risk Management',
    title: 'Implementing Zero Trust Architecture in Web Applications',
    excerpt: 'Practical steps to implement zero trust security models in modern web applications, from authentication to data protection strategies.',
    date: 'Oct 2, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1560472357041-6e3748b3a5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    id: 6,
    category: 'DevOps',
    title: 'Automating Security in CI/CD Pipelines',
    excerpt: 'How to integrate security testing and vulnerability scanning into your development workflow without slowing down deployment cycles.',
    date: 'Sep 20, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1605858434052-76995625a7ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    link: '#'
  }
]

function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="blog-header">
          <div className="section-header">Latest Posts</div>
          <h2 className="blog-title">Blog & Insights</h2>
          <p className="blog-intro">
            Thoughts on cybersecurity, UX design, web development, and the intersection of technology and human experience.
            Sharing insights from building secure digital solutions.
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
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-footer">
          <a href="#" className="blog-view-all">
            View All Articles <i className="fas fa-arrow-right"></i>
          </a>
          <div className="blog-social">
            <span>Follow my writing:</span>
            <a href="https://medium.com/@faithmagret" className="blog-social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-medium"></i>
            </a>
            <a href="https://dev.to/faithmagret" className="blog-social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-dev"></i>
            </a>
            <a href="https://linkedin.com/in/magretfaith" className="blog-social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
