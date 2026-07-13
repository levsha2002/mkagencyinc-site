export type ReferralBusiness = {
  slug: string;
  name: string;
  category: string;
  city: string;
  lat: number;
  lng: number;
  phone: string;
  description: string;
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
    city: 'Florida City, FL',
    lat: 25.4567,
    lng: -80.4746,
    phone: '(305) 555-0134',
    description: 'Residential real estate serving South Miami-Dade families.',
  },
  {
    slug: 'example-auto-repair',
    name: 'Example Auto Repair',
    category: 'Auto Repair',
    city: 'Homestead, FL',
    lat: 25.4687,
    lng: -80.4776,
    phone: '(305) 555-0178',
    description: 'Family-owned auto repair shop, honest pricing.',
  },
];

export const CATEGORIES = [
  'All',
  'Realtor',
  'Contractor',
  'Auto Repair',
  'Restaurant',
  'Retail',
  'Home Services',
  'Other',
];
