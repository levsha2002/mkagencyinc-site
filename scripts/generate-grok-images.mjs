// Generates all site images with Grok (xAI) and saves them into public/images
// with the exact filenames the site expects. Run from the repo root:
//
//   Windows:  set XAI_API_KEY=xai-...your key...   (or $env:XAI_API_KEY="..." in PowerShell)
//             node scripts\generate-grok-images.mjs
//
// Then review the images in public/images, and: git add -A && git commit && git push
//
// Cost: ~$0.07 per image with grok-2-image (12 images ≈ $0.85).
// Re-run any time to refresh — it overwrites the files.

import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const KEY = process.env.XAI_API_KEY;
if (!KEY) {
  console.error('ERROR: set the XAI_API_KEY environment variable first (same key as the site chat bot in Vercel).');
  process.exit(1);
}

const COMMON = 'Photorealistic, warm natural light, no text, no logos, no brand marks, horizontal composition.';

const IMAGES = [
  // Rotating homepage hero (daily rotation)
  { file: 'hero-1.jpg', prompt: `Happy multi-generational Hispanic family relaxing on the porch of a modest single-family Florida home, palm trees in background, golden hour sunlight, feeling safe and cared for. ${COMMON}` },
  { file: 'hero-2.jpg', prompt: `Clean modern car driving the Overseas Highway toward the Florida Keys, turquoise water on both sides, bright blue sky with soft clouds, sense of freedom and safety. ${COMMON}` },
  { file: 'hero-3.jpg', prompt: `Florida home at sunset with warm lights glowing in the windows, family silhouettes visible inside, palm trees, coral and gold sky, peaceful protected feeling. ${COMMON}` },
  // Gap analysis section
  { file: 'gap-auto.jpg', prompt: `Minor two-car accident on a sunny Florida street, drivers standing beside cars calmly exchanging information, no injuries, realistic insurance-scenario mood, palm trees in background. ${COMMON}` },
  { file: 'gap-home.jpg', prompt: `Florida condo building exterior with a homeowner standing at their front door, bright daylight, subtle storm clouds approaching in the distance. ${COMMON}` },
  { file: 'gap-commercial.jpg', prompt: `Small family-owned restaurant in South Florida, owner in apron standing proudly at the entrance, warm inviting light. ${COMMON}` },
  { file: 'gap-life.jpg', prompt: `Tender moment of a young father and mother with two children at a kitchen table doing homework, warm evening light, feeling of family security. ${COMMON}` },
  // Insurance category banners
  { file: 'cat-auto.jpg', prompt: `Very wide banner: cars on a Miami highway at golden hour, palm trees, motion and energy. ${COMMON}` },
  { file: 'cat-home.jpg', prompt: `Very wide banner: beautiful Florida residential street with single-family homes and palm trees, morning light. ${COMMON}` },
  { file: 'cat-commercial.jpg', prompt: `Very wide banner: lively small-business street in South Florida — cafe, barbershop, family shops, people walking. ${COMMON}` },
  { file: 'cat-life.jpg', prompt: `Very wide banner: grandparents, parents and kids walking together on a Florida beach at sunset, warm and emotional. ${COMMON}` },
  { file: 'cat-specialty.jpg', prompt: `Very wide banner: a motorcycle, a boat on the water, and a golf cart in a sunny Florida setting. ${COMMON}` },
];

async function generate(prompt) {
  const res = await fetch('https://api.x.ai/v1/images/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` },
    body: JSON.stringify({ model: 'grok-imagine-image-quality', prompt, n: 1, response_format: 'b64_json' }),
  });
  if (!res.ok) throw new Error(`xAI API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const b64 = data?.data?.[0]?.b64_json;
  if (!b64) throw new Error('No image in response: ' + JSON.stringify(data).slice(0, 300));
  return Buffer.from(b64, 'base64');
}

let ok = 0, fail = 0;
for (const { file, prompt } of IMAGES) {
  const dest = path.join('public', 'images', file);
  try {
    process.stdout.write(`Generating ${file} ... `);
    const buf = await generate(prompt);
    await writeFile(dest, buf);
    console.log(`saved (${Math.round(buf.length / 1024)} KB)`);
    ok++;
  } catch (e) {
    console.log('FAILED: ' + e.message);
    fail++;
  }
}
console.log(`\nDone: ${ok} saved, ${fail} failed.`);
if (ok > 0) console.log('Review the images in public\\images, then: git add -A && git commit -m "Grok images" && git push');
