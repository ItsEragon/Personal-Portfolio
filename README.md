# Amritpal Singh — Portfolio

Personal portfolio site built with React 19, Vite and Tailwind CSS v4.

**Live:** https://amritps.vercel.app/

## Stack

- React 19 + Vite 8
- Tailwind CSS v4 (`@theme` tokens in `src/index.css`)
- lucide-react / react-icons
- EmailJS for the contact form

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Environment variables

Create `.env.local` (gitignored):

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

The contact form fails gracefully with a friendly message if these are missing. Note that `VITE_` variables are inlined into the client bundle — the EmailJS public key is meant to be public.

## Structure

```
src/
  layout/     Navbar, Footer
  sections/   Hero, About, Projects, Experience, Contact
  components/ Button, AnimatedBorderButton
public/
  projects/   project screenshots
  og-image.jpg  1200x630 social preview
```
