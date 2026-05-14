import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Social from '@/components/Social'
import Contact from '@/components/Contact'
import Cursor from '@/components/Cursor'
import ScrollEffects from '@/components/ScrollEffects'

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollEffects />
      <div className="site-glow glow-one" aria-hidden="true"></div>
      <div className="site-glow glow-two" aria-hidden="true"></div>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Social />
        <Contact />
      </main>
    </>
  )
}
