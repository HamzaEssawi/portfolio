'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Tech Company',
    period: 'Summer 2025',
    location: 'Dubai, UAE',
    achievements: [
      'Developed and deployed full-stack features using Next.js and FastAPI',
      'Implemented JWT authentication and rate limiting for API endpoints',
      'Collaborated with cross-functional team to deliver 3 major features on schedule',
      'Reduced API response time by 25% through database query optimization'
    ]
  },
  {
    role: 'AI Developer (Project Lead)',
    company: 'University Research Lab',
    period: 'Sep 2025 - Feb 2026',
    location: 'Famagusta, North Cyprus',
    achievements: [
      'Led development of Medicai, an AI-powered clinical reasoning trainer',
      'Integrated Groq LLaMA 3.3 70B API for Socratic teaching and automated scoring',
      'Managed team of 3 developers using Agile methodology',
      'Presented project to faculty board, receiving recognition for innovation'
    ]
  },
  {
    role: 'Teaching Assistant',
    company: 'Eastern Mediterranean University',
    period: 'Sep 2024 - Jun 2025',
    location: 'Famagusta, North Cyprus',
    achievements: [
      'Assisted in Data Structures & Algorithms course with 80+ students',
      'Conducted weekly lab sessions and graded assignments',
      'Developed automated grading scripts, saving 10+ hours per week',
      'Received positive feedback from students for clear explanations'
    ]
  }
]

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 border-t border-[var(--border)]"
    >
      <div className="flex items-center gap-4 mb-10">
        <h2 className="font-mono text-xs text-[var(--accent)] tracking-wider">Experience</h2>
        <div className="flex-1 h-px bg-[var(--border)]"></div>
      </div>
      
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 pb-6">
            <div>
              <p className="font-mono text-xs text-[var(--muted)]">{exp.period}</p>
              <p className="text-xs text-[var(--accent2)] mt-1">{exp.location}</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-[var(--heading)] mb-1">{exp.role}</h3>
              <p className="text-sm text-[var(--accent2)] font-mono mb-3">{exp.company}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm text-[var(--muted)] leading-relaxed pl-4 relative">
                    <span className="absolute left-0 text-[var(--accent)]">→</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}