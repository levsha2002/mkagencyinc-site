import Image from 'next/image';
import ProtectionPlanner from '@/components/ProtectionPlanner';
import MortgageCalculator from '@/components/MortgageCalculator';
import { buildAlternates } from '@/lib/seo';

const META: Record<string, { title: string; desc: string; h1: string; sub: string }> = {
  en: {
    title: 'Financial Protection Tools | M&K Agency, Florida',
    desc: 'Free tools: work out a mortgage payment, and see in six questions which parts of your family and property are already protected and which are worth a conversation with a licensed agent.',
    h1: 'Financial protection',
    sub: 'Two free tools, no sign-up and no prices. Work out what a mortgage actually costs each month, then see which parts of your household are already protected and which are still open.',
  },
  es: {
    title: 'Herramientas de Protección Financiera | M&K Agency, Florida',
    desc: 'Herramientas gratuitas: calcule el pago de una hipoteca y vea en seis preguntas qué partes de su familia y su propiedad ya están protegidas y cuáles vale la pena conversar con un agente licenciado.',
    h1: 'Protección financiera',
    sub: 'Dos herramientas gratuitas, sin registro y sin precios. Calcule cuánto cuesta realmente una hipoteca al mes y luego vea qué partes de su hogar ya están protegidas y cuáles siguen abiertas.',
  },
  ru: {
    title: 'Инструменты финансовой защиты | M&K Agency, Флорида',
    desc: 'Бесплатные инструменты: рассчитайте ипотечный платёж и за шесть вопросов посмотрите, что у вашей семьи и имущества уже защищено, а что стоит обсудить с лицензированным агентом.',
    h1: 'Финансовая защита',
    sub: 'Два бесплатных инструмента, без регистрации и без цен. Посчитайте, сколько на самом деле стоит ипотека в месяц, а затем посмотрите, что в вашей семье уже защищено, а что остаётся открытым.',
  },
};

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const m = META[params.lang] || META.en;
  return {
    title: m.title,
    description: m.desc,
    alternates: buildAlternates(params.lang, '/protection-check'),
  };
}

export default function ProtectionCheckPage({ params }: { params: { lang: string } }) {
  const m = META[params.lang] || META.en;

  return (
    <main>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <Image
            src="/images/Family_at_home.jpg"
            alt=""
            width={1152}
            height={864}
            priority
            sizes="(max-width: 800px) 100vw, 760px"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: 280,
              objectFit: 'cover',
              objectPosition: 'center 40%',
              borderRadius: 18,
              marginBottom: 22,
              display: 'block',
            }}
          />
          <h1 style={{ marginBottom: 10 }}>{m.h1}</h1>
          <p style={{ color: 'var(--muted)', lineHeight: 1.6, maxWidth: 640 }}>{m.sub}</p>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 24 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <MortgageCalculator lang={params.lang} />
        </div>
      </section>

      <section className="section" id="protection-check" style={{ paddingTop: 8, scrollMarginTop: 90 }}>
        <div className="container">
          <ProtectionPlanner lang={params.lang} />
        </div>
      </section>
    </main>
  );
}
