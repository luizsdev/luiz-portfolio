import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { About } from './components/About'
import { ContactMe } from './components/ContactMe'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

function App() {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className="App bg-base-200 ">
      <Header />
      <Hero />
      <About />
      <div className="py-16 lg:py-0" />
      <Projects />
      <div className="pt-32 lg:py-16" />
      <ContactMe />
      <div className="pt-10 lg:pt-10" />
      <Footer />
    </div>
  )
}

export default App
