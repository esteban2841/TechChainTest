import React from 'react'
import { cx } from '../../utils/ui'

export interface TextProps {
  className?: string
  children: React.ReactNode
}

export function Text({ children, className }: TextProps) {
  return <p className={cx('text-gray-600', className)}>{children}</p>
}
