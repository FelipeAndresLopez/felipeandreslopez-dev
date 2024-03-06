export interface TimelineEvent {
  id: string
  date: string
  company: string
  title: string
  description: string
  list?: List[]
}

export interface ListItem {
  id: string
  name: string
}

export type ThemeType = THEMES.LIGHT | THEMES.DARK

export type LanguageType = LANGUAGES.SPANISH | LANGUAGES.ENGLISH

export interface ThemeContextType {
  theme: ThemeType
  setTheme: Dispatch<SetStateAction<ThemeType>>
}

export interface LanguageContextType {
  language: LanguageType
  setLanguage: Dispatch<SetStateAction<LanguageType>>
  translations: Record<string, string>
}
