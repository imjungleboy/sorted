import Image from "next/image";
import DownloadCta from "../components/DownloadCta";

export const metadata = {
  title: "Support — Sorted",
};

const faqs = [
  {
    question: "How do I scan a receipt?",
    answer:
      "Tap Scan on the home screen and point your camera at the receipt. Hedgie reads the shop, date, amount and category in a few seconds. Check the details and tap Save.",
  },
  {
    question: "How do I create an invoice?",
    answer:
      "Tap Invoice on the home screen and describe what you did and how much to charge. Hedgie fills in the invoice for you. Check it over and send it, with a link your client can pay by card.",
  },
  {
    question: "How accurate is the tax estimate?",
    answer:
      "Sorted uses current HMRC tax bands and updates your estimate in real-time. It\u2019s an estimate \u2014 for formal advice, consult a qualified accountant.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Subscriptions are handled by the App Store or Google Play: in Sorted, go to Settings > Subscription and tap Manage subscription to open them. No cancellation fees, and you keep Pro until the end of the period you’ve paid for.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Your data is encrypted in transit and at rest, stored on EU-region servers, and locked to your account. We never sell it. It’s only shared with the services that run Sorted, such as Anthropic, which reads receipt images; our privacy policy lists them all.",
  },
  {
    question: "How do I export my data for my accountant?",
    answer:
      "In Settings you can export a profit & loss report, your mileage log, or a ZIP of all your records, and share it with your accountant. On Pro you can also email them a tax summary PDF in one tap.",
  },
];

export default function SupportPage() {
  return (
    <>
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

      {/* Hedgie on the support line */}
      <div className="flex justify-center mt-8">
        <div className="animate-float">
          <Image
            src="/images/hedgie-support.png"
            alt="Hedgie wearing a headset, ready to help"
            width={768}
            height={768}
            sizes="200px"
            className="w-40 md:w-[200px] h-auto"
          />
        </div>
      </div>
    </div>
    <DownloadCta heading="Get the app" />
    </>
  );
}
