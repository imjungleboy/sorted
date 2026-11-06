import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";

const path = "/guides/self-assessment-deadline";
const title = "Self Assessment deadline: 31 January 2027";
const intro =
  "Your 2025/26 tax return covers 6 April 2025 to 5 April 2026. Here is every date that matters, what happens if you miss one, and what to do this week.";

export const metadata: Metadata = {
  title: "Self Assessment deadline 31 January 2027 (2025/26 tax return) — Sorted",
  description:
    "Key dates for the 2025/26 Self Assessment tax return: file online and pay by 31 January 2027. Payments on account, late filing penalties and a checklist for sole traders.",
  alternates: { canonical: path },
  openGraph: { title, description: intro, url: path, type: "article" },
};

export default function SelfAssessmentDeadlinePage() {
  return (
    <GuideLayout
      path={path}
      title={title}
      intro={intro}
      sources={[
        {
          label: "gov.uk: Self Assessment tax returns — deadlines",
          url: "https://www.gov.uk/self-assessment-tax-returns/deadlines",
        },
        {
          label: "gov.uk: Self Assessment tax returns — penalties",
          url: "https://www.gov.uk/self-assessment-tax-returns/penalties",
        },
        {
          label: "gov.uk: Understand your Self Assessment bill — payments on account",
          url: "https://www.gov.uk/understand-self-assessment-bill/payments-on-account",
        },
      ]}
    >
      <h2>The key dates for 2025/26</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>What&apos;s due</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5 October 2026</td>
              <td>Tell HMRC you need to file, if this is your first year self-employed</td>
            </tr>
            <tr>
              <td>31 October 2026</td>
              <td>Paper tax returns (passed)</td>
            </tr>
            <tr>
              <td>
                <strong>31 January 2027</strong>
              </td>
              <td>
                <strong>File your return online and pay the tax you owe</strong>{" "}
                (by 11:59pm), plus your first payment on account for 2026/27 if
                you have one
              </td>
            </tr>
            <tr>
              <td>31 July 2027</td>
              <td>Second payment on account for 2026/27, if you have one</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>What are payments on account?</h2>
      <p>
        Payments on account are advance payments towards next year&apos;s tax.
        Each one is half of last year&apos;s bill, due on 31 January and 31
        July. You generally don&apos;t have to make them if last year&apos;s
        Self Assessment bill was under £1,000, or if more than 80% of your tax
        was already paid another way, such as through PAYE.
      </p>
      <p className="callout">
        In your first year self-employed, the 31 January bill can be a shock:
        it can include the whole of last year&apos;s tax plus half again as
        your first payment on account. Setting money aside as you earn avoids
        that.
      </p>

      <h2>What happens if you miss the deadline?</h2>
      <h3>Filing late</h3>
      <ul>
        <li>£100 penalty straight away, even if you owe no tax</li>
        <li>After 3 months: £10 a day, up to £900</li>
        <li>After 6 months: another 5% of the tax due or £300, whichever is more</li>
        <li>After 12 months: another 5% or £300, whichever is more</li>
      </ul>
      <h3>Paying late</h3>
      <p>
        A penalty of 5% of the unpaid tax at 30 days, 6 months and 12 months,
        plus interest on what you owe.
      </p>

      <h2>A checklist to get it done</h2>
      <ol>
        <li>
          Find your UTR (Unique Taxpayer Reference) and your HMRC online login.
          Sorting out a lost login can take weeks, so do this first.
        </li>
        <li>Add up your income from 6 April 2025 to 5 April 2026.</li>
        <li>
          Gather your expense receipts for the same dates. Not sure what
          counts? Read{" "}
          <Link href="/guides/sole-trader-allowable-expenses">
            what expenses a sole trader can claim
          </Link>
          .
        </li>
        <li>
          Total your business miles and work out the claim with the{" "}
          <Link href="/tools/mileage-allowance-calculator">
            mileage allowance calculator
          </Link>
          .
        </li>
        <li>Estimate your bill early, so 31 January holds no surprises.</li>
        <li>File online, or send everything to your accountant well before Christmas.</li>
      </ol>

      <h2>How Sorted helps</h2>
      <p>
        Snap a receipt and Sorted reads the shop, date, amount and category for
        you. It logs your mileage, keeps a running estimate of your tax, and
        builds a year-end pack of income, expenses and mileage for you or your
        accountant. You still file the return yourself, or your accountant
        does: Sorted doesn&apos;t send anything to HMRC.
      </p>
    </GuideLayout>
  );
}
