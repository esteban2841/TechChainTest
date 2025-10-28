import { useMemo } from 'react'
import { Navbar } from '../components/organisms/Navbar'
import { HeroSection } from '../components/organisms/HeroSection'
import { FeaturesSection } from '../components/organisms/FeaturesSection'
import { TestimonialsCarousel } from '../components/organisms/TestimonialsCarousel'
import { ContactForm } from '../components/organisms/ContactForm'
import type { Feature, Testimonial } from '../types/domain'
import { Container } from '../components/atoms/Container'

export default function LandingPage() {
  const features: Feature[] = useMemo(() => [
    { id: 'f1', icon: '⚡️', title: 'Fast', description: 'Blazing fast interactions powered by modern React.' },
    { id: 'f2', icon: '🔐', title: 'Secure', description: 'Built with security-first principles and best practices.' },
    { id: 'f3', icon: '🧩', title: 'Modular', description: 'Composable building blocks with Atomic Design.' },
  ], [])

  const testimonials: Testimonial[] = useMemo(() => [
    { id: 't1', name: 'Alex Rivera', quote: 'This service transformed our web presence.' },
    { id: 't2', name: 'Morgan Lee', quote: 'Clean, fast, and a joy to use!' },
    { id: 't3', name: 'Casey Jordan', quote: 'We shipped in days, not weeks.' },
  ], [])

  return (
    <main className='min-h-screen bg-white text-gray-900'>
      <Navbar />
      <HeroSection />
      <FeaturesSection features={features} />
      <TestimonialsCarousel testimonials={testimonials} />
      <ContactForm />
      <footer className='border-t border-gray-200'>
        <Container className='py-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <span className='text-sm text-gray-500'>© {new Date().getFullYear()} OurService Inc.</span>
          <div className='flex items-center gap-3'>
            <a href='#features' onClick={(e) => { e.preventDefault(); const el = document.getElementById('features'); el?.scrollIntoView({ behavior: 'smooth' }) }} className='text-sm text-gray-600 hover:text-gray-900'>Features</a>
            <a href='#testimonials' onClick={(e) => { e.preventDefault(); const el = document.getElementById('testimonials'); el?.scrollIntoView({ behavior: 'smooth' }) }} className='text-sm text-gray-600 hover:text-gray-900'>Testimonials</a>
            <a href='#contact' onClick={(e) => { e.preventDefault(); const el = document.getElementById('contact'); el?.scrollIntoView({ behavior: 'smooth' }) }} className='text-sm text-gray-600 hover:text-gray-900'>Contact</a>
          </div>
        </Container>
      </footer>
    </main>
  )
}
