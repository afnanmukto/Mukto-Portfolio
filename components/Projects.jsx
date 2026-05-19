'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    src: '/Images/IMG_2428.jpg',
    alt: 'AI Vision Project',
    label: 'Open AI Vision Project',
    bold: 'Autonomous Vision Systems',
    small: 'Real-time object detection and tracking using custom YOLO architectures.',
  },
  {
    src: '/Images/IMG_2853.jpg',
    alt: 'NLP Project',
    label: 'Open NLP Project',
    bold: 'Conversational LLM Agents',
    small: 'Fine-tuned transformer models deployed for autonomous customer support and data retrieval.',
  },
  {
    src: '/Images/IMG_3664.jpg',
    alt: 'Predictive Analytics',
    label: 'Open Predictive Analytics Project',
    bold: 'Predictive Time-Series Analysis',
    small: 'Deep learning models designed to forecast market trends with high precision.',
  },
  {
    src: '/Images/IMG_6597.jpg',
    alt: 'Generative AI',
    label: 'Open Generative AI Project',
    bold: 'Generative Adversarial Networks (GANs)',
    small: 'Creating high-fidelity synthetic data to augment training sets for sparse domains.',
  }
]

export default function Projects() {
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
      <section className="section content-section" id="projects">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Projects</p>
          <h2>Architectures in Action.</h2>
        </motion.div>

        <div className="story-flow">
          {projects.map((project, idx) => (
            <motion.div
              key={project.src}
              className="story-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <button
                className="gallery-item"
                type="button"
                aria-label={project.label}
                onClick={() => openLightbox(project.src, project.alt)}
              >
                <img src={project.src} alt={project.alt} />
              </button>
              <div className="story-caption">
                <p className="story-caption-bold">{project.bold}</p>
                <p className="story-caption-small">{project.small}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {visible && (
        <div
          className={`lightbox${isOpen ? ' is-open' : ''}`}
          role="dialog"
          aria-label="Project image preview"
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
