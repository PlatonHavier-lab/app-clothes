import { createScaffold, createSectionCard } from '../components/layout.js';

export function renderItemDetails(state, params) {
  const item = state.wardrobe.find((entry) => entry.id === params.itemId);

  if (!item) {
    return createScaffold({
      title: 'Вещь не найдена',
      subtitle: 'Похоже, эта позиция уже удалена или недоступна в локальном хранилище.',
      body: '<a class="button primary" href="#/wardrobe">Вернуться в гардероб</a>',
    });
  }

  return createScaffold({
    title: item.name,
    subtitle: 'Здесь можно спокойно поправить поля или удалить вещь без лишней сложности.',
    body: `
      ${createSectionCard({
        kicker: 'Редактирование',
        title: 'Обновить данные о вещи',
        content: `
          <form class="stack-form" data-edit-item-form data-item-id="${item.id}">
            <div class="two-col">
              <label>Название<input name="name" value="${item.name}" required /></label>
              <label>Категория
                <select name="category">
                  <option value="top" ${item.category === 'top' ? 'selected' : ''}>Верх</option>
                  <option value="bottom" ${item.category === 'bottom' ? 'selected' : ''}>Низ</option>
                  <option value="dress" ${item.category === 'dress' ? 'selected' : ''}>Платье</option>
                  <option value="outerwear" ${item.category === 'outerwear' ? 'selected' : ''}>Верхняя одежда</option>
                  <option value="shoes" ${item.category === 'shoes' ? 'selected' : ''}>Обувь</option>
                  <option value="accessory" ${item.category === 'accessory' ? 'selected' : ''}>Аксессуар</option>
                </select>
              </label>
            </div>
            <div class="two-col">
              <label>Цвет<input name="color" value="${item.color}" /></label>
              <label>Материал<input name="material" value="${item.material || ''}" /></label>
            </div>
            <div class="two-col">
              <label>Сезон
                <select name="season">
                  <option value="all-season" ${item.season === 'all-season' ? 'selected' : ''}>Всесезонно</option>
                  <option value="spring" ${item.season === 'spring' ? 'selected' : ''}>Весна</option>
                  <option value="summer" ${item.season === 'summer' ? 'selected' : ''}>Лето</option>
                  <option value="fall" ${item.season === 'fall' ? 'selected' : ''}>Осень</option>
                  <option value="winter" ${item.season === 'winter' ? 'selected' : ''}>Зима</option>
                </select>
              </label>
              <label>Стиль<input name="style" value="${item.style || ''}" /></label>
            </div>
            <div class="two-col">
              <label>Повод<input name="occasion" value="${item.occasion || ''}" /></label>
              <label>Формальность
                <select name="formality">
                  <option value="everyday" ${item.formality === 'everyday' ? 'selected' : ''}>Повседневно</option>
                  <option value="elevated" ${item.formality === 'elevated' ? 'selected' : ''}>Собранно</option>
                  <option value="dressy" ${item.formality === 'dressy' ? 'selected' : ''}>Нарядно</option>
                </select>
              </label>
            </div>
            <label>Размер<input name="size" value="${item.size || ''}" /></label>
            <label>Заметки<textarea name="notes" rows="3">${item.notes || ''}</textarea></label>
            <div class="inline-actions compact-inline-actions">
              <button class="button primary" type="submit">Сохранить изменения</button>
              <button class="button danger" type="button" data-delete-item="${item.id}">Удалить вещь</button>
            </div>
          </form>
        `,
      })}
    `,
  });
}
