# Ballena Cabo — Design Reference

> Complete design system extracted from https://ballenacabo.com/
> Generated: July 2026

---

## Contents

| File | Description |
|---|---|
| `colors.md` | Full color palette with hex, RGB, usage guide, and CSS variables |
| `fonts-and-typography.md` | Font families, @font-face rules, type scale, utility classes, button styles |
| `site-structure.md` | Pages, sections, header/footer structure, content, animations |
| `media-assets.md` | Image inventory, video sources, external integrations |
| `css-source.md` | CSS custom properties, stylesheet inventory, all class names |

---

## Quick Reference

### Brand

```
Tagline:  "Shaped by sea. Grounded in land."
Parent:   Grupo Hunan
Cuisine:  International kitchen rooted in territory
Vibe:     Warm, natural, poetic, refined
```

### Primary Colors

| Variable | Hex | Usage |
|---|---|---|
| `--color-1` | `#F8F2E5` | Background (Warm Beige) |
| `--color-2` | `#03090D` | Text (Deep Navy) |
| `--color-3` | `#C2644F` | Accent (Terra Cotta) |
| `--color-4` | `#779580` | Eyebrow / Sage Green |
| `--color-5` | `#83A9D0` | Info / Soft Blue |

### Fonts

| Role | Font | Weights |
|---|---|---|
| **Primary** (headings, UI, buttons) | **Sweet Sans Pro** | 6 weights (Light → Heavy) — `.otf` files |
| **Secondary** (body text) | **TT Commons Pro** | 6 weights (Light → Black) — `.ttf` files |
| **Body copy** | TT Commons Pro (Medium 500) | ~16-18px, line-height 1.2 |

### Fluid Type Scale

```css
--size-container: clamp(1025px, 100vw, 1920px);
--size-font: calc(var(--size-container) / (1728 / 16));
```

### Key Sizes

| Class | Size | Font |
|---|---|---|
| `title-m` (Display) | ~58px / 3.625em | Sweet Sans Pro |
| `title-s` (Section) | ~48px / 3em | Sweet Sans Pro |
| `eyebrow` (Label) | ~14px / 0.875em | Sweet Sans Pro (500) |
| `paragraph-l` (Body) | ~18px / 1.125em | TT Commons Pro (500) |

---

### Tech Stack

```
WordPress (Paisana theme) → JS: GSAP 3.12.5, Lenis 1.1.18,
Swiper 8.4.5, Swup 4.8.2 → CSS: Tailwind (Vite build)
→ Forms: Contact Form 7, Flodesk → Analytics: GA4, GTM
```

---

*All extracted data is from the live production site. Font files, images, and videos are hosted on the live WordPress server at `https://ballenacabo.com/wp-content/themes/paisana/` and `https://ballenacabo.com/wp-content/uploads/`.*
