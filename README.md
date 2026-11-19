# My very own web site portfolio

My project built with Next.js and Tailwind deployed on GitHub Pages.

---

## 🗂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout, font loading, theme init
│   ├── page.tsx          # Main page — assembles all sections
│   └── globals.css       # CSS variables for light/dark palettes, utilities
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Sticky nav with active section tracking + mobile menu
│   │   └── Footer.tsx    # Footer
│   │
│   ├── sections/
│   │   ├── Hero.tsx          # Animated hero with rotating role title
│   │   ├── Stats.tsx         # Quick-scan stat bar
│   │   ├── Skills.tsx        # 6-card skill grid
│   │   ├── Experience.tsx    # Timeline with dots
│   │   ├── Projects.tsx      # 2-col project cards
│   │   ├── Certifications.tsx# Certification cards with status badges
│   │   └── Contact.tsx       # Contact links + CTA
│   │
│   └── ui/
│       ├── ThemeToggle.tsx   # Light/dark toggle button
│       ├── SectionLabel.tsx  # Reusable mono section label
│       ├── SkillTag.tsx      # Reusable tag pill
│       └── useReveal.ts      # IntersectionObserver scroll-reveal hook
│
├── public/               # Static assets (add resume.pdf here)
├── tailwind.config.ts    # Custom colors, fonts, animations
├── next.config.mjs       # Static export config for GitHub Pages
└── tsconfig.json
```

---

## 🌐 Idiomas (EN / ES)

Todo el texto del sitio está en `content/site.ts`, con una versión en inglés (`en`) y otra en español (`es`).
Para cambiar un texto, un proyecto o una experiencia, edítalo ahí **en los dos idiomas**; las secciones solo lo leen.
TypeScript avisa si a la versión en español le falta algún campo de la inglesa.

El botón EN / ES de la barra de navegación cambia el idioma y lo recuerda en el navegador.
La primera visita se abre en español si el navegador está en español.

---

For my future me, you'll thank me.
