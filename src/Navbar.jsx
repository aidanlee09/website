export default function Navbar({ scrollTo }) {
  return (
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
  )
}
