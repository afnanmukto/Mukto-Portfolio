'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [activeItem, setActiveItem] = useState('#hero')

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#social', label: 'Connect' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#hero"
        aria-label="WASIF AFNAN MUKTO home"
        onClick={() => setActiveItem('#hero')}
      >
        WAM
      </a>
      <span className="site-header-title">Design by <strong>Mukto</strong></span>
      <nav className="site-nav" aria-label="Primary navigation" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActiveItem(item.href)}
            style={{ position: 'relative', padding: '8px 16px', zIndex: 1 }}
          >
            {activeItem === item.href && (
              <motion.div
                layoutId="activeNavDot"
                style={{
                  position: 'absolute',
                  bottom: '0px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  boxShadow: '0 0 10px #4ade80'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">Hire Me</a>
    </header>
  )
}
