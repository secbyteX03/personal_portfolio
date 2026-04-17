# Magret Faith - Portfolio Website
<img width="1300" height="683" alt="portfolio" src="https://github.com/user-attachments/assets/19ecfdb4-bbea-4284-ad64-262b35d81ff4" />

A responsive personal portfolio website showcasing my skills, projects, and background as a cybersecurity-certified developer and UX technologist.
## 🌟 Live Demo
Experience the portfolio live:  
[![Open in Vercel](https://img.shields.io/badge/Open_in-Vercel-000000?logo=vercel)](https://magretfaith.vercel.app)
## Features

- **Modern Dark Theme** with vibrant green accents
- **Responsive Design** that works on all device sizes
- **Interactive Portfolio Gallery** with filtering capabilities
- **Skills Visualization** with animated progress circles
- **Contact Form** for easy communication
- **Mobile Navigation** with hamburger menu

## Technologies Used

- **React** - UI framework with component-based architecture
- **Vite** - Next-generation build tooling
- **CSS3** - Custom properties, animations, and responsive design
- **Font Awesome** - Vector icons
- **Vercel** - Deployment platform
- **Git** - Version control

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (for local development)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/secbyteX03/portfolio.git
```

2. Install dependencies:
```bash
cd portfolio/portfolio-react
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open in your browser:
Navigate to http://localhost:5173/

## Project Structure

```
portfolio/
├── portfolio-react/           # React + Vite application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── About.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Interests.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── App.jsx          # Main App component
│   │   ├── main.jsx         # Entry point
│   │   └── index.css       # Global styles
│   ├── public/
│   │   ├── images/         # Portfolio images
│   │   └── documents/      # CV and documents
├── index.html              # Original static HTML version
├── images/                 # Project images
├── documents/              # Supporting files
│   └── MAGRET FAITH AKINYI CV.pdf
└── README.md               # This documentation
```
## Vercel Deployment
**This project is deployed using Vercel with the following configuration:**

✅ Continuous Deployment - Automatically deploys when pushing to main branch

✅ Custom Domain - Professional domain name (optional)

✅ HTTPS - Secure connections enabled by default

✅ Preview Deployments - Preview changes before production

**Deployment Steps**
- Push your code to a GitHub repository

- Log in to Vercel and select "Add New..."

- Connect your GitHub account and select the repository

- Configure build settings (Framework Preset: Vite)

- Click "Deploy"

## Key Design Elements

- **CSS Variables** for consistent theming:
```css
:root {
  --primary-green: #00ff88;
  --bg-primary: #0a0a0a;
  --text-primary: #ffffff;
  /* ...and more variables */
}
```

- **Responsive Grid Layouts** using CSS Grid:
```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
}
```

- **Interactive Animations** with CSS keyframes:
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## Future Improvements

- Add project details modal
- Implement form submission functionality
- Add light/dark mode toggle
- Include blog section for tech writing

## Contact


<hr/>
<h3 align="left">Let's connect and collaborate!</h3>
<p align="left">
<a href="https://twitter.com/magretfaith" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="magretfaith" height="30" width="40" /></a>
<a href="https://linkedin.com/in/https://www.linkedin.com/in/magretfaith/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/magretfaith/" height="30" width="40" /></a>
<a href="https://kaggle.com/magretfaith" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/kaggle.svg" alt="magretfaith" height="30" width="40" /></a>
<a href="https://instagram.com/magretfaith" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="magretfaith" height="30" width="40" /></a>
<a href="https://medium.com/@magretfaith" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="@magretfaith" height="30" width="40" /></a>
</p>

**Developed by Magret Faith**  
*Cyber-Savvy Technologist & UX Designer*  
Nairobi, Kenya • 2025
