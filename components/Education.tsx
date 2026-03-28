'use client'

import { motion } from 'framer-motion'

export default function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="flex items-center gap-4 mb-12">
        <span
          className="font-mono text-[10px] tracking-[0.25em] uppercase"
          style={{ color: 'var(--accent)' }}
        >
          Education & Certifications
        </span>
        <div
          className="flex-1 h-px"
          style={{
            background: 'linear-gradient(90deg, var(--accent) 0%, transparent 60%)',
            opacity: 0.3,
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="p-6 transition-all duration-300 premium-card"
        >
          <h3
            className="font-serif text-lg mb-1"
            style={{ color: 'var(--heading)' }}
          >
            B.Sc. Software Engineering
          </h3>
          <p
            className="text-sm font-mono mb-4"
            style={{ color: 'var(--accent2)' }}
          >
            Eastern Mediterranean University · Sep 2022 – Feb 2026
          </p>
          <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
            CGPA: 3.51 / 4.0
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--muted)' }}>
            🎓 Graduated with High Honors
          </p>
          <p className="text-xs mt-2" style={{ color: 'var(--muted)' }}>
            Relevant: OOP, DSA, System Design, DBMS, Real-Time Systems, Agile, Software Architecture
          </p>
        </div>

        <div className="p-6 transition-all duration-300 premium-card">
          <h3
            className="font-serif text-lg mb-1"
            style={{ color: 'var(--heading)' }}
          >
            Fortinet Certified
          </h3>
          <p
            className="text-sm font-mono mb-4"
            style={{ color: 'var(--accent2)' }}
          >
            Network Security
          </p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            FCSS Security Operations 7.4 Analyst – Oct 2025
          </p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            FortiGate 7.6 Administrator – Aug 2025
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--accent2)' }}>
            🔐 CompTIA Security+ – In Progress
          </p>
        </div>
      </div>
    </motion.section>
  )
}