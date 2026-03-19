const demoItems = [
  ['White Oxford Shirt', 'top', 'White', 'Cotton', ['all-season'], ['office', 'smart-casual']],
  ['Black Rib Tank', 'top', 'Black', 'Rib knit', ['spring', 'summer'], ['casual', 'night-out']],
  ['Blue Straight Jeans', 'bottom', 'Blue', 'Denim', ['all-season'], ['casual', 'weekend']],
  ['Stone Wide Trousers', 'bottom', 'Stone', 'Cotton twill', ['spring', 'fall'], ['office', 'smart-casual']],
  ['Camel Trench Coat', 'outerwear', 'Camel', 'Gabardine', ['spring', 'fall'], ['office', 'travel']],
  ['Cream Knit Cardigan', 'outerwear', 'Cream', 'Wool blend', ['fall', 'winter'], ['casual', 'office']],
  ['White Leather Sneakers', 'shoes', 'White', 'Leather', ['all-season'], ['casual', 'travel']],
  ['Black Loafers', 'shoes', 'Black', 'Leather', ['spring', 'fall'], ['office', 'dinner']],
  ['Structured Black Tote', 'accessory', 'Black', 'Leather', ['all-season'], ['office', 'travel']],
  ['Gold Hoop Earrings', 'accessory', 'Gold', 'Metal', ['all-season'], ['dinner', 'night-out']],
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
    style: category === 'outerwear' ? 'refined' : category === 'accessory' ? 'polished' : 'minimal',
    occasion: occasions[0],
    occasions,
    formality: category === 'shoes' || category === 'outerwear' ? 'elevated' : 'everyday',
    size: '',
    notes: 'Seeded demo wardrobe item',
    imageMode: 'swatch',
    createdAt: `${seedDate}T00:00:00.000Z`,
    updatedAt: `${seedDate}T00:00:00.000Z`,
    isDemo: true,
  }));
}
