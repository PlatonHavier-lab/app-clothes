const STORAGE_KEYS = {
  wardrobe: 'outfit-moodboard:wardrobe',
  savedLooks: 'outfit-moodboard:saved-looks',
  prefs: 'outfit-moodboard:prefs',
};

const categoryDefinitions = [
  { id: 'top', en: 'Top', ru: 'Верх' },
  { id: 'bottom', en: 'Bottom', ru: 'Низ' },
  { id: 'dress', en: 'Dress', ru: 'Платье' },
  { id: 'outerwear', en: 'Outerwear', ru: 'Верхняя одежда' },
  { id: 'shoes', en: 'Shoes', ru: 'Обувь' },
  { id: 'accessory', en: 'Accessory', ru: 'Аксессуар' },
];

const stylePresets = [
  { id: 'casual', en: 'casual', ru: 'кэжуал' },
  { id: 'classic', en: 'classic', ru: 'классика' },
  { id: 'streetwear', en: 'streetwear', ru: 'стритвир' },
  { id: 'sporty', en: 'sporty', ru: 'спорт' },
  { id: 'smart casual', en: 'smart casual', ru: 'смарт кэжуал' },
  { id: 'minimalism', en: 'minimalism', ru: 'минимализм' },
];

const translations = {
  en: {
    appName: 'Outfit Moodboard',
    tagline: 'Elegant outfit ideas built from the wardrobe you already own.',
    description: 'Add a few pieces, choose a style, and generate elegant outfit moodboards without human models.',
    language: 'Language',
    step1: 'Step 1',
    step1Title: 'Add wardrobe items',
    step1Text: 'Add a few key pieces first. When the base is ready, move into styling.',
    quickAdd: 'Add item by description',
    quickAddHelper: 'You can write phrases like “black leather jacket”, “light blue jeans”, or “beige wool coat”. Separate items with commas or line breaks.',
    parseItems: 'Preview parsed items',
    previewTitle: 'Preview before adding',
    previewEmpty: 'Parsed items will appear here before they are added to the wardrobe.',
    confirmPreview: 'Add to wardrobe',
    itemName: 'Item name',
    category: 'Category',
    color: 'Color',
    material: 'Material (optional)',
    notes: 'Notes (optional)',
    image: 'Image (optional)',
    addItem: 'Add manually',
    wardrobeList: 'Current wardrobe',
    wardrobeText: 'These are the pieces used to build outfit moodboards.',
    wardrobeCount: 'items',
    emptyWardrobe: 'No items yet. Add your own pieces or load demo wardrobe.',
    remove: 'Remove',
    audience: 'Who is the look for',
    masculine: 'menswear',
    feminine: 'womenswear',
    neutral: 'unisex',
    vibe: 'Desired style',
    vibeHelper: 'Choose a preset or type your own style.',
    customStyle: 'Custom style',
    styleHint: 'e.g. soft office, casual date, dark academia',
    step2: 'Step 2',
    step2Title: 'Choose style and generate',
    step2Text: 'When the wardrobe is ready, generate 3–5 outfit moodboards from those pieces.',
    step2Inactive: 'Add at least one wardrobe item to continue to styling.',
    generate: 'Generate outfit moodboards',
    generated: 'Outfit moodboards',
    selectedItems: 'Selected items',
    accents: 'Color accents',
    accessories: 'Accessories',
    occasion: 'Occasion',
    seed: 'Load demo wardrobe',
    clear: 'Clear',
    moreOptions: 'Show more options',
    editWardrobe: 'Edit wardrobe',
    changeStyle: 'Change style',
    helperGenerated: 'Keep refining the result without leaving the page.',
    manualSection: 'Add one item manually',
    previewName: 'Name',
    previewCategory: 'Category',
    previewColor: 'Color',
    previewMaterial: 'Material',
    shareResults: 'Copy summary',
    exportResults: 'Export text',
    saveLook: 'Save look',
    savedLooks: 'Saved looks',
    savedLooksText: 'Keep favorite outfit ideas for later.',
    noSavedLooks: 'Saved looks will appear here.',
    removeSaved: 'Remove saved',
    shareSaved: 'Copy look',
    feedbackWardrobeSaved: 'Wardrobe saved locally.',
    feedbackItemAdded: 'Item added to wardrobe.',
    feedbackLookSaved: 'Look saved locally.',
    feedbackCopied: 'Copied successfully.',
    feedbackExported: 'Export started.',
  },
  ru: {
    appName: 'Outfit Moodboard',
    tagline: 'Элегантные идеи образов из вещей, которые уже есть у вас в гардеробе.',
    description: 'Добавьте несколько вещей, выберите стиль и получите элегантные moodboard-образы без моделей.',
    language: 'Язык',
    step1: 'Шаг 1',
    step1Title: 'Добавьте вещи из гардероба',
    step1Text: 'Сначала соберите базу вещей. Когда гардероб готов, переходите к стилизации.',
    quickAdd: 'Добавить вещь по описанию',
    quickAddHelper: 'Можно писать естественно: «черная кожаная куртка», «светло-голубые джинсы», «бежевое шерстяное пальто». Разделяйте вещи запятыми или переносами строк.',
    parseItems: 'Посмотреть разбор',
    previewTitle: 'Предпросмотр перед добавлением',
    previewEmpty: 'Здесь появятся распознанные вещи до того, как вы добавите их в гардероб.',
    confirmPreview: 'Добавить в гардероб',
    itemName: 'Название вещи',
    category: 'Категория',
    color: 'Цвет',
    material: 'Материал (необязательно)',
    notes: 'Заметки (необязательно)',
    image: 'Фото (необязательно)',
    addItem: 'Добавить вручную',
    wardrobeList: 'Текущий гардероб',
    wardrobeText: 'Именно эти вещи используются для сборки moodboard-образов.',
    wardrobeCount: 'вещей',
    emptyWardrobe: 'Пока нет вещей. Добавьте свои позиции или загрузите демо-гардероб.',
    remove: 'Убрать',
    audience: 'Для кого образ',
    masculine: 'мужской',
    feminine: 'женский',
    neutral: 'унисекс',
    vibe: 'Желаемый стиль',
    vibeHelper: 'Выберите готовый стиль или введите свой вариант.',
    customStyle: 'Свой стиль',
    styleHint: 'например: soft office, casual date, dark academia',
    step2: 'Шаг 2',
    step2Title: 'Выберите стиль и сгенерируйте образы',
    step2Text: 'Когда гардероб готов, получите 3–5 moodboard-карточек на его основе.',
    step2Inactive: 'Сначала добавьте хотя бы одну вещь, чтобы перейти к стилизации.',
    generate: 'Сгенерировать moodboard-образы',
    generated: 'Готовые moodboard-образы',
    selectedItems: 'Вещи в образе',
    accents: 'Цветовые акценты',
    accessories: 'Аксессуары',
    occasion: 'Повод',
    seed: 'Загрузить демо-гардероб',
    clear: 'Очистить',
    moreOptions: 'Показать еще варианты',
    editWardrobe: 'Изменить гардероб',
    changeStyle: 'Изменить стиль',
    helperGenerated: 'Можно спокойно уточнять результат, не выходя со страницы.',
    manualSection: 'Добавить одну вещь вручную',
    previewName: 'Название',
    previewCategory: 'Категория',
    previewColor: 'Цвет',
    previewMaterial: 'Материал',
    shareResults: 'Скопировать summary',
    exportResults: 'Экспортировать текст',
    saveLook: 'Сохранить образ',
    savedLooks: 'Сохраненные образы',
    savedLooksText: 'Оставьте понравившиеся идеи, чтобы вернуться к ним позже.',
    noSavedLooks: 'Здесь появятся сохраненные образы.',
    removeSaved: 'Удалить',
    shareSaved: 'Скопировать',
    feedbackWardrobeSaved: 'Гардероб сохранен локально.',
    feedbackItemAdded: 'Вещь добавлена в гардероб.',
    feedbackLookSaved: 'Образ сохранен локально.',
    feedbackCopied: 'Скопировано.',
    feedbackExported: 'Экспорт подготовлен.',
  },
};

