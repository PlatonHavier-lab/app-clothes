import { itemCard } from '../components/cards.js';
import { createEmptyState, createScaffold, createSectionCard } from '../components/layout.js';
import { categories, filterWardrobe, occasions, seasons } from '../lib/domain.js';

function optionList(options, selected) {
  return options
    .map((option) => `<option value="${option.value}" ${option.value === selected ? 'selected' : ''}>${option.label}</option>`)
    .join('');
}

export function renderWardrobe(state, params, query) {
  const filters = {
    category: query.get('category') || 'all',
    season: query.get('season') || 'all',
    occasion: query.get('occasion') || 'all',
  };

  const filtered = filterWardrobe(state.wardrobe, filters);
  const recentMarkup = state.wardrobe.length
    ? `<p class="hint-line">Recent: ${state.wardrobe
        .slice(-3)
        .reverse()
        .map((item) => item.name)
        .join(' · ')}</p>`
    : '';

  const filtersMarkup = `
    <form class="filters-form" data-filters-form>
      <label>
        Category
        <select name="category">
          <option value="all">All categories</option>
          ${optionList(categories, filters.category)}
        </select>
      </label>
      <label>
        Season
        <select name="season">
          ${optionList(seasons, filters.season)}
        </select>
      </label>
      <label>
        Occasion
        <select name="occasion">
          ${optionList(occasions, filters.occasion)}
        </select>
      </label>
    </form>
  `;

  const body = filtered.length
    ? `<div class="item-grid">${filtered.map((item) => itemCard(item)).join('')}</div>`
    : createEmptyState({
        title: 'Your wardrobe is still empty',
        text: 'Load the demo wardrobe or add your first item through the new natural-language flow.',
        actionHref: '/items/new',
        actionLabel: 'Add an item',
      });

  return createScaffold({
    title: 'My Wardrobe',
    subtitle: 'Filter by category, season, and occasion while the richer organization layer is still intentionally light.',
    body: `
      ${createSectionCard({
        kicker: 'Filters',
        title: 'Browse your current wardrobe',
        description: 'These filters are foundational and intentionally simple for Milestone 1.',
        content: `${filtersMarkup}
          <div class="inline-actions">
            <a class="button primary" href="#/items/new">Add item</a>
            <button class="button secondary" type="button" data-seed-demo>Load demo wardrobe</button>
          </div>
          ${recentMarkup}`,
      })}
      ${createSectionCard({
        kicker: 'Items',
        title: `${filtered.length} item${filtered.length === 1 ? '' : 's'}`,
        content: body,
      })}
    `,
  });
}
