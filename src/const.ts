import { type LanguageType } from './types'

export const USER_LANGUAGE = navigator.language as LanguageType

export const LANGUAGES = {
  SPANISH: 'es',
  ENGLISH: 'en'
}

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
}
export const USER_THEME = window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT
