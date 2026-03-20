import Link from "next/link";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
      </svg>
    ),
    title: "Snap receipts",
    description: "Point your camera at any receipt. AI reads it instantly and files it under the right expense category.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Send invoices",
    description: "Create professional invoices in seconds. Send them directly to clients and track when they're paid.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
      </svg>
    ),
    title: "Live tax estimate",
    description: "See what you owe HMRC in real time. No surprises when January rolls around.",
  },
];

const pricingBullets = [
  "Unlimited receipt scanning",
  "Professional invoicing",
  "Live tax estimate",
  "Expense tracking",
  "HMRC deadline reminders",
  "7-day free trial",
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="py-16 sm:py-24 text-center">
        <div className="mx-auto w-32 h-32 rounded-3xl bg-mint/40 flex items-center justify-center mb-8">
          <span className="text-5xl">🦔</span>
        </div>
        <h1 className="font-[family-name:var(--font-nunito)] text-4xl sm:text-5xl font-bold text-forest leading-tight">
          get your taxes sorted.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
          The anti-accounting app for UK self-employed people.
          <br className="hidden sm:block" /> Scan receipts. Send invoices. Know what you owe.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-charcoal text-white px-6 py-3 text-sm font-medium hover:bg-charcoal/90 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z"/></svg>
            App Store
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-charcoal text-white px-6 py-3 text-sm font-medium hover:bg-charcoal/90 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92Zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635ZM17.1 8.4l2.849 1.65a1 1 0 0 1 0 1.736L17.1 13.6l-2.552-2.552L17.1 8.4Zm-11.236-5.74L16.8 8.99l-2.302 2.302L5.864 2.66Z"/></svg>
            Google Play
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white p-6 shadow-sm border border-forest/5"
            >
              <div className="text-teal mb-4">{f.icon}</div>
              <h3 className="font-[family-name:var(--font-nunito)] text-lg font-bold text-forest">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 text-center">
        <div className="rounded-2xl bg-white p-8 sm:p-12 shadow-sm border border-forest/5 max-w-lg mx-auto">
          <h2 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-forest">
            £4.99/month. That&apos;s it.
          </h2>
          <ul className="mt-6 space-y-3 text-left inline-block">
            {pricingBullets.map((item) => (
              <li key={item} className="flex items-center gap-3 text-charcoal/80">
                <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
