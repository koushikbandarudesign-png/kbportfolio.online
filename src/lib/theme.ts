// Continuous colour-scheme slider: five hand-tuned schemes, blended in OKLab, with
// contrast guaranteed (WCAG 4.5:1) wherever the slider stops.

type Tokens = Record<string, string>

export interface ThemeStop {
  id: string
  name: string
  v: Tokens
}

export const STOPS: ThemeStop[] = [
  { id: 'light', name: 'Paper', v: { bg: '#F4F3EF', surface: '#FFFFFF', placeholder: '#E6E4DD', rejected: '#ECEAE4', bar: '#C9C7BF', highlight: '#F0F2FE', line: '#DEDCD5', line2: '#C9C7BF', line3: '#8C8A83', ink: '#111110', 'on-ink': '#FFFFFF', ink2: '#4A4945', ink3: '#6B6A64', accent: '#2E4BF0', 'band-muted': '#C9C7BF', 'band-muted2': '#A9A7A0', 'band-accent': '#8FA0FF', 'band-line': '#34332F' } },
  { id: 'patina', name: 'Patina', v: { bg: '#DCE3D2', surface: '#EEF2E8', placeholder: '#CBD4BF', rejected: '#D2D9C8', bar: '#AFBBA2', highlight: '#E3EDDA', line: '#C3CCB7', line2: '#AFBBA2', line3: '#7F8B76', ink: '#1F2A1C', 'on-ink': '#EEF2E8', ink2: '#3E4A39', ink3: '#4E5A49', accent: '#2F6B3A', 'band-muted': '#B9C4AD', 'band-muted2': '#A3AE97', 'band-accent': '#A8D5A2', 'band-line': '#3A4636' } },
  { id: 'clay', name: 'Clay', v: { bg: '#7A3833', surface: '#85433D', placeholder: '#8A4A43', rejected: '#6E322D', bar: '#A8665C', highlight: '#8E4C45', line: '#93524A', line2: '#A5645B', line3: '#C08A7A', ink: '#F6CDB0', 'on-ink': '#7A3833', ink2: '#EBBFA3', ink3: '#E2B194', accent: '#FFD9BD', 'band-muted': '#8A4740', 'band-muted2': '#8A4740', 'band-accent': '#7A3833', 'band-line': '#D9A58E' } },
  { id: 'blueprint', name: 'Blueprint', v: { bg: '#182938', surface: '#1F3344', placeholder: '#26394B', rejected: '#142230', bar: '#3A5266', highlight: '#213A52', line: '#2A3E50', line2: '#3A5266', line3: '#6A8193', ink: '#EAF1F7', 'on-ink': '#182938', ink2: '#C9D6E1', ink3: '#A3B5C4', accent: '#7FC4FF', 'band-muted': '#3A5266', 'band-muted2': '#4A6175', 'band-accent': '#1E5A96', 'band-line': '#A3B5C4' } },
  { id: 'dark', name: 'Graphite', v: { bg: '#121211', surface: '#1C1C1A', placeholder: '#2A2A27', rejected: '#232321', bar: '#45443F', highlight: '#1B2240', line: '#2E2D2A', line2: '#45443F', line3: '#6B6A64', ink: '#F1F0EC', 'on-ink': '#121211', ink2: '#C4C2BB', ink3: '#A3A19A', accent: '#8FA0FF', 'band-muted': '#45443F', 'band-muted2': '#5F5E58', 'band-accent': '#2E4BF0', 'band-line': '#C9C7BF' } },
]

const SURF = ['bg', 'surface', 'placeholder', 'rejected', 'bar', 'highlight', 'line', 'line2', 'line3']
const TEXT = ['ink', 'on-ink', 'ink2', 'ink3', 'accent', 'band-muted', 'band-muted2', 'band-accent', 'band-line']
const N = STOPS.length
const LIGHT_LUMINANCE = 0.18
const MIN_CONTRAST = 4.5

type RGB = [number, number, number]

