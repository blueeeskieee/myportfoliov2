import { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

export default function App() {

  const [accent, setAccent] = useState('#6d4aff')
  const [radius, setRadius] = useState(18)

  useEffect(() => {
    document.documentElement.style.setProperty('--p', accent)
  }, [accent])

  useEffect(() => {
    document.documentElement.style.setProperty('--r', radius + 'px')
  }, [radius])

  return (
    <>
      <div className="wrap">
        <Nav />
        <Hero accent={accent} setAccent={setAccent} radius={radius} setRadius={setRadius} />
      </div>
      <Work />
      <Skills />
      <About />
      <Contact />
    </>
  )
}
