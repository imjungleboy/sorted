import Link from "next/link";
import DownloadCta from "./DownloadCta";
import { GuideEffects, GuideToc } from "./guide/GuideMotion";
import { guides, LAST_CHECKED, SITE_URL } from "../guides/guides";

export type Source = { label: string; url: string };
export type Faq = { q: string; a: string };

// What search engines and AI assistants read about the app itself. Prices
// are left out on purpose: they live in the App Store listing and change.
const APP_SCHEMA = {
  "@type": "MobileApplication",
  name: "Sorted",
  operatingSystem: "iOS, Android",
  applicationCategory: "FinanceApplication",
  description:
    "Bookkeeping app for UK sole traders: scan receipts, send invoices, track mileage and see a live tax estimate.",
  url: SITE_URL,
  offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
  publisher: { "@type": "Organization", name: "MySorted Ltd", url: SITE_URL },
};

// Shared frame for every guide and tool page: breadcrumb, heading, intro,
// the page's own content, FAQs, gov.uk sources, a plain disclaimer, related
// guides and the download buttons. It also adds structured data (Article,
// FAQPage and, on app pages, MobileApplication) so search engines and AI
// assistants know what the page is and when it was checked.
export default function GuideLayout({
  path,
  title,
  intro,
  sources,
  faqs = [],
  isAppPage = false,
  lead,
  children,
}: {
  path: string;
  title: string;
  intro: string;
  sources: Source[];
  faqs?: Faq[];
  isAppPage?: boolean;
  /** Shown between the intro and the body, outside the body's text styles. */
  lead?: React.ReactNode;
  children: React.ReactNode;
}) {
  const checked = new Date(LAST_CHECKED).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const graph: object[] = [
    {
      "@type": "Article",
      headline: title,
      description: intro,
      url: `${SITE_URL}${path}`,
      dateModified: LAST_CHECKED,
      inLanguage: "en-GB",
      publisher: { "@type": "Organization", name: "MySorted Ltd", url: SITE_URL },
    },
  ];
  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  if (isAppPage) graph.push(APP_SCHEMA);
  const structuredData = { "@context": "https://schema.org", "@graph": graph };

  // Up to four related pages: same kind of page first, then the most useful.
  const here = guides.find((g) => g.href === path);
  const others = guides.filter((g) => g.href !== path);
  const otherGuides = [
    ...others.filter((g) => g.category === here?.category),
    ...others.filter((g) => g.category !== here?.category),
  ].slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <GuideEffects />
      <div className="xl:mx-auto xl:grid xl:max-w-[1360px] xl:grid-cols-[1fr_minmax(0,48rem)_1fr] xl:gap-8">
        <div aria-hidden className="hidden xl:block" />
        <article data-guide className="max-w-3xl mx-auto px-6 py-12 md:py-20 xl:w-full">
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

          {lead}

          <div className="xl:hidden">
            <GuideToc variant="inline" />
          </div>

          <div className="guide-body">{children}</div>

          {faqs.length > 0 && (
            <section className="mt-12">
              <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-bold text-forest mb-4">
                Questions people ask
              </h2>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl bg-white border border-forest/5 shadow-sm"
                  >
                    <summary className="cursor-pointer px-6 py-4 font-[family-name:var(--font-nunito)] font-semibold text-forest">
                      {f.q}
                    </summary>
                    <p className="px-6 pb-5 text-charcoal/80 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

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
        <aside className="hidden xl:block">
          <div className="sticky top-28 mt-[220px] max-w-[260px] pb-12">
            <GuideToc variant="side" />
          </div>
        </aside>
      </div>
      <DownloadCta heading="Scan receipts and log mileage with Sorted" />
    </>
  );
}
