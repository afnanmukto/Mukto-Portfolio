'use client'

import { motion } from 'framer-motion'
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconBrandTwitter } from '@tabler/icons-react'

export default function Social() {
  const socials = [
    { name: 'GitHub', href: 'https://github.com/afnanmukto', icon: IconBrandGithub },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/afnanmukto', icon: IconBrandLinkedin },
    { name: 'Twitter / X', href: 'https://twitter.com/afnanmukto', icon: IconBrandTwitter },
    { name: 'Email', href: 'mailto:afnanmukto@gmail.com', icon: IconMail },
  ]

  return (
    <section className="section content-section social-section" id="social">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="eyebrow">Connect</p>
        <h2>Let&apos;s Build Together.</h2>
        <p className="social-intro">Find me where code is open and ideas are shared.</p>
      </motion.div>

      <div className="social-grid">
        {socials.map((social, idx) => {
          const Icon = social.icon
          return (
            <motion.a
              key={social.name}
              className="social-card"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Mukto on ${social.name}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span className="social-icon">
                <Icon size={32} stroke={1.5} />
              </span>
              <span className="social-label">{social.name}</span>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
