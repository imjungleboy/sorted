import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../components/GuideLayout";

const path = "/receipt-scanner-app";
const title = "Receipt scanner app for UK sole traders";
const intro =
  "A receipt scanner app reads the details off a receipt photo and keeps a copy with your records. Here is what to look for, what HMRC expects you to keep, and how Sorted does it.";

export const metadata: Metadata = {
  title: "Receipt scanner app for UK sole traders — Sorted",
  description:
    "What to look for in a receipt scanner app as a UK sole trader: reading the details for you, expense categories, clear copies for HMRC, mileage, invoices and export.",
  alternates: { canonical: path },
  openGraph: { title, description: intro, url: path, type: "article" },
};

const checklist: { feature: string; why: string }[] = [
  {
    feature: "Reads the details for you",
    why: "Typing in the shop, date and amount from every receipt is the job you are trying to avoid. You should only need to check what the app read.",
  },
  {
    feature: "Expense categories that fit HMRC",
    why: "Your tax return asks for expenses by type, such as travel, office costs or clothing. Categories that follow those types save sorting at the end of the year.",
  },
  {
    feature: "A clear copy you can find again",
    why: "HMRC can ask for proof of what you claimed. The photo needs to be readable and kept with the record it supports.",
  },
  {
    feature: "Uses the right tax year",
    why: "A receipt belongs to the tax year of its date, not the day you scanned it. This matters most around 5 and 6 April.",
  },
  {
    feature: "Mileage and invoices in the same place",
    why: "Receipts are only part of your records. If your mileage and income live elsewhere, you end up with three lists to join together.",
  },
  {
    feature: "Export for you or your accountant",
    why: "Whoever fills in your tax return needs totals they can trust and the receipts behind them, in a form they can open.",
  },
];

