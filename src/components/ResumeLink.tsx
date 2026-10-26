import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { useOverlay } from '../context/OverlayContext'

type ResumeLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function ResumeLink({ onClick, ...rest }: ResumeLinkProps) {
  const { openResume } = useOverlay()

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e)
    if (e.defaultPrevented) return
    e.preventDefault()
    openResume()
  }

  return <a href="#resume" onClick={handleClick} {...rest} />
}
