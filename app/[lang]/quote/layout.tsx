import { buildAlternates } from '@/lib/seo';

const META: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Contact Our Agents | Call, Text, Visit, or Request a Callback | M&K Agency',
    description:
      'Reach any of our licensed agents by name — call, text, visit, or request a callback and a local Florida agent calls you back in minutes. English · Español · По-русски.',
  },
  es: {
    title: 'Contacte a Nuestros Agentes | Llame, Texto o Solicite una Llamada | M&K Agency',
    description:
      'Contacte a cualquiera de nuestros agentes licenciados por nombre — llame, envíe un texto, visítenos o solicite una llamada. Hablamos español.',
  },
  ru: {
    title: 'Наши агенты | Звонок, SMS или обратный звонок | M&K Agency',
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
