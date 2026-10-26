import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { OverlayProvider } from './context/OverlayContext'
import { SiteProvider } from './context/SiteContext'
import './styles/global.css'
import './styles/patterns.css'
import './styles/responsive.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteProvider>
      <OverlayProvider initialResumeOpen={location.hash === '#resume'}>
        <App />
      </OverlayProvider>
    </SiteProvider>
  </StrictMode>,
)
