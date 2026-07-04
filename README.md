# Ballena — Fine Dining Restaurant

> A premium frontend clone of [Ballena](https://ballenacabo.com/), a fine dining restaurant in San José del Cabo, Los Cabos.

🔗 **Live Site:** [https://ballenacabo-com.vercel.app/](https://ballenacabo-com.vercel.app/)

---

## About

Ballena is shaped by the sea and grounded in land. This project is a pixel-perfect frontend recreation capturing the restaurant's elegant visual identity, editorial typography, and cinematic media experience.

## Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero, split content, gallery, slider, and contact |
| **About** | `/about` | Story, approach, and values |
| **Events** | `/events` | Private dinners, gatherings, and celebrations |
| **Menu** | `/menu` | Dinner, drinks, and dessert sections |
| **Gallery** | `/gallery` | Photo grid with filter categories |
| **Location** | `/location` | Hours, contact, and map |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** GSAP + ScrollTrigger
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React

## Design System

- **Typography:** Ballthens (display serif) + Milker (label serif) + Georgia (body)
- **Color Palette:** Warm beige, deep navy, terra cotta accent, sage green, soft blue
- **Animations:** Clip-path text reveals, curtain image reveals, staggered card fades

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
ballenacabo-com/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx
│   ├── events/page.tsx
│   ├── gallery/page.tsx
│   ├── location/page.tsx
│   ├── menu/page.tsx
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles & design tokens
├── components/             # Reusable UI components
│   ├── Header.tsx          # Navbar & menu overlay
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SplitContent.tsx
│   ├── ContentIntro.tsx
│   ├── MediaIntro.tsx
│   ├── FullImage.tsx
│   ├── SliderSection.tsx
│   ├── CardContent.tsx
│   ├── PageHero.tsx
│   ├── ScrollReveal.tsx    # Clip-path reveal wrapper
│   ├── StaggerReveal.tsx   # Staggered reveal wrapper
│   └── SmoothScroll.tsx    # Lenis provider
├── public/                 # Static assets (images, videos, fonts)
└── design-reference/       # Extracted design tokens & specs
```

## License

This project is a frontend design exercise. All design credit belongs to [Ballena](https://ballenacabo.com/) and [Grupo Hunan](https://www.grupohunan.com/).
