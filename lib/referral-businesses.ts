export type ReferralBusiness = {
  slug: string;
  name: string;
  category: string;
  address: string;
  city: string;
  zip: string;
  lat: number;
  lng: number;
  phone: string;
  description: string;
  website?: string; // link shown on the map card, only for verified local businesses
  cardImage?: string; // path under /images/referral/<slug>.jpg — add after phone verification
  languages?: ('en' | 'es' | 'ru')[]; // languages the business actually serves in — the single most useful filter for our audience
};

// Manually maintained — same pattern as team-data.ts. An agent adds an entry
// here ONLY after personally calling the business owner to verify the
// business is real and still operating. This is what "Verified by M&K
// Agency" means: a human on our team actually confirmed it by phone.
// Intentionally empty. The two placeholder entries that used to live here
// (a sample realty office and a sample home inspector, with 555 phone numbers)
// were invented and were rendered on the live site with a "Verified by M&K Agency" badge. Never add
// placeholder, sample or test businesses to this list: everything in it is
// published in all three languages. While the list is empty the referral page
// shows an honest "coming soon" state instead of the directory and map.
export const referralBusinesses: ReferralBusiness[] = [];

export const CATEGORIES = [
  'All',
  'Plumber',
  'Roofer',
  'Home Inspection',
  'Contractor / Builder',
  'Electrician',
  'HVAC',
  'Handyman',
  'Auto Repair',
  'Towing',
  'Realtor',
  'Loan Officer',
  'Title / Closing',
  'Cleaning',
  'Landscaping',
  'Pool Service',
  'Moving',
  'Food Store',
  'Restaurant',
  'Retail',
  'Auto Dealer',
  'Legal',
  'Medical / Dental',
  'Childcare',
  'Beauty',
  'Other',
];
