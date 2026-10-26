import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { useSite } from '../context/SiteContext'
import { isRoute } from '../routes'

interface HashLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** A page route (e.g. "connx") or the id of a section on the current page. */
  to: string
}

export function HashLink({ to, onClick, ...rest }: HashLinkProps) {
  const { navigate } = useSite()

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e)
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    e.preventDefault()
    if (isRoute(to)) {
      navigate(to, { focus: true })
      return
    }
    document.getElementById(to)?.scrollIntoView({ block: 'start' })
  }

  return <a href={`#${to}`} onClick={handleClick} {...rest} />
}
