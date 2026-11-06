import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";
import TaxCalculator from "./TaxCalculator";

const path = "/tools/self-employed-tax-calculator";
const title = "Self-employed tax calculator";
const intro =
  "How much tax do you pay when you're self-employed? Enter your income and expenses to see your income tax, Class 4 National Insurance and how much to put aside, at 2026/27 or 2025/26 rates.";

export const metadata: Metadata = {
  title: "Self-employed tax calculator UK 2026/27 — Sorted",
  description:
    "Free self-employed tax calculator for UK sole traders. See your income tax and Class 4 National Insurance for 2026/27 or 2025/26, and how much tax to put aside.",
  alternates: { canonical: path },
  openGraph: { title, description: intro, url: path, type: "website" },
};

const faqs = [
  {
    q: "How much tax do I pay as a sole trader?",
    a: "Income tax on your profit above the £12,570 Personal Allowance (20% in the basic rate band in England, Wales and Northern Ireland), plus Class 4 National Insurance of 6% on profit between £12,570 and £50,270 and 2% above that.",
  },
  {
    q: "How much tax should I put aside when self-employed?",
    a: "Use the calculator with your expected income and expenses, then divide the total by 12. Many people put aside a fixed share of every payment they receive. In your first year, also allow for payments on account.",
  },
  {
    q: "Do I pay tax on my income or my profit?",
    a: "On your profit: your self-employed income minus your allowable expenses. That's why keeping receipts for every business cost lowers your tax bill.",
  },
  {
    q: "Do I still pay Class 2 National Insurance?",
    a: "Not as a bill. Since 6 April 2024, Class 2 is treated as paid if your profits are £7,105 or more in 2026/27, so it protects your National Insurance record without you paying it. Below that you can choose to pay it voluntarily.",
  },
  {
    q: "Is this calculator right if I also have a job?",
    a: "No. A salary uses up some or all of your Personal Allowance and tax bands, so your self-employed profit is taxed at a higher rate. Sorted's tax estimate in the app takes a job into account.",
  },
];

export default function SelfEmployedTaxCalculatorPage() {
  return (
    <GuideLayout
      path={path}
      title={title}
      intro={intro}
      faqs={faqs}
      sources={[
        {
          label: "gov.uk: Income Tax rates and allowances, current and past",
          url: "https://www.gov.uk/government/publications/rates-and-allowances-income-tax/income-tax-rates-and-allowances-current-and-past",
        },
        {
          label: "gov.uk: Self-employed National Insurance rates",
          url: "https://www.gov.uk/self-employed-national-insurance-rates",
        },
        {
          label: "gov.uk: Payments on account",
          url: "https://www.gov.uk/understand-self-assessment-bill/payments-on-account",
        },
      ]}
    >
      <TaxCalculator />

      <h2>How self-employed tax is worked out</h2>
      <ol>
        <li>
          <strong>Profit</strong>{" "}= your self-employed income minus your{" "}
          <Link href="/guides/sole-trader-allowable-expenses">allowable expenses</Link>.
        </li>
        <li>
          <strong>Personal Allowance:</strong>{" "}the first £12,570 of profit is
          tax-free. It goes down by £1 for every £2 of income over £100,000.
        </li>
        <li>
          <strong>Income tax</strong>{" "}on the rest, in bands.
        </li>
        <li>
          <strong>Class 4 National Insurance</strong>{" "}on your profit.
        </li>
      </ol>

      <h2>2026/27 rates</h2>
      <h3>England, Wales and Northern Ireland</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Band</th>
              <th>Taxable income above the Personal Allowance</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic rate</td>
              <td>Up to £37,700</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>Higher rate</td>
              <td>£37,701 to £125,140</td>
              <td>40%</td>
            </tr>
            <tr>
              <td>Additional rate</td>
              <td>Over £125,140</td>
              <td>45%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Scotland has six income tax bands, from 19% to 48%. Choose Scotland in
        the calculator to use them.
      </p>
      <h3>Class 4 National Insurance</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Profit</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>£12,570 to £50,270</td>
              <td>6%</td>
            </tr>
            <tr>
              <td>Over £50,270</td>
              <td>2%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Worked example: £30,000 profit</h2>
      <p>
        A sole trader in England with £36,000 of income and £6,000 of expenses
        has a profit of £30,000 in 2026/27.
      </p>
      <ul>
        <li>Income tax: (£30,000 − £12,570) × 20% = £3,486.00</li>
        <li>Class 4 National Insurance: (£30,000 − £12,570) × 6% = £1,045.80</li>
        <li>
          <strong>Total: £4,531.80</strong>, about £378 a month to put aside
        </li>
      </ul>
      <p className="callout">
        In your first year, the 31 January bill can include half again as a
        first payment on account towards next year. Read{" "}
        <Link href="/guides/self-assessment-deadline">the Self Assessment deadline guide</Link>{" "}
        for the dates.
      </p>

      <h2>How Sorted helps</h2>
      <p>
        This calculator needs you to know your totals. Sorted keeps them for
        you: every receipt you snap and every invoice you send updates a live
        tax estimate in the app, including payments on account, so you always
        know what to put aside.
      </p>
    </GuideLayout>
  );
}
