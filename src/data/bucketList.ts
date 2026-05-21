export type BucketListCategory =
'multi-day-hike' |
'day-hike' |
'ride' |
'swimming';

export interface BucketListItem {
  id: string;
  name: string;
  location: string;
  category: BucketListCategory;
  desc: string;
  coords: [number, number]; // [lat, lon]
}

export const bucketListItems: BucketListItem[] = [
// MULTI-DAY HIKES
{
  id: 'bl-torres',
  name: 'Torres del Paine O Circuit',
  location: 'Patagonia',
  category: 'multi-day-hike',
  desc: 'The W is well-known; the full O adds the backside where almost no one goes. Relentlessly photogenic, genuinely remote.',
  coords: [-50.94, -73.1]
},
{
  id: 'bl-tmb',
  name: 'Tour du Mont Blanc',
  location: 'France / Italy / Switzerland',
  category: 'multi-day-hike',
  desc: '11 days circling the Mont Blanc massif. One of the classic hut-to-hut routes in the world, and the village stops make it a cultural trip as much as an athletic one.',
  coords: [45.83, 6.86]
},
{
  id: 'bl-haute',
  name: 'Haute Route',
  location: 'Chamonix → Zermatt',
  category: 'multi-day-hike',
  desc: '12 days, hut-to-hut, crossing the spine of the Alps. Different animal than a typical Alps day trip.',
  coords: [45.98, 7.36]
},
{
  id: 'bl-kungsleden',
  name: 'Kungsleden',
  location: 'Sweden',
  category: 'multi-day-hike',
  desc: 'Arctic light, almost no one on trail, reindeer. Would film beautifully.',
  coords: [67.9, 18.52]
},
{
  id: 'bl-drakensberg',
  name: 'Drakensberg Grand Traverse',
  location: 'South Africa',
  category: 'multi-day-hike',
  desc: 'Underrated and serious. 11 days along a dramatic escarpment that most Western runners have never heard of.',
  coords: [-29.37, 29.45]
},
{
  id: 'bl-lost-coast',
  name: 'Lost Coast Trail',
  location: 'California',
  category: 'multi-day-hike',
  desc: "3–4 days of coastal backpacking on a stretch of California that's too rugged for roads. Tide timing is part of the navigation. Film would be exceptional here — black sand, sea stacks, total solitude.",
  coords: [40.05, -124.08]
},

// DAY HIKES
{
  id: 'bl-fimm',
  name: 'Fimmvörðuháls',
  location: 'Iceland',
  category: 'day-hike',
  desc: 'Connects Skógafoss to Þórsmörk across two glaciers and lava fields from the 2010 eruption. Weird, otherworldly terrain.',
  coords: [63.56, -19.43]
},
{
  id: 'bl-big-sur',
  name: 'Big Sur coast trail system',
  location: 'California',
  category: 'day-hike',
  desc: "Not one hike but a region: Cone Peak, the Ventana Wilderness, and the ridge trails above the coast give you views that the highway doesn't. Close enough to SF to be a long weekend.",
  coords: [36.24, -121.8]
},
{
  id: 'bl-snowman',
  name: 'Snowman Trek entry points',
  location: 'Bhutan',
  category: 'day-hike',
  desc: 'Even a day hike here puts you in a cultural and landscape context unlike anywhere else.',
  coords: [27.47, 89.64]
},

// RIDES
{
  id: 'bl-ca-coast',
  name: 'California Coast',
  location: 'SF → LA',
  category: 'ride',
  desc: 'About 600 miles on PCH and 1. Doing it properly means a week-plus, camping or small motels, and riding through Big Sur, Morro Bay, and Santa Barbara. You essentially already live at the start line.',
  coords: [35.37, -120.85]
},
{
  id: 'bl-strade',
  name: 'Strade Bianche route',
  location: 'Tuscany',
  category: 'ride',
  desc: 'The gravel roads the pro race uses through cypress-lined hills. Stunning to shoot.',
  coords: [43.32, 11.33]
},
{
  id: 'bl-raid',
  name: 'Raid Pyrenéen',
  location: 'Pyrenees',
  category: 'ride',
  desc: '780km, 10 cols. A proper suffer-fest with a finisher medal and a culture around it.',
  coords: [42.73, 0.32]
},
{
  id: 'bl-mauna-kea',
  name: 'Mauna Kea descent',
  location: "Hawai'i",
  category: 'ride',
  desc: 'Ride from near the summit (4,200m) to sea level. Surreal elevation change in one shot.',
  coords: [19.82, -155.47]
},

// SWIMMING
{
  id: 'bl-silfra',
  name: 'Silfra fissure',
  location: 'Iceland',
  category: 'swimming',
  desc: 'Snorkel or dive between the North American and Eurasian tectonic plates. Visibility is effectively infinite.',
  coords: [64.26, -21.12]
},
{
  id: 'bl-bio-bay',
  name: 'Bioluminescent bay',
  location: 'Vieques, Puerto Rico',
  category: 'swimming',
  desc: 'Kayak out and swim in water that glows when you move. Hard to capture on film but worth trying.',
  coords: [18.09, -65.47]
},
{
  id: 'bl-cenotes',
  name: 'Cenotes',
  location: 'Yucatán',
  category: 'swimming',
  desc: 'Underground cave systems like Dos Ojos or Sac Actun. Ethereal light, very filmable.',
  coords: [20.33, -87.38]
}];