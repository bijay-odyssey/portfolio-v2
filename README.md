# Bijaya Kumar Pariyar — Portfolio v2

A redesign of [bijaypariyar.com.np](https://bijaypariyar.com.np/), built as a bold editorial single-page-app: oversized display type, scroll-triggered reveals, a magnetic-cursor UI, and a live GitHub stats widget. React + Vite + Tailwind CSS v4 + Framer Motion.

## Stack

- **React 19** + **React Router 7** — page structure
- **Vite** — build tooling
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — styling, theme tokens in `src/index.css`
- **Framer Motion** — scroll reveals, page transitions, magnetic buttons, custom cursor
- **lucide-react** / **react-icons** — iconography

## Structure

```
src/
  data/content.js     # all portfolio copy — bio, projects, skills, timeline, posts
  components/         # Nav, Footer, Cursor, ProjectRow, SkillBar, GithubStats, etc.
  pages/              # Home, About, Projects, Skills, Writing
```

All content lives in `src/data/content.js` — edit that file to update copy, projects, or skill levels without touching components.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```
