'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    name: '🧠 Medicai, Clinical AI Trainer',
    date: 'Mar 2026',
    badge: 'Production',
    desc: 'Full-stack AI web app for medical students: 33 clinical cases, Socratic teaching and automated scoring powered by Groq LLaMA 3.3 70B. PDF-to-MCQ generator with JWT auth, rate limiting, CSP headers, deployed on Railway + Vercel.',
    tech: ['Python/FastAPI', 'Next.js 14', 'Supabase/RLS', 'Groq/LLaMA'],
    screenshots: ['/medicai.png', '/medicai1.png', '/medicai2.png'],
    demoLink: 'https://medicai-nu.vercel.app'
  },
  {
    name: '🎵 MoodTunes, AI Spotify Playlist Generator',
    date: 'Mar 2026',
    badge: 'Featured',
    desc: 'Create personalized Spotify playlists based on your mood. Real Spotify search, 30-second previews, dynamic mood color orb, and one-click playlist saving.',
    tech: ['Next.js 15', 'TypeScript', 'Spotify API', 'NextAuth.js'],
    screenshots: ['/moodtunes1.png', '/moodtunes2.png'],
    demoLink: null
  },
    {
    name: '📚 CampusBookSwap, AI Book Exchange Platform',
    mobile: true,
    date: '2026',
    badge: 'Production',
    desc: 'Full-stack mobile & web app for university students to buy, sell, and swap academic books. Features AI-powered recommendations and chatbot assistance using Gemini/OpenAI, real-time messaging, secure JWT authentication, and cloud-based image handling. Includes admin dashboard for moderation and management.',
    tech: ['Node.js/Express', 'React Native (Expo)', 'React + Vite', 'PostgreSQL', 'Gemini/OpenAI', 'Cloudinary'],
    screenshots: ['/campusbookswap.png', '/campusbookswap1.png'],
    demoLink: null
  },
  {
    name: ' Momentum, Productivity Suite',
    date: 'Feb 2026',
    badge: 'Full-stack',
    desc: 'Task management (CRUD), Pomodoro focus timer, analytics dashboard, virtual plant that grows with focus time, background music player, JWT authentication.',
    tech: ['Next.js', 'Node.js/Express', 'PostgreSQL', 'JWT'],
    screenshots: ['/Momentum.png', '/momentum1.png'],
    demoLink: null
  },
  {
    name: ' Quadcopter Flight Simulator',
    date: 'Jan 2026',
    badge: 'Team Lead',
    desc: 'Unity (C#) real-time simulator with PID control and physics-based dynamics. Interactive UI for live parameter tuning. Received full marks.',
    tech: ['Unity/C#', 'PID Control', 'Real-Time Systems'],
    screenshots: [],
    demoLink: null
  },
  {
    name: '🔒 Encrypted Messaging App',
    date: 'Jun 2025',
    badge: 'Security',
    desc: 'Real-time messaging with Node.js, Express, WebSocket, MySQL. bcrypt auth, session login, input sanitization, encrypted messages.',
    tech: ['Node.js/Express', 'WebSockets', 'MySQL', 'bcrypt'],
    screenshots: [],
    demoLink: null
  }
]

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 border-t border-[var(--border)]"
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-mono text-xs text-[var(--accent)] tracking-wider">Featured Projects</h2>
          <div className="flex-1 h-px bg-[var(--border)]"></div>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-[100px_1fr_200px] gap-6 pb-8 border-b border-[var(--border)] last:border-0">
              <div>
                <p className="font-mono text-xs text-[var(--muted)]">{project.date}</p>
                <span className="inline-block mt-2 px-2 py-0.5 bg-[var(--tag-bg)] text-[var(--accent2)] text-[10px] font-mono tracking-wider uppercase">
                  {project.badge}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[var(--heading)] mb-2">{project.name}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Demo link - only shows if demoLink exists */}
                {project.demoLink && (
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 font-mono text-xs text-[var(--accent)] hover:text-[var(--accent-dark)] transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent2)] shadow-[0_0_5px_var(--accent2)]" />
                    {new URL(project.demoLink).hostname} ↗
                  </a>
                )}
              </div>
              <div>
                {project.screenshots.length > 0 && (
                  <div className="space-y-2">
                    {project.screenshots.map((screenshot, imgIdx) => (
                      <div 
                        key={imgIdx}
                        className="cursor-pointer overflow-hidden rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-all"
                        onClick={() => setSelectedImage(screenshot)}
                      >
                        <Image
                          src={screenshot}
                          alt={`${project.name} screenshot ${imgIdx + 1}`}
                          width={200}
                          height={120}
                          className="w-full object-cover object-top hover:scale-105 transition-transform duration-300 max-h-48"
                        />
                      </div>
                    ))}
                    <p className="text-center text-xs text-[var(--muted)]">Click to enlarge</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Lightbox Modal for enlarged screenshots */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Project screenshot" 
              className="w-full h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white text-3xl hover:text-[var(--accent)] transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}