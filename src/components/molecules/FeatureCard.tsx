import { motion } from 'framer-motion'
import { tokens, cx } from '../../utils/ui'
import { Icon } from '../atoms/Icon'
import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import type { Feature } from '../../types/domain'

export interface FeatureCardProps { feature: Feature }

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 1 }}
      className={cx(tokens.card, tokens.radius, 'p-6 h-full')}
    >
      <Icon symbol={feature.icon} label={feature.title} />
      <Heading level={3} className='mt-3'>{feature.title}</Heading>
      <Text className='mt-2'>{feature.description}</Text>
    </motion.div>
  )
}
