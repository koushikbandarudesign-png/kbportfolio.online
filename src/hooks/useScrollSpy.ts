import { useEffect, type RefObject } from 'react'

// Both navs only toggle aria-current / data-onband / display on links React doesn't
// control those attributes for, so direct DOM updates here don't fight rendering.

const HOME_SECTIONS = ['top', 'work', 'principles', 'references', 'about', 'contact']
const HOME_LINE = 0.35
const CASE_LINE = 0.3

function atPageEnd(): boolean {
  return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
}

function updateHomeRail(root: HTMLElement): void {
  let current = 'top'
  HOME_SECTIONS.forEach((id) => {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= window.innerHeight * HOME_LINE) current = id
  })
  if (atPageEnd()) current = 'contact'
  const links = Array.from(root.querySelectorAll<HTMLAnchorElement>('nav[aria-label="Sections"] a'))
  links.forEach((a) => {
    if (a.getAttribute('href') === `#${current}`) a.setAttribute('aria-current', 'true')
    else a.removeAttribute('aria-current')
  })
  // Links floating over the dark principles band switch to light ink.
  const band = document.getElementById('principles')?.getBoundingClientRect()
  const railEls = [root.querySelector<HTMLElement>('header > div > a[href="#top"]'), ...links]
  railEls.forEach((el) => {
    if (!el) return
    const b = el.getBoundingClientRect()
    const mid = (b.top + b.bottom) / 2
    if (band && mid > band.top && mid < band.bottom) el.setAttribute('data-onband', '')
    else el.removeAttribute('data-onband')
  })
}

function updateCaseNav(root: HTMLElement): void {
  const nav = root.querySelector<HTMLElement>('nav[aria-label="Case study sections"]')
  if (!nav) return
  const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')).filter((a) => {
    const el = document.getElementById(a.getAttribute('href')!.slice(1))
    const shown = !!(el && el.getClientRects().length)
    if (a.parentElement?.tagName === 'LI') a.parentElement.style.display = shown ? '' : 'none'
    return shown
  })
  let current = links[0] ?? null
  links.forEach((a) => {
    const el = document.getElementById(a.getAttribute('href')!.slice(1))
    if (el && el.getBoundingClientRect().top <= window.innerHeight * CASE_LINE) current = a
  })
  if (atPageEnd() && links.length) current = links[links.length - 1]
  links.forEach((a) => {
    if (a === current) a.setAttribute('aria-current', 'true')
    else a.removeAttribute('aria-current')
  })
  // Keep the highlighted entry visible when the nav itself scrolls.
  if (current && nav.scrollHeight > nav.clientHeight) {
    const r = current.getBoundingClientRect(), n = nav.getBoundingClientRect()
    if (r.top < n.top || r.bottom > n.bottom) nav.scrollTop += r.top - n.top - n.height / 2
  }
}

/** Highlights the section being read in the home rail and the case-study side nav. */
export function useScrollSpy(rootRef: RefObject<HTMLElement>, deps: unknown[]): void {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const update = () => {
      updateHomeRail(root)
      updateCaseNav(root)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, deps)
}
