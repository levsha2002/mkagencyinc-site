// Shared flat illustrations for the rec pages, OG images and videos.
// No people, no logos, no text. Palette from scripts/build-protect-images.mjs.
export const C = {
  navy: '#07274f', gold: '#e0a93b', blue: '#0c5bd6', blue2: '#5b8def', sky: '#eaf2ff', sky2: '#d6e6ff',
  green: '#2f8f5b', green2: '#4cae72', sand: '#f1dfb8', dirt: '#b98a5a', dirt2: '#9c6f43', grey: '#4b5b70',
  light: '#cfd8e6', bg: '#f6f9fe', white: '#ffffff', red: '#d9534f', water: '#2f7fd8', water2: '#5aa2ec',
};

const wheel = (x, y, r, o = {}) => {
  const { tire = C.navy, rim = C.light, hub = C.navy, tread = false } = o;
  return `<g><circle cx="${x}" cy="${y}" r="${r}" fill="${tire}"/>${tread ? `<circle cx="${x}" cy="${y}" r="${r - 4}" fill="none" stroke="#1b3b66" stroke-width="6" stroke-dasharray="8 7"/>` : ''}<circle cx="${x}" cy="${y}" r="${r * 0.6}" fill="${rim}"/><circle cx="${x}" cy="${y}" r="${r * 0.18}" fill="${hub}"/></g>`;
};

export function palm(x, y, s = 1, flip = false) {
  const k = flip ? -1 : 1;
  return `<g transform="translate(${x} ${y}) scale(${s * k} ${s})">
<path d="M0 0 C 8 -90 18 -170 40 -250" stroke="#8a6a45" stroke-width="16" fill="none" stroke-linecap="round"/>
<g fill="${C.green}">
<path d="M40 -250 C 0 -270 -50 -260 -80 -225 C -40 -245 0 -245 40 -250Z"/>
<path d="M40 -250 C 70 -290 120 -295 150 -270 C 110 -275 75 -265 40 -250Z"/>
<path d="M40 -250 C 90 -250 135 -225 150 -190 C 115 -220 80 -235 40 -250Z"/>
<path d="M40 -250 C 10 -300 -30 -310 -60 -290 C -25 -290 10 -275 40 -250Z"/>
<path d="M40 -250 C 30 -215 0 -185 -30 -170 C -5 -200 15 -225 40 -250Z"/>
</g></g>`;
}
const cloud = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#ffffff" opacity="0.95"><ellipse cx="0" cy="0" rx="70" ry="26"/><ellipse cx="-40" cy="8" rx="45" ry="20"/><ellipse cx="45" cy="6" rx="50" ry="22"/><ellipse cx="5" cy="-18" rx="40" ry="24"/></g>`;
const sun = (x, y, r = 70) => `<circle cx="${x}" cy="${y}" r="${r + 28}" fill="${C.gold}" opacity="0.18"/><circle cx="${x}" cy="${y}" r="${r}" fill="${C.gold}"/>`;
const sky = (W, H, id) => `<defs><linearGradient id="sky-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.sky2}"/><stop offset="1" stop-color="${C.bg}"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#sky-${id})"/>`;
const waves = (y, W, color, amp = 10, step = 90) => {
  let d = `M0 ${y}`;
  for (let x = 0; x <= W; x += step) d += ` q ${step / 4} ${-amp} ${step / 2} 0 t ${step / 2} 0`;
  return `<path d="${d} V 2000 H 0 Z" fill="${color}"/>`;
};
const road = (y, W) => `<rect x="0" y="${y}" width="${W}" height="200" fill="#5c6b80"/><rect x="0" y="${y}" width="${W}" height="10" fill="#8796ab"/><line x1="0" y1="${y + 95}" x2="${W}" y2="${y + 95}" stroke="#f5f7fb" stroke-width="10" stroke-dasharray="70 50"/><rect x="0" y="${y + 200}" width="${W}" height="400" fill="${C.green2}"/>`;

