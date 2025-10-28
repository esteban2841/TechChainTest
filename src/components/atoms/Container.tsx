import React from 'react'
import { cx, tokens } from '../../utils/ui'

export interface ContainerProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export function Container({ id, className, children }: ContainerProps) {
  return <div id={id} className={cx(tokens.maxw, tokens.padX, 'mx-auto', className)}>{children}</div>
}
