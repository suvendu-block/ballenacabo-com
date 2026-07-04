# Ballena Cabo — CSS Source Reference

> Extracted from: https://ballenacabo.com/
> Date: 2026-07-03

---

## Main CSS File

**URL:** `https://ballenacabo.com/wp-content/themes/paisana/assets/css/main.css?ver=1.0.0`

### CSS Custom Properties (Root)

```css
:root {
  /* Colors */
  --color-1: #F8F2E5;
  --color-2: #03090D;
  --color-3: #C2644F;
  --color-4: #779580;
  --color-5: #83A9D0;
  --color-6: #FFFFFF;
  --color-8: #D3CFC5;
  --color-7: #03090D60;

  --color-primary: var(--color-1);
  --color-secondary: var(--color-2);
  --color-accent: var(--color-3);
  --color-success: var(--color-4);
  --color-info: var(--color-5);
  --color-white: var(--color-6);
  --color-black: var(--color-2);

  /* Fonts */
  --font-1: 'Sweet Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-2: 'TT Commons Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-primary: var(--font-1);
  --font-secondary: var(--font-2);

  /* Sizing */
  --size-unit: 16;
  --size-container-ideal: 1728;
  --size-container-min: 1025px;
  --size-container-max: 1920px;
  --size-container: clamp(var(--size-container-min), 100vw, var(--size-container-max));
  --size-font: calc(var(--size-container) / (var(--size-container-ideal) / var(--size-unit)));
}
```

### Responsive Breakpoints

```css
/* Tablet */
:root { --size-container-ideal: 834; --size-container-min: 768px; --size-container-max: 1024px; }

/* Mobile */
:root { --size-container-ideal: 550; --size-container-min: 480px; --size-container-max: 767px; }

/* Small Mobile */
:root { --size-container-ideal: 360; --size-container-min: 320px; --size-container-max: 479px; }
```

---

## All Stylesheets (Live Site)

| ID | URL |
|---|---|
| wp-components | `.../wp-includes/css/dist/components/style.min.css?ver=7.0` |
| wp-preferences | `.../wp-includes/css/dist/preferences/style.min.css?ver=7.0` |
| wp-block-editor | `.../wp-includes/css/dist/block-editor/style.min.css?ver=7.0` |
| popup-maker | `.../wp-content/plugins/popup-maker/dist/packages/block-library-style.css` |
| contact-form-7 | `.../wp-content/plugins/contact-form-7/includes/css/styles.css?ver=6.1.6` |
| paisana-style | `.../wp-content/themes/paisana/assets/css/main.css?ver=1.0.0` |
| paisana-preloader | `.../wp-content/themes/paisana/template-parts/preloader/style.css` |
| paisana-footer | `.../wp-content/themes/paisana/template-parts/footer/style.css` |
| paisana-header | `.../wp-content/themes/paisana/template-parts/header/style.css` |
| swiper | `.../wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5` |
| block-acf-hero | `.../wp-content/themes/paisana/blocks/hero/style.css?ver=6.2.1.1` |
| block-acf-text-image | `.../wp-content/themes/paisana/blocks/text-image/style.css` |
| block-acf-split-content | `.../wp-content/themes/paisana/blocks/split-content/style.css` |
| block-acf-full-image | `.../wp-content/themes/paisana/blocks/full-image/style.css` |
| block-acf-content-intro | `.../wp-content/themes/paisana/blocks/content-intro/style.css` |
| block-acf-slider | `.../wp-content/themes/paisana/blocks/slider/style.css` |
| block-acf-media-intro | `.../wp-content/themes/paisana/blocks/media-intro/style.css` |
| block-acf-card-content | `.../wp-content/themes/paisana/blocks/card-content/style.css` |

---

## CSS Class Names Used on Page

```
block-hero
block-split-content
  theme-accent
  has-gallery
  block-split-content__left
  block-split-content__right
  split-gallery
  split-gallery__track
  split-gallery__slide
    is-active
  split-gallery__image
  split-content-panel
    is-active
  block-split-content__top
  block-split-content__top-content
  block-split-content__eyebrow
  block-split-content__title
    title-m
  block-split-content__bottom
  block-split-content__bottom-content
  block-split-content__bottom-col
  block-split-content__bottom-col--second
  block-split-content__content
    paragraph-l
  block-split-content__button
    link btn-secondary button-light
block-full-image
  block-full-image__figure
  block-full-image__image
block-content-intro
  block-content-intro__left
  block-content-intro__eyebrow
  block-content-intro__right
  block-content-intro__right-title
  block-content-intro__right-description
  block-content-intro__button
block-slider
  block-slider--full
  block-slider-title
  block-slider__container
  block-slider__swiper (swiper)
  block-slider__slide (swiper-slide)
  block-slider__card
  block-slider__figure
  block-slider__image
  block-slider__content
  block-slider__title
  block-slider__bottom
  block-slider__description
  block-slider__link
  block-slider__navigation
  block-slider__nav-btn
  block-slider__nav-prev
  block-slider__progress
  block-slider__progress-bar
  block-slider__nav-next
block-media-intro
  block-media-intro__left
  block-media-intro__eyebrow
  block-media-intro__center
  block-media-intro__media
  block-media-intro__image
  block-media-intro__right
  block-media-intro__title
  block-media-intro__bottom
  block-media-intro__description
  block-media-intro__button
block-card-content
  block-card-content__video
  block-card-content-box
  block-card-content__title-content
  block-card-content__eyebrow
  block-card-content__title
  block-card-content__description-content
  block-card-content__description
block-footer
  footer
  block-footer__content
  block-footer__figure
  block-footer__image
  block-footer__content-description
  block-footer__description
  block-footer__button
    special-rotate
  block-footer__menu-form
  block-footer__menu
  block-footer__eyebrow
  block-footer__menu-content
  block-footer__form
    form-footer
  copyright
  block-footer__logotype
  block-footer__logotype-image
  copyright-content
  terms
button-dark
button-light
btn-secondary
link
link-mini
paragraph-l
eyebrow
title-m
title-sm
title-xs
data-animate
data-gallery
data-content-panels
data-panel
```
