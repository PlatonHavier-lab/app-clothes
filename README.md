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
- Parsing supports commas, semicolons, and line breaks
- Improved Russian parsing heuristics for more natural phrases like colors + materials + clothing types
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
- Local wardrobe persistence via `localStorage`
- Saved looks / favorites stored locally on the same device
- Share/export options for generated looks:
  - copy summary text
  - export text file
  - copy individual saved look summaries
- Uploaded images are stored as data URLs so they can survive page refreshes in local storage
- Curated built-in demo wardrobe now includes 10 embedded text-safe demo images via `demo-image-data.js`
- Styled placeholders are used when images are missing
- Iteration actions after generation:
  - generate more options
  - edit wardrobe
  - change style
- Subtle feedback messages for save/copy/export actions
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
- Refined the visual system to be lighter and calmer: fewer heavy surfaces, softer action hierarchy, more compact wardrobe cards, and cleaner result cards.
- Reduced visual overload across the page by simplifying section treatment, shortening intro copy, and making generated moodboards feel more like styled concepts than text reports.
- Added return-worthy utility improvements: local wardrobe persistence, saved looks, lightweight sharing/export, stronger parser heuristics, subtle success feedback, and a curated text-embedded image-based demo wardrobe.

## Next 3 best improvements after MVP

1. **Add seasonal/weather filters** to help narrow suggestions for real-life use.
2. **Improve parser quality further** so freeform wardrobe descriptions become even more accurate.
3. **Add lightweight organization tools** such as tags, recent looks, and wardrobe search/filtering.
