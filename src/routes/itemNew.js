import { createScaffold, createSectionCard } from '../components/layout.js';

export function renderItemNew(state, params, query) {
  const sourceText = query.get('sourceText') || '';
  const category = query.get('category') || 'top';
  const color = query.get('color') || '';
  const name = query.get('name') || '';
  const material = query.get('material') || '';
  const season = query.get('season') || 'all-season';
  const style = query.get('style') || '';
  const occasion = query.get('occasion') || '';
  const formality = query.get('formality') || 'everyday';
  const size = query.get('size') || '';
  const notes = query.get('notes') || sourceText;
  const hasDraft = Boolean(name || sourceText);

  const parseSection = `
    <form class="stack-form" data-parse-form>
      <label>
        Describe one item naturally
        <textarea name="itemText" rows="4" placeholder="e.g. black leather jacket, beige wool coat, white oxford shirt">${sourceText}</textarea>
      </label>
      <button class="button primary" type="submit">Parse item draft</button>
    </form>
  `;

  const draftForm = `
    <form class="stack-form" data-save-item-form>
      <input type="hidden" name="sourceText" value="${sourceText}" />
      <div class="two-col">
        <label>Name<input name="name" value="${name}" required /></label>
        <label>Category
          <select name="category">
            <option value="top" ${category === 'top' ? 'selected' : ''}>Top</option>
            <option value="bottom" ${category === 'bottom' ? 'selected' : ''}>Bottom</option>
            <option value="dress" ${category === 'dress' ? 'selected' : ''}>Dress</option>
            <option value="outerwear" ${category === 'outerwear' ? 'selected' : ''}>Outerwear</option>
            <option value="shoes" ${category === 'shoes' ? 'selected' : ''}>Shoes</option>
            <option value="accessory" ${category === 'accessory' ? 'selected' : ''}>Accessory</option>
          </select>
        </label>
      </div>
      <div class="two-col">
        <label>Color<input name="color" value="${color}" /></label>
        <label>Material<input name="material" value="${material}" /></label>
      </div>
      <div class="two-col">
        <label>Season
          <select name="season">
            <option value="all-season" ${season === 'all-season' ? 'selected' : ''}>All-season</option>
            <option value="spring" ${season === 'spring' ? 'selected' : ''}>Spring</option>
            <option value="summer" ${season === 'summer' ? 'selected' : ''}>Summer</option>
            <option value="fall" ${season === 'fall' ? 'selected' : ''}>Fall</option>
            <option value="winter" ${season === 'winter' ? 'selected' : ''}>Winter</option>
          </select>
        </label>
        <label>Style<input name="style" value="${style}" placeholder="minimal, sporty, refined" /></label>
      </div>
      <div class="two-col">
        <label>Occasion<input name="occasion" value="${occasion}" placeholder="office, casual, dinner" /></label>
        <label>Formality
          <select name="formality">
            <option value="everyday" ${formality === 'everyday' ? 'selected' : ''}>Everyday</option>
            <option value="elevated" ${formality === 'elevated' ? 'selected' : ''}>Elevated</option>
            <option value="dressy" ${formality === 'dressy' ? 'selected' : ''}>Dressy</option>
          </select>
        </label>
      </div>
      <label>Size<input name="size" value="${size}" placeholder="Optional" /></label>
      <label>Notes<textarea name="notes" rows="3">${notes}</textarea></label>
      <div class="inline-actions">
        <button class="button primary" type="submit" name="intent" value="save">Save item</button>
        <button class="button secondary" type="submit" name="intent" value="save-add-another">Save &amp; add another</button>
      </div>
    </form>
  `;

  return createScaffold({
    title: 'Add Item',
    subtitle: 'Natural-language input is now the main entry point, followed by a structured draft form.',
    body: `
      ${createSectionCard({
        kicker: 'Step 1',
        title: 'Type one item naturally',
        description: 'The parser currently infers at least name, category, and color, then lets you refine the draft.',
        content: parseSection,
      })}
      ${createSectionCard({
        kicker: 'Step 2',
        title: hasDraft ? 'Review item draft' : 'Draft form appears after parsing',
        description: hasDraft ? 'Refine the inferred fields before saving to your wardrobe.' : 'Parse an item first to open the structured editor.',
        content: hasDraft ? draftForm : '<p class="section-copy">No draft yet.</p>',
      })}
    `,
  });
}
