'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Zain Group',
    period: 'Feb 2025 – Nov 2025',
    location: 'UAE',
    achievements: [
      'Developed and maintained scalable backend services using Node.js, Express, and REST APIs',
      'Designed and optimized SQL database queries (MySQL/PostgreSQL), improving response times and overall system performance',
      'Built and integrated APIs consumed by frontend applications, ensuring reliability and low latency',
      'Collaborated with cross-functional teams (frontend, QA) to deliver production-ready features in an Agile environment',
      'Conducted code reviews and applied best practices for clean architecture, error handling, and security',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Zain Group',
    period: 'Feb 2024 – Oct 2024',
    location: 'UAE',
    achievements: [
      'Assisted in developing backend features using JavaScript (Node.js) and RESTful APIs',
      'Debugged and resolved issues across the stack, improving application stability and user experience',
      'Worked with relational databases (MySQL/PostgreSQL) to write queries and handle data operations',
      'Used Git and GitHub for version control and collaborated through pull requests and code reviews',
      'Supported testing, deployment, and documentation of internal tools and services',
    ],
  },
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