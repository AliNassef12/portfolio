import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Languages, Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'

const sectionIds = [
  'home',
  'about',
  'education',
  'certifications',
  'skills',
  'experience',
  'projects',
  'languages',
  'contact',
]

function App() {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(sectionIds)

  return (
    <div className="min-h-screen bg-mist-100 text-navy-900 dark:bg-navy-900 dark:text-mist-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} activeSection={activeSection} />
      <main>
        {/* Ali Nassef: recruiter-friendly section order. */}
        <Hero />
        <About />
        <Education />
        <Achievements />
        <Skills />
        <Experience />
        <Projects />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
