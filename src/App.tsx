import { useEffect, useLayoutEffect, useRef, type ComponentType, type MouseEvent } from 'react'
import { Lightbox } from './components/Lightbox'
import { ResumeViewer } from './components/ResumeViewer'
import { ThemeSlider } from './components/ThemeSlider'
import { useSite } from './context/SiteContext'
import { useScrollSpy } from './hooks/useScrollSpy'
import Connx from './pages/Connx'
import ConnxProcess from './pages/ConnxProcess'
import Home from './pages/Home'
import Telmy from './pages/Telmy'
import TelmyProcess from './pages/TelmyProcess'
import { TITLES, type Route } from './routes'

const PAGES: Record<Route, ComponentType> = {
  home: Home,
  connx: Connx,
  'connx-process': ConnxProcess,
  telmy: Telmy,
  'telmy-process': TelmyProcess,
}

export default function App() {
  const { route, lens, designerSummary, navId, focusOnNav } = useSite()
  const appRef = useRef<HTMLDivElement>(null)
  const Page = PAGES[route]

  useEffect(() => {
    document.title = TITLES[route]
  }, [route])

  // Each navigation starts at the top of the new page (the first load keeps the browser's position).
  useLayoutEffect(() => {
    if (navId === 0) return
    window.scrollTo(0, 0)
    if (focusOnNav) appRef.current?.focus({ preventScroll: true })
  }, [navId, focusOnNav])

  useScrollSpy(appRef, [route, lens, designerSummary])

  function skipToContent(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    appRef.current?.focus()
  }

  return (
    <>
      <a className="skip" href="#app" onClick={skipToContent}>
        Skip to content
      </a>
      {/* Keyed by route so the fade-in replays on every page change. */}
      <div id="app" key={route} ref={appRef} tabIndex={-1} className={`route-${route}`}>
        <Page />
      </div>
      <ThemeSlider />
      <Lightbox />
      <ResumeViewer />
    </>
  )
}
