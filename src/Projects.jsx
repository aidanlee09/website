import { useEffect } from 'react'

export default function Projects({ scrollTo }) {
  useEffect(() => {
    const items = document.querySelectorAll('.card')
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
      { threshold: 0.1 }
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (
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
  )
}
