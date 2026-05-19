# Personal Portfolio — Alan Jeferson Macias Mamani

Full-stack developer portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **framer-motion**.

## Overview

- **Live**: `http://localhost:3000`
- **Stack**: Next.js 16 (App Router), React 19, Tailwind CSS v4, framer-motion
- **Icons**: lucide-react, inline SVGs for brand icons
- **Email**: Contact form with Nodemailer + Gmail SMTP
- **Anti-spam**: Cloudflare Turnstile
- **i18n**: English / Spanish toggle with cookie + localStorage persistence
- **Animations**: framer-motion (scroll-triggered, page transitions, lightbox)
- **Process Manager**: PM2

## Sections

| Section   | Description                                       |
|-----------|---------------------------------------------------|
| Inicio    | Hero with photo, bio, location, CTAs              |
| Skills    | Technology stack with animated badges             |
| Projects  | Portfolio grid with internal/external links       |
| Contact   | Contact form → Gmail via Nodemailer               |
| Footer    | Copyright + tech credits                          |

## Project Detail Pages

Each project has a dedicated page with:
- Tech stack cards
- Feature list
- Screenshot gallery with lightbox (click to enlarge)

Images are auto-discovered from `public/projects/<slug>/`.

## Routes

| Route                                    | Type     |
|------------------------------------------|----------|
| `/`                                      | Home     |
| `/projects/administracion-de-servicios`  | Detail   |
| `/projects/custom-odoo-addons`           | Detail   |
| `/api/contact`                           | API      |
