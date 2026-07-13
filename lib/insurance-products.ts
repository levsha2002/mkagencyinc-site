export type InsuranceProduct = {
  slug: string;
  category: 'auto' | 'home' | 'commercial' | 'life' | 'specialty';
  title: string;
  shortIntro: string;
  article: string[]; // paragraphs
  coverageHighlights: string[];
  note?: string; // special callout, e.g. 4-point inspection requirement
  requiresVIN: boolean;
  requiresDrivers: boolean;
  images?: { src: string; alt: string }[]; // representative photos
  subtypes?: { name: string; description: string }[]; // e.g. motorcycle styles
  liabilityExamples?: string[]; // plain-language "what could go wrong" examples
  humanLifeValueNote?: string; // shown above the Human Life Value calculator
};

export const insuranceProducts: InsuranceProduct[] = [
  // ===== AUTO =====
  {
    slug: 'auto-personal',
    category: 'auto',
    title: 'Personal Auto Insurance',
    shortIntro: 'Coverage for the vehicle you drive every day — to work, school, and everywhere in between.',
    article: [
      "A car accident doesn't just damage your vehicle — it can put your savings, your income, and your financial future at risk. We focus on coverage that protects what you've built, not just the state minimum.",
      "For drivers who want more, we can offer accident forgiveness so one mistake doesn't spike your rate, plus 24/7 online access to your policy — view your ID cards, make payments, and file a claim from your phone.",
    ],
    coverageHighlights: [
      'Bodily injury & property damage liability',
      'Collision & comprehensive coverage',
      'Uninsured/underinsured motorist protection',
      'Roadside assistance & rental reimbursement',
    ],
    requiresVIN: true,
    requiresDrivers: true,
  },
  {
    slug: 'auto-commercial-use',
    category: 'auto',
    title: 'Commercial Use Auto Insurance',
    shortIntro: 'For vehicles used for work — deliveries, service calls, hauling equipment, or transporting goods.',
    article: [
      "If you use your vehicle for anything beyond a personal commute — deliveries, client visits, hauling tools or inventory — a personal auto policy typically won't cover a claim that happens during business use. Commercial use coverage closes that gap.",
      'We work with carriers who understand small business realities in Florida, from single-vehicle operators to small fleets.',
    ],
    coverageHighlights: [
      'Liability coverage for business-use driving',
      'Cargo & equipment coverage options',
      'Hired & non-owned auto coverage',
      'Coverage for single vehicles or small fleets',
    ],
    requiresVIN: true,
    requiresDrivers: true,
  },
  {
    slug: 'auto-rideshare',
    category: 'auto',
    title: 'Uber & Lyft (Rideshare) Insurance',
    shortIntro: 'Coverage built for the gap between your personal policy and what Uber/Lyft provide.',
    article: [
      "Uber and Lyft provide insurance while you're actively on a trip — but there are real coverage gaps in between rides, and most personal auto policies exclude rideshare driving entirely. Getting caught in that gap after an accident is one of the most common (and expensive) mistakes rideshare drivers make.",
      'A rideshare endorsement or hybrid policy fills that gap so you\u2019re protected from the moment you go online in the app until you go offline.',
    ],
    coverageHighlights: [
      'Coverage during app-on, waiting-for-ride-request periods',
      'Gap coverage between rideshare company policy periods',
      'Liability & physical damage options',
      'Works alongside your personal auto policy',
    ],
    requiresVIN: true,
    requiresDrivers: true,
  },

  {
    slug: 'auto-electric-vehicle',
    category: 'auto',
    title: 'Electric Vehicle Insurance',
    shortIntro: 'Competitive auto insurance rates for electric vehicles.',
    article: [
      "We don't sell vehicle warranties — that's not something we offer. What we do offer is competitive auto insurance rates for electric vehicles, from Tesla to Rivian to any EV on the road.",
      'Get a fast, no-pressure quote from a real local agent.',
    ],
    coverageHighlights: [],
    requiresVIN: true,
    requiresDrivers: true,
  },

  // ===== HOME =====
  {
    slug: 'home-single-family',
    category: 'home',
    title: 'Single Family Home Insurance',
    shortIntro: 'Protection for your house, from hurricanes and flooding to everyday accidents.',
    article: [
      "Florida homeowners face risks most of the country doesn't — hurricanes, flooding, and rising reinsurance costs. We work with Citizens, Florida Peninsula, Edison, Heritage, and other trusted carriers to find coverage that actually holds up when a storm hits.",
      "Buying a home? We'll help you get a policy in place fast so you can close on time — including guidance on inspections your lender or carrier may require.",
    ],
    coverageHighlights: [
      'Dwelling, other structures & personal property coverage',
      'Wind & hurricane coverage',
      'Liability & medical payments coverage',
      'Loss of use / additional living expenses',
    ],
    liabilityExamples: [
      "You hire a handyman or contractor who doesn't carry his own insurance or workers' comp — he falls off your roof or is shocked doing electrical work. Without coverage of his own, the medical bills often land on you, and they can be enormous.",
      'Neighborhood kids come over to play in your yard or pool and one of them breaks an arm or a leg — medical bills alone can run into the hundreds of thousands of dollars, and as the property owner you can be held liable even if you did nothing wrong.',
      "A tree branch from your yard falls and damages a neighbor's roof or car.",
      'A delivery driver trips on a broken step and is injured on your property.',
    ],
    note: 'Homes older than 20 years typically require a 4-point inspection and wind mitigation inspection before a carrier will issue a new policy. We can point you to inspectors who turn these around quickly.',
    requiresVIN: false,
    requiresDrivers: false,
  },
  {
    slug: 'home-townhouse',
    category: 'home',
    title: 'Townhouse Insurance',
    shortIntro: "Coverage designed for townhome ownership, where you and your HOA each insure different parts of the property.",
    article: [
      "Townhouse insurance sits in between a single-family home policy and a condo policy — your HOA's master policy usually covers the building structure, while you're responsible for interior finishes, personal property, and liability.",
      "We'll help you understand exactly what your HOA's policy covers so you don't end up over-insured or, worse, with a gap no one catches until there's a claim.",
    ],
    coverageHighlights: [
      'Interior structure & betterments coverage',
      'Personal property protection',
      'Liability & loss assessment coverage',
      'Coordinated with your HOA master policy',
    ],
    note: 'Townhouses older than 20 years may also require a 4-point inspection and wind mitigation report, depending on the carrier.',
    requiresVIN: false,
    requiresDrivers: false,
  },
  {
    slug: 'home-condo',
    category: 'home',
    title: 'Condo Insurance',
    shortIntro: "Protection for everything inside your unit's walls — the part your condo association doesn't cover.",
    article: [
      "Your condo association's master policy covers the building itself, but it almost never covers your flooring, cabinets, appliances, personal belongings, or liability inside your unit. That's what an HO-6 condo policy is for.",
      "Many mortgage lenders require proof of condo insurance before closing — we can typically turn around a quote and binder quickly.",
      "If a pipe bursts or your bathtub overflows and water damage spreads into a neighbor's unit, your liability exposure can be enormous — repair costs, temporary housing for your neighbor, and even bodily injury claims if someone is hurt. Standard condo liability limits are often not enough to cover a claim like this.",
    ],
    coverageHighlights: [
      'Interior unit coverage (HO-6)',
      'Personal property & loss of use',
      'Liability coverage inside your unit',
      'Loss assessment coverage for HOA special assessments',
    ],
    note: 'For units in buildings older than 20 years, some carriers require a 4-point inspection and wind mitigation report at the building level.',
    requiresVIN: false,
    requiresDrivers: false,
  },

  // ===== COMMERCIAL =====
  {
    slug: 'general-liability',
    category: 'commercial',
    title: 'General Liability Insurance',
    shortIntro: 'The foundational policy that protects your business from third-party injury and property damage claims.',
    article: [
      "Whether a customer slips at your storefront or your work damages a client's property, general liability insurance covers the legal and medical costs that follow — and many landlords, contracts, and licensing boards require it before you can even operate.",
      'We help contractors, retailers, restaurants, and service businesses across Florida find the right limits at the right price.',
    ],
    coverageHighlights: [
      'Bodily injury & property damage liability',
      'Products & completed operations coverage',
      'Personal & advertising injury coverage',
      'Meets most landlord & contract requirements',
    ],
    requiresVIN: false,
    requiresDrivers: false,
  },
  {
    slug: 'business-owners-policy',
    category: 'commercial',
    title: 'Business Owners Policy (BOP)',
    shortIntro: 'A bundled policy combining property and liability coverage at a better price than buying separately.',
    article: [
      "A Business Owners Policy packages general liability with commercial property coverage — protecting your building, equipment, and inventory alongside your liability exposure — usually at a lower combined cost than two separate policies.",
      "It's a strong fit for small to mid-sized businesses: retail shops, offices, and restaurants that own or lease a physical space.",
    ],
    coverageHighlights: [
      'Commercial property coverage',
      'General liability coverage',
      'Business interruption coverage',
      'Optional add-ons: equipment breakdown, cyber, more',
    ],
    requiresVIN: false,
    requiresDrivers: false,
  },
  {
    slug: 'errors-omissions',
    category: 'commercial',
    title: 'Errors & Omissions (E&O) Insurance',
    shortIntro: 'Protection for professionals against claims of mistakes, negligence, or bad advice.',
    article: [
      "If your business gives advice, provides a service, or makes professional recommendations, a single unhappy client alleging a mistake can trigger a costly lawsuit — even if you did nothing wrong. E&O insurance covers your legal defense and any resulting damages.",
      'Common for consultants, agents, real estate professionals, and other service-based businesses.',
    ],
    coverageHighlights: [
      'Legal defense costs for professional negligence claims',
      'Coverage for alleged errors, omissions, or negligent acts',
      'Settlement & judgment coverage up to policy limits',
      'Available as claims-made coverage',
    ],
    requiresVIN: false,
    requiresDrivers: false,
  },
  {
    slug: 'commercial-auto',
    category: 'commercial',
    title: 'Commercial Auto Insurance',
    shortIntro: 'Fleet and business-vehicle coverage for companies that rely on the road to operate.',
    article: [
      "From a single work truck to a small fleet, commercial auto insurance covers vehicles titled to your business or used primarily for business operations — with higher liability limits than a typical personal policy allows.",
      'We work with carriers like Progressive, Next, and Hiscox to build fleet coverage that fits contractors, trades, and delivery-based businesses.',
    ],
    coverageHighlights: [
      'Liability coverage built for business exposure',
      'Physical damage coverage for owned vehicles',
      'Hired & non-owned auto coverage',
      'Fleet discounts for multiple vehicles',
    ],
    requiresVIN: true,
    requiresDrivers: true,
  },

  // ===== LIFE =====
  {
    slug: 'life-insurance',
    category: 'life',
    title: 'Life Insurance',
    shortIntro: 'Protect the people who depend on you, with coverage that fits your budget.',
    article: [
      "Life insurance isn't about you — it's about making sure the people who depend on you are financially protected if something happens to you. We help you compare term and whole life options so your family's future is never left to chance.",
      'We work with multiple A-rated carriers to find coverage that fits your budget and life stage, whether you need simple term coverage or a permanent policy that builds cash value.',
    ],
    coverageHighlights: [
      'Term life coverage (10, 20, 30-year options)',
      'Whole life & permanent coverage options',
      'Coverage amounts to fit any budget',
      'No medical exam options available for many applicants',
    ],
    humanLifeValueNote: "One way to think about how much life insurance you need is your \"Human Life Value\" — essentially, the financial value you provide to the people who depend on you. It factors in your income, how many working years you have left, and your outstanding debts. It's not a perfect science, but it's a useful starting point. Try the calculator below.",
    requiresVIN: false,
    requiresDrivers: false,
  },

  // ===== SPECIALTY / OTHER PRIVATE INSURANCE =====
  {
    slug: 'pet-insurance',
    category: 'specialty',
    title: 'Pet Insurance',
    shortIntro: 'Help covering veterinary bills when accidents or illness happen.',
    article: [
      'Veterinary costs for surgery, emergency care, or an ongoing illness can run into the thousands. Pet insurance reimburses a portion of those costs so a medical decision for your pet is never a financial one.',
    ],
    coverageHighlights: [
      'Accident & illness coverage',
      'Optional wellness/routine care add-ons',
      'Choose your own veterinarian',
      'Reimbursement-based claims',
    ],
    requiresVIN: false,
    requiresDrivers: false,
  },
  {
    slug: 'boat-insurance',
    category: 'specialty',
    title: 'Boat Insurance',
    shortIntro: "Coverage for your boat on the water, at the dock, and in storage.",
    article: [
      "Whether it's a center console for weekend fishing or a family boat for cruising the coast, boat insurance covers physical damage, liability, and towing — protection your homeowners policy typically won't extend to a vessel.",
    ],
    coverageHighlights: [
      'Physical damage (hull, motor, equipment)',
      'Liability & medical payments coverage',
      'On-water towing & assistance',
      'Coverage for trailers',
    ],
    requiresVIN: true,
    requiresDrivers: false,
  },
  {
    slug: 'jet-ski-insurance',
    category: 'specialty',
    title: 'Jet Ski / PWC Insurance',
    shortIntro: 'Liability and damage coverage for personal watercraft.',
    article: [
      "Personal watercraft are involved in a disproportionate share of boating accidents — which makes liability coverage especially important. A PWC policy covers physical damage and liability if you injure someone or damage property on the water.",
    ],
    coverageHighlights: [
      'Physical damage coverage',
      'Liability coverage',
      'Coverage for multiple PWCs on one policy',
      'Trailer coverage available',
    ],
    requiresVIN: true,
    requiresDrivers: false,
  },
  {
    slug: 'off-road-insurance',
    category: 'specialty',
    title: 'Off-Road Vehicle Insurance (ATV/UTV)',
    shortIntro: 'Coverage for ATVs, UTVs, and other off-road vehicles.',
    article: [
      'ATVs and UTVs are usually excluded from homeowners policies, and injuries involving them tend to be serious. A dedicated off-road policy covers physical damage and liability whether you ride for recreation or use the vehicle on a property or work site.',
    ],
    coverageHighlights: [
      'Physical damage coverage',
      'Liability coverage',
      'Accessory & equipment coverage',
      'Coverage on and off your property',
    ],
    requiresVIN: true,
    requiresDrivers: false,
  },
  {
    slug: 'golf-cart-insurance',
    category: 'specialty',
    title: 'Golf Cart Insurance',
    shortIntro: 'Coverage for golf carts driven on courses, in communities, or on the street.',
    article: [
      'Many South Florida communities allow street-legal golf carts on local roads — but most homeowners policies exclude them once they leave your property. A golf cart policy covers liability and physical damage wherever you drive it.',
    ],
    coverageHighlights: [
      'Liability coverage on and off the golf course',
      'Physical damage coverage',
      'Coverage for street-legal & standard carts',
      'Optional accessory coverage',
    ],
    requiresVIN: false,
    requiresDrivers: false,
  },
  {
    slug: 'motorcycle-insurance',
    category: 'specialty',
    title: 'Motorcycle Insurance',
    shortIntro: "Coverage built around how you actually ride — from a daily-commute standard bike to a collector's vintage classic.",
    article: [
      "Motorcycle insurance isn't one-size-fits-all. A supersport bike built for the track carries a very different risk profile than a touring bike built for cross-country comfort, and carriers price coverage accordingly. We shop multiple A-rated carriers to match your specific bike, riding style, and experience level to the right policy.",
      "Whichever you ride, we'll help you find liability, collision, and comprehensive coverage at a fair price — including gear, accessory, and custom parts coverage on many policies.",
    ],
    coverageHighlights: [
      'Liability, collision & comprehensive coverage',
      'Custom parts, gear & accessory coverage',
      'Agreed-value coverage available for vintage & collector bikes',
      'Seasonal/lay-up coverage options',
    ],
    requiresVIN: true,
    requiresDrivers: false,
    images: [
      { src: '/images/insurance/motorcycle-standard.jpg', alt: 'Standard motorcycle' },
      { src: '/images/insurance/motorcycle-cruiser.jpg', alt: 'Cruiser motorcycle' },
      { src: '/images/insurance/motorcycle-threewheel.jpg', alt: 'Three-wheeled motorcycle' },
    ],
    subtypes: [
      {
        name: 'Standard motorcycle',
        description: 'An everyday, all-purpose motorcycle with a balanced engine size and upright seating position — built for commuting and casual riding rather than a specific riding style.',
      },
      {
        name: 'Cruiser motorcycle',
        description: 'Low seat height, relaxed riding position, and larger engine displacement. A popular choice for casual weekend rides and longer leisure trips.',
      },
      {
        name: 'Touring motorcycle',
        description: 'Built for long-distance comfort — larger fairings, weather protection, and storage compartments for cross-country trips.',
      },
      {
        name: 'Sport touring motorcycle',
        description: 'Blends sport-bike performance with touring comfort, for riders who want spirited handling without giving up long-distance comfort.',
      },
      {
        name: 'Supersport motorcycle',
        description: 'High-performance, track-inspired design with powerful engines and an aggressive riding position. Typically carries the highest insurance rating of any category.',
      },
      {
        name: 'Sport motorcycle',
        description: 'Lighter weight and performance-focused, built for speed and precise handling on paved roads.',
      },
      {
        name: 'Dual sport',
        description: 'Designed for both on-road and off-road riding, with higher ground clearance and versatile tires for mixed terrain.',
      },
      {
        name: 'Harley-Davidson motorcycle',
        description: 'A distinct category due to strong resale value and frequent customization — often insured with higher coverage limits to reflect actual replacement cost.',
      },
      {
        name: 'Adventure touring motorcycle',
        description: 'Built for long-distance travel over mixed terrain, with rugged suspension, larger fuel tanks, and durability for pavement and unpaved trails alike.',
      },
      {
        name: 'Moped / Motor scooter — sport',
        description: 'A smaller-displacement scooter styled for a sportier look and feel, typically used for short urban trips.',
      },
      {
        name: 'Moped / Motor scooter — standard',
        description: 'A small-displacement, automatic-transmission scooter built for basic commuting and everyday urban transportation.',
      },
      {
        name: 'Vintage motorcycle',
        description: 'Classic and collector motorcycles, often eligible for agreed-value coverage that reflects their appreciating value rather than standard depreciation.',
      },
      {
        name: 'Three-wheeled motorcycle',
        description: 'Trikes and reverse-trikes (including autocycles) that offer added stability with a third wheel — whether factory-built or professionally converted.',
      },
    ],
  },
];

export function getProductsByCategory(category: InsuranceProduct['category']) {
  return insuranceProducts.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string) {
  return insuranceProducts.find((p) => p.slug === slug);
}
