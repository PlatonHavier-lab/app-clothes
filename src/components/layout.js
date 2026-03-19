export function createScaffold({ title = '', subtitle = '', body = '', showTabs = true }) {
  return `
    <div class="app-frame">
      <div class="phone-shell">
        <header class="topbar">
          <div>
            <p class="eyebrow">App Clothes</p>
            <h1>${title}</h1>
            ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ''}
          </div>
          <a class="ghost-link" href="#/onboarding">Guide</a>
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
    ['/', 'Home', '⌂'],
    ['/wardrobe', 'Wardrobe', '◫'],
    ['/generate', 'Generate', '✦'],
    ['/saved', 'Saved', '♡'],
  ];

  return `
    <nav class="tabbar" aria-label="Primary">
      ${tabs
        .map(([href, label, icon]) => {
          const isActive = active === href;
          return `<a class="tab ${isActive ? 'active' : ''}" href="#${href}"><span>${icon}</span><strong>${label}</strong></a>`;
        })
        .join('')}
    </nav>
  `;
}

export function createSectionCard({ kicker = '', title = '', description = '', content = '' }) {
  return `
    <section class="card section-card">
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
