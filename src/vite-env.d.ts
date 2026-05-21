/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAPBOX_TOKEN: string;
  /** Mapbox Studio style id, e.g. kstew/cmpep31gc001o01sjhoy9fo3l */
  readonly VITE_MAPBOX_STYLE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
