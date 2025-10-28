import { useCallback, useMemo, useState } from 'react'
import { clampIndex } from '../utils/ui'

export interface UseCarousel {
  index: number
  next: () => void
  prev: () => void
  goTo: (i: number) => void
}

export const useCarousel = (len: number): UseCarousel => {
  const [index, setIndex] = useState(0)
  const clamp = useMemo(() => clampIndex(len), [len])
  const next = useCallback(() => setIndex((i) => clamp(i + 1)), [clamp])
  const prev = useCallback(() => setIndex((i) => clamp(i - 1)), [clamp])
  const goTo = useCallback((i: number) => setIndex(clamp(i)), [clamp])
  return { index, next, prev, goTo }
}
