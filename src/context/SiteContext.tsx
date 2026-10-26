import { createContext, useCallback, useContext, useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react'
import { routeFromHash, type Route } from '../routes'
import { readPref, writePref } from '../lib/storage'

export type Lens = 'recruiter' | 'designer'

interface NavigateOptions {
  focus?: boolean
}

interface SiteState {
  route: Route
  lens: Lens
  designerSummary: boolean
  /** Bumped on every in-app navigation so pages can react (scroll, focus). */
  navId: number
  focusOnNav: boolean
  navigate: (route: Route, opts?: NavigateOptions) => void
  setLens: (lens: Lens) => void
  toggleSummary: () => void
}

const SiteContext = createContext<SiteState | null>(null)

const LENS_KEY = 'kb-lens'

/** Case-study summaries are the recruiter view; full process pages are the designer view. */
function lensForRoute(route: Route, fallback: Lens): Lens {
  if (route === 'connx' || route === 'telmy') return 'recruiter'
  if (route === 'connx-process' || route === 'telmy-process') return 'designer'
  return fallback
}

function initialLens(): Lens {
  const saved = readPref(LENS_KEY)
  return saved === 'designer' || saved === 'recruiter' ? saved : 'recruiter'
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>(() => routeFromHash(location.hash))
  const [lens, setLensState] = useState<Lens>(() => lensForRoute(routeFromHash(location.hash), initialLens()))
  const [designerSummary, setDesignerSummary] = useState(false)
  const [nav, setNav] = useState({ id: 0, focus: false })

  const enterRoute = useCallback((next: Route, focus: boolean) => {
    setRoute(next)
    setLensState((current) => {
      const l = lensForRoute(next, current)
      writePref(LENS_KEY, l)
      return l
    })
    setDesignerSummary(false)
    setNav((n) => ({ id: n.id + 1, focus }))
  }, [])

  const navigate = useCallback(
    (next: Route, opts?: NavigateOptions) => {
      const url = next === 'home' ? location.pathname + location.search : `#${next}`
      history.pushState(null, '', url)
      enterRoute(next, !!opts?.focus)
    },
    [enterRoute],
  )

  useEffect(() => {
    const onPop = () => enterRoute(routeFromHash(location.hash), false)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [enterRoute])

  const setLens = useCallback((l: Lens) => {
    setLensState(l)
    setDesignerSummary(false)
    writePref(LENS_KEY, l)
  }, [])

  const toggleSummary = useCallback(() => setDesignerSummary((s) => !s), [])

  const value = useMemo<SiteState>(
    () => ({ route, lens, designerSummary, navId: nav.id, focusOnNav: nav.focus, navigate, setLens, toggleSummary }),
    [route, lens, designerSummary, nav, navigate, setLens, toggleSummary],
  )
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

export function useSite(): SiteState {
  const ctx = useContext(SiteContext)
  if (!ctx) throw new Error('useSite must be used inside <SiteProvider>')
  return ctx
}

function lensButtonStyle(on: boolean): CSSProperties {
  return {
    minHeight: 36,
    padding: '0 16px',
    border: 0,
    borderRadius: 999,
    fontFamily: 'inherit',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background 200ms, color 200ms',
    background: on ? 'var(--ink)' : 'transparent',
    color: on ? 'var(--on-ink)' : 'var(--ink2)',
  }
}

export interface LensView {
  isRec: boolean
  isDes: boolean
  showSummary: boolean
  hideSummary: boolean
  recBtn: CSSProperties
  desBtn: CSSProperties
  connxHref: Route
  telmyHref: Route
  setRec: () => void
  setDes: () => void
  toggleSummary: () => void
}

/** Everything the page markup needs to switch between the recruiter and designer reading. */
export function useLensView(): LensView {
  const { lens, designerSummary, setLens, toggleSummary } = useSite()
  const isRec = lens === 'recruiter'
  const showSummary = isRec || designerSummary
  return {
    isRec,
    isDes: !isRec,
    showSummary,
    hideSummary: !showSummary,
    recBtn: lensButtonStyle(isRec),
    desBtn: lensButtonStyle(!isRec),
    connxHref: isRec ? 'connx' : 'connx-process',
    telmyHref: isRec ? 'telmy' : 'telmy-process',
    setRec: () => setLens('recruiter'),
    setDes: () => setLens('designer'),
    toggleSummary,
  }
}
