'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-8">
      <motion.div
        className="glass-panel max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-glow-green text-[#4ade80]">About Me</h2>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            I am currently pursuing a Bachelor of Information Technology at Torrens University, blending academic rigor with a deep passion for exploring the boundaries of technology. My journey in the digital cosmos involves building scalable web applications and conducting cutting-edge AI research.
          </p>
          <p>
            With a focus on modern frameworks and a drive for continuous learning, I strive to create seamless, interactive, and intelligent user experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
