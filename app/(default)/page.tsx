export const metadata = {
  title: 'KoketForge - Portfolio',
  description: 'Page description',
}

import Hero from '@/components/heroe/hero'
import Features from '@/components/features/features'
import Newsletter from '@/components/newslatter/newsletter'
import Projects from '@/components/projects/projects'
import Testimonials from '@/components/testimonials/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Projects />
      <Testimonials />
      <Newsletter />
    </>
  )
}
