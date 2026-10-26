import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

interface LightboxImage {
  src: string
  alt: string
  returnFocus: HTMLElement | null
}

interface OverlayState {
  lightbox: LightboxImage | null
  resumeOpen: boolean
  openLightbox: (image: LightboxImage) => void
  closeLightbox: () => void
  openResume: () => void
  closeResume: () => void
}

const OverlayContext = createContext<OverlayState | null>(null)

export function OverlayProvider({ children, initialResumeOpen = false }: { children: ReactNode; initialResumeOpen?: boolean }) {
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null)
  const [resumeOpen, setResumeOpen] = useState(initialResumeOpen)

  const openLightbox = useCallback((image: LightboxImage) => setLightbox(image), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const openResume = useCallback(() => setResumeOpen(true), [])
  const closeResume = useCallback(() => setResumeOpen(false), [])

  const value = useMemo(
    () => ({ lightbox, resumeOpen, openLightbox, closeLightbox, openResume, closeResume }),
    [lightbox, resumeOpen, openLightbox, closeLightbox, openResume, closeResume],
  )
  return <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
}

export function useOverlay(): OverlayState {
  const ctx = useContext(OverlayContext)
  if (!ctx) throw new Error('useOverlay must be used inside <OverlayProvider>')
  return ctx
}
