import { createScaffold, createSectionCard } from '../components/layout.js';
import { itemCard, statPill } from '../components/cards.js';
import { getRecentItems } from '../lib/domain.js';

export function renderHome(state) {
  const recentItems = getRecentItems(state.wardrobe, 3);
  const wardrobeCount = state.wardrobe.length;
  const savedCount = state.savedLooks.length;
  const demoCount = state.wardrobe.filter((item) => item.isDemo).length;

  const quickActions = `
    <div class="action-grid">
      <a class="button primary" href="#/items/new">Add an item</a>
      <a class="button secondary" href="#/wardrobe">Open wardrobe</a>
      <button class="button secondary" type="button" data-seed-demo>Load demo wardrobe</button>
      <a class="button secondary" href="#/onboarding">How it works</a>
    </div>
  `;

  const stats = `
    <div class="stats-row">
      ${statPill('Wardrobe items', wardrobeCount)}
      ${statPill('Saved looks', savedCount)}
      ${statPill('Demo pieces', demoCount)}
    </div>
  `;

  const recent = recentItems.length
    ? `<div class="stack-list">${recentItems.map((item) => itemCard(item, { compact: true })).join('')}</div>`
    : '<p class="section-copy">No wardrobe items yet. Start with one item or load the demo wardrobe.</p>';

  return createScaffold({
    title: 'A cleaner way to dress from what you already own',
    subtitle: 'Milestone 1 focuses on app shell, wardrobe foundations, and the new add-item flow.',
    body: `
      ${createSectionCard({
        kicker: 'Quick actions',
        title: 'Start with your wardrobe foundation',
        description: 'Add one item, explore the seeded demo wardrobe, or review the first-run guide.',
        content: `${quickActions}${stats}`,
      })}
      ${createSectionCard({
        kicker: 'How it works',
        title: 'Simple now, expandable later',
        description:
          'Describe one item in natural language, refine the draft, and build a cleaner wardrobe dataset that later powers generation.',
      })}
      ${createSectionCard({
        kicker: 'Recent wardrobe',
        title: 'Your latest items',
        content: recent,
      })}
      ${createSectionCard({
        kicker: 'Saved looks',
        title: 'Reserved for the next milestone step',
        description: 'Saved looks migration is active, and the route exists, but advanced look workflows are intentionally deferred.',
      })}
    `,
  });
}
