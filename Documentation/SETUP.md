# Setup Guide

## Prerequisites

- **Node.js** >= 18
- **pnpm** (recommended) or npm
- **PM2** (for production)

## Installation

```bash
git clone <repo-url>
cd personal_portfolio
pnpm install
pnpm approve-builds   # approve sharp + unrs-resolver
pnpm install          # re-run to build native modules
```

## Environment Variables

Copy and edit `.env.local`:

```bash
cp .env.example .env.local
```

Required variables — see [ENV.md](./ENV.md) for details.

## Development

```bash
pnpm dev
```

Opens at `http://localhost:3000`.

## Production Build

```bash
pnpm build
```

Output goes to `.next/`. Static export is not used — the app runs as a Node.js server.

## Linting

```bash
pnpm lint
```

## Project Structure

```
.
├── app/
│   ├── api/contact/route.ts        # Contact form API
│   ├── components/                 # Reusable components
│   │   ├── inicio.tsx              # Hero / intro section
│   │   ├── navbar.tsx              # Navigation + language toggle
│   │   ├── skills.tsx              # Skills grid
│   │   ├── projects.tsx            # Project cards
│   │   ├── contact-form.tsx        # Contact form + Turnstile
│   │   ├── footer.tsx              # Footer
│   │   ├── screenshot-gallery.tsx  # Lightbox gallery
│   │   └── project-detail-content.tsx
│   ├── i18n/                       # Translations + context
│   │   ├── translations.ts
│   │   └── LanguageProvider.tsx
│   ├── projects/                   # Dynamic project routes
│   │   ├── administracion-de-servicios/
│   │   └── custom-odoo-addons/
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Home page
│   └── globals.css                 # Tailwind + dark theme
├── public/
│   ├── perfil/perfil.png           # Profile photo
│   └── projects/                   # Project screenshots
├── Documentation/                  # Docs
├── ecosystem.config.cjs            # PM2 config
├── next.config.ts
├── package.json
├── tsconfig.json
└── .env.local                      # Secrets (git-ignored)
```
