'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


const items = [
  {
    src: '/Images/IMG_2428.jpg',
    alt: 'Gallery image IMG 2428',
    label: 'Open gallery image IMG 2428',
    bold: 'Under city lights, still becoming.',
    small: 'The night has its own way of making dreams feel real.',
    size: 'story-wide',
  },
  {
    src: '/Images/IMG_2432.jpg',
    alt: 'Gallery image IMG 2432',
    label: 'Open gallery image IMG 2432',
    bold: 'Looking forward, even in the cold.',
    small: 'The path is not always clear, but the direction still matters.',
  },
  {
    src: '/Images/IMG_2433.jpg',
    alt: 'Gallery image IMG 2433',
    label: 'Open gallery image IMG 2433',
    bold: 'Quiet focus, wide thoughts.',
    small: 'Some moments do not need noise. They only need space to think.',
  },
  {
    src: '/Images/IMG_2820.jpg',
    alt: 'Gallery image IMG 2820',
    label: 'Open gallery image IMG 2820',
    bold: 'A quiet moment before movement.',
    small: 'Sometimes the next chapter begins in silence.',
    size: 'story-tall',
  },
  {
    src: '/Images/IMG_2853.jpg',
    alt: 'Gallery image IMG 2853',
    label: 'Open gallery image IMG 2853',
    bold: 'Calm outside, vision inside.',
    small: 'The simplest moments often hold the clearest thoughts.',
  },
  {
    src: '/Images/IMG_3091.jpg',
    alt: 'Gallery image IMG 3091',
    label: 'Open gallery image IMG 3091',
    bold: 'Smiling through the snowfall.',
    small: 'Even in unfamiliar places, I carry my own sense of warmth.',
  },
  {
    src: '/Images/IMG_3092.jpg',
    alt: 'Gallery image IMG 3092',
    label: 'Open gallery image IMG 3092',
    bold: 'Calm inside the storm.',
    small: 'Not every journey is loud. Some changes happen quietly.',
    size: 'story-wide',
  },
  {
    src: '/Images/IMG_3664.jpg',
    alt: 'Gallery image IMG 3664',
    label: 'Open gallery image IMG 3664',
    bold: 'Standing where the waves think louder.',
    small: 'Some places make the future feel closer than it looks.',
  },
  {
    src: '/Images/IMG_4740.jpg',
    alt: 'Gallery image IMG 4740',
    label: 'Open gallery image IMG 4740',
    bold: 'Different places, same dream.',
    small: 'Every stop becomes part of the story I am building.',
    size: 'story-tall',
  },
  {
    src: '/Images/IMG_5517.jpg',
    alt: 'Gallery image IMG 5517',
    label: 'Open gallery image IMG 5517',
    bold: 'A cold place, a warm memory.',
    small: 'Some memories stay because they remind me who I was becoming.',
  },
  {
    src: '/Images/IMG_5520.jpg',
    alt: 'Gallery image IMG 5520',
    label: 'Open gallery image IMG 5520',
    bold: 'Looking ahead with calm.',
    small: 'A quiet pause between where I was and where I am going.',
    size: 'story-wide',
  },
  {
    src: '/Images/IMG_6597.jpg',
    alt: 'Gallery image IMG 6597',
    label: 'Open gallery image IMG 6597',
    bold: 'Building the person in the mirror.',
    small: 'Growth starts with showing up, even when no one is watching.',
  },
  {
    src: '/Images/IMG_7783.jpg',
    alt: 'Gallery image IMG 7783',
    label: 'Open gallery image IMG 7783',
    bold: 'Where roots meet dreams.',
    small: 'A quiet connection between who I am and who I am becoming.',
    size: 'story-tall',
  },
  {
    src: '/Images/_DSC1683.jpg',
    alt: 'Gallery image DSC 1683',
    label: 'Open gallery image DSC 1683',
    bold: 'Rooted, but still becoming.',
    small: 'A reminder that growth can come from where we began.',
  },
  {
    src: '/Images/_DSC1901.jpg',
    alt: 'Gallery image DSC 1901',
    label: 'Open gallery image DSC 1901',
    bold: 'The ocean behind me, the vision ahead.',
    small: 'A moment shaped by movement, depth, and the courage to keep becoming.',
    size: 'story-wide',
  },
]

export default function Gallery() {
  const [visible, setVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [current, setCurrent] = useState({ src: '', alt: '' })

  const openLightbox = (src, alt) => {
    setCurrent({ src, alt })
    setVisible(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsOpen(true))
    })
  }

  const closeLightbox = () => {
    setIsOpen(false)
    setTimeout(() => {
      setVisible(false)
      setCurrent({ src: '', alt: '' })
    }, 220)
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) closeLightbox()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen])

  return (
    <>
      <section className="section content-section" id="gallery">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow" style={{ color: '#4ade80' }}>Gallery</p>
          <h2>Selected moments with cinematic depth.</h2>
        </motion.div>

        <div className="story-flow">
          {items.map((item, index) => (
            <motion.div
              key={item.src}
              className={`story-item${item.size ? ` ${item.size}` : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index % 2 === 0 ? 0.1 : 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <button
                className="gallery-item glass"
                type="button"
                aria-label={item.label}
                onClick={() => openLightbox(item.src, item.alt)}
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
                  e.currentTarget.style.boxShadow = '0 22px 70px rgba(0, 0, 0, 0.34)';
                }}
              >
                <img src={item.src} alt={item.alt} />
              </button>
              <div className="story-caption">
                <p className="story-caption-bold">{item.bold}</p>
                <p className="story-caption-small">{item.small}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {visible && (
        <div
          className={`lightbox${isOpen ? ' is-open' : ''}`}
          role="dialog"
          aria-label="Gallery image preview"
          aria-hidden={String(!isOpen)}
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          <button
            className="lightbox-close"
            type="button"
            aria-label="Close preview"
            onClick={closeLightbox}
          >
            x
          </button>
          <img src={current.src} alt={current.alt} />
        </div>
      )}
    </>
  )
}
