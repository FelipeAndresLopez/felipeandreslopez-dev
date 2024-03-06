// external
import { createContext, useState } from 'react'

// const
import { USER_THEME } from '@/const'

// types
import { type ThemeContextType, type ThemeType } from '@/types'

const initialState: ThemeContextType = {
  theme: USER_THEME,
  setTheme: () => { }
}

export const ThemeContext = createContext(initialState)

interface Props {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(USER_THEME)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
