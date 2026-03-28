'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 border-t border-[var(--border)]"
    >
      <div className="flex items-center gap-4 mb-10">
        <h2 className="font-mono text-xs text-[var(--accent)] tracking-wider">Contact</h2>
        <div className="flex-1 h-px bg-[var(--border)]"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-1 border border-[var(--border)]">
        <div className="p-6 text-center bg-[var(--card-bg)] hover:bg-[var(--surface)] transition">
          <div className="text-2xl mb-2">✉️</div>
          <div className="font-mono text-xs text-[var(--accent)] uppercase mb-1">Email</div>
          <a href="mailto:hamzaessawi77@gmail.com" className="text-[var(--text-secondary)] text-sm hover:text-[var(--accent)] transition break-words">
            hamzaessawi77<br />@gmail.com
          </a>
        </div>
        
        <div className="p-6 text-center bg-[var(--card-bg)] hover:bg-[var(--surface)] transition">
          <div className="text-2xl mb-2">📞</div>
          <div className="font-mono text-xs text-[var(--accent)] uppercase mb-1">Phone</div>
          <a href="tel:+971505615328" className="text-[var(--text-secondary)] text-sm hover:text-[var(--accent)] transition">
            +971 56 639 2487
          </a>
        </div>
        
        <div className="p-6 text-center bg-[var(--card-bg)] hover:bg-[var(--surface)] transition">
          <div className="text-2xl mb-2">💼</div>
          <div className="font-mono text-xs text-[var(--accent)] uppercase mb-1">LinkedIn</div>
          <a href="https://www.linkedin.com/in/hamza-alessawi-01b755365/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] text-sm hover:text-[var(--accent)] transition">
            /in/hamza<br />-alessawi
          </a>
        </div>
        
        <div className="p-6 text-center bg-[var(--card-bg)] hover:bg-[var(--surface)] transition">
          <div className="text-2xl mb-2">🐙</div>
          <div className="font-mono text-xs text-[var(--accent)] uppercase mb-1">GitHub</div>
          <a href="https://github.com/HamzaEssawi" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] text-sm hover:text-[var(--accent)] transition">
            HamzaEssawi
          </a>
        </div>
        
        <div className="p-6 text-center bg-[var(--card-bg)] hover:bg-[var(--surface)] transition">
          <div className="text-2xl mb-2">📍</div>
          <div className="font-mono text-xs text-[var(--accent)] uppercase mb-1">Location</div>
          <span className="text-[var(--text-secondary)] text-sm">Abu Dhabi, UAE</span>
        </div>
      </div>
    </motion.section>
  )
}