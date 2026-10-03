import type { Lang, Source } from '../../types';

// Official / primary sources used by the local pages. Each page picks the ones
// it relies on. Labels are localized; the documents themselves are in English.
// Checked on 2026-10-03.

type Key =
  | 'flhsmv' | 'pip' | 'um' | 'iiiUm' | 'hb837' | 'turnpike' | 'krome' | 'metroExpress'
  | 'andrew' | 'andrewCat5' | 'andrewReanalysis' | 'wilma'
  | 'acsHomestead' | 'acsCutlerBay' | 'acsKendall' | 'acsMiamiDade' | 'acsBroward'
  | 'roofAge' | 'deductibles' | 'mitigation' | 'claimDeadline' | 'windForm' | 'lossAssessment'
  | 'floodsmart' | 'mdFloodMaps' | 'mdSurge' | 'browardFlood' | 'condoInspections' | 'msfh'
  | 'cutlerBayTown' | 'homesteadCity' | 'fbcHvhz' | 'mdProductControl' | 'browardBora' | 'pip2026' | 'condoMaster' | 'crashReport';

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
  iiiUm: { url: 'https://www.iii.org/fact-statistic/facts-statistics-uninsured-motorists', label: {
    en: 'Insurance Information Institute: uninsured motorist estimates by state (Insurance Research Council, 2023 data)',
    es: 'Insurance Information Institute: estimados de conductores sin seguro por estado (Insurance Research Council, datos de 2023)',
    ru: 'Insurance Information Institute: доля незастрахованных водителей по штатам (Insurance Research Council, данные 2023 г.)' } },
  hb837: { url: 'https://www.flsenate.gov/Session/Bill/2023/837', label: {
    en: 'Florida Senate: HB 837 (2023), modified comparative negligence and the 2-year negligence deadline',
    es: 'Senado de Florida: HB 837 (2023), negligencia comparativa modificada y plazo de 2 años',
    ru: 'Сенат Флориды: HB 837 (2023), модифицированная сравнительная вина и срок 2 года' } },
  turnpike: { url: 'https://floridasturnpike.com/wp-content/uploads/2020/05/Turnpike-Extension.pdf', label: {
    en: 'Florida’s Turnpike Enterprise: Homestead Extension (SR 821) interchange map',
    es: 'Florida’s Turnpike Enterprise: mapa de salidas de la Extensión Homestead (SR 821)',
    ru: 'Florida’s Turnpike Enterprise: карта развязок Homestead Extension (SR 821)' } },
  krome: { url: 'https://www.fdotmiamidade.com/news/article/fdot-completes-final-segment-of-state-road-sr-997krome-avenue-enhancement-projects', label: {
    en: 'FDOT District Six: final segment of the SR 997/Krome Avenue projects completed (2021)',
    es: 'FDOT Distrito Seis: terminan las obras de la SR 997/Krome Avenue (2021)',
    ru: 'FDOT, District Six: завершение реконструкции SR 997/Krome Avenue (2021)' } },
  metroExpress: { url: 'https://www.miamidade.gov/global/release.page?Mduid_release=rel1761242720867131', label: {
    en: 'Miami-Dade County: Metro Express bus rapid transit, Florida City to Dadeland South (Oct. 2025)',
    es: 'Condado de Miami-Dade: Metro Express, autobús rápido de Florida City a Dadeland South (oct. 2025)',
    ru: 'Округ Miami-Dade: скоростной автобус Metro Express, Florida City — Dadeland South (окт. 2025)' } },
  andrew: { url: 'https://www.nhc.noaa.gov/1992andrew.html', label: {
    en: 'National Hurricane Center: Hurricane Andrew report (damage, storm tide)',
    es: 'Centro Nacional de Huracanes: informe del huracán Andrew (daños, marea de tormenta)',
    ru: 'Национальный центр ураганов США: отчёт об урагане Andrew (ущерб, нагонная волна)' } },
  andrewCat5: { url: 'https://www.nhc.noaa.gov/news/NOAA_pr_8-21-02.html', label: {
    en: 'NOAA (2002): Hurricane Andrew upgraded to Category 5',
    es: 'NOAA (2002): Andrew se reclasifica como categoría 5',
    ru: 'NOAA (2002): Andrew переквалифицирован в ураган 5-й категории' } },
  andrewReanalysis: { url: 'https://www.nhc.noaa.gov/pdf/04landsea.pdf', label: {
    en: 'Landsea et al. (2004): reanalysis of Hurricane Andrew’s landfall intensity',
    es: 'Landsea et al. (2004): reanálisis de la intensidad de Andrew al tocar tierra',
    ru: 'Landsea и др. (2004): переоценка силы урагана Andrew при выходе на сушу' } },
  wilma: { url: 'https://www.nhc.noaa.gov/data/tcr/AL252005_Wilma.pdf', label: {
    en: 'National Hurricane Center: Tropical Cyclone Report, Hurricane Wilma (2005)',
    es: 'Centro Nacional de Huracanes: informe del huracán Wilma (2005)',
    ru: 'Национальный центр ураганов США: отчёт об урагане Wilma (2005)' } },
  acsHomestead: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25034?g=160XX00US1232275', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: housing and commuting (tables B25034, B25024, B25003, B08303, B08013, B08301), Homestead',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): vivienda y tiempo de traslado al trabajo (B25034, B25024, B25003, B08303, B08013, B08301), Homestead',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): жильё и поездки на работу (B25034, B25024, B25003, B08303, B08013, B08301), Homestead' } },
  acsCutlerBay: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25034?g=160XX00US1215968', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: housing and commuting (B25034, B25024, B25003, B08303, B08013, B08301), Cutler Bay',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): vivienda y tiempo de traslado al trabajo (B25034, B25024, B25003, B08303, B08013, B08301), Cutler Bay',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): жильё и поездки на работу (B25034, B25024, B25003, B08303, B08013, B08301), Cutler Bay' } },
  acsKendall: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25034?g=160XX00US1236100', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: housing and commuting (B25034, B25024, B25003, B08303, B08013, B08301), Kendall CDP',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): vivienda y tiempo de traslado al trabajo (B25034, B25024, B25003, B08303, B08013, B08301), Kendall',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): жильё и поездки на работу (B25034, B25024, B25003, B08303, B08013, B08301), Kendall' } },
  acsMiamiDade: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=050XX00US12086', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: housing and commuting (B25024, B25034, B25003, B08303, B08013), Miami-Dade County',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): vivienda y traslado al trabajo (B25024, B25034, B25003, B08303, B08013), Miami-Dade',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): жильё и поездки на работу (B25024, B25034, B25003, B08303, B08013), Miami-Dade' } },
  acsBroward: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=050XX00US12011', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: housing and commuting (B25024, B25034, B25003, B08303, B08013), Broward County',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): vivienda y traslado al trabajo (B25024, B25034, B25003, B08303, B08013), Broward',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): жильё и поездки на работу (B25024, B25034, B25003, B08303, B08013), Broward' } },
  roofAge: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.7011.html', label: {
    en: 'Florida Statutes s. 627.7011: roof-age rule (15 years), law and ordinance coverage, replacement cost',
    es: 'Estatutos de Florida, s. 627.7011: regla de antigüedad del techo (15 años), ley y ordenanza, costo de reemplazo',
    ru: 'Статуты Флориды, s. 627.7011: правило о возрасте крыши (15 лет), law and ordinance, replacement cost' } },
  deductibles: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.701.html', label: {
    en: 'Florida Statutes s. 627.701: hurricane deductible options and the calendar-year rule',
    es: 'Estatutos de Florida, s. 627.701: opciones de deducible de huracán y la regla del año calendario',
    ru: 'Статуты Флориды, s. 627.701: варианты ураганной франшизы и правило календарного года' } },
  mitigation: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.0629.html', label: {
    en: 'Florida Statutes s. 627.0629: required wind mitigation credits',
    es: 'Estatutos de Florida, s. 627.0629: créditos obligatorios por mitigación de viento',
    ru: 'Статуты Флориды, s. 627.0629: обязательные кредиты за защиту от ветра (wind mitigation)' } },
  claimDeadline: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.70132.html', label: {
    en: 'Florida Statutes s. 627.70132: property claim notice deadlines (1 year, 18 months)',
    es: 'Estatutos de Florida, s. 627.70132: plazos para avisar un reclamo de propiedad (1 año, 18 meses)',
    ru: 'Статуты Флориды, s. 627.70132: сроки заявления имущественного клейма (1 год, 18 месяцев)' } },
  windForm: { url: 'https://www.myfloridacfo.com/division/consumers/storm/mitigation-notices-inspections-and-forms', label: {
    en: 'Florida Department of Financial Services: wind mitigation inspection form OIR-B1-1802',
    es: 'Departamento de Servicios Financieros de Florida: formulario de mitigación de viento OIR-B1-1802',
    ru: 'Департамент финансовых услуг Флориды: форма wind mitigation OIR-B1-1802' } },
  lossAssessment: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.714.html', label: {
    en: 'Florida Statutes s. 627.714: condo unit owner loss assessment coverage',
    es: 'Estatutos de Florida, s. 627.714: cobertura de evaluación por pérdida para dueños de condominio',
    ru: 'Статуты Флориды, s. 627.714: покрытие loss assessment для владельцев кондо' } },
  floodsmart: { url: 'https://www.floodsmart.gov/whats-covered', label: {
    en: 'FloodSmart.gov (NFIP): what flood insurance covers',
    es: 'FloodSmart.gov (NFIP): qué cubre el seguro de inundación',
    ru: 'FloodSmart.gov (NFIP): что покрывает страховка от наводнения' } },
  mdFloodMaps: { url: 'https://www.miamidade.gov/global/economy/building/flood-protection/flood-zone-maps.page', label: {
    en: 'Miami-Dade County: flood zone maps',
    es: 'Condado de Miami-Dade: mapas de zonas de inundación',
    ru: 'Округ Miami-Dade: карты зон затопления' } },
  mdSurge: { url: 'https://www.miamidade.gov/initiative/weather-ready/flooding/storm-surge.page', label: {
    en: 'Miami-Dade County: storm surge planning zones',
    es: 'Condado de Miami-Dade: zonas de marejada ciclónica',
    ru: 'Округ Miami-Dade: зоны штормового нагона' } },
  browardFlood: { url: 'https://www.broward.org/environment/floodzonemaps/pages/default.aspx', label: {
    en: 'Broward County: FEMA flood zone maps (effective July 31, 2024)',
    es: 'Condado de Broward: mapas de zonas de inundación de FEMA (vigentes desde el 31 de julio de 2024)',
    ru: 'Округ Broward: карты FEMA зон затопления (действуют с 31 июля 2024 г.)' } },
  condoInspections: { url: 'https://condos.myfloridalicense.com/inspections/', label: {
    en: 'Florida DBPR: condo milestone inspections and structural integrity reserve studies',
    es: 'DBPR de Florida: inspecciones de hito y estudios de reservas estructurales de condominios',
    ru: 'DBPR Флориды: milestone inspections и SIRS для кондоминиумов' } },
  msfh: { url: 'https://mysafeflhome.com/', label: {
    en: 'My Safe Florida Home: state hurricane-hardening inspections and grants',
    es: 'My Safe Florida Home: inspecciones y subsidios estatales para reforzar la casa',
    ru: 'My Safe Florida Home: государственные инспекции и гранты на укрепление дома' } },
  cutlerBayTown: { url: 'https://www.cutlerbay-fl.gov/', label: {
    en: 'Town of Cutler Bay (incorporated 2005)',
    es: 'Pueblo de Cutler Bay (incorporado en 2005)',
    ru: 'Town of Cutler Bay (муниципалитет с 2005 г.)' } },
  homesteadCity: { url: 'https://www.homesteadfl.gov/', label: {
    en: 'City of Homestead',
    es: 'Ciudad de Homestead',
    ru: 'City of Homestead' } },
  fbcHvhz: { url: 'https://codes.iccsafe.org/content/FLBC2023P1/chapter-16-structural-design', label: {
    en: 'Florida Building Code, Building (8th ed., 2023), Chapter 16, Section 1620: High-Velocity Hurricane Zones (Miami-Dade and Broward)',
    es: 'Código de Construcción de Florida, Building (8.ª ed., 2023), capítulo 16, sección 1620: zonas de huracanes de alta velocidad (Miami-Dade y Broward)',
    ru: 'Florida Building Code, Building (8-я ред., 2023), глава 16, раздел 1620: High-Velocity Hurricane Zones (Miami-Dade и Broward)' } },
  mdProductControl: { url: 'https://www.miamidade.gov/building/pc-search_app.asp', label: {
    en: 'Miami-Dade County Product Control: approved products and Notices of Acceptance (NOA)',
    es: 'Miami-Dade County Product Control: productos aprobados y Notices of Acceptance (NOA)',
    ru: 'Miami-Dade County Product Control: одобренные продукты и Notices of Acceptance (NOA)' } },
  browardBora: { url: 'https://www.broward.org/CodeAppeals/Pages/default.aspx', label: {
    en: 'Broward County Board of Rules and Appeals (local building code administration)',
    es: 'Broward County Board of Rules and Appeals (administración local del código de construcción)',
    ru: 'Broward County Board of Rules and Appeals (местное применение строительного кода)' } },
  pip2026: { url: 'https://www.flsenate.gov/Session/Bill/2026/522', label: {
    en: 'The Florida Senate: SB 522 (2026), PIP repeal bill, died in committee March 13, 2026',
    es: 'Senado de Florida: SB 522 (2026), proyecto para eliminar el PIP, murió en comité el 13 de marzo de 2026',
    ru: 'Сенат Флориды: SB 522 (2026), законопроект об отмене PIP, не прошёл комитет 13 марта 2026 г.' } },
  condoMaster: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0718/Sections/0718.111.html', label: {
    en: 'Florida Statutes s. 718.111(11): what a condo association’s master policy must and need not cover',
    es: 'Estatutos de Florida, s. 718.111(11): qué cubre y qué no la póliza maestra de la asociación de condominio',
    ru: 'Статуты Флориды, s. 718.111(11): что покрывает и чего не покрывает мастер-полис ассоциации кондоминиума' } },
  crashReport: { url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.065.html', label: {
    en: 'Florida Statutes s. 316.065: duty to report crashes with injury or at least $2,000 of apparent damage',
    es: 'Estatutos de Florida, s. 316.065: obligación de reportar accidentes con lesiones o daños aparentes de $2,000 o más',
    ru: 'Статуты Флориды, s. 316.065: обязанность сообщать о ДТП с пострадавшими или ущербом от $2,000' } },
};

/** Localized source list for a page, in the given order. */
export function sources(lang: Lang, keys: Key[]): Source[] {
  return keys.map((k) => ({ url: S[k].url, label: S[k].label[lang] + EN_SUFFIX[lang] }));
}
