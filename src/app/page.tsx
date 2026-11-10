import Image from "next/image";
import type { Metadata } from "next";
import { getPricing } from "@/lib/pricing";
import HomeFaq from "./components/HomeFaq";
import HeroLockup from "./components/home/HeroLockup";
import BigWordPhone from "./components/home/BigWordPhone";
import Features from "./components/home/Features";
import PhoneFan from "./components/home/PhoneFan";
import TapPop from "./components/home/TapPop";
import PricingPrinter from "./components/home/PricingPrinter";
import GuidesTabs from "./components/home/GuidesTabs";
import DownloadSignIn from "./components/home/DownloadSignIn";

export const metadata: Metadata = { alternates: { canonical: "/" } };

// How Sorted fits a working week. Examples, not reviews or quotes.
const weekMoments = [
  { when: "Monday, before the first job", what: "Snap last week’s receipts. Sorted reads each one and files it." },
  { when: "Wednesday, job done", what: "Send the invoice from your phone. Your client pays by card and it’s marked paid." },
  { when: "January, no panic", what: "Your tax estimate has kept up all year, so you know what to put aside." },
];

const comparisonRows = [
  { label: "Built for", others: "Businesses & accountants", sorted: "Self-employed humans" },
  { label: "Learning curve", others: "Accounting know-how helps", sorted: "If you can take a photo, you’re sorted" },
  { label: "Making Tax Digital", others: "Some file for you", sorted: "Keeps the records; your accountant or MTD software files" },
  { label: "Friendly hedgehog", others: "No", sorted: "Obviously", highlight: true },
];

const mtdSteps = [
  { amount: "£50k", from: "from 6 April 2026", color: "text-coral" },
  { amount: "£30k", from: "from 6 April 2027", color: "text-amber" },
  { amount: "£20k", from: "from 6 April 2028", color: "text-gold" },
];

function Label({ children, className = "text-teal" }: { children: React.ReactNode; className?: string }) {
  return <span className={`font-mono text-xs tracking-[.12em] ${className}`}>{children}</span>;
}

