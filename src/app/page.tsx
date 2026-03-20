import Image from "next/image";
import FadeIn from "./components/FadeIn";
import PhoneCarousel from "./components/PhoneCarousel";

const features = [
  {
    image: "/images/hedgie-receipt.png",
    title: "Snap it. Sorted.",
    description:
      "Point your camera at any receipt. Hedgie reads it in 3 seconds \u2014 merchant, amount, category \u2014 all extracted by AI.",
    bg: "bg-[#e8f5e9]",
  },
  {
    image: "/images/hedgie-invoice.png",
    title: "Invoice in 15 seconds",
    description:
      "Type what you did. Hedgie writes the invoice. Send it by email or WhatsApp. Track who\u2019s paid.",
    bg: "bg-[#fff8e1]",
  },
  {
    image: "/images/hedgie-thinking.png",
    title: "Know what you owe",
    description:
      "Your tax estimate updates in real-time. Income Tax, National Insurance, Student Loan \u2014 all calculated live. No more January surprises.",
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
      "I used to spend my Sundays doing admin. Now I scan receipts while I wait for the kettle. Sorted.",
    name: "Sarah",
    role: "freelance designer",
    initial: "S",
    color: "bg-amber/20 text-amber",
  },
  {
    quote:
      "Finally an app that doesn\u2019t make me feel stupid about tax.",
    name: "Marcus",
    role: "personal trainer",
    initial: "M",
    color: "bg-teal/20 text-teal",
  },
  {
    quote:
      "Hedgie reminds me about deadlines better than my accountant does.",
    name: "Priya",
    role: "Deliveroo courier",
    initial: "P",
    color: "bg-coral/20 text-coral",
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

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="min-h-[90vh] flex items-center bg-cloud relative overflow-hidden">
        {/* Subtle decorative blobs */}
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-mint/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="max-w-6xl mx-auto px-5 py-16 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 relative z-10">
          {/* Text */}
          <div className="flex-[3] text-center md:text-left">
            <span className="inline-block mb-4 text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full bg-coral/10 text-coral border border-coral/20">
              Making Tax Digital starts April 2026
            </span>
            <h1 className="font-[family-name:var(--font-nunito)] text-5xl md:text-7xl font-bold text-forest leading-[1.1] tracking-tight">
              get your taxes
              <br />
              sorted.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-xl">
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
          {/* Hero image — soft background circle to catch PNG transparency */}
          <div className="flex-[2] flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-mint/60 rounded-[2rem] -rotate-3 scale-105" />
              <Image
                src="/images/hedgie-desk.png"
                alt="Hedgie the hedgehog mascot sitting at a desk with tablet, coins, and documents"
                width={480}
                height={332}
                priority
                className="relative w-64 md:w-[420px] rounded-2xl"
              />
            </div>
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
            {features.map((f) => (
              <FadeIn key={f.title}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col overflow-hidden">
                  {/* Image container with solid background — no transparency leaks */}
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
            <div className="mt-5 space-y-4 text-charcoal/70 leading-relaxed">
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
              className="mt-8 inline-flex items-center cursor-pointer rounded-2xl bg-amber px-7 py-3.5 text-base font-bold text-white hover:bg-amber/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-amber/25"
            >
              Get Sorted before April
            </a>
          </FadeIn>
          <FadeIn className="flex-1 flex justify-center">
            <Image
              src="/images/hedgie-worried-full.png"
              alt="Hedgie looking anxious about HMRC deadlines"
              width={2752}
              height={1536}
              loading="lazy"
              className="w-64 md:w-[400px]"
            />
          </FadeIn>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-mint/30 blur-3xl" />

        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <FadeIn className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-bold text-forest">
              One price. Everything included.
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="max-w-md mx-auto bg-white border-2 border-teal rounded-2xl shadow-xl p-8 text-center relative">
              {/* Popular badge */}
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
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
                  {/* Stars */}
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
            <p className="mt-4 font-[family-name:var(--font-nunito)] text-xl font-bold text-forest">
              Join Hedgie. Get sorted.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section id="download" className="bg-forest py-20 md:py-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-gold/10 blur-2xl" />

        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-5xl font-bold text-white leading-tight">
              Your taxes won&apos;t sort themselves.
            </h2>
            <p className="mt-3 text-xl text-cream/90">But Hedgie will.</p>
            <div className="mt-8">
              <DownloadButtons />
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
