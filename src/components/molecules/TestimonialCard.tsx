import { tokens, cx } from '../../utils/ui'
import type { Testimonial } from '../../types/domain'

export interface TestimonialCardProps { t: Testimonial }

export function TestimonialCard({ t }: TestimonialCardProps) {
  return (
    <figure className={cx(tokens.card, tokens.radius, 'p-6')} aria-label={`Testimonial by ${t.name}`}>
      <blockquote className='text-gray-700 italic'>“{t.quote}”</blockquote>
      <figcaption className='mt-4 text-sm text-gray-500'>— {t.name}</figcaption>
    </figure>
  )
}
