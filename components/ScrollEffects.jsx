'use client'

import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ── Reveal observer ──────────────────────────────────────────
    const revealItems = document.querySelectorAll('.reveal')
    let revealObserver

    if ('IntersectionObserver' in window && !prefersReducedMotion) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              revealObserver.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.18 }
      )
      revealItems.forEach((item) => revealObserver.observe(item))
    } else {
      revealItems.forEach((item) => item.classList.add('is-visible'))
    }

    // ── Section motion ───────────────────────────────────────────
    const motionSections = document.querySelectorAll('.section')
    const clamp = (v, min, max) => Math.min(Math.max(v, min), max)
    const easeOutQuart = (v) => 1 - Math.pow(1 - v, 4)
    let sectionMotionFrame
    let scrollStopTimer

    const updateSectionMotion = () => {
      const vh = window.innerHeight
      const viewportCenter = vh * 0.52
      const scrollTop = window.scrollY
      const scrollBottom = scrollTop + vh
      const pageHeight = document.documentElement.scrollHeight
      const atPageTop = scrollTop < 4
      const atPageBottom = scrollBottom >= pageHeight - 4

      motionSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const sectionCenter = rect.top + rect.height * 0.5
        const distanceFromCenter = Math.abs(sectionCenter - viewportCenter)
        const motionRange = Math.max(vh * 0.82, rect.height * 0.52)
        const rawProgress = clamp(1 - distanceFromCenter / motionRange, 0, 1)
        const isFirst = index === 0
        const isLast = index === motionSections.length - 1
        const anchoredProgress = (isFirst && atPageTop) || (isLast && atPageBottom) ? 1 : rawProgress
        const progress = easeOutQuart(anchoredProgress)
        const direction = sectionCenter < viewportCenter ? -1 : 1
        const translateY = direction * (1 - progress) * 62
        const scale = 0.965 + progress * 0.035
        const opacity = 0.52 + progress * 0.48
        const blur = (1 - progress) * 5
        const lightX = 26 + ((index * 23) % 52)

        section.style.setProperty('--section-y', `${translateY.toFixed(2)}px`)
        section.style.setProperty('--section-scale', scale.toFixed(4))
        section.style.setProperty('--section-opacity', opacity.toFixed(3))
        section.style.setProperty('--section-blur', `${blur.toFixed(2)}px`)
        section.style.setProperty('--section-light', (progress * 0.68).toFixed(3))
        section.style.setProperty('--section-light-scale', (0.92 + progress * 0.1).toFixed(3))
        section.style.setProperty('--section-light-x', `${lightX}%`)
      })

      sectionMotionFrame = null
    }

    const requestSectionMotion = () => {
      document.body.classList.add('is-scrolling')
      window.clearTimeout(scrollStopTimer)
      scrollStopTimer = window.setTimeout(() => {
        document.body.classList.remove('is-scrolling')
      }, 140)
      if (!sectionMotionFrame) {
        sectionMotionFrame = window.requestAnimationFrame(updateSectionMotion)
      }
    }

    if (!prefersReducedMotion && motionSections.length) {
      updateSectionMotion()
      window.addEventListener('scroll', requestSectionMotion, { passive: true })
      window.addEventListener('resize', requestSectionMotion)
    }

    // ── Parallax ─────────────────────────────────────────────────
    const parallaxLayers = document.querySelectorAll('.parallax-layer, .hero-content')

    const handleParallax = () => {
      const scrollY = window.scrollY
      parallaxLayers.forEach((layer, i) => {
        const speed = i === 0 ? -0.035 : -0.06
        layer.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`
      })
    }

    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleParallax, { passive: true })
    }

    return () => {
      if (revealObserver) revealObserver.disconnect()
      window.removeEventListener('scroll', requestSectionMotion)
      window.removeEventListener('resize', requestSectionMotion)
      window.removeEventListener('scroll', handleParallax)
      window.clearTimeout(scrollStopTimer)
      if (sectionMotionFrame) cancelAnimationFrame(sectionMotionFrame)
    }
  }, [])

  return null
}
