const translations = {
  en: {
    appName: 'Outfit Moodboard',
    tagline: 'Turn your wardrobe into polished outfit ideas in minutes.',
    description:
      'Describe what you own, upload optional photos, choose presentation and vibe, then generate moodboard-like outfit cards without human models.',
    language: 'Language',
    wardrobeInput: 'Wardrobe input',
    quickAdd: 'Quick text add (comma-separated)',
    parseItems: 'Add items from text',
    itemName: 'Item name',
    category: 'Category',
    color: 'Color',
    material: 'Material (optional)',
    notes: 'Notes (optional)',
    image: 'Image (optional)',
    addItem: 'Add item',
    wardrobeList: 'Your wardrobe',
    emptyWardrobe: 'No items yet. Use seed data or add your own pieces.',
    remove: 'Remove',
    gender: 'Gender presentation',
    masculine: 'Masculine',
    feminine: 'Feminine',
    neutral: 'Neutral',
    vibe: 'Desired style / vibe',
    generate: 'Generate outfit moodboards',
    generated: 'Generated moodboards',
    selectedItems: 'Selected items',
    accents: 'Color accents',
    accessories: 'Suggested accessories',
    mood: 'Vibe',
    occasion: 'Occasion',
    placeholder: 'No photo provided',
    seed: 'Load demo wardrobe',
    clear: 'Clear wardrobe',
    styleHint: 'e.g. minimalism, streetwear, soft office, dark academia, casual date',
  },
  ru: {
    appName: 'Outfit Moodboard',
    tagline: 'Соберите стильные образы из своего гардероба за пару минут.',
    description:
      'Опишите вещи, при желании загрузите фото, выберите подачу и вайб — и получите карточки образов без моделей.',
    language: 'Язык',
    wardrobeInput: 'Ввод гардероба',
    quickAdd: 'Быстрое добавление (через запятую)',
    parseItems: 'Добавить из текста',
    itemName: 'Название вещи',
    category: 'Категория',
    color: 'Цвет',
    material: 'Материал (необязательно)',
    notes: 'Заметки (необязательно)',
    image: 'Фото (необязательно)',
    addItem: 'Добавить вещь',
    wardrobeList: 'Ваш гардероб',
    emptyWardrobe: 'Пока нет вещей. Загрузите демо-набор или добавьте свои.',
    remove: 'Удалить',
    gender: 'Гендерная подача',
    masculine: 'Маскулинная',
    feminine: 'Феминная',
    neutral: 'Нейтральная',
    vibe: 'Желаемый стиль / вайб',
    generate: 'Сгенерировать moodboard-образы',
    generated: 'Сгенерированные moodboards',
    selectedItems: 'Выбранные вещи',
    accents: 'Цветовые акценты',
    accessories: 'Аксессуары',
    mood: 'Вайб',
    occasion: 'Повод',
    placeholder: 'Фото не загружено',
    seed: 'Загрузить демо-гардероб',
    clear: 'Очистить гардероб',
    styleHint: 'например: минимализм, стритвир, soft office, dark academia',
  },
};

const demoItems = [
  { name: 'White oxford shirt', category: 'Top', color: 'White', material: 'Cotton', notes: 'Slightly oversized' },
  { name: 'Black tailored trousers', category: 'Bottom', color: 'Black', material: 'Wool blend', notes: '' },
  { name: 'Blue straight jeans', category: 'Bottom', color: 'Blue', material: 'Denim', notes: 'High-rise' },
  { name: 'Beige trench coat', category: 'Outerwear', color: 'Beige', material: 'Gabardine', notes: '' },
  { name: 'White sneakers', category: 'Shoes', color: 'White', material: 'Leather', notes: '' },
  { name: 'Black loafers', category: 'Shoes', color: 'Black', material: 'Leather', notes: '' },
  { name: 'Silver hoop earrings', category: 'Accessory', color: 'Silver', material: '', notes: '' },
];

