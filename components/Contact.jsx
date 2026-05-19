'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
    setTimeout(() => setSubmitted(false), 2400)
  }

  return (
    <section className="section content-section contact-section" id="contact">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow" style={{ color: '#4ade80' }}>Contact</p>
        <h2>Start a conversation.</h2>
      </motion.div>

      <motion.form
        className="contact-form glass"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#4ade80';
          e.currentTarget.style.boxShadow = '0 0 20px #4ade80, inset 0 0 10px #4ade80';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.boxShadow = '0 24px 90px rgba(0, 0, 0, 0.5)';
        }}
      >
        <label>
          <span style={{ color: '#FFFFFF' }}>Name</span>
          <input type="text" name="name" placeholder="Your name" required style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.1)' }} />
        </label>
        <label>
          <span style={{ color: '#FFFFFF' }}>Email</span>
          <input type="email" name="email" placeholder="you@example.com" required style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.1)' }} />
        </label>
        <label>
          <span style={{ color: '#FFFFFF' }}>Message</span>
          <textarea name="message" rows={5} placeholder="Write your message" required style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.1)' }}></textarea>
        </label>
        <button className="submit-button" type="submit" style={{ background: '#4ade80', color: '#030712' }}>
          {submitted ? 'Message Sent' : 'Send Message'}
        </button>
      </motion.form>
    </section>
  )
}
