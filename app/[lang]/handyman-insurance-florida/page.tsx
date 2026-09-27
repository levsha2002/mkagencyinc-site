import BusinessServicePage, { businessMetadata } from '@/components/business/BusinessServicePage';

// Business-type service page. Content: content/pages/business/ (see index.ts).
export const revalidate = 86400;

const PATH = '/handyman-insurance-florida';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  return businessMetadata(PATH, params.lang);
}

export default function Page({ params }: { params: { lang: string } }) {
  return <BusinessServicePage path={PATH} lang={params.lang} />;
}
