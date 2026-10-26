import { useEffect, useState, type ButtonHTMLAttributes } from 'react'
import { CONTACT_EMAIL } from '../lib/contact'

const RESET_MS = 1600

type CopyEmailButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'children'>

export function CopyEmailButton(props: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), RESET_MS)
    return () => clearTimeout(t)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
    } catch {
      // Clipboard unavailable (insecure context or denied); the address is visible next to the button.
    }
  }

  return (
    <button type="button" onClick={copy} {...props}>
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}