export default function ReceiptScannerAppPage() {
  return (
    <GuideLayout
      path={path}
      title={title}
      intro={intro}
      isAppPage={true}
      sources={[
        {
          label: "gov.uk: Business records if you're self-employed",
          url: "https://www.gov.uk/self-employed-records",
        },
        {
          label: "gov.uk: Business records — what records to keep",
          url: "https://www.gov.uk/self-employed-records/what-records-to-keep",
        },
        {
          label: "gov.uk: Business records — how long to keep your records",
          url: "https://www.gov.uk/self-employed-records/how-long-to-keep-your-records",
        },
        {
          label: "gov.uk: Use Making Tax Digital for Income Tax — create digital records",
          url: "https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records",
        },
        {
          label: "gov.uk: Check if you need to use Making Tax Digital for Income Tax",
          url: "https://www.gov.uk/guidance/check-if-youre-eligible-for-making-tax-digital-for-income-tax",
        },
        {
          label: "gov.uk: Expenses if you're self-employed",
          url: "https://www.gov.uk/expenses-if-youre-self-employed",
        },
        {
          label: "gov.uk: Simplified expenses — vehicles",
          url: "https://www.gov.uk/simpler-income-tax-simplified-expenses/vehicles",
        },
      ]}
      faqs={[
        {
          q: "What is the best receipt scanner app for a sole trader?",
          a: "The best one is the one you will actually use after every purchase. Look for an app that reads the details for you, uses expense categories that match HMRC's, keeps a clear copy, and lets you export your records for your tax return.",
        },
        {
          q: "Can I throw away paper receipts after I scan them?",
          a: "HMRC's guidance says you need to keep your original records or supporting documents, or copies of them. Make sure the photo shows every detail clearly, and if you are unsure about a particular receipt, check with HMRC or an accountant before you bin the paper.",
        },
        {
          q: "How long do I need to keep receipts as a sole trader?",
          a: "At least 5 years after the 31 January deadline for that tax year. For the 2025/26 tax return, due by 31 January 2027, that means keeping records until at least the end of January 2032.",
        },
        {
          q: "Is there a free receipt scanner app?",
          a: "Sorted's free plan lets you scan 30 receipts a month, with mileage tracking for 10 trips a month and a live tax estimate. Sorted Pro removes the receipt and mileage limits and lets you email receipts straight in.",
        },
        {
          q: "Do I need to keep fuel receipts if I claim mileage?",
          a: "If you claim HMRC's flat mileage rate for a vehicle, the rate replaces fuel, insurance, repairs and servicing, so you claim the miles instead of those bills. You can still claim parking on top, and it makes sense to keep a log of your business trips so you can show how you worked out the miles.",
        },
        {
          q: "Does a receipt scanner app file my tax return?",
          a: "Some apps do and some don't. Sorted keeps your receipts and estimates your tax, but it does not file your tax return with HMRC, so you or your accountant file it using the figures Sorted gives you.",
        },
      ]}
    >
      <h2>What a receipt scanner app does</h2>
      <p>
        A receipt scanner app turns a photo of a receipt into a record. You
        take the picture, the app reads the shop, the date and the amount, and
        it files the receipt as a business expense. The photo stays attached,
        so you have the proof if HMRC ever asks.
      </p>
      <p>
        For a sole trader, that is most of the point. Every cost you can claim
        lowers the profit you pay tax on, and a receipt in a coat pocket is a
        claim you might forget. If you are not sure which costs count, the{" "}
        <Link href="/guides/sole-trader-allowable-expenses">sole trader expenses list</Link>{" "}
        sets out what HMRC allows.
      </p>

      <h2>What to look for in the best receipt scanner app</h2>
      <p>
        Lots of apps can scan a receipt. Fewer are built around a UK tax
        return. These are the things worth checking before you pick one.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Look for</th>
              <th>Why it matters</th>
            </tr>
          </thead>
          <tbody>
            {checklist.map((c) => (
              <tr key={c.feature}>
                <td>{c.feature}</td>
                <td>{c.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What HMRC expects from your receipts</h2>
      <p>
        HMRC says you must keep records of all your business income and
        expenses for your Self Assessment tax return. The proof it lists
        includes receipts for goods and stock, bank statements, and sales
        invoices. Your records must be accurate and let you pick out each
        business transaction.
      </p>
      <ul>
        <li>
          <strong>How long:</strong>{" "}at least 5 years after the 31 January
          deadline for that tax year. Receipts for 2025/26 should be kept until
          at least the end of January 2032.
        </li>
        <li>
          <strong>Paper or copies:</strong>{" "}HMRC&apos;s Making Tax Digital
          guidance says you still need to keep original records or supporting
          documents, or copies of them. A photo only helps if every detail on
          it can be read.
        </li>
        <li>
          <strong>If records go missing:</strong>{" "}you must give your best
          figures and tell HMRC on your return whether they are estimated or
          provisional. A backed-up photo saves you from guessing.
        </li>
      </ul>
      <p className="callout">
        Making Tax Digital for Income Tax applies to sole traders whose
        qualifying income was over £50,000 in 2024/25 (from 6 April 2026), over
        £30,000 in 2025/26 (from 6 April 2027) and over £20,000 in 2026/27
        (from 6 April 2028). It needs compatible software that sends updates
        to HMRC. Sorted does not send these updates, so if you are in scope
        you will need other software or an accountant for that part.
      </p>

      <h2>How it works in Sorted</h2>
      <ol>
        <li>Take a photo of the receipt in the app, or pick receipt photos from your camera roll.</li>
        <li>Sorted reads the shop, date, amount and category.</li>
        <li>You check the details and change anything that doesn&apos;t look right.</li>
        <li>The receipt is saved with its photo, in the tax year that matches its date.</li>
        <li>Your live tax estimate and profit and loss report update straight away.</li>
      </ol>
      <p>
        On Sorted Pro you can also forward emailed receipts straight in, so
        online orders and subscriptions land in the same place as your paper
        ones.
      </p>

      <h2>Receipts, mileage and invoices together</h2>
      <p>
        Receipts are one part of your records. Sorted also logs business
        trips, including by GPS, at HMRC&apos;s rate for each tax year: 55p a
        mile for the first 10,000 miles in a car or van in 2026/27, and 45p
        before 6 April 2026. You can check a claim with the{" "}
        <Link href="/tools/mileage-allowance-calculator">mileage allowance calculator</Link>.
        Invoices you send from Sorted come with a link your client can pay by
        card, so your income sits next to your costs.
      </p>
      <p>
        When it is time to do your return, you can export your records. Pro
        adds a year-end tax summary PDF and a one-tap accountant pack. If you
        are weighing up a full bookkeeping app instead, see{" "}
        <Link href="/bookkeeping-app-for-sole-traders">how to choose a bookkeeping app for sole traders</Link>.
      </p>

      <h2>How Sorted helps</h2>
      <p>
        Sorted is a receipt scanner and record keeper for UK sole traders, on
        iPhone and Android. It reads your receipts, tracks your mileage and
        shows a live tax estimate, ready for the{" "}
        <Link href="/guides/self-assessment-deadline">Self Assessment deadline</Link>.
        It does not file your return with HMRC. The free plan covers 30
        receipts a month, and you can compare plans on the{" "}
        <Link href="/#pricing">pricing section</Link>.
      </p>
    </GuideLayout>
  );
}
