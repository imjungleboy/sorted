import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";

const path = "/guides/locum-optometrist-tax";
const title = "Tax for locum optometrists: what you can claim";
const intro =
  "Most locum optometrists are self-employed sole traders, so you file a Self Assessment return and can take business costs off your income. Sorted was built by an optometrist, and this is the list we wish we'd had.";

export const metadata: Metadata = {
  title: "Locum optometrist tax and expenses UK — Sorted",
  description:
    "What self-employed locum optometrists in the UK can claim: GOC registration, indemnity insurance, CPD, equipment, mileage and more. Plus what you can't claim and the 31 January deadline.",
  alternates: { canonical: path },
  openGraph: { title, description: intro, url: path, type: "article" },
};

export default function LocumOptometristTaxPage() {
  return (
    <GuideLayout
      path={path}
      title={title}
      intro={intro}
      sources={[
        {
          label: "gov.uk: Expenses if you're self-employed",
          url: "https://www.gov.uk/expenses-if-youre-self-employed",
        },
        {
          label: "gov.uk: Travel expenses if you're self-employed",
          url: "https://www.gov.uk/expenses-if-youre-self-employed/travel",
        },
        {
          label: "gov.uk: Clothing expenses if you're self-employed",
          url: "https://www.gov.uk/expenses-if-youre-self-employed/clothing",
        },
        {
          label: "gov.uk: Cash basis — income and expenses",
          url: "https://www.gov.uk/simpler-income-tax-cash-basis/income-and-expenses-under-cash-basis",
        },
        {
          label: "gov.uk: Simplified expenses — vehicles",
          url: "https://www.gov.uk/simpler-income-tax-simplified-expenses/vehicles",
        },
      ]}
    >
      <h2>Costs locums can usually claim</h2>
      <p>
        HMRC&apos;s rule is that a cost must be <strong>for your business</strong>.
        For a locum optometrist that usually includes:
      </p>
      <ul>
        <li>
          <strong>GOC registration fee.</strong>{" "}You can&apos;t practise
          without it.
        </li>
        <li>
          <strong>Professional body membership and indemnity insurance</strong>,
          such as AOP membership.
        </li>
        <li>
          <strong>CPD</strong>: courses, conferences and journals that keep
          your existing skills current.
        </li>
        <li>
          <strong>Equipment</strong> you buy for work, such as an
          ophthalmoscope, retinoscope, trial frame or BIO. Under the cash
          basis, the standard method for sole traders, you claim equipment as
          a normal expense in the year you pay for it.
        </li>
        <li>
          <strong>Business mileage</strong>{" "}at HMRC&apos;s flat rate: 55p a
          mile for the first 10,000 miles in 2026/27 (45p before 6 April 2026).
          Parking at practices goes on top.
        </li>
        <li>
          <strong>The business share of your phone</strong>, for practice
          bookings and calls.
        </li>
        <li>
          <strong>Accountant&apos;s fees</strong> for your business accounts
          and tax return.
        </li>
        <li>
          <strong>Clinical tunics or uniforms</strong>{" "}that aren&apos;t
          everyday clothing.
        </li>
      </ul>

      <h2>What you can&apos;t claim</h2>
      <ul>
        <li>Everyday clothes you wear to clinic, such as a shirt and smart trousers</li>
        <li>Your lunch on a normal working day</li>
        <li>Parking fines</li>
        <li>The personal share of your phone or car</li>
      </ul>

      <h2>Is travel to practices allowable?</h2>
      <p>
        gov.uk says travel between home and work can&apos;t be claimed. Many
        locums who cover a different practice most days work from home as
        their business base, which can change the answer. If you work at the
        same practice most weeks, it may count as your regular workplace. This
        depends on your pattern of work, so check with an accountant if
        you&apos;re unsure, and log every trip so you have the evidence.
      </p>
      <p>
        Work out your claim with the{" "}
        <Link href="/tools/mileage-allowance-calculator">
          mileage allowance calculator
        </Link>
        .
      </p>

      <h2>Deadlines and setting tax aside</h2>
      <p>
        Your 2025/26 return and payment are due by{" "}
        <Link href="/guides/self-assessment-deadline">31 January 2027</Link>.
        Locum income arrives without tax taken off, so set some of each payment
        aside as you go. If last year&apos;s bill was £1,000 or more, you may
        also owe payments on account towards next year.
      </p>

      <h2>Why an optometrist built Sorted</h2>
      <p>
        Locum work means receipts from different practices, mileage all over
        the place and invoices to chase. Sorted reads a receipt photo in
        seconds, logs your trips, creates invoices practices can pay by card,
        and keeps a running estimate of your tax. At year end it builds a pack
        of income, expenses and mileage for you or your accountant.
      </p>
      <p>
        See the full list of{" "}
        <Link href="/guides/sole-trader-allowable-expenses">
          allowable expenses for sole traders
        </Link>
        .
      </p>
    </GuideLayout>
  );
}
