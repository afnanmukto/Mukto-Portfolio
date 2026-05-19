'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="section content-section" id="about">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow" style={{ color: '#4ade80' }}>About Me</p>
        <h2>Think Different! It&apos;s better to be Unique!</h2>
      </motion.div>

      <motion.article
        className="about-card glass"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.02, boxShadow: '0 0 20px #4ade80, inset 0 0 10px #4ade80', borderColor: '#4ade80' }}
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
        }}
      >
        <div className="profile-frame parallax-layer">
          <img src="/Images/IMG_3091.jpg" alt="Portrait of WASIF AFNAN MUKTO" />
        </div>
        <div className="about-copy">
          <h3>WASIF AFNAN MUKTO</h3>
          <p>
            A guy with a vision, walking toward the version of himself he has
            yet to meet. He believes every dream begins as a quiet thought, and
            every step forward shapes the person he is becoming. Different by
            nature, driven by curiosity, and guided by purpose, Mukto is
            building his own path, one idea at a time.
          </p>
          <div className="about-details">
            <span style={{ color: '#030712', background: '#4ade80' }}>What&apos;s coming next?</span>
          </div>
        </div>
      </motion.article>
    </section>
  )
}
