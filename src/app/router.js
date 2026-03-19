import { renderGenerate } from '../routes/generate.js';
import { renderHome } from '../routes/home.js';
import { renderItemDetails } from '../routes/itemDetails.js';
import { renderItemNew } from '../routes/itemNew.js';
import { renderOnboarding } from '../routes/onboarding.js';
import { renderOutfitDetails } from '../routes/outfitDetails.js';
import { renderSaved } from '../routes/saved.js';
import { renderWardrobe } from '../routes/wardrobe.js';

const routeTable = [
  ['/', renderHome],
  ['/wardrobe', renderWardrobe],
  ['/generate', renderGenerate],
  ['/saved', renderSaved],
  ['/onboarding', renderOnboarding],
  ['/items/new', renderItemNew],
  ['/items/:itemId', renderItemDetails],
  ['/outfits/:outfitId', renderOutfitDetails],
];

function parseLocation() {
  const raw = location.hash.replace(/^#/, '') || '/';
  const [pathname, search = ''] = raw.split('?');
  return {
    pathname: pathname || '/',
    query: new URLSearchParams(search),
  };
}

function matchPath(pattern, pathname) {
  const patternParts = pattern.split('/').filter(Boolean);
  const pathParts = pathname.split('/').filter(Boolean);
  if (patternParts.length !== pathParts.length) return null;

  const params = {};
  for (let index = 0; index < patternParts.length; index += 1) {
    const patternPart = patternParts[index];
    const pathPart = pathParts[index];
    if (patternPart.startsWith(':')) params[patternPart.slice(1)] = decodeURIComponent(pathPart);
    else if (patternPart !== pathPart) return null;
  }
  return params;
}

export function resolveRoute(state) {
  const locationData = parseLocation();
  for (const [pattern, renderer] of routeTable) {
    const params = matchPath(pattern, locationData.pathname);
    if (params) return renderer(state, params, locationData.query);
  }
  return renderHome(state);
}
