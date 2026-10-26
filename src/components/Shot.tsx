import type { ImgHTMLAttributes, MouseEvent } from 'react'
import { useOverlay } from '../context/OverlayContext'
import { SHOTS, SHOTS_FULL } from '../lib/images'

interface ShotProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** File name (without extension) under src/assets/shots. */
  name: string
  /** Open the full-size screen in the lightbox on click. Off when the image sits inside a link. */
  zoomable?: boolean
}

export function Shot({ name, zoomable = true, alt = '', onClick, ...rest }: ShotProps) {
  const { openLightbox } = useOverlay()
  const src = SHOTS[name]

  function handleClick(e: MouseEvent<HTMLImageElement>) {
    onClick?.(e)
    if (!zoomable || e.defaultPrevented) return
    e.preventDefault()
    openLightbox({ src: SHOTS_FULL[name] ?? src, alt, returnFocus: e.currentTarget })
  }

  return <img src={src} alt={alt} onClick={handleClick} {...rest} />
}
