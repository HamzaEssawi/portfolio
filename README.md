# Hamza AlEssawi — Portfolio

> Personal portfolio of a Software Engineer & AI Developer, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.


---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + CSS Variables |
| Animations | Framer Motion |
| Fonts | DM Sans · DM Serif Display · DM Mono |
| Deployment | Vercel |

---

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Design system — CSS variables, grain texture, ambient orbs
│   ├── layout.tsx         # Root layout with Google Fonts
│   └── page.tsx           # Main page — composes all sections
│
├── components/
│   ├── Hero.tsx           # Intro, stats, CTA buttons
│   ├── Skills.tsx         # Tech stack grid (6 categories)
│   ├── Experience.tsx     # Work history (Intern, AI Lead, TA)
│   ├── Projects.tsx       # 6 projects with screenshots + lightbox
│   ├── Education.tsx      # B.Sc. + Fortinet certifications
│   ├── Contact.tsx        # Email, Phone, LinkedIn, GitHub, Location
│   ├── Navbar.tsx         # Fixed nav with smooth scroll
│   └── ThemeToggle.tsx    # Dark / Light mode toggle
│
└── public/
    ├── medicai.png / medicai1.png / medicai2.png
    ├── moodtunes1.png / moodtunes2.png
    ├── Momentum.png / momentum1.png
    ├── campusbookswap.png / campusbookswap1.png
    ├── profile.jpg
    └── HAMZA_ALESSAWI_CV_UAE.pdf
```

---

## Features

- **Dark / Light mode** — default dark with gold accents, persisted in localStorage
- **Ambient design** — grain texture overlay, drifting gold orbs, gradient section dividers
- **Smooth animations** — staggered Framer Motion reveals on scroll
- **Project lightbox** — click any screenshot to enlarge
- **Fully responsive** — mobile-first layout

---

## Contact

| | |
|---|---|
| Email | [hamzaessawi77@gmail.com](mailto:hamzaessawi77@gmail.com) |
| LinkedIn | [/in/hamza-alessawi-01b755365](https://www.linkedin.com/in/hamza-alessawi-01b755365/) |
| GitHub | [github.com/HamzaEssawi](https://github.com/HamzaEssawi) |
| Location | Abu Dhabi, UAE |

---

<p align="center">© 2026 Hamza AlEssawi · Built with Next.js, TypeScript, Framer Motion</p>