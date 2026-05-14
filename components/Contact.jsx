'use client'

import { useState } from 'react'

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
      <div className="section-heading reveal">
        <p className="eyebrow">Contact</p>
        <h2>Start a conversation.</h2>
      </div>

      <form className="contact-form glass reveal" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" rows={5} placeholder="Write your message" required></textarea>
        </label>
        <button className="submit-button" type="submit">
          {submitted ? 'Message Sent' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}
