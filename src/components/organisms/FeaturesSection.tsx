import { Container } from '../atoms/Container'
import { Heading } from '../atoms/Heading'
import { FeatureCard } from '../molecules/FeatureCard'
import type { Feature } from '../../types/domain'

export interface FeaturesSectionProps { features: Feature[] }

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section id='features' className='bg-white'>
      <Container className='py-16 sm:py-24'>
        <Heading level={2} className='text-center'>Features</Heading>
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((f) => (<FeatureCard key={f.id} feature={f} />))}
        </div>
      </Container>
    </section>
  )
}
