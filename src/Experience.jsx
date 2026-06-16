import { useEffect } from 'react'

export default function Experience({ scrollTo }) {
  useEffect(() => {
    const items = document.querySelectorAll('.experience-item')
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
                  <p className="experience-company">Nobias Therapeutics (Series A)</p>
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
                  <p className="experience-company">Nobias Therapeutics (Series A)</p>
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
  )
}
