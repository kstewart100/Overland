/**
 * data/trips/newZealand.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * New Zealand trip data — Feb 10 to May 10, 2025
 *
 * HOW TO ADD A STOP:
 *   1. Add a JourneyStop object to nzStops[] below.
 *   2. Set countryId: 'nz', level2Id: 'nz-north' or 'nz-south',
 *      and level3Id to one of the Level3 region IDs defined in hierarchy.ts.
 *
 * HOW TO ADD AN ACTIVITY:
 *   1. Add an Activity object to nzActivities[] below.
 *   2. Set stopId to the JourneyStop id it belongs to.
 */

import type { JourneyStop, Activity } from '../types';

export const nzStops: JourneyStop[] = [
{
  id: 1,
  name: 'San Francisco, CA',
  country: 'United States',
  date: 'Feb 10–11',
  coords: [37.7749, -122.4194],
  departure: true,
  journal: 'The starting point. Packed two bags, said goodbye to the apartment, and headed to SFO for the longest flight of my life.',
  countryId: 'nz',
  level2Id: 'nz-north',
  level3Id: 'auckland-northland',
  region: 'Departure'
},
{
  id: 2,
  name: 'Auckland',
  date: 'Feb 12–13',
  coords: [-36.8485, 174.7633],
  journal: 'Walked to the harbor for my first flat white. My Ponsonby B&B had a Sky Tower view. Running the harbor route, the city reminded me of San Diego. Had lunch with an old friend who convinced me to book Hobbiton.',
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'auckland-northland',
  region: 'Auckland & Northland'
},
{
  id: 3,
  name: 'Rotorua',
  date: 'Feb 14–15',
  coords: [-38.1368, 176.2497],
  journal: 'Race day at the Tarawera Ultra-Trail — 2:09 finish, my second fastest half marathon. Lakefront old-growth forest, sulfur flats, then redwood trees that smelled like home. The Haka before the start was moving.',
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'waikato-bop',
  region: 'Waikato & Bay of Plenty'
},
{
  id: 4,
  name: 'Whangārei',
  date: 'Feb 16',
  coords: [-35.7275, 174.3166],
  journal: 'A quick stop on the way north. Visited the falls and grabbed lunch at a farmers market.',
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'auckland-northland',
  region: 'Auckland & Northland'
},
{
  id: 5,
  name: 'Russell, Bay of Islands',
  date: 'Feb 17–18',
  coords: [-35.2659, 174.1192],
  journal: "Took the ferry across to Russell — New Zealand's first capital. Quiet streets, old churches, and the best fish and chips of the trip.",
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'auckland-northland',
  region: 'Auckland & Northland'
},
{
  id: 6,
  name: 'Cape Brett',
  date: 'Feb 19–21',
  coords: [-35.1854, 174.327],
  journal: "Ten miles in, about 1,000 feet of gain. The hut community was magical. The stars that night were unlike anything I'd seen. Extended from one night to two, caught fish off the cliffs.",
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'auckland-northland',
  region: 'Auckland & Northland'
},
{
  id: 7,
  name: 'Auckland — Mission Bay',
  date: 'Feb 24',
  coords: [-36.856, 174.828],
  journal: 'Back in Auckland for a sunset run along Mission Bay. The waterfront promenade was packed with families.',
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'auckland-northland',
  region: 'Auckland & Northland'
},
{
  id: 8,
  name: 'Hobbiton',
  date: 'Feb 25',
  coords: [-37.8724, 175.6824],
  journal: 'Worth every dollar. The Shire felt real — green hills, round doors, and a pint at the Green Dragon Inn.',
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'waikato-bop',
  region: 'Waikato & Bay of Plenty'
},
{
  id: 9,
  name: 'Rotorua — Redwoods',
  date: 'Feb 26–27',
  coords: [-38.15, 176.28],
  journal: 'Came back for the mountain biking. The Whakarewarewa forest trails were world-class — flowy singletrack through towering redwoods.',
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'waikato-bop',
  region: 'Waikato & Bay of Plenty'
},
{
  id: 10,
  name: 'Tauranga',
  date: 'Feb 28–Mar 1',
  coords: [-37.6878, 176.1651],
  journal: 'A brief stop to explore the harbor town and catch some waves at the beach.',
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'waikato-bop',
  region: 'Waikato & Bay of Plenty'
},
{
  id: 11,
  name: 'Mount Maunganui',
  date: 'Mar 2–3',
  coords: [-37.639, 176.1886],
  journal: 'Ran up the Mount at dawn — the Pacific stretched out in every direction. Surfed in the afternoon, ran again the next morning.',
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'waikato-bop',
  region: 'Waikato & Bay of Plenty'
},
{
  id: 12,
  name: 'Taupō',
  date: 'Mar 3–6',
  coords: [-38.6857, 176.0702],
  journal: 'Lake Taupō was enormous and impossibly blue. Mountain biked the trails above town, ran the lakefront, and jumped off a dock at sunset.',
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'central-north',
  region: 'Central North Island'
},
{
  id: 13,
  name: "Tongariro Nat'l Park",
  date: 'Mar 7',
  coords: [-39.2037, 175.5765],
  journal: 'The Tongariro Alpine Crossing — emerald lakes, volcanic craters, and the shadow of Mount Doom. One of the best day hikes in the world.',
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'central-north',
  region: 'Central North Island'
},
{
  id: 14,
  name: 'Napier',
  date: 'Mar 8',
  coords: [-39.4928, 176.912],
  journal: 'Art Deco capital of New Zealand. Cycled through the wine country and along the coast.',
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'central-north',
  region: 'Central North Island'
},
{
  id: 15,
  name: 'Wellington',
  date: 'Mar 9–14',
  coords: [-41.2865, 174.7762],
  journal: "The WoRM running group charged up Mt Victoria — the hardest group I'd encountered. Half the group jumped into the harbor and I followed. Found the only Welsh bar in the Southern Hemisphere. Mountain biked to Mākara Peak across a terrifying swing bridge.",
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'wellington',
  region: 'Wellington'
},
{
  id: 16,
  name: 'Queenstown',
  date: 'Mar 15–18',
  coords: [-45.0312, 168.6626],
  journal: 'Adventure capital lived up to its name. Cycled to Arrowtown past Lord of the Rings film sites. The Remarkables lived up to their name at sunset.',
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'queenstown-fiordland',
  region: 'Queenstown & Fiordland'
},
{
  id: 17,
  name: 'Te Anau',
  date: 'Mar 19–20',
  coords: [-45.4163, 167.7191],
  journal: 'Gateway to Fiordland. Rode along the Waiau River — the Anduin from Lord of the Rings. Quiet town, big mountains.',
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'queenstown-fiordland',
  region: 'Queenstown & Fiordland'
},
{
  id: 18,
  name: 'Milford Track',
  date: 'Mar 20–23',
  coords: [-44.6414, 167.9266],
  journal: "Four days, 53 kilometers. Clinton Valley felt like a Jurassic scene. Climbed to Mackinnon Pass ahead of weather, saw keas riding thermals. Sutherland Falls dropped 580 meters in the rain. I didn't understand how special it was until it was over.",
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'queenstown-fiordland',
  region: 'Queenstown & Fiordland'
},
{
  id: 19,
  name: 'Te Anau — Post-Milford',
  date: 'Mar 24–25',
  coords: [-45.43, 167.73],
  journal: 'Recovery days. Sore legs, big appetite. Ate everything in sight and planned the Routeburn.',
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'queenstown-fiordland',
  region: 'Queenstown & Fiordland'
},
{
  id: 20,
  name: 'Routeburn Track',
  date: 'Mar 26–28',
  coords: [-44.75, 168.2],
  journal: "Socked in at Harris Saddle, then the clouds broke over Lake Mackenzie. I stayed an hour just looking — the valley opened to the ocean. Lake Mackenzie Hut sat at the water's edge like a summer cottage.",
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'queenstown-fiordland',
  region: 'Queenstown & Fiordland'
},
{
  id: 21,
  name: 'Queenstown — Ben Lomond',
  date: 'Mar 29–30',
  coords: [-45.015, 168.71],
  journal: 'Hiked Ben Lomond for panoramic views of the Remarkables and Lake Wakatipu. Joined the Kinisi Run Club for an easy morning jog.',
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'queenstown-fiordland',
  region: 'Queenstown & Fiordland'
},
{
  id: 22,
  name: 'Wanaka',
  date: 'Mar 31–Apr 4',
  coords: [-44.7, 169.1522],
  journal: 'Smaller and calmer than Queenstown. Met Robert Lim from San Francisco — another person on an extended break. Another place I could imagine living.',
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'wanaka-aspiring',
  region: 'Wanaka & Aspiring'
},
{
  id: 23,
  name: 'Liverpool Hut, Mt Aspiring',
  date: 'Apr 1–2',
  coords: [-44.597, 168.721],
  journal: 'The climb to Liverpool Hut was relentless — 500 meters of gain in one kilometer. But the views of Mt Aspiring from the hut made every step worth it.',
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'wanaka-aspiring',
  region: 'Wanaka & Aspiring'
},
{
  id: 24,
  name: "Roy's Peak",
  date: 'Apr 5',
  coords: [-44.644, 169.078],
  journal: 'The iconic ridge walk. 1,600 meters of gain to the summit with Lake Wanaka stretching below. Worth every switchback.',
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'wanaka-aspiring',
  region: 'Wanaka & Aspiring'
},
{
  id: 25,
  name: 'Glendhu Bay Bike Park',
  date: 'Apr 6',
  coords: [-44.726, 169.02],
  journal: 'Every trail had the lake below — the light on the water in the afternoon was unforgettable. Best bike park of the trip.',
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'wanaka-aspiring',
  region: 'Wanaka & Aspiring'
},
{
  id: 26,
  name: 'Gillespie Pass Circuit',
  date: 'Apr 8–11',
  coords: [-44.4, 169.05],
  journal: 'Four days through the Wilkin and Young valleys. Remote, relentless, and completely worth it. The pass itself was the hardest thing I did in New Zealand.',
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'wanaka-aspiring',
  region: 'Wanaka & Aspiring'
},
{
  id: 27,
  name: 'Aoraki / Mt Cook',
  date: 'Apr 14–18',
  coords: [-43.73, 170.1],
  journal: 'Hiked above the clouds to Mueller Hut and woke up to Aoraki filling the sky. Hooker Valley was gentler — swing bridges, icebergs, terminal lake. The scale of everything here made me quiet.',
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'canterbury-mtcook',
  region: 'Canterbury & Mt Cook'
},
{
  id: 28,
  name: 'Punakaiki & West Coast',
  date: 'Apr 20–23',
  coords: [-42.11, 171.33],
  journal: 'Pancake Rocks in the rain, kayaking up the Pororari River through limestone gorges. The West Coast felt wilder and emptier than anywhere else. Ran through falling autumn leaves.',
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'west-coast',
  region: 'West Coast'
},
{
  id: 29,
  name: 'Nelson Lakes',
  date: 'Apr 27–28',
  coords: [-41.82, 172.84],
  journal: 'Lake Angelus Hut sat in an alpine bowl surrounded by peaks. The climb was steep and the hut was cold, but the stars were close enough to touch.',
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'nelson-tasman',
  region: 'Nelson & Tasman'
},
{
  id: 30,
  name: 'Abel Tasman',
  date: 'Apr 30–May 3',
  coords: [-40.93, 173.01],
  journal: 'Sea kayaked into golden bays, then walked three days along the coast. Turquoise water, empty beaches, birdsong. The gentlest Great Walk — a good way to wind down.',
  countryId: 'nz', level2Id: 'nz-south', level3Id: 'nelson-tasman',
  region: 'Nelson & Tasman'
},
{
  id: 31,
  name: 'Wellington (return)',
  date: 'May 5–10',
  coords: [-41.2865, 174.7762],
  journal: 'Back where I started on the South Island. Rejoined WoRM for a Tuesday run, rode the hills one more time. The city felt familiar now. Started packing.',
  countryId: 'nz', level2Id: 'nz-north', level3Id: 'wellington',
  region: 'Wellington'
}];


