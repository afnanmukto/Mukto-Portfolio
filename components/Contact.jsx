'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-8">
      <motion.div
        className="glass-panel max-w-4xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-glow-green text-[#4ade80]">Establish Connection</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Whether you have a question, a project idea, or just want to explore the digital cosmos together, feel free to transmit a message.
        </p>

        <form className="max-w-md mx-auto space-y-4 mb-12 text-left">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input type="text" id="name" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4ade80]/50 transition-colors" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" id="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4ade80]/50 transition-colors" />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" rows="4" placeholder="Your Message" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4ade80]/50 transition-colors resize-none"></textarea>
          </div>
          <button type="submit" className="w-full px-8 py-3 bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/30 rounded-lg font-medium hover:bg-[#4ade80]/20 hover:border-[#4ade80]/60 transition-all duration-300">
            Transmit Signal
          </button>
        </form>

        <div className="pt-8 border-t border-white/10 flex justify-center gap-6">
          <a href="https://facebook.com/afnanmukto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4ade80] hover:scale-110 transition-all">
            <span className="sr-only">Facebook</span>
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://instagram.com/afnanmukto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4ade80] hover:scale-110 transition-all">
            <span className="sr-only">Instagram</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://discord.com/users/701706826542219334" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4ade80] hover:scale-110 transition-all">
            <span className="sr-only">Discord</span>
            <svg className="filled" fill="currentColor" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.016.011.03.024.042a19.98 19.98 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.201 13.201 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </a>
          <a href="mailto:afnanmukto@gmail.com" className="text-gray-400 hover:text-[#4ade80] hover:scale-110 transition-all">
            <span className="sr-only">Gmail</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
