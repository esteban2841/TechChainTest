import { Container } from '../atoms/Container'
import { Button } from '../atoms/Button'
import { scrollToId } from '../../utils/ui'

export function Navbar() {
  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ] as const

  return (
    <nav className='sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200'>
      <Container className='flex items-center justify-between py-3'>
        <a href='#hero' onClick={(e) => { e.preventDefault(); scrollToId('hero') }} className='font-semibold'>OurService</a>
        <div className='hidden sm:flex items-center gap-4'>
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToId(link.id) }} className='text-sm text-gray-600 hover:text-gray-900'>{link.label}</a>
          ))}
          <Button label='Get Started' onClick={() => scrollToId('contact')} />
        </div>
      </Container>
    </nav>
  )
}
