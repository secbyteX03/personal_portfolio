# Magret Faith Portfolio - React Application

A modern, responsive personal portfolio website built with React and Vite, showcasing skills, projects, and background as a cybersecurity-certified developer and UX technologist.

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

- **React 19** - UI framework with component-based architecture
- **Vite 7** - Next-generation build tooling
- **CSS3** - Custom properties, animations, and responsive design
- **Lucide React** - Icon library
- **Vercel** - Deployment platform
- **Git** - Version control

## Getting Started

### Prerequisites

- Node.js 18+ (for local development)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/secbyteX03/personal_portfolio.git
```

2. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173/
```

### Build for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
portfolio-react/
├── public/
│   ├── images/             # Static images and videos
│   │   ├── magret.jpg      # Profile photo
│   │   └── herovideo.mp4  # Hero background video
│   └── documents/         # PDF documents
│       └── MAGRET FAITH AKINYI CV.pdf
├── src/
│   ├── components/         # React components
│   │   ├── About.jsx      # About section
│   │   ├── Blog.jsx       # Blog section
│   │   ├── Contact.jsx   # Contact form
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Interests.jsx  # Interests section
│   │   ├── Portfolio.jsx # Portfolio gallery
│   │   ├── Services.jsx  # Services section
│   │   ├── Skills.jsx    # Skills visualization
│   │   └── Sidebar.jsx   # Mobile navigation
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md            # This documentation
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Vercel Deployment

**This project is deployed using Vercel:**

✅ Automatic deployments on every push to main branch

✅ Preview deployments for pull requests

✅ Custom domain support

✅ Edge caching and global CDN

### Deployment Steps

1. Push your code to a GitHub repository

2. Go to [Vercel](https://vercel.com) and sign in

3. Click "Add New..." and select "Project"

4. Import your GitHub repository

5. Configure the following settings:
   - Framework Preset: **Vite**
   - Build Command: **npm run build** (or leave empty)
   - Output Directory: **dist** (or leave empty)

6. Click "Deploy"

## Key Design Elements

### CSS Variables Theme
```css
:root {
  --primary-green: #00ff88;
  --bg-primary: #0a0a0a;
  --text-primary: #ffffff;
  --bg-secondary: #141414;
  --accent-green: #00cc6a;
}
```

### Component Structure
```jsx
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Hero content */}
      </div>
    </section>
  );
}
```

## Contact

- **Email**: magretfaith@example.com
- **LinkedIn**: [magretfaith](https://www.linkedin.com/in/magretfaith/)
- **Twitter**: [@magretfaith](https://twitter.com/magretfaith)

---

**Developed by Magret Faith**  
*Cyber-Savvy Technologist & UX Designer*  
Nairobi, Kenya • 2025
