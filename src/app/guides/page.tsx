import type { Metadata } from "next";
import Link from "next/link";
import DownloadCta from "../components/DownloadCta";
import { CATEGORY_HEADINGS, guides, type GuideCategory } from "./guides";

export const metadata: Metadata = {
  title: "Tax guides and calculators for UK sole traders — Sorted",
  description:
    "Plain-English guides and free calculators for UK self-employed people: tax, National Insurance, expenses, mileage, the Self Assessment deadline and tax by job.",
  alternates: { canonical: "/guides" },
};

const ORDER: GuideCategory[] = ["tool", "guide", "job", "app"];

export default function GuidesPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <h1 className="font-[family-name:var(--font-nunito)] text-3xl md:text-5xl font-bold text-forest leading-tight mb-4">
          Guides for sole traders
        </h1>
        <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed mb-10">
          Tax, expenses and mileage for UK self-employed people, in plain
          English and checked against gov.uk.
        </p>
        {ORDER.map((category) => (
          <section key={category} className="mb-12">
            <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-bold text-forest mb-4">
              {CATEGORY_HEADINGS[category]}
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {guides
                .filter((g) => g.category === category)
                .map((g) => (
                  <li key={g.href}>
                    <Link
                      href={g.href}
                      className="block h-full rounded-2xl bg-white border border-forest/5 shadow-sm p-5 hover:border-teal/40 transition-colors"
                    >
                      <span className="font-[family-name:var(--font-nunito)] text-lg font-bold text-forest">
                        {g.title}
                      </span>
                      <span className="block mt-1 text-sm text-charcoal/70">{g.summary}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
      <DownloadCta />
    </>
  );
}
