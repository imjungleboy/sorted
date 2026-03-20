export const metadata = {
  title: "Privacy Policy — Sorted",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-forest mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-charcoal/60 mb-8">Last updated: 20 March 2026</p>

      <div className="prose prose-sm max-w-none text-charcoal/80 space-y-6">
        <p>
          MySorted Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the Sorted mobile application. This Privacy Policy explains how we collect, use, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">1. What We Collect</h2>
        <p>We collect the following personal data when you use Sorted:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Account information:</strong> Name, email address</li>
          <li><strong>Business details:</strong> Business name, address, UTR number, VAT number</li>
          <li><strong>Receipt data:</strong> Images of receipts you scan, extracted merchant name, amount, date, and category</li>
          <li><strong>Invoice data:</strong> Client details, line items, amounts, payment status</li>
          <li><strong>Expense records:</strong> Categorised expense entries and mileage logs</li>
          <li><strong>Usage data:</strong> App interactions, device type, and crash reports</li>
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
        </ul>
        <p>
          Our lawful bases for processing are: performance of our contract with you (Article 6(1)(b)), our legitimate interests in improving the service (Article 6(1)(f)), and your consent where required (Article 6(1)(a)).
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">3. Third-Party Services</h2>
        <p>We use the following third-party services to operate Sorted:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Supabase:</strong> Database hosting, user authentication, and file storage (receipt images). Data is stored in EU-region servers.</li>
          <li><strong>Anthropic (Claude API):</strong> Receipt images are sent to the Claude Vision API for OCR processing to extract receipt details. Images are processed in accordance with Anthropic&apos;s data processing terms and are not used to train AI models.</li>
          <li><strong>Resend:</strong> Email delivery service used to send invoices to your clients on your behalf.</li>
          <li><strong>RevenueCat:</strong> Subscription management and payment processing coordination.</li>
          <li><strong>Apple App Store / Google Play Store:</strong> In-app purchase processing and subscription billing.</li>
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

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">5. Your Rights (UK GDPR)</h2>
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
          You can export all your data and delete your account directly from the Settings screen in the Sorted app. For any other requests, contact us at{" "}
          <a href="mailto:support@mysorted.app" className="text-teal hover:underline">support@mysorted.app</a>.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">6. Data Retention</h2>
        <p>
          We retain your personal data for as long as your account is active. If you delete your account, we will delete all associated personal data within 30 days, except where we are required by law to retain certain records (e.g., for tax or legal compliance purposes, up to 7 years).
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">7. Data Sharing</h2>
        <p>
          We do not sell your personal data to any third party. We only share your data with the third-party service providers listed above, solely for the purpose of operating the Sorted app.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">8. Children&apos;s Privacy</h2>
        <p>
          Sorted is not intended for use by anyone under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have collected data from someone under 18, we will delete it promptly.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any material changes via the app or email. Continued use of Sorted after changes constitutes acceptance of the updated policy.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">10. Contact Us</h2>
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
  );
}
