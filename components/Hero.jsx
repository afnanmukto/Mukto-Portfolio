'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const name = "MUKTO"
  const subtitle = "Navigator of the Digital Cosmos"

  return (
    <section className="hero section" id="hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative' }}>
      <motion.div
        className="hero-side-note"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span>Dreamer</span>
        <span>Designer &amp; Developer</span>
      </motion.div>

      <motion.div
        className="hero-name-back"
        aria-hidden="true"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'flex', overflow: 'hidden' }}
      >
        {name.split('').map((char, index) => (
          <motion.span key={index} variants={charVariants}>
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ marginTop: '20px', zIndex: 2, display: 'flex' }}
      >
         {subtitle.split(' ').map((word, index) => (
          <motion.span key={index} variants={charVariants} style={{ marginRight: '8px', color: '#9CA3AF', fontSize: '1.2rem', fontWeight: 500, letterSpacing: '0.05em' }}>
            {word}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="hero-portrait-wrap"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <img src="/Images/hero-mukto-trimmed.png" alt="Portrait of WASIF AFNAN MUKTO" />
      </motion.div>

      <motion.a
        className="scroll-cue"
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span>Scroll down</span>
      </motion.a>
    </section>
  )
}
