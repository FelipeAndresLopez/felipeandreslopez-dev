// external
import { useContext, useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import ReactGA from 'react-ga4'

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
  useEffect(() => {
    ReactGA.initialize('G-5MKJX1LVPC')
  }, [])

  return (
    <ThemeProvider>
      <IntlProvider messages={translations} locale={USER_LANGUAGE} defaultLocale={USER_LANGUAGE}>
        <div className='top-0 bottom-0 min-h-screen w-full bkg-base bg-bkg-lm dark:bg-bkg-dm fixed z-[-1]' />
        <div className='progress-bar bg-secondary-lm dark:bg-secondary-dm'></div>
        <Header />
        <main className='px-8 sm:px-0 py-12 md:pt-20 scroll-m-20 w-full mx-auto lg:max-w-4xl md:max-w-2xl flex flex-col gap-8'>
          <Home />
          <Experience workExperiences={workExperiences} />
          <Education educationTitles={educationTitles} />
          <AboutMe />
          <Footer />
        </main>
      </IntlProvider>
    </ThemeProvider>
  )
}
