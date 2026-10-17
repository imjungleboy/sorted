// Where Stripe sends a client who backs out of paying an invoice through a
// Sorted payment link (create-checkout-session's cancel_url).
export const metadata = {
  title: "Payment cancelled — Sorted",
  robots: { index: false, follow: false },
};

export default function PaymentCancelPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16 md:py-24 text-center">
      <h1 className="font-[family-name:var(--font-nunito)] text-4xl md:text-5xl font-bold text-forest mb-4">
        Payment cancelled
      </h1>
      <p className="text-lg text-charcoal/70 leading-relaxed">
        No payment was taken. You can use the payment link from your invoice
        again whenever you&apos;re ready.
      </p>
      <p className="mt-6 text-sm text-smoke">You can close this page.</p>
    </div>
  );
}
