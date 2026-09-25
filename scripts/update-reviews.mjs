#!/usr/bin/env node
// Update the Allstate rating shown on the site (no dependencies).
//
//   node scripts/update-reviews.mjs <rating> <count> [--dry-run]
//   e.g. node scripts/update-reviews.mjs 4.5 627
//
// Rewrites:
//   - data/reviews.json          rating, count, checked = today (America/New_York)
//   - public/auto-quote.html     the data-rating-* spots (value, count, star width, aria-label)
// Then commit + push to main; Vercel rebuilds and every RatingBadge picks it up.
// Take the numbers from https://agents.allstate.com/mikhail-kozlov-florida-city-fl.html
// (the "X.X ... N Total Reviews" summary).
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const JSON_PATH = join(root, 'data', 'reviews.json');
const HTML_PATH = join(root, 'public', 'auto-quote.html');

function die(msg) {
  console.error(`update-reviews: ${msg}`);
  console.error('usage: node scripts/update-reviews.mjs <rating 1.0-5.0> <count> [--dry-run]');
  process.exit(1);
}

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const [ratingArg, countArg] = args.filter((a) => !a.startsWith('--'));
if (ratingArg === undefined || countArg === undefined) die('missing arguments');

const ratingRaw = Number(String(ratingArg).replace(',', '.'));
const count = Number(String(countArg).replace(/[,_\s]/g, ''));
if (!Number.isFinite(ratingRaw) || ratingRaw < 1 || ratingRaw > 5) die(`rating must be between 1.0 and 5.0 (got "${ratingArg}")`);
if (!Number.isInteger(count) || count < 1) die(`count must be a positive integer (got "${countArg}")`);
const rating = Math.round(ratingRaw * 10) / 10;
const ratingText = rating.toFixed(1);
const countText = count.toLocaleString('en-US');
const pct = Math.round((rating / 5) * 1000) / 10; // 4.5 -> 90, 4.3 -> 86
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/New_York' }); // YYYY-MM-DD

// ---- data/reviews.json
const data = JSON.parse(readFileSync(JSON_PATH, 'utf8'));
const prev = { rating: data.rating, count: data.count, checked: data.checked };
if (typeof prev.count === 'number' && count < prev.count * 0.9) {
  console.warn(`warning: count dropped more than 10% (${prev.count} -> ${count}). Double-check the Allstate page.`);
}
data.rating = rating;
data.count = count;
data.checked = today;
const jsonOut = JSON.stringify(data, null, 2) + '\n';

// ---- public/auto-quote.html
let html = readFileSync(HTML_PATH, 'utf8');
function replaceOnce(re, fn, label) {
  let n = 0;
  html = html.replace(re, (...m) => { n++; return fn(...m); });
  if (n !== 1) die(`expected exactly 1 "${label}" spot in public/auto-quote.html, found ${n}`);
}
replaceOnce(/(<[^>]*\bdata-rating-value\b[^>]*>)[^<]*(<)/g, (_, open, close) => `${open}${ratingText}${close}`, 'data-rating-value');
replaceOnce(/(<[^>]*\bdata-rating-count\b[^>]*>)[^<]*(<)/g, (_, open, close) => `${open}${countText}${close}`, 'data-rating-count');
replaceOnce(/(<[^>]*\bdata-rating-width\b[^>]*style=")width:[\d.]+%(")/g, (_, a, b) => `${a}width:${pct}%${b}`, 'data-rating-width');
replaceOnce(
  /(<[^>]*\bdata-rating-aria\b[^>]*aria-label=")[^"]*(")/g,
  (_, a, b) => `${a}Rated ${ratingText} out of 5 from ${countText} ${count === 1 ? 'review' : 'reviews'} on Allstate.com (opens in a new tab)${b}`,
  'data-rating-aria'
);
if (count === 1) html = html.replace(/(<span data-rating-count>1<\/span>) reviews on/, '$1 review on');

console.log(`rating ${prev.rating} -> ${rating}, count ${prev.count} -> ${count}, checked ${prev.checked} -> ${today}`);
if (dryRun) {
  console.log('(dry run: no files written)');
} else {
  writeFileSync(JSON_PATH, jsonOut);
  writeFileSync(HTML_PATH, html);
  console.log('updated data/reviews.json and public/auto-quote.html');
  console.log('next: git add data/reviews.json public/auto-quote.html && git commit -m "Update Allstate rating" && git push origin main');
}
