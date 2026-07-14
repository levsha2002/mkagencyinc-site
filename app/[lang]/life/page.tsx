import { getDict } from '@/lib/dictionaries';
import LifeGallery from '@/components/LifeGallery';
import { buildAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang).life;
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: buildAlternates(params.lang, '/life'),
  };
}

export default function LifePage({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang).life;

  return (
    <main>
      <section className="life-hero">
        <div className="container">
          <h1>
            {t.h1}
            <br />
            <span className="accent">{t.tagline}</span>
          </h1>
          <p>{t.sub}</p>
        </div>
      </section>

      <LifeGallery />
    </main>
  );
}
