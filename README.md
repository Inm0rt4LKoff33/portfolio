# Fabian Madriz — Portfolio

A modern, component-based portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
Features a **Slate & Emerald** palette with full **light/dark mode**, scroll-reveal animations, and a rotating role hero.

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

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## ✏️ Personalizing

### Update your contact info
Edit `components/sections/Contact.tsx` — replace the placeholder links:
```tsx
{ icon: "✉", label: "Email Me", href: "mailto:YOUR_EMAIL" },
{ icon: "in", label: "LinkedIn", href: "https://linkedin.com/in/YOUR_PROFILE" },
{ icon: "⌥",  label: "GitHub",  href: "https://github.com/YOUR_USERNAME" },
```

### Add your real projects
Edit `components/sections/Projects.tsx` — update the `projects` array with your actual work and GitHub links.

### Update certifications
Edit `components/sections/Certifications.tsx` — change `status` to `"completed"`, `"in-progress"`, or `"target"`.

### Add your CV
Drop your `resume.pdf` into the `/public` folder.

---

## 🌐 Deploy to GitHub Pages

### 1. Create your repo
Name it `<your-github-username>.github.io`

### 2. Build for static export
```bash
npm run build
```
This generates an `out/` folder (static HTML/CSS/JS).

### 3. Push and enable Pages
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

Then in GitHub → **Settings → Pages → Source**: set to `main` branch, `/ (root)` or `out/` folder.

### 4. (Optional) GitHub Actions auto-deploy

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

---

## 🎨 Design Tokens

All colors are CSS variables defined in `globals.css`:

| Variable | Light | Dark |
|---|---|---|
| `--bg` | Warm ivory `#f7f5ef` | Deep obsidian `#080c0a` |
| `--accent` | Deep moss `#2d6a4f` | Vivid emerald `#34d399` |
| `--accent-light` | `#52b788` | `#6ee7b7` |
| `--text-primary` | `#1a2e22` | `#e8f3ed` |

To change the palette, only edit the `:root` and `.dark` blocks in `globals.css` — every component inherits from these variables automatically.

---

## 🔤 Fonts

- **Fraunces** (serif display) — headings, hero name, section titles
- **Outfit** (sans-serif) — body copy, descriptions  
- **JetBrains Mono** — labels, tags, nav links, dates

---

Built with ❤️ by Fabian Madriz
