import type { Lang, SourceKey } from './types';

// Every link was opened and checked on Oct 3, 2026 (see PR description).
// Labels are localized; the documents themselves are in English.
type Src = { url: string; label: Record<Lang, string> };

export const SOURCES: Record<SourceKey, Src> = {
  iiiUninsured: {
    url: 'https://www.iii.org/fact-statistic/facts-statistics-uninsured-motorists',
    label: {
      en: 'Insurance Information Institute: Facts + Statistics, Uninsured motorists (Insurance Research Council estimates, 2023)',
      es: 'Insurance Information Institute: datos sobre conductores sin seguro (estimaciones del Insurance Research Council, 2023)',
      ru: 'Insurance Information Institute: данные о незастрахованных водителях (оценки Insurance Research Council, 2023)',
    },
  },
  flhsmvInsurance: {
    url: 'https://www.flhsmv.gov/insurance/',
    label: {
      en: 'Florida Department of Highway Safety and Motor Vehicles: Insurance requirements',
      es: 'Departamento de Seguridad Vial y Vehículos Motorizados de Florida (FLHSMV): requisitos de seguro',
      ru: 'Департамент безопасности дорожного движения Флориды (FLHSMV): требования к страховке',
    },
  },
  statPip: {
    url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.736',
    label: {
      en: 'Florida Statutes, section 627.736 (PIP benefits)',
      es: 'Estatutos de Florida, sección 627.736 (beneficios de PIP)',
      ru: 'Законы Флориды, статья 627.736 (выплаты по PIP)',
    },
  },
  statUm: {
    url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.727',
    label: {
      en: 'Florida Statutes, section 627.727 (uninsured and underinsured motorist coverage)',
      es: 'Estatutos de Florida, sección 627.727 (cobertura de conductor sin seguro o con seguro insuficiente)',
      ru: 'Законы Флориды, статья 627.727 (покрытие UM/UIM)',
    },
  },
  dfsAuto: {
    url: 'https://myfloridacfo.com/division/consumers/understanding-insurance/personal-automobile-insurance-overview',
    label: {
      en: 'Florida Department of Financial Services: Personal automobile insurance overview',
      es: 'Departamento de Servicios Financieros de Florida: resumen del seguro de auto personal',
      ru: 'Департамент финансовых услуг Флориды: обзор личного автострахования',
    },
  },
  dfsToolkit: {
    url: 'https://www.myfloridacfo.com/docs-sf/consumer-services-libraries/consumerservices-documents/understanding-coverage/consumer-guides/english---automobile-insurance-toolkit.pdf',
    label: {
      en: 'Florida Department of Financial Services: Automobile Insurance Toolkit (PDF)',
      es: 'Departamento de Servicios Financieros de Florida: guía del seguro de auto (PDF, en inglés)',
      ru: 'Департамент финансовых услуг Флориды: справочник по автострахованию (PDF, англ.)',
    },
  },
  nhtsaCost: {
    url: 'https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813403.pdf',
    label: {
      en: 'NHTSA: The Economic and Societal Impact of Motor Vehicle Crashes, 2019 (Revised), DOT HS 813 403 (PDF)',
      es: 'NHTSA: impacto económico y social de los choques de tránsito, 2019 (revisado), DOT HS 813 403 (PDF, en inglés)',
      ru: 'NHTSA: экономические и социальные последствия ДТП, 2019 (ред.), DOT HS 813 403 (PDF, англ.)',
    },
  },
  flhsmvHitRun: {
    url: 'https://www.flhsmv.gov/2025/02/03/should-i-stay-or-should-i-go-the-fear-factor-behind-hit-and-run-crashes/',
    label: {
      en: 'FLHSMV news release (Feb. 3, 2025): hit-and-run crashes in Florida',
      es: 'Comunicado del FLHSMV (3 de febrero de 2025): choques con fuga en Florida',
      ru: 'Пресс-релиз FLHSMV (3 февраля 2025): ДТП, с места которых скрылись',
    },
  },
  ssaDisability: {
    url: 'https://www.ssa.gov/pubs/EN-05-10029.pdf',
    label: {
      en: 'Social Security Administration: Disability Benefits, publication EN-05-10029 (PDF)',
      es: 'Administración del Seguro Social: beneficios por incapacidad, publicación EN-05-10029 (PDF, en inglés)',
      ru: 'Social Security Administration: пособия по инвалидности, публикация EN-05-10029 (PDF, англ.)',
    },
  },
  limra2026: {
    url: 'https://www.limra.com/siteassets/newsroom/liam/2026/facts-about-life-insurance.pdf',
    label: {
      en: 'LIMRA and Life Happens: 2026 Insurance Barometer, Facts About Life Insurance (PDF)',
      es: 'LIMRA y Life Happens: Insurance Barometer 2026, datos sobre el seguro de vida (PDF, en inglés)',
      ru: 'LIMRA и Life Happens: Insurance Barometer 2026, факты о страховании жизни (PDF, англ.)',
    },
  },
  iiiDogBite: {
    url: 'https://www.iii.org/article/spotlight-on-dog-bite-liability',
    label: {
      en: 'Insurance Information Institute: Spotlight on dog bite liability (2025 data)',
      es: 'Insurance Information Institute: responsabilidad por mordidas de perro (datos de 2025)',
      ru: 'Insurance Information Institute: ответственность за укусы собак (данные за 2025 год)',
    },
  },
  fdohDrowning: {
    url: 'https://www.floridahealth.gov/individual-family-health/child-infant-youth/drowning-prevention/',
    label: {
      en: 'Florida Department of Health: Drowning prevention',
      es: 'Departamento de Salud de Florida: prevención de ahogamientos',
      ru: 'Департамент здравоохранения Флориды: профилактика утоплений',
    },
  },
  case4dca2020: {
    url: 'https://edca.4dca.org/DCADocs/2018/3652/183652_DC08_06242020_090051_i.pdf',
    label: {
      en: 'Florida Fourth District Court of Appeal, opinion in cases 4D18-3652 and 4D19-118 (June 24, 2020) (PDF)',
      es: 'Cuarto Tribunal de Apelaciones de Florida, opinión en los casos 4D18-3652 y 4D19-118 (24 de junio de 2020) (PDF)',
      ru: 'Апелляционный суд 4-го округа Флориды, решение по делам 4D18-3652 и 4D19-118 (24 июня 2020) (PDF)',
    },
  },
  caseSc1785: {
    url: 'https://flcourts-media.flcourts.gov/content/download/425459/opinion/sc17-85.pdf',
    label: {
      en: 'Florida Supreme Court, opinion in case SC17-85 (Sept. 20, 2018) (PDF)',
      es: 'Corte Suprema de Florida, opinión en el caso SC17-85 (20 de septiembre de 2018) (PDF)',
      ru: 'Верховный суд Флориды, решение по делу SC17-85 (20 сентября 2018) (PDF)',
    },
  },
  caseSc012846: {
    url: 'https://hallapproved.com/fl/cases/supreme/2004/1694656/',
    label: {
      en: 'Florida Supreme Court, opinion in case SC01-2846 (2004), full text',
      es: 'Corte Suprema de Florida, opinión en el caso SC01-2846 (2004), texto completo',
      ru: 'Верховный суд Флориды, решение по делу SC01-2846 (2004), полный текст',
    },
  },
};

export function sourceList(keys: string[], lang: Lang) {
  return keys.map((k) => {
    const s = SOURCES[k as SourceKey];
    return { label: s.label[lang], url: s.url };
  });
}
