/**
 * data/trips/europeSummer2024.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Europe summer trip — June 25 to July 30, 2024
 * Route: Paris → Burgundy → Alsace → Basel → Black Forest → Rhine → Switzerland → Paris
 *
 * HOW TO ADD A STOP:
 *   1. Add a JourneyStop object to europeSummerStops[].
 *   2. Set countryId, level2Id, level3Id from hierarchy.ts.
 *      Stop IDs in this file are in the 100–199 range.
 *
 * HOW TO ADD AN ACTIVITY:
 *   1. Add an Activity to europeSummerActivities[].
 *   2. Set stopId to match the JourneyStop id.
 *   3. Use id prefix 'es-' (Europe Summer) to avoid collisions.
 */

import type { JourneyStop, Activity } from '../types';

export const europeSummerStops: JourneyStop[] = [
{
  id: 100,
  name: 'Paris',
  date: 'Jun 26',
  coords: [48.8566, 2.3522],
  journal: 'A hot first day — picked up a Vélib bike and explored the city. The Seine was shimmering.',
  countryId: 'fr', level2Id: 'fr-main', level3Id: 'paris',
  country: 'France'
},
{
  id: 101,
  name: 'Burgundy — Semur-en-Auxois',
  date: 'Jun 28–29',
  coords: [47.4833, 4.3333],
  journal: "Two massive days in the vineyards. The slogan was 'we ride for pastries' and we delivered — 132km over two days through rolling Burgundian countryside.",
  countryId: 'fr', level2Id: 'fr-main', level3Id: 'burgundy',
  country: 'France'
},
{
  id: 102,
  name: 'Dijon — Tour de France',
  date: 'Jul 4–7',
  coords: [47.322, 5.0415],
  journal: "Caught the Tour de France live — the peloton blurring through the medieval streets of Dijon. Spent four days riding the surrounding countryside, getting lost, and eating well.",
  countryId: 'fr', level2Id: 'fr-main', level3Id: 'burgundy',
  country: 'France'
},
{
  id: 103,
  name: 'Colmar → Strasbourg',
  date: 'Jul 8',
  coords: [48.0794, 7.3589],
  journal: "One epic descent through the Vosges to start, then 90km of flat cycling from Colmar through Alsace wine villages to Strasbourg. The Route des Vins is no joke.",
  countryId: 'fr', level2Id: 'fr-main', level3Id: 'alsace',
  country: 'France'
},
{
  id: 104,
  name: 'Basel',
  date: 'Jul 9–10',
  coords: [47.5596, 7.5886],
  journal: "The Rhine splits Switzerland, France, and Germany right at Basel. Rode 47km into the surrounding hills — one epic descent. Morning ride the next day before moving on.",
  countryId: 'ch', level2Id: 'ch-main', level3Id: 'ch-basel',
  country: 'Switzerland'
},
{
  id: 105,
  name: 'Freiburg',
  date: 'Jul 11',
  coords: [47.9990, 7.8421],
  journal: "First ride in Germany — the Black Forest town of Freiburg is made for cyclists. Two rides through the surrounding forest.",
  countryId: 'de', level2Id: 'de-main', level3Id: 'black-forest',
  country: 'Germany'
},
{
  id: 106,
  name: 'Wiesbaden',
  date: 'Jul 13',
  coords: [50.0782, 8.2398],
  journal: "A long ride through the German countryside north of the Rheingau. Rolling vineyards, no one on the roads, warm afternoon.",
  countryId: 'de', level2Id: 'de-main', level3Id: 'rhine-valley',
  country: 'Germany'
},
{
  id: 107,
  name: 'Bernese Oberland — Thun & Lauterbrunnen',
  date: 'Jul 14–16',
  coords: [46.5958, 7.9091],
  journal: "Four rides and two hikes across three days in the shadow of the Eiger. Thor made an appearance (and a return). The Lauterbrunnen valley is unlike anywhere I've been.",
  countryId: 'ch', level2Id: 'ch-main', level3Id: 'bernese-oberland',
  country: 'Switzerland'
},
{
  id: 108,
  name: 'Zurich',
  date: 'Jul 18',
  coords: [47.3769, 8.5417],
  journal: "A morning warmup then a full-day ride — coffee stop, lake swim, pizza in town, gelato by the river. The most civilized 52km ever ridden.",
  countryId: 'ch', level2Id: 'ch-main', level3Id: 'zurich-region',
  country: 'Switzerland'
},
{
  id: 109,
  name: 'Andermatt / Oberalp Pass',
  date: 'Jul 19',
  coords: [46.6346, 8.5939],
  journal: "Thor made a return on the Oberalpass — dramatic alpine weather with lightning on the peaks. 24km of high-altitude riding, then a long descent into the valley.",
  countryId: 'ch', level2Id: 'ch-main', level3Id: 'central-switzerland',
  country: 'Switzerland'
},
{
  id: 110,
  name: 'Ticino — Lugano & Bissone',
  date: 'Jul 20',
  coords: [45.9867, 8.9464],
  journal: "The Italian-speaking canton feels like another country. 83km along the lake shore in the morning, then an afternoon spritz in Paradiso. Tour de Naboo.",
  countryId: 'ch', level2Id: 'ch-main', level3Id: 'ticino',
  country: 'Switzerland'
},
{
  id: 111,
  name: 'Andermatt — Big Day',
  date: 'Jul 23',
  coords: [46.6346, 8.5939],
  journal: "108km through the Alps — Gandalf would approve. Crossed multiple passes, climbed thousands of meters, and earned the descent.",
  countryId: 'ch', level2Id: 'ch-main', level3Id: 'central-switzerland',
  country: 'Switzerland'
},
{
  id: 112,
  name: 'Lausanne / Lake Geneva',
  date: 'Jul 24',
  coords: [46.5197, 6.6323],
  journal: "An afternoon ride along the northern shore of Lake Geneva — the Jura mountains on one side, the Alps on the other.",
  countryId: 'ch', level2Id: 'ch-main', level3Id: 'lake-geneva',
  country: 'Switzerland'
},
{
  id: 113,
  name: 'Paris (return)',
  date: 'Jul 25',
  coords: [48.8566, 2.3522],
  journal: "Back to Paris to close out the summer trip. Ran with Midnight Runners through the city at dusk — the Seine at golden hour.",
  countryId: 'fr', level2Id: 'fr-main', level3Id: 'paris',
  country: 'France'
}];


