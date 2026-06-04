import Image from "next/image";
import FadeIn from "./components/FadeIn";
import PhoneCarousel from "./components/PhoneCarousel";
import ScannerChecklist from "./components/ScannerChecklist";
import { getPricing } from "@/lib/pricing";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=app.mysorted.sorted";
const APPLE_MANAGE_SUBSCRIPTIONS_URL = "https://support.apple.com/en-gb/118428";
const GOOGLE_MANAGE_SUBSCRIPTIONS_URL =
  "https://support.google.com/googleplay/answer/7018481";

const FREE_FEATURES = [
  "10 receipt scans per month",
  "3 invoices per month",
  "10 mileage trips per month",
  "Manual entry & basic reports",
  "Year-end totals you can export",
  "1.5% card payment fee on invoices",
];

const PRO_FEATURES = [
  "Unlimited receipt scanning",
  "Email receipts straight in",
  "Unlimited invoices, including recurring",
  "Unlimited HMRC-rate mileage logs",
  "Full profit & loss reports",
  "Year-end accountant pack (PDF)",
  "0.5% card payment fee on invoices",
  "Priority support",
];

type IconProps = { className?: string };

function ReceiptScanIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7 12h10" />
    </svg>
  );
}

function AtSignIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
    </svg>
  );
}

function RouteIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  );
}

function SendIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function CalendarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function BarChartIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20h18" />
      <line x1="6" x2="6" y1="20" y2="16" />
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
    </svg>
  );
}

function FileTextIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function VaultIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

const featureTones: Record<"teal" | "amber" | "coral" | "gold", string> = {
  teal: "bg-teal/10 text-teal",
  amber: "bg-amber/10 text-amber",
  coral: "bg-coral/10 text-coral",
  gold: "bg-gold/15 text-gold",
};

