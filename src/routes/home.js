import { createCollapsibleCard, createScaffold, createSectionCard } from '../components/layout.js';
import { itemCard, statPill } from '../components/cards.js';
import { getRecentItems } from '../lib/domain.js';

export function renderHome(state) {
  const recentItems = getRecentItems(state.wardrobe, 3);
  const wardrobeCount = state.wardrobe.length;
  const savedCount = state.savedLooks.length;
  const demoCount = state.wardrobe.filter((item) => item.isDemo).length;

  const quickActions = `
    <div class="compact-action-grid">
      <a class="button primary big-action" href="#/items/new">Добавить вещь</a>
      <a class="button secondary" href="#/wardrobe">Открыть гардероб</a>
      <button class="button secondary" type="button" data-seed-demo>Загрузить демо</button>
    </div>
  `;

  const stats = `
    <div class="stats-row compact-stats">
      ${statPill('Вещи', wardrobeCount)}
      ${statPill('Сохранено', savedCount)}
      ${statPill('Демо', demoCount)}
    </div>
  `;

  const recent = recentItems.length
    ? `<div class="stack-list compact-list">${recentItems.map((item) => itemCard(item, { compact: true })).join('')}</div>`
    : '<p class="section-copy">Пока пусто. Начните с одной вещи или быстро откройте демо-гардероб.</p>';

  return createScaffold({
    title: 'Одевайтесь лучше из того, что уже есть у вас',
    subtitle: 'Компактная домашняя точка входа: быстрые действия, краткие подсказки и последние вещи без перегруза.',
    body: `
      ${createSectionCard({
        kicker: 'Сегодня',
        title: 'Быстрый старт',
        description: 'Сначала добавьте одну вещь, затем постепенно собирайте полезную базу гардероба.',
        content: `${quickActions}${stats}`,
        extraClass: 'hero-card compact-hero',
      })}
      <section class="home-stack">
        ${createCollapsibleCard({
          id: 'home-how-it-works',
          kicker: 'Как это работает',
          title: 'Коротко о сценарии',
          preview: 'Опишите вещь, уточните поля и сохраните её в гардероб.',
          content: `
            <p class="section-copy">Основной поток в этом этапе максимально простой: одна вещь → черновик → сохранение. Так мы аккуратно подготавливаем гардероб к следующему этапу подбора образов.</p>
            <div class="mini-points">
              <span>1. Описываете вещь естественно</span>
              <span>2. Проверяете категорию и цвет</span>
              <span>3. Добавляете сезон, стиль и повод</span>
            </div>
          `,
        })}
        ${createCollapsibleCard({
          id: 'home-help',
          kicker: 'Подсказки',
          title: 'Помощь по первому запуску',
          preview: 'Если гардероб пустой, используйте демо-режим как реальный пример данных.',
          content: `
            <p class="section-copy">Демо-гардероб не отделён от продукта: это такой же рабочий набор вещей, на котором можно быстро понять будущую механику сервиса.</p>
            <div class="inline-actions compact-inline-actions">
              <button class="button secondary" type="button" data-seed-demo>Открыть демо-гардероб</button>
              <a class="button secondary" href="#/onboarding">Открыть гид</a>
            </div>
          `,
        })}
      </section>
      ${createSectionCard({
        kicker: 'Недавнее',
        title: 'Последние вещи',
        content: recent,
        extraClass: 'compact-section',
      })}
    `,
  });
}
