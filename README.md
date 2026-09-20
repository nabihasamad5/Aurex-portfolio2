# Nabiha Samad — Portfolio

A responsive developer portfolio built with **React 19**, **Vite**, **HTML5** and plain **CSS** (Grid, Flexbox, custom properties, media queries).
Content is based on the GitHub profile [nabihasamad5](https://github.com/nabihasamad5).

## Features
- Sections: Hero, About, Skills, Path (education and internship timeline), Work, Contact
- Fully responsive (desktop, tablet, mobile) with a collapsing mobile menu
- Nav highlights the section you're reading (IntersectionObserver hook)
- Keyboard friendly: skip link, visible focus states, Esc closes the menu
- Respects `prefers-reduced-motion`
- All content lives in one file: `src/data.js`

## Run locally
```bash
npm install
npm run dev        # development server
npm run build      # production build in /dist
npm run preview    # preview the production build
```

## Make it yours
Open `src/data.js` and set:
- `profile.email` and `profile.linkedin` — the matching buttons appear in the Contact section automatically
- `projects` — add new projects or the live link (`href`) for existing ones
- `about`, `skills`, `path` — update as you learn new things

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project** and import the repo.
3. Vercel detects Vite automatically (build: `npm run build`, output: `dist`). Click **Deploy**.

## Structure
```
src/
  main.jsx  App.jsx  data.js  index.css
  hooks/useActiveSection.js
  components/  Navbar, Hero, About, Skills, Path, Work, Contact, Footer  (each with its own .css)
```
