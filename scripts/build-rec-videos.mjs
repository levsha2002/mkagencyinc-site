// 9:16 vertical shorts (1080x1920, ~19 s) for social and ads, one per line and language.
// Run: node scripts/build-rec-videos.mjs  -> media/<line>-<lang>.mp4 (+ media/previews/*.png)
// Facts and coverage names come straight from content/pages/rec/*.ts (the verified page copy).
import fs from 'fs';
import path from 'path';
import os from 'os';
import { execFileSync } from 'child_process';
import sharp from 'sharp';
import ts from 'typescript';
import { C, sceneInner } from './rec/art.mjs';

const ROOT = process.cwd();
const MEDIA = path.join(ROOT, 'media');
const PREV = path.join(MEDIA, 'previews');
fs.mkdirSync(PREV, { recursive: true });
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'recvid-'));

// Transpile the content modules (type imports are dropped) so this script reads the same copy.
const REC = path.join(ROOT, 'content/pages/rec');
for (const f of ['sources', 'motorcycle', 'jet-ski', 'boat', 'off-road', 'golf-cart', 'autocycle', 'life']) {
  const src = fs.readFileSync(path.join(REC, `${f}.ts`), 'utf8');
  let js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
  js = js.replace(/from '\.\/sources'/g, "from './sources.mjs'");
  fs.writeFileSync(path.join(TMP, `${f}.mjs`), js);
}
const { SRC } = await import(path.join(TMP, 'sources.mjs'));
const pages = {
  motorcycle: (await import(path.join(TMP, 'motorcycle.mjs'))).MOTORCYCLE,
  'jet-ski': (await import(path.join(TMP, 'jet-ski.mjs'))).JET_SKI,
  boat: (await import(path.join(TMP, 'boat.mjs'))).BOAT,
  'off-road': (await import(path.join(TMP, 'off-road.mjs'))).OFF_ROAD,
  'golf-cart': (await import(path.join(TMP, 'golf-cart.mjs'))).GOLF_CART,
  autocycle: (await import(path.join(TMP, 'autocycle.mjs'))).AUTOCYCLE,
  life: (await import(path.join(TMP, 'life.mjs'))).LIFE,
};
const srcLabel = (url, L) => {
  const s = Object.values(SRC).find((x) => x.url === url);
  return s ? s.label[L].split(':')[0] : '';
};

