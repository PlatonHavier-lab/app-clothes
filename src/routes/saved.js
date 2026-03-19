import { createScaffold, createSectionCard } from '../components/layout.js';

export function renderSaved(state) {
  return createScaffold({
    title: 'Saved Looks',
    subtitle: 'Legacy saved looks are migrated into the new storage layer, while richer saved workflows are deferred.',
    body: createSectionCard({
      kicker: 'Migration-aware',
      title: `${state.savedLooks.length} saved look${state.savedLooks.length === 1 ? '' : 's'}`,
      description: state.savedLooks.length
        ? state.savedLooks.map((look) => look.title).join(' · ')
        : 'No saved looks yet. This route exists now so later milestones can build on migrated data safely.',
    }),
  });
}
