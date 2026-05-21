#!/usr/bin/env node
/**
 * overland-screenshots.js
 * Captures all ~230 states of the Overland app as organized PNG screenshots.
 *
 * Setup (run once in your project folder):
 *   npm install playwright
 *   npx playwright install chromium
 *
 * Usage:
 *   node overland-screenshots.js [base-url]
 *   node overland-screenshots.js http://localhost:5173
 *
 * Output: ./overland-screenshots/ with 5 subfolders by flow
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = process.argv[2] || 'http://localhost:5173';
const OUT = path.join(process.cwd(), 'overland-screenshots');
const VIEWPORT = { width: 1440, height: 900 };
const MAP_SETTLE_MS = 1500; // extra wait for map tiles to render

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function pad(n) { return String(n).padStart(3, '0'); }

// ── DATA ─────────────────────────────────────────────────────────────────────

const STOPS = [
  // North America
  { id: 300, name: 'San Francisco',                           countryId: 'us', level3Id: 'sf-bay-area' },
  { id: 301, name: 'Crater Lake, Oregon',                     countryId: 'us', level3Id: 'oregon' },
  { id: 302, name: 'The Enchantments — Washington',           countryId: 'us', level3Id: 'washington-cascades' },
  { id: 303, name: 'Emigrant Wilderness, Sierra Nevada',      countryId: 'us', level3Id: 'sierra-nevada' },
  { id: 304, name: 'Hoka UTMB Kodiak — Big Bear Lake',       countryId: 'us', level3Id: 'big-bear' },
  { id: 305, name: 'Sequoia National Park',                   countryId: 'us', level3Id: 'sequoia-kings' },
  { id: 306, name: 'Yosemite National Park',                  countryId: 'us', level3Id: 'yosemite' },
  // New Zealand
  { id: 1,   name: 'San Francisco, CA',                       countryId: 'nz', level3Id: 'auckland-northland' },
  { id: 2,   name: 'Auckland',                                countryId: 'nz', level3Id: 'auckland-northland' },
  { id: 3,   name: 'Rotorua',                                 countryId: 'nz', level3Id: 'waikato-bop' },
  { id: 4,   name: 'Whangārei',                               countryId: 'nz', level3Id: 'auckland-northland' },
  { id: 5,   name: 'Russell, Bay of Islands',                 countryId: 'nz', level3Id: 'auckland-northland' },
  { id: 6,   name: 'Cape Brett',                              countryId: 'nz', level3Id: 'auckland-northland' },
  { id: 7,   name: 'Auckland — Mission Bay',                  countryId: 'nz', level3Id: 'auckland-northland' },
  { id: 8,   name: 'Hobbiton',                                countryId: 'nz', level3Id: 'waikato-bop' },
  { id: 9,   name: 'Rotorua — Redwoods',                      countryId: 'nz', level3Id: 'waikato-bop' },
  { id: 10,  name: 'Tauranga',                                countryId: 'nz', level3Id: 'waikato-bop' },
  { id: 11,  name: 'Mount Maunganui',                         countryId: 'nz', level3Id: 'waikato-bop' },
  { id: 12,  name: 'Taupō',                                   countryId: 'nz', level3Id: 'central-north' },
  { id: 13,  name: "Tongariro Nat'l Park",                    countryId: 'nz', level3Id: 'central-north' },
  { id: 14,  name: 'Napier',                                  countryId: 'nz', level3Id: 'central-north' },
  { id: 15,  name: 'Wellington',                              countryId: 'nz', level3Id: 'wellington' },
  { id: 16,  name: 'Queenstown',                              countryId: 'nz', level3Id: 'queenstown-fiordland' },
  { id: 17,  name: 'Te Anau',                                 countryId: 'nz', level3Id: 'queenstown-fiordland' },
  { id: 18,  name: 'Milford Track',                           countryId: 'nz', level3Id: 'queenstown-fiordland' },
  { id: 19,  name: 'Te Anau — Post-Milford',                  countryId: 'nz', level3Id: 'queenstown-fiordland' },
  { id: 20,  name: 'Routeburn Track',                         countryId: 'nz', level3Id: 'queenstown-fiordland' },
  { id: 21,  name: 'Queenstown — Ben Lomond',                 countryId: 'nz', level3Id: 'queenstown-fiordland' },
  { id: 22,  name: 'Wanaka',                                  countryId: 'nz', level3Id: 'wanaka-aspiring' },
  { id: 23,  name: 'Liverpool Hut, Mt Aspiring',              countryId: 'nz', level3Id: 'wanaka-aspiring' },
  { id: 24,  name: "Roy's Peak",                              countryId: 'nz', level3Id: 'wanaka-aspiring' },
  { id: 25,  name: 'Glendhu Bay Bike Park',                   countryId: 'nz', level3Id: 'wanaka-aspiring' },
  { id: 26,  name: 'Gillespie Pass Circuit',                  countryId: 'nz', level3Id: 'wanaka-aspiring' },
  { id: 27,  name: 'Aoraki / Mt Cook',                        countryId: 'nz', level3Id: 'canterbury-mtcook' },
  { id: 28,  name: 'Punakaiki & West Coast',                  countryId: 'nz', level3Id: 'west-coast' },
  { id: 29,  name: 'Nelson Lakes',                            countryId: 'nz', level3Id: 'nelson-tasman' },
  { id: 30,  name: 'Abel Tasman',                             countryId: 'nz', level3Id: 'nelson-tasman' },
  { id: 31,  name: 'Wellington (return)',                     countryId: 'nz', level3Id: 'wellington' },
  // Europe Summer
  { id: 100, name: 'Paris',                                   countryId: 'fr', level3Id: 'paris' },
  { id: 101, name: 'Burgundy — Semur-en-Auxois',              countryId: 'fr', level3Id: 'burgundy' },
  { id: 102, name: 'Dijon — Tour de France',                  countryId: 'fr', level3Id: 'burgundy' },
  { id: 103, name: 'Colmar → Strasbourg',                     countryId: 'fr', level3Id: 'alsace' },
  { id: 104, name: 'Basel',                                   countryId: 'ch', level3Id: 'ch-basel' },
  { id: 105, name: 'Freiburg',                                countryId: 'de', level3Id: 'black-forest' },
  { id: 106, name: 'Wiesbaden',                               countryId: 'de', level3Id: 'rhine-valley' },
  { id: 107, name: 'Bernese Oberland — Thun & Lauterbrunnen', countryId: 'ch', level3Id: 'bernese-oberland' },
  { id: 108, name: 'Zurich',                                  countryId: 'ch', level3Id: 'zurich-region' },
  { id: 109, name: 'Andermatt / Oberalp Pass',                countryId: 'ch', level3Id: 'central-switzerland' },
  { id: 110, name: 'Ticino — Lugano & Bissone',               countryId: 'ch', level3Id: 'ticino' },
  { id: 111, name: 'Andermatt — Big Day',                     countryId: 'ch', level3Id: 'central-switzerland' },
  { id: 112, name: 'Lausanne / Lake Geneva',                  countryId: 'ch', level3Id: 'lake-geneva' },
  { id: 113, name: 'Paris (return)',                          countryId: 'fr', level3Id: 'paris' },
  // Europe Fall
  { id: 200, name: 'Val Gardena — Dolomites',                 countryId: 'it', level3Id: 'dolomites' },
  { id: 201, name: 'Milan',                                   countryId: 'it', level3Id: 'milan' },
  { id: 202, name: 'Amalfi Coast',                            countryId: 'it', level3Id: 'amalfi-coast' },
  { id: 203, name: 'Paris',                                   countryId: 'fr', level3Id: 'paris' },
];

const stopById = {};
STOPS.forEach(s => { stopById[s.id] = s; });

const ACTIVITIES = [
  // North America
  { id: 'na-r1', stopId: 300 }, { id: 'na-c1', stopId: 300 }, { id: 'na-r2', stopId: 300 },
  { id: 'na-r3', stopId: 300 }, { id: 'na-c2', stopId: 300 }, { id: 'na-r4', stopId: 300 },
  { id: 'na-r5', stopId: 300 }, { id: 'na-c3', stopId: 300 }, { id: 'na-c4', stopId: 300 },
  { id: 'na-r6', stopId: 300 }, { id: 'na-r7', stopId: 300 },
  { id: 'na-h1', stopId: 301 },
  { id: 'na-h2', stopId: 302 }, { id: 'na-h3', stopId: 302 }, { id: 'na-h4', stopId: 302 }, { id: 'na-h5', stopId: 302 },
  { id: 'na-h6', stopId: 303 }, { id: 'na-w1', stopId: 303 }, { id: 'na-h7', stopId: 303 }, { id: 'na-h8', stopId: 303 },
  { id: 'na-r8', stopId: 304 }, { id: 'na-r9', stopId: 304 },
  { id: 'na-h9', stopId: 305 }, { id: 'na-h10', stopId: 305 },
  { id: 'na-h11', stopId: 306 }, { id: 'na-h12', stopId: 306 }, { id: 'na-h13', stopId: 306 },
  // NZ Running
  { id: 'r1', stopId: 2 },  { id: 'r2', stopId: 3 },  { id: 'r3', stopId: 9 },  { id: 'r4', stopId: 7 },
  { id: 'r5', stopId: 11 }, { id: 'r6', stopId: 11 }, { id: 'r7', stopId: 12 }, { id: 'r8', stopId: 15 },
  { id: 'r9', stopId: 15 }, { id: 'r10', stopId: 15 }, { id: 'r11', stopId: 21 }, { id: 'r12', stopId: 22 },
  { id: 'r13', stopId: 28 }, { id: 'r14', stopId: 31 },
  // NZ Cycling
  { id: 'c1', stopId: 9 },  { id: 'c2', stopId: 9 },  { id: 'c3', stopId: 12 }, { id: 'c4', stopId: 14 },
  { id: 'c5', stopId: 15 }, { id: 'c6', stopId: 15 }, { id: 'c7', stopId: 16 }, { id: 'c8', stopId: 17 },
  { id: 'c9', stopId: 21 }, { id: 'c10', stopId: 22 }, { id: 'c11', stopId: 25 }, { id: 'c12', stopId: 31 },
  // NZ Hiking
  { id: 'h1', stopId: 2 },  { id: 'h2', stopId: 3 },  { id: 'h3', stopId: 4 },  { id: 'h4', stopId: 5 },
  { id: 'h5', stopId: 6 },  { id: 'h6', stopId: 6 },  { id: 'h7', stopId: 8 },  { id: 'h8', stopId: 9 },
  { id: 'h9', stopId: 10 }, { id: 'h10', stopId: 12 }, { id: 'h11', stopId: 12 }, { id: 'h12', stopId: 13 },
  { id: 'h13', stopId: 15 }, { id: 'h14', stopId: 15 }, { id: 'h15', stopId: 16 }, { id: 'h16', stopId: 16 },
  { id: 'h17', stopId: 18 }, { id: 'h18', stopId: 18 }, { id: 'h19', stopId: 18 }, { id: 'h20', stopId: 18 },
  { id: 'h21', stopId: 20 }, { id: 'h22', stopId: 20 }, { id: 'h23', stopId: 20 }, { id: 'h24', stopId: 21 },
  { id: 'h25', stopId: 23 }, { id: 'h26', stopId: 23 }, { id: 'h27', stopId: 22 }, { id: 'h28', stopId: 24 },
  { id: 'h29', stopId: 26 }, { id: 'h30', stopId: 26 }, { id: 'h31', stopId: 26 }, { id: 'h32', stopId: 26 },
  { id: 'h33', stopId: 27 }, { id: 'h34', stopId: 27 }, { id: 'h35', stopId: 28 }, { id: 'h36', stopId: 29 },
  { id: 'h37', stopId: 29 }, { id: 'h38', stopId: 30 }, { id: 'h39', stopId: 30 }, { id: 'h40', stopId: 30 },
  // NZ Water
  { id: 'w1', stopId: 10 }, { id: 'w2', stopId: 12 }, { id: 'w3', stopId: 28 }, { id: 'w4', stopId: 30 },
  // Europe Summer
  { id: 'es-c1', stopId: 100 }, { id: 'es-c2', stopId: 100 }, { id: 'es-c3', stopId: 100 }, { id: 'es-c4', stopId: 100 },
  { id: 'es-r1', stopId: 113 },
  { id: 'es-c5', stopId: 101 }, { id: 'es-c6', stopId: 101 },
  { id: 'es-c7', stopId: 102 }, { id: 'es-c8', stopId: 102 }, { id: 'es-c9', stopId: 102 },
  { id: 'es-c10', stopId: 102 }, { id: 'es-c11', stopId: 102 },
  { id: 'es-c12', stopId: 103 },
  { id: 'es-c13', stopId: 104 }, { id: 'es-c14', stopId: 104 },
  { id: 'es-c15', stopId: 105 }, { id: 'es-c16', stopId: 105 },
  { id: 'es-c17', stopId: 106 },
  { id: 'es-c18', stopId: 107 }, { id: 'es-c19', stopId: 107 }, { id: 'es-h1', stopId: 107 },
  { id: 'es-h2', stopId: 107 }, { id: 'es-c20', stopId: 107 },
  { id: 'es-c21', stopId: 108 }, { id: 'es-c22', stopId: 108 },
  { id: 'es-c23', stopId: 109 }, { id: 'es-c24', stopId: 109 },
  { id: 'es-c25', stopId: 110 }, { id: 'es-c26', stopId: 110 },
  { id: 'es-c27', stopId: 111 },
  { id: 'es-c28', stopId: 112 },
  // Europe Fall
  { id: 'ef-h1', stopId: 200 }, { id: 'ef-h2', stopId: 200 }, { id: 'ef-c1', stopId: 200 },
  { id: 'ef-r1', stopId: 201 },
  { id: 'ef-h3', stopId: 202 }, { id: 'ef-h4', stopId: 202 }, { id: 'ef-h5', stopId: 202 },
  { id: 'ef-r2', stopId: 203 }, { id: 'ef-r3', stopId: 203 }, { id: 'ef-r4', stopId: 203 },
  { id: 'ef-c2', stopId: 203 }, { id: 'ef-r5', stopId: 203 }, { id: 'ef-b1', stopId: 203 },
];

// ── BUILD SCREEN LIST ─────────────────────────────────────────────────────────

const screens = [];
let counter = 0;

function addScreen(flow, label, url) {
  screens.push({ flow, name: `${pad(++counter)}-${label}`, url });
}

// 1. Page-level views
addScreen('01-pages', 'home',                '/');
addScreen('01-pages', 'trips-overview',      '/trips');
addScreen('01-pages', 'activities-dashboard', '/activities');
addScreen('01-pages', 'bucket-list',         '/bucket-list');
addScreen('01-pages', 'light-theme',         '/preview');

// 2. Country-level
[
  { id: 'us', label: 'united-states' },
  { id: 'nz', label: 'new-zealand' },
  { id: 'fr', label: 'france' },
  { id: 'de', label: 'germany' },
  { id: 'ch', label: 'switzerland' },
  { id: 'it', label: 'italy' },
].forEach(c => addScreen('02-countries', c.label, `/trips/${c.id}`));

// 3. Region-level (level3 IDs that have actual stop data)
[
  { country: 'us', id: 'sf-bay-area',          label: 'us-sf-bay-area' },
  { country: 'us', id: 'sierra-nevada',        label: 'us-sierra-nevada' },
  { country: 'us', id: 'sequoia-kings',        label: 'us-sequoia-kings' },
  { country: 'us', id: 'yosemite',             label: 'us-yosemite' },
  { country: 'us', id: 'big-bear',             label: 'us-big-bear' },
  { country: 'us', id: 'oregon',               label: 'us-oregon' },
  { country: 'us', id: 'washington-cascades',  label: 'us-washington-cascades' },
  { country: 'nz', id: 'auckland-northland',   label: 'nz-auckland-northland' },
  { country: 'nz', id: 'waikato-bop',          label: 'nz-waikato-bop' },
  { country: 'nz', id: 'central-north',        label: 'nz-central-north' },
  { country: 'nz', id: 'wellington',           label: 'nz-wellington' },
  { country: 'nz', id: 'queenstown-fiordland', label: 'nz-queenstown-fiordland' },
  { country: 'nz', id: 'wanaka-aspiring',      label: 'nz-wanaka-aspiring' },
  { country: 'nz', id: 'canterbury-mtcook',    label: 'nz-canterbury-mtcook' },
  { country: 'nz', id: 'west-coast',           label: 'nz-west-coast' },
  { country: 'nz', id: 'nelson-tasman',        label: 'nz-nelson-tasman' },
  { country: 'fr', id: 'paris',                label: 'fr-paris' },
  { country: 'fr', id: 'burgundy',             label: 'fr-burgundy' },
  { country: 'fr', id: 'alsace',               label: 'fr-alsace' },
  { country: 'de', id: 'black-forest',         label: 'de-black-forest' },
  { country: 'de', id: 'rhine-valley',         label: 'de-rhine-valley' },
  { country: 'ch', id: 'ch-basel',             label: 'ch-basel' },
  { country: 'ch', id: 'bernese-oberland',     label: 'ch-bernese-oberland' },
  { country: 'ch', id: 'zurich-region',        label: 'ch-zurich' },
  { country: 'ch', id: 'central-switzerland',  label: 'ch-central-switzerland' },
  { country: 'ch', id: 'ticino',               label: 'ch-ticino' },
  { country: 'ch', id: 'lake-geneva',          label: 'ch-lake-geneva' },
  { country: 'it', id: 'dolomites',            label: 'it-dolomites' },
  { country: 'it', id: 'milan',                label: 'it-milan' },
  { country: 'it', id: 'amalfi-coast',         label: 'it-amalfi-coast' },
].forEach(r => addScreen('03-regions', r.label, `/trips/${r.country}/${r.id}`));

// 4. Stop-level (deduplicated by URL)
const seenStopUrls = new Set();
STOPS.forEach(stop => {
  const slug = slugify(stop.name);
  const url = `/trips/${stop.countryId}/${stop.level3Id}/${slug}`;
  if (seenStopUrls.has(url)) return;
  seenStopUrls.add(url);
  const label = `${stop.countryId}-${slug}`.slice(0, 48);
  addScreen('04-stops', label, url);
});

// 5. Activity-level
ACTIVITIES.forEach(act => {
  const stop = stopById[act.stopId];
  if (!stop) return;
  const stopSlug = slugify(stop.name);
  const url = `/trips/${stop.countryId}/${stop.level3Id}/${stopSlug}/${act.id}`;
  addScreen('05-activities', `${stop.countryId}-${act.id}`, url);
});

// ── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  const flows = [...new Set(screens.map(s => s.flow))];
  flows.forEach(f => fs.mkdirSync(path.join(OUT, f), { recursive: true }));

  console.log('\n📸  Overland Screenshot Capture');
  console.log(`    ${screens.length} screens -> ${OUT}`);
  console.log(`    Base URL: ${BASE_URL}\n`);

  const browser = await launchBrowserWithFallbacks();
  const context = await browser.newContext({ viewport: VIEWPORT });
  const page = await context.newPage();

  // Suppress console noise from the app
  page.on('console', () => {});
  page.on('pageerror', () => {});

  let done = 0;
  let failed = 0;
  const failures = [];

  for (const screen of screens) {
    try {
      await page.goto(BASE_URL + screen.url, {
        waitUntil: 'domcontentloaded',
        timeout: 20000,
      });
      // Let the map/UI settle (tiles, animations, data loading)
      await page.waitForTimeout(MAP_SETTLE_MS);

      const outPath = path.join(OUT, screen.flow, `${screen.name}.png`);
      await page.screenshot({ path: outPath });
      done++;

      const pct = Math.round((done + failed) / screens.length * 100);
      if ((done + failed) % 20 === 0) {
        console.log(`  ${pct}%  (${done + failed}/${screens.length}) captured...`);
      }
    } catch (err) {
      failed++;
      failures.push({ name: screen.name, url: screen.url, error: err.message });
      if (failures.length <= 10) {
        console.warn(`  ⚠  Failed: ${screen.name} — ${err.message.split('\n')[0]}`);
      }
    }
  }

  await browser.close();

  // Write manifest
  const manifest = {
    capturedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    total: screens.length,
    captured: done,
    failed,
    flows,
    screens: screens.map(s => ({ ...s, captured: !failures.find(f => f.name === s.name) })),
    failures,
  };
  fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));

  console.log('\n✅  Done.');
  console.log(`    ${done} captured, ${failed} failed`);
  console.log('    Manifest written to overland-screenshots/manifest.json');
  if (failed > 0) {
    console.log('\n    Failed screens (check manifest.json for full list):');
    failures.slice(0, 5).forEach(f => console.log(`    • ${f.name} (${f.url})`));
  }
  console.log('\n    Next: run the Figma plugin to import these into Figma.\n');
}

async function launchBrowserWithFallbacks() {
  const attempts = [
    { label: 'chromium headless', options: { headless: true } },
    { label: 'chromium headed', options: { headless: false } },
    { label: 'chrome channel headless', options: { channel: 'chrome', headless: true } },
  ];

  let lastError;
  for (const attempt of attempts) {
    try {
      console.log(`    Launch attempt: ${attempt.label}`);
      const browser = await launchWithTimeout(attempt.options, 30000);
      console.log(`    Launch success: ${attempt.label}\n`);
      return browser;
    } catch (err) {
      lastError = err;
      const firstLine = err?.message?.split('\n')?.[0] || String(err);
      console.warn(`    Launch failed: ${attempt.label} — ${firstLine}`);
    }
  }

  throw new Error(
    `Unable to launch a Playwright browser after ${attempts.length} attempts. Last error: ${
      lastError?.message || lastError
    }`
  );
}

async function launchWithTimeout(options, timeoutMs) {
  return await Promise.race([
    chromium.launch(options),
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error(`launch timeout after ${timeoutMs}ms`)), timeoutMs);
    }),
  ]);
}

main().catch(err => {
  console.error('\n❌  Fatal error:', err.message);
  process.exit(1);
});
