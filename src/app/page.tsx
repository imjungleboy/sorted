import Image from "next/image";
import FadeIn from "./components/FadeIn";
import PhoneCarousel from "./components/PhoneCarousel";
import ScannerChecklist from "./components/ScannerChecklist";

const features = [
  {
    image: "/images/hedgie-receipt.png",
    title: "1. Snap your receipts",
    description:
      "Point your camera at any receipt. AI extracts the merchant, amount, and category in 3 seconds. It even calculates your tax saving on every expense.",
    bg: "bg-[#e8f5e9]",
  },
  {
    image: "/images/hedgie-invoice.png",
    title: "2. Send invoices instantly",
    description:
      "Type what you did and how much. Sorted creates a professional invoice, emails it to your client, and tracks whether they\u2019ve paid.",
    bg: "bg-[#fff8e1]",
  },
  {
    image: "/images/hedgie-thinking.png",
    title: "3. Know what you owe",
    description:
      "Your tax bill updates in real-time. Income Tax, National Insurance, Student Loan \u2014 always accurate, never a January surprise.",
    bg: "bg-[#e0f2f1]",
  },
];

const pricingFeatures = [
  "Unlimited receipt scanning",
  "Professional invoicing",
  "Live tax estimate",
  "Expense & mileage tracking",
  "HMRC deadline reminders",
  "Export for your accountant",
  "Hedgie\u2019s encouragement (free)",
];

const testimonials = [
  {
    quote:
      "I was dreading MTD. Downloaded Sorted, scanned 3 months of receipts in 20 minutes, and now I actually know what I owe. Game changer.",
    name: "Sarah",
    role: "freelance designer",
    initial: "S",
    color: "bg-amber/20 text-amber",
  },
  {
    quote:
      "I tried Xero. I tried QuickBooks. I tried a spreadsheet. I tried ignoring it. Sorted is the first thing that actually stuck.",
    name: "Marcus",
    role: "personal trainer",
    initial: "M",
    color: "bg-teal/20 text-teal",
  },
  {
    quote:
      "Hedgie reminds me about deadlines and I\u2019ve never once wanted to throw my phone. Can\u2019t say that about my accountant\u2019s emails.",
    name: "Priya",
    role: "Deliveroo courier",
    initial: "P",
    color: "bg-coral/20 text-coral",
  },
];

const comparisonRows = [
  { label: "Monthly price", others: "£12\u201330", sorted: "£4.99" },
  { label: "Setup time", others: "30+ minutes", sorted: "Under 5 minutes" },
  { label: "Receipt scanning", others: "Manual entry or paid add-on", sorted: "AI vision \u2014 3 second scan" },
  { label: "Learning curve", others: "Needs training", sorted: "If you can take a photo, you\u2019re sorted" },
  { label: "Built for", others: "Businesses & accountants", sorted: "Self-employed humans" },
  { label: "MTD compliant", others: "Yes", sorted: "Yes" },
  { label: "Friendly hedgehog", others: "No", sorted: "Obviously", highlight: true },
];

function AppleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
    </svg>
  );
}

function PlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92Zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635ZM17.1 8.4l2.849 1.65a1 1 0 0 1 0 1.736L17.1 13.6l-2.552-2.552L17.1 8.4Zm-11.236-5.74L16.8 8.99l-2.302 2.302L5.864 2.66Z" />
    </svg>
  );
}

