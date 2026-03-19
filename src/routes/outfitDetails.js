import { createScaffold, createSectionCard } from '../components/layout.js';

export function renderOutfitDetails(state, params) {
  const look = state.savedLooks.find((entry) => entry.id === params.outfitId);
  return createScaffold({
    title: look?.title || 'Outfit Details',
    subtitle: 'This route is intentionally a placeholder in Milestone 1 so routing is established before visual outputs.',
    body: createSectionCard({
      kicker: 'Route skeleton',
      title: 'Outfit details reserved for later milestone work',
      description: look ? look.description || 'Migrated look data is available.' : 'No outfit data loaded for this route yet.',
    }),
  });
}
