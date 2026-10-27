import { useCallback, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { STOP_COUNT, compute, describe, luminance, nearestStop, stopValue } from '../lib/theme'
import { readPref, writePref } from '../lib/storage'

const THUMB = 36
const STEP = 0.02
const BIG_STEP = 1 / (STOP_COUNT - 1)
const LABEL_HIDE_MS = 1400
// Large dots at each scheme, two small dots between neighbours.
const TICK_COUNT = (STOP_COUNT - 1) * 3 + 1
const TICKS = Array.from({ length: TICK_COUNT }, (_, j) => ({ t: j / (TICK_COUNT - 1), major: j % 3 === 0 }))

const clamp = (t: number) => Math.max(0, Math.min(1, t))

function savedValue(): number | null {
  const saved = parseFloat(readPref('kb-theme-t') ?? '')
  if (!isNaN(saved)) return clamp(saved)
  return stopValue(document.documentElement.getAttribute('data-theme'))
}

/** Graphite, the last stop: where the slider starts before the visitor picks a scheme. */
const DEFAULT_VALUE = 1

function applyTokens(t: number): void {
  const root = document.documentElement
  const vars = compute(t)
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(`--${k}`, v))
  root.style.colorScheme = luminance(vars.bg) > 0.18 ? 'light' : 'dark'
  root.setAttribute('data-theme', nearestStop(t).id)
}

export function ThemeSlider() {
  // null until the visitor picks a scheme, so the CSS default (Graphite) applies.
  const [value, setValue] = useState<number | null>(savedValue)
  const [open, setOpen] = useState(false)
  const [labelVisible, setLabelVisible] = useState(false)
  const [railHeight, setRailHeight] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const dragging = useRef(false)
  const raf = useRef(0)

  useLayoutEffect(() => {
    if (value !== null) applyTokens(value)
  }, [value])

  const choose = useCallback((t: number) => {
    const v = clamp(t)
    setValue(v)
    setLabelVisible(true)
    writePref('kb-theme-t', String(v))
    writePref('kb-theme', nearestStop(v).id)
  }, [])

  // Fade the scheme name out shortly after the slider is closed.
  useEffect(() => {
    if (!labelVisible || open) return
    const t = setTimeout(() => setLabelVisible(false), LABEL_HIDE_MS)
    return () => clearTimeout(t)
  }, [labelVisible, open, value])

  useLayoutEffect(() => {
    if (!open) return
    const measure = () => setRailHeight(railRef.current?.clientHeight ?? 0)
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [open])

  useEffect(() => {
    if (!open) return
    thumbRef.current?.focus()
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointer = (e: globalThis.PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  function toggle() {
    if (!open && value === null) setValue(DEFAULT_VALUE)
    setLabelVisible(!open)
    setOpen(!open)
  }

  function fromPointer(clientY: number): number {
    const r = railRef.current!.getBoundingClientRect()
    return (clientY - r.top - THUMB / 2) / (r.height - THUMB)
  }
  function schedule(clientY: number) {
    const t = fromPointer(clientY)
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => choose(t))
  }
  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    schedule(e.clientY)
    e.preventDefault()
  }
  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (dragging.current) schedule(e.clientY)
  }
  function onPointerUp() {
    dragging.current = false
    thumbRef.current?.focus()
  }

  function onThumbKey(e: KeyboardEvent<HTMLDivElement>) {
    let v = value ?? DEFAULT_VALUE
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') v -= STEP
    else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') v += STEP
    else if (e.key === 'PageUp') v = (Math.ceil(v / BIG_STEP - 0.001) - 1) * BIG_STEP
    else if (e.key === 'PageDown') v = (Math.floor(v / BIG_STEP + 0.001) + 1) * BIG_STEP
    else if (e.key === 'Home') v = 0
    else if (e.key === 'End') v = 1
    else return
    e.preventDefault()
    choose(v)
  }

  const shown = value ?? 0
  const name = value === null ? '' : describe(value)

  return (
    <div id="themer" ref={rootRef}>
      <div id="th-pill">
        <div id="th-track" hidden={!open}>
          <div
            id="th-rail"
            ref={railRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={() => (dragging.current = false)}
          >
            {TICKS.map(({ t, major }) => (
              <span key={t} className={major ? 'th-tick major' : 'th-tick'} style={{ top: THUMB / 2 + t * (railHeight - THUMB) }} />
            ))}
            <div
              id="th-thumb"
              ref={thumbRef}
              role="slider"
              tabIndex={0}
              aria-label="Colour scheme"
              aria-orientation="vertical"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(shown * 100)}
              aria-valuetext={name || undefined}
              style={{ top: shown * (railHeight - THUMB) }}
              onKeyDown={onThumbKey}
            >
              <SunIcon size={20} strokeWidth={1.8} />
            </div>
          </div>
        </div>
        <button
          type="button"
          id="th-toggle"
          ref={toggleRef}
          aria-expanded={open}
          aria-controls="th-track"
          aria-label="Change colour scheme"
          onClick={toggle}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <SunIcon size={24} strokeWidth={1.6} />
          )}
        </button>
      </div>
      <p id="th-name" aria-live="polite" className={labelVisible ? 'show' : undefined}>
        {name}
      </p>
    </div>
  )
}

function SunIcon({ size, strokeWidth }: { size: number; strokeWidth: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}
