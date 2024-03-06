// TODO: refactor
// import ReactGA from 'react-ga'
// external
import { useContext } from 'react'
import { IntlProvider } from 'react-intl'

// pages
import Home from './pages/Home/Home.tsx'
import Experience from './pages/Experience/Experience.tsx'
import Education from './pages/Education/Education.tsx'
import AboutMe from './pages/AboutMe/AboutMe.tsx'

// components
import { Footer } from './components/Footer/Footer.tsx'
import { Header } from './components/Header/Header.tsx'

// data
import workExperiences from './api/work-experience.json'
import educationTitles from './api/education.json'

// const or utils
import { USER_LANGUAGE } from './const.ts'

// context
import { ThemeProvider } from './context/theme.tsx'
import { LanguageContext } from './context/language.tsx'

export const App: React.FC = () => {
  const { translations } = useContext(LanguageContext)
  // TODO: fix this
  // useEffect(() => {
  //   ReactGA.initialize('UA-172560430-1')
  //   // To report page view
  //   ReactGA.pageview(window.location.pathname + window.location.search)
  // }, [])

  return (
    <ThemeProvider>
      <IntlProvider messages={translations} locale={USER_LANGUAGE} defaultLocale={USER_LANGUAGE}>
        <div className='top-0 bottom-0 min-h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgb(255,255,255),rgb(255,252,240))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgb(34,126,168),rgb(0,42,61))]'>
          <Header />
          <main className='px-8 sm:px-0 py-16 md:pt-36 scroll-m-20 w-full mx-auto lg:max-w-4xl md:max-w-2xl flex flex-col gap-8'>
            <Home />
            <Experience workExperiences={workExperiences} />
            <Education educationTitles={educationTitles} />
            <AboutMe />
          </main>
          <Footer />
        </div>
      </IntlProvider>
    </ThemeProvider>
  )
}
