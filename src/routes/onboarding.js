import { createScaffold, createSectionCard } from '../components/layout.js';

export function renderOnboarding(state) {
  return createScaffold({
    title: 'Первый запуск',
    subtitle: 'Короткий гид помогает понять поток без длинной лендинговой подачи.',
    body: `
      ${createSectionCard({
        kicker: '1',
        title: 'Добавьте одну вещь естественным описанием',
        description: 'Начните с одной позиции: так черновик остаётся понятным, а данные — аккуратными.',
      })}
      ${createSectionCard({
        kicker: '2',
        title: 'Используйте демо-гардероб, если пока пусто',
        description: 'Демо-набор — это реальный сценарий для изучения будущего продукта, а не отдельный фейковый режим.',
      })}
      ${createSectionCard({
        kicker: '3',
        title: 'Постепенно готовьте базу к подбору образов',
        description: 'На этом этапе мы не расширяем продукт дальше нужного: сначала чистый гардеробный фундамент.',
        content: `<div class="inline-actions compact-inline-actions"><button class="button primary" type="button" data-complete-onboarding>${state.onboarding.seen ? 'Обновить статус гида' : 'Отметить как просмотренный'}</button></div>`,
      })}
    `,
  });
}
