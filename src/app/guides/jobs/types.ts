import type { Faq, Source } from "../../components/GuideLayout";

// One "Tax for <job>" page. Each job lives in its own file in this folder
// and is listed in ./index.ts; app/guides/[job]/page.tsx renders it. Plain
// strings only: the template handles layout, links and structured data.
export type JobGuide = {
  /** URL slug under /guides/, e.g. "locum-pharmacist-tax". Must match guides.ts. */
  slug: string;
  /** H1 on the page. */
  title: string;
  /** <title> tag, under 65 characters, ending " — Sorted". */
  metaTitle: string;
  /** Meta description, 140–160 characters. */
  metaDescription: string;
  /** One or two sentences under the H1. */
  intro: string;
  /** "Costs you can usually claim": a short bold label and one or two sentences. */
  canClaim: { item: string; detail: string }[];
  /** "What you can't claim": one line each. */
  cantClaim: string[];
  /** Two to four extra sections specific to this job. */
  sections: { heading: string; paragraphs: string[] }[];
  /** Four to six questions people actually search, answered in 1–3 sentences. */
  faqs: Faq[];
  /** gov.uk (or regulator) pages the facts came from. */
  sources: Source[];
};
