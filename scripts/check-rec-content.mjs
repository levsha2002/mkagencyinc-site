// Checks the rec landing pages and the rec blog posts against the owner's content rules.
// Run: node scripts/check-rec-content.mjs   (exit 1 on any hit)
import fs from 'fs';
import path from 'path';
import os from 'os';
import ts from 'typescript';

const ROOT = process.cwd();
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'reccheck-'));
const idx = fs.readFileSync(path.join(ROOT, 'content/pages/rec/index.ts'), 'utf8');
const m = idx.match(/export const REC_FORBIDDEN = (\/.*\/i);/);
const RE = new Function(`return ${m[1]}`)();
const tp = (src) => ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText
  .replace(/from '\.\/sources'/g, "from './sources.mjs'").replace(/from '\.\.\/\.\.\/pages\/rec\/sources'/g, "from './sources.mjs'");
const REC = path.join(ROOT, 'content/pages/rec');
for (const f of ['sources', 'motorcycle', 'jet-ski', 'boat', 'off-road', 'golf-cart', 'autocycle', 'life'])
  fs.writeFileSync(path.join(TMP, `${f}.mjs`), tp(fs.readFileSync(path.join(REC, `${f}.ts`), 'utf8')));
const POSTS = ['florida-motorcycle-helmet-law-medical-coverage', 'jet-ski-rental-guest-drivers-florida', 'hurricane-plan-for-your-boat-florida', 'atv-utv-public-roads-florida', 'golf-cart-rules-florida-public-roads', 'autocycle-motorcycle-endorsement-florida', 'life-insurance-income-replacement-florida'];
for (const p of POSTS) {
  const f = path.join(ROOT, 'content/blog/posts', `${p}.ts`);
  if (fs.existsSync(f)) fs.writeFileSync(path.join(TMP, `post-${p}.mjs`), tp(fs.readFileSync(f, 'utf8')));
}
let bad = 0;
const scan = (label, obj) => {
  const text = JSON.stringify(obj);
  const g = new RegExp(RE.source, 'gi');
  let x;
  while ((x = g.exec(text))) { bad++; console.log(`HIT ${label}: "${x[0]}" …${text.slice(Math.max(0, x.index - 50), x.index + 30)}…`); }
};
for (const f of fs.readdirSync(TMP)) {
  if (f === 'sources.mjs') continue;
  const mod = await import(path.join(TMP, f));
  for (const v of Object.values(mod)) {
    if (v?.copy) for (const l of ['en', 'es', 'ru']) { const c = { ...v.copy[l], sources: undefined }; scan(`${v.path} ${l}`, c); }
    if (v?.translations) for (const [l, t] of Object.entries(v.translations)) {
      scan(`blog/${v.slug} ${l}`, { ...t, sources: undefined });
      if (t.description.length < 110 || t.description.length > 165) { bad++; console.log(`DESC ${v.slug} ${l} length ${t.description.length}`); }
      if ((t.metaTitle ?? t.title).length > 65) { bad++; console.log(`TITLE ${v.slug} ${l} length ${(t.metaTitle ?? t.title).length}`); }
    }
  }
}
fs.rmSync(TMP, { recursive: true, force: true });
console.log(bad ? `${bad} problem(s)` : 'rec content OK');
process.exit(bad ? 1 : 0);
