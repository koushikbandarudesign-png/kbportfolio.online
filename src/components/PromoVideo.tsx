import { useEffect, useRef, type VideoHTMLAttributes } from 'react'
import promo from '../assets/telmy-promo.mp4'
import poster from '../assets/telmy-poster.jpg'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface PromoVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src' | 'poster'> {
  /** Muted, looping background playback. Falls back to controls when reduced motion is requested. */
  ambient?: boolean
}

export function PromoVideo({ ambient = false, controls, ...rest }: PromoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const video = ref.current
    if (!video || !ambient) return
    // React doesn't reflect `muted` as an attribute, and autoplay requires it.
    video.muted = true
    if (!reduced) video.play().catch(() => {})
  }, [ambient, reduced])

  return (
    <video
      ref={ref}
      src={promo}
      poster={poster}
      playsInline
      loop={ambient}
      controls={controls || (ambient && reduced)}
      {...rest}
    />
  )
}
