import { createScaffold, createSectionCard } from '../components/layout.js';

export function renderGenerate() {
  return createScaffold({
    title: 'Подбор образов',
    subtitle: 'Экран пока остаётся компактным: главный сценарий хорошо виден сразу, без лишнего вертикального шума.',
    body: `
      ${createSectionCard({
        kicker: 'Скоро',
        title: 'Подготовка к генерации',
        description: 'В этом этапе мы сохраняем ощущение плотного экрана с заметным главным действием, но саму логику генерации ещё не расширяем.',
        content: `
          <div class="generate-stack">
            <button class="button primary big-action big-generate-action" type="button">Сгенерировать 3 образа</button>
            <div class="mini-points compact-points">
              <span>На основе текущего гардероба</span>
              <span>Без внешних API</span>
              <span>Подробная логика — в следующем этапе</span>
            </div>
          </div>
        `,
        extraClass: 'compact-generate-card',
      })}
    `,
  });
}
