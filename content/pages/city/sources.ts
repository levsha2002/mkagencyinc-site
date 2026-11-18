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
  | 'cutlerBayTown' | 'homesteadCity' | 'fbcHvhz' | 'mdProductControl' | 'browardBora' | 'pip2026' | 'condoMaster' | 'crashReport'
  | 'acsSunnyIsles' | 'acsHallandale' | 'acsAventura' | 'acsHollywood'
  | 'sibCity' | 'wilmaMd' | 'brightline' | 'brightlineStation'
  | 'flhsmvNew' | 'flhsmvHandbook' | 'flhsmvVisit'
  | 'hollywoodHistory' | 'hollywoodFirm' | 'hollywoodBridge'
  | 'acsBoca' | 'acsFortLauderdale' | 'acsMiamiBeach' | 'acsPompano' | 'acsPalmBeach'
  | 'pbcFlood' | 'pbcWind' | 'nceiFllFlood' | 'nwsIrma'
  | 'acsNorthPort' | 'acsVenice' | 'acsSouthVenice' | 'acsSarasotaCity' | 'acsSarasota' | 'acsTampa' | 'acsHillsborough'
  | 'femaCis' | 'npFlood' | 'veniceFlood' | 'sarasotaFirm' | 'scgovFirm' | 'hcCoastal' | 'tampaFlood'
  | 'nhcIan' | 'nhcMilton' | 'nhcHelene' | 'nwsHelene' | 'fdotHfb';

const EN_SUFFIX: Record<Lang, string> = { en: '', es: ' (en inglés)', ru: ' (на английском)' };

