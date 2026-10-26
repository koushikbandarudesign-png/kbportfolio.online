// localStorage can throw (private mode, blocked site data); preferences are a convenience only.

export function readPref(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writePref(key: string, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Preference simply isn't remembered.
  }
}
