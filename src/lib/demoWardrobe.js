const demoItems = [
  ['Белая рубашка оксфорд', 'top', 'Белый', 'Хлопок', ['all-season'], ['office', 'smart-casual']],
  ['Чёрный базовый топ', 'top', 'Чёрный', 'Трикотаж', ['spring', 'summer'], ['casual', 'night-out']],
  ['Синие прямые джинсы', 'bottom', 'Синий', 'Деним', ['all-season'], ['casual', 'weekend']],
  ['Светлые широкие брюки', 'bottom', 'Бежевый', 'Хлопковая саржа', ['spring', 'fall'], ['office', 'smart-casual']],
  ['Тренч цвета кэмел', 'outerwear', 'Кэмел', 'Габардин', ['spring', 'fall'], ['office', 'travel']],
  ['Молочный кардиган', 'outerwear', 'Молочный', 'Шерстяная смесь', ['fall', 'winter'], ['casual', 'office']],
  ['Белые кожаные кеды', 'shoes', 'Белый', 'Кожа', ['all-season'], ['casual', 'travel']],
  ['Чёрные лоферы', 'shoes', 'Чёрный', 'Кожа', ['spring', 'fall'], ['office', 'dinner']],
  ['Структурная чёрная сумка', 'accessory', 'Чёрный', 'Кожа', ['all-season'], ['office', 'travel']],
  ['Золотые серьги-кольца', 'accessory', 'Золотой', 'Металл', ['all-season'], ['dinner', 'night-out']],
];

const seedDate = '2026-03-19';

export function getDemoWardrobe() {
  return demoItems.map(([name, category, color, material, seasons, occasions], index) => ({
    id: `demo-${index + 1}`,
    name,
    category,
    color,
    material,
    season: seasons[0],
    seasons,
    style: category === 'outerwear' ? 'собранный' : category === 'accessory' ? 'акцентный' : 'минимальный',
    occasion: occasions[0],
    occasions,
    formality: category === 'shoes' || category === 'outerwear' ? 'elevated' : 'everyday',
    size: '',
    notes: 'Демо-позиция для быстрого старта',
    imageMode: 'swatch',
    createdAt: `${seedDate}T00:00:00.000Z`,
    updatedAt: `${seedDate}T00:00:00.000Z`,
    isDemo: true,
  }));
}
