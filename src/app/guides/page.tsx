import type { Metadata } from "next";
import Link from "next/link";
import DownloadCta from "../components/DownloadCta";
import { guides } from "./guides";

export const metadata: Metadata = {
  title: "Guides for UK sole traders: tax, expenses and mileage — Sorted",
  description:
    "Plain-English guides for UK self-employed people: the Self Assessment deadline, allowable expenses, a mileage allowance calculator and tax for locum optometrists.",
  alternates: { canonical: "/guides" },
};

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
        <ul className="grid gap-4">
          {guides.map((g) => (
            <li key={g.href}>
              <Link
                href={g.href}
                className="block rounded-2xl bg-white border border-forest/5 shadow-sm p-6 hover:border-teal/40 transition-colors"
              >
                <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest">
                  {g.title}
                </h2>
                <p className="mt-1 text-charcoal/70">{g.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <DownloadCta />
    </>
  );
}
