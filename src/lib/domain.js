const categoryLabels = {
  top: 'Верх',
  bottom: 'Низ',
  dress: 'Платье',
  outerwear: 'Верхняя одежда',
  shoes: 'Обувь',
  accessory: 'Аксессуар',
};

const seasonLabels = {
  all: 'Все сезоны',
  'all-season': 'Всесезонно',
  spring: 'Весна',
  summer: 'Лето',
  fall: 'Осень',
  winter: 'Зима',
};

const occasionLabels = {
  all: 'Все случаи',
  casual: 'На каждый день',
  office: 'Офис',
  'smart-casual': 'Смарт-кэжуал',
  travel: 'Поездка',
  dinner: 'Ужин',
  'night-out': 'Вечер',
  weekend: 'Выходной',
};

const formalityLabels = {
  everyday: 'Повседневно',
  elevated: 'Собранно',
  dressy: 'Нарядно',
};

export const categories = Object.entries(categoryLabels).map(([value, label]) => ({ value, label }));
export const seasons = Object.entries(seasonLabels).map(([value, label]) => ({ value, label }));
export const occasions = Object.entries(occasionLabels).map(([value, label]) => ({ value, label }));
export const formalityOptions = Object.entries(formalityLabels).map(([value, label]) => ({ value, label }));

export function labelForCategory(value) {
  return categoryLabels[value] || 'Вещь';
}

export function labelForSeason(value) {
  return seasonLabels[value] || 'Всесезонно';
}

export function labelForOccasion(value) {
  return occasionLabels[value] || 'Без повода';
}

export function labelForFormality(value) {
  return formalityLabels[value] || 'Повседневно';
}

export function createId(prefix = 'item') {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

export function getRecentItems(items, limit = 4) {
  return [...items]
    .sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0))
    .slice(0, limit);
}

export function filterWardrobe(items, filters) {
  return items.filter((item) => {
    const matchesCategory = filters.category === 'all' || item.category === filters.category;
    const matchesSeason = filters.season === 'all' || item.season === filters.season || item.seasons?.includes(filters.season);
    const matchesOccasion =
      filters.occasion === 'all' || item.occasion === filters.occasion || item.occasions?.includes(filters.occasion);
    return matchesCategory && matchesSeason && matchesOccasion;
  });
}
