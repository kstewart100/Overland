// ─── Core Types ───────────────────────────────────────────────────────────────

export type ActivityType = 'running' | 'cycling' | 'hiking' | 'water' | 'breathwork';

export interface Country {
  id: string;
  name: string;
  emoji: string;
}

export interface Level2Region {
  id: string;
  name: string;
  countryId: string;
}

export interface Level3Region {
  id: string;
  name: string;
  level2Id: string;
  countryId: string;
}

/**
 * A named stop/location visited during a trip.
 * level2Id + level3Id drive the 4-level sidebar navigation.
 */
export interface JourneyStop {
  id: number;
  name: string;
  date: string;
  coords: [number, number]; // [lat, lon]
  departure?: boolean;
  journal: string;
  countryId: string; // e.g. 'nz', 'fr', 'ch'
  level2Id: string; // e.g. 'nz-north', 'fr-main'
  level3Id: string; // e.g. 'auckland-northland', 'paris'
  /** Legacy — kept for TimelineScrubber backward compat */
  region?: string;
  /** Legacy — kept for DetailPanel compat */
  country?: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  date: string;
  name: string;
  distance?: number; // miles — optional (e.g. breathwork has no distance)
  time: string;
  location: string;
  coords: [number, number];
  highlight: boolean;
  desc?: string;
  stopId?: number;
  multiDay?: boolean;
}

// ─── Display helpers ──────────────────────────────────────────────────────────

export const TYPE_COLORS: Record<ActivityType, string> = {
  running: '#DE6952',
  cycling: '#37A2BF',
  hiking: '#C4A35A',
  water: '#294050',
  breathwork: '#8B7EC8'
};

export const TYPE_ICONS: Record<ActivityType, string> = {
  running: '🏃',
  cycling: '🚴',
  hiking: '🥾',
  water: '🌊',
  breathwork: '🧘'
};