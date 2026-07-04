# Ballena Cabo — Color Palette

> Extracted from: https://ballenacabo.com/
> Date: 2026-07-03

---

## CSS Custom Properties

```css
--color-1: #F8F2E5;     /* Warm Beige — primary background */
--color-2: #03090D;     /* Deep Navy / Almost Black — primary text */
--color-3: #C2644F;     /* Terra Cotta — accent */
--color-4: #779580;     /* Sage Green — success / eyebrow text */
--color-5: #83A9D0;     /* Soft Blue — info */
--color-6: #FFFFFF;     /* White */
--color-7: #03090D60;   /* Deep Navy 60% opacity */
--color-8: #D3CFC5;     /* Warm Gray */

--color-primary: var(--color-1);    /* #F8F2E5 */
--color-secondary: var(--color-2);  /* #03090D */
--color-accent: var(--color-3);     /* #C2644F */
--color-success: var(--color-4);    /* #779580 */
--color-info: var(--color-5);       /* #83A9D0 */
--color-white: var(--color-6);      /* #FFFFFF */
--color-black: var(--color-2);      /* #03090D */
```

---

## Full Color Table

| Color Name | Hex | RGB | Usage |
|---|---|---|---|
| **Warm Beige** | `#F8F2E5` | rgb(248, 242, 229) | Primary background, button circles |
| **Deep Navy** | `#03090D` | rgb(3, 9, 13) | Primary text, headings, dark mode bg, arrow icons |
| **Terra Cotta** | `#C2644F` | rgb(194, 100, 79) | Accent, hover states |
| **Sage Green** | `#779580` | rgb(119, 149, 128) | Eyebrow labels, success, secondary accent |
| **Soft Blue** | `#83A9D0` | rgb(131, 169, 208) | Info color |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Text on dark backgrounds, clean spaces |
| **Deep Navy 60%** | `#03090D60` | rgba(3, 9, 13, 0.6) | Subtle overlays |
| **Warm Gray** | `#D3CFC5` | rgb(211, 207, 197) | Borders, muted elements |
| **Dark Gray** | `#333333** | rgb(51, 51, 51) | Secondary text (body paragraphs) |
| **Warm Gray 2** | `#7D7D79` | rgb(125, 125, 121) | Footer muted text |
| **Black** | `#000000` | rgb(0, 0, 0) | Used sparingly |
| **Light Beige** | `#F8F2E6` | rgb(248, 242, 230) | Alternate light background |
| **Soft Mint** | `#F9FBF3` | rgb(249, 251, 243) | Very light background tint |
| **Off White** | `#FFFEFD` | rgb(255, 254, 253) | Page backgrounds |

---

## Color Usage Guide

| Usage | Color |
|---|---|
| Page background | `--color-1` / `#F8F2E5` (Warm Beige) |
| Text / headings | `--color-2` / `#03090D` (Deep Navy) |
| Eyebrow labels | `--color-4` / `#779580` (Sage Green) |
| Accent / interactive | `--color-3` / `#C2644F` (Terra Cotta) |
| Button circles (light) | `#F8F2E5` with dark arrow |
| Button circles (dark) | `#03090D` with beige/white arrow |
| Footer text | `#7D7D79` (Warm Gray) |
| Body paragraphs | `#333333` or `#03090D` |

---

## SVG Icon Colors

- Circle fills: `#F8F2E5` (light mode), `#03090D` (dark mode)
- Arrow paths: `#03090D` (on light), `#F8F2E5` (on dark)
