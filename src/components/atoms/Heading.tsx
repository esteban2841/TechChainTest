import React from 'react'
import { cx } from '../../utils/ui'

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  children: React.ReactNode
}

export function Heading({ children, level = 1, className }: HeadingProps) {
  const Tag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements
  const base = 'tracking-tight text-gray-900 z-10'
  const sizes: Record<number, string> = {
    1: 'text-4xl sm:text-5xl font-extrabold',
    2: 'text-3xl sm:text-4xl font-bold',
    3: 'text-2xl font-semibold',
    4: 'text-xl font-semibold',
    5: 'text-lg font-medium',
    6: 'text-base font-medium',
  }
  return <Tag className={cx(base, sizes[level], className)}>{children}</Tag>
}
