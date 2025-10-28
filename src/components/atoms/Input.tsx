import React from 'react'
import { cx } from '../../utils/ui'

export interface InputProps {
  id: string
  name: string
  type?: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  required?: boolean
  ariaLabel?: string
}

export function Input({ id, name, type = 'text', value, onChange, placeholder, required, ariaLabel }: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      aria-label={ariaLabel}
      className={cx(
        'w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/70 focus:border-black/70',
        'placeholder:text-gray-400'
      )}
    />
  )
}
