/**
 * data/index.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Central data registry — imports all trip files and re-exports a unified API.
 *
 * ┌─────────────────────────────────────────────────────────────────┐
 * │  TO ADD A NEW TRIP                                              │
 * │  1. Create data/trips/myNewTrip.ts following the same pattern   │
 * │  2. Import its stops and activities below (two lines)           │
 * │  3. Spread them into journeyStops and activities arrays         │
 * │  That's it — the sidebar, map, and timeline pick it up auto.    │
 * └─────────────────────────────────────────────────────────────────┘
 */

// ─── Re-export types & hierarchy ────────────────────────────────────────────────────────────────

export * from './types';
export * from './hierarchy';

// ─── Trip imports ──────────────────────────────────────────────────────────────────────────────

import { northAmericaStops, northAmericaActivities } from './trips/northAmerica';
import { nzStops, nzActivities } from './trips/newZealand';
import { europeSummerStops, europeSummerActivities } from './trips/europeSummer2024';
import { europeFallStops, europeFallActivities } from './trips/europeFall2024';
// ↑ Add new trip imports here

// ─── Combined arrays ────────────────────────────────────────────────────────────────────────────

export const journeyStops = [
...northAmericaStops,
...nzStops,
...europeSummerStops,
...europeFallStops
// ↑ Spread new trip stops here
];

export const activities = [
...northAmericaActivities,
...nzActivities,
...europeSummerActivities,
...europeFallActivities
// ↑ Spread new trip activities here
];

// ─── Helpers ─────────────────────────────────────────────────────────────────────────────────

import type { JourneyStop, Activity, ActivityType } from './types';
import { LEVEL3_REGIONS } from './hierarchy';

/** Get activities associated with a stop (by stopId or proximity) */
export function getActivitiesForStop(stopId: number): Activity[] {
  const stop = journeyStops.find((s) => s.id === stopId);
  if (!stop) return [];
  return activities.filter((a) => {
    if (a.stopId === stopId) return true;
    const dLat = Math.abs(a.coords[0] - stop.coords[0]);
    const dLon = Math.abs(a.coords[1] - stop.coords[1]);
    if (dLat < 0.27 && dLon < 0.27 && !a.stopId) return true;
    return false;
  });
}

/** Get all stops in a Level 3 region */
export function getStopsByLevel3(level3Id: string): JourneyStop[] {
  return journeyStops.filter((s) => s.level3Id === level3Id);
}

/** Get all stops in a Level 2 region */
export function getStopsByLevel2(level2Id: string): JourneyStop[] {
  return journeyStops.filter((s) => s.level2Id === level2Id);
}

/** Get all stops in a country */
export function getStopsByCountry(countryId: string): JourneyStop[] {
  return journeyStops.filter((s) => s.countryId === countryId);
}

/** Parse a date string like "Feb 12" or "Mar 20–23" into a Date (start) */
export function parseDateStart(dateStr: string): Date {
  const months: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
  };
  const cleaned = dateStr.replace(/–.*/, '').trim();
  const parts = cleaned.split(' ');
  const month = months[parts[0]] ?? 1;
  const day = parseInt(parts[1]) || 1;
  return new Date(2025, month, day);
}

// ─── Legacy exports — kept for backward compat with TimelineScrubber ──

export const REGIONS = [
'Auckland & Northland',
'Waikato & Bay of Plenty',
'Central North Island',
'Wellington',
'Queenstown & Fiordland',
'Wanaka & Aspiring',
'Canterbury & Mt Cook',
'West Coast',
'Nelson & Tasman'] as
const;

export function getStopsByRegion(region: string): JourneyStop[] {
  return nzStops.filter((s) => s.region === region);
}

export const TRIP_START = new Date(2025, 1, 10); // Feb 10
export const TRIP_END = new Date(2025, 4, 10); // May 10

export const TYPE_COLORS = {
  running: '#DE6952',
  cycling: '#37A2BF',
  hiking: '#C4A35A',
  water: '#294050',
  breathwork: '#8B7EC8'
} as const;

export const TYPE_ICONS = {
  running: '🏃',
  cycling: '🚴',
  hiking: '🤾',
  water: '🌊',
  breathwork: '🧘'
} as const;