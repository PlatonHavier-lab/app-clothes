# Outfit Moodboard (MVP v1)

A bilingual (English + Russian) fashion helper web app that turns your wardrobe into moodboard-like outfit cards.

## What this MVP includes

- Clear homepage with product explanation
- Bilingual UI with quick language switch (EN / RU)
- Wardrobe input form:
  - item name, category, color
  - optional material, notes, image
- Quick text parser to add multiple items at once
- Clean editable wardrobe grid with remove action
- Gender presentation selector (masculine / feminine / neutral)
- Desired vibe input (freeform)
- Rule-based generator that creates 3–5 outfit moodboard cards from wardrobe data
- Moodboard cards include:
  - outfit title
  - selected clothing items
  - color accents
  - accessory suggestion
  - short vibe description
  - occasion suggestion
- Uses uploaded photos when available
- Stylish placeholders when photos are missing
- Demo seed wardrobe data loaded by default
- Mobile-friendly responsive layout

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
- No authentication/payments/marketplace complexity

## Next 3 best improvements after MVP

1. **Persistent local storage + import/export wardrobe** so users keep outfits between sessions.
2. **Smarter outfit engine** (scoring by category balance, palette harmony, weather/season filters).
3. **Optional backend AI text assistant** to rewrite styling advice and explain why each look works.


## Refinement update

- Russian is now the default language on first load, with English still available in the switcher.
- Added subtle premium motion: section fade-in, card/button hover transitions, smooth input focus states, and soft animated reveal for generated moodboards.
- Moodboard cards were refined with cleaner visual hierarchy (occasion chip, premium tile treatment, improved card styling) while staying minimal and mobile-friendly.
