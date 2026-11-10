import Link from "next/link";

// Homepage FAQ: questions people search (docs/seo/keyword-map.csv), with
// FAQPage structured data and links into the guides and calculators.
// Claims match the app's real plans and gates; Sorted does not file with HMRC.
const faqs: { q: string; a: string }[] = [
  {
    q: "What is the best bookkeeping app for a sole trader?",
    a: "One you'll actually keep up with. Sorted is built for UK sole traders who want receipts, invoices, mileage and a tax estimate in one phone app, without learning accounting. If you need an app that files your tax return or links to your bank, a fuller accounting app may suit you better.",
  },
  {
    q: "Is Sorted a receipt scanner app?",
    a: "Yes. Snap a receipt and Sorted reads the shop, date, amount and category, then keeps the photo with the record. The free plan covers 30 receipts a month; Sorted Pro is unlimited and lets you email receipts straight in.",
  },
  {
    q: "How much tax will I pay as a self-employed person?",
    a: "Income tax on your profit above the £12,570 Personal Allowance, plus Class 4 National Insurance. Sorted keeps a live estimate as you add income and expenses, and our free self-employed tax calculator gives a quick answer.",
  },
  {
    q: "Does Sorted track mileage at HMRC rates?",
    a: "Yes. Log trips yourself or let GPS record them, and Sorted applies HMRC's simplified rate for each tax year: 55p a mile for the first 10,000 miles in a car or van in 2026/27, 45p before 6 April 2026.",
  },
  {
    q: "Does Sorted file my Self Assessment tax return?",
    a: "No. Sorted keeps your records and estimates your tax. You or your accountant file the return, using the totals and year-end pack from Sorted.",
  },
  {
    q: "Is Sorted free?",
    a: "Yes, to start. The free plan includes 30 receipts and 3 invoices a month, unlimited mileage tracking and a live tax estimate. Sorted Pro removes the limits and adds the accountant pack.",
  },
];

const links = [
  { href: "/tools/self-employed-tax-calculator", label: "Self-employed tax calculator" },
  { href: "/tools/mileage-allowance-calculator", label: "Mileage allowance calculator" },
  { href: "/guides/sole-trader-allowable-expenses", label: "Sole trader expenses list" },
  { href: "/guides/self-assessment-deadline", label: "Self Assessment deadline" },
  { href: "/guides", label: "All guides" },
];

export default function HomeFaq() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="font-display text-5xl uppercase leading-[.92] md:text-[72px] text-forest text-center">
          Questions sole traders ask
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl bg-cloud border border-forest/5"
            >
              <summary className="cursor-pointer px-6 py-4 font-[family-name:var(--font-nunito)] font-semibold text-forest">
                {f.q}
              </summary>
              <p className="px-6 pb-5 text-charcoal/80 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm font-semibold text-forest mb-3">Free tools and guides</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block rounded-full border border-teal/30 px-4 py-2 text-sm text-teal hover:bg-teal/5 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
