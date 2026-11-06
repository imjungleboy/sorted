import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../components/GuideLayout";

const path = "/bookkeeping-app-for-sole-traders";
const title = "Bookkeeping app for sole traders";
const intro =
  "Most sole traders don't need full accounting software. Here is what a bookkeeping app should do for you, a checklist for choosing one, and a fair comparison of Sorted with four apps people often look at.";

export const metadata: Metadata = {
  title: "Bookkeeping app for sole traders: how to choose — Sorted",
  description:
    "What a UK sole trader needs from a bookkeeping app, a checklist for choosing one, and an honest comparison of Sorted with Coconut, FreeAgent, QuickBooks and Xero.",
  alternates: { canonical: path },
  openGraph: { title, description: intro, url: path, type: "article" },
};

type Row = { app: string; plans: string; files: string; capture: string; bank: string };

// Competitor facts checked on each company's own website on 6 November 2026.
// Anything we couldn't confirm there says "check their site".
const rows: Row[] = [
  {
    app: "Sorted",
    plans:
      "Free plan: 30 receipts and 3 invoices a month, unlimited mileage. Sorted Pro for unlimited receipts and invoices.",
    files: "No. Keeps your records and estimates your tax; you or your accountant file.",
    capture: "Reads receipt photos. Mileage by GPS at HMRC's rate.",
    bank: "No",
  },
  {
    app: "Coconut",
    plans: "No free plan listed. Paid yearly plans; check their site for prices.",
    files:
      "Self Assessment on some plans (an add-on on others). MTD quarterly updates on some plans.",
    capture: "Snaps and stores receipts. Mileage: check their site.",
    bank: "Yes",
  },
  {
    app: "FreeAgent",
    plans:
      "£0 with a NatWest, RBS or Ulster Bank business current account, or Mettle with one transaction a month. Otherwise a monthly plan; check their site for prices. 30-day free trial.",
    files: "Yes. Self Assessment and Making Tax Digital submissions.",
    capture: "10 receipts a month as standard (unlimited is a paid add-on). Mileage included.",
    bank: "Yes",
  },
  {
    app: "QuickBooks",
    plans: "Sole Trader Plus. Price not shown when we checked; check their site.",
    files:
      "Helps you prepare Self Assessment. Says it supports MTD quarterly updates and final returns; check which plan.",
    capture: "Reads receipt photos. Mileage on the iOS and Android apps.",
    bank: "Yes",
  },
  {
    app: "Xero",
    plans:
      "Simple plan for sole traders not registered for VAT, plus larger plans. Check their site for prices.",
    files:
      "MTD quarterly updates and final declaration (in beta). For a standard Self Assessment return, your accountant uses your Xero figures.",
    capture: "Reads receipt photos (Hubdoc). Mileage on Grow and above.",
    bank: "Yes",
  },
];

