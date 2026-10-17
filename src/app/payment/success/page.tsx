// Where Stripe sends a client after paying an invoice through a Sorted
// payment link (create-checkout-session's success_url).
export const metadata = {
  title: "Payment sent — Sorted",
  robots: { index: false, follow: false },
};

export default function PaymentSuccessPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16 md:py-24 text-center">
      <h1 className="font-[family-name:var(--font-nunito)] text-4xl md:text-5xl font-bold text-forest mb-4">
        Thank you
      </h1>
      <p className="text-lg text-charcoal/70 leading-relaxed">
        Your payment has been sent to the business that invoiced you. They&apos;ll
        see it on their invoice shortly.
      </p>
      <p className="mt-6 text-sm text-smoke">You can close this page.</p>
    </div>
  );
}
