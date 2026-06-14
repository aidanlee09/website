export default function About() {
  return (
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
  )
}
