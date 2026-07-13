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
};

// Manually maintained — same pattern as team-data.ts. An agent adds an entry
// here ONLY after personally calling the business owner to verify the
// business is real and still operating. This is what "Verified by M&K
// Agency" means: a human on our team actually confirmed it by phone.
export const referralBusinesses: ReferralBusiness[] = [
  {
    slug: 'example-realty',
    name: 'Example Realty Group',
    category: 'Realtor',
    address: '100 Main St',
    city: 'Florida City, FL',
    zip: '33034',
    lat: 25.4567,
    lng: -80.4746,
    phone: '(305) 555-0134',
    description: 'Residential real estate serving South Miami-Dade families.',
  },
  {
    slug: 'example-home-inspection',
    name: 'Example Home Inspection',
    category: 'Home Inspection',
    address: '200 W Mowry Dr',
    city: 'Homestead, FL',
    zip: '33030',
    lat: 25.4687,
    lng: -80.4776,
    phone: '(305) 555-0178',
    description: 'Thorough, honest 4-point and wind mitigation inspections.',
  },
];

export const CATEGORIES = [
  'All',
  'Realtor',
  'Contractor',
  'Home Inspection',
  'Restaurant',
  'Retail',
  'Home Services',
  'Other',
];
