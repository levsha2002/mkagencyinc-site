import type { Lang, Source } from '../../types';

// Official sources used by the business-type pages. Checked 2026-09-26.
// Labels are localized; the documents themselves are in English.
const FS = (ch: string, sec: string) =>
  `https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=${ch}/${sec.split('.')[0].padStart(4, '0')}/Sections/${sec
    .split('.')[0]
    .padStart(4, '0')}.${sec.split('.')[1]}.html`;

type Key =
  | 'fs440_02' | 'fs440_05' | 'fs440_10' | 'fs489_103' | 'fs489_105' | 'fs489_115' | 'fs489_507'
  | 'fs627_7415' | 'fs316_302' | 'fs482_156' | 'flhsmv' | 'naic' | 'dfsBr' | 'bps2025' | 'dbprLookup'
  | 'cbp2023' | 'fs324_022' | 'naics561720' | 'naics561790';

const URLS: Record<Key, string> = {
  fs440_02: FS('0400-0499', '440.02'),
  fs440_05: FS('0400-0499', '440.05'),
  fs440_10: FS('0400-0499', '440.10'),
  fs489_103: FS('0400-0499', '489.103'),
  fs489_105: FS('0400-0499', '489.105'),
  fs489_115: FS('0400-0499', '489.115'),
  fs489_507: FS('0400-0499', '489.507'),
  fs627_7415: FS('0600-0699', '627.7415'),
  fs316_302: FS('0300-0399', '316.302'),
  fs482_156: FS('0400-0499', '482.156'),
  flhsmv: 'https://www.flhsmv.gov/insurance/',
  naic: 'https://content.naic.org/glossary-insurance-terms',
  dfsBr: 'https://www.myfloridacfo.com/division/consumers/storm/commercial-disaster-faqs',
  bps2025: 'https://www2.census.gov/econ/bps/State/st2025a.txt',
  dbprLookup: 'https://www.myfloridalicense.com/wl11.asp',
  cbp2023: 'https://www.census.gov/data/datasets/2023/econ/cbp/2023-cbp.html',
  fs324_022: FS('0300-0399', '324.022'),
  naics561720: 'https://www.census.gov/naics/?input=561720&year=2022&details=561720',
  naics561790: 'https://www.census.gov/naics/?input=561790&year=2022&details=561790',
};

