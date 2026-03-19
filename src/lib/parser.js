const categoryMatchers = [
  ['outerwear', /(coat|trench|jacket|blazer|overshirt|cardigan|пальто|тренч|куртк|пиджак|жакет|кардиган)/i],
  ['shoes', /(shoe|sneaker|loafer|boot|heel|sandal|кед|кроссов|лофер|ботин|сапог|туфл|мюл)/i],
  ['dress', /(dress|gown|slip|плать|сарафан)/i],
  ['bottom', /(trouser|jean|pant|skirt|short|legging|cargo|джинс|брюк|юбк|шорт|леггинс|карго)/i],
  ['accessory', /(bag|belt|earring|necklace|scarf|glasses|watch|bracelet|сумк|ремень|серьг|кольц|цепоч|шарф|очки|браслет|часы)/i],
];

const colorMatchers = [
  ['Светло-голубой', /(light blue|светло-голуб)/i],
  ['Тёмно-синий', /(dark blue|темно-син)/i],
  ['Синий', /(blue|голуб|син)/i],
  ['Бежевый', /(beige|беж)/i],
  ['Кэмел', /(camel)/i],
  ['Молочный', /(cream|молоч|крем)/i],
  ['Чёрный', /(black|черн)/i],
  ['Белый', /(white|бел)/i],
  ['Серый', /(grey|gray|сер)/i],
  ['Коричневый', /(brown|корич)/i],
  ['Хаки', /(khaki|хаки)/i],
  ['Оливковый', /(olive|олив)/i],
  ['Бордовый', /(burgundy|бордов)/i],
  ['Красный', /(red|красн)/i],
  ['Зелёный', /(green|зелен)/i],
  ['Розовый', /(pink|розов)/i],
  ['Фиолетовый', /(purple|фиолет)/i],
  ['Золотой', /(gold|золот)/i],
  ['Серебристый', /(silver|серебр)/i],
];

const materialMatchers = [
  ['Шерсть', /(wool|шерст)/i],
  ['Кашемир', /(cashmere|кашемир)/i],
  ['Хлопок', /(cotton|хлоп)/i],
  ['Деним', /(denim|деним)/i],
  ['Кожа', /(leather|кож)/i],
  ['Лён', /(linen|льн)/i],
  ['Шёлк', /(silk|шелк)/i],
  ['Трикотаж', /(knit|rib|трикотаж)/i],
  ['Вельвет', /(corduroy|вельвет)/i],
  ['Замша', /(suede|замш)/i],
];

const filler = /(это|мне|нужен|нужна|нужно|есть|у меня|мой|моя|мои|очень|просто|new|my|with|and|для)/gi;

const fallbackCategoryNames = {
  top: 'Верх',
  bottom: 'Низ',
  dress: 'Платье',
  outerwear: 'Верхняя одежда',
  shoes: 'Обувь',
  accessory: 'Аксессуар',
};

export function detectCategory(text) {
  const match = categoryMatchers.find(([, matcher]) => matcher.test(text));
  return match ? match[0] : 'top';
}

export function detectColor(text) {
  const match = colorMatchers.find(([, matcher]) => matcher.test(text));
  return match ? match[0] : 'Цвет не указан';
}

export function detectMaterial(text) {
  const match = materialMatchers.find(([, matcher]) => matcher.test(text));
  return match ? match[0] : '';
}

export function inferName(rawText, category, color, material) {
  const cleaned = rawText.replace(filler, ' ').replace(/\s+/g, ' ').trim();
  if (!cleaned) return [color, material, fallbackCategoryNames[category]].filter(Boolean).join(' ');
  const short = cleaned.split(' ').slice(0, 5).join(' ');
  return short.charAt(0).toUpperCase() + short.slice(1);
}

export function parseNaturalLanguageItem(input) {
  const text = input.trim();
  const category = detectCategory(text);
  const color = detectColor(text);
  const material = detectMaterial(text);

  return {
    sourceText: text,
    name: inferName(text, category, color, material),
    category,
    color,
    material,
    season: 'all-season',
    style: '',
    occasion: '',
    formality: 'everyday',
    size: '',
    notes: text,
    imageMode: 'swatch',
  };
}
