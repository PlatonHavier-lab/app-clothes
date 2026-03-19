import { createScaffold, createSectionCard } from '../components/layout.js';

export function renderOnboarding(state) {
  return createScaffold({
    title: 'Onboarding',
    subtitle: 'A lightweight first-run guide now exists as a standalone route.',
    body: `
      ${createSectionCard({
        kicker: '1',
        title: 'Add one item in natural language',
        description: 'Start simple: one item leads to a structured draft that improves your wardrobe data.',
      })}
      ${createSectionCard({
        kicker: '2',
        title: 'Use the demo wardrobe if you are empty',
        description: 'The app keeps one real demo wardrobe instead of a separate fake mode.',
      })}
      ${createSectionCard({
        kicker: '3',
        title: 'Build toward generation',
        description: 'Milestone 1 stops at wardrobe foundations so later generation work can stay clean.',
        content: `<div class="inline-actions"><button class="button primary" type="button" data-complete-onboarding>${state.onboarding.seen ? 'Refresh onboarding status' : 'Mark guide as seen'}</button></div>`,
      })}
    `,
  });
}
