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
    ? `<p class="hint-line">Недавние: ${state.wardrobe
        .slice(-3)
        .reverse()
        .map((item) => item.name)
        .join(' · ')}</p>`
    : '';

  const filtersMarkup = `
    <form class="filters-form" data-filters-form>
      <label>
        Категория
        <select name="category">
          <option value="all">Все категории</option>
          ${optionList(categories, filters.category)}
        </select>
      </label>
      <label>
        Сезон
        <select name="season">
          ${optionList(seasons, filters.season)}
        </select>
      </label>
      <label>
        Повод
        <select name="occasion">
          ${optionList(occasions, filters.occasion)}
        </select>
      </label>
    </form>
  `;

  const body = filtered.length
    ? `<div class="item-grid">${filtered.map((item) => itemCard(item)).join('')}</div>`
    : createEmptyState({
        title: 'Гардероб пока пустой',
        text: 'Загрузите демо-гардероб или добавьте первую вещь через новый поток с описанием.',
        actionHref: '/items/new',
        actionLabel: 'Добавить вещь',
      });

  return createScaffold({
    title: 'Мой гардероб',
    subtitle: 'Базовый экран уже помогает просматривать вещи по категории, сезону и поводу.',
    body: `
      ${createSectionCard({
        kicker: 'Фильтры',
        title: 'Просмотр текущего гардероба',
        description: 'Пока фильтры остаются лёгкими и утилитарными — без расширенной организации.',
        content: `${filtersMarkup}
          <div class="inline-actions compact-inline-actions">
            <a class="button primary" href="#/items/new">Добавить вещь</a>
            <button class="button secondary" type="button" data-seed-demo>Загрузить демо</button>
          </div>
          ${recentMarkup}`,
      })}
      ${createSectionCard({
        kicker: 'Вещи',
        title: `${filtered.length} ${filtered.length === 1 ? 'вещь' : filtered.length < 5 ? 'вещи' : 'вещей'}`,
        content: body,
      })}
    `,
  });
}
