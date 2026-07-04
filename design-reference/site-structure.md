# Ballena Cabo — Site Structure & Content

> Extracted from: https://ballenacabo.com/
> Date: 2026-07-03

---

## Page Overview

- **URL:** https://ballenacabo.com/
- **Title:** Ballena | Fine Dining Restaurant in San José del Cabo, Los Cabos
- **Tagline:** Shaped by sea. Grounded in land.
- **Parent Brand:** Grupo Hunan (16 culinary concepts across Mexico & US)
- **CMS:** WordPress (Theme: "Paisana" by Ballena Studio)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **WordPress** | CMS |
| **Next.js** (your local project) | — |
| **GSAP 3.12.5** | Animations |
| **ScrollTrigger** | Scroll-based animations |
| **Lenis 1.1.18** | Smooth scrolling |
| **Swup 4.8.2** | Page transitions |
| **@swup/head-plugin** | Head management |
| **Swiper 8.4.5** | Touch slider/carousel |
| **Tailwind CSS** | Utility CSS |
| **Vite** | Build tool (WordPress) |
| **ACF Blocks** | Custom WordPress blocks |
| **Flodesk** | Newsletter forms |
| **Google Analytics** | G-RC9RX5WZ7R |
| **Google Ads** | AW-17688832889 |
| **PopUp Maker** | Popup plugin |
| **Contact Form 7** | Forms plugin |
| **Elementor** | Page builder (legacy) |

---

## Pages

| Page | URL |
|---|---|
| Home | `/` |
| Events | `/events` |
| Menu | `/menu` |
| Gallery | `/gallery` |
| Location | `/location` |
| About | `/about` |

---

## Header

```
┌─────────────────────────────────────────────────────┐
│ [BOOK NOW]          🐋 Logo          [☰ Toggle]    │
├─────────────────────────────────────────────────────┤
│  (Full-screen overlay on toggle)                    │
│                                                     │
│  Home  │  Events  │  Menu  │  Gallery               │
│  Location  │  About                                 │
│                                                     │
│  Instagram  │  GIFT CARDS                           │
└─────────────────────────────────────────────────────┘
```

- **Logo:** "Logo Ballena Cabo Beige" (desktop), "Logo Ballena Cabo" (mobile menu open)
- **BOOK NOW** links to OpenTable: `https://www.opentable.com.mx/r/ballena-reservations-san-jose-del-cabo`
- **Instagram:** `https://www.instagram.com/ballenacabo/`
- **GIFT CARDS:** `https://giftup.app/place-order/0d69941b-0e23-4dd9-2090-08de109bf43d`

---

## Homepage Sections

### 1. Hero Section
```
┌──────────────────────────────────────────────────────┐
│                                                       │
│                                                       │
│              SHAPED  BY  SEA.                         │
│              GROUNDED  IN  LAND                       │
│                                                       │
│    (Full-screen animated background)                  │
│                                                       │
└──────────────────────────────────────────────────────┘
```
- H1 with each word split into individual `<span>` for per-word GSAP animation
- Full-screen height

### 2. Sea and Desert (Split Content)
```
┌──────────────┬───────────────────────────────────────┐
│              │  SEA AND DESERT                       │
│   Image      │                                       │
│              │  Ballena, where gathering             │
│              │  comes naturally                      │
│              │                                       │
│              │  Guided by time, light, and movement. │
│              │  An international kitchen rooted in   │
│              │  territory, led by warmth, and made   │
│              │  to be shared.                        │
│              │                                       │
│              │  [explore more →]                     │
└──────────────┴───────────────────────────────────────┘
```

### 3. Flavors (Split Content)
```
┌──────────────┬───────────────────────────────────────┐
│              │  MENU                                 │
│   Image      │                                       │
│              │  Flavors that hold the moment         │
│              │                                       │
│              │  The desert is not empty, it is pure  │
│              │  life. It is the silence screaming... │
│              │                                       │
│              │  [View Full Menu →]                   │
└──────────────┴───────────────────────────────────────┘
```

### 4. Full-width Image
```
┌──────────────────────────────────────────────────────┐
│                                                       │
│              (Full-bleed atmospheric image)           │
│                                                       │
└──────────────────────────────────────────────────────┘
```

