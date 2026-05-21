function isUsableMapboxToken(token: string | undefined): token is string {
  return (
    !!token &&
    token.startsWith('pk.') &&
    token.length > 20 &&
    !token.includes('your_token')
  );
}

/** Resolved at call time so dev server restarts pick up .env changes reliably. */
export function getMapboxToken(): string | undefined {
  const raw = import.meta.env.VITE_MAPBOX_TOKEN as string | undefined;
  return isUsableMapboxToken(raw) ? raw : undefined;
}

/** Published Mapbox Studio style: Overland (kstew) */
export const DEFAULT_MAPBOX_STYLE = 'kstew/cmpep31gc001o01sjhoy9fo3l';

const rawStyle = import.meta.env.VITE_MAPBOX_STYLE as string | undefined;
export const MAPBOX_STYLE_ID = rawStyle?.trim() || DEFAULT_MAPBOX_STYLE;

const MAPBOX_PRESET_STYLES = {
  light: 'mapbox/light-v11',
  outdoors: 'mapbox/outdoors-v12',
  dark: 'mapbox/dark-v11',
} as const;

export type MapboxBasemapVariant = keyof typeof MAPBOX_PRESET_STYLES;

function resolveStyleId(variant: MapboxBasemapVariant): string {
  return MAPBOX_STYLE_ID.startsWith('mapbox/')
    ? MAPBOX_STYLE_ID
    : MAPBOX_STYLE_ID || MAPBOX_PRESET_STYLES[variant];
}

/** Mapbox GL style URL for mapboxgl.Map `style` option. */
export function getMapboxStyleUrl(
  variant: MapboxBasemapVariant = 'light'
): string {
  const styleId = resolveStyleId(variant);
  return `mapbox://styles/${styleId}`;
}

let warnedMissingToken = false;

export function requireMapboxToken(): string {
  const token = getMapboxToken();
  if (token) return token;
  if (!warnedMissingToken) {
    warnedMissingToken = true;
    console.warn(
      '[Overland] VITE_MAPBOX_TOKEN is not set — map cannot load. Add your Mapbox public token to .env (see .env.example).'
    );
  }
  throw new Error('VITE_MAPBOX_TOKEN is required for Mapbox GL');
}

export function logBasemapInfo(variant: MapboxBasemapVariant = 'light'): void {
  if (!import.meta.env.DEV) return;
  const token = getMapboxToken();
  const styleId = resolveStyleId(variant);
  console.info(
    token
      ? `[Overland] Mapbox GL style: ${styleId}`
      : '[Overland] Mapbox token missing — set VITE_MAPBOX_TOKEN in .env'
  );
}
