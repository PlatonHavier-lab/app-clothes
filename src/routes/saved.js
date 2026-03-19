import { createScaffold, createSectionCard } from '../components/layout.js';

export function renderSaved(state) {
  return createScaffold({
    title: 'Сохранённые образы',
    subtitle: 'Маршрут уже существует и принимает мигрированные данные, но продвинутый сценарий сохранённых образов пока отложен.',
    body: createSectionCard({
      kicker: 'Миграция',
      title: `${state.savedLooks.length} ${state.savedLooks.length === 1 ? 'сохранённый образ' : state.savedLooks.length < 5 ? 'сохранённых образа' : 'сохранённых образов'}`,
      description: state.savedLooks.length
        ? state.savedLooks.map((look) => look.title).join(' · ')
        : 'Пока ничего не сохранено. Здесь позже появится полноценная работа с избранными образами.',
    }),
  });
}