export const nzActivities: Activity[] = [
// ── RUNNING ──
{ id: 'r1', type: 'running', date: 'Feb 12', name: 'A warm morning run', distance: 4.2, time: '52:01', location: 'Auckland', coords: [-36.85, 174.76], highlight: false, stopId: 2 },
{ id: 'r2', type: 'running', date: 'Feb 14', name: 'Tarawera Ultra-Trail 🏅', distance: 14.2, time: '2:08:49', location: 'Rotorua', coords: [-38.14, 176.25], highlight: true, desc: 'Second fastest half ever — ran through old-growth forest, sulfur flats and redwoods', stopId: 3 },
{ id: 'r3', type: 'running', date: 'Feb 21', name: 'Park Run', distance: 3.1, time: '24:05', location: 'Rotorua', coords: [-38.14, 176.25], highlight: false, stopId: 9 },
{ id: 'r4', type: 'running', date: 'Feb 24', name: 'What a choice sunset!', distance: 4.5, time: '44:43', location: 'Auckland', coords: [-36.856, 174.828], highlight: false, stopId: 7 },
{ id: 'r5', type: 'running', date: 'Feb 28', name: 'Run up Mount Maunganui', distance: 7.3, time: '1:45:19', location: 'Mt Maunganui', coords: [-37.639, 176.189], highlight: true, desc: 'Summited the volcanic cone at dawn with views stretching to the Pacific', stopId: 11 },
{ id: 'r6', type: 'running', date: 'Mar 2', name: 'A cheers kind of morning', distance: 5.3, time: '1:06:19', location: 'Mt Maunganui', coords: [-37.64, 176.19], highlight: false, stopId: 11 },
{ id: 'r7', type: 'running', date: 'Mar 5', name: 'A run along the lake', distance: 4.7, time: '49:11', location: 'Taupō', coords: [-38.69, 176.07], highlight: false, stopId: 12 },
{ id: 'r8', type: 'running', date: 'Mar 11', name: 'WoRM Wellington Running Meetup', distance: 4.7, time: '1:00:54', location: 'Wellington', coords: [-41.29, 174.78], highlight: true, desc: "Hardest run group I've encountered — ended with a harbor jump", stopId: 15 },
{ id: 'r9', type: 'running', date: 'Mar 13', name: 'WoRM #2 / Moon rise / sun set', distance: 6.0, time: '1:13:21', location: 'Wellington', coords: [-41.29, 174.77], highlight: false, stopId: 15 },
{ id: 'r10', type: 'running', date: 'Mar 14', name: 'Search for missing key card', distance: 3.9, time: '47:31', location: 'Wellington', coords: [-41.29, 174.78], highlight: false, stopId: 15 },
{ id: 'r11', type: 'running', date: 'Apr 3', name: 'Kinisi Run Club', distance: 2.4, time: '22:23', location: 'Queenstown', coords: [-45.03, 168.66], highlight: false, stopId: 21 },
{ id: 'r12', type: 'running', date: 'Apr 13', name: 'Mt Iron track with Kinisi', distance: 5.0, time: '1:07:04', location: 'Wanaka', coords: [-44.69, 169.15], highlight: true, desc: 'Trail run above Wanaka with panoramic lake views', stopId: 22 },
{ id: 'r13', type: 'running', date: 'Apr 21', name: 'Dodging all the falling leaves', distance: 3.1, time: '34:39', location: 'West Coast', coords: [-42.45, 171.21], highlight: false, stopId: 28 },
{ id: 'r14', type: 'running', date: 'May 6', name: 'WoRM Tuesday', distance: 4.0, time: '47:34', location: 'Wellington', coords: [-41.29, 174.78], highlight: false, stopId: 31 },

// ── CYCLING ──
{ id: 'c1', type: 'cycling', date: 'Feb 25', name: 'Whakarewarewa Circuit', distance: 19.5, time: '2:22:04', location: 'Rotorua', coords: [-38.18, 176.27], highlight: true, desc: "Dual-suspension demo through NZ's best mountain bike forest", stopId: 9 },
{ id: 'c2', type: 'cycling', date: 'Feb 26', name: 'Bonus afternoon ride', distance: 9.7, time: '1:43:09', location: 'Rotorua', coords: [-38.16, 176.28], highlight: false, stopId: 9 },
{ id: 'c3', type: 'cycling', date: 'Mar 3', name: 'A little Taupo MTB ride', distance: 18.9, time: '2:52:43', location: 'Taupō', coords: [-38.7, 176.08], highlight: true, desc: 'Trail riding above Lake Taupō with volcano views', stopId: 12 },
{ id: 'c4', type: 'cycling', date: 'Mar 8', name: 'A little old cafe ride', distance: 9.3, time: '1:05:41', location: 'Napier', coords: [-39.49, 176.91], highlight: false, stopId: 14 },
{ id: 'c5', type: 'cycling', date: 'Mar 10', name: 'Get off the road, quick!', distance: 14.6, time: '1:34:31', location: 'Wellington', coords: [-41.3, 174.78], highlight: false, stopId: 15 },
{ id: 'c6', type: 'cycling', date: 'Mar 12', name: 'A little ride up to Mākara Peak', distance: 10.3, time: '1:38:03', location: 'Wellington', coords: [-41.3, 174.72], highlight: true, desc: 'Climbed a swing bridge in 40-knot winds to reach the summit', stopId: 15 },
{ id: 'c7', type: 'cycling', date: 'Mar 15', name: 'Queenstown > Arrowtown > Arthur Point', distance: 37.3, time: '3:16:49', location: 'Queenstown', coords: [-44.97, 168.73], highlight: true, desc: 'Accidentally rode past three Lord of the Rings film sites', stopId: 16 },
{ id: 'c8', type: 'cycling', date: 'Mar 19', name: 'Ride along the Waiau river (the Anduin)', distance: 27.6, time: '3:18:38', location: 'Te Anau', coords: [-45.35, 167.75], highlight: false, stopId: 17 },
{ id: 'c9', type: 'cycling', date: 'Mar 25', name: 'Lovely flowy mountain bike afternoon', distance: 12.4, time: '2:22:03', location: 'Queenstown', coords: [-45.02, 168.7], highlight: false, stopId: 21 },
{ id: 'c10', type: 'cycling', date: 'Mar 31', name: 'Sticky forest mountain bike ride', distance: 22.1, time: '2:44:05', location: 'Wanaka', coords: [-44.72, 169.1], highlight: true, desc: 'Raw singletrack through ancient beech forest', stopId: 22 },
{ id: 'c11', type: 'cycling', date: 'Apr 5', name: 'Epic afternoon at Bike Glendhu', distance: 24.9, time: '3:38:25', location: 'Wanaka', coords: [-44.726, 169.02], highlight: true, desc: 'Every trail had the lake below — light on the water was unforgettable', stopId: 25 },
{ id: 'c12', type: 'cycling', date: 'May 9', name: 'Always take my coffee with a view', distance: 19.6, time: '2:14:35', location: 'Wellington', coords: [-41.3, 174.78], highlight: false, stopId: 31 },

// ── HIKING ──
{ id: 'h1', type: 'hiking', date: 'Feb 13', name: 'Rangitoto Island walk', distance: 5.8, time: '2:15:00', location: 'Auckland', coords: [-36.78, 174.86], highlight: false, stopId: 2 },
{ id: 'h2', type: 'hiking', date: 'Feb 15', name: 'Rotorua lakefront trail', distance: 4.2, time: '1:30:00', location: 'Rotorua', coords: [-38.08, 176.27], highlight: false, stopId: 3 },
{ id: 'h3', type: 'hiking', date: 'Feb 16', name: 'Whangārei Falls loop', distance: 2.5, time: '0:55:00', location: 'Whangārei', coords: [-35.73, 174.32], highlight: false, stopId: 4 },
{ id: 'h4', type: 'hiking', date: 'Feb 17', name: 'Flagstaff Hill walk', distance: 3.0, time: '1:10:00', location: 'Russell', coords: [-35.27, 174.12], highlight: false, stopId: 5 },
{ id: 'h5', type: 'hiking', date: 'Feb 18', name: 'Cape Brett Trek', distance: 10.4, time: '4:37:55', location: 'Cape Brett', coords: [-35.19, 174.33], highlight: true, desc: '10 miles of relentless ups and downs to a remote lighthouse hut', stopId: 6 },
{ id: 'h6', type: 'hiking', date: 'Feb 20', name: 'Cape Brett return + lighthouse', distance: 10.4, time: '4:20:00', location: 'Cape Brett', coords: [-35.18, 174.33], highlight: false, stopId: 6 },
{ id: 'h7', type: 'hiking', date: 'Feb 25', name: 'Hobbiton Shire walk', distance: 1.8, time: '1:30:00', location: 'Hobbiton', coords: [-37.87, 175.68], highlight: false, stopId: 8 },
{ id: 'h8', type: 'hiking', date: 'Feb 27', name: 'Redwoods Treewalk', distance: 3.5, time: '1:45:00', location: 'Rotorua', coords: [-38.16, 176.28], highlight: false, stopId: 9 },
{ id: 'h9', type: 'hiking', date: 'Mar 1', name: 'Mauao Base Track', distance: 2.3, time: '0:50:00', location: 'Mt Maunganui', coords: [-37.63, 176.18], highlight: false, stopId: 10 },
{ id: 'h10', type: 'hiking', date: 'Mar 4', name: 'Huka Falls trail', distance: 4.0, time: '1:25:00', location: 'Taupō', coords: [-38.65, 176.09], highlight: false, stopId: 12 },
{ id: 'h11', type: 'hiking', date: 'Mar 5', name: 'Craters of the Moon', distance: 2.0, time: '0:45:00', location: 'Taupō', coords: [-38.66, 176.06], highlight: false, stopId: 12 },
{ id: 'h12', type: 'hiking', date: 'Mar 7', name: 'Tongariro Crossing 🌋', distance: 12.6, time: '5:22:35', location: 'Tongariro', coords: [-39.13, 175.65], highlight: true, desc: "Emerald lakes, Red Crater, the shadow of Mordor's Mt Doom", stopId: 13 },
{ id: 'h13', type: 'hiking', date: 'Mar 9', name: 'Mt Victoria lookout', distance: 3.2, time: '1:05:00', location: 'Wellington', coords: [-41.3, 174.79], highlight: false, stopId: 15 },
{ id: 'h14', type: 'hiking', date: 'Mar 13', name: 'Red Rocks coastal walk', distance: 5.5, time: '2:10:00', location: 'Wellington', coords: [-41.35, 174.73], highlight: false, stopId: 15 },
{ id: 'h15', type: 'hiking', date: 'Mar 16', name: 'Queenstown Hill walk', distance: 4.8, time: '2:00:00', location: 'Queenstown', coords: [-45.04, 168.67], highlight: false, stopId: 16 },
{ id: 'h16', type: 'hiking', date: 'Mar 17', name: "Bob's Cove track", distance: 3.5, time: '1:20:00', location: 'Queenstown', coords: [-45.0, 168.55], highlight: false, stopId: 16 },
{ id: 'h17', type: 'hiking', date: 'Mar 20', name: 'Milford Track Day 1 — Clinton Hut', distance: 3.1, time: '1:15:00', location: 'Milford Track', coords: [-44.8, 167.92], highlight: false, stopId: 18 },
{ id: 'h18', type: 'hiking', date: 'Mar 21', name: 'Milford Track Day 2 — Mintaro Hut', distance: 10.0, time: '4:30:00', location: 'Milford Track', coords: [-44.72, 167.85], highlight: false, stopId: 18 },
{ id: 'h19', type: 'hiking', date: 'Mar 22', name: 'Milford Track Day 3 — Mackinnon Pass', distance: 9.3, time: '5:00:00', location: 'Milford Track', coords: [-44.65, 167.83], highlight: true, desc: "One of the world's great walks — Jurassic valleys, 580m waterfalls", stopId: 18 },
{ id: 'h20', type: 'hiking', date: 'Mar 23', name: 'Milford Track Day 4 — Sandfly Point', distance: 10.5, time: '4:15:00', location: 'Milford Track', coords: [-44.6, 167.88], highlight: false, stopId: 18 },
{ id: 'h21', type: 'hiking', date: 'Mar 26', name: 'Routeburn Day 1 — Flats Hut', distance: 4.5, time: '2:00:00', location: 'Routeburn', coords: [-44.73, 168.18], highlight: false, stopId: 20 },
{ id: 'h22', type: 'hiking', date: 'Mar 27', name: 'Routeburn Day 2 — Harris Saddle to Lake Mackenzie', distance: 8.5, time: '5:30:00', location: 'Routeburn', coords: [-44.78, 168.15], highlight: true, desc: 'Lake Mackenzie hut, Key Summit, clouds that finally broke', stopId: 20 },
{ id: 'h23', type: 'hiking', date: 'Mar 28', name: 'Routeburn Day 3 — The Divide', distance: 5.6, time: '2:30:00', location: 'Routeburn', coords: [-44.8, 168.22], highlight: false, stopId: 20 },
{ id: 'h24', type: 'hiking', date: 'Mar 29', name: 'Ben Lomond summit', distance: 8.0, time: '4:45:00', location: 'Queenstown', coords: [-45.0, 168.65], highlight: true, desc: 'Panoramic views of the Remarkables and Lake Wakatipu from the summit', stopId: 21 },
{ id: 'h25', type: 'hiking', date: 'Mar 31', name: 'Liverpool Hut Day 1 — approach', distance: 12.1, time: '5:45:00', location: 'Mt Aspiring', coords: [-44.6, 168.72], highlight: false, stopId: 23 },
{ id: 'h26', type: 'hiking', date: 'Apr 1', name: 'Liverpool Hut Day 2 — summit push', distance: 12.1, time: '5:46:00', location: 'Mt Aspiring', coords: [-44.59, 168.72], highlight: true, desc: '500m gain in 1km — a monkey-climb to views of Mt Aspiring', stopId: 23 },
{ id: 'h27', type: 'hiking', date: 'Apr 3', name: 'Rob Roy Glacier track', distance: 6.2, time: '3:15:00', location: 'Wanaka', coords: [-44.52, 168.73], highlight: false, stopId: 22 },
{ id: 'h28', type: 'hiking', date: 'Apr 5', name: "Roy's Peak", distance: 10.5, time: '5:48:00', location: 'Wanaka', coords: [-44.644, 169.078], highlight: true, desc: 'The iconic NZ ridge walk — 1,600m of gain to Lake Wanaka views', stopId: 24 },
{ id: 'h29', type: 'hiking', date: 'Apr 8', name: 'Gillespie Pass Day 1 — Young Hut', distance: 9.0, time: '4:00:00', location: 'Mt Aspiring NP', coords: [-44.4, 169.2], highlight: false, stopId: 26 },
{ id: 'h30', type: 'hiking', date: 'Apr 9', name: 'Gillespie Pass Day 2 — Siberia Hut', distance: 8.8, time: '5:15:00', location: 'Mt Aspiring NP', coords: [-44.35, 169.05], highlight: false, stopId: 26 },
{ id: 'h31', type: 'hiking', date: 'Apr 10', name: 'Gillespie Pass Day 3 — the pass', distance: 9.5, time: '6:30:00', location: 'Mt Aspiring NP', coords: [-44.38, 168.95], highlight: true, desc: 'Remote 4-day circuit through the Wilkin Valley', stopId: 26 },
{ id: 'h32', type: 'hiking', date: 'Apr 11', name: 'Gillespie Pass Day 4 — Kerin Forks exit', distance: 8.3, time: '3:45:00', location: 'Mt Aspiring NP', coords: [-44.42, 169.1], highlight: false, stopId: 26 },
{ id: 'h33', type: 'hiking', date: 'Apr 15', name: 'Mueller Hut', distance: 10.0, time: '6:26:00', location: 'Aoraki/Mt Cook', coords: [-43.73, 170.1], highlight: true, desc: 'Hiked above the clouds to a hut overlooking Aoraki/Mt Cook', stopId: 27 },
{ id: 'h34', type: 'hiking', date: 'Apr 18', name: 'Hooker Valley track', distance: 6.5, time: '2:30:00', location: 'Aoraki/Mt Cook', coords: [-43.72, 170.09], highlight: false, stopId: 27 },
{ id: 'h35', type: 'hiking', date: 'Apr 22', name: 'Pancake Rocks walk', distance: 2.0, time: '0:40:00', location: 'Punakaiki', coords: [-42.11, 171.33], highlight: false, stopId: 28 },
{ id: 'h36', type: 'hiking', date: 'Apr 27', name: 'Lake Angelus Hut Day 1', distance: 8.5, time: '4:30:00', location: 'Nelson Lakes', coords: [-41.82, 172.84], highlight: true, desc: 'Alpine hut above the Nelson Lakes surrounded by peaks', stopId: 29 },
{ id: 'h37', type: 'hiking', date: 'Apr 28', name: 'Lake Angelus Hut Day 2 — descent', distance: 8.4, time: '3:15:00', location: 'Nelson Lakes', coords: [-41.83, 172.85], highlight: false, stopId: 29 },
{ id: 'h38', type: 'hiking', date: 'May 1', name: 'Abel Tasman Day 1 — Anchorage', distance: 7.5, time: '3:00:00', location: 'Abel Tasman', coords: [-40.98, 173.01], highlight: false, stopId: 30 },
{ id: 'h39', type: 'hiking', date: 'May 2', name: 'Abel Tasman Day 2 — Bark Bay', distance: 8.0, time: '3:30:00', location: 'Abel Tasman', coords: [-40.93, 173.03], highlight: true, desc: 'Golden beaches and blue-green bays along the coast', stopId: 30 },
{ id: 'h40', type: 'hiking', date: 'May 3', name: 'Abel Tasman Day 3 — Totaranui', distance: 7.4, time: '3:15:00', location: 'Abel Tasman', coords: [-40.85, 173.0], highlight: false, stopId: 30 },

// ── WATER ──
{ id: 'w1', type: 'water', date: 'Mar 1', name: 'A little surf', distance: 1.4, time: '1:02:00', location: 'Mt Maunganui', coords: [-37.64, 176.2], highlight: false, stopId: 10 },
{ id: 'w2', type: 'water', date: 'Mar 3', name: 'Sunset swim and jumps', distance: 0.2, time: '0:15:07', location: 'Taupō', coords: [-38.69, 176.08], highlight: false, stopId: 12 },
{ id: 'w3', type: 'water', date: 'Apr 23', name: 'Kayak up the Pororari river', distance: 2.9, time: '1:44:00', location: 'West Coast', coords: [-42.1, 171.34], highlight: false, stopId: 28 },
{ id: 'w4', type: 'water', date: 'Apr 30', name: 'Abel Tasman kayak', distance: 9.7, time: '3:09:00', location: 'Abel Tasman', coords: [-40.95, 173.02], highlight: true, desc: 'Sea kayaked into Observation Bay along the Abel Tasman coast', stopId: 30 }];