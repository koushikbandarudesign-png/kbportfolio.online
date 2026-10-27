import type { CSSProperties } from 'react'

interface PhaseStep {
  label: string
  title: string
}

/** Phases on a dot-and-line rail; the last one is highlighted as where the work landed. */
export function PhaseTimeline({ steps }: { steps: PhaseStep[] }) {
  return (
    <ol className="cs-timeline" data-cols={steps.length} style={{ '--cs-cols': steps.length } as CSSProperties}>
      {steps.map((s, i) => (
        <li key={s.label} className={i === steps.length - 1 ? 'cs-step is-current' : 'cs-step'}>
          <p className="cs-step-label">{s.label}</p>
          <p className="cs-step-title">{s.title}</p>
        </li>
      ))}
    </ol>
  )
}

interface VersionStep {
  version: string
  text: string
}

/** Product versions on the same rail, with a sentence under each. */
export function VersionTimeline({ steps }: { steps: VersionStep[] }) {
  return (
    <ol className="cs-timeline" data-cols={steps.length} style={{ '--cs-cols': steps.length } as CSSProperties}>
      {steps.map((s, i) => (
        <li key={s.version} className={i === steps.length - 1 ? 'cs-step is-current' : 'cs-step'}>
          <p className="cs-step-version">{s.version}</p>
          <p className="cs-step-text">{s.text}</p>
        </li>
      ))}
    </ol>
  )
}
