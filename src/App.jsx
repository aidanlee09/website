import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className="navbar">
        <span className="nav-brand">AL</span>
        <div className="nav-links">
          <button onClick={() => scrollTo('about')}>About Me</button>
          <button onClick={() => scrollTo('projects')}>Projects</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Aidan Lee</h1>
          <p className="hero-sub">Developer · Designer · Builder</p>
        </div>
        <div className="scroll-hint">↓</div>
      </section>

      <div className="main-content">
        <section id="about" className="section">
          <div className="section-inner fade-in">
            <h2>About Me</h2>
            <p>
              I'm a developer passionate about building clean, thoughtful digital
              experiences. I enjoy working across the full stack and crafting
              interfaces that feel natural and intuitive.
            </p>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-inner">
            <h2 className="fade-in">Projects</h2>
            <div className="cards">
              <div className="card fade-in">
                <h3>Project One</h3>
                <p>A brief description of what this project does and the technologies used to build it.</p>
              </div>
              <div className="card fade-in">
                <h3>Project Two</h3>
                <p>A brief description of what this project does and the technologies used to build it.</p>
              </div>
              <div className="card fade-in">
                <h3>Project Three</h3>
                <p>A brief description of what this project does and the technologies used to build it.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-inner fade-in">
            <h2>Contact</h2>
            <p>Interested in working together or just want to say hi? Reach out below.</p>
            <a href="mailto:hello@aidantlee.com" className="contact-link">
              hello@aidantlee.com
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
