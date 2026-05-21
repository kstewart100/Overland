import {
  type JourneyStop,
  type Activity,
  journeyStops,
  activities } from
'../data/index';

/**
 * Convert a string to a URL-friendly slug
 */
export function slugify(name: string): string {
  return name.
  toLowerCase().
  replace(/[^a-z0-9]+/g, '-').
  replace(/^-+|-+$/g, '');
}

/**
 * Build the hierarchical URL for a stop
 * Format: /trips/{countryId}/{level3Id}/{citySlug}
 */
export function buildStopUrl(stop: JourneyStop): string {
  const citySlug = slugify(stop.name);
  return `/trips/${stop.countryId}/${stop.level3Id}/${citySlug}`;
}

/**
 * Build the URL for an activity
 * If activity has a stopId, nest under the stop's URL
 * Otherwise, use the standalone /activities/:id pattern
 */
export function buildActivityUrl(activity: Activity): string {
  if (activity.stopId) {
    const stop = journeyStops.find((s) => s.id === activity.stopId);
    if (stop) {
      const citySlug = slugify(stop.name);
      return `/trips/${stop.countryId}/${stop.level3Id}/${citySlug}/${activity.id}`;
    }
  }
  return `/activities/${activity.id}`;
}

/**
 * Find a stop by its URL components
 */
export function findStopBySlug(
countryId: string,
regionId: string,
citySlug: string)
: JourneyStop | undefined {
  return journeyStops.find(
    (stop) =>
    stop.countryId === countryId &&
    stop.level3Id === regionId &&
    slugify(stop.name) === citySlug
  );
}

/**
 * Find an activity by its ID
 */
export function findActivityById(id: string): Activity | undefined {
  return activities.find((a) => a.id === id);
}

/**
 * Parse the current pathname and extract routing information
 */
export function parseRoute(pathname: string): {
  view: 'home' | 'trips' | 'bucket-list' | 'activities';
  countryId?: string;
  regionId?: string;
  citySlug?: string;
  activityId?: string;
  stopId?: number;
} {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return { view: 'home' };
  }

  if (segments[0] === 'trips') {
    const result: any = { view: 'trips' };
    if (segments[1]) result.countryId = segments[1];
    if (segments[2]) result.regionId = segments[2];
    if (segments[3]) result.citySlug = segments[3];
    if (segments[4]) result.activityId = segments[4];
    return result;
  }

  if (segments[0] === 'activities') {
    return {
      view: 'activities',
      activityId: segments[1]
    };
  }

  if (segments[0] === 'bucket-list') {
    return { view: 'bucket-list' };
  }

  return { view: 'home' };
}