import CityServicePage, { cityMetadata } from '@/components/city/CityServicePage';

// Local SEO page. Content: content/pages/city/car-insurance-fort-lauderdale-fl.ts (see index.ts).
// ISR daily: the RatingBadge reads data/reviews.json.
export const revalidate = 86400;

const PATH = '/car-insurance-fort-lauderdale-fl';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  return cityMetadata(PATH, params.lang);
}

export default function Page({ params }: { params: { lang: string } }) {
  return <CityServicePage path={PATH} lang={params.lang} />;
}
