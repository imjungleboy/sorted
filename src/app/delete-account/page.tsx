import DownloadCta from "../components/DownloadCta";

export const metadata = {
  title: "Delete my account — Sorted",
  description:
    "How to delete your Sorted account and all associated data. In-app self-serve, plus an email request route if you no longer have access to the app.",
};

export default function DeleteAccountPage() {
  return (
    <>
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-forest mb-2">
        Delete my account
      </h1>
      <p className="text-sm text-charcoal/60 mb-8">Last updated: 6 May 2026</p>

      <div className="prose prose-sm max-w-none text-charcoal/80 space-y-6">
        <p>
          You can delete your Sorted account and all of the personal data associated with it. There are two routes, depending on whether you still have access to the app.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">
          Option 1 — Delete from inside the app (recommended)
        </h2>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Open the Sorted app on the device where you signed in.</li>
          <li>Go to <strong>Settings</strong>.</li>
          <li>Scroll to <strong>Account</strong> and tap <strong>Delete account</strong>.</li>
          <li>Confirm. We will export a final copy of your data to your email and queue your account for deletion.</li>
        </ol>
        <p>
          Deleting your account in-app does <strong>not</strong> automatically cancel your Sorted Pro subscription. Cancel that separately in the{" "}
          <a
            href="https://support.apple.com/en-gb/118428"
            target="_blank"
            rel="noopener"
            className="text-teal hover:underline"
          >
            App Store
          </a>{" "}
          or{" "}
          <a
            href="https://support.google.com/googleplay/answer/7018481"
            target="_blank"
            rel="noopener"
            className="text-teal hover:underline"
          >
            Google Play
          </a>{" "}
          before deleting your account, otherwise you may continue to be billed.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">
          Option 2 — Email us
        </h2>
        <p>
          If you no longer have access to the app, email{" "}
          <a href="mailto:support@mysorted.app?subject=Delete%20my%20account" className="text-teal hover:underline">
            support@mysorted.app
          </a>{" "}
          from the address registered on your Sorted account. Use the subject line <strong>&ldquo;Delete my account&rdquo;</strong>.
        </p>
        <p>
          We will verify your identity, confirm the request by reply, and action it within 30 days as required by UK GDPR.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">
          What gets deleted
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Your account profile (name, email, business details, UTR, VAT number)</li>
          <li>All receipts, including images stored in the Vault</li>
          <li>All income entries, invoices, expense records, and mileage logs</li>
          <li>App usage analytics and crash-report identifiers tied to your account</li>
          <li>Authentication records and sessions</li>
        </ul>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">
          What we may keep, and why
        </h2>
        <p>
          We may retain a minimum amount of data where the law requires it or where it is necessary to defend legal claims:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Invoice and payment records that we are required to keep under HMRC and Companies Act record-keeping rules (typically up to 7 years).</li>
          <li>A record of your deletion request itself, so we can prove we honoured it.</li>
        </ul>
        <p>
          Any retained records are kept only for the legal purpose above and are not used for any other reason.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">
          How long it takes
        </h2>
        <p>
          Deletion is queued immediately and completes within 30 days. Backups are overwritten on a 90-day rolling cycle, after which no copy of your data remains in our systems.
        </p>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">
          Cancelling your subscription
        </h2>
        <p>
          Subscriptions are managed by the App Store and Google Play, not by Sorted. To stop being billed, cancel separately:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            iOS:{" "}
            <a
              href="https://support.apple.com/en-gb/118428"
              target="_blank"
              rel="noopener"
              className="text-teal hover:underline"
            >
              View, change, or cancel your subscriptions
            </a>
          </li>
          <li>
            Android:{" "}
            <a
              href="https://support.google.com/googleplay/answer/7018481"
              target="_blank"
              rel="noopener"
              className="text-teal hover:underline"
            >
              Cancel a subscription on Google Play
            </a>
          </li>
        </ul>

        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-forest mt-8">
          Questions
        </h2>
        <p>
          Email{" "}
          <a href="mailto:support@mysorted.app" className="text-teal hover:underline">
            support@mysorted.app
          </a>
          . Operated by MySorted Ltd, United Kingdom.
        </p>
      </div>
    </div>
    <DownloadCta />
    </>
  );
}
