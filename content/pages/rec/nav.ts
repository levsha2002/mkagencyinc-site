// Light-weight link list for the Florida rec landing pages (no content imports), used by
// the footer, RelatedCoverage, the /insurance hub and the sitemap.
type Lang = 'en' | 'es' | 'ru';
export const REC_NAV: { path: string; icon: string; label: Record<Lang, string> }[] = [
  { path: '/motorcycle-insurance-florida-city', icon: '🏍️', label: { en: 'Motorcycle', es: 'Motocicleta', ru: 'Мотоцикл' } },
  { path: '/jet-ski-insurance-florida', icon: '🌊', label: { en: 'Jet ski (PWC)', es: 'Jet ski', ru: 'Гидроцикл' } },
  { path: '/boat-insurance-florida', icon: '🚤', label: { en: 'Boat', es: 'Bote', ru: 'Лодка' } },
  { path: '/atv-utv-insurance-florida', icon: '🏁', label: { en: 'ATV, UTV & dirt bike', es: 'ATV, UTV y moto de tierra', ru: 'Квадроцикл, UTV, эндуро' } },
  { path: '/golf-cart-insurance-florida', icon: '⛳', label: { en: 'Golf cart & LSV', es: 'Carrito de golf y LSV', ru: 'Гольф-кар и LSV' } },
  { path: '/slingshot-autocycle-insurance-florida', icon: '🛞', label: { en: 'Slingshot & autocycle', es: 'Slingshot y autociclo', ru: 'Slingshot и автоцикл' } },
  { path: '/life-insurance-florida', icon: '❤️', label: { en: 'Life insurance', es: 'Seguro de vida', ru: 'Страхование жизни' } },
];
export const REC_NAV_TITLE: Record<Lang, string> = {
  en: 'Florida guides',
  es: 'Guías de Florida',
  ru: 'Гиды по Флориде',
};
