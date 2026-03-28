import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display, DM_Mono } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans'
})

const dmSerif = DM_Serif_Display({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-dm-serif'
})

const dmMono = DM_Mono({ 
  subsets: ['latin'], 
  weight: ['400', '500'],
  variable: '--font-dm-mono'
})

export const metadata: Metadata = {
  title: 'Hamza AlEssawi | Software Engineer & AI Developer',
  description: 'Building intelligent tools for clinical reasoning, real-time systems, and secure applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  )
}