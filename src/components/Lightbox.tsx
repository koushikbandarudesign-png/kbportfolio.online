import { useEffect, useRef } from 'react'
import { useOverlay } from '../context/OverlayContext'

export function Lightbox() {
  const { lightbox, closeLightbox } = useOverlay()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!lightbox) return
    const returnFocus = lightbox.returnFocus
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      returnFocus?.focus()
    }
  }, [lightbox, closeLightbox])

  return (
    <div id="lightbox" role="dialog" aria-modal="true" aria-label="Enlarged screen" hidden={!lightbox} onClick={closeLightbox}>
      <button ref={closeRef} type="button" id="lb-close" aria-label="Close">
        ×
      </button>
      {lightbox && <img id="lb-img" src={lightbox.src} alt={lightbox.alt} />}
    </div>
  )
}
