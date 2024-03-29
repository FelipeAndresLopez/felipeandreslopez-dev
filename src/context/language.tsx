// external
import { createContext, useState } from 'react'

// const
import { LANGUAGES, USER_LANGUAGE } from '@/const'

// types
import { type LanguageContextType, type LanguageType } from '@/types'

// translations
import englishTranslations from '../lang/en-US.json'
import spanishTranslations from '../lang/es.json'

const initialState: LanguageContextType = {
  language: USER_LANGUAGE,
  setLanguage: () => { },
  translations: {}
}

export const LanguageContext = createContext(initialState)

interface Props {
  children: React.ReactNode
}

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>(USER_LANGUAGE)
  const isSpanish = language === LANGUAGES.SPANISH
  const translations = isSpanish ? spanishTranslations : englishTranslations

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}
