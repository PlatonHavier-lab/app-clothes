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
        Опишите одну вещь естественным языком
        <textarea name="itemText" rows="4" placeholder="например: чёрная кожаная куртка, белая рубашка оксфорд, бежевое шерстяное пальто">${sourceText}</textarea>
      </label>
      <button class="button primary" type="submit">Разобрать черновик</button>
    </form>
  `;

  const draftForm = `
    <form class="stack-form" data-save-item-form>
      <input type="hidden" name="sourceText" value="${sourceText}" />
      <div class="two-col">
        <label>Название<input name="name" value="${name}" required /></label>
        <label>Категория
          <select name="category">
            <option value="top" ${category === 'top' ? 'selected' : ''}>Верх</option>
            <option value="bottom" ${category === 'bottom' ? 'selected' : ''}>Низ</option>
            <option value="dress" ${category === 'dress' ? 'selected' : ''}>Платье</option>
            <option value="outerwear" ${category === 'outerwear' ? 'selected' : ''}>Верхняя одежда</option>
            <option value="shoes" ${category === 'shoes' ? 'selected' : ''}>Обувь</option>
            <option value="accessory" ${category === 'accessory' ? 'selected' : ''}>Аксессуар</option>
          </select>
        </label>
      </div>
      <div class="two-col">
        <label>Цвет<input name="color" value="${color}" /></label>
        <label>Материал<input name="material" value="${material}" /></label>
      </div>
      <div class="two-col">
        <label>Сезон
          <select name="season">
            <option value="all-season" ${season === 'all-season' ? 'selected' : ''}>Всесезонно</option>
            <option value="spring" ${season === 'spring' ? 'selected' : ''}>Весна</option>
            <option value="summer" ${season === 'summer' ? 'selected' : ''}>Лето</option>
            <option value="fall" ${season === 'fall' ? 'selected' : ''}>Осень</option>
            <option value="winter" ${season === 'winter' ? 'selected' : ''}>Зима</option>
          </select>
        </label>
        <label>Стиль<input name="style" value="${style}" placeholder="минимальный, расслабленный, собранный" /></label>
      </div>
      <div class="two-col">
        <label>Повод<input name="occasion" value="${occasion}" placeholder="офис, каждый день, ужин" /></label>
        <label>Формальность
          <select name="formality">
            <option value="everyday" ${formality === 'everyday' ? 'selected' : ''}>Повседневно</option>
            <option value="elevated" ${formality === 'elevated' ? 'selected' : ''}>Собранно</option>
            <option value="dressy" ${formality === 'dressy' ? 'selected' : ''}>Нарядно</option>
          </select>
        </label>
      </div>
      <label>Размер<input name="size" value="${size}" placeholder="Необязательно" /></label>
      <label>Заметки<textarea name="notes" rows="3">${notes}</textarea></label>
      <div class="inline-actions compact-inline-actions">
        <button class="button primary" type="submit" name="intent" value="save">Сохранить вещь</button>
        <button class="button secondary" type="submit" name="intent" value="save-add-another">Сохранить и добавить ещё</button>
      </div>
    </form>
  `;

  return createScaffold({
    title: 'Добавить вещь',
    subtitle: 'Сначала короткое описание, затем аккуратный черновик с полями для уточнения.',
    body: `
      ${createSectionCard({
        kicker: 'Шаг 1',
        title: 'Опишите вещь своими словами',
        description: 'Парсер сейчас определяет как минимум название, категорию и цвет, а затем открывает редактируемый черновик.',
        content: parseSection,
      })}
      ${createSectionCard({
        kicker: 'Шаг 2',
        title: hasDraft ? 'Проверьте черновик вещи' : 'Черновик появится после разбора',
        description: hasDraft ? 'Уточните поля и сохраните вещь в гардероб.' : 'Сначала разберите описание, чтобы открыть структурированную форму.',
        content: hasDraft ? draftForm : '<p class="section-copy">Черновика пока нет.</p>',
      })}
    `,
  });
}
