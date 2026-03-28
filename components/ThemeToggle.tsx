'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setTheme('light')
      document.documentElement.classList.add('light')
    } else {
      setTheme('dark')
      document.documentElement.classList.remove('light')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    } else {
      setTheme('dark')
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    }
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all shadow-lg flex items-center justify-center text-xl"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}