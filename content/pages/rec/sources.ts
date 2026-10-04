import type { Lang, Source } from '../../types';

// Official sources for the rec pages and articles. Every URL was opened and
// checked on Oct 3, 2026. Labels are localized; the documents are in English.
type Src = { url: string; label: Record<Lang, string> };

const st = (sec: string, en: string, es: string, ru: string): Src => ({
  url: `https://www.flsenate.gov/Laws/Statutes/2026/${sec}`,
  label: {
    en: `Florida Statutes s. ${sec} (2026): ${en}`,
    es: `Estatutos de Florida, s. ${sec} (2026): ${es}`,
    ru: `Законы Флориды, ст. ${sec} (2026): ${ru}`,
  },
});

export const SRC = {
  s316_003: st('316.003', 'definitions (motorcycle, autocycle, golf cart)', 'definiciones (motocicleta, autociclo, carrito de golf)', 'определения (мотоцикл, автоцикл, гольф-кар)'),
  s316_211: st('316.211', 'equipment for motorcycle and moped riders', 'equipo para conductores de motocicletas y ciclomotores', 'снаряжение мотоциклистов и водителей мопедов'),
  s316_212: st('316.212', 'operation of golf carts on certain roadways', 'uso de carritos de golf en ciertas vías', 'езда на гольф-карах по некоторым дорогам'),
  s316_2125: st('316.2125', 'golf carts within a retirement community', 'carritos de golf en comunidades de jubilados', 'гольф-кары в пенсионных комьюнити'),
  s316_2122: st('316.2122', 'low-speed vehicles on certain roadways', 'vehículos de baja velocidad en ciertas vías', 'тихоходные автомобили (LSV) на дорогах'),
  s316_2074: st('316.2074', 'all-terrain vehicles', 'vehículos todoterreno (ATV)', 'квадроциклы (ATV)'),
  s316_2123: st('316.2123', 'operation of an ATV on certain roadways', 'uso de ATV en ciertas vías', 'езда на ATV по некоторым дорогам'),
  s317_0003: st('317.0003', 'off-highway vehicle definitions (ATV, ROV, OHM)', 'definiciones de vehículos todoterreno (ATV, ROV, OHM)', 'определения внедорожной техники (ATV, ROV, OHM)'),
  s317_0006: st('317.0006', 'certificate of title required for off-highway vehicles', 'título obligatorio para vehículos todoterreno', 'обязательный титул на внедорожную технику'),
  s320_01: st('320.01', 'definitions (golf cart, low-speed vehicle)', 'definiciones (carrito de golf, vehículo de baja velocidad)', 'определения (гольф-кар, тихоходный автомобиль)'),
  s322_03: st('322.03', 'drivers must be licensed; autocycle without motorcycle endorsement', 'licencia de conducir; autociclo sin endoso de motocicleta', 'водительские права; автоцикл без мотоциклетной отметки'),
  s324_021: st('324.021', 'financial responsibility definitions and minimum amounts', 'responsabilidad financiera: definiciones y montos mínimos', 'финансовая ответственность: определения и минимальные суммы'),
  s324_051: st('324.051', 'crash reports; suspension of licenses and registrations', 'reportes de choques; suspensión de licencias y registros', 'отчёты об авариях; приостановка прав и регистрации'),
  s627_732: st('627.732', 'PIP definitions (motor vehicle = four or more wheels)', 'definiciones de PIP (vehículo de cuatro ruedas o más)', 'определения PIP (машина с четырьмя и более колёсами)'),
  s627_727: st('627.727', 'uninsured and underinsured motorist coverage', 'cobertura de conductor sin seguro o con seguro insuficiente', 'покрытие UM/UIM'),
  s327_39: st('327.39', 'personal watercraft regulated', 'regulación de motos acuáticas', 'правила для гидроциклов'),
  s327_395: st('327.395', 'boating safety education', 'educación sobre seguridad náutica', 'обучение безопасности на воде'),
  s327_54: st('327.54', 'liveries (boat and PWC rentals); safety and insurance rules', 'alquiler de embarcaciones y motos acuáticas; reglas de seguridad y seguro', 'прокат лодок и гидроциклов; правила безопасности и страховки'),
  s327_301: st('327.301', 'written reports of boating accidents', 'reportes escritos de accidentes náuticos', 'письменные отчёты о происшествиях на воде'),
  s327_35: st('327.35', 'boating under the influence', 'navegar bajo los efectos del alcohol o drogas', 'управление судном в нетрезвом виде'),
  s327_59: st('327.59', 'marina evacuations (hurricanes)', 'evacuación de marinas (huracanes)', 'эвакуация из марин (ураганы)'),
  s823_11: st('823.11', 'derelict vessels; removal', 'embarcaciones abandonadas; retiro', 'брошенные суда; удаление'),
  s222_13: st('222.13', 'life insurance proceeds and creditors', 'beneficios del seguro de vida y acreedores', 'выплаты по страхованию жизни и долги застрахованного'),
  s222_14: st('222.14', 'cash surrender value of life insurance exempt from creditors', 'valor de rescate del seguro de vida protegido de acreedores', 'выкупная сумма полиса защищена от взыскания по долгам'),
  s627_455: st('627.455', 'incontestability of life insurance after 2 years', 'incontestabilidad del seguro de vida después de 2 años', 'неоспоримость полиса жизни через 2 года'),
  s627_4555: st('627.4555', 'secondary notice before a life policy lapses', 'aviso a una segunda persona antes de que caduque la póliza', 'уведомление второго адресата до прекращения полиса'),
  flhsmvInsurance: { url: 'https://www.flhsmv.gov/insurance/', label: { en: 'FLHSMV: Florida insurance requirements', es: 'FLHSMV: requisitos de seguro en Florida', ru: 'FLHSMV: требования к страховке во Флориде' } },
  flhsmvMotoTypes: { url: 'https://www.flhsmv.gov/driver-licenses-id-cards/motorcycle-rider-education-endorsements/motorcycle-motor-scooter-moped-and-motorized-scooter/', label: { en: 'FLHSMV: Motorcycle, motor scooter, moped and autocycle rules', es: 'FLHSMV: reglas para motocicletas, scooters, ciclomotores y autociclos', ru: 'FLHSMV: правила для мотоциклов, скутеров, мопедов и автоциклов' } },
  flhsmvEndorse: { url: 'https://www.flhsmv.gov/driver-licenses-id-cards/motorcycle-rider-education-endorsements/', label: { en: 'FLHSMV: Motorcycle rider education and endorsements', es: 'FLHSMV: educación y endoso de motocicleta', ru: 'FLHSMV: обучение мотоциклистов и мотоциклетная отметка' } },
  flhsmvHelmet: { url: 'https://www.flhsmv.gov/driver-licenses-id-cards/motorcycle-rider-education-endorsements/helmet-exemption/', label: { en: 'FLHSMV: Motorcycle helmet exemption', es: 'FLHSMV: exención del casco para motociclistas', ru: 'FLHSMV: исключение из правила о шлеме' } },
  flhsmvLsv: { url: 'https://www.flhsmv.gov/safety-center/consumer-education/low-speed-vehicles/', label: { en: 'FLHSMV: Low-speed vehicles and golf cart conversions', es: 'FLHSMV: vehículos de baja velocidad y conversión de carritos de golf', ru: 'FLHSMV: тихоходные автомобили и переделка гольф-каров' } },
  flhsmvTl63: { url: 'https://www.flhsmv.gov/pdf/proc/tl/tl-63.pdf', label: { en: 'FLHSMV procedure TL-63: Low-speed vehicles (PDF)', es: 'FLHSMV, procedimiento TL-63: vehículos de baja velocidad (PDF)', ru: 'FLHSMV, процедура TL-63: тихоходные автомобили (PDF)' } },
  nhtsaMoto: { url: 'https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813732', label: { en: 'NHTSA: Traffic Safety Facts, Motorcycles, 2023 data, DOT HS 813 732 (PDF)', es: 'NHTSA: Traffic Safety Facts, motocicletas, datos de 2023 (PDF, en inglés)', ru: 'NHTSA: Traffic Safety Facts, мотоциклы, данные за 2023 год (PDF, англ.)' } },
  iiiUninsured: { url: 'https://www.iii.org/fact-statistic/facts-statistics-uninsured-motorists', label: { en: 'Insurance Information Institute: Uninsured motorists (Insurance Research Council estimates, 2023)', es: 'Insurance Information Institute: conductores sin seguro (estimaciones del Insurance Research Council, 2023)', ru: 'Insurance Information Institute: незастрахованные водители (оценки Insurance Research Council, 2023)' } },
  fwc2025: { url: 'https://myfwc.com/media/xekdzj1h/2025-basr-introduction.pdf', label: { en: 'FWC: 2025 Florida Boating Accident Statistical Report, introduction and summary (PDF)', es: 'FWC: informe estadístico de accidentes náuticos de Florida 2025, resumen (PDF, en inglés)', ru: 'FWC: статистика происшествий на воде во Флориде за 2025 год, сводка (PDF, англ.)' } },
  fwcAccidents: { url: 'https://myfwc.com/boating/safety-education/accidents/', label: { en: 'FWC: Boating accident statistical reports', es: 'FWC: informes de accidentes náuticos', ru: 'FWC: отчёты о происшествиях на воде' } },
  fwcId: { url: 'https://myfwc.com/boating/safety-education/id/', label: { en: 'FWC: Boating Safety Education ID Card', es: 'FWC: tarjeta de educación en seguridad náutica', ru: 'FWC: удостоверение об обучении безопасности на воде' } },
  fwcStorm: { url: 'https://myfwc.com/boating/safety-education/hurricane/', label: { en: 'FWC: Storm prep resources for boaters', es: 'FWC: cómo preparar su embarcación para una tormenta', ru: 'FWC: подготовка лодки к шторму' } },
  uscg2024: { url: 'https://uscgboating.org/library/accident-statistics/Recreational-Boating-Statistics-2024.pdf', label: { en: 'U.S. Coast Guard: 2024 Recreational Boating Statistics (PDF)', es: 'Guardia Costera de EE. UU.: estadísticas de navegación recreativa 2024 (PDF, en inglés)', ru: 'Береговая охрана США: статистика любительского судоходства за 2024 год (PDF, англ.)' } },
  nhcClimo: { url: 'https://www.nhc.noaa.gov/climo/', label: { en: 'NOAA National Hurricane Center: Tropical cyclone climatology (season dates)', es: 'Centro Nacional de Huracanes (NOAA): climatología y fechas de la temporada', ru: 'Национальный центр по ураганам (NOAA): климатология и сроки сезона' } },
  cpscOhv: { url: 'https://www.cpsc.gov/s3fs-public/2024_OHV_Annual_Report_0.pdf', label: { en: 'U.S. Consumer Product Safety Commission: 2024 Report of Deaths and Injuries Involving Off-Highway Vehicles (PDF)', es: 'Comisión de Seguridad de Productos de Consumo (CPSC): informe 2024 de muertes y lesiones con vehículos todoterreno (PDF, en inglés)', ru: 'Комиссия по безопасности потребительских товаров США (CPSC): отчёт 2024 о гибели и травмах на внедорожной технике (PDF, англ.)' } },
  limra2026: { url: 'https://www.limra.com/siteassets/newsroom/liam/2026/facts-about-life-insurance.pdf', label: { en: 'LIMRA and Life Happens: 2026 Insurance Barometer, Facts About Life Insurance (PDF)', es: 'LIMRA y Life Happens: Insurance Barometer 2026, datos sobre el seguro de vida (PDF, en inglés)', ru: 'LIMRA и Life Happens: Insurance Barometer 2026, факты о страховании жизни (PDF, англ.)' } },
} satisfies Record<string, Src>;

export type SrcKey = keyof typeof SRC;

/** Localized source list for one language. */
export function srcList(lang: Lang, keys: SrcKey[]): Source[] {
  return keys.map((k) => ({ url: SRC[k].url, label: SRC[k].label[lang] }));
}

export const u = (k: SrcKey) => SRC[k].url;
