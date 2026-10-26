// Screens are referenced by name in the page markup; Vite fingerprints the files at build time.

const preview = import.meta.glob<string>('../assets/shots/*.webp', { eager: true, import: 'default' })
const full = import.meta.glob<string>('../assets/shots/full/*.webp', { eager: true, import: 'default' })

function byName(modules: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(modules).map(([file, url]) => [file.split('/').pop()!.replace(/\.webp$/, ''), url]),
  )
}

export const SHOTS = byName(preview)

/** Higher-resolution versions used by the lightbox, where available. */
export const SHOTS_FULL = byName(full)