/* ----------------------------------------------------------- vehicles (local coords, ground at y=0) */
export function motorcycle() {
  return `<g>
${wheel(0, -62, 62)}${wheel(300, -62, 62)}
<path d="M0 -62 L95 -150 L235 -165 L300 -62" stroke="${C.navy}" stroke-width="14" fill="none" stroke-linejoin="round"/>
<path d="M-50 -95 C -30 -140 20 -150 60 -140 L 40 -120 C 10 -125 -20 -115 -50 -95Z" fill="${C.navy}"/>
<rect x="105" y="-150" width="85" height="70" rx="12" fill="${C.grey}"/>
<path d="M120 -110 C 80 -60 20 -55 -40 -55" stroke="${C.gold}" stroke-width="14" fill="none" stroke-linecap="round"/>
<path d="M50 -165 C 60 -178 110 -182 130 -176 L 125 -160 L 55 -155Z" fill="#1b2a40"/>
<path d="M125 -190 C 150 -215 230 -215 245 -185 L 230 -160 L 130 -160Z" fill="${C.blue}"/>
<path d="M150 -205 L 210 -205" stroke="${C.blue2}" stroke-width="8" stroke-linecap="round"/>
<path d="M245 -185 L 300 -62" stroke="${C.navy}" stroke-width="12"/>
<path d="M232 -228 L 262 -238" stroke="${C.navy}" stroke-width="10" stroke-linecap="round"/><path d="M245 -233 L 250 -190" stroke="${C.navy}" stroke-width="9"/>
<circle cx="272" cy="-196" r="16" fill="${C.gold}"/><circle cx="272" cy="-196" r="8" fill="#fff6dd"/>
<path d="M255 -120 C 290 -140 330 -125 345 -95" stroke="${C.navy}" stroke-width="10" fill="none"/>
</g>`;
}
export function pwc() {
  return `<g>
<path d="M-20 -10 L 330 -10 C 380 -20 405 -45 410 -70 L 330 -82 L 20 -82 C 0 -70 -15 -45 -20 -10Z" fill="${C.white}" stroke="${C.navy}" stroke-width="6"/>
<path d="M-10 -38 L 350 -38 C 375 -42 392 -52 400 -62 L 350 -60 L 0 -60Z" fill="${C.blue}"/>
<path d="M60 -82 C 70 -110 190 -115 215 -95 L 210 -82Z" fill="#1b2a40"/>
<path d="M235 -82 L 262 -150" stroke="${C.navy}" stroke-width="12" stroke-linecap="round"/>
<path d="M240 -155 L 290 -145" stroke="${C.navy}" stroke-width="11" stroke-linecap="round"/>
<path d="M290 -82 L 345 -82 L 315 -112 Z" fill="${C.gold}"/>
<g fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" opacity="0.95">
<path d="M-40 -20 C -90 -40 -120 -80 -130 -120"/><path d="M-50 -5 C -110 -10 -160 -40 -190 -80"/><path d="M-30 5 C -90 15 -150 5 -200 -20"/></g>
</g>`;
}
export function boat() {
  return `<g>
<path d="M-40 -110 L 520 -110 C 600 -112 650 -130 690 -170 L 600 -170 L -30 -170Z" fill="${C.white}" stroke="${C.navy}" stroke-width="6"/>
<path d="M-40 -110 L 520 -110 C 590 -112 640 -125 670 -150 L 520 -150 L -38 -150Z" fill="${C.light}" opacity="0.6"/>
<path d="M-36 -125 L 540 -125 C 590 -128 625 -138 650 -152" stroke="${C.blue}" stroke-width="12" fill="none"/>
<rect x="240" y="-250" width="110" height="80" rx="10" fill="${C.light}" stroke="${C.navy}" stroke-width="5"/>
<path d="M350 -250 L 385 -205 L 350 -205Z" fill="${C.blue2}" opacity="0.8"/>
<path d="M230 -170 L 230 -340 M 370 -170 L 370 -340" stroke="${C.navy}" stroke-width="9"/>
<rect x="205" y="-358" width="190" height="22" rx="8" fill="${C.navy}"/>
<rect x="-95" y="-215" width="55" height="110" rx="12" fill="${C.navy}"/><rect x="-88" y="-205" width="40" height="20" rx="5" fill="${C.gold}"/>
<rect x="60" y="-205" width="80" height="35" rx="8" fill="${C.light}" stroke="${C.navy}" stroke-width="4"/>
</g>`;
}
export function atv() {
  return `<g>
${wheel(0, -62, 62, { tread: true })}${wheel(270, -62, 62, { tread: true })}
<rect x="40" y="-150" width="190" height="60" rx="16" fill="${C.grey}"/>
<path d="M-75 -110 C -60 -175 50 -180 70 -125 L 70 -112 L -75 -100Z" fill="${C.blue}"/>
<path d="M200 -125 C 215 -180 330 -180 345 -112 L 345 -100 L 200 -112Z" fill="${C.blue}"/>
<path d="M60 -165 C 80 -185 160 -188 185 -170 L 180 -150 L 65 -150Z" fill="#1b2a40"/>
<path d="M190 -150 L 222 -215" stroke="${C.navy}" stroke-width="11" stroke-linecap="round"/><path d="M200 -220 L 252 -210" stroke="${C.navy}" stroke-width="10" stroke-linecap="round"/>
<path d="M-85 -128 L -20 -128 M 270 -128 L 345 -128" stroke="${C.navy}" stroke-width="7"/>
<circle cx="330" cy="-145" r="12" fill="${C.gold}"/>
<rect x="-90" y="-140" width="70" height="10" rx="4" fill="${C.navy}"/>
</g>`;
}
export function golfCart() {
  return `<g>
${wheel(0, -42, 42)}${wheel(270, -42, 42)}
<path d="M-55 -60 L -50 -140 L 120 -140 L 140 -200 L 210 -200 L 225 -140 L 330 -125 C 345 -110 345 -75 330 -60Z" fill="${C.white}" stroke="${C.navy}" stroke-width="6"/>
<path d="M-50 -95 L 330 -95" stroke="${C.blue}" stroke-width="14"/>
<path d="M30 -140 L 40 -230 L 130 -230 L 120 -140Z" fill="${C.blue}"/>
<rect x="20" y="-165" width="110" height="25" rx="8" fill="#1b2a40"/>
<path d="M-40 -140 L -40 -330 M 280 -128 L 300 -330" stroke="${C.navy}" stroke-width="10"/>
<rect x="-70" y="-350" width="400" height="26" rx="10" fill="${C.gold}"/>
<path d="M300 -330 L 255 -150" stroke="${C.blue2}" stroke-width="6" opacity="0.7"/>
<ellipse cx="215" cy="-205" rx="20" ry="8" fill="none" stroke="${C.navy}" stroke-width="7" transform="rotate(-30 215 -205)"/>
<path d="M215 -205 L 200 -150" stroke="${C.navy}" stroke-width="7"/>
</g>`;
}
export function autocycle() {
  return `<g>
${wheel(0, -55, 55)}${wheel(360, -60, 60)}
<path d="M-70 -70 C -60 -120 -10 -140 60 -140 L 200 -140 C 270 -135 360 -125 430 -95 C 445 -85 440 -65 425 -60 L -60 -55Z" fill="${C.gold}" stroke="${C.navy}" stroke-width="6"/>
<path d="M-50 -95 L 420 -88" stroke="${C.navy}" stroke-width="8"/>
<path d="M95 -140 C 100 -205 165 -205 170 -140" fill="none" stroke="${C.navy}" stroke-width="12"/>
<path d="M135 -140 C 140 -190 195 -190 200 -140" fill="none" stroke="${C.grey}" stroke-width="10"/>
<path d="M235 -140 L 270 -185" stroke="${C.blue2}" stroke-width="9" stroke-linecap="round"/>
<path d="M60 -140 L 90 -170 L 200 -170 L 215 -140Z" fill="#1b2a40"/>
<path d="M400 -85 L 435 -82" stroke="#fff6dd" stroke-width="10" stroke-linecap="round"/>
<path d="M300 -70 C 320 -120 400 -120 420 -70" fill="${C.navy}"/>
</g>`;
}
export function lifeHome() {
  return `<g>
<path d="M-200 -330 L 0 -470 L 200 -330Z" fill="${C.navy}"/>
<rect x="-170" y="-330" width="340" height="330" fill="${C.white}" stroke="${C.navy}" stroke-width="6"/>
<rect x="-35" y="-150" width="70" height="150" rx="6" fill="${C.blue}"/>
<rect x="-140" y="-280" width="80" height="70" rx="6" fill="${C.sky2}" stroke="${C.navy}" stroke-width="5"/>
<rect x="60" y="-280" width="80" height="70" rx="6" fill="${C.sky2}" stroke="${C.navy}" stroke-width="5"/>
<path d="M-260 -470 C -200 -620 200 -620 260 -470 C 220 -495 180 -495 130 -470 C 90 -495 40 -500 0 -470 C -40 -500 -90 -495 -130 -470 C -180 -495 -220 -495 -260 -470Z" fill="${C.gold}"/>
<path d="M0 -600 L 0 -470" stroke="${C.navy}" stroke-width="8"/>
<g transform="translate(270 -120)"><path d="M0 -110 L 85 -80 L 85 -10 C 85 50 40 85 0 105 C -40 85 -85 50 -85 -10 L -85 -80Z" fill="${C.blue}"/><path d="M0 40 C -60 0 -50 -50 -20 -50 C -8 -50 0 -40 0 -32 C 0 -40 8 -50 20 -50 C 50 -50 60 0 0 40Z" fill="#ffffff"/></g>
</g>`;
}

