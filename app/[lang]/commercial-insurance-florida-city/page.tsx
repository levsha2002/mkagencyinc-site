import GuidePage, { guideMetadata } from '@/components/guides/GuidePage';

// Local agent hub / guide. Content: content/pages/guides/commercial-insurance-florida-city.ts (see index.ts).
export const revalidate = 86400;

const PATH = '/commercial-insurance-florida-city';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  return guideMetadata(PATH, params.lang);
}

export default function Page({ params }: { params: { lang: string } }) {
  return <GuidePage path={PATH} lang={params.lang} />;
}
