import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GuideLayout from "../../components/GuideLayout";
import { jobGuides } from "../jobs";

// Template for every "Tax for <job>" page. The words live in ../jobs/*.ts.
// Pages that have their own folder (e.g. locum-optometrist-tax) win over
// this route, so it only serves the slugs listed in ../jobs/index.ts.

export const dynamicParams = false;

export function generateStaticParams() {
  return jobGuides.map((j) => ({ job: j.slug }));
}

type Params = { params: Promise<{ job: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { job } = await params;
  const guide = jobGuides.find((j) => j.slug === job);
  if (!guide) return {};
  const path = `/guides/${guide.slug}`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: guide.title, description: guide.intro, url: path, type: "article" },
  };
}

export default async function JobGuidePage({ params }: Params) {
  const { job } = await params;
  const guide = jobGuides.find((j) => j.slug === job);
  if (!guide) notFound();
  const path = `/guides/${guide.slug}`;

  return (
    <GuideLayout
      path={path}
      title={guide.title}
      intro={guide.intro}
      sources={guide.sources}
      faqs={guide.faqs}
    >
      <h2>Costs you can usually claim</h2>
      <ul>
        {guide.canClaim.map((c) => (
          <li key={c.item}>
            <strong>{c.item}</strong>
            {" "}
            {c.detail}
          </li>
        ))}
      </ul>

      <h2>What you can&apos;t claim</h2>
      <ul>
        {guide.cantClaim.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      {guide.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </section>
      ))}

      <h2>Keep it simple with Sorted</h2>
      <p>
        Snap a receipt and Sorted reads the shop, date, amount and category for
        you. It logs your mileage, keeps a live estimate of your tax, and builds
        a year-end pack for you or your accountant.
      </p>
      <p>
        See the full{" "}
        <Link href="/guides/sole-trader-allowable-expenses">sole trader expenses list</Link>
        , work out your{" "}
        <Link href="/tools/mileage-allowance-calculator">mileage claim</Link>, or
        check the{" "}
        <Link href="/guides/self-assessment-deadline">Self Assessment deadline</Link>.
      </p>
    </GuideLayout>
  );
}
