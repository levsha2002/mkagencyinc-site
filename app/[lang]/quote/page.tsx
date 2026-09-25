import QuotePageClient from '@/components/QuotePageClient';
import RatingBadge from '@/components/RatingBadge';

// ISR: re-render daily; the Allstate rating fetch itself is cached for a week
// (explicit, so it holds even when the rating fetch is skipped/fails).
export const revalidate = 86400;

// Server wrapper so the rating badge (server-fetched, ISR) can sit in the hero
// of the otherwise client-rendered contact/quote page.
export default function QuotePage({ params }: { params: { lang: string } }) {
  return <QuotePageClient ratingBadge={<RatingBadge lang={params.lang} variant="card" />} />;
}