const HOOK = {
  motorcycle: { en: 'Ride a motorcycle in Florida? Your car’s PIP won’t cover you on the bike.', es: '¿Anda en moto en Florida? El PIP de su carro no lo cubre en la moto.', ru: 'Ездите на мотоцикле во Флориде? PIP от машины на мотоцикле вас не покрывает.' },
  'jet-ski': { en: 'Letting friends ride your jet ski this weekend?', es: '¿Les va a prestar su jet ski a los amigos este fin de semana?', ru: 'Даёте друзьям покататься на гидроцикле в выходные?' },
  boat: { en: 'Hurricane season runs June 1 to November 30. Is your boat ready?', es: 'La temporada de huracanes va del 1 de junio al 30 de noviembre. ¿Su bote está listo?', ru: 'Сезон ураганов — с 1 июня по 30 ноября. Ваша лодка готова?' },
  'off-road': { en: 'ATV, UTV or dirt bike in the family? Know Florida’s rules before the next ride.', es: '¿Hay un ATV, UTV o moto de tierra en la familia? Conozca las reglas de Florida.', ru: 'В семье есть квадроцикл, UTV или эндуро? Узнайте правила Флориды.' },
  'golf-cart': { en: 'Taking the golf cart to the store? Florida has rules for that.', es: '¿Va a la tienda en el carrito de golf? Florida tiene reglas para eso.', ru: 'Едете в магазин на гольф-каре? Во Флориде на это есть правила.' },
  autocycle: { en: 'Three-wheeler like a Slingshot? No endorsement needed, and no PIP either.', es: '¿Un tres ruedas como el Slingshot? No necesita endoso, pero tampoco tiene PIP.', ru: 'Трёхколёсник вроде Slingshot? Отметка в правах не нужна, но и PIP нет.' },
  life: { en: 'If your paycheck stopped tomorrow, how long would your family be OK?', es: 'Si mañana dejara de llegar su sueldo, ¿cuánto tiempo estaría bien su familia?', ru: 'Если завтра ваша зарплата перестанет приходить, сколько продержится семья?' },
};
const FACTS = { motorcycle: [0, 2], 'jet-ski': [0, 3], boat: [1, 3], 'off-road': [0, 3], 'golf-cart': [0, 1], autocycle: [1, 2], life: [0, 3] };
const UI = {
  en: { ask: 'Ask your agent about', avail: 'Availability depends on the policy.', offer: 'Send us your policy and we’ll check your coverage.', call: 'Call', wa: 'WhatsApp', langs: 'English · Español · Русский', src: 'Source', lic: 'Florida City, FL · License #L109526' },
  es: { ask: 'Pregúntele a su agente por', avail: 'La disponibilidad depende de la póliza.', offer: 'Envíenos su póliza y revisamos su cobertura.', call: 'Llame', wa: 'WhatsApp', langs: 'Español · English · Русский', src: 'Fuente', lic: 'Florida City, FL · Licencia #L109526' },
  ru: { ask: 'Спросите агента о покрытиях', avail: 'Наличие покрытий зависит от полиса.', offer: 'Пришлите полис — мы проверим ваше покрытие.', call: 'Звоните', wa: 'WhatsApp', langs: 'Русский · English · Español', src: 'Источник', lic: 'Флорида-Сити, FL · Лицензия #L109526' },
};
const FONT = "'Noto Sans', 'DejaVu Sans', Arial, sans-serif";
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const strip = (s) => s.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
function wrap(text, max) {
  const out = []; let cur = '';
  for (const w of String(text).split(/\s+/)) {
    if (!cur) cur = w; else if ((cur + ' ' + w).length <= max) cur += ' ' + w; else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  return out;
}
const T = (x, y, lines, { size = 60, weight = 400, fill = '#fff', anchor = 'middle', lh = Math.round(size * 1.25) } = {}) =>
  `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${lines.map((l, i) => `<tspan x="${x}" dy="${i ? lh : 0}">${esc(l)}</tspan>`).join('')}</text>`;

const W = 1080, H = 1920, PANEL = 1010;
function frame(line, inner, idx, n) {
  const dots = Array.from({ length: n }, (_, i) => `<circle cx="${W / 2 - (n - 1) * 18 + i * 36}" cy="1836" r="9" fill="${i === idx ? C.gold : '#ffffff'}" opacity="${i === idx ? 1 : 0.45}"/>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<rect width="${W}" height="${H}" fill="${C.navy}"/>
<svg x="0" y="0" width="${W}" height="${PANEL + 40}" viewBox="600 40 840 820" preserveAspectRatio="xMidYMid slice">${sceneInner(line)}</svg>
<rect x="0" y="${PANEL}" width="${W}" height="${H - PANEL}" fill="${C.navy}"/>
<path d="M0 ${PANEL} Q ${W / 2} ${PANEL - 70} ${W} ${PANEL} Z" fill="${C.navy}"/>
<rect x="90" y="100" rx="30" width="300" height="64" fill="${C.navy}" opacity="0.92"/>
<text x="240" y="144" font-family="${FONT}" font-size="34" font-weight="700" fill="#fff" text-anchor="middle">M&amp;K Agency</text>
${inner}
${dots}
</svg>`;
}

function scenesFor(line, L) {
  const c = pages[line].copy[L];
  const u = UI[L];
  const k = L === 'ru' ? 0.92 : 1;
  const out = [];
  // 1. hook
  const hl = wrap(HOOK[line][L], Math.round(24 * k));
  out.push(T(W / 2, PANEL + 170, hl, { size: 72, weight: 700, lh: 92 }));
  // 2-3. facts (verbatim from the page) with source
  for (const i of FACTS[line]) {
    const f = c.facts[i];
    const tl = wrap(strip(f.text), Math.round(31 * k));
    out.push(
      T(W / 2, PANEL + 190, [f.value], { size: 150, weight: 800, fill: C.gold }) +
      T(W / 2, PANEL + 310, tl, { size: 50, lh: 66 }) +
      T(W / 2, 1770, [`${u.src}: ${srcLabel(f.source, L)}`], { size: 30, fill: '#c9d6ea' })
    );
  }
  // 4. coverage to ask about
  const cov = c.coverage.slice(0, 4).map((x) => x.h);
  let s = T(W / 2, PANEL + 130, wrap(u.ask, Math.round(28 * k)), { size: 56, weight: 700, fill: C.gold, lh: 70 });
  let y = PANEL + 235;
  for (const h of cov) {
    const lines = wrap(h, Math.round(30 * k));
    s += `<circle cx="120" cy="${y - 16}" r="14" fill="${C.gold}"/>` + T(160, y, lines, { size: 46, anchor: 'start', lh: 56 });
    y += lines.length * 56 + 26;
  }
  s += T(W / 2, Math.max(1790, y + 10), [u.avail], { size: 34, fill: '#c9d6ea' });
  out.push(s);
  // 5. CTA (approved offer + contact)
  out.push(
    T(W / 2, PANEL + 150, wrap(u.offer, Math.round(24 * k)), { size: 66, weight: 700, lh: 84 }) +
    T(W / 2, PANEL + 420, [`${u.call} (305) 859-3953`], { size: 58, weight: 700, fill: C.gold }) +
    T(W / 2, PANEL + 505, [`${u.wa} (971) 998-7313`], { size: 52 }) +
    T(W / 2, PANEL + 590, ['mkagencyinc.com'], { size: 50, fill: '#c9d6ea' }) +
    T(W / 2, PANEL + 680, [u.langs], { size: 40 }) +
    T(W / 2, PANEL + 740, [u.lic], { size: 32, fill: '#c9d6ea' })
  );
  return out;
}

const DUR = 4.3, XF = 0.5, FPS = 30;
const made = [];
const ONLY = process.env.ONLY; // e.g. ONLY=motorcycle-en
for (const line of Object.keys(pages)) {
  for (const L of ['en', 'es', 'ru']) {
    if (ONLY && ONLY !== `${line}-${L}`) continue;
    const sc = scenesFor(line, L);
    const pngs = [];
    for (let i = 0; i < sc.length; i++) {
      const p = path.join(TMP, `${line}-${L}-${i}.png`);
      await sharp(Buffer.from(frame(line, sc[i], i, sc.length))).png().toFile(p);
      pngs.push(p);
    }
    if (L === 'en' || line === 'motorcycle') {
      fs.copyFileSync(pngs[1], path.join(PREV, `video-${line}-${L}-fact.png`));
    }
    const args = ['-y', '-loglevel', 'error'];
    for (const p of pngs) args.push('-loop', '1', '-framerate', String(FPS), '-t', String(DUR), '-i', p);
    args.push('-f', 'lavfi', '-t', '30', '-i', 'anullsrc=channel_layout=stereo:sample_rate=44100');
    const frames = Math.round(DUR * FPS);
    let fc = pngs.map((_, i) => `[${i}:v]scale=1188:2112,zoompan=z='1+0.08*on/${frames}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=${W}x${H}:fps=${FPS},trim=duration=${DUR},setpts=PTS-STARTPTS,fps=${FPS},settb=AVTB,format=yuv420p[v${i}]`).join(';');
    let prev = 'v0';
    for (let i = 1; i < pngs.length; i++) {
      const off = (DUR - XF) * i;
      fc += `;[${prev}][v${i}]xfade=transition=fade:duration=${XF}:offset=${off.toFixed(2)}[x${i}]`;
      prev = `x${i}`;
    }
    const total = DUR * pngs.length - XF * (pngs.length - 1);
    const out = path.join(MEDIA, `${line}-${L}.mp4`);
    args.push('-filter_complex', fc, '-map', `[${prev}]`, '-map', `${pngs.length}:a`, '-t', total.toFixed(2),
      '-c:v', 'libx264', '-preset', 'medium', '-crf', '22', '-pix_fmt', 'yuv420p', '-r', String(FPS), '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart', out);
    execFileSync('ffmpeg', args, { stdio: 'inherit' });
    made.push(out);
    console.log('video', path.basename(out), total.toFixed(1) + 's');
  }
}
fs.rmSync(TMP, { recursive: true, force: true });
console.log(made.length, 'videos in', MEDIA);
