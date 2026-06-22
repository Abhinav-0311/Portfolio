# Abhinav Jain — Portfolio

Personal portfolio site — built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies.

### [→ abhinav-0311.vercel.app](https://abhinav-0311.vercel.app)

---

## What's inside

- **Hero** with dual view — default profile view and a terminal-style summary, toggleable from the navbar
- **Snake game** — a playable Snake game embedded in the hero background, triggered by a toggle button. The game respects the UI layout with exclusion zones so it doesn't overlap content. Disabled on mobile
- **Project showcase** — Enora (Unity 3D puzzle game), Janadesh (blockchain voting platform), Vibe (launch-readiness auditor), each with branded logos and modal detail views
- **Experience & education** — cards with modal deep-dives, linked certificates and offer letters
- **Light/dark mode** — warm stone palette for light, clean dark theme. System preference detection with manual override
- **Custom cursor** — subtle dot + trailing ring on desktop, disabled on touch devices
- **Scroll-reveal animations** — staggered entrance effects on sections and cards
- **Scroll progress bar** — thin top bar tracking page scroll position

## Design

Warm, calm, and sharp — not flashy. Intentionally avoids the typical "developer portfolio" look (no neon gradients, no glassmorphism, no matrix visuals).

- **Typography** — Space Grotesk for headings, Inter for body
- **Palette** — Stone-based warm whites and charcoals, terracotta accent for the Snake food
- **Shadows** — Three-layer depth system for cards and surfaces
- **Interactions** — Restrained hover states and micro-animations

## Tech

| Layer | Stack |
|---|---|
| Structure | Semantic HTML5 |
| Styling | Vanilla CSS (custom properties, grid, flexbox) |
| Logic | Vanilla JavaScript (IntersectionObserver, Canvas API, localStorage) |
| Hosting | Vercel (static deployment) |
| Fonts | Google Fonts (Inter, Space Grotesk) |

## SEO & Social

- Open Graph + Twitter Card meta tags with branded social image
- JSON-LD structured data (`Person` schema)
- Canonical URL, sitemap.xml, robots.txt
- Semantic heading hierarchy, descriptive alt text
- `theme-color` meta for mobile browser chrome
- Font preconnect hints, lazy loading on below-fold images

## Run locally

```bash
# No install, no build — just open it
open index.html

# Or use any static server
npx -y serve .
```

## Project structure

```
├── index.html          # Single-page site (HTML + inline JS)
├── styles.css          # All styles (variables, layout, components, responsive)
├── 404.html            # Custom 404 page
├── robots.txt          # Crawler directives
├── sitemap.xml         # Sitemap for search engines
└── assets/
    ├── abhinav-profile.jpg
    ├── favicon.png
    ├── og-image.png
    ├── deepsim-logo.png
    ├── enora-logo.png
    ├── janadesh-logo.png
    ├── vibe-logo.jpg
    ├── Abhinav_JainCV.pdf
    └── documents/      # Certificates and offer letters
```

## License

This is a personal portfolio. Feel free to reference the structure and approach, but the content, images, and branding are mine.

---

Built by [Abhinav Jain](https://github.com/Abhinav-0311)
