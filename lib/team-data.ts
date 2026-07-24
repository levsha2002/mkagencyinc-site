export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  // Leave empty until the agent gives you their own words — never invent a quote for them.
  quote?: string;
  // Optional CSS object-position override for the circular photo crop on the
  // /agents page. Defaults to "center 20%" (see .agent-row img in globals.css)
  // when not set — only needed when that default sits a bit too high for a
  // particular photo.
  photoPosition?: string;
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
    role: 'Licensed Insurance Agent',
    photo: '/images/team/craig-fernandes.jpg',
    quote: "Helping a family get back on their feet after a claim is why I do this job.",
  },
  {
    slug: 'shane-henry',
    name: 'Shane Henry',
    role: 'Licensed Insurance Agent',
    photo: '/images/team/shane-henry.jpg',
    quote: "Insurance is about trust. I want every client to feel like they have a friend in this business.",
  },
  {
    slug: 'elena-de-ona',
    name: 'Elena De Oña',
    role: 'Licensed Insurance Agent',
    photo: '/images/team/elena-de-ona.jpg',
    quote: "I love that I can serve our Florida community in English, Spanish, and with a smile.",
  },
  {
    slug: 'brenda-quiroz',
    name: 'Brenda Quiroz',
    role: 'Licensed Insurance Agent',
    photo: '/images/team/brenda-quiroz.jpg',
    quote: "Every policy is a promise. I take that seriously for every single client.",
  },
  {
    slug: 'jose-egues-chalela',
    name: 'Jose Egues Chalela',
    role: 'Licensed Insurance Agent',
    photo: '/images/team/jose-egues-chalela.jpg',
    quote: "Florida families deserve an agent who actually picks up the phone. That's me.",
  },
  {
    slug: 'emily-senise',
    name: 'Emily Senise',
    role: 'Licensed Insurance Agent',
    photo: '/images/team/emily-senise.jpg',
    quote: "I love the moment a client realizes they're finally covered the right way.",
  },
  {
    slug: 'carolina-silva',
    name: 'Carolina Silva',
    role: 'Licensed Insurance Agent — Homeowner Policies & Team Lead',
    photo: '/images/team/carolina-silva.jpg',
    quote: "Protecting someone's home is personal to me — it's where their whole life happens.",
  },
];
