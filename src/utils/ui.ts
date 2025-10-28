export const cx = (...classes: Array<string | false | undefined>): string =>
  classes.filter(Boolean).join(' ')

export const clampIndex = (len: number) => (i: number) => ((i % len) + len) % len

export const emailLooksValid = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export const scrollToId = (id: string): void => {
  const el = typeof document !== 'undefined' ? document.getElementById(id) : null
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const tokens = Object.freeze({
  maxw: 'max-w-6xl',
  padX: 'px-4 sm:px-6 lg:px-8',
  radius: 'rounded-2xl',
  card: 'bg-white/70 backdrop-blur shadow-sm border border-gray-200',
})
