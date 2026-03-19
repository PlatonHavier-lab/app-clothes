import { createScaffold, createSectionCard } from '../components/layout.js';

export function renderItemDetails(state, params) {
  const item = state.wardrobe.find((entry) => entry.id === params.itemId);

  if (!item) {
    return createScaffold({
      title: 'Item not found',
      subtitle: 'This route is active, but the item no longer exists in storage.',
      body: '<a class="button primary" href="#/wardrobe">Back to wardrobe</a>',
    });
  }

  return createScaffold({
    title: item.name,
    subtitle: 'Clean edit and delete tools for the wardrobe foundation milestone.',
    body: `
      ${createSectionCard({
        kicker: 'Edit item',
        title: 'Update wardrobe details',
        content: `
          <form class="stack-form" data-edit-item-form data-item-id="${item.id}">
            <div class="two-col">
              <label>Name<input name="name" value="${item.name}" required /></label>
              <label>Category
                <select name="category">
                  <option value="top" ${item.category === 'top' ? 'selected' : ''}>Top</option>
                  <option value="bottom" ${item.category === 'bottom' ? 'selected' : ''}>Bottom</option>
                  <option value="dress" ${item.category === 'dress' ? 'selected' : ''}>Dress</option>
                  <option value="outerwear" ${item.category === 'outerwear' ? 'selected' : ''}>Outerwear</option>
                  <option value="shoes" ${item.category === 'shoes' ? 'selected' : ''}>Shoes</option>
                  <option value="accessory" ${item.category === 'accessory' ? 'selected' : ''}>Accessory</option>
                </select>
              </label>
            </div>
            <div class="two-col">
              <label>Color<input name="color" value="${item.color}" /></label>
              <label>Material<input name="material" value="${item.material || ''}" /></label>
            </div>
            <div class="two-col">
              <label>Season<input name="season" value="${item.season || 'all-season'}" /></label>
              <label>Style<input name="style" value="${item.style || ''}" /></label>
            </div>
            <div class="two-col">
              <label>Occasion<input name="occasion" value="${item.occasion || ''}" /></label>
              <label>Formality<input name="formality" value="${item.formality || 'everyday'}" /></label>
            </div>
            <label>Size<input name="size" value="${item.size || ''}" /></label>
            <label>Notes<textarea name="notes" rows="3">${item.notes || ''}</textarea></label>
            <div class="inline-actions spaced-actions">
              <button class="button primary" type="submit">Save changes</button>
              <button class="button danger" type="button" data-delete-item="${item.id}">Delete item</button>
            </div>
          </form>
        `,
      })}
    `,
  });
}