export default async function Home() {
  const pricing = await getPricing();
  // Tells search engines and AI assistants what Sorted is. Prices stay in
  // the App Store listing; only the free plan is stated here.
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Sorted",
    operatingSystem: "iOS, Android",
    applicationCategory: "FinanceApplication",
    description:
      "Bookkeeping app for UK sole traders: scan receipts, send invoices, track mileage and see a live tax estimate.",
    url: "https://mysorted.app",
    offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
    publisher: { "@type": "Organization", name: "MySorted Ltd", url: "https://mysorted.app" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      {/* ─── HERO: word lockup with Hedgie's loop ─── */}
      <HeroLockup />

      {/* ─── BIG WORD + PHONE ─── */}
      <BigWordPhone />

      {/* ─── FEATURES ─── */}
      <Features />

      {/* ─── MAKING TAX DIGITAL ─── */}
      <section className="bg-night py-20 text-warm md:py-28">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-12 px-5">
          <div className="flex max-w-3xl flex-col gap-3">
            <Label className="text-sage">( MAKING TAX DIGITAL )</Label>
            <h2 className="font-display text-5xl uppercase leading-[.92] text-warm md:text-[72px]">
              Making Tax Digital arrives in three steps
            </h2>
            <p className="text-lg text-sage">
              HMRC wants digital records and quarterly updates once your qualifying income passes:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {mtdSteps.map((s) => (
              <div key={s.amount} className="flex flex-col gap-1.5 rounded-3xl bg-surface p-7">
                <span className={`font-display text-[88px] leading-none ${s.color}`}>{s.amount}</span>
                <span className="font-mono text-sm tracking-wide text-warm">{s.from}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-start gap-x-14 gap-y-6">
            <p className="min-w-0 flex-[1_1_520px] text-[17px] leading-relaxed text-line">
              Qualifying income is your income from self-employment and property before expenses, and HMRC
              uses an earlier tax year&apos;s figure: 2024 to 2025 decides April 2026.{" "}
              <a
                href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax"
                target="_blank"
                rel="noopener"
                className="text-gold underline"
              >
                Check if and when it applies to you on GOV.UK
              </a>
              .
            </p>
            <p className="min-w-0 flex-[1_1_360px] rounded-2xl bg-teal px-6 py-5 font-sans text-lg font-extrabold leading-snug text-white">
              Sorted keeps the digital records — your accountant or MTD software sends the updates.
            </p>
          </div>
        </div>
      </section>

      {/* ─── APP: phone fan, then tap and pop ─── */}
      <div id="app" className="scroll-mt-20">
        <PhoneFan />
      </div>
      <TapPop />

      {/* ─── COMPARISON ─── */}
      <section className="bg-mint py-20 md:py-28">
        <div className="mx-auto flex max-w-[880px] flex-col gap-10 px-5">
          <div className="flex flex-col items-center gap-3 text-center">
            <Label className="text-forest">( SORTED VS OTHERS )</Label>
            <h2 className="font-display text-5xl uppercase leading-[.92] text-forest md:text-[72px]">Built for you, not your accountant</h2>
            <p className="max-w-2xl text-lg text-smoke">
              Most tax apps are designed for businesses with staff. You&apos;re not a business. You&apos;re a person
              who needs to stay legal.
            </p>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-line bg-white">
            <table className="w-full min-w-[560px] border-collapse text-[15px]">
              <thead>
                <tr className="font-mono text-[13px] tracking-widest">
                  <th scope="col" className="p-5 text-left"><span className="sr-only">Question</span></th>
                  <th scope="col" className="p-5 text-center font-medium text-smoke">OTHERS</th>
                  <th scope="col" className="bg-forest p-5 text-center font-bold text-warm">SORTED</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className={`border-t border-mint ${row.highlight ? "bg-cream" : ""}`}>
                    <th scope="row" className="p-5 text-left font-semibold text-charcoal">{row.label}</th>
                    <td className="p-5 text-center text-smoke">{row.others}</td>
                    <td className={`p-5 text-center font-bold text-forest ${row.highlight ? "bg-gold font-extrabold" : "bg-mint"}`}>{row.sorted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="-rotate-1 text-center font-hand text-3xl text-forest">
            We&apos;re not replacing your accountant. We&apos;re replacing the shoebox.
          </p>
        </div>
      </section>

      {/* ─── PRICING: receipt printer ─── */}
      <PricingPrinter monthlyPrice={pricing.monthlyPrice} trialDays={pricing.trialDays} appStoreUrl={pricing.appStoreUrl} />

      {/* ─── A WORKING WEEK ─── */}
      <section className="border-t border-forest/10 bg-cloud py-20 md:py-28">
        <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-12 px-5">
          <h2 className="max-w-4xl text-center font-display text-5xl uppercase leading-[.92] text-forest md:text-[72px]">
            Built for people who&apos;d rather be doing literally anything else
          </h2>
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
            {weekMoments.map((m, i) => (
              <div key={m.when} className="feat" style={{ "--rot": ["-1.5deg", "1deg", "-1deg"][i] } as React.CSSProperties}>
                <div className={`torn flex h-full flex-col gap-3.5 p-7 ${i === 2 ? "bg-forest" : "bg-paper"}`}>
                  <span className={`font-mono text-[13px] font-bold uppercase tracking-wider ${i === 2 ? "text-gold" : "text-teal"}`}>( {m.when} )</span>
                  <p className={`text-lg leading-relaxed ${i === 2 ? "text-warm" : "text-charcoal"}`}>{m.what}</p>
                </div>
              </div>
            ))}
          </div>
          <Image
            src="/images/hedgie-celebrate.png"
            alt="Hedgie celebrating with his arms up"
            width={768}
            height={768}
            sizes="160px"
            className="animate-float h-auto w-36 md:w-40"
          />
        </div>
      </section>

      {/* ─── GUIDES ─── */}
      <GuidesTabs />

      {/* ─── FAQ ─── */}
      <HomeFaq />

      {/* ─── DOWNLOAD + SIGN IN ─── */}
      <DownloadSignIn appStoreUrl={pricing.appStoreUrl} trialDays={pricing.trialDays} />
    </>
  );
}