const categories = ['Top', 'Bottom', 'Dress', 'Outerwear', 'Shoes', 'Accessory'];

const state = {
  language: 'ru',
  gender: 'neutral',
  vibe: 'effortless everyday',
  quickText: '',
  newItem: { name: '', category: 'Top', color: '', material: '', notes: '', image: null },
  wardrobe: demoItems.map((item, i) => ({ ...item, id: `demo-${i}`, image: null })),
  outfits: [],
};

const app = document.getElementById('app');

function t(key) {
  return translations[state.language][key];
}

function choose(pool) {
  return pool[Math.floor(Math.random() * pool.length)];
}

function normalize(text) {
  return (text || '').toLowerCase();
}

function findByCategory(items, category) {
  return items.filter((item) => normalize(item.category).includes(normalize(category)));
}

function smartPick(items, vibe, gender) {
  const tops = findByCategory(items, 'top');
  const bottoms = findByCategory(items, 'bottom');
  const dresses = findByCategory(items, 'dress');
  const outerwear = findByCategory(items, 'outerwear');
  const shoes = findByCategory(items, 'shoes');
  const accessory = findByCategory(items, 'accessory');

  const result = [];
  if (dresses.length && vibe.includes('soft')) result.push(choose(dresses));
  else {
    if (tops.length) result.push(choose(tops));
    if (bottoms.length) result.push(choose(bottoms));
  }

  if (outerwear.length && (vibe.includes('office') || vibe.includes('academia') || Math.random() > 0.45)) {
    result.push(choose(outerwear));
  }
  if (shoes.length) result.push(choose(shoes));
  if (accessory.length || Math.random() > 0.3) {
    if (accessory.length) result.push(choose(accessory));
  }

  if (gender === 'masculine') {
    const masculineItem = items.find((it) => normalize(it.notes).includes('structured') || normalize(it.name).includes('blazer'));
    if (masculineItem && !result.includes(masculineItem)) result.push(masculineItem);
  }

  if (gender === 'feminine') {
    const feminineItem = items.find((it) => normalize(it.name).includes('skirt') || normalize(it.name).includes('dress'));
    if (feminineItem && !result.includes(feminineItem)) result.push(feminineItem);
  }

  return [...new Set(result)].slice(0, 5);
}

function buildOutfits() {
  const vibe = normalize(state.vibe);
  const count = Math.min(5, Math.max(3, state.wardrobe.length >= 8 ? 5 : 3));
  const occasions = ['Casual city day', 'Creative office', 'Coffee date', 'Gallery visit', 'Weekend dinner'];
  const occasionsRu = ['День в городе', 'Креативный офис', 'Кофейное свидание', 'Поход в галерею', 'Ужин на выходных'];
  const accessoryIdeas =
    state.language === 'ru'
      ? ['Минималистичные украшения', 'Кожаный ремень', 'Текстурная сумка', 'Солнцезащитные очки', 'Тонкий шарф']
      : ['Minimal jewelry', 'Leather belt', 'Textured bag', 'Sunglasses', 'Light scarf'];

  state.outfits = Array.from({ length: count }).map((_, index) => {
    const picked = smartPick(state.wardrobe, vibe, state.gender);
    const colors = [...new Set(picked.map((item) => item.color).filter(Boolean))].slice(0, 3);
    const titleBase =
      state.language === 'ru'
        ? ['Собранный минимализм', 'Городская эстетика', 'Мягкий smart casual', 'Тихая уверенность', 'База + акцент']
        : ['Curated Minimal', 'City Texture', 'Soft Smart Casual', 'Quiet Confidence', 'Base + Accent'];

    return {
      id: `outfit-${Date.now()}-${index}`,
      title: `${titleBase[index % titleBase.length]} #${index + 1}`,
      items: picked,
      accents: colors.length ? colors : state.language === 'ru' ? ['Нейтральная палитра'] : ['Neutral palette'],
      accessories: choose(accessoryIdeas),
      vibeText:
        state.language === 'ru'
          ? `Образ в стиле "${state.vibe}" с балансом базовых и выразительных элементов.`
          : `A ${state.vibe} outfit balancing essentials with one expressive touch.`,
      occasion: state.language === 'ru' ? occasionsRu[index % occasionsRu.length] : occasions[index % occasions.length],
    };
  });
}