const demoItems = [
  { name: 'Белая рубашка оксфорд', category: 'top', color: 'Белый', material: 'Хлопок', notes: 'Немного оверсайз', image: null },
  { name: 'Черные прямые брюки', category: 'bottom', color: 'Черный', material: 'Смесовая шерсть', notes: '', image: null },
  { name: 'Синие прямые джинсы', category: 'bottom', color: 'Синий', material: 'Деним', notes: 'Высокая посадка', image: null },
  { name: 'Бежевый тренч', category: 'outerwear', color: 'Бежевый', material: 'Габардин', notes: '', image: null },
  { name: 'Белые кеды', category: 'shoes', color: 'Белый', material: 'Кожа', notes: '', image: null },
  { name: 'Черные лоферы', category: 'shoes', color: 'Черный', material: 'Кожа', notes: '', image: null },
  { name: 'Серебристые серьги-кольца', category: 'accessory', color: 'Серебристый', material: '', notes: '', image: null },
];

const defaultState = {
  language: 'ru',
  audience: 'neutral',
  vibe: '',
  selectedPreset: 'minimalism',
  quickText: '',
  previewItems: [],
  newItem: { name: '', category: 'top', color: '', material: '', notes: '', image: null },
  wardrobe: demoItems.map((item, index) => ({ ...item, id: `demo-${index}` })),
  outfits: [],
  savedLooks: [],
  feedback: '',
};

