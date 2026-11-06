// One list of every guide and tool page. The guides index, the sitemap and
// the "More guides" links all read from here, so a new page only needs an
// entry in this list.

export const SITE_URL = "https://mysorted.app";

// The day the figures on these pages were last checked against gov.uk.
export const LAST_CHECKED = "2026-11-06";

export type GuideEntry = {
  href: string;
  title: string;
  summary: string;
};

export const guides: GuideEntry[] = [
  {
    href: "/guides/self-assessment-deadline",
    title: "Self Assessment deadline: 31 January 2027",
    summary:
      "Every date for your 2025/26 tax return, what happens if you miss one, and a checklist to get it done in time.",
  },
  {
    href: "/guides/sole-trader-allowable-expenses",
    title: "What expenses can a sole trader claim?",
    summary:
      "The costs HMRC lets you take off your profit, the ones it doesn't, and the flat rates that save you keeping every bill.",
  },
  {
    href: "/tools/mileage-allowance-calculator",
    title: "Mileage allowance calculator",
    summary:
      "Work out your business mileage claim at HMRC's 2026/27 rate of 55p a mile, or 45p for 2025/26.",
  },
  {
    href: "/guides/locum-optometrist-tax",
    title: "Tax for locum optometrists",
    summary:
      "What a self-employed locum can claim, from GOC fees to equipment, written by an optometrist.",
  },
];
