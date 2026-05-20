'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass-panel py-3 px-6 flex items-center gap-8 relative rounded-full !p-2 !px-6">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              activeSection === link.id ? 'text-white text-glow' : 'text-gray-400 hover:text-white'
            }`}
          >
            {activeSection === link.id && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