### 5. Nature Retreat (Content Intro)
```
┌──────────────────┬───────────────────────────────────┐
│  NATURE RETREAT  │                                   │
│                  │  Where the kitchen moves          │
│                  │  with the landscape               │
│                  │                                   │
│                  │  Around the table, Ballena comes  │
│                  │  to life. Good company, shared    │
│                  │  plates, and moments that linger. │
│                  │                                   │
│                  │  [EXPLORE GALLERY →]              │
└──────────────────┴───────────────────────────────────┘
```

### 6. Slider / Carousel (4 cards)
```
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│       │ │       │ │       │ │       │
│ EVENTS│ │Gallery│ │Gift   │ │ Menu  │
│       │ │       │ │Cards  │ │       │
│       │ │       │ │       │ │       │
│Ways to│ │Where  │ │Passed │ │A tide │
│gather │ │atmos- │ │along, │ │that   │
│beyond │ │phere  │ │meant  │ │moves  │
│the    │ │is     │ │to be  │ │through│
│table  │ │built  │ │shared │ │the    │
│       │ │...    │ │       │ │plate  │
│[→]    │ │[→]    │ │[→]    │ │[→]    │
└───────┘ └───────┘ └───────┘ └───────┘
           ◀ [====●====] ▶
```
- Swiper-based touch slider
- Progress bar navigation

### 7. About (Media Intro)
```
┌────────┬────────────────────────────────────────────┐
│ About  │                                            │
│        │  Hospitality that feels natural            │
│   🖼️   │                                            │
│        │  Ballena is part of Grupo Hunan...         │
│        │                                            │
│        │  [About Grupo Hunan →]                     │
└────────┴────────────────────────────────────────────┘
```

### 8. Contact / Location (Card with Video Background)
```
┌──────────────────────────────────────────────────────┐
│                                                       │
│   ┌──────────────────────────────────────────────┐   │
│   │  CONTACT AND LOCATION                        │   │
│   │                                              │   │
│   │  A meeting point, naturally                  │   │
│   │                                              │   │
│   │  HOURS 5:00 PM – 11:00 PM                    │   │
│   │  WEEKENDS 12:00 PM – 4:00 PM                 │   │
│   │  PHONE +52 624 105 6635                      │   │
│   │                                              │   │
│   │  Camino Cabo Este, San José                  │   │
│   │  Del Cabo 23403 Mexico                       │   │
│   └──────────────────────────────────────────────┘   │
│                                                       │
│   (Background: Drone video - autoplay, loop, muted)  │
└──────────────────────────────────────────────────────┘
```

---

## Footer

```
┌──────────────────────────────────────────────────────┐
│  🐋 (Logo)                                           │
│                                                       │
│  Driven by a passion for cuisine and genuine          │
│  hospitality, we create memorable dining experiences  │
│  throughout Mexico and into the United States,        │
│  spanning 16 culinary concepts.                       │
│                                                       │
│  [GRUPO HUNAN →]                                      │
│                                                       │
│  NAVIGATION        NEWSLETTER                         │
│  ─────────         ─────────                          │
│  Events            [EMAIL]                            │
│  Menu              [FIRST NAME]                       │
│  Gallery           [LAST NAME]                        │
│  Location          [SUBSCRIBE]                        │
│  About                                                │
│                                                       │
│  Instagram  Gift Cards                                │
│                                                       │
│  ─────────────────────────────────────────────────    │
│  BALLENA © GRUPO HUNAN           Privacy Notice       │
└──────────────────────────────────────────────────────┘
```

---

## Content Voice & Tone

- **Poetic, nature-inspired:** *"The desert is not empty, it is pure life"*
- **Short declarative phrases:** *"Shaped by sea. Grounded in land"*
- **Keywords:** gathering, naturally, moment, landscape, territory, warmth, shared, table, place
- **Bilingual:** English primary, Spanish/Mexican context (Cabo, San José del Cabo)
- **Format:** Short paragraphs, scannable, no long walls of text

---

## Animations & Interactions

| Effect | Implementation |
|---|---|
| Per-word text animation (Hero H1) | Each word in `<span>`, GSAP animated |
| Scroll-triggered reveals | `data-animate` attribute on sections |
| Fade-in / slide-up on entry | GSAP + ScrollTrigger |
| Smooth scrolling | Lenis 1.1.18 |
| Page transitions | Swup 4.8.2 |
| Button hover effects | Arrow rotation / circle fill change |
| Full-screen menu transition | GSAP animated nav overlay |
| Swiper slider | Touch-enabled, progress bar |
| Lazy loading images | `loading="lazy"` on non-hero images |
| Speculative prefetch | WordPress speculation rules |
