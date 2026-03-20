import Image from "next/image";
import FadeIn from "./components/FadeIn";
import PhoneCarousel from "./components/PhoneCarousel";

const features = [
  {
    image: "/images/hedgie-receipt.png",
    title: "Snap it. Sorted.",
    description:
      "Point your camera at any receipt. Hedgie reads it in 3 seconds — merchant, amount, category — all extracted by AI.",
  },
  {
    image: "/images/hedgie-invoice.png",
    title: "Invoice in 15 seconds",
    description:
      "Type what you did. Hedgie writes the invoice. Send it by email or WhatsApp. Track who\u2019s paid.",
  },
  {
    image: "/images/hedgie-thinking.png",
    title: "Know what you owe",
    description:
      "Your tax estimate updates in real-time. Income Tax, National Insurance, Student Loan — all calculated live. No more January surprises.",
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
      "I used to spend my Sundays doing admin. Now I scan receipts while I wait for the kettle. Sorted.",
    name: "Sarah",
    role: "freelance designer",
  },
  {
    quote:
      "Finally an app that doesn\u2019t make me feel stupid about tax.",
    name: "Marcus",
    role: "personal trainer",
  },
  {
    quote:
      "Hedgie reminds me about deadlines better than my accountant does.",
    name: "Priya",
    role: "Deliveroo courier",
  },
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
        className={`inline-flex items-center justify-center gap-2.5 bg-amber text-white hover:bg-amber/90 hover:scale-[1.02] transition-all ${base}`}
      >
        <AppleIcon />
        Download for iOS
      </a>
      <a
        href="#"
        className={`inline-flex items-center justify-center gap-2.5 bg-teal text-white hover:bg-teal/90 hover:scale-[1.02] transition-all ${base}`}
      >
        <PlayIcon />
        Download for Android
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
        {/* ─── HERO ─── */}
        <section className="min-h-[90vh] flex items-center bg-cloud">
          <div className="max-w-6xl mx-auto px-5 py-16 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
            {/* Text */}
            <div className="flex-[3] text-center md:text-left">
              <span className="inline-block mb-4 text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full bg-coral/10 text-coral">
                Making Tax Digital starts April 2026
              </span>
              <h1 className="font-[family-name:var(--font-nunito)] text-5xl md:text-7xl font-bold text-forest leading-[1.1] tracking-tight">
                get your taxes
                <br />
                sorted.
              </h1>
              <p className="mt-5 text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-xl">
                The anti-accounting app for UK self-employed people. Scan
                receipts. Send invoices. Know what you owe.
              </p>
              <div className="mt-8">
                <DownloadButtons />
              </div>
              <p className="mt-3 text-sm text-smoke">
                Free 7-day trial &bull; No card required
              </p>
            </div>
            {/* Hero image */}
            <div className="flex-[2] flex justify-center">
              <Image
                src="/images/hedgie-desk.png"
                alt="Hedgie the hedgehog mascot sitting at a desk with tablet, coins, and documents"
                width={480}
                height={480}
                priority
                className="w-64 md:w-[420px] drop-shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* ─── FEATURES ─── */}
        <section id="features" className="bg-mint py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5">
            <FadeIn className="text-center mb-14">
              <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-bold text-forest">
                Hedgie handles the boring stuff
              </h2>
              <p className="mt-3 text-smoke text-lg">
                So you can get back to actual work.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <FadeIn
                  key={f.title}
                  className={`${i === 1 ? "md:delay-100" : i === 2 ? "md:delay-200" : ""}`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                    <Image
                      src={f.image}
                      alt={f.title}
                      width={200}
                      height={200}
                      loading="lazy"
                      className="h-[180px] w-auto object-contain drop-shadow-lg mb-5"
                    />
                    <h3 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-charcoal/70 leading-relaxed text-sm">
                      {f.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
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

        {/* ─── THE JANUARY PROBLEM ─── */}
        <section className="bg-cloud py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5 flex flex-col-reverse md:flex-row items-center gap-12">
            <FadeIn className="flex-1">
              <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-bold text-forest leading-tight">
                HMRC is changing the rules.
              </h2>
              <div className="mt-5 space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  From April 2026, self-employed people earning over £50,000
                  must keep digital records and submit quarterly updates to
                  HMRC. By 2028, that drops to £20,000.
                </p>
                <p>
                  Most people still use spreadsheets and shoeboxes. That&apos;s
                  about to become a problem.
                </p>
                <p>
                  Sorted keeps you compliant — without the complexity. Everything
                  HMRC needs, nothing you don&apos;t.
                </p>
              </div>
              <a
                href="#download"
                className="mt-8 inline-flex items-center rounded-2xl bg-amber px-7 py-3.5 text-base font-bold text-white hover:bg-amber/90 hover:scale-[1.02] transition-all"
              >
                Get Sorted before April
              </a>
            </FadeIn>
            <FadeIn className="flex-1 flex justify-center">
              <Image
                src="/images/hedgie-worried.png"
                alt="Hedgie looking anxious about HMRC deadlines"
                width={380}
                height={380}
                loading="lazy"
                className="w-56 md:w-[340px] drop-shadow-xl"
              />
            </FadeIn>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section id="pricing" className="bg-white py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5">
            <FadeIn className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-bold text-forest">
                One price. Everything included.
              </h2>
            </FadeIn>

            <FadeIn>
              <div className="max-w-md mx-auto bg-white border-2 border-teal rounded-2xl shadow-lg p-8 text-center">
                <p className="text-teal font-semibold text-sm tracking-wide uppercase">
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
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#download"
                  className="mt-8 block w-full rounded-2xl bg-amber py-3.5 text-base font-bold text-white hover:bg-amber/90 hover:scale-[1.02] transition-all"
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
          </div>
        </section>

        {/* ─── SOCIAL PROOF ─── */}
        <section className="bg-mint py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5">
            <FadeIn className="text-center mb-14">
              <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-bold text-forest">
                Built for people who hate accounting
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <FadeIn key={t.name}>
                  <div className="bg-white rounded-xl p-6 shadow-sm h-full flex flex-col justify-between">
                    <p className="italic text-charcoal/80 leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="mt-4 text-sm text-smoke">
                      — {t.name}, {t.role}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="mt-14 text-center">
              <Image
                src="/images/hedgie-celebrating.png"
                alt="Hedgie celebrating with arms up"
                width={150}
                height={150}
                loading="lazy"
                className="mx-auto drop-shadow-lg"
              />
              <p className="mt-4 font-[family-name:var(--font-nunito)] text-xl font-bold text-forest">
                Join Hedgie. Get sorted.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section id="download" className="bg-forest py-20 md:py-28 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-5xl font-bold text-white leading-tight">
                Your taxes won&apos;t sort themselves.
              </h2>
              <p className="mt-3 text-xl text-cream">But Hedgie will.</p>
              <div className="mt-8">
                <DownloadButtons />
              </div>
            </div>
            <div className="flex-shrink-0 opacity-90">
              <Image
                src="/images/hedgie-waving.png"
                alt="Hedgie waving hello"
                width={220}
                height={220}
                loading="lazy"
                className="w-40 md:w-[200px] drop-shadow-2xl"
              />
            </div>
          </div>
        </section>
    </>
  );
}
