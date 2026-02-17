# CLAUDE.md

This file provides guidance for AI assistants working in this repository.

## Project Overview

**Project**: OKIE HVAC — Business website for an HVAC company in Stillwater, Oklahoma
**Stack**: React 19 + Vite 7 + React Router 7
**Theme**: Dark theme with orange (#f97316) accent color
**Font**: Inter (loaded from Google Fonts)

## Repository Structure

```
claude-ios/
├── CLAUDE.md               # AI assistant guidance (this file)
├── index.html              # Entry HTML (loads Google Fonts, meta tags)
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── public/                 # Static assets served as-is
│   └── vite.svg
├── src/
│   ├── main.jsx            # App entry point (BrowserRouter setup)
│   ├── App.jsx             # Root component (Routes, Header, Footer)
│   ├── App.css             # Root layout styles
│   ├── index.css           # Global styles, CSS variables, utility classes
│   ├── assets/             # Importable static assets
│   ├── components/         # Reusable UI components
│   │   ├── Header.jsx/.css # Fixed navigation bar with mobile menu
│   │   ├── Footer.jsx/.css # Site footer with contact info and links
│   │   ├── Hero.jsx/.css   # Landing hero section with CTA
│   │   ├── Services.jsx/.css       # 6-card services grid
│   │   ├── WhyUs.jsx/.css          # 4-card differentiators section
│   │   ├── Testimonials.jsx/.css   # Customer review cards
│   │   ├── ServiceArea.jsx/.css    # Coverage area with location tags
│   │   └── Contact.jsx/.css        # Contact form + info section
│   └── pages/
│       └── Home.jsx        # Home page (assembles all sections)
└── dist/                   # Production build output (git-ignored)
```

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## Development Workflow

### Branch Strategy

- Development branches follow the pattern: `claude/<descriptor>-<session-id>`
- Always push with: `git push -u origin <branch-name>`
- Never force-push to main/master

### Commit Conventions

- Write clear, descriptive commit messages
- Use imperative mood in commit subjects (e.g., "Add feature" not "Added feature")
- Keep subject line under 72 characters

### Build Verification

- Run `npm run build` before committing to ensure the project compiles
- Run `npm run lint` to check for code issues

## Architecture & Conventions

### Component Pattern

- Each component is a pair: `ComponentName.jsx` + `ComponentName.css`
- Components live in `src/components/`; page-level views in `src/pages/`
- CSS is plain CSS using BEM-like class naming (e.g., `.service-card`, `.hero-title`)
- No CSS modules or CSS-in-JS — all styles use standard CSS imports

### Styling

- All design tokens (colors, spacing, fonts) are CSS custom properties in `src/index.css`
- Dark theme colors:
  - Background: `--color-bg-primary` (#0a0e17), `--color-bg-secondary` (#111827)
  - Cards: `--color-bg-card` (#1a2332)
  - Text: `--color-text-primary` (#f1f5f9), `--color-text-secondary` (#94a3b8)
  - Accent (orange): `--color-accent` (#f97316)
  - Blue accent: `--color-blue` (#3b82f6)
- Shared utility classes: `.container`, `.section`, `.section-title`, `.section-label`, `.btn`, `.btn-primary`, `.btn-outline`
- Responsive breakpoints: 768px (mobile), 992px (tablet), 576px (small mobile)

### Icons

- Uses `lucide-react` for all icons (lightweight, tree-shakeable)
- Import icons individually: `import { Phone, Mail } from 'lucide-react'`

### Routing

- React Router v7 with `BrowserRouter` in `main.jsx`
- Currently single-page (Home route at `/`)

### Business Information

- Company: OKIE HVAC
- Location: Stillwater, OK 74074
- Phone: (405) 555-1234 (placeholder — update with real number)
- Email: info@okiehvac.com (placeholder — update with real address)
- Hours: Mon–Sat 7AM–7PM
- Service areas: Stillwater, Perkins, Glencoe, Ripley, Yale, Cushing, Perry, Morrison

## Key Dependencies

| Package | Purpose |
|---------|---------|
| react, react-dom | UI framework |
| react-router-dom | Client-side routing |
| lucide-react | Icon library |
| vite | Build tool and dev server |
| eslint | Code linting |

## Notes for AI Assistants

- Read existing code before suggesting modifications
- Keep changes minimal and focused on the task at hand
- Do not over-engineer — solve the current problem simply
- Maintain the dark theme — do not introduce light backgrounds or clashing colors
- Use existing CSS variables from `index.css` rather than hardcoding colors
- Follow the existing component pattern (JSX + co-located CSS file)
- Use `lucide-react` for any new icons needed
- Always run `npm run build` and `npm run lint` to verify changes before committing
- Placeholder phone/email should be updated when real business info is available
