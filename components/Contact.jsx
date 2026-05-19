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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="eyebrow">Contact</p>
        <h2>Initiate Protocol.</h2>
      </motion.div>

      <motion.form
        className="contact-form glass"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <label>
          <span>Name / Organization</span>
          <input type="text" name="name" placeholder="John Doe / Acme Corp" required />
        </label>
        <label>
          <span>Email Transponder</span>
          <input type="email" name="email" placeholder="systems@example.com" required />
        </label>
        <label>
          <span>Transmission Details</span>
          <textarea name="message" rows={5} placeholder="Describe the problem space..." required></textarea>
        </label>
        <button className="submit-button" type="submit">
          {submitted ? 'Transmission Sent' : 'Send Transmission'}
        </button>
      </motion.form>
    </section>
  )
}
