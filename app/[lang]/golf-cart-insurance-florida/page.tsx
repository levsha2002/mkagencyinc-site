import RecPage, { recMetadata } from '@/components/rec/RecPage';

// Florida landing page. Content: content/pages/rec/ (see index.ts).
export const revalidate = 86400;

const PATH = '/golf-cart-insurance-florida';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  return recMetadata(PATH, params.lang);
}

export default function Page({ params }: { params: { lang: string } }) {
  return <RecPage path={PATH} lang={params.lang} />;
}