/* ----------------------------------------------------------- full scenes 1440x900 */
const W = 1440, H = 900;
const scenes = {
  motorcycle: () => `${sky(W, H, 'm')}${sun(1260, 170)}${cloud(420, 150, 1.1)}${cloud(900, 110, 0.8)}${palm(1340, 660, 1.1, true)}${palm(640, 660, 0.85)}${road(640, W)}<g transform="translate(860 760) scale(1.25)">${motorcycle()}</g>`,
  'jet-ski': () => `${sky(W, H, 'j')}${sun(1250, 160)}${cloud(500, 140)}${cloud(1000, 100, 0.7)}<path d="M0 560 C 200 530 400 545 640 550 L 640 580 L 0 590Z" fill="${C.green}" opacity="0.6"/>${waves(570, W, C.water2, 12)}${waves(640, W, C.water, 14, 120)}<circle cx="1330" cy="640" r="26" fill="${C.red}"/><rect x="1326" y="590" width="8" height="40" fill="${C.navy}"/><g transform="translate(830 735) scale(1.25)">${pwc()}</g>${waves(760, W, C.water, 10, 140)}`,
  boat: () => `${sky(W, H, 'b')}${cloud(380, 140, 1.1)}${cloud(780, 90, 0.8)}<g transform="translate(1250 190)" opacity="0.9"><circle r="78" fill="none" stroke="${C.grey}" stroke-width="12"/><path d="M0 -78 C 70 -78 90 0 40 30 M0 78 C -70 78 -90 0 -40 -30" stroke="${C.grey}" stroke-width="16" fill="none" stroke-linecap="round"/><circle r="16" fill="${C.grey}"/></g><rect x="0" y="520" width="${W}" height="40" fill="${C.sand}"/>${palm(250, 540, 0.8)}${waves(560, W, C.water2, 10)}<rect x="560" y="600" width="18" height="140" fill="#8a6a45"/><rect x="1360" y="600" width="18" height="140" fill="#8a6a45"/><g transform="translate(720 770) scale(1.05)">${boat()}</g>${waves(690, W, C.water, 14, 120)}`,
  'off-road': () => `${sky(W, H, 'o')}${sun(1270, 160)}${cloud(450, 130)}<path d="M0 560 C 300 470 520 520 760 500 C 1000 480 1200 430 1440 480 V 900 H 0Z" fill="${C.green}"/><path d="M0 660 C 300 610 700 650 1000 630 C 1200 615 1350 640 1440 650 V 900 H 0Z" fill="${C.dirt}"/><path d="M0 760 C 400 730 900 760 1440 740 V 900 H 0Z" fill="${C.dirt2}"/>${palm(1360, 640, 0.9, true)}<g transform="translate(900 770) scale(1.25)">${atv()}</g>`,
  'golf-cart': () => `${sky(W, H, 'g')}${sun(1270, 150)}${cloud(500, 120)}${palm(760, 640, 0.9)}${palm(1390, 640, 1, true)}${road(640, W)}<g transform="translate(560 480)"><rect x="-6" y="0" width="12" height="170" fill="${C.grey}"/><rect x="-55" y="-70" width="110" height="80" rx="10" fill="${C.green}" stroke="#fff" stroke-width="5"/><path d="M-30 -10 L -30 -45 L 25 -45" stroke="#fff" stroke-width="7" fill="none"/><circle cx="-20" cy="-5" r="8" fill="#fff"/><circle cx="18" cy="-5" r="8" fill="#fff"/></g><g transform="translate(870 770) scale(1.1)">${golfCart()}</g>`,
  autocycle: () => `${sky(W, H, 'a')}${sun(1260, 170)}${cloud(420, 140)}${cloud(950, 100, 0.8)}<rect x="0" y="520" width="${W}" height="120" fill="${C.water2}"/>${waves(560, W, C.water, 8, 120)}<rect x="0" y="630" width="${W}" height="20" fill="${C.sand}"/>${road(645, W)}${palm(560, 650, 0.8)}<g transform="translate(840 765) scale(1.2)">${autocycle()}</g>`,
  life: () => `${sky(W, H, 'l')}${sun(1290, 150, 60)}${cloud(420, 140)}${cloud(860, 90, 0.7)}<rect x="0" y="700" width="${W}" height="200" fill="${C.green2}"/><path d="M0 700 C 400 680 900 690 1440 680 V 720 H 0Z" fill="${C.green}"/>${palm(700, 710, 0.85)}<g transform="translate(1030 720) scale(0.95)">${lifeHome()}</g>`,
};
export const LINES = Object.keys(scenes);
export function sceneSvg(line, w = W, h = H, viewBox = `0 0 ${W} ${H}`) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="${viewBox}" preserveAspectRatio="xMidYMid slice">${scenes[line]()}</svg>`;
}
export function sceneInner(line) { return scenes[line](); }