export default function BookkeepingAppPage() {
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
          label: "gov.uk: Cash basis — income and expenses",
          url: "https://www.gov.uk/simpler-income-tax-cash-basis/income-and-expenses-under-cash-basis",
        },
        {
          label: "gov.uk: Check if you need to use Making Tax Digital for Income Tax",
          url: "https://www.gov.uk/guidance/check-if-youre-eligible-for-making-tax-digital-for-income-tax",
        },
        { label: "Coconut: pricing", url: "https://www.getcoconut.com/pricing" },
        { label: "FreeAgent: pricing", url: "https://www.freeagent.com/pricing/" },
        { label: "FreeAgent: features", url: "https://www.freeagent.com/features/" },
        { label: "QuickBooks UK: pricing", url: "https://quickbooks.intuit.com/uk/pricing/" },
        {
          label: "QuickBooks UK: sole trader accounting",
          url: "https://quickbooks.intuit.com/uk/business-type/sole-trader/",
        },
        { label: "Xero UK: pricing plans", url: "https://www.xero.com/uk/pricing-plans/" },
        {
          label: "Xero UK: Xero for self-employed",
          url: "https://www.xero.com/uk/small-businesses/xero-for-self-employed/",
        },
      ]}
      faqs={[
        {
          q: "What is the best bookkeeping app for a sole trader?",
          a: "It depends on what you need. If you want an app to file your return with HMRC or connect to your bank, FreeAgent, QuickBooks, Xero or Coconut may suit you better. If you want something simple for receipts, mileage, invoices and a tax estimate, Sorted is built for that.",
        },
        {
          q: "Do sole traders need accounting software?",
          a: "Not usually for Self Assessment. HMRC asks for accurate records of your income and expenses, not a particular kind of software. If you fall under Making Tax Digital for Income Tax, you do need compatible software that sends updates to HMRC.",
        },
        {
          q: "Is there a free bookkeeping app for the self-employed?",
          a: "Sorted has a free plan with 30 receipts and 3 invoices a month, unlimited mileage tracking and a live tax estimate. FreeAgent says its sole trader plan is £0 if you bank with NatWest, RBS or Ulster Bank, or use Mettle with at least one transaction a month.",
        },
        {
          q: "Does Sorted file my tax return?",
          a: "No. Sorted keeps your records and estimates your tax. You or your accountant file your Self Assessment return using the figures Sorted gives you.",
        },
        {
          q: "What is a simple bookkeeping app for sole traders?",
          a: "One that records your income and expenses as they happen, reads receipts for you, tracks mileage and shows what you might owe, without asking you to learn accounting terms.",
        },
      ]}
    >
      <h2>What bookkeeping means for a sole trader</h2>
      <p>
        If you work for yourself, a bookkeeping app is somewhere to record
        the money coming in and going out of your business. You need those
        records for your Self Assessment tax return. HMRC asks for accurate
        records of your income and expenses that let you pick out each
        business transaction. It doesn&apos;t ask for a particular style of
        accounts.
      </p>
      <p>
        The cash basis is the standard method for sole traders: you count
        money when it is paid in or out, not when an invoice is raised. That
        keeps things simple. You don&apos;t need balance sheets or
        double-entry ledgers to work out your profit, which is why many sole
        traders find full accounting software more than they need.
      </p>

      <h2>What a good bookkeeping app should do</h2>
      <ul>
        <li>Record expenses with as little typing as possible, ideally by reading receipt photos.</li>
        <li>Keep a copy of each receipt for at least 5 years after the 31 January deadline for that tax year.</li>
        <li>Record income, including invoices you send.</li>
        <li>Track business mileage at HMRC&apos;s flat rate if you drive for work.</li>
        <li>Show your profit and a rough tax bill as the year goes on, so it isn&apos;t a shock.</li>
        <li>Give you or your accountant clear totals and the paperwork behind them.</li>
      </ul>
      <p>
        If you want to know which costs to record, start with the{" "}
        <Link href="/guides/sole-trader-allowable-expenses">sole trader expenses list</Link>.
      </p>

      <h2>Checklist: how to choose a bookkeeping app for sole traders</h2>
      <ol>
        <li>
          <strong>Do you need it to file with HMRC?</strong>{" "}Some apps file
          your return or send Making Tax Digital updates. Others, like Sorted,
          keep your records and leave the filing to you or your accountant.
        </li>
        <li>
          <strong>Are you in Making Tax Digital for Income Tax?</strong>{" "}It
          applies if your qualifying income was over £50,000 in 2024/25 (from 6
          April 2026), over £30,000 in 2025/26 (from 6 April 2027) or over
          £20,000 in 2026/27 (from 6 April 2028). If so, you need compatible
          software. Check your own position on gov.uk or with an accountant.
        </li>
        <li>
          <strong>Do you want it linked to your bank?</strong>{" "}Bank feeds
          pull in transactions for you, but you still need to check them.
        </li>
        <li>
          <strong>How do you work day to day?</strong>{" "}If you are mostly on
          the move, a phone-first app that reads receipts and logs trips may
          suit you better than desktop software.
        </li>
        <li>
          <strong>What does it cost after any offer ends?</strong>{" "}Several
          apps discount the first months. Look at the full price and what
          the free plan leaves out.
        </li>
      </ol>

      <h2>Sorted compared with other bookkeeping apps</h2>
      <p>
        These are four apps UK sole traders often consider. We checked each
        one on its own website as of November 2026. Prices and features
        change, so check their site before you decide.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>App</th>
              <th>Plans and price</th>
              <th>Files with HMRC</th>
              <th>Receipts and mileage</th>
              <th>Bank feed</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.app}>
                <td>
                  <strong>{r.app}</strong>
                </td>
                <td>{r.plans}</td>
                <td>{r.files}</td>
                <td>{r.capture}</td>
                <td>{r.bank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Where other apps do more</h2>
      <p>
        FreeAgent, QuickBooks, Xero and Coconut all connect to your bank, and
        each says it can send at least some submissions to HMRC. Sorted does neither.
        If you are already in Making Tax Digital for Income Tax, or you want
        to file your own return from the same app you keep your books in, one
        of them is likely to be a better fit. They also offer more for
        businesses that grow, such as VAT, payroll or extra users on some
        plans.
      </p>

      <h2>Where Sorted fits</h2>
      <p>
        Sorted is a simple bookkeeping app for sole traders who want to keep
        on top of their records from their phone. It reads your receipts,
        logs mileage by GPS at the right HMRC rate for each tax year, sends
        invoices your client can pay by card, and shows a live estimate of
        your income tax, Class 4 National Insurance and payments on account.
        You can try the numbers yourself with the{" "}
        <Link href="/tools/self-employed-tax-calculator">self-employed tax calculator</Link>.
      </p>
      <p>
        At the end of the year you export your records. Pro adds a tax summary
        PDF and a one-tap accountant pack, so you or your accountant have what
        you need for the{" "}
        <Link href="/guides/self-assessment-deadline">Self Assessment deadline</Link>.
        If receipts are your main headache, see how the{" "}
        <Link href="/receipt-scanner-app">receipt scanner</Link>{" "}works.
      </p>

      <h2>How Sorted helps</h2>
      <p>
        Sorted keeps your receipts, mileage and invoices in one place on
        iPhone or Android and shows what you might owe as you go. It does not
        file with HMRC. The free plan is a fair way to see if it suits you,
        and you can compare plans on the{" "}
        <Link href="/#pricing">pricing section</Link>.
      </p>
    </GuideLayout>
  );
}
