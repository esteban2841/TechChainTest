// src/hooks/useEmailJsLead.ts
import { useCallback, useState } from 'react'
import emailjs from '@emailjs/browser'

export interface LeadPayload {
  name: string
  email: string
  message?: string
}

export interface UseEmailJsLead {
  loading: boolean
  error: string | null
  sendLead: (payload: LeadPayload) => Promise<{ ok: true } | { ok: false; error: string }>
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

export function useEmailJsLead(): UseEmailJsLead {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendLead = useCallback(async (payload: LeadPayload) => {
    setLoading(true)
    setError(null)
    try {
      // Asegúrate que tu Template en EmailJS use estas keys: from_name, reply_to, message
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: payload.name,
          reply_to: payload.email,
          message: payload.message ?? 'Contact request from landing form',
        },
        PUBLIC_KEY
      )
      return { ok: true as const }
    } catch (e: any) {
      const msg = e?.text || e?.message || 'Failed to send lead'
      setError(msg)
      return { ok: false as const, error: msg }
    } finally {
      setLoading(false)
    }
  }, [])

  return { loading, error, sendLead }
}