export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  // Leave empty until the agent gives you their own words — never invent a quote for them.
  quote?: string;
};

export const team: TeamMember[] = [
  {
    slug: 'mikhail-kozlov',
    name: 'Mikhail Kozlov',
    role: 'Owner & Founder',
    photo: '/images/mikhail.jpg',
    quote: '',
  },
  {
    slug: 'craig-fernandes',
    name: 'Craig Fernandes',
    role: 'Insurance Agent',
    photo: '/images/team/craig-fernandes.jpg',
    quote: '',
  },
  {
    slug: 'shane-henry',
    name: 'Shane Henry',
    role: 'Insurance Agent',
    photo: '/images/team/shane-henry.jpg',
    quote: '',
  },
  {
    slug: 'elena-de-ona',
    name: 'Elena De Oña',
    role: 'Insurance Agent',
    photo: '/images/team/elena-de-ona.jpg',
    quote: '',
  },
  {
    slug: 'brenda-quiroz',
    name: 'Brenda Quiroz',
    role: 'Insurance Agent',
    photo: '/images/team/brenda-quiroz.jpg',
    quote: '',
  },
  {
    slug: 'jose-egues-chalela',
    name: 'Jose Egues Chalela',
    role: 'Insurance Agent',
    photo: '/images/team/jose-egues-chalela.jpg',
    quote: '',
  },
  {
    slug: 'emily-senise',
    name: 'Emily Senise',
    role: 'Insurance Agent',
    photo: '/images/team/emily-senise.jpg',
    quote: '',
  },
  {
    slug: 'carolina-silva',
    name: 'Carolina Silva',
    role: 'Homeowner Policies & Team Lead',
    photo: '/images/team/carolina-silva.jpg',
    quote: '',
  },
];
