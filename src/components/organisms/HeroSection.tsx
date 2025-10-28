import { Container } from '../atoms/Container'
import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import { Button } from '../atoms/Button'
import { scrollToId } from '../../utils/ui'
import { motion } from 'framer-motion'
import { Fenix3DObject } from '../atoms/Fenix3DObject'


export function HeroSection() {
  return (
    <section id='hero' className='bg-gradient-to-b from-gray-50 to-white w-full'>
      <Container className='py-20 sm:py-28 text-center'>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
          <Heading level={1}>Welcome to Fenix Inc Service</Heading>
          <Text className='mt-4 max-w-2xl mx-auto'>Your solution for modern web experiences</Text>
          <Button className='mt-8 z-30' label='Get Started' onClick={() => scrollToId('contact')} />
        </motion.div>
      </Container>
    </section>
  )
}
