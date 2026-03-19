import { createScaffold, createSectionCard } from '../components/layout.js';

export function renderGenerate() {
  return createScaffold({
    title: 'Generate',
    subtitle: 'The route shell is in place. Advanced generation controls and look rendering are intentionally deferred.',
    body: createSectionCard({
      kicker: 'Milestone 1 route',
      title: 'Generation will build on this shell next',
      description: 'Hash routing, app shell, and storage are ready so the next milestone can focus on practical generation logic.',
      content: '<p class="section-copy">No outfit visual modes yet by design.</p>',
    }),
  });
}