const features: {
  Icon: (p: IconProps) => React.ReactElement;
  title: string;
  description: string;
  tone: keyof typeof featureTones;
}[] = [
  {
    Icon: ReceiptScanIcon,
    title: "Scan receipts in seconds",
    description: "Snap, OCR, auto-categorise.",
    tone: "teal",
  },
  {
    Icon: AtSignIcon,
    title: "Email receipts straight in",
    description:
      "Forward online receipts to your unique Sorted alias and they appear in your account.",
    tone: "amber",
  },
  {
    Icon: RouteIcon,
    title: "Track income & mileage",
    description: "Including HMRC-rate mileage logs.",
    tone: "coral",
  },
  {
    Icon: SendIcon,
    title: "Send invoices (one-off or recurring)",
    description: "Auto-send, with Stripe payments built in.",
    tone: "gold",
  },
  {
    Icon: CalendarIcon,
    title: "UK tax year, done right",
    description: "Uses the receipt date (6 Apr\u20135 Apr), not today.",
    tone: "teal",
  },
  {
    Icon: BarChartIcon,
    title: "Profit & loss reports",
    description: "Anytime, in seconds.",
    tone: "amber",
  },
  {
    Icon: FileTextIcon,
    title: "Year-end accountant pack",
    description: "One PDF, emailed straight to your accountant.",
    tone: "coral",
  },
  {
    Icon: VaultIcon,
    title: "Vault",
    description: "Keep contracts, IDs and certificates safe in-app.",
    tone: "gold",
  },
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

function buildComparisonRows(monthlyPrice: string) {
  return [
  { label: "Monthly price", others: "£12\u201330", sorted: monthlyPrice },
  { label: "Setup time", others: "30+ minutes", sorted: "Under 5 minutes" },
  { label: "Receipt scanning", others: "Manual entry or paid add-on", sorted: "AI vision \u2014 3 second scan" },
  { label: "Learning curve", others: "Needs training", sorted: "If you can take a photo, you\u2019re sorted" },
  { label: "Built for", others: "Businesses & accountants", sorted: "Self-employed humans" },
  { label: "MTD compliant", others: "Yes", sorted: "Yes" },
  { label: "Friendly hedgehog", others: "No", sorted: "Obviously", highlight: true },
  ];
}

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

export default async function Home() {
  const pricing = await getPricing();
  const comparisonRows = buildComparisonRows(pricing.monthlyPrice);
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="min-h-[calc(100svh-5rem)] flex items-center bg-cloud relative overflow-hidden">
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-mint/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="max-w-6xl mx-auto px-5 py-8 md:py-16 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-16 relative z-10">
          <div className="flex-[3] text-center md:text-left">
            <span className="inline-flex items-center gap-2 mb-3 md:mb-4 text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full bg-teal/10 text-teal border border-teal/20">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse-dot" />
              Now live on App Store &amp; Google Play
            </span>
            <h1 className="font-[family-name:var(--font-nunito)] text-4xl md:text-6xl font-bold text-forest leading-[1.1] tracking-tight">
              Sole-trader bookkeeping that actually feels sorted.
            </h1>
            <p className="mt-4 md:mt-5 text-base md:text-xl text-charcoal/70 leading-relaxed max-w-2xl">
              Scan receipts &rarr; log income &rarr; year-end pack for your accountant.
            </p>
            <div className="mt-6 md:mt-8 flex flex-row flex-wrap justify-center md:justify-start items-center gap-3">
              <a
                href="https://apps.apple.com/gb/app/sorted-self-employed-tax/id6761042935"
                target="_blank"
                rel="noopener"
                aria-label="Download Sorted on the App Store"
                className="inline-block cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <Image
                  src="/images/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  unoptimized
                  className="h-12 md:h-14 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=app.mysorted.sorted"
                target="_blank"
                rel="noopener"
                aria-label="Get Sorted on Google Play"
                className="inline-block cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <Image
                  src="/images/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={646}
                  height={250}
                  unoptimized
                  className="h-[60px] md:h-[70px] w-auto -mx-1.5"
                />
              </a>
            </div>
            <p className="mt-4 text-sm text-charcoal/60">
              Already using Sorted?{" "}
              <a
                href="https://app.mysorted.app"
                target="_blank"
                rel="noopener"
                className="text-teal font-semibold hover:underline cursor-pointer"
              >
                Sign in at app.mysorted.app &rarr;
              </a>
            </p>
          </div>
          <div className="flex-[2] flex justify-center">
            <Image
              src="/images/hedgie-hero.png"
              alt="Hedgie the hedgehog mascot holding a phone with receipts and documents"
              width={1496}
              height={1016}
              priority
              className="w-44 md:w-[520px]"
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
              Everything you need to stay sorted
            </h2>
            <p className="mt-3 text-smoke text-lg">
              No jargon. No spreadsheets. No accountant required.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {features.map(({ Icon, title, description, tone }) => (
              <FadeIn key={title}>
                <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${featureTones[tone]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-[family-name:var(--font-nunito)] text-base font-bold text-forest leading-snug">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm text-charcoal/70 leading-relaxed">
                    {description}
                  </p>
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
              Free or Sorted Pro
            </h2>
            <p className="mt-3 text-smoke text-lg">
              Start free. Upgrade when you outgrow the monthly limits.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto items-stretch">
              {/* Free */}
              <div className="bg-white border border-forest/10 rounded-2xl shadow-sm p-7 flex flex-col">
                <p className="text-smoke font-semibold text-sm tracking-wide uppercase">
                  Free
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-mono text-5xl font-bold text-forest">
                    £0
                  </span>
                  <span className="text-base text-smoke">/forever</span>
                </div>
                <p className="mt-2 text-sm text-charcoal/70">
                  No card needed. Hard monthly caps.
                </p>
                <hr className="my-5 border-forest/10" />
                <ul className="space-y-3 text-left flex-1">
                  {FREE_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-charcoal/80">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={pricing.appStoreUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-7 block w-full text-center cursor-pointer rounded-2xl border-2 border-teal text-teal py-3 text-base font-bold hover:bg-teal/5 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Get Sorted free
                </a>
              </div>

              {/* Pro */}
              <div className="bg-white border-2 border-teal rounded-2xl shadow-xl p-7 flex flex-col relative">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-teal text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
                <p className="text-teal font-semibold text-sm tracking-wide uppercase mt-1">
                  Sorted Pro
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-mono text-5xl font-bold text-forest">
                    {pricing.monthlyPrice}
                  </span>
                  <span className="text-base text-smoke">/month</span>
                </div>
                <p className="mt-2 text-sm text-charcoal/70">
                  {pricing.trialDays}-day free trial &bull; cancel anytime
                </p>
                <hr className="my-5 border-forest/10" />
                <ul className="space-y-3 text-left flex-1">
                  {PRO_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-charcoal/80">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={pricing.appStoreUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-7 block w-full text-center cursor-pointer rounded-2xl bg-amber py-3 text-base font-bold text-white hover:bg-amber/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-amber/25"
                >
                  Start {pricing.trialDays}-day free trial
                </a>
              </div>
            </div>
          </FadeIn>

          <p className="mt-8 text-center text-sm text-smoke max-w-2xl mx-auto">
            Subscriptions are managed through the App Store and Google Play, not on this site.{" "}
            <a
              href={APPLE_MANAGE_SUBSCRIPTIONS_URL}
              target="_blank"
              rel="noopener"
              className="text-teal underline cursor-pointer hover:text-teal/80"
            >
              Manage Apple subscriptions
            </a>
            {" · "}
            <a
              href={GOOGLE_MANAGE_SUBSCRIPTIONS_URL}
              target="_blank"
              rel="noopener"
              className="text-teal underline cursor-pointer hover:text-teal/80"
            >
              Manage Google Play subscriptions
            </a>
            .
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
            <div className="mt-8 flex flex-row flex-wrap items-center gap-3">
              <a
                href={pricing.appStoreUrl}
                target="_blank"
                rel="noopener"
                aria-label="Download Sorted on the App Store"
                className="inline-block cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <Image
                  src="/images/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  unoptimized
                  className="h-12 md:h-14 w-auto"
                />
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener"
                aria-label="Get Sorted on Google Play"
                className="inline-block cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <Image
                  src="/images/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={646}
                  height={250}
                  unoptimized
                  className="h-[60px] md:h-[70px] w-auto -mx-1.5"
                />
              </a>
            </div>
            <p className="mt-3 text-sm text-cream/70">
              Free to start &bull; {pricing.trialDays}-day Pro trial &bull; Cancel anytime in the App Store or Google Play
            </p>
            <p className="mt-2 text-sm text-cream/70">
              Need help?{" "}
              <a
                href="mailto:support@mysorted.app"
                className="text-gold hover:underline cursor-pointer"
              >
                Email support@mysorted.app
              </a>
            </p>
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