const app = document.getElementById('app');
let state = { ...defaultState };
let feedbackTimer;

function t(key) {
  return translations[state.language][key];
}

function safeParse(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function loadStoredState() {
  const storedWardrobe = safeParse(STORAGE_KEYS.wardrobe, null);
  const storedLooks = safeParse(STORAGE_KEYS.savedLooks, []);
  const storedPrefs = safeParse(STORAGE_KEYS.prefs, null);

  if (storedWardrobe && Array.isArray(storedWardrobe) && storedWardrobe.length) {
    state.wardrobe = storedWardrobe;
  }
  if (Array.isArray(storedLooks)) {
    state.savedLooks = storedLooks;
  }
  if (storedPrefs) {
    state.language = storedPrefs.language || state.language;
    state.audience = storedPrefs.audience || state.audience;
    state.vibe = storedPrefs.vibe || state.vibe;
    state.selectedPreset = storedPrefs.selectedPreset || state.selectedPreset;
  }
}

function persistWardrobe() {
  localStorage.setItem(STORAGE_KEYS.wardrobe, JSON.stringify(state.wardrobe));
}

function persistSavedLooks() {
  localStorage.setItem(STORAGE_KEYS.savedLooks, JSON.stringify(state.savedLooks));
}

function persistPrefs() {
  localStorage.setItem(
    STORAGE_KEYS.prefs,
    JSON.stringify({
      language: state.language,
      audience: state.audience,
      vibe: state.vibe,
      selectedPreset: state.selectedPreset,
    })
  );
}

function showFeedback(messageKey) {
  state.feedback = t(messageKey);
  render();
  clearTimeout(feedbackTimer);
  feedbackTimer = setTimeout(() => {
    state.feedback = '';
    render();
  }, 2200);
}

function categoryLabel(categoryId) {
  const match = categoryDefinitions.find((item) => item.id === categoryId);
  return match ? match[state.language] : categoryId;
}

function presetLabel(presetId) {
  const match = stylePresets.find((item) => item.id === presetId);
  return match ? match[state.language] : presetId;
}

function choose(pool, offset = 0) {
  if (!pool.length) return null;
  return pool[offset % pool.length];
}

function normalizedStyle() {
  return (state.vibe || state.selectedPreset || '').toLowerCase();
}

function uniqueId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function tokenize(input) {
  return input
    .split(/[\n,;]+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function capitalize(text) {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

function detectCategory(text) {
  const value = text.toLowerCase();
  if (/(пальто|тренч|плащ|куртк|бомбер|пиджак|жакет|ветровк|coat|jacket|blazer|trench)/.test(value)) return 'outerwear';
  if (/(кед|кроссов|лофер|ботин|сапог|туфл|мюл|shoe|sneaker|loafer|boot|heel)/.test(value)) return 'shoes';
  if (/(плать|сарафан|dress)/.test(value)) return 'dress';
  if (/(джинс|брюк|брюки|юбк|шорт|леггинс|карго|trouser|jean|pant|skirt|short)/.test(value)) return 'bottom';
  if (/(сумк|ремень|серьг|кольц|цепоч|шарф|очки|браслет|bag|belt|earring|necklace|scarf|glasses)/.test(value)) return 'accessory';
  return 'top';
}

function detectColor(text) {
  const dictionary = [
    ['светло-голуб', 'Светло-голубой'], ['голуб', 'Голубой'], ['темно-син', 'Темно-синий'], ['син', 'Синий'], ['беж', 'Бежевый'], ['молоч', 'Молочный'],
    ['крем', 'Кремовый'], ['черн', 'Черный'], ['бел', 'Белый'], ['сер', 'Серый'], ['корич', 'Коричневый'], ['хаки', 'Хаки'], ['олив', 'Оливковый'],
    ['бордов', 'Бордовый'], ['красн', 'Красный'], ['зелен', 'Зеленый'], ['розов', 'Розовый'], ['фиолет', 'Фиолетовый'],
    ['light blue', 'Light blue'], ['dark blue', 'Dark blue'], ['blue', 'Blue'], ['beige', 'Beige'], ['cream', 'Cream'], ['black', 'Black'], ['white', 'White'],
    ['grey', 'Grey'], ['gray', 'Grey'], ['brown', 'Brown'], ['khaki', 'Khaki'], ['olive', 'Olive'], ['red', 'Red'], ['green', 'Green'],
  ];
  const match = dictionary.find(([sample]) => text.toLowerCase().includes(sample));
  return match ? match[1] : state.language === 'ru' ? 'Не указан' : 'Not specified';
}

function detectMaterial(text) {
  const dictionary = [
    ['шерст', 'Шерсть'], ['кашемир', 'Кашемир'], ['хлоп', 'Хлопок'], ['деним', 'Деним'], ['кож', 'Кожа'], ['льн', 'Лен'], ['шелк', 'Шелк'],
    ['трикотаж', 'Трикотаж'], ['вельвет', 'Вельвет'], ['замш', 'Замша'],
    ['wool', 'Wool'], ['cashmere', 'Cashmere'], ['cotton', 'Cotton'], ['denim', 'Denim'], ['leather', 'Leather'], ['linen', 'Linen'], ['silk', 'Silk'],
    ['knit', 'Knit'], ['corduroy', 'Corduroy'], ['suede', 'Suede'],
  ];
  const match = dictionary.find(([sample]) => text.toLowerCase().includes(sample));
  return match ? match[1] : '';
}

function inferName(rawText, category, color, material) {
  const filler = /(это|мне|нужен|нужна|нужно|есть|у меня|мой|моя|мои|очень|просто|new|my|with|and|для)/gi;
  const cleaned = rawText.replace(filler, ' ').replace(/\s+/g, ' ').trim();
  if (!cleaned) return categoryLabel(category);
  const fragments = cleaned.split(' ');
  const short = fragments.slice(0, 5).join(' ');
  if (short.length > 42) return `${capitalize(short.slice(0, 39))}...`;
  return capitalize(short || `${color} ${material} ${categoryLabel(category)}`.trim());
}

function parsePreviewItems() {
  state.previewItems = tokenize(state.quickText).map((entry) => {
    const category = detectCategory(entry);
    const color = detectColor(entry);
    const material = detectMaterial(entry);
    return {
      id: uniqueId('preview'),
      name: inferName(entry, category, color, material),
      category,
      color,
      material,
      notes: entry,
      image: null,
    };
  });
}

function findByCategory(items, category) {
  return items.filter((item) => item.category === category);
}

function buildAccessories(language) {
  return language === 'ru'
    ? ['Лаконичные украшения', 'Кожаный ремень', 'Структурная сумка', 'Солнцезащитные очки', 'Тонкий шарф', 'Минималистичные часы']
    : ['Minimal jewelry', 'Leather belt', 'Structured bag', 'Sunglasses', 'Light scarf', 'Minimal watch'];
}

function buildOccasions(language) {
  return language === 'ru'
    ? ['На каждый день в городе', 'Для офиса без строгого дресс-кода', 'Для встречи или ужина', 'Для выходного дня', 'Для спокойного вечера']
    : ['For an everyday city look', 'For a relaxed office day', 'For a date or dinner', 'For a weekend plan', 'For an easy evening'];
}

function buildTitles(language) {
  return language === 'ru'
    ? ['Спокойная база', 'Городской баланс', 'Собранный кэжуал', 'Мягкий акцент', 'Чистые линии', 'Тихий контраст']
    : ['Quiet Base', 'City Balance', 'Refined Casual', 'Soft Accent', 'Clean Lines', 'Quiet Contrast'];
}

function smartPick(items, style, audience, variantIndex) {
  const tops = findByCategory(items, 'top');
  const bottoms = findByCategory(items, 'bottom');
  const dresses = findByCategory(items, 'dress');
  const outerwear = findByCategory(items, 'outerwear');
  const shoes = findByCategory(items, 'shoes');
  const accessories = findByCategory(items, 'accessory');

  const result = [];
  const isSoft = /soft|роман|femin|dress/.test(style);
  const isClassic = /classic|minimal|smart|office|класс|миним|смарт/.test(style);
  const isStreet = /street|sport|стрит|спорт/.test(style);

  if (dresses.length && (isSoft || variantIndex % 3 === 0)) result.push(choose(dresses, variantIndex));
  else {
    if (tops.length) result.push(choose(tops, variantIndex));
    if (bottoms.length) result.push(choose(bottoms, variantIndex + 1));
  }

  if (outerwear.length && (isClassic || isStreet || variantIndex % 2 === 0)) result.push(choose(outerwear, variantIndex + 2));
  if (shoes.length) result.push(choose(shoes, variantIndex + 1));
  if (accessories.length) result.push(choose(accessories, variantIndex + 2));

  if (audience === 'masculine') {
    const structured = items.find((item) => /(пиджак|blazer|рубашк|shirt|лофер)/i.test(item.name));
    if (structured) result.push(structured);
  }

  if (audience === 'feminine') {
    const softPiece = items.find((item) => /(плать|юбк|dress|skirt|серьг)/i.test(item.name));
    if (softPiece) result.push(softPiece);
  }

  return [...new Set(result.filter(Boolean))].slice(0, 5);
}

function buildOutfits() {
  const style = normalizedStyle();
  const titles = buildTitles(state.language);
  const occasions = buildOccasions(state.language);
  const accessories = buildAccessories(state.language);
  const count = Math.min(5, Math.max(3, state.wardrobe.length >= 8 ? 5 : 3));
  const outfits = [];
  const usedKeys = new Set();
  let attempts = 0;

  while (outfits.length < count && attempts < 12) {
    const items = smartPick(state.wardrobe, style, state.audience, attempts);
    const key = items.map((item) => item.id).sort().join('|');
    if (!usedKeys.has(key) && items.length) {
      usedKeys.add(key);
      const accents = [...new Set(items.map((item) => item.color).filter(Boolean))].slice(0, 3);
      outfits.push({
        id: uniqueId('outfit'),
        title: `${titles[(attempts + outfits.length) % titles.length]} ${outfits.length + 1}`,
        items,
        accents: accents.length ? accents : [state.language === 'ru' ? 'Нейтральная палитра' : 'Neutral palette'],
        accessories: accessories[(attempts + outfits.length) % accessories.length],
        vibeText:
          state.language === 'ru'
            ? `Стиль «${state.vibe || presetLabel(state.selectedPreset)}» с чистой базой и мягким акцентом.`
            : `A ${state.vibe || presetLabel(state.selectedPreset)} look with a clean base and a soft accent.`,
        occasion: occasions[(attempts + outfits.length) % occasions.length],
      });
    }
    attempts += 1;
  }

  state.outfits = outfits;
}

function addItem(item) {
  if (!item.name.trim()) return;
  state.wardrobe.push({ ...item, id: item.id || uniqueId('item') });
  persistWardrobe();
}

function addPreviewItemsToWardrobe() {
  state.previewItems.forEach((item) => addItem(item));
  state.previewItems = [];
  state.quickText = '';
  showFeedback('feedbackWardrobeSaved');
}

function renderPresetButtons() {
  return stylePresets
    .map(
      (preset) => `<button type="button" class="chip-button ${state.selectedPreset === preset.id ? 'active' : ''}" data-preset="${preset.id}">${presetLabel(preset.id)}</button>`
    )
    .join('');
}

function renderPreview() {
  if (!state.previewItems.length) return `<p class="empty-hint">${t('previewEmpty')}</p>`;
  return `
    <div class="preview-list">
      ${state.previewItems
        .map(
          (item) => `<article class="preview-card">
            <p><strong>${t('previewName')}:</strong> ${item.name}</p>
            <p><strong>${t('previewCategory')}:</strong> ${categoryLabel(item.category)}</p>
            <p><strong>${t('previewColor')}:</strong> ${item.color}</p>
            <p><strong>${t('previewMaterial')}:</strong> ${item.material || '—'}</p>
          </article>`
        )
        .join('')}
    </div>
    <button id="confirmPreview">${t('confirmPreview')}</button>
  `;
}

function renderWardrobeItems() {
  if (!state.wardrobe.length) return `<p class="empty-hint">${t('emptyWardrobe')}</p>`;
  return state.wardrobe
    .map(
      (item) => `<article class="wardrobe-item">
        <div class="thumb compact-thumb ${item.image ? '' : 'placeholder'}">${
          item.image ? `<img src="${item.image}" alt="${item.name}"/>` : `<span>${categoryLabel(item.category)}</span>`
        }</div>
        <div class="wardrobe-copy">
          <div class="wardrobe-headline">
            <h3>${item.name}</h3>
            <button type="button" data-remove="${item.id}" class="link-button">${t('remove')}</button>
          </div>
          <p class="meta-line">${categoryLabel(item.category)} · ${item.color || '—'}</p>
          <p class="subtle-line">${item.material || '—'} ${item.notes ? `· ${item.notes}` : ''}</p>
        </div>
      </article>`
    )
    .join('');
}

function renderOutfits(list = state.outfits, saved = false) {
  return list
    .map(
      (outfit, index) => `<article class="moodboard-card moodboard-appear" style="--card-delay: ${index * 50}ms;">
        <div class="moodboard-head">
          <div>
            <h3>${outfit.title}</h3>
            <p class="result-vibe">${outfit.vibeText}</p>
          </div>
          <span class="chip">${outfit.occasion}</span>
        </div>
        <div class="moodboard-visuals premium-tiles">
          ${outfit.items
            .slice(0, 4)
            .map(
              (item) => `<div class="tile ${item.image ? '' : 'tile-placeholder'}">${
                item.image ? `<img src="${item.image}" alt="${item.name}"/>` : `<span>${item.name}<small>${item.color || ''}</small></span>`
              }</div>`
            )
            .join('')}
        </div>
        <div class="result-strip">
          <div>
            <span class="meta-label">${t('selectedItems')}</span>
            <p>${outfit.items.map((item) => item.name).join(', ')}</p>
          </div>
        </div>
        <div class="result-meta-grid compact-meta-grid">
          <div>
            <span class="meta-label">${t('accents')}</span>
            <p>${outfit.accents.join(', ')}</p>
          </div>
          <div>
            <span class="meta-label">${t('accessories')}</span>
            <p>${outfit.accessories}</p>
          </div>
          <div>
            <span class="meta-label">${t('occasion')}</span>
            <p>${outfit.occasion}</p>
          </div>
        </div>
        <div class="actions-row result-actions">
          ${
            saved
              ? `<button type="button" class="secondary" data-copy-saved="${outfit.id}">${t('shareSaved')}</button>
                 <button type="button" class="ghost" data-remove-saved="${outfit.id}">${t('removeSaved')}</button>`
              : `<button type="button" class="secondary" data-save-look="${outfit.id}">${t('saveLook')}</button>`
          }
        </div>
      </article>`
    )
    .join('');
}

function buildShareText(looks) {
  return looks
    .map(
      (look, index) => `${index + 1}. ${look.title}
${t('occasion')}: ${look.occasion}
${t('selectedItems')}: ${look.items.map((item) => item.name).join(', ')}
${t('accents')}: ${look.accents.join(', ')}
${t('accessories')}: ${look.accessories}
${look.vibeText}`
    )
    .join('\n\n');
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const area = document.createElement('textarea');
  area.value = text;
  document.body.appendChild(area);
  area.select();
  document.execCommand('copy');
  area.remove();
}

function exportResults() {
  const blob = new Blob([buildShareText(state.outfits)], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'outfit-moodboard-summary.txt';
  link.click();
  URL.revokeObjectURL(url);
}

async function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function render() {
  const hasWardrobe = state.wardrobe.length > 0;
  const hasResults = state.outfits.length > 0;
  const hasSavedLooks = state.savedLooks.length > 0;

  app.innerHTML = `
    <main class="container">
      ${state.feedback ? `<div class="feedback-toast">${state.feedback}</div>` : ''}
      <header class="hero hero-lite section-fade" style="--delay: 30ms;">
        <div class="hero-copy">
          <p class="eyebrow">MVP v1</p>
          <h1>${t('appName')}</h1>
          <p class="tagline">${t('tagline')}</p>
          <p class="description">${t('description')}</p>
        </div>
        <label class="lang-switch subtle-control">${t('language')}
          <select id="language">
            <option value="ru" ${state.language === 'ru' ? 'selected' : ''}>Русский</option>
            <option value="en" ${state.language === 'en' ? 'selected' : ''}>English</option>
          </select>
        </label>
      </header>

      <section class="step-card step-primary section-fade" style="--delay: 70ms;">
        <div class="step-header minimal-header">
          <div>
            <span class="step-badge">${t('step1')}</span>
            <h2>${t('step1Title')}</h2>
            <p>${t('step1Text')}</p>
          </div>
        </div>
        <div class="step-grid lighter-grid">
          <section class="sub-card soft-panel">
            <h3>${t('quickAdd')}</h3>
            <p class="helper">${t('quickAddHelper')}</p>
            <label>
              <textarea id="quickText" rows="4" placeholder="черная кожаная куртка
светло-голубые джинсы
бежевое пальто">${state.quickText}</textarea>
            </label>
            <div class="inline-actions">
              <button id="parseItems" class="secondary">${t('parseItems')}</button>
            </div>
            <div class="preview-box">
              <h4>${t('previewTitle')}</h4>
              ${renderPreview()}
            </div>
          </section>

          <section class="sub-card soft-panel">
            <h3>${t('manualSection')}</h3>
            <div class="row-2 compact-row">
              <label>${t('itemName')}<input id="name" value="${state.newItem.name}" /></label>
              <label>${t('category')}
                <select id="category">${categoryDefinitions
                  .map((category) => `<option value="${category.id}" ${state.newItem.category === category.id ? 'selected' : ''}>${categoryLabel(category.id)}</option>`)
                  .join('')}</select>
              </label>
            </div>
            <div class="row-2 compact-row">
              <label>${t('color')}<input id="color" value="${state.newItem.color}" /></label>
              <label>${t('material')}<input id="material" value="${state.newItem.material}" /></label>
            </div>
            <label>${t('notes')}<input id="notes" value="${state.newItem.notes}" /></label>
            <label>${t('image')}<input id="image" type="file" accept="image/*" /></label>
            <div class="actions-row subtle-actions">
              <button id="addItem" class="secondary">${t('addItem')}</button>
              <button id="seed" class="ghost">${t('seed')}</button>
              <button id="clear" class="ghost">${t('clear')}</button>
            </div>
          </section>
        </div>
      </section>

      <section class="wardrobe-section section-fade" style="--delay: 110ms;">
        <div class="section-topline wardrobe-topline">
          <div>
            <span class="section-kicker">${t('wardrobeList')}</span>
            <h2>${state.wardrobe.length} ${t('wardrobeCount')}</h2>
            <p>${t('wardrobeText')}</p>
          </div>
        </div>
        <div class="wardrobe-grid compact-grid">${renderWardrobeItems()}</div>
      </section>

      <section class="step-card ${hasWardrobe ? 'step-ready' : 'step-muted'} section-fade" style="--delay: 150ms;">
        <div class="step-header minimal-header">
          <div>
            <span class="step-badge">${t('step2')}</span>
            <h2>${t('step2Title')}</h2>
            <p>${hasWardrobe ? t('step2Text') : t('step2Inactive')}</p>
          </div>
        </div>
        <div class="step-grid controls-step single-column">
          <section class="sub-card soft-panel">
            <label>${t('audience')}
              <select id="audience" ${hasWardrobe ? '' : 'disabled'}>
                <option value="masculine" ${state.audience === 'masculine' ? 'selected' : ''}>${t('masculine')}</option>
                <option value="feminine" ${state.audience === 'feminine' ? 'selected' : ''}>${t('feminine')}</option>
                <option value="neutral" ${state.audience === 'neutral' ? 'selected' : ''}>${t('neutral')}</option>
              </select>
            </label>
            <div>
              <label>${t('vibe')}</label>
              <p class="helper compact">${t('vibeHelper')}</p>
              <div class="chips-row">${renderPresetButtons()}</div>
            </div>
            <label>${t('customStyle')}<input id="vibe" value="${state.vibe}" placeholder="${t('styleHint')}" ${hasWardrobe ? '' : 'disabled'} /></label>
            <div class="inline-actions">
              <button id="generate" ${hasWardrobe ? '' : 'disabled'}>${t('generate')}</button>
            </div>
          </section>
        </div>
      </section>

      ${
        hasResults
          ? `<section class="results-section section-fade" style="--delay: 190ms;">
              <div class="section-topline results-header">
                <div>
                  <span class="section-kicker">${t('generated')}</span>
                  <h2>${t('generated')}</h2>
                  <p>${t('helperGenerated')}</p>
                </div>
                <div class="actions-row iteration-actions">
                  <button id="generateMore">${t('moreOptions')}</button>
                  <button id="copyResults" class="secondary">${t('shareResults')}</button>
                  <button id="exportResults" class="ghost">${t('exportResults')}</button>
                  <button id="focusWardrobe" class="ghost">${t('editWardrobe')}</button>
                  <button id="focusStyle" class="ghost">${t('changeStyle')}</button>
                </div>
              </div>
              <div class="moodboards results-grid">${renderOutfits()}</div>
            </section>`
          : ''
      }

      <section class="results-section saved-looks section-fade" style="--delay: 210ms;">
        <div class="section-topline results-header">
          <div>
            <span class="section-kicker">${t('savedLooks')}</span>
            <h2>${t('savedLooks')}</h2>
            <p>${t('savedLooksText')}</p>
          </div>
        </div>
        ${hasSavedLooks ? `<div class="moodboards results-grid">${renderOutfits(state.savedLooks, true)}</div>` : `<p class="empty-hint">${t('noSavedLooks')}</p>`}
      </section>
    </main>
  `;

  bindEvents();
}

function saveCurrentLook(id) {
  const look = state.outfits.find((item) => item.id === id);
  if (!look) return;
  if (!state.savedLooks.some((item) => item.title === look.title && item.occasion === look.occasion)) {
    state.savedLooks.unshift({ ...look, id: uniqueId('saved') });
    persistSavedLooks();
    showFeedback('feedbackLookSaved');
  }
}

function removeSavedLook(id) {
  state.savedLooks = state.savedLooks.filter((item) => item.id !== id);
  persistSavedLooks();
  render();
}

function bindEvents() {
  document.getElementById('language').onchange = (event) => {
    state.language = event.target.value;
    persistPrefs();
    render();
  };

  document.getElementById('quickText').oninput = (event) => {
    state.quickText = event.target.value;
  };

  document.getElementById('parseItems').onclick = () => {
    parsePreviewItems();
    render();
  };

  const confirmButton = document.getElementById('confirmPreview');
  if (confirmButton) {
    confirmButton.onclick = () => {
      addPreviewItemsToWardrobe();
    };
  }

  ['name', 'category', 'color', 'material', 'notes'].forEach((field) => {
    const element = document.getElementById(field);
    element.oninput = (event) => {
      state.newItem[field] = event.target.value;
    };
  });

  document.getElementById('image').onchange = async (event) => {
    const file = event.target.files[0];
    if (file) state.newItem.image = await fileToDataUrl(file);
  };

  document.getElementById('addItem').onclick = () => {
    addItem({ ...state.newItem });
    state.newItem = { name: '', category: 'top', color: '', material: '', notes: '', image: null };
    persistWardrobe();
    showFeedback('feedbackItemAdded');
  };

  document.getElementById('seed').onclick = () => {
    state.wardrobe = demoItems.map((item) => ({ ...item, id: uniqueId('demo') }));
    persistWardrobe();
    showFeedback('feedbackWardrobeSaved');
  };

  document.getElementById('clear').onclick = () => {
    state.wardrobe = [];
    state.outfits = [];
    state.previewItems = [];
    persistWardrobe();
    showFeedback('feedbackWardrobeSaved');
  };

  const audience = document.getElementById('audience');
  if (audience) {
    audience.onchange = (event) => {
      state.audience = event.target.value;
      persistPrefs();
    };
  }

  document.querySelectorAll('[data-preset]').forEach((button) => {
    button.onclick = () => {
      state.selectedPreset = button.dataset.preset;
      persistPrefs();
      render();
    };
  });

  const vibe = document.getElementById('vibe');
  if (vibe) {
    vibe.oninput = (event) => {
      state.vibe = event.target.value;
      persistPrefs();
    };
  }

  const generateButton = document.getElementById('generate');
  if (generateButton) {
    generateButton.onclick = () => {
      buildOutfits();
      render();
    };
  }

  const moreButton = document.getElementById('generateMore');
  if (moreButton) {
    moreButton.onclick = () => {
      buildOutfits();
      render();
    };
  }

  const copyResultsButton = document.getElementById('copyResults');
  if (copyResultsButton) {
    copyResultsButton.onclick = async () => {
      await copyText(buildShareText(state.outfits));
      showFeedback('feedbackCopied');
    };
  }

  const exportButton = document.getElementById('exportResults');
  if (exportButton) {
    exportButton.onclick = () => {
      exportResults();
      showFeedback('feedbackExported');
    };
  }

  const wardrobeButton = document.getElementById('focusWardrobe');
  if (wardrobeButton) {
    wardrobeButton.onclick = () => {
      document.querySelector('.wardrobe-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  }

  const styleButton = document.getElementById('focusStyle');
  if (styleButton) {
    styleButton.onclick = () => {
      document.querySelector('.step-ready, .step-muted').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  }

  document.querySelectorAll('[data-remove]').forEach((button) => {
    button.onclick = () => {
      state.wardrobe = state.wardrobe.filter((item) => item.id !== button.dataset.remove);
      if (!state.wardrobe.length) state.outfits = [];
      persistWardrobe();
      showFeedback('feedbackWardrobeSaved');
    };
  });

  document.querySelectorAll('[data-save-look]').forEach((button) => {
    button.onclick = () => saveCurrentLook(button.dataset.saveLook);
  });

  document.querySelectorAll('[data-remove-saved]').forEach((button) => {
    button.onclick = () => removeSavedLook(button.dataset.removeSaved);
  });

  document.querySelectorAll('[data-copy-saved]').forEach((button) => {
    button.onclick = async () => {
      const look = state.savedLooks.find((item) => item.id === button.dataset.copySaved);
      if (look) {
        await copyText(buildShareText([look]));
        showFeedback('feedbackCopied');
      }
    };
  });
}

loadStoredState();
render();
