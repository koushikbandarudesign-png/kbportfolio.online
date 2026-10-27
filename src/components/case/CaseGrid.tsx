import type { CSSProperties, ReactNode } from 'react'

interface CaseGridProps {
  cols: number
  className?: string
  style?: CSSProperties
  children: ReactNode
}

/** Columns separated by thin top rules, the base layout of every case-study section. */
export function CaseGrid({ cols, className = 'cs-grid', style, children }: CaseGridProps) {
  return (
    <div className={className} data-cols={cols} style={{ '--cs-cols': cols, ...style } as CSSProperties}>
      {children}
    </div>
  )
}

interface CaseColProps {
  /** Heavier rule marking the headline column. */
  lead?: boolean
  tag?: string
  accentTag?: boolean
  title?: ReactNode
  text?: ReactNode
  children?: ReactNode
}

export function CaseCol({ lead, tag, accentTag, title, text, children }: CaseColProps) {
  return (
    <div className={lead ? 'cs-col is-lead' : 'cs-col'}>
      {tag && <p className={accentTag ? 'cs-tag is-accent' : 'cs-tag'}>{tag}</p>}
      {title && <p className="cs-col-title">{title}</p>}
      {text && <p className="cs-col-text">{text}</p>}
      {children}
    </div>
  )
}

interface StatProps {
  value: ReactNode
  note: ReactNode
  lead?: boolean
}

export function Stat({ value, note, lead }: StatProps) {
  return (
    <div className={lead ? 'cs-col is-lead' : 'cs-col'}>
      <p className="cs-stat">{value}</p>
      <p className="cs-stat-note">{note}</p>
    </div>
  )
}

interface FlowProps {
  title: string
  steps: string[]
}

/** A task flow: title over its numbered steps. */
export function Flow({ title, steps }: FlowProps) {
  return (
    <div className="cs-col">
      <p className="cs-col-title">{title}</p>
      <ol className="cs-col-list">
        {steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
    </div>
  )
}
