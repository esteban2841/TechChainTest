import React from 'react'

export interface FormFieldProps {
  label: string
  htmlFor: string
  children: React.ReactNode
  error?: string
}

export function FormField({ label, htmlFor, children, error }: FormFieldProps) {
  return (
    <div className='space-y-1'>
      <label htmlFor={htmlFor} className='text-sm font-medium text-gray-700'>{label}</label>
      {children}
      {error && <p className='text-xs text-red-600'>{error}</p>}
    </div>
  )
}
