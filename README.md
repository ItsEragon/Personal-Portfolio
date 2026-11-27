# AMRITPAL — THE SERIES

A cinematic, streaming-inspired portfolio for **Amritpal Singh**.
Every section is an episode, every project is an Original, and the site plays like a series.

**Live:** https://amritps.vercel.app/

## Stack

- React 19 + Vite 8
- TypeScript
- Tailwind CSS 4 (`@theme` tokens in `src/index.css`)
- Framer Motion 11 + Lenis smooth scroll
- Sharp for the portrait pipeline (dev only)

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # tsc + production build
npm run lint     # eslint
npm run preview  # preview the production build
```

## Content

All content lives in **`src/data/portfolio.ts`** — profile, education, experience, projects, skills, seasons, achievements, top picks and the four viewer profiles. The components read from that file.

Contact actions are limited to email, LinkedIn and GitHub. There is no contact form and no EmailJS dependency.

## Portrait

The transparent source is `public/portrait-4x.webp` (fallback: `public/portrait.png`). Regenerate the responsive bust after replacing it:

```bash
npm run portrait
```

This writes `public/assets/portrait-720.webp` and `portrait-420.webp` using the reference head-and-shoulders framing.

Icons: `npm run favicon` rebuilds `public/favicon.ico` (16–256px, PNG-frame) from `public/favicon.svg`.

## Structure

```
src/
  App.tsx              opening → Who's watching? → home; overlays; toast
  data/portfolio.ts    single source of truth
  hooks/               Lenis scroll, media queries, watch progress
  components/          Opening, ProfileSelector, Navbar, Hero, ContinueWatching,
                       About, Seasons/EpisodeCard, Originals/ProjectCard/ProjectModal,
                       TopPicks, Skills, Achievements, ResumeViewer/ResumeModal,
                       PlayIntro, FinalCTA, fx, Poster, Rail, Scene, CustomCursor
public/
  assets/portrait-*.webp
  favicon.svg
  favicon.ico
  apple-touch-icon.png
  og-image.jpg
  Amritpal-resume.pdf
scripts/build-portrait.mjs
```

## Notes

- The viewer profiles (Amritpal / Recruiter / Developer / Creative) change section order only.
- The Hero “Play Intro” highlights facts from the resume.
- Reduced motion is respected: the opening exits immediately, the custom cursor/particles/pinned scroll are disabled.
