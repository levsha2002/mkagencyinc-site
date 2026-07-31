import { buildAlternates } from '@/lib/seo';

const META: Record<string, { title: string; description: string }> = {
  en: {
    // "calls you back in minutes" was a speed claim the office cannot meet —
    // callbacks go out Mon-Fri 9am-6pm ET. Same class as the "quote in 30
    // seconds" wording removed from the ads.
    title: 'Contact M&K Agency | Call, Text or Request a Callback',
    description:
      'Reach any of our licensed agents by name — call, text, visit, or request a callback. English · Español · По-русски.',
  },
  es: {
    title: 'Contáctenos | Llame o Solicite una Llamada | M&K Agency',
    description:
      'Contacte a cualquiera de nuestros agentes licenciados por nombre — llame, envíe un texto, visítenos o solicite una llamada. Hablamos español.',
  },
  ru: {
    title: 'Контакты | Звонок, SMS или обратный звонок | M&K Agency',
    description:
      'Свяжитесь с любым из наших лицензированных агентов по имени — звонок, SMS, визит в офис или обратный звонок. Говорим по-русски.',
  },
};

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const m = META[params.lang] ?? META.en;
  return {
    title: m.title,
    description: m.description,
    alternates: buildAlternates(params.lang, '/quote'),
  };
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
