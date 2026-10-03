import type { Lang, Source } from '../../types';

// Official / primary sources for the guide pages. Labels are localized; the
// documents themselves are in English. Checked on 2026-10-03.

type Key =
  | 'flhsmv' | 'pip' | 'um' | 'crashReport' | 'crashReportDriver'
  | 'deductibles' | 'hurricaneDef' | 'mitigation' | 'claimDeadline' | 'oirTropical' | 'dfsHurricane'
  | 'citizensFlood' | 'floodsmart' | 'condoMaster' | 'newResident';

const EN_SUFFIX: Record<Lang, string> = { en: '', es: ' (en inglés)', ru: ' (на английском)' };

const S: Record<Key, { url: string; label: Record<Lang, string> }> = {
  flhsmv: { url: 'https://www.flhsmv.gov/insurance/', label: {
    en: 'Florida DHSMV: Florida insurance requirements (PIP and PDL)',
    es: 'Florida DHSMV: requisitos de seguro de auto en Florida (PIP y PDL)',
    ru: 'Florida DHSMV: обязательная автостраховка во Флориде (PIP и PDL)' } },
  pip: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.736.html', label: {
    en: 'Florida Statutes s. 627.736: required PIP benefits (80% medical, 60% lost income, 14-day rule)',
    es: 'Estatutos de Florida, s. 627.736: beneficios obligatorios de PIP (80% médico, 60% de ingresos, regla de 14 días)',
    ru: 'Статуты Флориды, s. 627.736: обязательные выплаты PIP (80% лечения, 60% дохода, правило 14 дней)' } },
  um: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.727.html', label: {
    en: 'Florida Statutes s. 627.727: uninsured and underinsured motorist coverage',
    es: 'Estatutos de Florida, s. 627.727: cobertura de conductor sin seguro o con seguro insuficiente',
    ru: 'Статуты Флориды, s. 627.727: покрытие от незастрахованных и недостаточно застрахованных водителей' } },
  crashReport: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.065.html', label: {
    en: 'Florida Statutes s. 316.065: duty to report crashes with injury or at least $2,000 of apparent damage',
    es: 'Estatutos de Florida, s. 316.065: obligación de reportar accidentes con lesiones o daños aparentes de $2,000 o más',
    ru: 'Статуты Флориды, s. 316.065: обязанность сообщать о ДТП с пострадавшими или ущербом от $2,000' } },
  crashReportDriver: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.066.html', label: {
    en: 'Florida Statutes s. 316.066: crash reports, proof of insurance and the driver’s 10-day written report',
    es: 'Estatutos de Florida, s. 316.066: informes de accidente, prueba de seguro y el informe escrito del conductor en 10 días',
    ru: 'Статуты Флориды, s. 316.066: отчёты о ДТП, подтверждение страховки и письменный отчёт водителя в течение 10 дней' } },
  deductibles: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.701.html', label: {
    en: 'Florida Statutes s. 627.701: hurricane deductible options, dollar amount on the declarations page, once per calendar year',
    es: 'Estatutos de Florida, s. 627.701: opciones de deducible de huracán, monto en dólares en la página de declaraciones, una vez por año calendario',
    ru: 'Статуты Флориды, s. 627.701: варианты ураганной франшизы, сумма в долларах на декларационной странице, раз в календарный год' } },
  hurricaneDef: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.4025.html', label: {
    en: 'Florida Statutes s. 627.4025: definition of “hurricane” and when the hurricane deductible applies',
    es: 'Estatutos de Florida, s. 627.4025: definición de “huracán” y cuándo se aplica el deducible de huracán',
    ru: 'Статуты Флориды, s. 627.4025: определение «урагана» и период, когда действует ураганная франшиза' } },
  mitigation: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.0629.html', label: {
    en: 'Florida Statutes s. 627.0629: wind mitigation credits and deductible reductions',
    es: 'Estatutos de Florida, s. 627.0629: créditos y reducciones de deducible por mitigación de viento',
    ru: 'Статуты Флориды, s. 627.0629: кредиты и снижение франшизы за wind mitigation' } },
  claimDeadline: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.70132.html', label: {
    en: 'Florida Statutes s. 627.70132: deadlines to report property claims (1 year, 18 months for supplemental claims)',
    es: 'Estatutos de Florida, s. 627.70132: plazos para reportar reclamos de propiedad (1 año; 18 meses para reclamos suplementarios)',
    ru: 'Статуты Флориды, s. 627.70132: сроки заявления клеймов по имуществу (1 год; 18 месяцев для дополнительных клеймов)' } },
  oirTropical: { url: 'https://www.floir.gov/docs-sf/default-source/informational-memoranda/oir-16-07m.pdf', label: {
    en: 'Florida OIR memorandum OIR-16-07M: damage before a storm is declared a hurricane uses the regular deductible',
    es: 'Memorando OIR-16-07M de la OIR de Florida: los daños antes de que la tormenta sea declarada huracán usan el deducible regular',
    ru: 'Меморандум OIR-16-07M (Florida OIR): ущерб до объявления шторма ураганом идёт по обычной франшизе' } },
  dfsHurricane: { url: 'https://www.myfloridacfo.com/division/consumers/consumerprotections/floridashurricanedeductible', label: {
    en: 'Florida Department of Financial Services: Florida’s hurricane deductible',
    es: 'Departamento de Servicios Financieros de Florida: el deducible de huracán en Florida',
    ru: 'Департамент финансовых услуг Флориды: ураганная франшиза во Флориде' } },
  citizensFlood: { url: 'https://www.citizensfla.com/flood', label: {
    en: 'Citizens Property Insurance: flood insurance requirement',
    es: 'Citizens Property Insurance: requisito de seguro de inundación',
    ru: 'Citizens Property Insurance: требование о страховке от наводнения' } },
  floodsmart: { url: 'https://www.floodsmart.gov/whats-covered', label: {
    en: 'FloodSmart (NFIP): what flood insurance covers',
    es: 'FloodSmart (NFIP): qué cubre el seguro de inundación',
    ru: 'FloodSmart (NFIP): что покрывает страховка от наводнения' } },
  condoMaster: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0718/Sections/0718.111.html', label: {
    en: 'Florida Statutes s. 718.111(11): what a condo association’s master policy must and need not cover',
    es: 'Estatutos de Florida, s. 718.111(11): qué cubre y qué no la póliza maestra de la asociación de condominio',
    ru: 'Статуты Флориды, s. 718.111(11): что покрывает и чего не покрывает мастер-полис ассоциации кондоминиума' } },
  newResident: { url: 'https://www.flhsmv.gov/new-resident/', label: {
    en: 'Florida DHSMV: new residents (driver license within 30 days, Florida insurance to title and register)',
    es: 'Florida DHSMV: nuevos residentes (licencia en 30 días, seguro de Florida para titular y registrar)',
    ru: 'Florida DHSMV: новым жителям (права Флориды в течение 30 дней, страховка Флориды для регистрации машины)' } },
};

/** Localized source list for a page, in the given order. */
export function sources(lang: Lang, keys: Key[]): Source[] {
  return keys.map((k) => ({ url: S[k].url, label: S[k].label[lang] + EN_SUFFIX[lang] }));
}
