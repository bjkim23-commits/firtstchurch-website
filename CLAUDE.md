# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://127.0.0.1:5174
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
```

## Architecture

This is a **React 19 + Vite + Tailwind CSS v4** SPA for 뉴저지제일한인교회 (The First Korean Church of NJ). It uses **React Router v7** for client-side routing — this is not a Next.js project.

### Entry points

- `src/main.jsx` — mounts app inside `<BrowserRouter>`
- `src/App.jsx` — all routes defined here, wrapped in a single `<Layout>`
- `src/layouts/Layout.jsx` — shared shell containing `<Header>`, `<Outlet>`, and `<Footer>`. The **navigation menu structure** (`NAV` constant) and **footer links** are also defined here.

### Key conventions

- **Pages** (`src/pages/`) map 1:1 to routes. Most start with `<PageBanner title="..." subtitle="..." />` for a consistent top section.
- **Components** (`src/components/`) are shared UI pieces. `RecentSermons` pulls data directly from the data layer at module load time (not inside the component).
- **Data** (`src/data/sundaySermons.js`) — sermon entries live here. To add a sermon, prepend to the `sundaySermons` array. `sermonsForHome()` slices the first `homeSermonCount` entries for the homepage.

### Styling

Tailwind v4 is configured via `@theme` in `src/index.css`. Custom tokens:

| Token | Value | Usage |
|---|---|---|
| `primary` | `#1B3A5C` | Navy — headings, interactive elements |
| `accent` | `#C8963E` | Gold — highlights, category labels |
| `warm` | `#FAFAF7` | Off-white section backgrounds |
| `section` | `#F2F0EB` | Slightly darker section backgrounds |

Use `bg-warm`, `text-primary`, `text-accent`, etc. in JSX.

Font is **Pretendard Variable** (loaded externally), falling back to system UI. Korean text throughout — preserve existing Korean strings when editing.

### Route groups (from `App.jsx` comments)

- 교회소개 (Church Info): `/about`, `/pastor`, `/staff`, `/new-family`, `/directions`
- 예배와말씀 (Worship): `/worship`, `/sunday-sermon`, `/wednesday-prayer`, `/saturday-prayer`, `/english-sermon`
- 다음세대 (Next Generation): `/nursery`, `/elementary`, `/korean-youth`, `/english-ministry`, `/korean-school`
- 나눔터 (Community): `/prayer-request`, `/new-family-intro`, `/gallery`, `/bulletin`
- 회원 (Members): `/login`, `/register`

### Legacy files

The `.html` files at the project root (`index.html`, `about.html`, etc.) are a legacy static site and are not part of the React app. `src/App.artifact.jsx` is a self-contained standalone artifact version of the app.
