import Link from "next/link";
import DownloadCta from "./DownloadCta";
import { guides, LAST_CHECKED, SITE_URL } from "../guides/guides";

export type Source = { label: string; url: string };

// Shared frame for every guide and tool page: breadcrumb, heading, intro,
// the page's own content, gov.uk sources, a plain disclaimer, links to the
// other guides and the download buttons. It also adds Article structured
// data so search engines know what the page is and when it was checked.
export default function GuideLayout({
  path,
  title,
  intro,
  sources,
  children,
}: {
  path: string;
  title: string;
  intro: string;
  sources: Source[];
  children: React.ReactNode;
}) {
  const checked = new Date(LAST_CHECKED).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: intro,
    url: `${SITE_URL}${path}`,
    dateModified: LAST_CHECKED,
    inLanguage: "en-GB",
    publisher: { "@type": "Organization", name: "MySorted Ltd", url: SITE_URL },
  };

  const otherGuides = guides.filter((g) => g.href !== path);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-smoke mb-6">
          <Link href="/" className="hover:text-teal">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/guides" className="hover:text-teal">
            Guides
          </Link>
        </nav>

        <h1 className="font-[family-name:var(--font-nunito)] text-3xl md:text-5xl font-bold text-forest leading-tight mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed mb-3">
          {intro}
        </p>
        <p className="text-sm text-smoke mb-10">
          Figures checked against gov.uk on {checked}.
        </p>

        <div className="guide-body">{children}</div>

        <section className="mt-12 rounded-2xl bg-white border border-forest/5 p-6">
          <h2 className="font-[family-name:var(--font-nunito)] text-lg font-bold text-forest mb-3">
            Sources
          </h2>
          <ul className="space-y-2 text-sm">
            {sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener"
                  className="text-teal hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-smoke leading-relaxed">
            This page is general information, not tax advice. Your situation
            may differ, so check with HMRC or a qualified accountant before you
            rely on it. Sorted keeps your records and estimates your tax; it
            does not file your tax return with HMRC.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mb-4">
            More guides
          </h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {otherGuides.map((g) => (
              <li key={g.href}>
                <Link
                  href={g.href}
                  className="block h-full rounded-2xl bg-white border border-forest/5 shadow-sm p-5 hover:border-teal/40 transition-colors"
                >
                  <span className="font-[family-name:var(--font-nunito)] font-bold text-forest">
                    {g.title}
                  </span>
                  <span className="block mt-1 text-sm text-charcoal/70">
                    {g.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
      <DownloadCta heading="Scan receipts and log mileage with Sorted" />
    </>
  );
}
