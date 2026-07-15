import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/outfit/500.css'
import '@fontsource/outfit/700.css'
import '@fontsource/outfit/800.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import './index.css'
import App from './App.tsx'
import OnboardPage from './components/OnboardPage.tsx'

// Zero-dependency routing: the SPA serves index.html for every path
// (vercel.json rewrite), and the onboarding flow is the only second page.
const isOnboard = window.location.pathname.replace(/\/+$/, '') === '/list-your-business'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isOnboard ? <OnboardPage /> : <App />}
  </StrictMode>,
)
