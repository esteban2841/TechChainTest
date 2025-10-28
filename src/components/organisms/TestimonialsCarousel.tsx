import { Container } from '../atoms/Container'
import { Heading } from '../atoms/Heading'
import { Button } from '../atoms/Button'
import { TestimonialCard } from '../molecules/TestimonialCard'
import type { Testimonial } from '../../types/domain'
import { motion } from 'framer-motion'
import { useCarousel } from '../../hooks/useCarousel'

export interface TestimonialsCarouselProps { testimonials: Testimonial[] }

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const { index, next, prev, goTo } = useCarousel(testimonials.length)

  return (
    <section id='testimonials' className='bg-gray-50'>
      <Container className='py-16 sm:py-24'>
        <Heading level={2} className='text-center'>What people say</Heading>
        <div className='mt-8 relative'>
          <div className='overflow-hidden'>
            <motion.div key={index} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
              <TestimonialCard t={testimonials[index]} />
            </motion.div>
          </div>
          <div className='mt-6 flex items-center justify-center gap-3'>
            <Button variant='ghost' label='Previous' onClick={prev} />
            <Button variant='ghost' label='Next' onClick={next} />
          </div>
          <div className='mt-4 flex items-center justify-center gap-2' aria-label='carousel pagination'>
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={
                  i === index
                    ? 'w-2.5 h-2.5 rounded-full bg-gray-800'
                    : 'w-2.5 h-2.5 rounded-full bg-white border border-gray-400 hover:bg-gray-200'
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
