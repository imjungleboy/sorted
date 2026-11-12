import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";

const path = "/guides/cis-tax-refund";
const title = "CIS tax refund: how to claim it back";
const intro =
  "If you're a self-employed subcontractor, a CIS refund is often waiting for you. Contractors take 20% off your pay before you've had any allowance or expenses, so many people overpay. Here's how the money comes back.";

export const metadata: Metadata = {
  title: "CIS tax refund: how to claim it back as a subcontractor — Sorted",
  description:
    "How sole-trader subcontractors claim a CIS tax refund through Self Assessment: 20% and 30% deductions, the statements you need, expenses to claim and timing.",
  alternates: { canonical: path },
  openGraph: { title, description: intro, url: path, type: "article" },
};

export default function CisTaxRefundPage() {
  return (
    <GuideLayout
      path={path}
      title={title}
      intro={intro}
      sources={[
        {
          label: "gov.uk: What you must do as a CIS subcontractor",
          url: "https://www.gov.uk/what-you-must-do-as-a-cis-subcontractor",
        },
        {
          label: "gov.uk: CIS subcontractors — get paid",
          url: "https://www.gov.uk/what-you-must-do-as-a-cis-subcontractor/get-paid",
        },
        {
          label: "gov.uk: CIS subcontractors — pay tax and claim back deductions",
          url: "https://www.gov.uk/what-you-must-do-as-a-cis-subcontractor/pay-tax-and-claim-back-deductions",
        },
        {
          label: "gov.uk: Self Assessment tax returns — sending your return",
          url: "https://www.gov.uk/self-assessment-tax-returns/sending-return",
        },
        {
          label: "gov.uk: Help online with Self Assessment",
          url: "https://www.gov.uk/guidance/help-online-for-self-assessment",
        },
        {
          label: "gov.uk: Expenses if you're self-employed — clothing",
          url: "https://www.gov.uk/expenses-if-youre-self-employed/clothing",
        },
        {
          label: "gov.uk: Expenses if you're self-employed — travel",
          url: "https://www.gov.uk/expenses-if-youre-self-employed/travel",
        },
        {
          label: "gov.uk: Simplified expenses — vehicles",
          url: "https://www.gov.uk/simpler-income-tax-simplified-expenses/vehicles",
        },
        {
          label: "gov.uk: Cash basis — income and expenses",
          url: "https://www.gov.uk/simpler-income-tax-cash-basis/income-and-expenses-under-cash-basis",
        },
        {
          label: "gov.uk: Business records if you're self-employed",
          url: "https://www.gov.uk/self-employed-records",
        },
        {
          label: "gov.uk: Self-employed National Insurance rates",
          url: "https://www.gov.uk/self-employed-national-insurance-rates",
        },
        {
          label: "gov.uk: Income Tax rates and Personal Allowances",
          url: "https://www.gov.uk/income-tax-rates",
        },
      ]}
      faqs={[
        {
          q: "How do I claim a CIS refund?",
          a: "If you're a sole trader, you claim it through your Self Assessment tax return. You enter your total pay before deductions as income and your total CIS deductions separately, and HMRC takes the deductions off your bill and pays back anything left over.",
        },
        {
          q: "When can I claim my CIS tax rebate?",
          a: "You can send your tax return any time after the tax year ends on 5 April. The sooner you file, the sooner HMRC can work out what you're owed.",
        },
        {
          q: "Do I need my CIS statements to claim a refund?",
          a: "You need the monthly payment and deduction statements from your contractors to fill in your return, and HMRC may ask for them as evidence. If one is lost, ask the contractor for a replacement.",
        },
        {
          q: "Why is CIS 30% instead of 20%?",
          a: "Contractors deduct 20% if you're registered for CIS and 30% if you're not. Registering is the simplest way to stop the higher rate.",
        },
        {
          q: "Can I get a CIS refund if I stop working in construction?",
          a: "Yes. If you stop trading, gov.uk says sole traders can claim back deductions for that tax year using form CIS40, or CIS41 for partners.",
        },
      ]}
    >
      <p>
        A CIS tax refund is <mark>money HMRC pays back</mark> when the deductions taken
        from your pay under the Construction Industry Scheme add up to more
        than the tax and National Insurance you actually owe. This guide is
        for sole-trader subcontractors. Limited companies claim a different
        way, covered briefly at the end.
      </p>

      <h2>What CIS deductions are</h2>
      <p>
        Under CIS, the contractor takes money off your pay and passes it to
        HMRC. The rate depends on whether you&apos;re registered:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Your CIS status</th>
              <th>Deduction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Registered</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>Not registered</td>
              <td>30%</td>
            </tr>
            <tr>
              <td>Gross payment status</td>
              <td>No deductions taken in advance (you have to apply for this)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Contractors shouldn&apos;t take deductions from VAT, materials you paid
        for yourself, plant hired for the job, or consumable stores. If you buy your
        own materials, keep the receipts, because the contractor may ask for
        them. Without evidence they&apos;ll estimate the cost.
      </p>
      <p>
        HMRC treats these deductions as advance payments towards your tax and
        National Insurance bill. They aren&apos;t the final amount you owe.
      </p>

      <h2>Why subcontractors are often owed a CIS refund</h2>
      <p>
        The 20% is taken from your gross pay, every job, from the first pound.
        But your actual bill is worked out on your profit for the whole year.
        That means two things the contractor can&apos;t see:
      </p>
      <ul>
        <li>
          <strong>Your Personal Allowance.</strong>{" "}
          Most people pay no income tax on the first £12,570.
        </li>
        <li>
          <strong>Your expenses.</strong>{" "}
          Tools, van costs and protective gear all come off your profit before
          tax.
        </li>
      </ul>

      <h3>A simple example</h3>
      <p>
        Say you&apos;re registered, live in England, and earn £30,000 of labour
        in 2026/27 with no other income. Your contractors deduct 20%: £6,000.
        Your expenses are £4,000, so your profit is £26,000.
      </p>
      <div className="table-wrap">
        <table>
          <tbody>
            <tr>
              <td>Income tax: 20% × (£26,000 − £12,570)</td>
              <td>£2,686.00</td>
            </tr>
            <tr>
              <td>Class 4 National Insurance: 6% × £13,430</td>
              <td>£805.80</td>
            </tr>
            <tr>
              <td>Total you owe</td>
              <td>£3,491.80</td>
            </tr>
            <tr>
              <td>CIS already deducted</td>
              <td>£6,000.00</td>
            </tr>
            <tr>
              <td>
                <strong>CIS refund due</strong>
              </td>
              <td>
                <strong>£2,508.20</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Your own figure will depend on your other income, where you live
        (Scotland has different income tax bands) and anything else on your
        return. If your situation is more complicated, check with HMRC or an
        accountant.
      </p>

      <h2>How to claim a CIS refund through Self Assessment</h2>
      <ol>
        <li>Wait for the tax year to end on 5 April. You can send your return any time after that.</li>
        <li>
          Add up your total pay <em>before</em>{" "}
          deductions from all your payment and deduction statements. This goes
          on your return as income.
        </li>
        <li>Add up the CIS deductions on those statements. Enter these as your CIS deductions.</li>
        <li>Enter your allowable expenses for the year.</li>
        <li>
          File the return. HMRC works out your bill, takes off the deductions,
          and pays back anything left over.
        </li>
        <li>
          If you&apos;re owed money, you can claim the refund by signing in to
          your HMRC online account.
        </li>
      </ol>
      <p className="callout">
        Filing early doesn&apos;t change the deadline, but for a refund it
        makes sense. You don&apos;t have to wait until January to get your own
        money back.
      </p>

      <h2>Records to keep</h2>
      <p>
        Your contractor must give you a payment and deduction statement within
        14 days of the end of each tax month. Keep every one. They are the
        figures for your return, and HMRC may ask for them as evidence. If one
        is missing, ask the contractor. If the contractor has gone out of
        business, gov.uk explains how to write to HMRC instead.
      </p>
      <p>
        Keep receipts for your expenses and materials too. HMRC says to keep
        records for at least 5 years after the 31 January deadline for that
        year.
      </p>

      <h2>Expenses tradespeople can claim</h2>
      <p>Every allowable expense lowers your profit, which can make your refund bigger. Common ones include:</p>
      <ul>
        <li>Tools and equipment, claimed as a normal expense under the cash basis</li>
        <li>Protective clothing such as safety boots and hard hats, and overalls used only for work</li>
        <li>
          Van or car costs, or the simplified mileage rate instead: 55p a mile
          for the first 10,000 business miles in 2026/27, then 25p
        </li>
        <li>Parking for work, and materials you paid for yourself</li>
      </ul>
      <p>
        You can&apos;t claim travel between home and your normal place of work,
        or everyday clothing. For the full list, see{" "}
        <Link href="/guides/sole-trader-allowable-expenses">
          what expenses a sole trader can claim
        </Link>
        , or work out a mileage claim with the{" "}
        <Link href="/tools/mileage-allowance-calculator">
          mileage allowance calculator
        </Link>
        .
      </p>

      <h2>When to claim your CIS refund</h2>
      <p>
        You can file any time from 6 April. The latest you can file online
        for 2025/26 is 31 January 2027, and if you owe tax rather than being
        owed it, that&apos;s also when it&apos;s due. See the{" "}
        <Link href="/guides/self-assessment-deadline">
          Self Assessment deadline guide
        </Link>{" "}
        for every date.
      </p>

      <h2>If you trade as a limited company</h2>
      <p>
        Companies don&apos;t use Self Assessment for CIS. They offset the
        deductions against their PAYE bill through payroll, and can claim a
        refund of anything left after the tax year ends. Gov.uk has the
        details, or ask your accountant.
      </p>

      <h2>How Sorted helps</h2>
      <p>
        Sorted&apos;s live tax estimate can include the CIS deductions
        you&apos;ve already had taken, so you can see whether you&apos;re
        heading for a bill or a refund as the year goes on. Snap receipts for
        tools, materials and fuel, and log your mileage by GPS. You still file
        the return yourself or through your accountant: Sorted doesn&apos;t
        send anything to HMRC.
      </p>
    </GuideLayout>
  );
}
