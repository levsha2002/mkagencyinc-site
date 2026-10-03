// Generates the localized SVG illustrations for the /[lang]/protect section.
// Run: node scripts/build-protect-images.mjs  → public/images/protect/<name>-<lang>.svg
// Text is hand-wrapped per language (arrays = lines) so it stays readable on
// phones. Keep fonts >= 22px in a 600px-wide viewBox. No photos, no logos.
import fs from 'fs';
import path from 'path';

const OUT = path.join(process.cwd(), 'public/images/protect');
const LANGS = ['en', 'es', 'ru'];
const C = {
  navy: '#07274f', gold: '#e0a93b', blue: '#0c5bd6', blue2: '#5b8def', sky: '#eaf2ff',
  green: '#15803d', orange: '#c2410c', orangeBg: '#fff4ec', grey: '#4b5b70', bg: '#f6f9fe', white: '#ffffff',
};
const FONT = "Arial, Helvetica, 'Segoe UI', Roboto, 'Noto Sans', sans-serif";

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const money = (n, L) => '$' + n.toLocaleString(L === 'ru' ? 'ru-RU' : 'en-US').replace(/\u202f/g, '\u00a0');

function T(x, y, lines, o = {}) {
  const { size = 22, weight = 400, fill = C.navy, anchor = 'start', lh = Math.round(size * 1.28) } = o;
  const arr = Array.isArray(lines) ? lines : [lines];
  const spans = arr.map((ln, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : lh}">${esc(ln)}</tspan>`).join('');
  return `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${spans}</text>`;
}
const lines = (a) => (Array.isArray(a) ? a.length : 1);

function svg(w, h, title, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${esc(title)}">
<title>${esc(title)}</title>
<style>text{font-family:${FONT}}</style>
<rect width="${w}" height="${h}" rx="24" fill="${C.bg}"/>
${body}
</svg>
`;
}

// Title + subtitle block. Returns [markup, nextY].
function header(t, W) {
  let y = 52;
  let out = T(W / 2, y, t.title, { size: 30, weight: 700, anchor: 'middle', lh: 37 });
  y += (lines(t.title) - 1) * 37 + 38;
  if (t.sub) {
    out += T(W / 2, y, t.sub, { size: 22, fill: C.grey, anchor: 'middle', lh: 28 });
    y += (lines(t.sub) - 1) * 28 + 22;
  }
  return [out, y];
}

/* ---------------------------------------------------------------- 1. car-shortfall */
const carGap = {
  en: {
    title: ['One crash, two very', 'different numbers'],
    sub: ['Example: a driver hit by someone with only', "Florida's minimum insurance can't work for 6 months"],
    med: ['Medical bills'], lost: ['Lost paychecks', '(6 months)'], pain: ['Pain and lost', 'everyday life'], noReceipt: 'no receipt, still real',
    pip: 'Your PIP: ', gapT: 'The gap', gapPlus: ['+ pain and lost', 'everyday life'],
    um: ['UM on your own', 'policy can help', 'pay this, up to', 'your limit'], other: ["Other driver's", 'insurance: $0'],
    colA: ['What the crash', 'really cost'], colB: ['What was paid'],
    foot: ['Example numbers. Coverage depends on', 'your policy and its limits.'],
    alt: '',
  },
  es: {
    title: ['Un choque, dos cifras', 'muy diferentes'],
    sub: ['Ejemplo: un conductor chocado por alguien con', 'solo el seguro mínimo no puede trabajar 6 meses'],
    med: ['Facturas médicas'], lost: ['Sueldo perdido', '(6 meses)'], pain: ['Dolor y vida', 'diaria perdida'], noReceipt: 'sin recibo, pero real',
    pip: 'Su PIP: ', gapT: 'Lo que falta', gapPlus: ['+ dolor y vida', 'diaria perdida'],
    um: ['El UM de su propia', 'póliza puede ayudar', 'a pagarlo, hasta', 'su límite'], other: ['Seguro del otro', 'conductor: $0'],
    colA: ['Lo que el choque', 'costó de verdad'], colB: ['Lo que se pagó'],
    foot: ['Cifras de ejemplo. La cobertura depende', 'de su póliza y sus límites.'],
  },
  ru: {
    title: ['Одна авария —', 'две очень разные суммы'],
    sub: ['Пример: в водителя врезался человек с минимальной', 'страховкой. Пострадавший полгода не может работать'],
    med: ['Счета за лечение'], lost: ['Потерянная', 'зарплата (6 мес.)'], pain: ['Боль и потерянная', 'обычная жизнь'], noReceipt: 'без чека, но это реально',
    pip: 'Ваш PIP: ', gapT: 'Дыра', gapPlus: ['+ боль и потерянная', 'обычная жизнь'],
    um: ['UM в вашем полисе', 'может это оплатить', '— в пределах', 'вашего лимита'], other: ['Страховка виновника:', '$0'],
    colA: ['Во что авария', 'обошлась на деле'], colB: ['Что оплачено'],
    foot: ['Цифры условные. Покрытие зависит', 'от вашего полиса и его лимитов.'],
  },
};
function figCarGap(L) {
  const t = carGap[L]; const W = 600, H = 950;
  const [hd] = header(t, W);
  const base = 740, k = 180; // $ per px
  const hMed = 48000 / k, hLost = 24000 / k, hPain = 92, hPip = 10000 / k;
  const ax = 28, aw = 262, bx = 310, bw = 262;
  const yMed = base - hMed, yLost = yMed - hLost, yPain = yLost - hPain;
  let b = hd;
  b += `<defs><pattern id="hatch" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="14" height="14" fill="#fdf3dc"/><line x1="0" y1="0" x2="0" y2="14" stroke="${C.gold}" stroke-width="5" stroke-opacity=".55"/></pattern></defs>`;
  b += `<rect x="${ax}" y="${yMed}" width="${aw}" height="${hMed}" fill="${C.blue}"/>`;
  b += T(ax + aw / 2, yMed + hMed / 2 - 6, t.med, { size: 24, weight: 700, fill: C.white, anchor: 'middle' });
  b += T(ax + aw / 2, yMed + hMed / 2 + 30, money(48000, L), { size: 30, weight: 700, fill: C.white, anchor: 'middle' });
  b += `<rect x="${ax}" y="${yLost}" width="${aw}" height="${hLost}" fill="${C.blue2}"/>`;
  b += T(ax + aw / 2, yLost + 34, t.lost, { size: 22, weight: 700, fill: C.white, anchor: 'middle', lh: 26 });
  b += T(ax + aw / 2, yLost + 108, money(24000, L), { size: 28, weight: 700, fill: C.white, anchor: 'middle' });
  b += `<rect x="${ax}" y="${yPain}" width="${aw}" height="${hPain}" fill="url(#hatch)" stroke="${C.gold}" stroke-width="2"/>`;
  b += `<rect x="${ax + 14}" y="${yPain + 8}" width="${aw - 28}" height="${hPain - 16}" rx="10" fill="#fffaf0" fill-opacity=".92"/>`;
  b += T(ax + aw / 2, yPain + 34, t.pain, { size: 22, weight: 700, anchor: 'middle', lh: 26 });
  b += T(ax + aw / 2, yPain - 12, t.noReceipt, { size: 22, fill: C.grey, anchor: 'middle' });
  // column B
  const yPip = base - hPip, yGap = base - 72000 / k;
  b += `<rect x="${bx}" y="${yPip}" width="${bw}" height="${hPip}" fill="${C.green}"/>`;
  b += T(bx + bw / 2, yPip + 36, t.pip + money(10000, L), { size: 23, weight: 700, fill: C.white, anchor: 'middle' });
  b += `<rect x="${bx + 2}" y="${yGap}" width="${bw - 4}" height="${yPip - yGap - 4}" rx="6" fill="${C.orangeBg}" stroke="${C.orange}" stroke-width="3" stroke-dasharray="10 7"/>`;
  b += T(bx + bw / 2, yGap + 38, t.gapT, { size: 26, weight: 700, fill: C.orange, anchor: 'middle' });
  b += T(bx + bw / 2, yGap + 80, money(62000, L), { size: 36, weight: 700, fill: C.orange, anchor: 'middle' });
  b += T(bx + bw / 2, yGap + 112, t.gapPlus, { size: 22, fill: C.orange, anchor: 'middle', lh: 26 });
  b += T(bx + bw / 2, yGap + 178, t.um, { size: 22, weight: 700, anchor: 'middle', lh: 27 });
  b += T(bx + bw / 2, yPip - 50, t.other, { size: 22, fill: C.grey, anchor: 'middle', lh: 26 });
  b += `<line x1="16" y1="${base}" x2="${W - 16}" y2="${base}" stroke="${C.navy}" stroke-width="3"/>`;
  b += T(ax + aw / 2, base + 34, t.colA, { size: 23, weight: 700, anchor: 'middle', lh: 28 });
  b += T(bx + bw / 2, base + 34, t.colB, { size: 23, weight: 700, anchor: 'middle', lh: 28 });
  b += T(W / 2, H - 76, t.foot, { size: 22, fill: C.grey, anchor: 'middle', lh: 28 });
  return { W, H, body: b, title: t.title.join(' ') };
}

/* ------------------------------------------------------ 2. paycheck-timeline */
const timeline = {
  en: {
    title: ['When the paycheck stops'], sub: ['Example: hurt in a crash, out of work', 'for 6 months'],
    steps: [
      ['Day 1: the crash', ['You are hurt and cannot work.', 'Your paycheck stops.']],
      ['First weeks: PIP helps a little', ['PIP pays 60% of lost pay and 80%', 'of medical bills, from one shared $10,000.']],
      ['Month 2 or 3: PIP runs out', ['Rent, the car payment, groceries and', 'the light bill keep coming.']],
      ['Month 6: Social Security?', ['Only if the injury is expected to last', 'a year or more, and after a 5-month wait.']],
      ['What can fill the gap', ['If the other driver had no or too little', 'insurance, UM can pay lost pay, medical', 'bills and pain and suffering, up to your limit.']],
    ],
    foot: ['Example. Coverage depends on your policy.'],
  },
  es: {
    title: ['Cuando el sueldo se detiene'], sub: ['Ejemplo: lesionado en un choque, sin', 'trabajar durante 6 meses'],
    steps: [
      ['Día 1: el choque', ['Usted se lesiona y no puede trabajar.', 'Su sueldo se detiene.']],
      ['Primeras semanas: el PIP ayuda un poco', ['El PIP paga el 60% del sueldo perdido y el', '80% de los gastos médicos, todo de los', 'mismos $10,000.']],
      ['Mes 2 o 3: se acaba el PIP', ['La renta, el pago del carro, la comida', 'y la luz siguen llegando.']],
      ['Mes 6: ¿Seguro Social?', ['Solo si la lesión va a durar un año', 'o más, y después de 5 meses de espera.']],
      ['Lo que puede cubrir el hueco', ['Si el otro conductor no tenía seguro o tenía', 'muy poco, el UM puede pagar sueldo perdido,', 'gastos médicos y dolor, hasta su límite.']],
    ],
    foot: ['Ejemplo. La cobertura depende de su póliza.'],
  },
  ru: {
    title: ['Когда зарплата прекращается'], sub: ['Пример: травма в аварии, полгода', 'без работы'],
    steps: [
      ['День 1: авария', ['Вы травмированы и не можете работать.', 'Зарплата перестаёт приходить.']],
      ['Первые недели: PIP немного помогает', ['PIP платит 60% потерянного дохода и 80%', 'счетов врачей — из одних и тех же $10 000.']],
      ['2–3 месяц: PIP закончился', ['Аренда, платёж за машину, продукты', 'и свет никуда не делись.']],
      ['6 месяц: Social Security?', ['Только если травма продлится год или', 'дольше, и только после 5 месяцев ожидания.']],
      ['Что может закрыть дыру', ['Если у виновника нет страховки или её', 'мало, UM может оплатить потерянный доход,', 'лечение, боль и страдания — до лимита.']],
    ],
    foot: ['Пример. Покрытие зависит от вашего полиса.'],
  },
};
function figTimeline(L) {
  const t = timeline[L]; const W = 600;
  let [b, y] = header(t, W);
  y += 40;
  const x0 = 46, tx = 84;
  const startY = y;
  const colors = [C.orange, C.blue, C.orange, C.grey, C.gold];
  let nodes = '';
  t.steps.forEach(([h, body], i) => {
    nodes += `<circle cx="${x0}" cy="${y - 8}" r="15" fill="${colors[i]}" stroke="${C.white}" stroke-width="4"/>`;
    nodes += T(x0, y - 0.5, String(i + 1), { size: 18, weight: 700, fill: C.white, anchor: 'middle' });
    if (i === t.steps.length - 1) {
      const hh = 40 + body.length * 29 + 18;
      nodes += `<rect x="${tx - 14}" y="${y - 36}" width="${W - tx - 4}" height="${hh}" rx="14" fill="#fff6e2" stroke="${C.gold}" stroke-width="2"/>`;
    }
    nodes += T(tx, y, h, { size: 25, weight: 700, fill: i === 4 ? C.navy : colors[i] });
    nodes += T(tx, y + 34, body, { size: 22, lh: 29 });
    y += 34 + body.length * 29 + 46;
  });
  b += `<line x1="${x0}" y1="${startY - 8}" x2="${x0}" y2="${y - 150}" stroke="#c9d6ea" stroke-width="6" stroke-linecap="round"/>`;
  b += nodes;
  const H = y + 30;
  b += T(W / 2, H - 34, t.foot, { size: 22, fill: C.grey, anchor: 'middle' });
  return { W, H, body: b, title: t.title.join(' ') };
}

/* ---------------------------------------------------------- 3. two kinds */
const twoKinds = {
  en: {
    title: ['Two kinds of losses', 'after a bad crash'],
    a: 'Losses with a receipt', aItems: ['Medical bills', 'Lost paychecks', 'Money you would have', 'earned in the future', 'Help at home, rides to therapy'],
    b: 'Losses without a receipt', bItems: ['Pain that does not go away', 'Bad sleep, fear of driving', 'Not able to lift your kids', 'Missing sports, church,', 'family trips'],
    bottom: ['UM coverage can help pay for', 'both kinds, up to your limit.'],
  },
  es: {
    title: ['Dos tipos de pérdidas', 'después de un choque grave'],
    a: 'Pérdidas con recibo', aItems: ['Facturas médicas', 'Sueldo perdido', 'Lo que usted iba a', 'ganar en el futuro', 'Ayuda en casa, viajes a terapia'],
    b: 'Pérdidas sin recibo', bItems: ['Dolor que no se va', 'Mal sueño, miedo a manejar', 'No poder cargar a sus hijos', 'Perderse deportes, la iglesia,', 'los viajes en familia'],
    bottom: ['El UM puede ayudar a pagar', 'los dos tipos, hasta su límite.'],
  },
  ru: {
    title: ['Два вида потерь', 'после серьёзной аварии'],
    a: 'Потери с чеком', aItems: ['Счета за лечение', 'Потерянная зарплата', 'Деньги, которые вы', 'заработали бы в будущем', 'Помощь по дому, поездки к врачу'],
    b: 'Потери без чека', bItems: ['Боль, которая не проходит', 'Плохой сон, страх за рулём', 'Не можете поднять ребёнка', 'Нет спорта, церкви,', 'семейных поездок'],
    bottom: ['UM может помочь оплатить оба', 'вида потерь — в пределах лимита.'],
  },
};
function card(x, y, w, title, items, color, bg, icon) {
  const h = 76 + items.length * 32 + 16;
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${bg}" stroke="${color}" stroke-width="2.5"/>`;
  s += `<rect x="${x}" y="${y}" width="${w}" height="58" rx="18" fill="${color}"/><rect x="${x}" y="${y + 40}" width="${w}" height="18" fill="${color}"/>`;
  s += T(x + 24, y + 38, title, { size: 26, weight: 700, fill: C.white });
  s += icon(x + w - 52, y + 8);
  let yy = y + 96;
  // items: a line that starts lowercase-continuation is drawn without a bullet
  items.forEach((it, i) => {
    const cont = i > 0 && /^[a-zа-яё]/.test(it) && !/^[A-ZА-ЯЁ]/.test(it) && items[i - 1].endsWith(',') || (i > 0 && /^(earned|ganar|заработали|family|los viajes|семейных)/.test(it));
    if (!cont) s += `<circle cx="${x + 32}" cy="${yy - 8}" r="6" fill="${color}"/>`;
    s += T(x + 50, yy, it, { size: 24 });
    yy += 32;
  });
  return [s, h];
}
const receiptIcon = (x, y) => `<path d="M${x} ${y} h34 v40 l-6 -5 -5 5 -6 -5 -6 5 -5 -5 -6 5 z" fill="${C.white}"/><rect x="${x + 7}" y="${y + 9}" width="20" height="4" fill="${C.blue}"/><rect x="${x + 7}" y="${y + 18}" width="20" height="4" fill="${C.blue}"/><rect x="${x + 7}" y="${y + 27}" width="13" height="4" fill="${C.blue}"/>`;
const heartIcon = (x, y) => `<path d="M${x + 17} ${y + 38} C${x - 8} ${y + 20} ${x + 2} ${y + 2} ${x + 17} ${y + 12} C${x + 32} ${y + 2} ${x + 42} ${y + 20} ${x + 17} ${y + 38} z" fill="${C.white}"/>`;
function figTwoKinds(L) {
  const t = twoKinds[L]; const W = 600;
  let [b, y] = header(t, W);
  y += 10;
  const [c1, h1] = card(24, y, W - 48, t.a, t.aItems, C.blue, C.sky, receiptIcon);
  b += c1; y += h1 + 24;
  const [c2, h2] = card(24, y, W - 48, t.b, t.bItems, '#b7791f', '#fff8ea', heartIcon);
  b += c2; y += h2 + 24;
  b += `<rect x="24" y="${y}" width="${W - 48}" height="96" rx="18" fill="${C.navy}"/>`;
  b += T(W / 2, y + 40, t.bottom, { size: 24, weight: 700, fill: C.white, anchor: 'middle', lh: 30 });
  const H = y + 96 + 24;
  return { W, H, body: b, title: t.title.join(' ') };
}

/* ------------------------------------------------------ 4. umbrella-layers */
const layers = {
  en: {
    title: ['How an umbrella policy', 'stacks on top'], sub: ['It starts paying when your car or', 'home liability limit runs out.'],
    umb: 'Umbrella: extra layer', umbEx: 'for example $1,000,000', car: ['Car liability'], carEx: 'e.g. $100,000', home: ['Home liability'], homeEx: 'e.g. $300,000',
    steps: ['1. Car or home insurance pays first.', '2. The umbrella pays the rest, up to its limit.'],
    prot: 'What it helps protect:', chips: ['Savings', 'Property', 'Your future'],
  },
  es: {
    title: ['Cómo se suma una póliza', 'paraguas (umbrella)'], sub: ['Empieza a pagar cuando se acaba el límite', 'de responsabilidad de su auto o casa.'],
    umb: 'Umbrella: capa extra', umbEx: 'por ejemplo $1,000,000', car: ['Responsabilidad', 'del auto'], carEx: 'ej. $100,000', home: ['Responsabilidad', 'de la casa'], homeEx: 'ej. $300,000',
    steps: ['1. Primero paga el seguro de auto o casa.', '2. El umbrella paga el resto, hasta su límite.'],
    prot: 'Lo que ayuda a proteger:', chips: ['Ahorros', 'Propiedades', 'Su futuro'],
  },
  ru: {
    title: ['Как зонтичный полис', 'ложится сверху'], sub: ['Он начинает платить, когда закончился', 'лимит ответственности по авто или дому.'],
    umb: 'Umbrella: доп. слой', umbEx: 'например, $1 000 000', car: ['Ответственность', 'по авто'], carEx: 'напр. $100 000', home: ['Ответственность', 'по дому'], homeEx: 'напр. $300 000',
    steps: ['1. Сначала платит страховка авто или дома.', '2. Остальное — umbrella, в пределах лимита.'],
    prot: 'Что это помогает защитить:', chips: ['Сбережения', 'Имущество', 'Будущее'],
  },
};
function figLayers(L) {
  const t = layers[L]; const W = 600;
  let [b, y] = header(t, W);
  y += 20;
  // umbrella canopy
  const cx = W / 2, top = y, r = 250;
  b += `<path d="M${cx - r} ${top + 110} Q${cx - r} ${top} ${cx} ${top} Q${cx + r} ${top} ${cx + r} ${top + 110} Q${cx + r * 0.75} ${top + 88} ${cx + r / 2} ${top + 110} Q${cx + r / 4} ${top + 88} ${cx} ${top + 110} Q${cx - r / 4} ${top + 88} ${cx - r / 2} ${top + 110} Q${cx - r * 0.75} ${top + 88} ${cx - r} ${top + 110} z" fill="${C.gold}"/>`;
  b += `<rect x="${cx - 3}" y="${top - 18}" width="6" height="20" rx="3" fill="${C.navy}"/>`;
  b += T(cx, top + 58, t.umb, { size: 27, weight: 700, anchor: 'middle' });
  b += T(cx, top + 90, t.umbEx, { size: 22, weight: 700, anchor: 'middle' });
  y = top + 130;
  // two blocks
  const bw = 250, bh = 150, gx = 22;
  const cb = (x, label, ex) => {
    let s = `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="16" fill="${C.blue}"/>`;
    const n = lines(label);
    s += T(x + bw / 2, y + (n === 1 ? 62 : 48), label, { size: 24, weight: 700, fill: C.white, anchor: 'middle', lh: 29 });
    s += T(x + bw / 2, y + (n === 1 ? 102 : 116), ex, { size: 22, fill: '#dbe7ff', anchor: 'middle' });
    return s;
  };
  b += cb(gx + 14, t.car, t.carEx) + cb(W - gx - 14 - bw, t.home, t.homeEx);
  y += bh + 48;
  b += T(36, y, t.steps, { size: 22, weight: 700, lh: 32 });
  y += 32 + 84;
  b += `<rect x="24" y="${y - 38}" width="${W - 48}" height="140" rx="18" fill="${C.navy}"/>`;
  b += T(W / 2, y, t.prot, { size: 24, weight: 700, fill: C.white, anchor: 'middle' });
  const cw = 166, cg = 13, cx0 = (W - (3 * cw + 2 * cg)) / 2;
  t.chips.forEach((c, i) => {
    const x = cx0 + i * (cw + cg);
    b += `<rect x="${x}" y="${y + 22}" width="${cw}" height="52" rx="26" fill="${C.white}"/>`;
    b += T(x + cw / 2, y + 56, c, { size: 22, weight: 700, anchor: 'middle' });
  });
  const H = y + 102 + 24;
  return { W, H, body: b, title: t.title.join(' ') };
}

/* --------------------------------------------------- 5. limit-vs-verdict */
const verdict = {
  en: {
    title: ['A real Florida case:', 'insurance limit vs. verdict'], sub: ['Florida Supreme Court, case SC17-85 (2018)'],
    each: 'Each square = $100,000', blue: "Blue: the driver's insurance limit ($100,000)", red: ['Red: the rest of the $8.47 million verdict.', 'The judgment was entered against the', 'driver for the full amount.'],
  },
  es: {
    title: ['Un caso real en Florida:', 'límite del seguro vs. veredicto'], sub: ['Corte Suprema de Florida, caso SC17-85 (2018)'],
    each: 'Cada cuadro = $100,000', blue: 'Azul: el límite del seguro del conductor ($100,000)', red: ['Rojo: el resto del veredicto de $8.47 millones.', 'La sentencia se dictó contra el conductor', 'por el monto total.'],
  },
  ru: {
    title: ['Реальное дело во Флориде:', 'лимит страховки и решение суда'], sub: ['Верховный суд Флориды, дело SC17-85 (2018)'],
    each: 'Один квадрат = $100 000', blue: ['Синий: лимит страховки водителя', '($100 000)'], red: ['Красный: остальная часть решения', 'присяжных на $8,47 млн. Решение суда', 'вынесено против водителя на всю сумму.'],
  },
};
function figVerdict(L) {
  const t = verdict[L]; const W = 600;
  let [b, y] = header(t, W);
  y += 14;
  const s = 42, g = 8, cols = 10, x0 = (W - (cols * s + (cols - 1) * g)) / 2;
  for (let i = 0; i < 85; i++) {
    const x = x0 + (i % cols) * (s + g), yy = y + Math.floor(i / cols) * (s + g);
    if (i === 0) b += `<rect x="${x}" y="${yy}" width="${s}" height="${s}" rx="6" fill="${C.blue}"/>`;
    else if (i < 84) b += `<rect x="${x}" y="${yy}" width="${s}" height="${s}" rx="6" fill="${C.orange}"/>`;
    else b += `<rect x="${x}" y="${yy}" width="${s}" height="${s}" rx="6" fill="#f3d7c8"/><rect x="${x}" y="${yy}" width="${s * 0.7}" height="${s}" rx="6" fill="${C.orange}"/>`;
  }
  y += 9 * (s + g) + 36;
  b += T(W / 2, y, t.each, { size: 24, weight: 700, anchor: 'middle' });
  y += 44;
  b += `<rect x="30" y="${y - 20}" width="22" height="22" rx="4" fill="${C.blue}"/>`;
  b += T(64, y, t.blue, { size: 22, lh: 28 });
  y += lines(t.blue) * 28 + 16;
  b += `<rect x="30" y="${y - 20}" width="22" height="22" rx="4" fill="${C.orange}"/>`;
  b += T(64, y, t.red, { size: 22, lh: 28 });
  y += lines(t.red) * 28 + 10;
  const H = y + 20;
  return { W, H, body: b, title: t.title.join(' ') };
}

/* ------------------------------------------------------ 6. home-liability */
const homeLiab = {
  en: {
    title: ['Everyday accidents at home', 'that can become a claim'],
    tiles: [['Pool', ['A child or guest', 'is hurt in the pool']], ['Dog bite', ['Your dog bites a', 'neighbor or visitor']], ['A guest falls', ['Wet patio, loose', 'step, dark stairs']]],
    stat: ['Florida: #2 in the', 'U.S. for dog-bite', 'claims (2025).', 'Average claim:', '$62,375'],
    bottom: ['Home liability is often $100,000 to', '$300,000. If a claim is bigger, the rest', 'can fall on you. An umbrella adds a layer.'],
  },
  es: {
    title: ['Accidentes comunes en casa', 'que pueden volverse un reclamo'],
    tiles: [['Piscina', ['Un niño o invitado', 'se lesiona']], ['Mordida de perro', ['Su perro muerde a', 'un vecino o visita']], ['Una caída', ['Patio mojado, escalón', 'flojo, poca luz']]],
    stat: ['Florida: #2 en', 'EE. UU. en reclamos', 'por mordidas de', 'perro (2025).', 'Promedio: $62,375'],
    bottom: ['La responsabilidad de casa suele ser de', '$100,000 a $300,000. Si el reclamo es mayor,', 'el resto puede caer en usted. El umbrella', 'agrega una capa más.'],
  },
  ru: {
    title: ['Обычные случаи дома, которые', 'могут стать иском'],
    tiles: [['Бассейн', ['Ребёнок или гость', 'пострадал в бассейне']], ['Укус собаки', ['Ваша собака укусила', 'соседа или гостя']], ['Гость упал', ['Мокрая терраса, шаткая', 'ступенька, темнота']]],
    stat: ['Флорида — 2-е место', 'в США по страховым', 'случаям с укусами', 'собак (2025).', 'В среднем $62 375'],
    bottom: ['Лимит ответственности по дому часто', 'от $100 000 до $300 000. Если иск больше,', 'остальное может лечь на вас. Umbrella', 'добавляет ещё один слой.'],
  },
};
const poolIcon = (x, y) => `<rect x="${x}" y="${y + 18}" width="70" height="44" rx="10" fill="#7fb3ff"/><path d="M${x + 6} ${y + 34} q8 -8 16 0 t16 0 t16 0 t16 0" stroke="${C.white}" stroke-width="4" fill="none"/><path d="M${x + 6} ${y + 48} q8 -8 16 0 t16 0 t16 0 t16 0" stroke="${C.white}" stroke-width="4" fill="none"/><path d="M${x + 50} ${y + 22} v-18 a8 8 0 0 1 16 0" stroke="${C.navy}" stroke-width="4" fill="none"/>`;
const pawIcon = (x, y) => `<ellipse cx="${x + 35}" cy="${y + 44}" rx="18" ry="15" fill="${C.navy}"/><circle cx="${x + 13}" cy="${y + 26}" r="8" fill="${C.navy}"/><circle cx="${x + 27}" cy="${y + 13}" r="8" fill="${C.navy}"/><circle cx="${x + 44}" cy="${y + 13}" r="8" fill="${C.navy}"/><circle cx="${x + 58}" cy="${y + 26}" r="8" fill="${C.navy}"/>`;
const stairsIcon = (x, y) => `<path d="M${x} ${y + 62} h18 v-16 h18 v-16 h18 v-16 h16" stroke="${C.navy}" stroke-width="5" fill="none"/><path d="M${x + 40} ${y + 2} l22 38 h-44 z" fill="${C.gold}"/><rect x="${x + 38}" y="${y + 14}" width="5" height="14" fill="${C.navy}"/><rect x="${x + 38}" y="${y + 31}" width="5" height="5" fill="${C.navy}"/>`;
function figHome(L) {
  const t = homeLiab[L]; const W = 600;
  let [b, y] = header(t, W);
  y += 10;
  const tw = 264, th = 230, gx = 24, gap = 24;
  const icons = [poolIcon, pawIcon, stairsIcon];
  const pos = [[gx, y], [W - gx - tw, y], [gx, y + th + gap]];
  t.tiles.forEach(([h, d], i) => {
    const [x, yy] = pos[i];
    b += `<rect x="${x}" y="${yy}" width="${tw}" height="${th}" rx="18" fill="${C.white}" stroke="#d6e1f1" stroke-width="2"/>`;
    b += icons[i](x + tw / 2 - 36, yy + 20);
    b += T(x + tw / 2, yy + 124, h, { size: 25, weight: 700, anchor: 'middle' });
    b += T(x + tw / 2, yy + 160, d, { size: 22, fill: C.grey, anchor: 'middle', lh: 28 });
  });
  const sx = W - gx - tw, sy = y + th + gap;
  b += `<rect x="${sx}" y="${sy}" width="${tw}" height="${th}" rx="18" fill="#fff6e2" stroke="${C.gold}" stroke-width="2.5"/>`;
  b += T(sx + tw / 2, sy + 52, t.stat, { size: 22, weight: 700, anchor: 'middle', lh: 33 });
  y += 2 * th + gap + 26;
  const n = lines(t.bottom);
  b += `<rect x="24" y="${y}" width="${W - 48}" height="${44 + n * 30}" rx="18" fill="${C.navy}"/>`;
  b += T(W / 2, y + 44, t.bottom, { size: 22, weight: 700, fill: C.white, anchor: 'middle', lh: 30 });
  const H = y + 44 + n * 30 + 24;
  return { W, H, body: b, title: t.title.join(' ') };
}

/* --------------------------------------------------------- 7. life-family */
const family = {
  en: {
    title: ['What one paycheck pays for'], sub: ["If it stops forever, these bills don't."],
    center: ['One paycheck'],
    tiles: [['Mortgage', 'or rent'], ['Groceries', 'and bills'], ['Childcare'], ["Kids'", 'education'], ['Car payment', 'and debts'], ['Final', 'expenses']],
    bottom: ['Life insurance can pay your family a lump', 'sum to keep these going.'],
    stat: ['47% of U.S. adults say they would struggle', 'to pay bills within 6 months of losing the', 'main earner (LIMRA / Life Happens, 2026).'],
  },
  es: {
    title: ['Lo que paga un solo sueldo'], sub: ['Si se detiene para siempre, las cuentas no.'],
    center: ['Un sueldo'],
    tiles: [['Hipoteca', 'o renta'], ['Comida', 'y cuentas'], ['Cuidado de', 'los niños'], ['Estudios de', 'los hijos'], ['Pago del carro', 'y deudas'], ['Gastos', 'finales']],
    bottom: ['El seguro de vida puede pagarle a su familia', 'una suma para que todo siga.'],
    stat: ['El 47% de los adultos en EE. UU. dice que', 'tendría problemas para pagar sus cuentas en', '6 meses (LIMRA / Life Happens, 2026).'],
  },
  ru: {
    title: ['Что оплачивает одна зарплата'], sub: ['Если она пропадёт навсегда, счета останутся.'],
    center: ['Одна зарплата'],
    tiles: [['Ипотека', 'или аренда'], ['Продукты', 'и счета'], ['Няня, садик'], ['Учёба', 'детей'], ['Машина', 'и долги'], ['Расходы', 'на похороны']],
    bottom: ['Страхование жизни может выплатить семье', 'сумму, чтобы всё это продолжалось.'],
    stat: ['47% взрослых в США говорят, что с трудом', 'оплатили бы счета уже через 6 месяцев', 'после потери кормильца (LIMRA / Life', 'Happens, 2026).'],
  },
};
function figFamily(L) {
  const t = family[L]; const W = 600;
  let [b, y] = header(t, W);
  y += 14;
  b += `<rect x="150" y="${y}" width="300" height="78" rx="39" fill="${C.green}"/>`;
  b += `<rect x="176" y="${y + 22}" width="44" height="34" rx="6" fill="${C.white}"/><circle cx="198" cy="${y + 39}" r="9" fill="${C.green}"/>`;
  b += T(332, y + 48, t.center, { size: 26, weight: 700, fill: C.white, anchor: 'middle' });
  const cy = y + 78;
  y += 128;
  const tw = 172, th = 112, gx = 18, gap = 16;
  const x0 = (W - (3 * tw + 2 * gx)) / 2;
  t.tiles.forEach((lab, i) => {
    if (i > 2) return;
    const x = x0 + (i % 3) * (tw + gx);
    b += `<path d="M${W / 2} ${cy} L${x + tw / 2} ${y}" stroke="#b9c9e2" stroke-width="3" stroke-dasharray="6 6"/>`;
  });
  t.tiles.forEach((lab, i) => {
    const x = x0 + (i % 3) * (tw + gx), yy = y + Math.floor(i / 3) * (th + gap);
    b += `<rect x="${x}" y="${yy}" width="${tw}" height="${th}" rx="16" fill="${C.white}" stroke="#cfdcf0" stroke-width="2"/>`;
    b += T(x + tw / 2, yy + (lab.length === 1 ? 64 : 48), lab, { size: 23, weight: 700, anchor: 'middle', lh: 30 });
  });
  y += 2 * th + gap + 34;
  b += `<rect x="24" y="${y}" width="${W - 48}" height="${44 + 2 * 30}" rx="18" fill="${C.navy}"/>`;
  b += T(W / 2, y + 44, t.bottom, { size: 23, weight: 700, fill: C.white, anchor: 'middle', lh: 30 });
  y += 104 + 44;
  b += T(W / 2, y, t.stat, { size: 22, fill: C.grey, anchor: 'middle', lh: 28 });
  const H = y + lines(t.stat) * 28 + 10;
  return { W, H, body: b, title: t.title.join(' ') };
}

/* ---------------------------------------------------------- 8. life-income */
const income = {
  en: {
    title: ['Your future paychecks add up'], sub: ['Example: $50,000 a year for 25 more years'],
    yr: (n) => `${n} yrs`, total: ['$1,250,000 your family', 'is counting on'], foot: ['Life insurance can replace part or all of it.'],
  },
  es: {
    title: ['Sus sueldos futuros suman mucho'], sub: ['Ejemplo: $50,000 al año por 25 años más'],
    yr: (n) => `${n} años`, total: ['$1,250,000 con los que', 'cuenta su familia'], foot: ['El seguro de vida puede reemplazar una parte o todo.'],
  },
  ru: {
    title: ['Сколько стоят ваши', 'будущие зарплаты'], sub: ['Пример: $50 000 в год ещё 25 лет'],
    yr: (n) => `${n} лет`, total: ['$1 250 000 — на них', 'рассчитывает семья'], foot: ['Страхование жизни может заменить часть или всё.'],
  },
};
function figIncome(L) {
  const t = income[L]; const W = 600;
  let [b, y] = header(t, W);
  y += 30;
  const chartTop = y + 120, base = chartTop + 330, bw = 82, gap = 22, x0 = (W - (5 * bw + 4 * gap)) / 2;
  b += T(W / 2, y + 18, t.total, { size: 28, weight: 700, fill: C.green, anchor: 'middle', lh: 34 });
  for (let i = 1; i <= 5; i++) {
    const v = i * 250000, h = (v / 1250000) * 300, x = x0 + (i - 1) * (bw + gap);
    b += `<rect x="${x}" y="${base - h}" width="${bw}" height="${h}" rx="8" fill="${i === 5 ? C.green : C.blue2}"/>`;
    const lab = L === 'ru' ? `$${(v / 1000).toLocaleString('ru-RU')} тыс.` : `$${(v / 1000).toLocaleString('en-US')}K`;
    b += T(x + bw / 2, base - h - 12, i === 5 ? (L === 'ru' ? '$1,25 млн' : L === 'es' ? '$1.25 M' : '$1.25M') : i === 4 ? (L === 'ru' ? '$1 млн' : L === 'es' ? '$1 M' : '$1M') : lab.replace(/\u202f/g, ' '), { size: 22, weight: 700, anchor: 'middle' });
    b += T(x + bw / 2, base + 30, t.yr(i * 5), { size: 22, fill: C.grey, anchor: 'middle' });
  }
  b += `<line x1="20" y1="${base}" x2="${W - 20}" y2="${base}" stroke="${C.navy}" stroke-width="3"/>`;
  y = base + 84;
  b += T(W / 2, y, t.foot, { size: 22, weight: 700, anchor: 'middle' });
  const H = y + 34;
  return { W, H, body: b, title: t.title.join(' ') };
}

const FIGS = {
  'car-shortfall': figCarGap,
  'paycheck-timeline': figTimeline,
  'two-kinds-of-losses': figTwoKinds,
  'umbrella-layers': figLayers,
  'limit-vs-verdict': figVerdict,
  'home-liability': figHome,
  'family-paycheck': figFamily,
  'future-paychecks': figIncome,
};

fs.mkdirSync(OUT, { recursive: true });
const sizes = {};
for (const [name, fn] of Object.entries(FIGS)) {
  for (const L of LANGS) {
    const { W, H, body, title } = fn(L);
    fs.writeFileSync(path.join(OUT, `${name}-${L}.svg`), svg(W, Math.round(H), title, body));
    sizes[name] = sizes[name] || {};
    sizes[name][L] = [W, Math.round(H)];
  }
}
fs.writeFileSync(path.join(OUT, 'sizes.json'), JSON.stringify(sizes, null, 2) + '\n');
console.log('wrote', Object.keys(FIGS).length * LANGS.length, 'svgs to', OUT);
