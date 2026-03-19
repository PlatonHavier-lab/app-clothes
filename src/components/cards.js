import { labelForCategory } from '../lib/domain.js';

function swatchStyle(item) {
  const map = {
    Black: 'linear-gradient(135deg, #2a2926, #555148)',
    White: 'linear-gradient(135deg, #ffffff, #ebe6de)',
    Blue: 'linear-gradient(135deg, #647ca6, #2f4f80)',
    'Dark blue': 'linear-gradient(135deg, #24354d, #4e6b97)',
    Beige: 'linear-gradient(135deg, #d5c1a0, #f0e4cf)',
    Camel: 'linear-gradient(135deg, #a77f58, #e1c7ab)',
    Cream: 'linear-gradient(135deg, #f6eee1, #d9ccb6)',
    Grey: 'linear-gradient(135deg, #b5b0a9, #ece6de)',
    Gold: 'linear-gradient(135deg, #d6b15f, #f3e5b8)',
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
            ${item.isDemo ? '<span class="tag">Demo</span>' : ''}
          </div>
          <p>${item.color}${item.material ? ` · ${item.material}` : ''}</p>
          <p class="meta-row">${labelForCategory(item.category)} · ${item.season || 'all-season'}${item.occasion ? ` · ${item.occasion}` : ''}</p>
        </div>
      </a>
    </article>
  `;
}

export function statPill(label, value) {
  return `<div class="stat-pill"><span>${label}</span><strong>${value}</strong></div>`;
}
