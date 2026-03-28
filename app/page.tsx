'use client'

import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import ThemeToggle from '@/components/ThemeToggle'

function SectionDivider() {
  return (
    <div
      className="w-full h-px"
      style={{
        background: 'linear-gradient(90deg, var(--accent) 0%, rgba(200,169,110,0.1) 40%, transparent 100%)',
        opacity: 0.25,
      }}
    />
  )
}

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{ background: 'var(--bg)', color: 'var(--text)' }}
    >
      <Navbar />
      <ThemeToggle />
      <div className="mx-auto px-6 max-w-4xl">
        <Hero />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Contact />
        <footer className="py-10 text-center font-mono text-xs" style={{ color: 'var(--muted)' }}>
          <p>© 2026 Hamza AlEssawi — Software Engineering · Built with Next.js, TypeScript, Tailwind CSS</p>
        </footer>
      </div>
    </main>
  )
}