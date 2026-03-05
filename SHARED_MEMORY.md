# Shared Memory - Session Progress Log

**Session ID**: `01PyB1N694oegNasTdwUYBYY`
**Branch**: `claude/youtube-transcript-markdown-Iesyx`
**Date**: 2026-02-27 to 2026-02-28 (resumed 2026-03-05)
**Repo**: `johncastro-ff/claude-ios`

---

## Summary of Work Done

This session transformed the original OKIE HVAC website into a **Dandelion Promotions** agency storefront and set up GitHub Pages deployment.

---

## Phase 1: YouTube Transcript & Research (Feb 27)

### Task
User requested downloading and converting a YouTube transcript to markdown.

### What Was Done
- Fetched the transcript from "YC Was Right: AI Can Run an Entire Business Now"
- Saved it as `YC-Was-Right-AI-Can-Run-an-Entire-Business-Now.md` in the repo root
- Commit: `d7a1003`

---

## Phase 2: Brand Transformation - Dandelion Promotions (Feb 27)

### Task
User wanted to transform the OKIE HVAC template site into a storefront for **Dandelion Promotions**, a marketing/promotional products agency.

### What Was Done
- Completely rewrote all React components to reflect Dandelion Promotions branding
- Updated colors, copy, services, testimonials, service areas, and contact info
- Created brand strategy documents:
  - `dandelion-promotions-brand-guide.md` — Brand identity, colors, tone
  - `dandelion-promotions-strategy-deck.md` — Strategy and positioning
- The site retains the dark theme with orange accent from the original OKIE HVAC template
- Commit: `c15a475`

### Key Brand Details
- **Company**: Dandelion Promotions
- **Tagline**: "Spreading Your Brand Everywhere"
- **Services**: Custom merchandise, event marketing, digital campaigns, brand strategy, corporate gifts, trade show solutions
- **Location**: Stillwater, OK (placeholder contact info retained)

---

## Phase 3: GitHub Pages Deployment (Feb 28 - Mar 5)

### Task
User wanted the site deployed and live via GitHub Pages.

### What Was Done — Multiple Iterations

#### Attempt 1: Initial GitHub Actions Workflow (commit `32273b8`)
- Created `.github/workflows/deploy.yml` using `actions/deploy-pages@v4`
- User needed to enable GitHub Pages in repo settings with source set to "GitHub Actions"
- User enabled Pages and granted workflow read/write permissions

#### Attempt 2: Vite Base Path Fix (commit `3e4b5ce`)
- Site was deploying but assets returned 404
- Root cause: Vite default base path `/` doesn't match GitHub Pages path `/claude-ios/`
- Fixed `vite.config.js` to set `base: '/claude-ios/'`

#### Attempt 3: Trigger Rebuild (commit `2976fbe`)
- Pushed a whitespace change to trigger a fresh deployment after the base path fix
- Site still showed GitHub Pages 404 — the `deploy-pages` action may require a `github-pages` environment that wasn't configured

#### Attempt 4: Switch to gh-pages Branch Method (commit `94b2327`)
- Rewrote workflow to use `peaceiris/actions-gh-pages@v4` instead
- This approach pushes built files directly to a `gh-pages` branch
- Simpler and more reliable — doesn't require environment configuration

### Current Deployment Status (as of Mar 5)
- **Workflow**: Uses `peaceiris/actions-gh-pages@v4` to push `dist/` to `gh-pages` branch
- **User action still needed**: In GitHub repo Settings > Pages, change source from "GitHub Actions" to **"Deploy from a branch"**, select branch `gh-pages`, folder `/ (root)`, and save
- **Expected URL**: `https://johncastro-ff.github.io/claude-ios/`
- The site was still showing a 404 as of the last check — likely because the Pages source setting hasn't been switched yet

---

## Current File Structure (Key Files)

```
claude-ios/
├── CLAUDE.md                              # AI assistant guidance
├── SHARED_MEMORY.md                       # This file - session progress log
├── README.md                              # Updated for Dandelion Promotions
├── YC-Was-Right-AI-Can-Run-an-Entire-Business-Now.md  # YouTube transcript
├── dandelion-promotions-brand-guide.md    # Brand identity doc
├── dandelion-promotions-strategy-deck.md  # Strategy deck
├── vite.config.js                         # base: '/claude-ios/' for GH Pages
├── .github/workflows/deploy.yml          # GH Pages deploy via peaceiris action
├── src/
│   ├── components/                        # All rewritten for Dandelion Promotions
│   │   ├── Header.jsx/.css
│   │   ├── Hero.jsx/.css
│   │   ├── Services.jsx/.css
│   │   ├── WhyUs.jsx/.css
│   │   ├── Testimonials.jsx/.css
│   │   ├── ServiceArea.jsx/.css
│   │   ├── Contact.jsx/.css
│   │   └── Footer.jsx/.css
│   └── pages/
│       └── Home.jsx
└── package.json
```

---

## Git Commit History (Chronological)

| Commit | Date | Description |
|--------|------|-------------|
| `1f2f017` | Feb 17 | Add CLAUDE.md with project conventions |
| `070eeda` | Feb 17 | Add OKIE HVAC dark-themed website (original template) |
| `87c766b` | Feb 17 | Add project README |
| `a34ec3f` | Feb 17 | Update package-lock.json |
| `d7a1003` | Feb 27 | Add YouTube transcript markdown |
| `c15a475` | Feb 27 | Transform site into Dandelion Promotions |
| `32273b8` | Feb 28 | Add GitHub Actions workflow for Pages |
| `3e4b5ce` | Feb 28 | Set Vite base path for GitHub Pages |
| `32f6fe1` | Feb 28 | Update README for Dandelion Promotions |
| `2976fbe` | Feb 28 | Trigger deployment rebuild |
| `94b2327` | Feb 28 | Switch to gh-pages branch deploy method |

---

## Known Issues / Next Steps

1. **GitHub Pages deployment**: User needs to change Pages source to "Deploy from a branch" with `gh-pages` branch selected. Current source is set to "GitHub Actions" which doesn't work with the peaceiris approach.
2. **Placeholder contact info**: Phone `(405) 555-1234` and email `info@okiehvac.com` are still placeholders — should be updated with real Dandelion Promotions contact info.
3. **CLAUDE.md is outdated**: Still references OKIE HVAC. Should be updated to reflect Dandelion Promotions branding if the project continues.
4. **Domain**: Currently deploying to `johncastro-ff.github.io/claude-ios/` — could add a custom domain later.

---

## Tech Stack

- React 19 + Vite 7 + React Router 7
- Dark theme with orange (#f97316) accent
- lucide-react for icons
- GitHub Pages for hosting
- GitHub Actions CI/CD via `peaceiris/actions-gh-pages@v4`
