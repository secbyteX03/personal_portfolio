import { useState } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Interests from './components/Interests'
import Services from './components/Services'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <>
      <Sidebar onCollapseChange={setSidebarCollapsed} />
      <main className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Hero />
        <About />
        <Interests />
        <Services />
        <Skills />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </>
  )
}

export default App
