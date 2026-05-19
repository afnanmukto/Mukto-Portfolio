'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <motion.div
        className="hero-side-note"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span>AI Engineer</span>
        <span>Machine Learning</span>
        <span>Neural Networks</span>
      </motion.div>

      <div className="hero-name-back" aria-hidden="true">MUKTO</div>

      <motion.div
        className="hero-portrait-wrap"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src="/Images/hero-mukto-trimmed.png" alt="Portrait of WASIF AFNAN MUKTO" />
      </motion.div>

      <motion.a
        className="scroll-cue"
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span>Scroll down</span>
      </motion.a>
    </section>
  )
}
