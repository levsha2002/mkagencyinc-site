import type { BlogPost } from '../types';

// Facts checked 2026-09-26 against citizensfla.com/depoppl, /depopulation,
// the Citizens "Policyholder Choice" article, floir.gov take-out companies page,
// s. 627.351(6)(c)5. and (6)(ii) F.S. and s. 627.701(3) F.S. (2026).
// Deliberately generic: no private insurer is named.
export const post: BlogPost = {
  slug: 'citizens-takeout-offer',
  datePublished: '2026-09-26',
  translations: {
    en: {
      title: 'Got a Citizens Take-Out Offer? How to Compare It Before You Accept',
      metaTitle: 'Citizens Take-Out Offer? How to Compare It | M&K Agency',
      description: 'Got a Citizens take-out letter? How the 20% rule works, what happens if you miss the deadline, and a checklist to compare the offer with your Citizens policy.',
      excerpt: 'A take-out letter from Citizens comes with a deadline, and doing nothing is a decision. Here is how the 20% rule works and what to compare before you accept.',
      category: 'Homeowners insurance',
      body: [
        { type: 'p', text: 'Citizens Property Insurance Corporation is Florida’s state-created insurer, meant to be the insurer of last resort. Florida law requires it to move policies back to the private market through its **Depopulation Program**, and insurers approved by the Florida Office of Insurance Regulation (OIR) can ask to "take out" Citizens policies. If one or more of them picked yours, you will get a Depopulation Packet from Citizens.' },
        { type: 'p', text: 'Don’t file it away. The packet has a deadline, and if you do nothing, Citizens decides for you. Here is how the process works and how to compare an offer with your current policy before you choose.' },

        { type: 'h2', text: 'Which letter did you get?' },
        { type: 'p', text: 'Citizens sends one of two kinds of letters, and the difference matters:' },
        { type: 'ul', items: [
          '**Policyholder Choice Offer:** your policy was selected by one or more private insurers, and you are still **eligible to stay** with Citizens if you want to.',
          '**Policyholder Depopulation Offer:** at least one offer makes you **ineligible to stay**. You can choose among the offers (or find other private coverage with your agent), but remaining with Citizens is not an option.',
        ] },
        { type: 'p', text: 'Either way, the packet lists every available offer with its estimated renewal premium next to the estimated renewal premium for your Citizens policy, and it includes coverage worksheets for each one. Those worksheets are the most useful pages in the envelope.' },

        { type: 'h2', text: 'The 20% rule, in plain English' },
        { type: 'p', text: 'For a primary residence, Florida law says that if a take-out offer’s estimated premium is **not more than 20% higher** than Citizens’ estimated renewal premium for comparable coverage, the home is **no longer eligible** for Citizens. If every offer comes in more than 20% higher, you may stay with Citizens, but only if you actively register that choice.' },
        { type: 'p', text: 'The rule comes back at renewal. After a private insurer assumes your policy, it sends you a renewal offer before the term ends. If that renewal premium is within 20% of Citizens’ premium for comparable coverage, you cannot go back to Citizens, even if you turn the renewal down. Rules for homes that are not a primary residence differ in some details, so ask your agent if the property is a second home or a rental.' },

        { type: 'h2', text: 'Deadlines and what happens if you do nothing' },
        { type: 'ul', items: [
          '**Register a choice by the date on your Offer Form.** You can do it online with your policy number and the registration code on the form, or your agent can submit it for you.',
          '**Silence is a choice.** If no choice is registered by the deadline, Citizens assigns your policy to the private insurer that offered the lowest estimated premium, whether or not you were eligible to stay.',
          '**Assumptions are final.** There is no longer a 30-day window to return to Citizens after an assumption.',
          '**Your current term doesn’t change.** If your policy is assumed, your existing premium and coverage stay the same until the current term expires.',
          '**Staying isn’t permanent.** If you opt to remain with Citizens, you may receive more offers later, and you must respond to each one to keep your Citizens policy.',
        ] },

        { type: 'h2', text: 'What to compare, line by line' },
        { type: 'p', text: 'The estimated premium is only one line. Use the coverage worksheets to compare these items side by side:' },
        { type: 'ol', items: [
          '**Dwelling limit (Coverage A).** Is it enough to rebuild your home at today’s construction costs, and does it match what your Citizens policy has now?',
          '**Hurricane deductible.** Florida law requires insurers to offer hurricane deductibles of $500 and 2%, 5% and 10% of the dwelling limit, with some exceptions for higher-value homes. Turn the percentage into dollars: on a $300,000 dwelling limit, a 2% hurricane deductible is $6,000 and a 5% deductible is $15,000 out of your pocket before the policy pays for a hurricane claim.',
          '**All-other-perils deductible** for things like fire, theft or a burst pipe.',
          '**Roof settlement.** Is roof damage paid at replacement cost, actual cash value, or on a schedule based on the roof’s age?',
          '**Water damage.** Look for limits or exclusions on non-weather water damage and on mold.',
          '**Personal property.** Replacement cost or actual cash value, and the limit.',
          '**Loss of use.** How much is available for a hotel or rental if you can’t live at home after a covered loss?',
          '**Liability and medical payments** limits.',
          '**Ordinance or law** coverage, which pays toward bringing a damaged home up to current building code.',
          '**Other structures and screened enclosures,** plus sinkhole versus catastrophic ground cover collapse coverage.',
          '**Endorsements you have today.** Make sure nothing you rely on quietly disappears in the new policy.',
        ] },
        { type: 'callout', title: 'Remember: these are estimates', text: 'Premiums in the packet are estimated renewal premiums. The final premium, and the exact coverage, are set when the policy is issued or renewed.' },

        { type: 'h2', text: 'Look beyond the premium' },
        { type: 'ul', items: [
          '**Check the company.** OIR keeps a public [take-out companies page](https://floir.gov/property-casualty/take-out-companies) listing each approved insurer, its approval date, assumption dates and consent order. OIR says it provides this so policyholders can review financial status and coverage details before deciding.',
          '**Assessment risk.** Citizens explains that its policyholders can be required to pay an assessment if Citizens runs short of money to pay claims after a major hurricane or series of storms, and that private-market policyholders can be subject to a much lower assessment.',
          '**Flood insurance.** Citizens requires flood insurance on its personal residential policies with wind coverage, fully phased in for policies effective on or after January 1, 2027 ([here is what that means](/en/blog/citizens-flood-insurance-requirement-2027)). Citizens notes that private insurers are not required to demand flood insurance for eligibility, so compare the Citizens premium plus a flood policy against the private offer. Don’t drop flood coverage just because a new policy doesn’t require it. In South Miami-Dade, [flood coverage](/en/flood-insurance-homestead-fl) is worth keeping.',
        ] },

        { type: 'h2', text: 'Questions to ask before you accept' },
        { type: 'ol', items: [
          'What is my exact deadline, and am I eligible to stay with Citizens?',
          'Which coverages are broader, narrower or missing compared with my Citizens policy?',
          'What is my hurricane deductible in dollars, not just as a percentage?',
          'How is my roof covered, given its age and material?',
          'If I switch, who needs the new declarations page? If your premium is paid through a mortgage escrow account, let your lender know.',
        ] },

        { type: 'h2', text: 'How M&K Agency can help' },
        { type: 'p', text: 'Bring your Depopulation Packet and your current declarations page to our office at 33550 S Dixie Hwy, Suite 102, Florida City, or call (305) 859-3953. A licensed agent will go through the coverage worksheets with you in English, Spanish or Russian and explain the trade-offs in dollars, before your deadline. We are open Monday through Friday, 9 to 6, and Saturdays by appointment. You can also review your [homeowners insurance options](/en/homeowners-insurance-florida-city) or [request a quote](/en/quote).' },
        { type: 'p', text: 'Coverage depends on the terms, limits and exclusions of each policy. Talk with a licensed agent before you accept or decline an offer.' },
      ],
      faq: [
        { q: 'Can I say no to a Citizens take-out offer?', a: 'Only if you are eligible to stay, meaning every offer’s estimated premium is more than 20% above Citizens’ estimated renewal premium for comparable coverage. Even then you must register your choice by the deadline; otherwise your policy goes to the lowest-premium offer.' },
        { q: 'Can I return to Citizens after my policy is assumed?', a: 'Not right away. The old 30-day post-assumption return period no longer exists. At the new insurer’s renewal, the 20% rule is applied again.' },
        { q: 'Does my premium change the day my policy is assumed?', a: 'No. Citizens says your current premium and coverage stay the same until your policy term expires; the new insurer then offers a renewal.' },
      ],
      sources: [
        { label: 'Citizens Property Insurance Corporation: Personal Lines Depopulation Program', url: 'https://www.citizensfla.com/depoppl' },
        { label: 'Citizens: Depopulation overview (assessments, coverage worksheets)', url: 'https://www.citizensfla.com/depopulation' },
        { label: 'Citizens: Making the Most of Depopulation with Policyholder Choice', url: 'https://www.citizensfla.com/-/making-the-most-of-depopulation-with-policyholder-choice' },
        { label: 'Citizens: New Flood Requirements Begin January 1', url: 'https://www.citizensfla.com/-/new-flood-requirements-begin-january-1' },
        { label: 'Florida Office of Insurance Regulation: Take-Out Companies', url: 'https://floir.gov/property-casualty/take-out-companies' },
        { label: 'Florida Statutes s. 627.351 (2026), paragraphs (6)(c)5. and (6)(ii)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.351' },
        { label: 'Florida Statutes s. 627.701 (2026), hurricane deductible options', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.701' },
      ],
    },
  },
};
