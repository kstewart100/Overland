/**
 * data/trips/europeFall2024.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Europe fall trip — October 3 to November 20, 2024
 * Route: Dolomites → Milan → Amalfi Coast → Paris
 *
 * HOW TO ADD A STOP:
 *   1. Add a JourneyStop object to europeFallStops[].
 *   2. Set countryId, level2Id, level3Id from hierarchy.ts.
 *      Stop IDs in this file are in the 200–299 range.
 *
 * HOW TO ADD AN ACTIVITY:
 *   1. Add an Activity to europeFallActivities[].
 *   2. Set stopId to match the JourneyStop id.
 *   3. Use id prefix 'ef-' (Europe Fall) to avoid collisions.
 */

import type { JourneyStop, Activity } from '../types';

export const europeFallStops: JourneyStop[] = [
{
  id: 200,
  name: 'Val Gardena — Dolomites',
  date: 'Oct 9–11',
  coords: [46.5594, 11.7978],
  journal: "Two hikes up into the Dolomites — the first for the best risotto I've ever had, the second for gelato. Then a brutal 64km ride over the Sella and Pordoi passes. Twice.",
  countryId: 'it', level2Id: 'it-main', level3Id: 'dolomites',
  country: 'Italy'
},
{
  id: 201,
  name: 'Milan',
  date: 'Oct 12',
  coords: [45.4642, 9.19],
  journal: 'One night in Milan. Ran with Midnight Runners Milan — same energy as Paris, different language.',
  countryId: 'it', level2Id: 'it-main', level3Id: 'milan',
  country: 'Italy'
},
{
  id: 202,
  name: 'Amalfi Coast',
  date: 'Oct 21–24',
  coords: [40.6333, 14.6029],
  journal: "Three days on the Amalfi Coast — the Path of the Gods, the Path of the Lemons, and a hike up Mt Vesuvius. The trail above the sea was unlike anything. Off-season means empty paths and perfect weather.",
  countryId: 'it', level2Id: 'it-main', level3Id: 'amalfi-coast',
  country: 'Italy'
},
{
  id: 203,
  name: 'Paris',
  date: 'Oct 27–Nov 18',
  coords: [48.8566, 2.3522],
  journal: "A long Paris stretch — ran the Grande Paris Saint-Denis 10k race, joined Midnight Runners for Halloween, and a club ride with Le Peloton Cafe through the countryside south of the city.",
  countryId: 'fr', level2Id: 'fr-main', level3Id: 'paris',
  country: 'France'
}];


export const europeFallActivities: Activity[] = [
// ── DOLOMITES ──
{ id: 'ef-h1', type: 'hiking', date: 'Oct 9', name: "Hiked up to get the best risotto I've ever had", distance: 4.2, time: '1:45:42', location: 'Val Gardena', coords: [46.56, 11.80], highlight: true, desc: 'Morning hike to a mountain hut above the valley — worth every switchback', stopId: 200 },
{ id: 'ef-h2', type: 'hiking', date: 'Oct 9', name: 'Hiked down to cool off with some amazing gelato', distance: 4.7, time: '1:40:22', location: 'Val Gardena', coords: [46.56, 11.80], highlight: false, stopId: 200 },
{ id: 'ef-c1', type: 'cycling', date: 'Oct 11', name: 'Took on the Sella (twice) and the Pordoi passes', distance: 40.2, time: '4:36:47', location: 'Ortisei', coords: [46.57, 11.67], highlight: true, desc: '64km over two alpine passes — Sella Pass crossed twice, then the Pordoi', stopId: 200 },

// ── MILAN ──
{ id: 'ef-r1', type: 'running', date: 'Oct 12', name: 'Midnight Runners Milan', distance: 5.6, time: '54:55', location: 'Milan', coords: [45.46, 9.19], highlight: false, stopId: 201 },

// ── AMALFI COAST ──
{ id: 'ef-h3', type: 'hiking', date: 'Oct 21', name: 'Path of the gods', distance: 6.3, time: '2:55:45', location: 'Agerola', coords: [40.63, 14.54], highlight: true, desc: 'The ancient mule path 600m above the sea — one of the most dramatic walks in Italy', stopId: 202 },
{ id: 'ef-h4', type: 'hiking', date: 'Oct 22', name: 'Path of the lemons + hike into Amalfi', distance: 5.8, time: '2:41:46', location: 'Maiori', coords: [40.63, 14.64], highlight: true, desc: 'Lemon groves clinging to the cliffs, then down into the town of Amalfi', stopId: 202 },
{ id: 'ef-h5', type: 'hiking', date: 'Oct 24', name: 'Afternoon hike up Mt Vesuvius', distance: 2.2, time: '58:56', location: 'Ercolano', coords: [40.82, 14.43], highlight: true, desc: 'Up to the crater rim of Vesuvius — the Bay of Naples below in the haze', stopId: 202 },

// ── PARIS ──
{ id: 'ef-r2', type: 'running', date: 'Oct 27', name: 'Grande Paris Saint-Denis 10k', distance: 6.1, time: '44:38', location: 'Paris', coords: [48.86, 2.35], highlight: true, desc: 'Race day — 10k through the northern suburbs of Paris', stopId: 203 },
{ id: 'ef-r3', type: 'running', date: 'Oct 31', name: 'Midnight Runners Paris: Halloween', distance: 5.1, time: '42:29', location: 'Paris', coords: [48.86, 2.35], highlight: false, stopId: 203 },
{ id: 'ef-r4', type: 'running', date: 'Nov 7', name: 'Running feels good', distance: 4.5, time: '48:46', location: 'Paris', coords: [48.86, 2.35], highlight: false, stopId: 203 },
{ id: 'ef-c2', type: 'cycling', date: 'Nov 9', name: 'Fun club ride with Le Peloton Cafe', distance: 51.2, time: '3:50:24', location: 'Paris', coords: [48.86, 2.35], highlight: true, desc: 'Club ride south of Paris with Le Peloton Cafe — rolling countryside', stopId: 203 },
{ id: 'ef-r5', type: 'running', date: 'Nov 12', name: 'Midnight Runners Paris', distance: 6.2, time: '45:11', location: 'Paris', coords: [48.86, 2.35], highlight: false, stopId: 203 },
{ id: 'ef-b1', type: 'breathwork', date: 'Nov 18', name: 'Afternoon breathwork', time: '5:34', location: 'Paris', coords: [48.86, 2.35], highlight: false, stopId: 203 }];