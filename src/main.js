import { resolveRoute } from './app/router.js';
import { createId } from './lib/domain.js';
import { parseNaturalLanguageItem } from './lib/parser.js';
import { getState, setState, subscribe } from './lib/state.js';
import { seedDemoWardrobe } from './lib/storage.js';

const app = document.getElementById('app');

function navigate(path) {
  location.hash = path.startsWith('/') ? `#${path}` : path;
}

function upsertItem(formData, existingId = null) {
  const now = new Date().toISOString();
  return {
    id: existingId || createId('item'),
    name: String(formData.get('name') || '').trim(),
    category: String(formData.get('category') || 'top'),
    color: String(formData.get('color') || 'Not specified').trim() || 'Not specified',
    material: String(formData.get('material') || '').trim(),
    season: String(formData.get('season') || 'all-season'),
    seasons: [String(formData.get('season') || 'all-season')],
    style: String(formData.get('style') || '').trim(),
    occasion: String(formData.get('occasion') || '').trim(),
    occasions: String(formData.get('occasion') || '').trim() ? [String(formData.get('occasion')).trim()] : [],
    formality: String(formData.get('formality') || 'everyday'),
    size: String(formData.get('size') || '').trim(),
    notes: String(formData.get('notes') || '').trim(),
    imageMode: 'swatch',
    image: null,
    createdAt: now,
    updatedAt: now,
    isDemo: false,
  };
}

function saveNewItem(form, intent = 'save') {
  const formData = new FormData(form);
  const item = upsertItem(formData);

  setState((state) => ({
    ...state,
    wardrobe: [item, ...state.wardrobe],
  }));

  if (intent === 'save-add-another') navigate('/items/new');
  else navigate(`/items/${item.id}`);
}

function updateItem(form) {
  const formData = new FormData(form);
  const existingId = form.dataset.itemId;

  setState((state) => ({
    ...state,
    wardrobe: state.wardrobe.map((item) =>
      item.id === existingId
        ? {
            ...item,
            ...upsertItem(formData, existingId),
            createdAt: item.createdAt,
            updatedAt: new Date().toISOString(),
            isDemo: item.isDemo,
          }
        : item
    ),
  }));
}

function bindGlobalEvents() {
  app.querySelectorAll('[data-seed-demo]').forEach((button) => {
    button.addEventListener('click', () => {
      setState((state) => seedDemoWardrobe(state));
      navigate('/wardrobe');
    });
  });

  app.querySelectorAll('[data-complete-onboarding]').forEach((button) => {
    button.addEventListener('click', () => {
      setState((state) => ({
        ...state,
        onboarding: {
          seen: true,
          completedAt: new Date().toISOString(),
        },
      }));
      render();
    });
  });

  const filtersForm = app.querySelector('[data-filters-form]');
  if (filtersForm) {
    filtersForm.addEventListener('change', () => {
      const data = new FormData(filtersForm);
      const query = new URLSearchParams();
      for (const [key, value] of data.entries()) query.set(key, String(value));
      navigate(`/wardrobe?${query.toString()}`);
    });
  }

  const parseForm = app.querySelector('[data-parse-form]');
  if (parseForm) {
    parseForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const text = String(new FormData(parseForm).get('itemText') || '').trim();
      if (!text) return;
      const draft = parseNaturalLanguageItem(text);
      const query = new URLSearchParams(draft);
      navigate(`/items/new?${query.toString()}`);
    });
  }

  const saveForm = app.querySelector('[data-save-item-form]');
  if (saveForm) {
    saveForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const intent = event.submitter?.value || 'save';
      saveNewItem(saveForm, intent);
    });
  }

  const editForm = app.querySelector('[data-edit-item-form]');
  if (editForm) {
    editForm.addEventListener('submit', (event) => {
      event.preventDefault();
      updateItem(editForm);
      navigate(`/items/${editForm.dataset.itemId}`);
    });
  }

  app.querySelectorAll('[data-delete-item]').forEach((button) => {
    button.addEventListener('click', () => {
      const itemId = button.dataset.deleteItem;
      setState((state) => ({
        ...state,
        wardrobe: state.wardrobe.filter((item) => item.id !== itemId),
      }));
      navigate('/wardrobe');
    });
  });
}

function render() {
  app.innerHTML = resolveRoute(getState());
  bindGlobalEvents();
}

window.addEventListener('hashchange', render);
subscribe(render);

if (!location.hash) navigate('/');
render();
