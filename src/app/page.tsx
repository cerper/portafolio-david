import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import SkillsSection from '@/components/SkillsSection'
import { getProjects } from '@/sanity/sanity-utils'

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <Projects />
    </div>
  )
}
