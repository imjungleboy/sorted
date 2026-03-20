export const metadata = {
  title: "Support — Sorted",
};

const faqs = [
  {
    question: "Is Sorted a replacement for an accountant?",
    answer:
      "No. Sorted is a tracking and estimation tool to help you stay organised throughout the tax year. For complex tax situations, Self Assessment filing, or professional advice, we recommend consulting a qualified accountant.",
  },
  {
    question: "How does the receipt scanner work?",
    answer:
      "Point your camera at any receipt and Sorted uses AI to read it automatically. It extracts the merchant name, date, total amount, and VAT — then suggests the right expense category. You can review and edit before saving.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can cancel your subscription at any time through the Apple App Store or Google Play Store settings. You'll keep access until the end of your current billing period.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. Your data is encrypted in transit and at rest, stored on EU-based servers with row-level security so only you can access your data. You can export or delete all your data at any time from the Settings screen.",
  },
  {
    question: "Is Sorted MTD compatible?",
    answer:
      "We're currently working on HMRC Making Tax Digital integration — it's coming soon. For now, Sorted helps you track everything so you're ready when it's time to file.",
  },
];

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-forest mb-2">
        Support
      </h1>
      <p className="text-charcoal/70 mb-8">
        Need help? Email us at{" "}
        <a
          href="mailto:support@mysorted.app"
          className="text-teal font-medium hover:underline"
        >
          support@mysorted.app
        </a>
      </p>

      <section>
        <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-bold text-forest mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
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
    </div>
  );
}
