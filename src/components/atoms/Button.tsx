import React from 'react'
import { cx, tokens } from '../../utils/ui'

export interface ButtonProps {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'ghost'
  className?: string
}

export function Button({ label, onClick, type = 'button', variant = 'primary', className }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cx(
        'inline-flex items-center justify-center px-5 py-3 text-sm sm:text-base font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variant === 'primary'
          ? 'bg-black text-white hover:bg-gray-800 focus-visible:ring-black'
          : 'bg-transparent text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-300',
        tokens.radius,
        className
      )}
    >
      {label}
    </button>
  )
}
