const categoryLabels = {
  top: 'Top',
  bottom: 'Bottom',
  dress: 'Dress',
  outerwear: 'Outerwear',
  shoes: 'Shoes',
  accessory: 'Accessory',
};

export const categories = Object.entries(categoryLabels).map(([value, label]) => ({ value, label }));
export const seasons = [
  { value: 'all', label: 'All seasons' },
  { value: 'all-season', label: 'All-season' },
  { value: 'spring', label: 'Spring' },
  { value: 'summer', label: 'Summer' },
  { value: 'fall', label: 'Fall' },
  { value: 'winter', label: 'Winter' },
];
export const occasions = [
  { value: 'all', label: 'All occasions' },
  { value: 'casual', label: 'Casual' },
  { value: 'office', label: 'Office' },
  { value: 'smart-casual', label: 'Smart casual' },
  { value: 'travel', label: 'Travel' },
  { value: 'dinner', label: 'Dinner' },
  { value: 'night-out', label: 'Night out' },
  { value: 'weekend', label: 'Weekend' },
];
export const formalityOptions = ['everyday', 'elevated', 'dressy'];

export function labelForCategory(value) {
  return categoryLabels[value] || 'Item';
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
