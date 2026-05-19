'use client'

import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    // Parallax logic for subtle depth
    const parallaxLayers = document.querySelectorAll('.parallax-layer, .hero-portrait-wrap')

    const handleParallax = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const scrollY = window.scrollY
      parallaxLayers.forEach((layer, i) => {
        const speed = i === 0 ? -0.05 : -0.1
        layer.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`
      })
    }

    window.addEventListener('scroll', handleParallax, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleParallax)
    }
  }, [])

  return null
}