function addItem(item) {
  if (!item.name.trim()) return;
  state.wardrobe.push({ ...item, id: `item-${Date.now()}-${Math.random().toString(16).slice(2)}` });
}

function render() {
  const lang = state.language;
  app.innerHTML = `
    <main class="container fade-in">
      <header class="hero card section-fade" style="--delay: 40ms;">
        <div>
          <p class="eyebrow">MVP v1</p>
          <h1>${t('appName')}</h1>
          <p class="tagline">${t('tagline')}</p>
          <p class="description">${t('description')}</p>
        </div>
        <label class="lang-switch">${t('language')}
          <select id="language">
            <option value="ru" ${lang === 'ru' ? 'selected' : ''}>Русский</option>
            <option value="en" ${lang === 'en' ? 'selected' : ''}>English</option>
          </select>
        </label>
      </header>

      <section class="controls-grid section-fade" style="--delay: 90ms;">
        <section class="card form-card">
          <h2>${t('wardrobeInput')}</h2>
          <label>${t('quickAdd')}
            <textarea id="quickText" rows="2" placeholder="white shirt, black jeans, beige blazer">${state.quickText}</textarea>
          </label>
          <button id="parseItems" class="secondary">${t('parseItems')}</button>

          <div class="row-2">
            <label>${t('itemName')}<input id="name" value="${state.newItem.name}" /></label>
            <label>${t('category')}
              <select id="category">${categories
                .map((c) => `<option value="${c}" ${state.newItem.category === c ? 'selected' : ''}>${c}</option>`)
                .join('')}</select>
            </label>
          </div>
          <div class="row-2">
            <label>${t('color')}<input id="color" value="${state.newItem.color}" /></label>
            <label>${t('material')}<input id="material" value="${state.newItem.material}" /></label>
          </div>
          <label>${t('notes')}<input id="notes" value="${state.newItem.notes}" /></label>
          <label>${t('image')}<input id="image" type="file" accept="image/*" /></label>
          <div class="actions-row">
            <button id="addItem">${t('addItem')}</button>
            <button id="seed" class="secondary">${t('seed')}</button>
            <button id="clear" class="ghost">${t('clear')}</button>
          </div>
        </section>

        <section class="card settings-card">
          <label>${t('gender')}
            <select id="gender">
              <option value="masculine" ${state.gender === 'masculine' ? 'selected' : ''}>${t('masculine')}</option>
              <option value="feminine" ${state.gender === 'feminine' ? 'selected' : ''}>${t('feminine')}</option>
              <option value="neutral" ${state.gender === 'neutral' ? 'selected' : ''}>${t('neutral')}</option>
            </select>
          </label>
          <label>${t('vibe')}
            <input id="vibe" value="${state.vibe}" placeholder="${t('styleHint')}" />
          </label>
          <button id="generate" class="primary">${t('generate')}</button>
        </section>
      </section>

      <section class="card section-fade" style="--delay: 140ms;">
        <h2>${t('wardrobeList')}</h2>
        <div class="wardrobe-grid">
          ${
            state.wardrobe.length
              ? state.wardrobe
                  .map(
                    (item) => `<article class="wardrobe-item interactive-card">
                  <div class="thumb ${item.image ? '' : 'placeholder'}">${
                      item.image ? `<img src="${item.image}" alt="${item.name}"/>` : `<span>${t('placeholder')}</span>`
                    }</div>
                  <div>
                    <h3>${item.name}</h3>
                    <p>${item.category} · ${item.color || '—'}</p>
                    <p>${item.material || ''} ${item.notes ? `· ${item.notes}` : ''}</p>
                  </div>
                  <button data-remove="${item.id}" class="ghost small">${t('remove')}</button>
                </article>`
                  )
                  .join('')
              : `<p>${t('emptyWardrobe')}</p>`
          }
        </div>
      </section>

      <section class="card section-fade" style="--delay: 190ms;">
        <h2>${t('generated')}</h2>
        <div class="moodboards">
          ${state.outfits
            .map(
              (outfit, index) => `<article class="moodboard-card moodboard-appear" style="--card-delay: ${index * 70}ms;">
                <div class="moodboard-head">
                  <h3>${outfit.title}</h3>
                  <span class="chip">${outfit.occasion}</span>
                </div>
                <div class="moodboard-visuals premium-tiles">
                  ${outfit.items
                    .slice(0, 4)
                    .map(
                      (item) => `<div class="tile ${item.image ? '' : 'tile-placeholder'}">${
                        item.image
                          ? `<img src="${item.image}" alt="${item.name}"/>`
                          : `<span>${item.name}<small>${item.color || ''}</small></span>`
                      }</div>`
                    )
                    .join('')}
                </div>
                <ul>
                  <li><strong>${t('selectedItems')}:</strong> ${outfit.items.map((i) => i.name).join(', ')}</li>
                  <li><strong>${t('accents')}:</strong> ${outfit.accents.join(', ')}</li>
                  <li><strong>${t('accessories')}:</strong> ${outfit.accessories}</li>
                  <li><strong>${t('mood')}:</strong> ${outfit.vibeText}</li>
                  <li><strong>${t('occasion')}:</strong> ${outfit.occasion}</li>
                </ul>
              </article>`
            )
            .join('')}
        </div>
      </section>
    </main>
  `;

  bindEvents();
}

