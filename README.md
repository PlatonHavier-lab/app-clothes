# Outfit Moodboard (MVP v1)

Outfit Moodboard is a lightweight bilingual (Russian-first + English secondary) fashion helper that turns a personal wardrobe into moodboard-like outfit cards.

## What this MVP includes

- Russian-first onboarding with English available from the language switcher
- Clear 2-step flow:
  - Step 1: add wardrobe items
  - Step 2: choose style and generate moodboards
- Two wardrobe entry methods:
  - structured manual form
  - description-based parser with preview before confirmation
- Parsing supports commas and line breaks
- Preview cards for parsed items showing:
  - item name
  - category
  - color
  - material
- Editable wardrobe grid with remove action
- Audience selector for the look (menswear / womenswear / unisex)
- Style presets plus custom free-text style input
- Rule-based generator that creates 3–5 outfit moodboard cards from wardrobe data
- Result cards include:
  - outfit title
  - selected clothing items
  - color accents
  - accessory suggestion
  - short styling description
  - suggested occasion
- Uploaded images appear inside the generated moodboards when available
- Styled placeholders are used when images are missing
- Iteration actions after generation:
  - generate more options
  - edit wardrobe
  - change style
- Mobile-friendly responsive layout
- Fully static architecture suitable for GitHub Pages

## Run locally

### 1) Start local server

```bash
npm run start
```

Then open: http://localhost:4173

### 2) Optional checks

```bash
npm run check
npm run build
```

`build` creates a static `dist/` folder with the app files.

## Tech choices

- Vanilla HTML/CSS/JavaScript (module script)
- Local state only, no backend
- No authentication, payments, marketplace, or external APIs
- Static deployability preserved for GitHub Pages

## UX refinement update

- Reworked the quick-add flow into a clearer Russian-first description parser with helper text and confirmation-based preview.
- Improved Russian localization consistency across categories, control labels, helper copy, and generated result content.
- Added style preset chips, clearer step separation, and post-generation iteration actions so the user flow feels understandable and repeatable.

## Next 3 best improvements after MVP

1. **Persist wardrobe data locally** with `localStorage` plus import/export.
2. **Improve parsing quality** so descriptions can infer category/color/material more accurately.
3. **Make generation smarter** with weather, season, and color harmony heuristics.
