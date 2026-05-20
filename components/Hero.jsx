'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const headingText = "Navigator of the Digital Cosmos";
  const subtitleText = "Transforming ideas into interactive 3D realities.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.5 } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center flex-col text-center px-4 pt-20">
      <motion.div
        className="glass-panel max-w-4xl w-full flex flex-col items-center justify-center p-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {headingText.split('').map((char, index) => (
            <motion.span key={index} variants={charVariants} className="inline-block">
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          {subtitleText}
        </motion.p>

        <motion.div
           variants={fadeUpVariant}
           initial="hidden"
           animate="visible"
        >
           <a href="#about" className="inline-block px-8 py-4 bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/30 rounded-full font-medium hover:bg-[#4ade80]/20 hover:border-[#4ade80]/60 hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all duration-300">
             Initiate Sequence
           </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
