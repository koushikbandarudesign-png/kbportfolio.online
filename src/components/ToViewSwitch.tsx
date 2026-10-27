import { useReducedMotion } from '../hooks/useReducedMotion'

const SWITCH_SELECTOR = '[role="group"][aria-label="Choose your view"]'
const HIGHLIGHT_MS = 1800

/** Up-arrow that takes the reader back to the "Reading as" toggle and flags it. */
export function ToViewSwitch() {
  const reduced = useReducedMotion()

  function goToSwitch() {
    const group = document.querySelector<HTMLElement>(SWITCH_SELECTOR)
    if (!group) return
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
    // Land keyboard users on the view they can switch to.
    group.querySelector<HTMLButtonElement>('button[aria-pressed="false"]')?.focus({ preventScroll: true })
    group.classList.remove('is-flagged')
    void group.offsetWidth // restart the highlight if clicked again
    group.classList.add('is-flagged')
    window.setTimeout(() => group.classList.remove('is-flagged'), HIGHLIGHT_MS)
  }

  return (
    <button type="button" className="to-switch" onClick={goToSwitch} aria-label="Go to the Recruiter / Designer switch" title="Go to the Recruiter / Designer switch">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </button>
  )
}
