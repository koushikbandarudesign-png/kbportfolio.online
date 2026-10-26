import { useEffect, useRef, type MouseEvent } from 'react'
import resumePage from '../assets/resume-page.webp'
import resumePdf from '../assets/resume.pdf'
import { useOverlay } from '../context/OverlayContext'
import { RESUME_FILENAME } from '../lib/contact'

export function ResumeViewer() {
  const { resumeOpen, closeResume } = useOverlay()
  const downloadRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!resumeOpen) return
    const returnFocus = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    downloadRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeResume()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      returnFocus?.focus?.()
    }
  }, [resumeOpen, closeResume])

  function onBackdrop(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement
    if (target === e.currentTarget || target.id === 'rv-scroll') closeResume()
  }

  return (
    <div id="resume-view" role="dialog" aria-modal="true" aria-labelledby="rv-title" hidden={!resumeOpen} onClick={onBackdrop}>
      <div id="rv-bar">
        <p id="rv-title">
          Résumé — Vishnu Koushik Bandaru<span>Product Designer · 1 page · PDF</span>
        </p>
        <div id="rv-actions">
          <a ref={downloadRef} className="rv-btn" id="rv-download" href={resumePdf} download={RESUME_FILENAME}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
            </svg>
            Download PDF
          </a>
          <button type="button" className="rv-btn" id="rv-close" onClick={closeResume}>
            Close
          </button>
        </div>
      </div>
      <div id="rv-scroll">
        {resumeOpen && (
          <img
            id="rv-page"
            src={resumePage}
            alt="Résumé of Vishnu Koushik Bandaru, Product Designer: summary, experience at Leoforce and PractiSc, selected projects, education and skills."
            width={1654}
            height={2339}
          />
        )}
      </div>
    </div>
  )
}
