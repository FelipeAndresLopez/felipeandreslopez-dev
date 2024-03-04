import { useEffect, useState } from 'react'

// translations
import en from '../lang/en-US.json'
import es from '../lang/es.json'
import { USER_LANGUAGE } from '../const'

export const useLanguage = (): { translations: Record<string, string> } => {
  const [translations, setTranslations] = useState({})

  useEffect(() => {
    if (USER_LANGUAGE.includes('es')) {
      setTranslations(es)
    } else {
      setTranslations(en)
    }
  }, [])

  return {
    translations
  }
}