export const europeSummerActivities: Activity[] = [
// ── PARIS ──
{ id: 'es-c1', type: 'cycling', date: 'Jun 26', name: 'A hot first day', distance: 7.4, time: '56:52', location: 'Paris', coords: [48.86, 2.35], highlight: false, stopId: 100 },
{ id: 'es-c2', type: 'cycling', date: 'Jul 1', name: 'Tour de Paris', distance: 41.8, time: '4:12:20', location: 'Paris', coords: [48.86, 2.35], highlight: true, desc: 'A giant loop of Paris on Vélib — every arrondissement', stopId: 100 },
{ id: 'es-c3', type: 'cycling', date: 'Jul 3', name: 'Paris ride', distance: 19.7, time: '1:44:11', location: 'Paris', coords: [48.86, 2.35], highlight: false, stopId: 100 },
{ id: 'es-c4', type: 'cycling', date: 'Jul 4', name: 'Morning ride', distance: 3.9, time: '26:26', location: 'Paris', coords: [48.86, 2.35], highlight: false, stopId: 100 },
{ id: 'es-r1', type: 'running', date: 'Jul 25', name: 'Midnight Runners Paris', distance: 5.4, time: '1:03:08', location: 'Paris', coords: [48.86, 2.35], highlight: true, desc: 'Midnight Runners group run through Paris at dusk', stopId: 113 },

// ── BURGUNDY ──
{ id: 'es-c5', type: 'cycling', date: 'Jun 28', name: "I'll be wearing a yellow jersey next time you see me 🤪", distance: 32.3, time: '2:33:42', location: 'Semur-en-Auxois', coords: [47.48, 4.33], highlight: true, desc: 'Burgundy vineyard roads — 52km of rolling countryside', stopId: 101 },
{ id: 'es-c6', type: 'cycling', date: 'Jun 29', name: 'We ride for pastries', distance: 49.8, time: '3:44:44', location: 'Semur-en-Auxois', coords: [47.48, 4.34], highlight: true, desc: '80km through Burgundy finishing at a boulangerie', stopId: 101 },
{ id: 'es-c7', type: 'cycling', date: 'Jul 4', name: 'I got lost // Tour de France day #1', distance: 2.9, time: '18:17', location: 'Dijon', coords: [47.32, 5.04], highlight: false, stopId: 102 },
{ id: 'es-c8', type: 'cycling', date: 'Jul 5', name: 'Ride to Tour de France', distance: 2.7, time: '16:55', location: 'Dijon', coords: [47.32, 5.04], highlight: false, stopId: 102 },
{ id: 'es-c9', type: 'cycling', date: 'Jul 5', name: 'Lunch ride', distance: 13.3, time: '1:10:41', location: 'Dijon', coords: [47.32, 5.04], highlight: false, stopId: 102 },
{ id: 'es-c10', type: 'cycling', date: 'Jul 5', name: 'Afternoon ride', distance: 7.1, time: '33:40', location: 'Nuits-Saint-Georges', coords: [47.11, 4.95], highlight: false, stopId: 102 },
{ id: 'es-c11', type: 'cycling', date: 'Jul 7', name: 'Morning ride in Dijon', distance: 17.1, time: '1:21:46', location: 'Dijon', coords: [47.32, 5.04], highlight: false, stopId: 102 },

// ── ALSACE ──
{ id: 'es-c12', type: 'cycling', date: 'Jul 8', name: 'Colmar to Strasbourg', distance: 56.1, time: '3:57:29', location: 'Colmar', coords: [48.08, 7.36], highlight: true, desc: '90km along the Route des Vins through Alsatian wine villages', stopId: 103 },

// ── BASEL ──
{ id: 'es-c13', type: 'cycling', date: 'Jul 9', name: 'One epic descent', distance: 29.3, time: '2:25:41', location: 'Basel', coords: [47.56, 7.59], highlight: true, desc: 'Climbed into the Jura hills then a long ripping descent back to the Rhine', stopId: 104 },
{ id: 'es-c14', type: 'cycling', date: 'Jul 10', name: 'Morning ride', distance: 2.8, time: '26:31', location: 'Basel', coords: [47.56, 7.59], highlight: false, stopId: 104 },

// ── BLACK FOREST ──
{ id: 'es-c15', type: 'cycling', date: 'Jul 11', name: '1st ride in Germany', distance: 3.9, time: '22:38', location: 'Freiburg', coords: [48.0, 7.84], highlight: false, stopId: 105 },
{ id: 'es-c16', type: 'cycling', date: 'Jul 11', name: 'Ride back to the hotel', distance: 6.7, time: '40:34', location: 'Freiburg', coords: [48.0, 7.84], highlight: false, stopId: 105 },

// ── RHINE / WIESBADEN ──
{ id: 'es-c17', type: 'cycling', date: 'Jul 13', name: 'A ride in the German countryside', distance: 33.5, time: '2:36:16', location: 'Wiesbaden', coords: [50.08, 8.24], highlight: false, stopId: 106 },

// ── BERNESE OBERLAND ──
{ id: 'es-c18', type: 'cycling', date: 'Jul 14', name: 'Riding into the week (in Switzerland)', distance: 17.3, time: '1:08:43', location: 'Thun', coords: [46.75, 7.63], highlight: false, stopId: 107 },
{ id: 'es-c19', type: 'cycling', date: 'Jul 15', name: "I'll take my coffee with 2000+ feet of elevation", distance: 17.5, time: '1:33:27', location: 'Thun', coords: [46.75, 7.63], highlight: true, desc: '28km with a punishing climb before breakfast', stopId: 107 },
{ id: 'es-h1', type: 'hiking', date: 'Jul 15', name: 'Thor made an appearance', distance: 4.5, time: '1:29:55', location: 'Lauterbrunnen', coords: [46.59, 7.91], highlight: false, stopId: 107 },
{ id: 'es-h2', type: 'hiking', date: 'Jul 16', name: 'No Thor this time', distance: 6.3, time: '3:08:04', location: 'Lauterbrunnen', coords: [46.59, 7.91], highlight: true, desc: 'Hiked into the valley with waterfall walls on both sides', stopId: 107 },
{ id: 'es-c20', type: 'cycling', date: 'Jul 16', name: 'Hike/bike', distance: 5.7, time: '1:00:02', location: 'Lauterbrunnen', coords: [46.6, 7.91], highlight: false, stopId: 107 },

// ── ZURICH ──
{ id: 'es-c21', type: 'cycling', date: 'Jul 18', name: 'Morning warmup', distance: 2.7, time: '18:46', location: 'Zurich', coords: [47.38, 8.54], highlight: false, stopId: 108 },
{ id: 'es-c22', type: 'cycling', date: 'Jul 18', name: 'Morning ride (coffee, lake swim, pizza, gelato)', distance: 32.8, time: '2:53:23', location: 'Zurich', coords: [47.38, 8.54], highlight: true, desc: 'The most civilized long ride — swim in the lake, pizza stop, gelato by the river', stopId: 108 },

// ── ANDERMATT / OBERALP ──
{ id: 'es-c23', type: 'cycling', date: 'Jul 19', name: 'Thor made a return on the Oberalpass', distance: 15.2, time: '1:28:36', location: 'Andermatt', coords: [46.63, 8.59], highlight: true, desc: 'Alpine drama — lightning on the peaks, 24km of high altitude riding', stopId: 109 },
{ id: 'es-c24', type: 'cycling', date: 'Jul 19', name: 'Evening ride', distance: 1.6, time: '9:18', location: 'Andermatt', coords: [46.63, 8.59], highlight: false, stopId: 109 },

// ── TICINO ──
{ id: 'es-c25', type: 'cycling', date: 'Jul 20', name: 'Tour de Naboo', distance: 51.5, time: '3:41:25', location: 'Lugano', coords: [45.99, 8.95], highlight: true, desc: '83km of lake shore cycling in Italian-speaking Switzerland', stopId: 110 },
{ id: 'es-c26', type: 'cycling', date: 'Jul 20', name: 'An afternoon spritz', distance: 4.5, time: '17:22', location: 'Paradiso', coords: [45.98, 8.95], highlight: false, stopId: 110 },

// ── BIG ALPINE DAY ──
{ id: 'es-c27', type: 'cycling', date: 'Jul 23', name: "I want to see mountains, Gandalf!", distance: 67.4, time: '7:06:22', location: 'Andermatt', coords: [46.63, 8.59], highlight: true, desc: '108km through the Alps — multiple passes, serious elevation', stopId: 111 },

// ── LAKE GENEVA ──
{ id: 'es-c28', type: 'cycling', date: 'Jul 24', name: 'Afternoon ride along Lake Geneva', distance: 14.0, time: '1:08:44', location: 'Lausanne', coords: [46.52, 6.63], highlight: false, stopId: 112 }];