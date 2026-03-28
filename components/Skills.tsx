'use client'

import { motion } from 'framer-motion'

const skills = {
  'Languages': ['Python', 'TypeScript', 'C#', 'SQL', 'JavaScript'],
  'Backend & AI': ['FastAPI', 'Node.js', 'Groq / LLaMA', 'WebSocket', 'REST API'],
  'Frontend': ['Next.js 14', 'React', 'Tailwind CSS', 'HTML / CSS'],
  'Databases': ['PostgreSQL', 'Supabase', 'MySQL', 'Oracle SQL'],
  'Systems': ['Real-Time Systems', 'PID Control', 'Unity', 'Git', 'Agile'],
  'Security': ['Fortinet FCSS', 'FortiGate', 'JWT', 'CSP Headers', 'Rate Limiting'],
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20"
    >
      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <span
          className="font-mono text-[10px] tracking-[0.25em] uppercase"
          style={{ color: 'var(--accent)' }}
        >
          Tech Stack
        </span>
        <div
          className="flex-1 h-px"
          style={{
            background: 'linear-gradient(90deg, var(--accent) 0%, transparent 60%)',
            opacity: 0.3,
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
        style={{ background: 'var(--border)', border: '1px solid var(--border)' }}
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            variants={item}
            className="p-6 group transition-all duration-300"
            style={{ background: 'var(--card-bg)' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--hover-bg)'
              e.currentTarget.style.boxShadow = 'inset 0 0 32px rgba(200,169,110,0.04)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--card-bg)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <h3
              className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 flex items-center gap-2"
              style={{ color: 'var(--accent)' }}
            >
              <span
                className="inline-block w-1 h-1 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 font-mono text-[11px] tracking-wide transition-all duration-200"
                  style={{
                    background: 'var(--tag-bg)',
                    color: 'var(--tag-color)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}