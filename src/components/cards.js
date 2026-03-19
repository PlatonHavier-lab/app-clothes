import { labelForCategory, labelForOccasion, labelForSeason } from '../lib/domain.js';

function swatchStyle(item) {
  const map = {
    'Чёрный': 'linear-gradient(135deg, #2a2926, #555148)',
    'Белый': 'linear-gradient(135deg, #ffffff, #ebe6de)',
    'Синий': 'linear-gradient(135deg, #647ca6, #2f4f80)',
    'Тёмно-синий': 'linear-gradient(135deg, #24354d, #4e6b97)',
    'Бежевый': 'linear-gradient(135deg, #d5c1a0, #f0e4cf)',
    'Кэмел': 'linear-gradient(135deg, #a77f58, #e1c7ab)',
    'Молочный': 'linear-gradient(135deg, #f6eee1, #d9ccb6)',
    'Серый': 'linear-gradient(135deg, #b5b0a9, #ece6de)',
    'Золотой': 'linear-gradient(135deg, #d6b15f, #f3e5b8)',
  };
  return map[item.color] || 'linear-gradient(135deg, #d6cec2, #f4efe7)';
}

export function itemCard(item, { compact = false } = {}) {
  return `
    <article class="item-card card ${compact ? 'compact-item' : ''}">
      <a class="item-link" href="#/items/${item.id}">
        <div class="item-visual" style="background:${swatchStyle(item)}">
          <span>${labelForCategory(item.category)}</span>
        </div>
        <div class="item-meta">
          <div class="item-title-row">
            <h3>${item.name}</h3>
            ${item.isDemo ? '<span class="tag">Демо</span>' : ''}
          </div>
          <p>${item.color}${item.material ? ` · ${item.material}` : ''}</p>
          <p class="meta-row">${labelForCategory(item.category)} · ${labelForSeason(item.season)}${item.occasion ? ` · ${labelForOccasion(item.occasion)}` : ''}</p>
        </div>
      </a>
    </article>
  `;
}

export function statPill(label, value) {
  return `<div class="stat-pill"><span>${label}</span><strong>${value}</strong></div>`;
}
