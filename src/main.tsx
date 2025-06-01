import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { LanguageProvider } from './contexts/LanguageContext'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
    <App />
    </LanguageProvider>
  </StrictMode>,
)
