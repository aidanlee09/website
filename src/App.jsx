import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.experience-item')
    if (!items.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      { threshold: 0.05 }
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className="navbar">
        <button className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Home">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </button>
        <div className="nav-links">
          <button onClick={() => scrollTo('projects')}>Projects</button>
          <button onClick={() => scrollTo('experience')}>Experience</button>
          <button onClick={() => scrollTo('about')}>About Me</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Aidan Lee</h1>
          <p className="hero-sub">Designer · Creator · Innovator</p>
          <div className="hero-links">
            <a href="https://www.linkedin.com/in/aidantlee/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/aidanlee09" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div>
        </div>
        <button className="scroll-hint" onClick={() => scrollTo('projects')} aria-label="Scroll down">↓</button>
      </section>

      <div className="main-content">
        <section id="projects" className="section">
          <div className="section-inner">
            <h2 className="fade-in">Projects</h2>
            <div className="cards">
              <div className="card card--img card--link" onClick={() => window.open('https://clyvara.org', '_blank', 'noreferrer')}>
                <img src="/projects/clyvara.png" alt="Clyvara" style={{objectPosition: 'center top'}} />
                <p className="card-caption">Clyvara · AI Ed-Tech Platform</p>
              </div>
              <div className="card card--img card--link" onClick={() => window.open('https://devpost.com/software/hachi', '_blank', 'noreferrer')}>
                <img src="/projects/visionmate.png" alt="VisionMate" style={{objectPosition: 'center bottom'}} />
                <p className="card-caption">VisionMate</p>
              </div>
              <div className="card card--img card--link" onClick={() => window.open('https://bhm2025.columbiaspectator.com/', '_blank', 'noreferrer')}>
                <img src="/projects/bhm2025.png" alt="Black History Month 2025 cover" style={{objectPosition: 'center top'}} />
                <p className="card-caption">Columbia Spectator Special Edition</p>
              </div>
              <div className="card card--img card--link" onClick={() => window.open('https://nsop2025.columbiaspectator.com/', '_blank', 'noreferrer')}>
                <img src="/projects/nsop2025.png" alt="NSOP 2025 cover" style={{objectPosition: 'center 30%'}} />
                <p className="card-caption">Columbia Spectator Special Edition</p>
              </div>
            </div>
          </div>
          <button className="scroll-hint section-hint" onClick={() => scrollTo('experience')} aria-label="Scroll to Experience">↓</button>
        </section>

        <section id="experience" className="section">
          <div className="section-inner">
            <h2 className="fade-in">Experience</h2>
            <div className="experience-list">
              <div className="experience-item">
                <img className="experience-logo" src="/logos/capitalone.svg" alt="Capital One" />
                <div className="experience-body">
                  <div className="experience-header">
                    <div>
                      <h3>Software Engineering Intern</h3>
                      <p className="experience-company">Capital One · Enterprise Platform Technology</p>
                    </div>
                    <span className="experience-date">Summer 2026</span>
                  </div>
                  <ul className="experience-desc">
                    <li>Developed functional testing coverage AI tools for internal Java, Python, Node.js, and Go repositories.</li>
                    <li>Scaled tools across multiple lines of business with serverless architecture via AWS Lambda and SAM.</li>
                  </ul>
                </div>
              </div>
              <div className="experience-item">
                <img className="experience-logo" src="/logos/barclays.svg" alt="Barclays" />
                <div className="experience-body">
                  <div className="experience-header">
                    <div>
                      <h3>Software Engineering Intern</h3>
                      <p className="experience-company">Barclays · Credit Trading Technology</p>
                    </div>
                    <span className="experience-date">Summer 2025</span>
                  </div>
                  <ul className="experience-desc">
                    <li>Built API pipeline to ingest vendor insurance holdings data to support client behavior models.</li>
                    <li>Worked alongside credit traders to enhance and resolve features on internal trading platform.</li>
                  </ul>
                </div>
              </div>
              <div className="experience-item">
                <img className="experience-logo experience-logo--dark" src="/logos/nobias.png" alt="Nobias Therapeutics" />
                <div className="experience-body">
                  <div className="experience-header">
                    <div>
                      <h3>Machine Learning Engineering Intern</h3>
                      <p className="experience-company">Nobias Therapeutics</p>
                    </div>
                    <span className="experience-date">Summer 2024</span>
                  </div>
                  <ul className="experience-desc">
                    <li>Engineered a 7 billion parameter genomic foundation model from the ground up.</li>
                    <li>Trained and fine-tuned model on clinical biosamples from Children's Hospital of Philadelphia.</li>
                  </ul>
                </div>
              </div>
              <div className="experience-item">
                <img className="experience-logo experience-logo--dark" src="/logos/nobias.png" alt="Nobias Therapeutics" />
                <div className="experience-body">
                  <div className="experience-header">
                    <div>
                      <h3>Software Engineering Intern</h3>
                      <p className="experience-company">Nobias Therapeutics</p>
                    </div>
                    <span className="experience-date">Summer 2023</span>
                  </div>
                  <ul className="experience-desc">
                    <li>Created algorithmic prediction tools to model 45+ G-proteins and expedite clinical trial analysis.</li>
                    <li>Discovered unclassified G-proteins by integrating topological data analysis with algorithmic prediction.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button className="scroll-hint section-hint" onClick={() => scrollTo('about')} aria-label="Scroll to About Me">↓</button>
        </section>

        <section id="about" className="section">
          <div className="section-inner fade-in about-inner">
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                Hi I'm Aidan! I'm an ambitious and curious developer passionate
                about creating innovative, purposeful software that serves a need.
                I graduated from Columbia Engineering in May 2026 with a B.S. in
                Computer Science and a minor in Applied Mathematics.
              </p>
              <p className="contact-blurb">
                In my freetime, I enjoy playing basketball, trying new food, and making videos. Check out my youtube channel →{' '}
                <a href="https://www.youtube.com/@aidanlee3174" target="_blank" rel="noreferrer" className="yt-link" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </p>
              <p className="contact-blurb">Don't hesitate to reach out —</p>
              <p className="contact-link">Email: aidantzlee@gmail.com</p>
              <p className="contact-link">LinkedIn: linkedin.com/in/aidantlee</p>
            </div>
            <div className="about-photo">
              <img src="/logos/aidanlee.png" alt="Aidan Lee" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
