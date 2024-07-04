import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import SkillsSection from '@/components/SkillsSection'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <Projects />
    </div>
  )
}
