# MM Shing Studio

Monorepo for the MM Shing Studio website, managed with npm workspaces and Turborepo.

| Path       | What            | Stack                                              |
| ---------- | --------------- | -------------------------------------------------- |
| `apps/web` | Marketing site  | Next.js 16 (App Router), React 19, Tailwind CSS v4 |
| `apps/api` | API (not added) | NestJS                                             |

## Getting started

Requires Node 20.9+ (`.nvmrc` pins 22) and npm.

```bash
npm install
npm run dev:web   # web app only, http://localhost:3000
npm run dev       # every app in apps/*
```

## Scripts

Run from the repo root; Turborepo runs each task in every workspace that defines it.

| Script                    | Does                                 |
| ------------------------- | ------------------------------------ |
| `dev` / `dev:web`         | Start dev servers                    |
| `build`                   | Production build                     |
| `start`                   | Build, then serve the production app |
| `lint`                    | ESLint                               |
| `typecheck`               | TypeScript, no emit                  |
| `format` / `format:check` | Prettier write / check (whole repo)  |

## `apps/web` layout

```
app/
  layout.tsx          fonts, metadata, header on every page
  page.tsx            home page: composes the sections in order, then the site footer
  work/ services/ about/
                      inner pages, each ending with the short page footer
  globals.css         Tailwind, theme tokens, base styles, imports styles/*
components/
  layout/             site-header, site-nav, site-footer, page-footer
  sections/           one file per home-page section
                      (site-nav, track-list and contact-form are the only client components)
  shared/             Arrow, Doodle
lib/
  site-config.ts      studio name, nav, email, social links
  content.ts          photos, tracks, contact form services
styles/
  base.css            typography, section scaffolding, scroll reveal, reduced motion
  doodle.css          every doodle's look and position, incl. the mobile override
  layout.css          header + footer
  sections/*.css      one file per section, responsive rules at the bottom
  pages/*.css         one file per inner page, same convention
public/               static assets (logo)
```

`app/globals.css` imports the files in `styles/` in a fixed order. Later files rely on overriding earlier ones, so keep new imports in page order.

## Adding the NestJS API

```bash
npx @nestjs/cli new api --directory apps/api --skip-git --skip-install --package-manager npm
npm install   # from the repo root, so the workspace shares one lockfile
```

Run it on a port other than 3000 (for example 4000). Its `dev`, `build` and `lint` scripts are picked up by Turborepo automatically.
