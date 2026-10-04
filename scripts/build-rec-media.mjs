// Builds the images for the Florida rec landing pages (content/pages/rec/).
// Run: node scripts/build-rec-media.mjs
//  -> public/images/rec/<line>-hero.webp   1440x900 illustration behind the hero (no text)
//  -> public/images/rec/<line>-<lang>.svg  localized infographic (text matches figureAlt)
//  -> public/images/rec/sizes.json         infographic sizes (read by content/pages/rec/index.ts)
//  -> public/og/rec-<line>.webp            1200x630 share image
// Flat illustrations only: no photos, no people, no logos. Keep fonts >= 22px in a 600px viewBox.
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { C, LINES, sceneSvg, sceneInner } from './rec/art.mjs';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'public/images/rec');
const OG = path.join(ROOT, 'public/og');
fs.mkdirSync(OUT, { recursive: true });
const FONT = "Arial, Helvetica, 'Segoe UI', Roboto, 'Noto Sans', sans-serif";
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Greedy word wrap by an approximate character budget. */
export function wrap(text, max) {
  const words = String(text).split(/\s+/);
  const out = [];
  let cur = '';
  for (const w of words) {
    if (!cur) cur = w;
    else if ((cur + ' ' + w).length <= max) cur += ' ' + w;
    else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  return out;
}

const ICON = {
  check: `<path d="M-12 1 L-3 10 L13 -9" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  alert: `<path d="M0 -13 L0 4" stroke="#fff" stroke-width="6" stroke-linecap="round"/><circle cx="0" cy="13" r="3.6" fill="#fff"/>`,
  shield: `<path d="M0 -15 L12 -10 L12 0 C12 9 6 14 0 17 C-6 14 -12 9 -12 0 L-12 -10Z" fill="#fff"/>`,
  doc: `<rect x="-10" y="-14" width="20" height="28" rx="3" fill="#fff"/><path d="M-5 -5 H5 M-5 2 H5 M-5 9 H2" stroke="${C.navy}" stroke-width="2.6"/>`,
  clock: `<circle r="13" fill="none" stroke="#fff" stroke-width="4.5"/><path d="M0 -7 V0 L6 4" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  storm: `<circle r="5" fill="#fff"/><path d="M0 -14 C 12 -14 15 0 7 5 M0 14 C -12 14 -15 0 -7 -5" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>`,
  id: `<rect x="-14" y="-10" width="28" height="20" rx="3" fill="#fff"/><circle cx="-6" cy="-1" r="4" fill="${C.navy}"/><path d="M2 -3 H10 M2 3 H8" stroke="${C.navy}" stroke-width="2.6"/>`,
  plus: `<path d="M0 -12 V12 M-12 0 H12" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`,
  minus: `<path d="M-12 0 H12" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`,
  equals: `<path d="M-12 -5 H12 M-12 5 H12" stroke="#fff" stroke-width="5.5" stroke-linecap="round"/>`,
};
const ICON_BG = { alert: C.red, check: C.green, shield: C.blue, doc: C.navy, clock: C.navy, storm: C.grey, id: C.navy, plus: C.blue, minus: C.grey, equals: C.gold };

// Card copy per line and language: { title, sub?, cards: [{ i: icon, h?: heading, t: text }], foot }.
const FIG = {
  motorcycle: {
    en: { title: 'A crash with an uninsured driver', sub: 'What pays a Florida rider’s bills?', cards: [
      { i: 'alert', h: 'Your PIP on the bike: $0', t: 'Florida PIP is written for vehicles with four or more wheels.' },
      { i: 'alert', h: 'The other driver: no insurance', t: 'About 1 in 5 Florida drivers was uninsured in 2023.' },
      { i: 'doc', h: 'What is left', t: 'Medical bills and lost paychecks.' },
      { i: 'shield', h: 'What can help', t: 'Medical payments and uninsured motorist coverage on your own policy, up to the limits.' },
    ], foot: 'Example situation. What pays depends on your coverages and limits.' },
    es: { title: 'Un choque con un conductor sin seguro', sub: '¿Qué paga las cuentas del motociclista?', cards: [
      { i: 'alert', h: 'Su PIP en la moto: $0', t: 'El PIP de Florida está escrito para vehículos de cuatro ruedas o más.' },
      { i: 'alert', h: 'El otro conductor: sin seguro', t: 'Alrededor de 1 de cada 5 conductores en Florida no tenía seguro en 2023.' },
      { i: 'doc', h: 'Lo que queda', t: 'Las facturas médicas y el sueldo perdido.' },
      { i: 'shield', h: 'Lo que puede ayudar', t: 'Los pagos médicos y la cobertura de conductor sin seguro de su propia póliza, hasta sus límites.' },
    ], foot: 'Situación de ejemplo. Lo que se paga depende de sus coberturas y límites.' },
    ru: { title: 'Авария с водителем без страховки', sub: 'Кто оплатит счета мотоциклиста?', cards: [
      { i: 'alert', h: 'Ваш PIP на мотоцикле: $0', t: 'PIP во Флориде написан для машин с четырьмя и более колёсами.' },
      { i: 'alert', h: 'У виновника нет страховки', t: 'В 2023 году без страховки ездил примерно каждый пятый водитель Флориды.' },
      { i: 'doc', h: 'Что остаётся вам', t: 'Счета за лечение и потерянная зарплата.' },
      { i: 'shield', h: 'Что может помочь', t: 'Медицинские расходы и покрытие UM в вашем собственном полисе — в пределах лимитов.' },
    ], foot: 'Условный пример. Что будет оплачено, зависит от покрытий и лимитов.' },
  },
  'jet-ski': {
    en: { title: 'Jet ski rules in Florida', cards: [
      { i: 'check', t: 'Everyone aboard wears a non-inflatable, Coast Guard-approved life jacket.' },
      { i: 'check', t: 'The kill-switch lanyard is attached to the operator.' },
      { i: 'clock', t: 'No riding from half an hour after sunset to half an hour before sunrise.' },
      { i: 'id', t: 'Operators must be at least 14 years old.' },
      { i: 'alert', h: '2025 in Florida', t: 'PWC were 17% of registered vessels but 23% of reportable accidents.' },
    ], foot: 'Rules: s. 327.39, Florida Statutes. Data: FWC, 2025. Coverage depends on the policy.' },
    es: { title: 'Reglas del jet ski en Florida', cards: [
      { i: 'check', t: 'Todos a bordo usan chaleco salvavidas no inflable aprobado por la Guardia Costera.' },
      { i: 'check', t: 'El cordón de apagado va sujeto a quien maneja.' },
      { i: 'clock', t: 'Prohibido navegar desde media hora después de la puesta del sol hasta media hora antes del amanecer.' },
      { i: 'id', t: 'Quien maneja debe tener al menos 14 años.' },
      { i: 'alert', h: 'Florida, 2025', t: 'Las motos acuáticas eran el 17% de las embarcaciones registradas, pero el 23% de los accidentes reportables.' },
    ], foot: 'Reglas: s. 327.39, Estatutos de Florida. Datos: FWC, 2025. La cobertura depende de la póliza.' },
    ru: { title: 'Правила для гидроциклов во Флориде', cards: [
      { i: 'check', t: 'Все на борту — в ненадувных спасжилетах, одобренных Береговой охраной.' },
      { i: 'check', t: 'Шнур аварийной остановки пристёгнут к водителю.' },
      { i: 'clock', t: 'Нельзя кататься с получаса после заката до получаса до рассвета.' },
      { i: 'id', t: 'Водителю должно быть не меньше 14 лет.' },
      { i: 'alert', h: 'Флорида, 2025 год', t: 'Гидроциклы — 17% зарегистрированных судов, но 23% происшествий.' },
    ], foot: 'Правила — ст. 327.39 Законов Флориды. Данные FWC за 2025 год. Покрытие зависит от полиса.' },
  },
  boat: {
    en: { title: 'A Florida boat owner’s year', cards: [
      { i: 'shield', h: 'On the water', t: 'Liability for injuries and damage you cause to others.' },
      { i: 'storm', h: 'June 1 to November 30', t: 'Hurricane season. Have a haul-out or tie-down plan.' },
      { i: 'doc', h: 'After a storm', t: 'The owner has to remove a wrecked boat from the water.' },
      { i: 'check', h: 'What can help', t: 'Liability, physical damage, towing and wreck removal coverage.' },
    ], foot: 'Coverage and availability depend on the policy.' },
    es: { title: 'El año de un dueño de bote en Florida', cards: [
      { i: 'shield', h: 'En el agua', t: 'Responsabilidad civil por lesiones y daños que usted cause a otros.' },
      { i: 'storm', h: 'Del 1 de junio al 30 de noviembre', t: 'Temporada de huracanes. Tenga un plan para sacarlo del agua o amarrarlo.' },
      { i: 'doc', h: 'Después de la tormenta', t: 'El dueño debe sacar del agua un bote destruido.' },
      { i: 'check', h: 'Lo que puede ayudar', t: 'Responsabilidad civil, daño físico, remolque y retiro de restos.' },
    ], foot: 'La cobertura y su disponibilidad dependen de la póliza.' },
    ru: { title: 'Год владельца лодки во Флориде', cards: [
      { i: 'shield', h: 'На воде', t: 'Ответственность за травмы и ущерб, причинённые другим.' },
      { i: 'storm', h: 'С 1 июня по 30 ноября', t: 'Сезон ураганов. Нужен план: поднять лодку на берег или надёжно закрепить.' },
      { i: 'doc', h: 'После шторма', t: 'Владелец обязан убрать разбитую лодку из воды.' },
      { i: 'check', h: 'Что может помочь', t: 'Ответственность, ущерб судну, буксировка и удаление затонувшего судна.' },
    ], foot: 'Покрытия и их наличие зависят от полиса.' },
  },
  'off-road': {
    en: { title: 'Florida off-road basics', cards: [
      { i: 'doc', h: 'Title', t: 'Needed for off-highway vehicles bought by a Florida resident or used on public lands.' },
      { i: 'id', h: 'Under 16', t: 'A DOT helmet and eye protection on every ATV ride.' },
      { i: 'alert', h: 'Public roads', t: 'Not allowed, except daytime on unpaved roads posted under 35 mph, unless the county says otherwise.' },
      { i: 'shield', h: 'What can help', t: 'Liability, medical payments and physical damage coverage.' },
    ], foot: 'Rules: ss. 316.2074, 316.2123 and ch. 317, F.S. Coverage depends on the policy.' },
    es: { title: 'Lo básico del todoterreno en Florida', cards: [
      { i: 'doc', h: 'Título', t: 'Obligatorio para vehículos todoterreno comprados por un residente de Florida o usados en terrenos públicos.' },
      { i: 'id', h: 'Menores de 16', t: 'Casco aprobado por el DOT y protección para los ojos en cada salida en ATV.' },
      { i: 'alert', h: 'Vía pública', t: 'No, salvo de día en caminos sin pavimentar con límite menor de 35 mph, a menos que el condado decida otra cosa.' },
      { i: 'shield', h: 'Lo que puede ayudar', t: 'Responsabilidad civil, pagos médicos y daño físico.' },
    ], foot: 'Reglas: ss. 316.2074, 316.2123 y cap. 317, E.F. La cobertura depende de la póliza.' },
    ru: { title: 'Внедорожная техника во Флориде: основы', cards: [
      { i: 'doc', h: 'Титул', t: 'Нужен на технику, купленную жителем Флориды или используемую на государственных землях.' },
      { i: 'id', h: 'До 16 лет', t: 'Шлем по стандарту DOT и защита для глаз в каждой поездке на квадроцикле.' },
      { i: 'alert', h: 'Дороги общего пользования', t: 'Нельзя, кроме дневной езды по грунтовым дорогам с ограничением ниже 35 миль/ч, если округ не решил иначе.' },
      { i: 'shield', h: 'Что может помочь', t: 'Ответственность, медицинские расходы и ущерб технике.' },
    ], foot: 'Правила — ст. 316.2074, 316.2123 и глава 317. Покрытие зависит от полиса.' },
  },
  'golf-cart': {
    en: { title: 'Golf cart or LSV?', cards: [
      { i: 'check', h: 'Golf cart', t: 'Top speed 20 mph. Only on roads the city or county designated. Sunrise to sunset unless allowed. Not titled or registered.' },
      { i: 'id', h: 'Low-speed vehicle (LSV)', t: 'Top speed 25 mph. Roads posted 35 mph or less. Needs a VIN, title, registration, PIP and property damage liability, and a driver license.' },
      { i: 'shield', h: 'What can help', t: 'Liability and medical payments coverage.' },
    ], foot: 'Rules: ss. 316.212, 316.2122, 320.01, F.S., and FLHSMV. Local rules can be stricter.' },
    es: { title: '¿Carrito de golf o LSV?', cards: [
      { i: 'check', h: 'Carrito de golf', t: 'Hasta 20 mph. Solo por vías designadas por la ciudad o el condado. De la salida a la puesta del sol, salvo autorización. Sin título ni registro.' },
      { i: 'id', h: 'Vehículo de baja velocidad (LSV)', t: 'Hasta 25 mph. Calles con límite de 35 mph o menos. Necesita VIN, título, registro, PIP, responsabilidad por daños a la propiedad y licencia.' },
      { i: 'shield', h: 'Lo que puede ayudar', t: 'Responsabilidad civil y pagos médicos.' },
    ], foot: 'Reglas: ss. 316.212, 316.2122, 320.01, E.F., y FLHSMV. Las reglas locales pueden ser más estrictas.' },
    ru: { title: 'Гольф-кар или LSV?', cards: [
      { i: 'check', h: 'Гольф-кар', t: 'До 20 миль/ч. Только по дорогам, назначенным городом или округом. От восхода до заката, если не разрешено иное. Без титула и регистрации.' },
      { i: 'id', h: 'Тихоходный автомобиль (LSV)', t: 'До 25 миль/ч. Улицы с ограничением до 35 миль/ч. Нужны VIN, титул, регистрация, PIP, ответственность за ущерб имуществу и права.' },
      { i: 'shield', h: 'Что может помочь', t: 'Ответственность и медицинские расходы.' },
    ], foot: 'Правила — ст. 316.212, 316.2122, 320.01 и FLHSMV. Местные правила могут быть строже.' },
  },
  autocycle: {
    en: { title: 'Florida autocycle at a glance', cards: [
      { i: 'check', h: 'What it is', t: 'Two wheels in front, one in back. A steering wheel, seats you do not straddle, roll hoops and seat belts.' },
      { i: 'id', h: 'License', t: 'A driver license is required. A motorcycle endorsement is not.' },
      { i: 'alert', h: 'PIP', t: 'It is a motorcycle under Florida law, so car PIP does not apply.' },
      { i: 'shield', h: 'What can help', t: 'Medical payments, uninsured motorist and liability coverage.' },
    ], foot: 'Rules: ss. 316.003, 322.03, 627.732, F.S., and FLHSMV. Coverage depends on the policy.' },
    es: { title: 'El autociclo en Florida de un vistazo', cards: [
      { i: 'check', h: 'Qué es', t: 'Dos ruedas adelante y una atrás. Volante, asientos en los que no se va a horcajadas, arcos antivuelco y cinturones.' },
      { i: 'id', h: 'Licencia', t: 'Se necesita licencia de conducir. No se necesita endoso de motocicleta.' },
      { i: 'alert', h: 'PIP', t: 'Para la ley de Florida es una motocicleta, así que el PIP del carro no aplica.' },
      { i: 'shield', h: 'Lo que puede ayudar', t: 'Pagos médicos, conductor sin seguro y responsabilidad civil.' },
    ], foot: 'Reglas: ss. 316.003, 322.03, 627.732, E.F., y FLHSMV. La cobertura depende de la póliza.' },
    ru: { title: 'Автоцикл во Флориде коротко', cards: [
      { i: 'check', h: 'Что это', t: 'Два колеса спереди, одно сзади. Руль, сиденья без посадки верхом, дуги безопасности и ремни.' },
      { i: 'id', h: 'Права', t: 'Водительские права нужны. Мотоциклетная отметка — нет.' },
      { i: 'alert', h: 'PIP', t: 'По закону Флориды это мотоцикл, поэтому автомобильный PIP не действует.' },
      { i: 'shield', h: 'Что может помочь', t: 'Медицинские расходы, покрытие UM и ответственность.' },
    ], foot: 'Правила — ст. 316.003, 322.03, 627.732 и FLHSMV. Покрытие зависит от полиса.' },
  },
  life: {
    en: { title: 'How much would your family need?', cards: [
      { i: 'plus', t: 'The years your family would need your income' },
      { i: 'plus', t: 'The mortgage or rent, and debts' },
      { i: 'plus', t: 'Childcare and college' },
      { i: 'plus', t: 'Final expenses' },
      { i: 'minus', t: 'Coverage and assets you already have' },
      { i: 'equals', h: 'The gap', t: 'What life insurance can fill' },
    ], foot: 'An estimate, not a recommendation. Amounts and policy types depend on your family and the policy.' },
    es: { title: '¿Cuánto necesitaría su familia?', cards: [
      { i: 'plus', t: 'Los años que su familia necesitaría su ingreso' },
      { i: 'plus', t: 'La hipoteca o la renta, y las deudas' },
      { i: 'plus', t: 'El cuidado de los niños y la universidad' },
      { i: 'plus', t: 'Los gastos finales' },
      { i: 'minus', t: 'La cobertura y los bienes que ya tiene' },
      { i: 'equals', h: 'El hueco', t: 'Lo que puede llenar un seguro de vida' },
    ], foot: 'Es un cálculo aproximado, no una recomendación. Los montos y el tipo de póliza dependen de su familia y de la póliza.' },
    ru: { title: 'Сколько понадобится вашей семье?', cards: [
      { i: 'plus', t: 'Годы, на которые семье нужен ваш доход' },
      { i: 'plus', t: 'Ипотека или аренда и долги' },
      { i: 'plus', t: 'Детский сад и колледж' },
      { i: 'plus', t: 'Расходы на похороны' },
      { i: 'minus', t: 'Покрытие и активы, которые уже есть' },
      { i: 'equals', h: 'Дыра', t: 'То, что может закрыть страхование жизни' },
    ], foot: 'Это оценка, а не рекомендация. Суммы и тип полиса зависят от семьи и от полиса.' },
  },
};
export { FIG };

function T(x, y, lines, o = {}) {
  const { size = 22, weight = 400, fill = C.navy, anchor = 'start', lh = Math.round(size * 1.3) } = o;
  const spans = lines.map((ln, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : lh}">${esc(ln)}</tspan>`).join('');
  return `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${spans}</text>`;
}

function infographic(line, L) {
  const f = FIG[line][L];
  const W = 600;
  const cyr = L === 'ru';
  const k = cyr ? 0.9 : 1; // Cyrillic glyphs run wider
  let body = '';
  let y = 56;
  const tl = wrap(f.title, Math.round(30 * k));
  body += T(W / 2, y, tl, { size: 30, weight: 700, anchor: 'middle', lh: 38 });
  y += (tl.length - 1) * 38 + 16;
  if (f.sub) {
    const sl = wrap(f.sub, Math.round(42 * k));
    y += 26;
    body += T(W / 2, y, sl, { size: 22, fill: C.grey, anchor: 'middle', lh: 28 });
    y += (sl.length - 1) * 28;
  }
  y += 26;
  for (const c of f.cards) {
    const hl = c.h ? wrap(c.h, Math.round(31 * k)) : [];
    const tlines = wrap(c.t, Math.round(36 * k));
    const lh = 29;
    const inner = hl.length * lh + tlines.length * lh;
    const h = Math.max(78, inner + 30);
    const fillCard = c.i === 'equals' ? '#fff7e6' : C.white;
    body += `<rect x="24" y="${y}" width="${W - 48}" height="${h}" rx="16" fill="${fillCard}" stroke="${c.i === 'equals' ? C.gold : '#d6e0ee'}" stroke-width="2"/>`;
    body += `<g transform="translate(70 ${y + h / 2})"><circle r="26" fill="${ICON_BG[c.i]}"/>${ICON[c.i]}</g>`;
    let ty = y + (h - inner) / 2 + 22;
    if (hl.length) { body += T(114, ty, hl, { size: 23, weight: 700, lh }); ty += hl.length * lh; }
    body += T(114, ty, tlines, { size: 22, fill: c.h ? C.grey : C.navy, lh, weight: c.h ? 400 : 600 });
    y += h + 14;
  }
  const fl = wrap(f.foot, Math.round(46 * k));
  y += 22;
  body += T(W / 2, y, fl, { size: 19, fill: C.grey, anchor: 'middle', lh: 25 });
  y += (fl.length - 1) * 25 + 30;
  const H = Math.round(y);
  const alt = [f.title, f.sub, ...f.cards.map((c) => [c.h, c.t].filter(Boolean).join(': ')), f.foot].filter(Boolean).join('. ');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(alt)}">
<title>${esc(f.title)}</title>
<style>text{font-family:${FONT}}</style>
<rect width="${W}" height="${H}" rx="24" fill="${C.bg}"/>
${body}
</svg>
`;
  return { svg, W, H };
}

function ogSvg(line) {
  // 1200x630: illustration with a short brand strip. No language-specific text.
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<svg x="0" y="0" width="1200" height="630" viewBox="240 90 1200 630" preserveAspectRatio="xMidYMid slice">${sceneInner(line)}</svg>
<rect x="0" y="560" width="1200" height="70" fill="${C.navy}"/>
<text x="40" y="606" font-family="${FONT}" font-size="30" font-weight="700" fill="#ffffff">M&amp;K Agency</text>
<text x="1160" y="606" font-family="${FONT}" font-size="26" fill="${C.gold}" text-anchor="end">mkagencyinc.com · EN · ES · RU</text>
</svg>`;
}

const sizes = {};
for (const line of LINES) {
  await sharp(Buffer.from(sceneSvg(line))).webp({ quality: 82 }).toFile(path.join(OUT, `${line}-hero.webp`));
  await sharp(Buffer.from(ogSvg(line))).webp({ quality: 85 }).toFile(path.join(OG, `rec-${line}.webp`));
  for (const L of ['en', 'es', 'ru']) {
    const { svg, W, H } = infographic(line, L);
    fs.writeFileSync(path.join(OUT, `${line}-${L}.svg`), svg);
    sizes[`${line}-${L}`] = { width: W, height: H };
  }
}
fs.writeFileSync(path.join(OUT, 'sizes.json'), JSON.stringify(sizes, null, 2) + '\n');
console.log('rec media built:', Object.keys(sizes).length, 'infographics,', LINES.length, 'heroes and OG images');
