import { createEmptyState, loadState, saveState } from './storage.js';

let state = loadState();
const listeners = new Set();

export function getState() {
  return state;
}

export function setState(updater) {
  const nextState = typeof updater === 'function' ? updater(state) : updater;
  state = nextState;
  saveState(state);
  listeners.forEach((listener) => listener(state));
}

export function resetState() {
  state = createEmptyState();
  saveState(state);
  listeners.forEach((listener) => listener(state));
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
