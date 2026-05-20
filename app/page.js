import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Research from '@/components/Research'
import Contact from '@/components/Contact'
import SpaceBackground from '@/components/SpaceBackground'

export default function Home() {
  return (
    <>
      <SpaceBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Contact />
      </main>
    </>
  )
}
