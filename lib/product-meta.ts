// SEO <title>/<meta description> for /[lang]/insurance/[slug].
//
// The description is the product's shortIntro + a contact suffix. Search
// results cut descriptions at ~155-160 characters, and with the full suffix
// many products ran to 165-255. Rule: use the longest suffix (full, medium,
// short) whose result fits in 160 characters; the few intros too long even
// for that get a hand-written description below (same meaning, no new claims).
// shortIntro itself is unchanged because it is also shown on the page.
const MAX_DESC = 160;

const DESC_OVERRIDE: Record<string, Record<string, string>> = {
  en: {
    'business-owners-policy':
      'A package policy that can combine property and liability coverage for eligible small businesses, subject to underwriting. Florida City, FL. Call (305) 859-3953.',
  },
  es: {
    'home-townhouse':
      'Cobertura diseñada para townhomes, donde usted y su HOA aseguran partes distintas de la propiedad. Agencia en Florida City. Llame al (305) 859-3953.',
    'business-owners-policy':
      'Póliza combinada que puede unir cobertura de propiedad y responsabilidad civil para pequeños negocios elegibles, sujeta a suscripción. Llame al (305) 859-3953.',
    'motorcycle-insurance':
      'Cobertura según cómo usted realmente maneja: desde una moto de uso diario hasta una clásica de colección. Agencia en Florida City. Llame al (305) 859-3953.',
  },
  ru: {
    'business-owners-policy':
      'Комбинированный полис может объединять имущество и ответственность малого бизнеса при условии андеррайтинга. Агентство во Florida City. Звоните: (305) 859-3953.',
  },
};

// Titles over ~65 characters get truncated in results.
const TITLE_OVERRIDE: Record<string, Record<string, string>> = {
  ru: { 'general-liability': 'Страхование ответственности (General Liability) | M&K Agency' },
};

/** suffixes: longest first (full, medium, short); the first that fits wins. */
export function productMetaDescription(lang: string, slug: string, shortIntro: string, suffixes: string[]): string {
  const o = DESC_OVERRIDE[lang]?.[slug];
  if (o) return o;
  for (const sfx of suffixes) {
    const d = `${shortIntro} ${sfx}`;
    if (d.length <= MAX_DESC) return d;
  }
  return `${shortIntro} ${suffixes[suffixes.length - 1]}`;
}

export function productMetaTitle(lang: string, slug: string, productTitle: string): string {
  return TITLE_OVERRIDE[lang]?.[slug] || `${productTitle} | M&K Agency, Florida`;
}
