# App Clothes — Milestone 1

This branch contains the first migration milestone for rebuilding the project into a mobile-first multi-page wardrobe app that remains static-host friendly.

## Included in Milestone 1

- Mobile-first app shell centered on desktop
- Hash-based route foundation for GitHub Pages-safe navigation
- Route skeletons for:
  - `/`
  - `/wardrobe`
  - `/generate`
  - `/saved`
  - `/onboarding`
  - `/items/new`
  - `/items/:itemId`
  - `/outfits/:outfitId`
- New storage layer with schema versioning
- Safe migration bridge from legacy localStorage keys:
  - `outfit-moodboard:wardrobe`
  - `outfit-moodboard:saved-looks`
  - `outfit-moodboard:prefs`
- Demo wardrobe seeding in the new data layer
- Functional wardrobe screen with:
  - item cards
  - category filter
  - season filter
  - occasion filter
  - empty state
  - demo wardrobe CTA
- Functional add-item route with natural-language parsing and a structured draft form
- Functional item details/edit route with delete support

## Run locally

```bash
npm install
npm run start
```

Then open `http://localhost:4173`.

## Checks

```bash
npm run check
npm run build
```

## Notes

- The current milestone intentionally stops before advanced generation workflows, outfit visual rendering modes, and the full saved-looks product surface.
- The app remains static and GitHub Pages-compatible because routing uses the hash portion of the URL.
