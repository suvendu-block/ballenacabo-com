# Ballena Cabo — Fonts & Typography

> Extracted from: https://ballenacabo.com/
> Date: 2026-07-03

---

## Font Families

| Variable | Font Name | Fallback Stack |
|---|---|---|
| `--font-1` / `--font-primary` | **Sweet Sans Pro** | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |
| `--font-2` / `--font-secondary` | **TT Commons Pro** | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |

---

## @font-face Definitions

### Sweet Sans Pro (Primary — Headings, UI, Buttons)

| Weight | File | Format |
|---|---|---|
| **300** (Light) | `SweetSansPro-Light.otf` | OpenType |
| **400** (Regular) | `SweetSansPro-Regular.otf` | OpenType |
| **400** (Italic) | `SweetSansPro-Italic.otf` | OpenType |
| **500** (Medium) | `SweetSansPro-Medium.otf` | OpenType |
| **700** (Bold) | `SweetSansPro-Bold.otf` | OpenType |
| **800** (Heavy) | `SweetSansPro-Heavy.otf` | OpenType |

All with `font-display: swap`

### TT Commons Pro (Secondary — Body Text, Descriptions)

| Weight | File | Format |
|---|---|---|
| **300** (Light) | `TTCommonsPro-Lt.ttf` | TrueType |
| **400** (Regular) | `TTCommonsPro-Rg.ttf` | TrueType |
| **400** (Italic) | `TTCommonsPro-It.ttf` | TrueType |
| **500** (Medium) | `TTCommonsPro-Md.ttf` | TrueType |
| **700** (Bold) | `TTCommonsPro-Bd.ttf` | TrueType |
| **900** (Black) | `TTCommonsPro-Blk.ttf` | TrueType |

All with `font-display: swap`

---

## Font Source Locations (Live Server)

```
https://ballenacabo.com/wp-content/themes/paisana/fonts/Sweet Sans/
  ├── SweetSansPro-Light.otf
  ├── SweetSansPro-Regular.otf
  ├── SweetSansPro-Italic.otf
  ├── SweetSansPro-Medium.otf
  ├── SweetSansPro-Bold.otf
  └── SweetSansPro-Heavy.otf

https://ballenacabo.com/wp-content/themes/paisana/fonts/TT Commons/
  ├── TTCommonsPro-Lt.ttf
  ├── TTCommonsPro-Rg.ttf
  ├── TTCommonsPro-It.ttf
  ├── TTCommonsPro-Md.ttf
  ├── TTCommonsPro-Bd.ttf
  └── TTCommonsPro-Blk.ttf
```

---

## Fluid Type Scale System

```css
--size-unit: 16;
--size-container-ideal: 1728;            /* Base viewport for calculations */
--size-container-min: 1025px;            /* Min container width */
--size-container-max: 1920px;            /* Max container width */
--size-container: clamp(1025px, 100vw, 1920px);
--size-font: calc(var(--size-container) / (1728 / 16));
```

### Breakpoints

| Screen | Container Ideal | Min | Max |
|---|---|---|---|
| Desktop | 1728 | 1025px | 1920px |
| Tablet | 834 | 768px | 1024px |
| Mobile | 550 | 480px | 767px |
| Small Mobile | 360 | 320px | 479px |

---

## Typography Utility Classes

### Heading Classes (Sweet Sans Pro — UPPERCASE)

| Class | Desktop Size | Tablet Size | Wt | Ln-H | Letter-Spacing | Font |
|---|---|---|---|---|---|---|
| `.title-m` | **3.625em** (~58px) | 2em | 400 | 0.9 | 0.025em | `--font-primary` |
| `.title-s` | **3em** (~48px) | — | 400 | 0.9 | 0.025em | `--font-primary` |
| `.title-medium` | **2.5em** (~40px) | 1.5em | 400 | 0.9 | 0.025em | `--font-primary` |
| `.title-sm` | **2em** (~32px) | 1.5em | 400 | 0.9 | 0.025em | `--font-primary` |
| `.title-xs` | **1.5em** (~24px) | 1.125em | 400 | 0.9 | 0.025em | `--font-primary` |

