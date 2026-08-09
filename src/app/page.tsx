import type { Metadata } from 'next'
import { HomeExperience } from '@/components/home-experience'

export const metadata: Metadata = {
  title: 'Town Team — Cairo Streets, Where Style Begins',
  description: 'Egyptian streetwear born from the energy of Cairo. Made for dreamers, built for the streets.',
}

export default function HomePage() {
  return <HomeExperience />
}
