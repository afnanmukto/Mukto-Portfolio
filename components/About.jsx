'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="section content-section" id="about">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="eyebrow">About Me</p>
        <h2>Building Intelligence. Shaping the Future.</h2>
      </motion.div>

      <motion.article
        className="about-card glass"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="profile-frame">
          <img src="/Images/IMG_3091.jpg" alt="Portrait of WASIF AFNAN MUKTO" />
        </div>
        <div className="about-copy">
          <h3>WASIF AFNAN MUKTO</h3>
          <p>
            An AI Engineer and Researcher driven by the profound potential of machine learning.
            I specialize in designing and optimizing large language models (LLMs), neural networks,
            and scalable AI infrastructure. My work bridges the gap between theoretical AI research
            and practical, real-world applications that solve complex problems.
          </p>
          <p>
            With a deep understanding of natural language processing and computer vision,
            I build systems that don&apos;t just compute—they understand, learn, and adapt.
          </p>
          <div className="about-details">
            <span>Machine Learning</span>
            <span>Deep Learning</span>
            <span>NLP & LLMs</span>
            <span>Computer Vision</span>
            <span>Python / PyTorch / TensorFlow</span>
          </div>
        </div>
      </motion.article>
    </section>
  )
}