const S: Record<Key, { url: string; label: Record<Lang, string> }> = {
  flhsmv: { url: 'https://www.flhsmv.gov/insurance/', label: {
    en: 'Florida DHSMV: Florida insurance requirements (PIP and PDL)',
    es: 'Florida DHSMV: requisitos de seguro de auto en Florida (PIP y PDL)',
    ru: 'Florida DHSMV: обязательная автостраховка во Флориде (PIP и PDL)' } },
  pip: { url: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.736.html', label: {
    en: 'Florida Statutes s. 627.736: required PIP benefits (80% medical, 60% lost income, 14-day rule)',
    es: 'Estatutos de Florida, s. 627.736: beneficios obligatorios de PIP (80% médico, 60% de ingresos, regla de 14 días)',
    ru: 'Статуты Флориды, s. 627.736: обязательные выплаты PIP (80% лечения, 60% дохода, правило 14 дней)' } },
  um: { url: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.727.html', label: {
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
  roofAge: { url: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.7011.html', label: {
    en: 'Florida Statutes s. 627.7011: roof-age rule (15 years), law and ordinance coverage, replacement cost',
    es: 'Estatutos de Florida, s. 627.7011: regla de antigüedad del techo (15 años), ley y ordenanza, costo de reemplazo',
    ru: 'Статуты Флориды, s. 627.7011: правило о возрасте крыши (15 лет), law and ordinance, replacement cost' } },
  deductibles: { url: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.701.html', label: {
    en: 'Florida Statutes s. 627.701: hurricane deductible options and the calendar-year rule',
    es: 'Estatutos de Florida, s. 627.701: opciones de deducible de huracán y la regla del año calendario',
    ru: 'Статуты Флориды, s. 627.701: варианты ураганной франшизы и правило календарного года' } },
  mitigation: { url: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.0629.html', label: {
    en: 'Florida Statutes s. 627.0629: required wind mitigation credits',
    es: 'Estatutos de Florida, s. 627.0629: créditos obligatorios por mitigación de viento',
    ru: 'Статуты Флориды, s. 627.0629: обязательные кредиты за защиту от ветра (wind mitigation)' } },
  claimDeadline: { url: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.70132.html', label: {
    en: 'Florida Statutes s. 627.70132: property claim notice deadlines (1 year, 18 months)',
    es: 'Estatutos de Florida, s. 627.70132: plazos para avisar un reclamo de propiedad (1 año, 18 meses)',
    ru: 'Статуты Флориды, s. 627.70132: сроки заявления имущественного клейма (1 год, 18 месяцев)' } },
  windForm: { url: 'https://www.myfloridacfo.com/division/consumers/storm/mitigation-notices-inspections-and-forms', label: {
    en: 'Florida Department of Financial Services: wind mitigation inspection form OIR-B1-1802',
    es: 'Departamento de Servicios Financieros de Florida: formulario de mitigación de viento OIR-B1-1802',
    ru: 'Департамент финансовых услуг Флориды: форма wind mitigation OIR-B1-1802' } },
  lossAssessment: { url: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.714.html', label: {
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
  condoMaster: { url: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0718/Sections/0718.111.html', label: {
    en: 'Florida Statutes s. 718.111(11): what a condo association’s master policy must and need not cover',
    es: 'Estatutos de Florida, s. 718.111(11): qué cubre y qué no la póliza maestra de la asociación de condominio',
    ru: 'Статуты Флориды, s. 718.111(11): что покрывает и чего не покрывает мастер-полис ассоциации кондоминиума' } },
  crashReport: { url: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.065.html', label: {
    en: 'Florida Statutes s. 316.065: duty to report crashes with injury or at least $2,000 of apparent damage',
    es: 'Estatutos de Florida, s. 316.065: obligación de reportar accidentes con lesiones o daños aparentes de $2,000 o más',
    ru: 'Статуты Флориды, s. 316.065: обязанность сообщать о ДТП с пострадавшими или ущербом от $2,000' } },
  acsSunnyIsles: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=160XX00US1269555', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, housing, vacancy, commuting and language (B01003, B25024, B25034, B25035, B25003, B25004, B08303, C16001), Sunny Isles Beach',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, vivienda, vacancia, traslado al trabajo e idioma (B01003, B25024, B25034, B25035, B25003, B25004, B08303, C16001), Sunny Isles Beach',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, жильё, пустующие квартиры, поездки на работу и язык (B01003, B25024, B25034, B25035, B25003, B25004, B08303, C16001), Sunny Isles Beach' } },
  acsHallandale: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=160XX00US1228452', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, housing, vacancy, commuting and language (B01003, B25024, B25034, B25035, B25003, B25004, B08303, C16001), Hallandale Beach',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, vivienda, vacancia, traslado al trabajo e idioma (B01003, B25024, B25034, B25035, B25003, B25004, B08303, C16001), Hallandale Beach',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, жильё, пустующие квартиры, поездки на работу и язык (B01003, B25024, B25034, B25035, B25003, B25004, B08303, C16001), Hallandale Beach' } },
  acsAventura: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=160XX00US1202681', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, housing, vacancy, commuting and language (B01003, B25024, B25034, B25035, B25003, B25004, B08303, C16001), Aventura',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, vivienda, vacancia, traslado al trabajo e idioma (B01003, B25024, B25034, B25035, B25003, B25004, B08303, C16001), Aventura',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, жильё, пустующие квартиры, поездки на работу и язык (B01003, B25024, B25034, B25035, B25003, B25004, B08303, C16001), Aventura' } },
  acsHollywood: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=160XX00US1232000', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, housing, vacancy, commuting, nativity and language (B01003, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Hollywood',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, vivienda, vacancia, traslado al trabajo, lugar de nacimiento e idioma (B01003, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Hollywood',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, жильё, пустующие квартиры, поездки на работу, место рождения и язык (B01003, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Hollywood' } },
  sibCity: { url: 'https://www.sibfl.gov/City-Hall/About-Sunny-Isles-Beach', label: {
    en: 'City of Sunny Isles Beach: incorporated June 16, 1997',
    es: 'Ciudad de Sunny Isles Beach: incorporada el 16 de junio de 1997',
    ru: 'City of Sunny Isles Beach: муниципалитет с 16 июня 1997 г.' } },
  wilmaMd: { url: 'https://www.miamidade.gov/building/library/reports/wilma-assessment.pdf', label: {
    en: 'Miami-Dade Building Code Compliance: post-Hurricane Wilma assessment (Aventura glazing, Sunny Isles Beach high-rise repairs)',
    es: 'Miami-Dade Building Code Compliance: evaluación posterior al huracán Wilma (vidrios en Aventura, reparaciones de torres en Sunny Isles Beach)',
    ru: 'Miami-Dade Building Code Compliance: оценка после урагана Wilma (остекление в Aventura, ремонт высоток в Sunny Isles Beach)' } },
  brightline: { url: 'https://emma.msrb.org/P21645448-P21266442-P21693053.pdf', label: {
    en: 'Brightline, December 2022 monthly report: Aventura station opened for passengers on December 24, 2022',
    es: 'Brightline, informe mensual de diciembre de 2022: la estación de Aventura abrió al público el 24 de diciembre de 2022',
    ru: 'Brightline, месячный отчёт за декабрь 2022: станция Aventura открылась для пассажиров 24 декабря 2022 г.' } },
  brightlineStation: { url: 'https://wsvn.com/news/local/miami-dade/grand-opening-held-for-new-brightline-station-in-aventura/', label: {
    en: 'WSVN, December 24, 2022: Aventura station at 19796 West Dixie Highway, with a shuttle to Aventura Mall',
    es: 'WSVN, 24 de diciembre de 2022: estación de Aventura en 19796 West Dixie Highway, con servicio al Aventura Mall',
    ru: 'WSVN, 24 декабря 2022: станция Aventura по адресу 19796 West Dixie Highway и шаттл до Aventura Mall' } },
  flhsmvNew: { url: 'https://www.flhsmv.gov/new-resident/', label: {
    en: 'Florida DHSMV: new residents, the 30-day driver-license rule, and insurance before you title or register a vehicle',
    es: 'Florida DHSMV: nuevos residentes, licencia de conducir en 30 días y seguro antes de titular o registrar un vehículo',
    ru: 'Florida DHSMV: новые резиденты, права в течение 30 дней и страховка до регистрации машины' } },
  flhsmvHandbook: { url: 'https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf', label: {
    en: 'Florida Driver License Handbook (FLHSMV): who must get a Florida license, the International Driving Permit, and which foreign licenses waive the exams',
    es: 'Manual de licencia de conducir de Florida (FLHSMV): quién necesita licencia de Florida, el permiso internacional y qué licencias extranjeras eximen de los exámenes',
    ru: 'Florida Driver License Handbook (FLHSMV): кому нужны права Флориды, International Driving Permit и какие иностранные права освобождают от экзаменов' } },
  flhsmvVisit: { url: 'https://www.flhsmv.gov/driver-licenses-id-cards/visiting-florida-faqs/', label: {
    en: 'Florida DHSMV: visiting Florida with a driver license from another country',
    es: 'Florida DHSMV: visitar Florida con una licencia de conducir de otro país',
    ru: 'Florida DHSMV: поездка во Флориду с водительскими правами другой страны' } },
  hollywoodHistory: { url: 'https://hollywoodfl.org/1539/History-of-Hollywood', label: {
    en: 'City of Hollywood: Joseph Young’s plan, the lakes along Hollywood Boulevard, and the 1925 Intracoastal bridge',
    es: 'Ciudad de Hollywood: el plan de Joseph Young, los lagos junto a Hollywood Boulevard y el puente del Intracoastal de 1925',
    ru: 'City of Hollywood: план Joseph Young, озёра вдоль Hollywood Boulevard и мост через Intracoastal 1925 года' } },
  hollywoodFirm: { url: 'https://www.hollywoodcra.org/412/FEMAFlood-Maps', label: {
    en: 'City of Hollywood CRA: FEMA flood maps effective July 31, 2024; more than 11,000 properties added to the Special Flood Hazard Area, 2,115 removed from the mandate',
    es: 'CRA de Hollywood: mapas de inundación de FEMA vigentes desde el 31 de julio de 2024; más de 11,000 propiedades en la zona especial de riesgo y 2,115 fuera del mandato',
    ru: 'CRA Hollywood: карты FEMA с 31 июля 2024 г.; более 11 000 участков вошли в Special Flood Hazard Area, 2 115 вышли из обязательного требования' } },
  hollywoodBridge: { url: 'https://heavymovablestructures.org/wp-content/uploads/2017/12/Rehabilitation-of-the-Hollywood-Blvd-Bridge.pdf', label: {
    en: 'Hollywood Boulevard (SR 820) bridge: FDOT double-leaf bascule over the Intracoastal Waterway, replaced in 1976',
    es: 'Puente de Hollywood Boulevard (SR 820): puente basculante de dos hojas del FDOT sobre el Intracoastal, reemplazado en 1976',
    ru: 'Мост Hollywood Boulevard (SR 820): разводной двукрылый мост FDOT через Intracoastal, заменён в 1976 г.' } },
  acsBoca: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=160XX00US1207300', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, housing, vacancy, commuting, age, nativity and language (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Boca Raton',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, vivienda, vacancia, traslado al trabajo, edad, lugar de nacimiento e idioma (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Boca Raton',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, жильё, пустующие квартиры, поездки на работу, возраст, место рождения и язык (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Boca Raton' } },
  acsFortLauderdale: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=160XX00US1224000', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, housing, vacancy, commuting, age, nativity and language (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Fort Lauderdale',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, vivienda, vacancia, traslado al trabajo, edad, lugar de nacimiento e idioma (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Fort Lauderdale',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, жильё, пустующие квартиры, поездки на работу, возраст, место рождения и язык (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Fort Lauderdale' } },
  acsMiamiBeach: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=160XX00US1245025', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, housing, vacancy, commuting, age, nativity and language (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Miami Beach',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, vivienda, vacancia, traslado al trabajo, edad, lugar de nacimiento e idioma (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Miami Beach',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, жильё, пустующие квартиры, поездки на работу, возраст, место рождения и язык (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Miami Beach' } },
  acsPompano: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=160XX00US1258050', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, housing, vacancy, commuting, age, nativity and language (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Pompano Beach',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, vivienda, vacancia, traslado al trabajo, edad, lugar de nacimiento e idioma (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Pompano Beach',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, жильё, пустующие квартиры, поездки на работу, возраст, место рождения и язык (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Pompano Beach' } },
  acsPalmBeach: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=050XX00US12099', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, housing, vacancy, commuting, age, nativity and language (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), Palm Beach County',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, vivienda, vacancia, traslado al trabajo, edad, lugar de nacimiento e idioma (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), condado de Palm Beach',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, жильё, пустующие квартиры, поездки на работу, возраст, место рождения и язык (B01003, B01001, B25024, B25034, B25035, B25003, B25004, B08303, B08013, B05002, C16001), округ Palm Beach' } },
  pbcFlood: { url: 'https://discover.pbc.gov/pzb/building/PDF/NewsReleases/Flood%20Zone%20LiMWA%20CCCL-PZBGIS_Quick%20Reference_2025.pdf', label: {
    en: 'Palm Beach County Planning, Zoning & Building: flood-zone map layers, current FIRMs revised December 20, 2024, prior countywide FIRMs October 5, 2017',
    es: 'Planning, Zoning & Building del condado de Palm Beach: capas de zonas de inundación, FIRMs vigentes revisados el 20 de diciembre de 2024 y mapas anteriores del 5 de octubre de 2017',
    ru: 'Palm Beach County Planning, Zoning & Building: слои зон затопления, действующие FIRM от 20 декабря 2024 г. и предыдущие карты округа от 5 октября 2017 г.' } },
  pbcWind: { url: 'https://discover.pbc.gov/pzb/Maps/Wind-Speeds.aspx', label: {
    en: 'Palm Beach County: ultimate design wind-speed maps for the Florida Building Code, and the wind-borne debris region (unincorporated county)',
    es: 'Condado de Palm Beach: mapas de velocidad de viento de diseño del Código de Construcción de Florida y la región de escombros arrastrados por el viento (área no incorporada)',
    ru: 'Округ Palm Beach: карты расчётной скорости ветра Florida Building Code и зона wind-borne debris (неинкорпорированная часть округа)' } },
  nceiFllFlood: { url: 'https://www.ncei.noaa.gov/stormevents/eventdetails.jsp?id=1097614', label: {
    en: 'NOAA NCEI Storm Events: April 12–13, 2023 flash flood in Broward, 25.91 inches at the Fort Lauderdale airport gauge, building and vehicle damage in Fort Lauderdale',
    es: 'NOAA NCEI Storm Events: inundación súbita del 12–13 de abril de 2023 en Broward, 25.91 pulgadas en el medidor del aeropuerto de Fort Lauderdale, daños a edificios y vehículos',
    ru: 'NOAA NCEI Storm Events: ливень 12–13 апреля 2023 г. в Broward, 25,91 дюйма на датчике аэропорта Fort Lauderdale, ущерб зданиям и машинам' } },
  nwsIrma: { url: 'https://www.weather.gov/mfl/hurricaneirma', label: {
    en: 'National Weather Service Miami: Hurricane Irma local report (winds and coastal inundation in Miami-Dade, Broward and Palm Beach)',
    es: 'Servicio Meteorológico Nacional, Miami: informe local del huracán Irma (viento e inundación costera en Miami-Dade, Broward y Palm Beach)',
    ru: 'Национальная служба погоды, Майами: местный отчёт об урагане Irma (ветер и затопление берега в Miami-Dade, Broward и Palm Beach)' } },
  acsNorthPort: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=160XX00US1249675', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, age, nativity, language, housing and commuting (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), North Port',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, edad, lugar de nacimiento, idioma, vivienda y traslado al trabajo (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), North Port',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, возраст, место рождения, язык, жильё и поездки на работу (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), North Port' } },
  acsVenice: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=160XX00US1273900', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, age, nativity, language, housing and commuting (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), Venice city',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, edad, lugar de nacimiento, idioma, vivienda y traslado al trabajo (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), ciudad de Venice',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, возраст, место рождения, язык, жильё и поездки на работу (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), город Venice' } },
  acsSouthVenice: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=160XX00US1268100', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, age, nativity, language, housing and commuting (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), South Venice CDP',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, edad, lugar de nacimiento, idioma, vivienda y traslado al trabajo (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), South Venice CDP',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, возраст, место рождения, язык, жильё и поездки на работу (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), South Venice CDP' } },
  acsSarasotaCity: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=160XX00US1264175', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, age, nativity, language, housing and commuting (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), Sarasota city',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, edad, lugar de nacimiento, idioma, vivienda y traslado al trabajo (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), ciudad de Sarasota',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, возраст, место рождения, язык, жильё и поездки на работу (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), город Sarasota' } },
  acsSarasota: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=050XX00US12115', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, age, nativity, language, housing and commuting (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), Sarasota County',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, edad, lugar de nacimiento, idioma, vivienda y traslado al trabajo (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), condado de Sarasota',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, возраст, место рождения, язык, жильё и поездки на работу (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), округ Sarasota' } },
  acsTampa: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=160XX00US1271000', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, age, nativity, language, housing and commuting (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), Tampa',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, edad, lugar de nacimiento, idioma, vivienda y traslado al trabajo (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), Tampa',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, возраст, место рождения, язык, жильё и поездки на работу (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), Tampa' } },
  acsHillsborough: { url: 'https://data.census.gov/table/ACSDT5Y2024.B25024?g=050XX00US12057', label: {
    en: 'U.S. Census Bureau, ACS 2020–2024 5-year: population, age, nativity, language, housing and commuting (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), Hillsborough County',
    es: 'Oficina del Censo, ACS 2020–2024 (5 años): población, edad, lugar de nacimiento, idioma, vivienda y traslado al trabajo (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), condado de Hillsborough',
    ru: 'Бюро переписи США, ACS 2020–2024 (5 лет): население, возраст, место рождения, язык, жильё и поездки на работу (B01003, B01001, B05002, C16001, B25024, B25034, B25035, B25003, B25004, B08303, B08013), округ Hillsborough' } },
  femaCis: { url: 'https://www.fema.gov/cis/FL.html', label: {
    en: 'FEMA Community Status Book, Florida: current FIRM effective dates and NFIP Community Rating System classes',
    es: 'Community Status Book de FEMA, Florida: fechas vigentes de los FIRM y clases del Community Rating System del NFIP',
    ru: 'FEMA Community Status Book, Флорида: действующие даты карт FIRM и классы Community Rating System программы NFIP' } },
  npFlood: { url: 'https://www.northportfl.gov/City-Services-and-Safety/Public-Works/Flood-Information/FEMA-Flood-Map-Updates', label: {
    en: 'City of North Port: coastal flood-map changes effective March 27, 2024, along the Myakka River, Myakkahatchee Creek and US-41',
    es: 'Ciudad de North Port: cambios del mapa costero de inundación vigentes desde el 27 de marzo de 2024, junto al río Myakka, Myakkahatchee Creek y la US-41',
    ru: 'City of North Port: изменения береговой карты затопления с 27 марта 2024 г. вдоль реки Myakka, Myakkahatchee Creek и US-41' } },
  veniceFlood: { url: 'https://www.venicegov.com/government/engineering/floodplain-management', label: {
    en: 'City of Venice: floodplain management and Community Rating System participation since 1991; Class 5 as of 2025',
    es: 'Ciudad de Venice: manejo de la llanura de inundación y participación en el Community Rating System desde 1991; clase 5 desde 2025',
    ru: 'City of Venice: управление поймой и участие в Community Rating System с 1991 года; класс 5 с 2025 года' } },
  sarasotaFirm: { url: 'https://www.sarasotafl.gov/Department-Pages/Development-Services/Flood-Information/Map-Information', label: {
    en: 'City of Sarasota: Flood Insurance Rate Maps effective March 27, 2024, replacing the November 4, 2016 maps, including the Limit of Moderate Wave Action',
    es: 'Ciudad de Sarasota: mapas FIRM vigentes desde el 27 de marzo de 2024, que reemplazan los del 4 de noviembre de 2016, con la línea Limit of Moderate Wave Action',
    ru: 'City of Sarasota: карты FIRM с 27 марта 2024 г. вместо карт от 4 ноября 2016 г., включая линию Limit of Moderate Wave Action' } },
  scgovFirm: { url: 'https://www.scgov.net/Home/Components/News/News/6109/23', label: {
    en: 'Sarasota County: FEMA flood maps effective March 27, 2024, including the Limit of Moderate Wave Action; the update does not change hurricane evacuation levels',
    es: 'Condado de Sarasota: mapas de inundación de FEMA vigentes desde el 27 de marzo de 2024, con la línea Limit of Moderate Wave Action; el cambio no modifica los niveles de evacuación por huracán',
    ru: 'Округ Sarasota: карты затопления FEMA с 27 марта 2024 г., включая Limit of Moderate Wave Action; обновление не меняет уровни эвакуации при урагане' } },
  hcCoastal: { url: 'https://hcfl.gov/residents/public-safety/flooding/coastal-flood-risk-map-update', label: {
    en: 'Hillsborough County: coastal Flood Insurance Rate Map changes effective October 7, 2021; the 2008 countywide update had not redone the coastal analysis',
    es: 'Condado de Hillsborough: cambios de los mapas costeros FIRM vigentes desde el 7 de octubre de 2021; la actualización de 2008 no rehízo el análisis costero',
    ru: 'Округ Hillsborough: береговые карты FIRM с 7 октября 2021 г.; окружное обновление 2008 года не пересчитывало береговой анализ' } },
  tampaFlood: { url: 'https://www.tampa.gov/tss-stormwater/info/flood', label: {
    en: 'City of Tampa Stormwater: FEMA flood maps, and Tampa’s participation in the NFIP Community Rating System as a Class 5 community',
    es: 'Stormwater de la ciudad de Tampa: mapas de inundación de FEMA y participación de Tampa en el Community Rating System del NFIP como comunidad clase 5',
    ru: 'Stormwater города Tampa: карты затопления FEMA и участие Tampa в Community Rating System программы NFIP как сообщества класса 5' } },
  nhcIan: { url: 'https://www.nhc.noaa.gov/data/tcr/AL092022_Ian.pdf', label: {
    en: 'National Hurricane Center: Tropical Cyclone Report, Hurricane Ian (2022); record crests on the Peace and Myakka rivers, and an I-75 closure in southern Sarasota County',
    es: 'Centro Nacional de Huracanes: informe del huracán Ian (2022); crestas récord en los ríos Peace y Myakka, y un cierre de la I-75 en el sur del condado de Sarasota',
    ru: 'Национальный центр ураганов: отчёт об урагане Ian (2022); рекордные гребни рек Peace и Myakka и перекрытие I-75 на юге округа Sarasota' } },
  nhcMilton: { url: 'https://www.nhc.noaa.gov/data/tcr/AL142024_Milton.pdf', label: {
    en: 'National Hurricane Center: Tropical Cyclone Report, Hurricane Milton (2024); Category 3 landfall at Siesta Key, Venice Beach wind, and surge from Longboat Key to Venice',
    es: 'Centro Nacional de Huracanes: informe del huracán Milton (2024); entrada a tierra de categoría 3 en Siesta Key, viento en Venice Beach y marejada de Longboat Key a Venice',
    ru: 'Национальный центр ураганов: отчёт об урагане Milton (2024); выход на сушу 3-й категории у Siesta Key, ветер на Venice Beach и нагон от Longboat Key до Venice' } },
  nhcHelene: { url: 'https://www.nhc.noaa.gov/data/tcr/AL092024_Helene.pdf', label: {
    en: 'National Hurricane Center: Tropical Cyclone Report, Hurricane Helene (2024); Category 4 landfall in the Big Bend and storm surge in Tampa Bay and at Venice',
    es: 'Centro Nacional de Huracanes: informe del huracán Helene (2024); entrada a tierra de categoría 4 en Big Bend y marejada en Tampa Bay y en Venice',
    ru: 'Национальный центр ураганов: отчёт об урагане Helene (2024); выход на сушу 4-й категории в Big Bend и штормовой нагон в Tampa Bay и у Venice' } },
  nwsHelene: { url: 'https://www.weather.gov/media/tbw/TropicalEventSummary/PSHTBW_2024AL09_Helene_ImpactNarratives.pdf', label: {
    en: 'National Weather Service Tampa Bay: Hurricane Helene county impacts, including the Hillsborough wind gust, rainfall and the East Bay water-level record',
    es: 'Servicio Meteorológico Nacional, Tampa Bay: impactos del huracán Helene por condado, incluida la ráfaga en Hillsborough, la lluvia y el récord de nivel en East Bay',
    ru: 'Национальная служба погоды, Tampa Bay: последствия урагана Helene по округам, включая порыв ветра в Hillsborough, осадки и рекорд уровня на East Bay' } },
  fdotHfb: { url: 'https://www.fdottampabay.com/project/417/the-new-howard-frankland-bridge', label: {
    en: 'FDOT District Seven: I-275 Howard Frankland Bridge between Tampa and St. Petersburg, new southbound span opened in 2025, crossing Old Tampa Bay',
    es: 'FDOT, Distrito Siete: puente Howard Frankland de la I-275 entre Tampa y St. Petersburg; el nuevo tramo en dirección sur abrió en 2025 y cruza Old Tampa Bay',
    ru: 'FDOT, District Seven: мост Howard Frankland на I-275 между Tampa и St. Petersburg; новый пролёт на юг открыт в 2025 году и пересекает Old Tampa Bay' } },
};

/** Localized source list for a page, in the given order. */
export function sources(lang: Lang, keys: Key[]): Source[] {
  return keys.map((k) => ({ url: S[k].url, label: S[k].label[lang] + EN_SUFFIX[lang] }));
}
