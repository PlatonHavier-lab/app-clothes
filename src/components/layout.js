export function createScaffold({ title = '', subtitle = '', body = '', showTabs = true }) {
  return `
    <div class="app-frame">
      <div class="phone-shell">
        <header class="topbar">
          <div>
            <p class="eyebrow">МОЙ ГАРДЕРОБ</p>
            <h1>${title}</h1>
            ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ''}
          </div>
          <a class="ghost-link" href="#/onboarding">Гид</a>
        </header>
        <main class="screen-body">${body}</main>
        ${showTabs ? bottomTabs() : ''}
      </div>
    </div>
  `;
}

function bottomTabs() {
  const active = location.hash.replace('#', '') || '/';
  const tabs = [
    ['/', 'Главная', '⌂'],
    ['/wardrobe', 'Гардероб', '◫'],
    ['/generate', 'Подбор', '✦'],
    ['/saved', 'Сохранённое', '♡'],
  ];

  return `
    <nav class="tabbar" aria-label="Основная навигация">
      ${tabs
        .map(([href, label, icon]) => {
          const isActive = active === href;
          return `<a class="tab ${isActive ? 'active' : ''}" href="#${href}"><span>${icon}</span><strong>${label}</strong></a>`;
        })
        .join('')}
    </nav>
  `;
}

export function createSectionCard({ kicker = '', title = '', description = '', content = '', extraClass = '' }) {
  return `
    <section class="card section-card ${extraClass}">
      ${kicker ? `<p class="section-kicker">${kicker}</p>` : ''}
      ${title ? `<h2>${title}</h2>` : ''}
      ${description ? `<p class="section-copy">${description}</p>` : ''}
      ${content}
    </section>
  `;
}

export function createEmptyState({ title, text, actionHref, actionLabel }) {
  return `
    <div class="empty-state card muted-card">
      <h3>${title}</h3>
      <p>${text}</p>
      ${actionHref ? `<a class="button primary" href="#${actionHref}">${actionLabel}</a>` : ''}
    </div>
  `;
}

export function createCollapsibleCard({ id, kicker, title, preview, content, open = false }) {
  return `
    <section class="card collapsible-card ${open ? 'is-open' : ''}" data-collapsible>
      <button class="collapsible-trigger" type="button" data-collapsible-toggle aria-expanded="${open ? 'true' : 'false'}" aria-controls="${id}">
        <div>
          ${kicker ? `<p class="section-kicker">${kicker}</p>` : ''}
          <h3>${title}</h3>
          ${preview ? `<p class="section-copy compact-copy">${preview}</p>` : ''}
        </div>
        <span class="chevron">⌄</span>
      </button>
      <div id="${id}" class="collapsible-panel">
        <div class="collapsible-inner">
          ${content}
        </div>
      </div>
    </section>
  `;
}
