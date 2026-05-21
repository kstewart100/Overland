/** App data stores coords as [lat, lng] (Leaflet convention). Mapbox GL uses [lng, lat]. */

export function toLngLat([lat, lng]: [number, number]): [number, number] {
  return [lng, lat];
}

export function isValidCoord(
  c: [number, number] | undefined | null
): c is [number, number] {
  return (
    Array.isArray(c) &&
    c.length >= 2 &&
    Number.isFinite(c[0]) &&
    Number.isFinite(c[1])
  );
}

export function isValidCoordArray(coords: [number, number][]): [number, number][] {
  return coords.filter(isValidCoord);
}

export function lineToGeoJSON(coords: [number, number][]): GeoJSON.LineString {
  return {
    type: 'LineString',
    coordinates: isValidCoordArray(coords).map(toLngLat),
  };
}

export function boundsFromCoords(
  coords: [number, number][]
): [[number, number], [number, number]] | null {
  const valid = isValidCoordArray(coords);
  if (valid.length === 0) return null;
  let minLng = Infinity;
  let minLat = Infinity;
  let maxLng = -Infinity;
  let maxLat = -Infinity;
  for (const [lat, lng] of valid) {
    const [lngOut, latOut] = toLngLat([lat, lng]);
    minLng = Math.min(minLng, lngOut);
    minLat = Math.min(minLat, latOut);
    maxLng = Math.max(maxLng, lngOut);
    maxLat = Math.max(maxLat, latOut);
  }
  return [
    [minLng, minLat],
    [maxLng, maxLat],
  ];
}
