import ReactDOM from 'react-dom/client'

import { App } from './App'
import { LanguageProvider } from './context/language'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') ?? document.body).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
)
