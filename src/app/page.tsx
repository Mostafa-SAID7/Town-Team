import { HomeExperience } from '@/components/home-experience'

// Prevent static generation - this page is interactive with event handlers
export const dynamic = 'force-dynamic'

export default function HomePage() {
  return <HomeExperience />
}