function bindEvents() {
  document.getElementById('language').onchange = (e) => {
    state.language = e.target.value;
    render();
  };

  document.getElementById('quickText').oninput = (e) => {
    state.quickText = e.target.value;
  };

  document.getElementById('parseItems').onclick = () => {
    const items = state.quickText
      .split(',')
      .map((chunk) => chunk.trim())
      .filter(Boolean)
      .map((name) => ({ name, category: 'Top', color: '', material: '', notes: '', image: null }));
    items.forEach(addItem);
    state.quickText = '';
    render();
  };

  ['name', 'category', 'color', 'material', 'notes'].forEach((field) => {
    document.getElementById(field).oninput = (e) => {
      state.newItem[field] = e.target.value;
    };
  });

  document.getElementById('image').onchange = (e) => {
    const file = e.target.files[0];
    if (file) state.newItem.image = URL.createObjectURL(file);
  };

  document.getElementById('addItem').onclick = () => {
    addItem({ ...state.newItem });
    state.newItem = { name: '', category: 'Top', color: '', material: '', notes: '', image: null };
    render();
  };

  document.getElementById('seed').onclick = () => {
    state.wardrobe = demoItems.map((item, i) => ({ ...item, id: `demo-${Date.now()}-${i}`, image: null }));
    render();
  };

  document.getElementById('clear').onclick = () => {
    state.wardrobe = [];
    state.outfits = [];
    render();
  };

  document.getElementById('gender').onchange = (e) => {
    state.gender = e.target.value;
  };

  document.getElementById('vibe').oninput = (e) => {
    state.vibe = e.target.value;
  };

  document.getElementById('generate').onclick = () => {
    buildOutfits();
    render();
  };

  document.querySelectorAll('[data-remove]').forEach((button) => {
    button.onclick = () => {
      state.wardrobe = state.wardrobe.filter((item) => item.id !== button.dataset.remove);
      render();
    };
  });
}

render();
