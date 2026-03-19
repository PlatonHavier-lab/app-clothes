import { getDemoWardrobe } from './demoWardrobe.js';

export const STORAGE = {
  primaryKey: 'app-clothes:v2',
  legacyWardrobeKey: 'outfit-moodboard:wardrobe',
  legacySavedKey: 'outfit-moodboard:saved-looks',
  legacyPrefsKey: 'outfit-moodboard:prefs',
  migrationMarkerKey: 'app-clothes:v2:migration-complete',
  legacyBackupKey: 'app-clothes:v2:legacy-backup',
};

const nowIso = () => new Date().toISOString();

const defaultState = {
  schemaVersion: 2,
  migratedFromLegacy: false,
  onboarding: {
    seen: false,
    completedAt: null,
  },
  profile: {
    audience: 'neutral',
    height: '',
    bodyType: '',
    preferredFit: '',
  },
  preferences: {
    language: 'ru',
    selectedStyle: 'minimal',
  },
  wardrobe: [],
  savedLooks: [],
  generatedLooks: [],
  lastViewedOutfitId: null,
};

function safeParse(raw, fallback = null) {
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function ensureArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizeLegacyItem(item, index = 0) {
  const createdAt = nowIso();
  return {
    id: item.id || `legacy-item-${index + 1}`,
    name: item.name || 'Вещь без названия',
    category: item.category || 'top',
    color: item.color || 'Цвет не указан',
    material: item.material || '',
    season: 'all-season',
    seasons: ['all-season'],
    style: '',
    occasion: '',
    occasions: [],
    formality: 'everyday',
    size: '',
    notes: item.notes || '',
    imageMode: item.image ? 'photo' : 'swatch',
    image: item.image || null,
    createdAt,
    updatedAt: createdAt,
    isDemo: String(item.id || '').startsWith('demo-'),
  };
}

function normalizeLegacyLook(look, index = 0) {
  const createdAt = nowIso();
  return {
    id: look.id || `legacy-look-${index + 1}`,
    title: look.title || `Сохранённый образ ${index + 1}`,
    description: look.vibeText || look.description || '',
    occasion: look.occasion || '',
    style: '',
    season: 'all-season',
    items: ensureArray(look.items).map((item, itemIndex) => normalizeLegacyItem(item, itemIndex)),
    createdAt,
    updatedAt: createdAt,
    source: 'legacy-migration',
  };
}

function createBackup(legacyWardrobe, legacySaved, legacyPrefs) {
  const existing = safeParse(localStorage.getItem(STORAGE.legacyBackupKey), null);
  if (existing) return;

  localStorage.setItem(
    STORAGE.legacyBackupKey,
    JSON.stringify({
      createdAt: nowIso(),
      wardrobe: legacyWardrobe,
      savedLooks: legacySaved,
      prefs: legacyPrefs,
    })
  );
}

function migrateLegacyState() {
  const legacyWardrobe = safeParse(localStorage.getItem(STORAGE.legacyWardrobeKey), []);
  const legacySaved = safeParse(localStorage.getItem(STORAGE.legacySavedKey), []);
  const legacyPrefs = safeParse(localStorage.getItem(STORAGE.legacyPrefsKey), null);

  const hasLegacy = ensureArray(legacyWardrobe).length || ensureArray(legacySaved).length || legacyPrefs;
  if (!hasLegacy) return null;

  createBackup(legacyWardrobe, legacySaved, legacyPrefs);

  return {
    ...structuredClone(defaultState),
    migratedFromLegacy: true,
    preferences: {
      language: legacyPrefs?.language || 'ru',
      selectedStyle: legacyPrefs?.selectedPreset || legacyPrefs?.vibe || 'minimal',
    },
    profile: {
      ...defaultState.profile,
      audience: legacyPrefs?.audience || 'neutral',
    },
    wardrobe: ensureArray(legacyWardrobe).map(normalizeLegacyItem),
    savedLooks: ensureArray(legacySaved).map(normalizeLegacyLook),
  };
}

export function loadState() {
  const existing = safeParse(localStorage.getItem(STORAGE.primaryKey), null);
  if (existing?.schemaVersion === 2) return { ...structuredClone(defaultState), ...existing };

  const migrated = migrateLegacyState();
  if (migrated) {
    saveState(migrated);
    localStorage.setItem(STORAGE.migrationMarkerKey, nowIso());
    return migrated;
  }

  return structuredClone(defaultState);
}

export function saveState(state) {
  const payload = { ...state, schemaVersion: 2 };
  localStorage.setItem(STORAGE.primaryKey, JSON.stringify(payload));
}

export function seedDemoWardrobe(state) {
  const seeded = getDemoWardrobe();
  return {
    ...state,
    wardrobe: seeded,
  };
}

export function createEmptyState() {
  return structuredClone(defaultState);
}
