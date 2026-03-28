'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'



const links = [
  { label: 'Abu Dhabi, UAE'},
  { label: '✉ Email', href: 'mailto:hamzaessawi77@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hamza-alessawi-01b755365/', external: true },
  { label: 'GitHub', href: 'https://github.com/HamzaEssawi', external: true },
  { label: '📞 +971 56 639 2487', href: 'tel:+971566392487' },
]

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center py-24 relative"
    >
      {/* Subtle right-side glow orb */}
      <div
        className="absolute right-0 top-1/4 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(200,169,110,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Avatar + badge row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center gap-5 mb-10"
      >
        <div
  className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0"  // Changed from w-16 to w-24
  style={{
    border: '1.5px solid var(--accent)',
    boxShadow: '0 0 20px rgba(200,169,110,0.2)',
  }}
>
  <Image
    src="/profile.png"
    alt="Hamza Alessawi"
    width={96}      // Changed from 64 to 96
    height={96}     // Changed from 64 to 96
    className="w-full h-full object-cover"
    priority        // Add this for important images
    quality={100}   // Max quality
  />
</div>
        <div className="flex flex-col gap-1">
          <span
            className="font-mono text-[10px] tracking-[0.2em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            Available for hire
          </span>
          <span
            className="font-mono text-xs tracking-wider"
            style={{ color: 'var(--accent2)' }}
          >
            Software Engineer & AI Builder
          </span>
        </div>
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex items-start gap-4 mb-6"
      >
        {/* Thin gold vertical line */}
        <div
          className="hidden md:block w-[2px] self-stretch rounded-full flex-shrink-0 mt-2"
          style={{
            background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)',
            minHeight: '80px',
          }}
        />
        <h1
          className="font-serif leading-none"
          style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            color: 'var(--heading)',
            letterSpacing: '-0.02em',
          }}
        >
          Hamza{' '}
          <em
            className="not-italic"
            style={{
              color: 'var(--accent)',
              textShadow: '0 0 40px rgba(200,169,110,0.3)',
            }}
          >
            Alessawi
          </em>
        </h1>
      </motion.div>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="max-w-lg mb-10 leading-relaxed md:ml-6"
        style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}
      >
        Software Engineering graduate building intelligent tools for clinical
        reasoning, real-time systems, and secure applications. Passionate about
        AI, full-stack development, and creating impactful solutions.
      </motion.p>

      

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="flex gap-3 flex-wrap md:ml-6"
      >
        {links.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="px-5 py-2.5 text-sm font-mono tracking-wide transition-all duration-200"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.borderColor = 'var(--accent)'
              el.style.color = 'var(--accent)'
              el.style.boxShadow = '0 0 16px rgba(200,169,110,0.12)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.borderColor = 'var(--border)'
              el.style.color = 'var(--text-secondary)'
              el.style.boxShadow = 'none'
            }}
          >
            {label}
          </a>
        ))}

        {/* Resume — solid gold */}
        <a
          href="/HAMZA_ALESSAWI_CV_UAE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 text-sm font-mono tracking-wide transition-all duration-200"
          style={{
            background: 'var(--accent)',
            color: 'var(--bg)',
            fontWeight: 500,
            boxShadow: '0 0 24px rgba(200,169,110,0.25)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--accent-dark)'
            e.currentTarget.style.boxShadow = '0 0 32px rgba(200,169,110,0.4)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--accent)'
            e.currentTarget.style.boxShadow = '0 0 24px rgba(200,169,110,0.25)'
          }}
        >
          Resume →
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-0 md:ml-6 flex items-center gap-3"
        style={{ color: 'var(--muted)' }}
      >
        <div
          className="w-px h-12"
          style={{
            background: 'linear-gradient(180deg, transparent, var(--accent), transparent)',
          }}
        />
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
      </motion.div>
    </motion.section>
  )
}