function hex2rgb(h: string): RGB {
  const s = h.replace('#', '')
  return [parseInt(s.slice(0, 2), 16) / 255, parseInt(s.slice(2, 4), 16) / 255, parseInt(s.slice(4, 6), 16) / 255]
}
function rgb2hex(c: RGB): string {
  return '#' + c.map((x) => Math.round(Math.max(0, Math.min(1, x)) * 255).toString(16).padStart(2, '0')).join('')
}
const lin = (x: number) => (x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4))
const gam = (x: number) => (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055)

function toLab(c: RGB): RGB {
  const r = lin(c[0]), g = lin(c[1]), b = lin(c[2])
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b)
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b)
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b)
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ]
}
function fromLab(L: RGB): RGB {
  const l = Math.pow(L[0] + 0.3963377774 * L[1] + 0.2158037573 * L[2], 3)
  const m = Math.pow(L[0] - 0.1055613458 * L[1] - 0.0638541728 * L[2], 3)
  const s = Math.pow(L[0] - 0.0894841775 * L[1] - 1.291485548 * L[2], 3)
  return [
    gam(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
    gam(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
    gam(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
  ]
}
function mix(a: string, b: string, f: number): string {
  const A = toLab(hex2rgb(a)), B = toLab(hex2rgb(b))
  return rgb2hex(fromLab([A[0] + (B[0] - A[0]) * f, A[1] + (B[1] - A[1]) * f, A[2] + (B[2] - A[2]) * f]))
}
export function luminance(h: string): number {
  const c = hex2rgb(h)
  return 0.2126 * lin(c[0]) + 0.7152 * lin(c[1]) + 0.0722 * lin(c[2])
}
function ratio(a: string, b: string): number {
  const x = luminance(a), y = luminance(b)
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05)
}
/** Nudge `fg` toward black or white until it reaches `target` contrast on `bg`. */
function ensure(fg: string, bg: string, target: number): string {
  if (ratio(fg, bg) >= target) return fg
  const toward = luminance(bg) > LIGHT_LUMINANCE ? '#000000' : '#ffffff'
  for (let k = 1; k <= 20; k++) {
    const c = mix(fg, toward, k / 20)
    if (ratio(c, bg) >= target) return c
  }
  return toward
}

/** Token values for slider position t ∈ [0, 1]. */
export function compute(t: number): Tokens {
  const pos = t * (N - 1)
  const i = Math.min(N - 2, Math.floor(pos))
  const f = pos - i
  const A = STOPS[i].v, B = STOPS[i + 1].v
  const out: Tokens = {}
  SURF.forEach((k) => (out[k] = mix(A[k], B[k], f)))
  const lightA = luminance(A.bg) > LIGHT_LUMINANCE, lightB = luminance(B.bg) > LIGHT_LUMINANCE
  if (lightA === lightB) {
    TEXT.forEach((k) => (out[k] = mix(A[k], B[k], f)))
  } else {
    // Crossing between a light and a dark scheme: keep whichever ink set reads better.
    const src = ratio(A.ink, out.bg) >= ratio(B.ink, out.bg) ? A : B
    TEXT.forEach((k) => (out[k] = src[k]))
  }
  ;['ink', 'ink2', 'ink3', 'accent'].forEach((k) => (out[k] = ensure(out[k], out.bg, MIN_CONTRAST)))
  ;['on-ink', 'band-muted', 'band-muted2', 'band-accent'].forEach((k) => (out[k] = ensure(out[k], out.ink, MIN_CONTRAST)))
  return out
}

export function nearestStop(t: number): ThemeStop {
  return STOPS[Math.round(t * (N - 1))]
}

export function describe(t: number): string {
  const pos = t * (N - 1)
  const i = Math.round(pos)
  if (Math.abs(pos - i) < 0.12) return STOPS[i].name
  const a = Math.floor(pos)
  return `${STOPS[a].name} → ${STOPS[a + 1].name}`
}

export function stopValue(id: string | null): number | null {
  const i = STOPS.findIndex((s) => s.id === id)
  return i < 0 ? null : i / (N - 1)
}

export const STOP_COUNT = N
