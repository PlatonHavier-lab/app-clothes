import { createScaffold, createSectionCard } from '../components/layout.js';

export function renderOutfitDetails(state, params) {
  const look = state.savedLooks.find((entry) => entry.id === params.outfitId);
  return createScaffold({
    title: look?.title || 'Детали образа',
    subtitle: 'Этот маршрут уже закреплён в каркасе приложения, но подробный экран образа ещё не входит в текущий этап.',
    body: createSectionCard({
      kicker: 'Каркас маршрута',
      title: 'Подробности образа появятся позже',
      description: look ? look.description || 'Мигрированные данные образа уже доступны.' : 'Пока для этого маршрута нет загруженного содержимого.',
    }),
  });
}