### Eyebrow / Label Classes (Sweet Sans Pro — UPPERCASE, Wide Tracking)

| Class | Size | Weight | Ln-H | Letter-Spacing | Font |
|---|---|---|---|---|---|
| `.eyebrow-l` | **1.5em** (~24px) | 400 | 0.9 | **0.075em** | `--font-primary` |
| `.eyebrow` | **0.875em** (~14px) | **500** | 1 | **0.04375em** | `--font-primary` |
| `.eyebrow-mini` | **0.75em** (~12px) | **500** | 1 | 0.04375em | `--font-primary` |

### Paragraph Classes (TT Commons Pro)

| Class | Size | Weight | Ln-H | Letter-Spacing | Font |
|---|---|---|---|---|---|
| `.paragraph-l` | **1.125em** (~18px) | **500** | 1.2 | 0 | `--font-secondary` |
| `.paragraph-m` | **1em** (~16px) | **500** | 1.2 | 0 | `--font-secondary` |

### Small / Utility

| Class | Size | Weight | Ln-H | Letter-Spacing | Font |
|---|---|---|---|---|---|
| `.link-mini` | **0.75em** (~12px) → 0.6875em mobile | **500** | 1 | 0.04375em | `--font-primary` |

---

## Computed Styles on Page

| Element | Text Example | Font Used | Key Properties |
|---|---|---|---|
| **Body** | — | TT Commons Pro / system | 16px, `#03090D`, bg `#F8F2E5` |
| **H1 (Hero)** | "Shaped by sea. Grounded in land" | Sweet Sans Pro (Light 300) | clamp(48px, 8vw, 82px), uppercase, loose tracking |
| **H2** | "Ballena, where gathering comes naturally" | Sweet Sans Pro (Light 300) | clamp(32px, 5vw, 58px), uppercase |
| **H3** | "EVENTS" / "Gallery" | Sweet Sans Pro (400) | ~20-24px, uppercase |
| **Paragraph** | "Guided by time, light..." | TT Commons Pro (500) | ~18px (1.125em), line-height 1.2 |
| **Eyebrow** | "SEA AND DESERT" / "MENU" | Sweet Sans Pro (500) | ~11-12px, uppercase, wide tracking, Sage `#779580` |
| **Buttons** | "explore more" / "BOOK NOW" | Sweet Sans Pro (500) | ~14-16px, uppercase, letter-spacing 1-2px |
| **Footer nav** | "Events" / "Menu" / "Gallery" | Sweet Sans Pro (500) | ~14px |
| **Footer mini** | "BALLENA © GRUPO HUNAN" | Sweet Sans Pro (500) | ~11-12px, uppercase |

---

## Button Styles

### `.btn-secondary` Variants

| Variant | Circle Fill | Arrow Color | Hover |
|---|---|---|---|
| `.button-light` | `#F8F2E5` (Warm Beige) | `#03090D` (Deep Navy) | Circle gets subtle change |
| `.button-dark` | `#03090D` (Deep Navy) or transparent | `#F8F2E5` (Warm Beige) | Circle fill changes |

Button consists of: Text + SVG circle arrow icon (20×20px).

```svg
<!-- Standard arrow icon -->
<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
  <circle cx="10" cy="10" r="10" fill="currentColor"/>
  <path d="M5.96159 9.12923L7.52061 9.1595L12.3944 9.17464L12.8561 9.19734L12.8636 9.1595L12.2355 8.68271L9.87427 6.32149L10.4343 5.76145L14.1048 9.43195L14.1048 9.67413L10.4267 13.3522L9.87427 12.7997L12.2506 10.4234L12.8636 9.96171L12.8561 9.90874L12.3793 9.93144L7.70224 9.94658L5.96916 9.96928L5.96159 9.12923Z" fill="currentColor"/>
</svg>
```
