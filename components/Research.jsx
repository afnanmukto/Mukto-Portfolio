'use client';

import { motion } from 'framer-motion';

export default function Research() {
  return (
    <section id="research" className="min-h-screen flex items-center justify-center p-8">
      <motion.div
        className="glass-panel max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-glow-green text-[#4ade80]">Research & Publications</h2>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#4ade80]/30 transition-colors duration-300">
          <h3 className="text-2xl font-semibold mb-2">Continuous Sign Language Recognition</h3>
          <p className="text-[#4ade80] mb-4">Published in Scientific Reports</p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Co-authored research focusing on advanced sign-to-text translation systems. We utilized Transformer models and deep learning architectures to improve the accuracy and fluidity of continuous sign language recognition, bridging the communication gap between deaf and hearing communities.
          </p>
          <a href="#" className="text-sm text-gray-400 hover:text-[#4ade80] transition-colors flex items-center gap-2">
            Read Publication
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
