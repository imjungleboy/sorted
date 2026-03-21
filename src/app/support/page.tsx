import Image from "next/image";

export const metadata = {
  title: "Support — Sorted",
};

const faqs = [
  {
    question: "How do I scan a receipt?",
    answer:
      "Tap Scan on the home screen, point your camera at the receipt, and Hedgie reads it in 3 seconds — merchant, amount, category, all done.",
  },
  {
    question: "How do I create an invoice?",
    answer:
      "Tap New Invoice, describe what you did and how much to charge. Hedgie writes a professional invoice for you — just hit send.",
  },
  {
    question: "How accurate is the tax estimate?",
    answer:
      "Sorted uses current HMRC tax bands and updates your estimate in real-time. It\u2019s an estimate \u2014 for formal advice, consult a qualified accountant.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. One tap in Settings > Subscription. No cancellation fees, no phone calls needed. You keep access until the end of your billing period.",
  },
  {
    question: "Is my data safe?",
    answer:
      "All data is encrypted in transit and at rest, stored securely on EU-based servers with row-level security. We never share your financial data with anyone.",
  },
  {
    question: "How do I export my data for my accountant?",
    answer:
      "Go to Settings > Export Data to generate a CSV for the current tax year. You can share it directly with your accountant.",
  },
];

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <h1 className="font-[family-name:var(--font-nunito)] text-4xl md:text-5xl font-bold text-forest mb-2">
        Need help?
      </h1>
      <p className="text-lg text-smoke mb-12">
        Hedgie&apos;s here for you.
      </p>

      {/* Common Questions */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-bold text-forest mb-6">
          Common Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl bg-white border border-forest/5 shadow-sm"
            >
              <summary className="cursor-pointer px-6 py-4 font-[family-name:var(--font-nunito)] font-semibold text-forest flex items-center justify-between">
                {faq.question}
                <svg
                  className="w-5 h-5 text-teal transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="px-6 pb-4 text-sm text-charcoal/70 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-bold text-forest mb-3">
          Contact Us
        </h2>
        <p className="text-charcoal/70 leading-relaxed">
          Email us at{" "}
          <a
            href="mailto:support@mysorted.app"
            className="text-teal font-medium hover:underline cursor-pointer"
          >
            support@mysorted.app
          </a>{" "}
          and Hedgie will get back to you within 24 hours.
        </p>
      </section>

      {/* Found a Bug? */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-bold text-forest mb-3">
          Found a Bug?
        </h2>
        <p className="text-charcoal/70 leading-relaxed">
          You can report bugs directly from the app (Settings &gt; Help &amp;
          Feedback) or email us. Include what you were doing when it happened
          and a screenshot if possible.
        </p>
      </section>

      {/* Hedgie waving */}
      <div className="flex justify-center mt-8">
        <Image
          src="/images/hedgie-waving.png"
          alt="Hedgie waving"
          width={220}
          height={123}
          className="w-40 md:w-[200px]"
        />
      </div>
    </div>
  );
}