const LABELS: Record<Key, Record<Lang, string>> = {
  fs440_02: {
    en: 'Florida Statutes § 440.02: workers’ compensation definitions (employment, construction industry, employee)',
    es: 'Estatutos de Florida § 440.02: definiciones de compensación laboral (empleo, industria de la construcción, empleado) (en inglés)',
    ru: 'Статуты Флориды § 440.02: определения по workers’ compensation (занятость, строительная отрасль, работник) (англ.)',
  },
  fs440_05: {
    en: 'Florida Statutes § 440.05: election of exemption by corporate officers',
    es: 'Estatutos de Florida § 440.05: exención de oficiales corporativos (en inglés)',
    ru: 'Статуты Флориды § 440.05: освобождение (exemption) для должностных лиц корпорации (англ.)',
  },
  fs440_10: {
    en: 'Florida Statutes § 440.10: liability for compensation; contractors and subcontractors',
    es: 'Estatutos de Florida § 440.10: responsabilidad por la compensación; contratistas y subcontratistas (en inglés)',
    ru: 'Статуты Флориды § 440.10: ответственность за компенсацию; подрядчики и субподрядчики (англ.)',
  },
  fs489_103: {
    en: 'Florida Statutes § 489.103: exemptions from contractor licensing (including minor work under $2,500 and owner-builders)',
    es: 'Estatutos de Florida § 489.103: exenciones de la licencia de contratista (incluye trabajos menores de menos de $2,500 y dueño-constructor) (en inglés)',
    ru: 'Статуты Флориды § 489.103: исключения из лицензирования подрядчиков (в т.ч. мелкие работы до $2,500 и owner-builder) (англ.)',
  },
  fs489_105: {
    en: 'Florida Statutes § 489.105: contractor definitions and license categories',
    es: 'Estatutos de Florida § 489.105: definiciones y categorías de licencias de contratista (en inglés)',
    ru: 'Статуты Флориды § 489.105: определения и категории лицензий подрядчиков (англ.)',
  },
  fs489_115: {
    en: 'Florida Statutes § 489.115: certification and registration; insurance affidavit',
    es: 'Estatutos de Florida § 489.115: certificación y registro; declaración jurada de seguros (en inglés)',
    ru: 'Статуты Флориды § 489.115: сертификация и регистрация; подтверждение страховки (англ.)',
  },
  fs489_507: {
    en: 'Florida Statutes § 489.507: Electrical Contractors’ Licensing Board',
    es: 'Estatutos de Florida § 489.507: Junta de Licencias de Contratistas Eléctricos (en inglés)',
    ru: 'Статуты Флориды § 489.507: Electrical Contractors’ Licensing Board (англ.)',
  },
  fs627_7415: {
    en: 'Florida Statutes § 627.7415: commercial motor vehicles, additional liability insurance',
    es: 'Estatutos de Florida § 627.7415: vehículos motorizados comerciales, seguro de responsabilidad adicional (en inglés)',
    ru: 'Статуты Флориды § 627.7415: коммерческие транспортные средства, дополнительная страховка ответственности (англ.)',
  },
  fs316_302: {
    en: 'Florida Statutes § 316.302: commercial motor vehicles, safety regulations (intrastate)',
    es: 'Estatutos de Florida § 316.302: vehículos motorizados comerciales, normas de seguridad (intraestatal) (en inglés)',
    ru: 'Статуты Флориды § 316.302: коммерческие транспортные средства, правила безопасности (внутри штата) (англ.)',
  },
  fs482_156: {
    en: 'Florida Statutes § 482.156: limited certification for commercial landscape maintenance personnel',
    es: 'Estatutos de Florida § 482.156: certificación limitada para personal de mantenimiento de jardines comerciales (en inglés)',
    ru: 'Статуты Флориды § 482.156: ограниченная сертификация для персонала коммерческого ухода за ландшафтом (англ.)',
  },
  flhsmv: {
    en: 'Florida Highway Safety and Motor Vehicles (FLHSMV): Florida insurance requirements',
    es: 'Departamento de Seguridad en las Carreteras y Vehículos Motorizados de Florida (FLHSMV): requisitos de seguro (en inglés)',
    ru: 'FLHSMV (Департамент безопасности дорожного движения и транспорта Флориды): требования к страховке (англ.)',
  },
  naic: {
    en: 'NAIC Glossary of Insurance Terms: “Builders’ Risk Policies”',
    es: 'Glosario de términos de seguros de la NAIC: “Builders’ Risk Policies” (en inglés)',
    ru: 'Глоссарий страховых терминов NAIC: “Builders’ Risk Policies” (англ.)',
  },
  dfsBr: {
    en: 'Florida Department of Financial Services: Commercial Insurance Coverage FAQs (builder’s risk)',
    es: 'Departamento de Servicios Financieros de Florida: preguntas frecuentes sobre seguros comerciales (builder’s risk) (en inglés)',
    ru: 'Департамент финансовых услуг Флориды (DFS): вопросы о коммерческом страховании (builder’s risk) (англ.)',
  },
  bps2025: {
    en: 'U.S. Census Bureau, Building Permits Survey: 2025 annual permits by state',
    es: 'Oficina del Censo de EE. UU., Encuesta de Permisos de Construcción: permisos anuales 2025 por estado (en inglés)',
    ru: 'Бюро переписи США, Building Permits Survey: разрешения на строительство за 2025 год по штатам (англ.)',
  },
  cbp2023: {
    en: 'U.S. Census Bureau: County Business Patterns 2023 (Florida establishments by industry)',
    es: 'Oficina del Censo de EE. UU.: County Business Patterns 2023 (establecimientos de Florida por industria) (en inglés)',
    ru: 'Бюро переписи США: County Business Patterns 2023 (предприятия Флориды по отраслям) (англ.)',
  },
  fs324_022: {
    en: 'Florida Statutes § 324.022: financial responsibility for property damage',
    es: 'Estatutos de Florida § 324.022: responsabilidad financiera por daños a la propiedad (en inglés)',
    ru: 'Статуты Флориды § 324.022: финансовая ответственность за ущерб имуществу (англ.)',
  },
  naics561720: {
    en: 'U.S. Census Bureau, NAICS 2022: 561720 Janitorial Services (index includes “window cleaning services”)',
    es: 'Oficina del Censo de EE. UU., NAICS 2022: 561720 servicios de limpieza (el índice incluye “window cleaning services”) (en inglés)',
    ru: 'Бюро переписи США, NAICS 2022: 561720 Janitorial Services (в индексе — “window cleaning services”) (англ.)',
  },
  naics561790: {
    en: 'U.S. Census Bureau, NAICS 2022: 561790 Other Services to Buildings and Dwellings (index includes “pressure washing”)',
    es: 'Oficina del Censo de EE. UU., NAICS 2022: 561790 otros servicios a edificios y viviendas (el índice incluye “pressure washing”) (en inglés)',
    ru: 'Бюро переписи США, NAICS 2022: 561790 Other Services to Buildings and Dwellings (в индексе — “pressure washing”) (англ.)',
  },
  dbprLookup: {
    en: 'Florida DBPR: license search',
    es: 'DBPR de Florida: búsqueda de licencias (en inglés)',
    ru: 'DBPR Флориды: поиск лицензии (англ.)',
  },
};

export function sources(lang: Lang, keys: Key[]): Source[] {
  return keys.map((k) => ({ label: LABELS[k][lang], url: URLS[k] }));
}

export const SRC_URL = URLS;