function DownloadButtons({ size = "lg" }: { size?: "lg" | "sm" }) {
  const base =
    size === "lg"
      ? "px-7 py-3.5 text-base font-bold rounded-2xl"
      : "px-5 py-2.5 text-sm font-bold rounded-xl";
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href="#"
        className={`inline-flex items-center justify-center gap-2.5 bg-amber text-white cursor-pointer hover:bg-amber/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-amber/25 ${base}`}
      >
        <AppleIcon />
        Download for iOS
      </a>
      <a
        href="#"
        className={`inline-flex items-center justify-center gap-2.5 bg-teal text-white cursor-pointer hover:bg-teal/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-teal/25 ${base}`}
      >
        <PlayIcon />
        Download for Android
      </a>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-teal flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

function StopwatchIcon() {
  return (
    <svg className="w-5 h-5 text-white/80 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="13" r="8" />
      <path strokeLinecap="round" d="M12 9v4l2.5 2.5M10 2h4M12 2v3" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="min-h-[90vh] flex items-center bg-cloud relative overflow-hidden">
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-mint/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="max-w-6xl mx-auto px-5 py-16 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 relative z-10">
          <div className="flex-[3] text-center md:text-left">
            <span className="inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full bg-coral/10 text-coral border border-coral/20">
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse-dot" />
              New HMRC law starts April 2026
            </span>
            <h1 className="font-[family-name:var(--font-nunito)] text-5xl md:text-7xl font-bold text-forest leading-[1.1] tracking-tight">
              HMRC is going digital. Are you ready?
            </h1>
            <p className="mt-5 text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl">
              From April 2026, every self-employed person in the UK must keep
              digital tax records. Sorted uses AI to scan your receipts in 3
              seconds, send professional invoices, and calculate your tax bill
              in real-time. No accounting knowledge needed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#download"
                className="inline-flex items-center justify-center cursor-pointer rounded-2xl bg-amber px-7 py-3.5 text-base font-bold text-white hover:bg-amber/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-amber/25"
              >
                Get Sorted — it&apos;s free to start
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center cursor-pointer rounded-2xl border-2 border-teal text-teal px-7 py-3.5 text-base font-bold hover:bg-teal/5 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                See how it works
              </a>
            </div>
            <p className="mt-3 text-sm text-smoke">
              7-day free trial &bull; No card required &bull; Cancel anytime
            </p>
          </div>
          <div className="flex-[2] flex justify-center">
            <Image
              src="/images/hedgie-hero.png"
              alt="Hedgie the hedgehog mascot holding a phone with receipts and documents"
              width={1496}
              height={1016}
              priority
              className="w-72 md:w-[520px]"
            />
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-bold text-forest">
              4.4 million people aren&apos;t ready
            </h2>
          </FadeIn>

          <FadeIn className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-mono text-5xl font-bold text-coral">4.4m</p>
              <p className="mt-2 text-charcoal/70">self-employed people affected</p>
            </div>
            <div>
              <p className="font-mono text-5xl font-bold text-coral">67%</p>
              <p className="mt-2 text-charcoal/70">still using spreadsheets or shoeboxes</p>
            </div>
            <div>
              <p className="font-mono text-5xl font-bold text-coral">£1,000+</p>
              <p className="mt-2 text-charcoal/70">penalty for non-compliance</p>
            </div>
          </FadeIn>

          <FadeIn className="mt-10">
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Making Tax Digital (MTD) means HMRC will require quarterly digital
              submissions from every self-employed person earning over £50k from
              April 2026 — dropping to £20k by 2028. The old way of doing things
              is officially over.
            </p>
            <p className="mt-6 text-forest font-medium text-lg">
              Sorted gets you compliant in under 5 minutes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="bg-mint py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <FadeIn className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-bold text-forest">
              Three taps. Taxes sorted.
            </h2>
            <p className="mt-3 text-smoke text-lg">
              No jargon. No spreadsheets. No accountant required.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <FadeIn key={f.title}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col overflow-hidden">
                  <div className={`${f.bg} flex items-center justify-center p-6`}>
                    <Image
                      src={f.image}
                      alt={f.title}
                      width={280}
                      height={156}
                      loading="lazy"
                      className="w-full max-h-[160px] object-contain"
                    />
                  </div>
                  <div className="p-6 text-center flex-1 flex flex-col">
                    <h3 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-charcoal/70 leading-relaxed text-sm flex-1">
                      {f.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI SCANNER ─── */}
      <section className="bg-forest py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal/10 blur-3xl" />
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
          {/* Text */}
          <div className="flex-[55] text-center md:text-left">
            <span className="text-gold uppercase text-xs tracking-widest font-bold">
              Powered by AI
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-nunito)] text-4xl md:text-5xl font-bold text-white leading-tight">
              Point. Snap. Sorted.
            </h2>
            <div className="mt-6 space-y-4 text-cream text-lg leading-relaxed">
              <p>
                Most expense apps make you type everything in manually. Sorted
                uses AI vision to read your receipts instantly.
              </p>
              <p>
                Snap a photo of any receipt — crumpled, faded, coffee-stained —
                and Sorted extracts:
              </p>
            </div>

            <ScannerChecklist />

            <p className="text-cream text-lg leading-relaxed">
              All in under 3 seconds. No typing. No manual entry. No excuses
              for losing receipts ever again.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 bg-teal rounded-xl px-5 py-3">
              <StopwatchIcon />
              <span className="text-white font-medium">
                Average time to log an expense: <strong>3 seconds</strong>
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="flex-[45] flex justify-center">
            <div className="relative w-full max-w-xs">
              {/* Receipt card */}
              <div className="bg-white rounded-xl shadow-2xl p-6 -rotate-3 relative">
                {/* Scanning line */}
                <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden rounded-xl pointer-events-none">
                  <div className="absolute left-0 right-0 h-0.5 bg-gold/80 animate-scan-line" />
                </div>
                <p className="text-charcoal font-bold text-lg">Costa Coffee</p>
                <p className="text-smoke text-sm mt-1">20 Mar 2026</p>
                <div className="mt-4 space-y-2 text-charcoal text-sm">
                  <div className="flex justify-between">
                    <span>Flat White</span>
                    <span>£3.40</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Blueberry Muffin</span>
                    <span>£2.85</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t-2 border-dashed border-smoke/30 flex justify-between items-baseline">
                  <span className="text-smoke text-sm font-medium">Total</span>
                  <span className="text-forest font-bold text-xl">£6.25</span>
                </div>
              </div>

              {/* Result card */}
              <div className="bg-teal rounded-xl shadow-2xl p-5 rotate-2 -mt-4 ml-8 relative z-10">
                <p className="text-white font-bold flex items-center gap-2">
                  <span className="text-gold">✓</span> Expense logged
                </p>
                <p className="text-white/80 text-sm mt-1">
                  Costa Coffee · £6.25 · Food &amp; Drink
                </p>
                <p className="text-gold font-mono font-bold mt-2">
                  Tax saved: £1.25
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APP PREVIEW ─── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <FadeIn className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-bold text-forest">
              See it in action
            </h2>
            <p className="mt-3 text-smoke text-lg">
              Real app. Real simple. No accounting degree required.
            </p>
          </FadeIn>
          <FadeIn>
            <PhoneCarousel />
          </FadeIn>
        </div>
      </section>

      {/* ─── COMPETITOR COMPARISON ─── */}
      <section className="bg-cloud py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <FadeIn className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-bold text-forest">
              Built for you, not your accountant
            </h2>
            <p className="mt-3 text-smoke text-lg max-w-2xl mx-auto">
              Most tax apps are designed for businesses with staff. You&apos;re not
              a business. You&apos;re a person who needs to stay legal.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[1fr_1fr_1fr] text-sm font-bold">
                <div className="p-4" />
                <div className="p-4 text-smoke text-center">Others</div>
                <div className="p-4 text-forest text-center">Sorted</div>
              </div>
              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1fr_1fr_1fr] text-sm border-t border-forest/5 ${
                    row.highlight ? "bg-cream/40" : i % 2 === 0 ? "bg-cloud/40" : ""
                  }`}
                >
                  <div className="p-4 text-charcoal font-medium">{row.label}</div>
                  <div className="p-4 text-smoke text-center">{row.others}</div>
                  <div className="p-4 text-teal font-bold text-center">{row.sorted}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-smoke italic">
              We&apos;re not replacing your accountant. We&apos;re replacing the shoebox.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-mint/30 blur-3xl" />

        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <FadeIn className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-bold text-forest">
              Less than a coffee a week
            </h2>
            <p className="mt-3 text-smoke text-lg">
              Everything you need to stay HMRC-compliant. Nothing you don&apos;t.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="max-w-md mx-auto bg-white border-2 border-teal rounded-2xl shadow-xl p-8 text-center relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-teal text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                  Most Popular
                </span>
              </div>

              <p className="text-teal font-semibold text-sm tracking-wide uppercase mt-2">
                Sorted
              </p>
              <div className="mt-3 flex items-baseline justify-center gap-1">
                <span className="font-mono text-6xl font-bold text-forest">
                  £4.99
                </span>
                <span className="text-xl text-smoke">/month</span>
              </div>
              <hr className="my-6 border-forest/10" />
              <ul className="space-y-3 text-left">
                {pricingFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-charcoal/80"
                  >
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className="mt-8 block w-full cursor-pointer rounded-2xl bg-amber py-3.5 text-base font-bold text-white hover:bg-amber/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-amber/25"
              >
                Start free trial
              </a>
              <p className="mt-3 text-xs text-smoke">
                7 days free. Cancel anytime. No card upfront.
              </p>
            </div>
          </FadeIn>

          <p className="mt-6 text-center text-sm text-smoke">
            or save 33% with annual billing —{" "}
            <span className="font-semibold">£39.99/year</span>
          </p>
          <p className="mt-2 text-center text-sm text-forest font-medium">
            That&apos;s 90% cheaper than QuickBooks Self-Employed
          </p>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="bg-mint py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <FadeIn className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-bold text-forest">
              Built for people who&apos;d rather be doing literally anything else
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <FadeIn key={t.name}>
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-charcoal/80 leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${t.color} flex items-center justify-center text-xs font-bold`}>
                      {t.initial}
                    </div>
                    <p className="text-sm text-smoke">
                      {t.name}, {t.role}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-14 text-center">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gold/20 rounded-full scale-125 blur-md" />
              <Image
                src="/images/hedgie-celebrating.png"
                alt="Hedgie celebrating with arms up"
                width={150}
                height={84}
                loading="lazy"
                className="relative mx-auto max-h-[120px] w-auto"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section id="download" className="bg-forest py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-gold/10 blur-2xl" />

        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-5xl font-bold text-white leading-tight">
              Your taxes won&apos;t sort themselves.
            </h2>
            <p className="mt-3 text-xl text-cream/90">
              But it only takes 5 minutes to get started.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center cursor-pointer rounded-2xl bg-amber px-8 py-4 text-lg font-bold text-white hover:bg-amber/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-amber/25"
              >
                Get Sorted — Free for 7 days
              </a>
              <p className="mt-3 text-sm text-smoke">
                No card required. Cancel anytime.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-full scale-125 blur-xl" />
              <Image
                src="/images/hedgie-waving.png"
                alt="Hedgie waving hello"
                width={220}
                height={123}
                loading="lazy"
                className="relative w-40 md:w-[200px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
