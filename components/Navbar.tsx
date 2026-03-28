'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between items-center transition-all duration-300 ${
      scrolled ? 'bg-[var(--nav-bg)] backdrop-blur-lg border-b border-[var(--border)]' : 'bg-transparent'
    }`}>
      <div className="font-mono text-sm text-[var(--accent)] tracking-wider cursor-pointer" onClick={() => scrollTo('hero')}>
        Hamza.dev
      </div>
      <ul className="hidden md:flex gap-6 lg:gap-8">
        <li>
          <button onClick={() => scrollTo('skills')} className="text-[var(--muted)] hover:text-[var(--accent)] text-sm tracking-wide transition">
            Skills
          </button>
        </li>
        <li>
          <button onClick={() => scrollTo('experience')} className="text-[var(--muted)] hover:text-[var(--accent)] text-sm tracking-wide transition">
            Experience
          </button>
        </li>
        <li>
          <button onClick={() => scrollTo('projects')} className="text-[var(--muted)] hover:text-[var(--accent)] text-sm tracking-wide transition">
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => scrollTo('education')} className="text-[var(--muted)] hover:text-[var(--accent)] text-sm tracking-wide transition">
            Education/Certifications
          </button>
        </li>
        <li>
          <button onClick={() => scrollTo('contact')} className="text-[var(--muted)] hover:text-[var(--accent)] text-sm tracking-wide transition">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}