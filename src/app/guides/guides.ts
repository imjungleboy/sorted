// One list of every guide, tool and app page. The guides index, the sitemap
// and the related-guides links all read from here, so a new page only needs
// an entry in this list. Order inside each category = priority from
// docs/seo/keyword-map.csv.

export const SITE_URL = "https://mysorted.app";

// The day the figures on these pages were last checked against gov.uk.
export const LAST_CHECKED = "2026-11-06";

export type GuideCategory = "app" | "tool" | "guide" | "job";

export type GuideEntry = {
  href: string;
  title: string;
  summary: string;
  category: GuideCategory;
};

export const CATEGORY_HEADINGS: Record<GuideCategory, string> = {
  tool: "Calculators",
  guide: "Guides",
  job: "Tax for your line of work",
  app: "Apps for sole traders",
};

export const guides: GuideEntry[] = [
  // Tools
  {
    href: "/tools/mileage-allowance-calculator",
    title: "Mileage allowance calculator",
    summary: "Work out your business mileage claim at HMRC's 2026/27 rate of 55p a mile, or 45p for 2025/26.",
    category: "tool",
  },
  {
    href: "/tools/self-employed-tax-calculator",
    title: "Self-employed tax calculator",
    summary: "See how much income tax and National Insurance you'll pay on your profit, and how much to put aside.",
    category: "tool",
  },
  // Guides
  {
    href: "/guides/sole-trader-allowable-expenses",
    title: "Sole trader expenses list: what can I claim?",
    summary: "The costs HMRC lets you take off your profit, the ones it doesn't, and the flat rates that save you keeping every bill.",
    category: "guide",
  },
  {
    href: "/guides/self-assessment-deadline",
    title: "Self Assessment deadline: 31 January 2027",
    summary: "Every date for your 2025/26 tax return, what happens if you miss one, and a checklist to get it done in time.",
    category: "guide",
  },
  {
    href: "/guides/first-year-self-employed",
    title: "Your first year self-employed: when do you pay tax?",
    summary: "Registering with HMRC, your first tax return, and why your first tax bill is bigger than you expect.",
    category: "guide",
  },
  {
    href: "/guides/working-from-home-allowance-self-employed",
    title: "Working from home allowance for the self-employed",
    summary: "Claim £10 to £26 a month with HMRC's flat rate, or work out the business share of your real bills.",
    category: "guide",
  },
  {
    href: "/guides/self-employed-national-insurance",
    title: "Self-employed National Insurance: Class 2 and Class 4",
    summary: "Class 2 and Class 4 explained: what you pay, when, and how it affects your State Pension.",
    category: "guide",
  },
  {
    href: "/guides/side-hustle-tax",
    title: "Side hustle tax in the UK and the £1,000 trading allowance",
    summary: "When selling on Vinted or eBay, or a side business, means telling HMRC, and when it doesn't.",
    category: "guide",
  },
  {
    href: "/guides/cis-tax-refund",
    title: "CIS tax refund: how to claim it back",
    summary: "Why subcontractors often overpay under CIS, and how to get the money back through your tax return.",
    category: "guide",
  },
  {
    href: "/guides/sa302",
    title: "SA302 form for a mortgage: how to get it",
    summary: "What an SA302 and tax year overview are, how to download them, and what lenders ask for.",
    category: "guide",
  },
  // Apps
  {
    href: "/receipt-scanner-app",
    title: "Receipt scanner app for UK sole traders",
    summary: "Snap a receipt and Sorted reads the shop, date, amount and category, then keeps it safe for HMRC.",
    category: "app",
  },
  {
    href: "/bookkeeping-app-for-sole-traders",
    title: "Bookkeeping app for sole traders",
    summary: "What a sole trader actually needs from a bookkeeping app, and how to choose one.",
    category: "app",
  },
  // Jobs
  {
    href: "/guides/locum-optometrist-tax",
    title: "Tax for locum optometrists",
    summary: "What a self-employed locum can claim, from GOC fees to equipment, written by an optometrist.",
    category: "job",
  },
  {
    href: "/guides/content-creator-tax",
    title: "Tax for content creators, YouTubers and influencers",
    summary: "Brand deals, gifted products, platform payouts and what creators can claim.",
    category: "job",
  },
  {
    href: "/guides/hair-and-beauty-self-employed-tax",
    title: "Tax for self-employed hairdressers, beauty and massage therapists",
    summary: "Chair rent, products, training and kit: what self-employed hair and beauty workers can claim.",
    category: "job",
  },
  {
    href: "/guides/artist-designer-tax",
    title: "Tax for self-employed artists, designers and writers",
    summary: "Materials, software, studio space and commissions for creative freelancers.",
    category: "job",
  },
  {
    href: "/guides/locum-pharmacist-tax",
    title: "Tax for locum pharmacists",
    summary: "GPhC fees, indemnity, CPD and travel for self-employed locum pharmacists.",
    category: "job",
  },
  {
    href: "/guides/cleaner-self-employed-tax",
    title: "Tax for self-employed cleaners",
    summary: "Products, equipment, travel between jobs and what cleaners can claim.",
    category: "job",
  },
  {
    href: "/guides/therapist-self-employed-tax",
    title: "Tax for self-employed therapists and counsellors",
    summary: "Supervision, room hire, insurance and training for self-employed therapists.",
    category: "job",
  },
  {
    href: "/guides/dental-self-employed-tax",
    title: "Tax for self-employed dentists and hygienists",
    summary: "GDC fees, indemnity, CPD and kit for self-employed dental professionals.",
    category: "job",
  },
];
