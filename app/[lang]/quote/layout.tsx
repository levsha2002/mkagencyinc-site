import { buildAlternates } from '@/lib/seo';

const META: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Get a Free Insurance Quote | Auto, Home, Commercial | M&K Agency',
    description:
      'Free Florida insurance quote in minutes. Compare 15+ A-rated carriers for auto, home, condo, commercial & life. English · Español · По-русски.',
  },
  es: {
    title: 'Cotización de Seguro Gratis | Auto, Casa, Comercial | M&K Agency',
    description:
      'Cotización gratis en minutos. Compare 15+ aseguradoras A-rated para auto, casa, condominio, comercial y vida. Hablamos español.',
  },
  ru: {
    title: 'Бесплатный расчёт страховки | Авто, дом, бизнес | M&K Agency',
    description:
      'Бесплатный расчёт за несколько минут. Сравним 15+ страховых A-rated: авто, дом, кондо, бизнес, жизнь. Говорим по-русски.',
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
