const categoryMatchers = [
  ['outerwear', /(coat|trench|jacket|blazer|overshirt|cardigan|пальто|тренч|куртк|пиджак|жакет|кардиган)/i],
  ['shoes', /(shoe|sneaker|loafer|boot|heel|sandal|кед|кроссов|лофер|ботин|сапог|туфл|мюл)/i],
  ['dress', /(dress|gown|slip|плать|сарафан)/i],
  ['bottom', /(trouser|jean|pant|skirt|short|legging|cargo|джинс|брюк|юбк|шорт|леггинс|карго)/i],
  ['accessory', /(bag|belt|earring|necklace|scarf|glasses|watch|bracelet|сумк|ремень|серьг|кольц|цепоч|шарф|очки|браслет|часы)/i],
];

const colorMatchers = [
  ['Light blue', /(light blue|светло-голуб)/i],
  ['Dark blue', /(dark blue|темно-син)/i],
  ['Blue', /(blue|голуб|син)/i],
  ['Beige', /(beige|беж)/i],
  ['Camel', /(camel)/i],
  ['Cream', /(cream|молоч|крем)/i],
  ['Black', /(black|черн)/i],
  ['White', /(white|бел)/i],
  ['Grey', /(grey|gray|сер)/i],
  ['Brown', /(brown|корич)/i],
  ['Khaki', /(khaki|хаки)/i],
  ['Olive', /(olive|олив)/i],
  ['Burgundy', /(burgundy|бордов)/i],
  ['Red', /(red|красн)/i],
  ['Green', /(green|зелен)/i],
  ['Pink', /(pink|розов)/i],
  ['Purple', /(purple|фиолет)/i],
  ['Gold', /(gold|золот)/i],
  ['Silver', /(silver|серебр)/i],
];

const materialMatchers = [
  ['Wool', /(wool|шерст)/i],
  ['Cashmere', /(cashmere|кашемир)/i],
  ['Cotton', /(cotton|хлоп)/i],
  ['Denim', /(denim|деним)/i],
  ['Leather', /(leather|кож)/i],
  ['Linen', /(linen|льн)/i],
  ['Silk', /(silk|шелк)/i],
  ['Knit', /(knit|rib|трикотаж)/i],
  ['Corduroy', /(corduroy|вельвет)/i],
  ['Suede', /(suede|замш)/i],
];

const filler = /(это|мне|нужен|нужна|нужно|есть|у меня|мой|моя|мои|очень|просто|new|my|with|and|для)/gi;

const fallbackCategoryNames = {
  top: 'Top',
  bottom: 'Bottom',
  dress: 'Dress',
  outerwear: 'Outerwear',
  shoes: 'Shoes',
  accessory: 'Accessory',
};

export function detectCategory(text) {
  const match = categoryMatchers.find(([, matcher]) => matcher.test(text));
  return match ? match[0] : 'top';
}

export function detectColor(text) {
  const match = colorMatchers.find(([, matcher]) => matcher.test(text));
  return match ? match[0] : 'Not specified';
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
