import { buildAlternates } from '@/lib/seo';

const META: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Talk to a Licensed Agent | Auto, Home, Commercial | M&K Agency',
    description:
      'A licensed Florida agent calls you back in minutes. Home insurance from 15+ A-rated carriers, plus auto, condo, commercial & life. English · Español · По-русски.',
  },
  es: {
    title: 'Hable con un Agente Licenciado | Auto, Casa, Comercial | M&K Agency',
    description:
      'Un agente licenciado le devuelve la llamada en minutos. Seguro de casa con 15+ aseguradoras A-rated, además de auto, condominio, comercial y vida. Hablamos español.',
  },
  ru: {
    title: 'Поговорите с лицензированным агентом | Авто, дом, бизнес | M&K Agency',
    description:
      'Лицензированный агент перезвонит за несколько минут. Страхование дома с 15+ компаниями A-rated, плюс авто, кондо, бизнес, жизнь. Говорим по-русски.',
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
