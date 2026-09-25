import QuotePageClient from '@/components/QuotePageClient';
import RatingBadge from '@/components/RatingBadge';

// ISR: re-render daily. The rating comes from data/reviews.json (see lib/reviews.ts);
// an optional live fetch (RATING_LIVE_FETCH=1) is cached for a week.
export const revalidate = 86400;

// Server wrapper so the rating badge (server component, ISR) can sit in the hero
// of the otherwise client-rendered contact/quote page.
export default function QuotePage({ params }: { params: { lang: string } }) {
  return <QuotePageClient ratingBadge={<RatingBadge lang={params.lang} variant="card" />} />;
}
