import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Projects from './Projects'
import Experience from './Experience'
import About from './About'

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <div className="main-content">
        <Projects scrollTo={scrollTo} />
        <Experience scrollTo={scrollTo} />
        <About />
      </div>
    </>
  )
}

export default App
