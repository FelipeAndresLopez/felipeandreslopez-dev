// external
import { useEffect } from 'react'
import ReactGA from 'react-ga'

// pages
import Home from './pages/Home/Home.tsx'
import Experience from './pages/Experience/Experience.tsx'
import Education from './pages/Education/Education.tsx'
import AboutMe from './pages/AboutMe/AboutMe.tsx'

// components
import { Footer } from './components/Footer/Footer.tsx'

// data
import workExperiences from './api/work-experience.json'
import educationTitles from './api/education.json'

const App = (): JSX.Element => {
  useEffect(() => {
    ReactGA.initialize('UA-172560430-1')
    // To report page view
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <>
      <div className='top-0 bottom-0 min-h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgb(34,126,168),rgb(0,42,61))]'>
        <main className='section py-16 md:pt-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl flex flex-col gap-8'>
          <Home />
          <Experience workExperiences={workExperiences} />
          <Education educationTitles={educationTitles} />
          <AboutMe />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App