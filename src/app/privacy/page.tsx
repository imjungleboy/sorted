import DownloadCta from "../components/DownloadCta";

export const metadata = {
  title: "Privacy Policy — Sorted",
};

export default function PrivacyPage() {
  return (
    <>
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-forest mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-charcoal/60 mb-8">Last updated: 8 June 2026</p>

      <div className="prose prose-sm max-w-none text-charcoal/80 space-y-6">
        <p>
          MySorted Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the Sorted mobile application. This Privacy Policy explains how we collect, use, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">1. What We Collect</h2>
        <p>We collect the following personal data when you use Sorted:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Account information:</strong> Name and email address</li>
          <li><strong>Business details:</strong> Business name, address, UTR number, VAT number</li>
          <li><strong>Receipts:</strong> Images of receipts you scan or forward, plus the merchant name, amount, date, and category extracted from them</li>
          <li><strong>Transactions:</strong> Income entries, invoices (client details, line items, amounts, payment status), expense records, and mileage logs</li>
          <li><strong>Subscription &amp; payment data:</strong> Subscription status, transaction identifiers, and the last four digits of the card used for invoice payouts (full card details are handled by Stripe and never reach our servers)</li>
          <li><strong>Usage &amp; diagnostic data:</strong> App interactions, device type, performance metrics, and crash reports</li>
          <li><strong>Location data (optional, opt-in):</strong> Precise location coordinates (latitude and longitude) collected via your device&apos;s GPS only when you enable &ldquo;Auto-track mileage&rdquo; in Settings. Background location access is used so the app can continue recording a trip while your phone is locked during driving. This feature is off by default, must be explicitly enabled by you, and can be revoked at any time in the app or in your device&apos;s permission settings. We do not collect location when the feature is disabled.</li>
        </ul>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">2. How We Use Your Data</h2>
        <p>We use your data to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide and improve the Sorted app and its features</li>
          <li>Process receipt images using AI to extract expense data</li>
          <li>Generate invoices and send them to your clients</li>
          <li>Calculate estimated tax liabilities</li>
          <li>Send you HMRC deadline reminders and service notifications</li>
          <li>Manage your subscription and process payments</li>
          <li>Detect business car trips for HMRC mileage logging (only when you opt in to Auto-track mileage)</li>
        </ul>
        <p>
          Our lawful bases for processing are: performance of our contract with you (Article 6(1)(b)), our legitimate interests in improving the service (Article 6(1)(f)), and your consent where required (Article 6(1)(a)).
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">3. Sub-processors</h2>
        <p>We use the following data processors to operate Sorted:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Supabase</strong> — database hosting, authentication, and file storage (receipt images). Data is stored on EU-region servers.</li>
          <li><strong>RevenueCat</strong> — subscription state management and entitlement checks.</li>
          <li><strong>Stripe</strong> — payment processing for invoices you send to your clients. Card details are handled directly by Stripe and never stored on our servers.</li>
          <li><strong>PostHog</strong> — product analytics (feature usage, funnels). Self-hosted on EU-region infrastructure.</li>
          <li><strong>Sentry</strong> — crash and error reporting to help us diagnose problems.</li>
          <li><strong>Anthropic (Claude API)</strong> — receipt images are sent to Claude Vision for OCR. Images are processed under Anthropic&apos;s data-processing terms and are not used to train AI models.</li>
          <li><strong>Resend</strong> — transactional email delivery (invoices sent to your clients, account emails).</li>
          <li><strong>Apple App Store / Google Play Store</strong> — in-app purchase processing and subscription billing for Sorted Pro.</li>
        </ul>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">4. Data Storage and Security</h2>
        <p>
          Your data is stored securely in Supabase&apos;s EU-region servers. We implement appropriate technical and organisational measures to protect your data, including:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Encryption in transit (TLS) and at rest</li>
          <li>Row-level security policies ensuring you can only access your own data</li>
          <li>Secure authentication via Supabase Auth</li>
          <li>Regular security reviews of our infrastructure</li>
        </ul>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">5. Location Data and Mileage Tracking</h2>
        <p>
          Sorted offers an optional Auto-track mileage feature that uses your device&apos;s GPS to automatically detect and log business car trips for HMRC-compliant mileage records. This section sets out exactly how this works.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Off by default.</strong> The feature is disabled until you explicitly enable it in Settings &rarr; Auto-track mileage. We do not access location data unless and until you opt in.</li>
          <li><strong>What we collect.</strong> Precise location coordinates (latitude and longitude) sampled by your device&apos;s GPS while a trip is in progress. We use these samples to compute trip start time, end time, and distance travelled, which are then saved as a trip record.</li>
          <li><strong>Background access.</strong> So the app can keep recording a trip after you put your phone down during driving, we request &ldquo;Allow all the time&rdquo; location permission. Recording starts when the app detects sustained driving speed and stops when the vehicle has been stationary for several minutes.</li>
          <li><strong>Why we need this.</strong> HMRC requires sole traders claiming the simplified mileage allowance to keep accurate records of business journeys. Auto-tracking is a more reliable substitute for handwritten logs.</li>
          <li><strong>Where it is stored.</strong> Trip records are stored on your device and synced to your Supabase account (EU-region servers), the same way the rest of your transactional data is stored. Raw location samples are not retained after the trip record is computed.</li>
          <li><strong>Who we share it with.</strong> We do not share your location data with any third party. It is not used for advertising, profiling, or analytics. Supabase processes it solely as our database provider.</li>
          <li><strong>How to control it.</strong> You can disable Auto-track mileage at any time from Settings inside the app, or revoke the underlying device permission from your device&apos;s permission settings. Disabling immediately stops all location collection. Deleting your account removes all stored trip records within 30 days.</li>
        </ul>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">6. Your Rights (UK GDPR)</h2>
        <p>Under the UK GDPR, you have the right to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Access:</strong> Request a copy of all personal data we hold about you</li>
          <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
          <li><strong>Erasure:</strong> Request deletion of your data (&ldquo;right to be forgotten&rdquo;)</li>
          <li><strong>Data portability:</strong> Export your data in a machine-readable format</li>
          <li><strong>Restriction:</strong> Request we limit how we process your data</li>
          <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
          <li><strong>Withdraw consent:</strong> Where processing is based on consent, withdraw it at any time</li>
        </ul>
        <p>
          You can export your data and delete your account directly from the Settings screen in the Sorted app. If you no longer have access to the app, follow the steps on our{" "}
          <a href="/delete-account" className="text-teal hover:underline">Delete my account</a> page or email{" "}
          <a href="mailto:support@mysorted.app" className="text-teal hover:underline">support@mysorted.app</a>. We action verified deletion requests within 30 days.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">7. Data Retention</h2>
        <p>
          We retain your personal data for as long as your account is active. If you delete your account, we will delete all associated personal data within 30 days, except where we are required by law to retain certain records (e.g., for tax or legal compliance purposes, up to 7 years).
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">8. Data Sharing</h2>
        <p>
          We do not sell your personal data to any third party. We only share your data with the third-party service providers listed above, solely for the purpose of operating the Sorted app.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">9. Children&apos;s Privacy</h2>
        <p>
          Sorted is not intended for use by anyone under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have collected data from someone under 18, we will delete it promptly.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any material changes via the app or email. Continued use of Sorted after changes constitutes acceptance of the updated policy.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">11. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or wish to exercise your rights, contact us at:
        </p>
        <p>
          MySorted Ltd<br />
          Email: <a href="mailto:support@mysorted.app" className="text-teal hover:underline">support@mysorted.app</a>
        </p>
        <p>
          You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at{" "}
          <a href="https://ico.org.uk" className="text-teal hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
        </p>
      </div>
    </div>
    <DownloadCta />
    </>
  );
}
