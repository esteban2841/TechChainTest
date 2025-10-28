import React from 'react'
import { cx } from '../../utils/ui'

export interface IconProps {
  symbol: string
  label: string
  className?: string
}

export function Icon({ symbol, label, className }: IconProps) {
  return <span role='img' aria-label={label} className={cx('text-3xl', className)}>{symbol}</span>
}
