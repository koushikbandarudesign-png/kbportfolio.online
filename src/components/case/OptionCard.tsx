import type { ReactNode } from 'react'

type OptionStatus = 'rejected' | 'folded' | 'chosen'

const ICON: Record<OptionStatus, string> = { rejected: '×', folded: '↳', chosen: '✓' }

interface OptionCardProps {
  /** e.g. "Option A", "Route D", "Concept B" */
  label: string
  status: OptionStatus
  /** Badge text; defaults to the status name. */
  statusText?: string
  title: ReactNode
  children: ReactNode
}

/** One of the options weighed in a decision, with a Rejected / Folded in / Chosen pill. */
export function OptionCard({ label, status, statusText, title, children }: OptionCardProps) {
  const chosen = status === 'chosen'
  const titleClass = status === 'rejected' ? 'cs-option-title is-struck' : status === 'folded' ? 'cs-option-title is-muted' : 'cs-option-title'
  return (
    <div className="cs-option">
      <p className={chosen ? 'cs-option-head is-chosen' : 'cs-option-head'}>
        <span>{label} ·</span>
        <span className="cs-badge">
          <span aria-hidden="true">{ICON[status]}</span>
          {statusText ?? (status === 'folded' ? 'Folded in' : status)}
        </span>
      </p>
      <p className={titleClass}>{title}</p>
      <p className="cs-option-text">{children}</p>
    </div>
  )
}
