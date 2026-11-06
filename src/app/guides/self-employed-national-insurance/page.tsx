import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";

const path = "/guides/self-employed-national-insurance";
const title = "Self-employed National Insurance: Class 2 and Class 4";
const intro =
  "Self-employed National Insurance comes in two parts: Class 4, worked out on your profit, and Class 2, which most people no longer pay but still get credit for. Here are the 2026/27 rates and how it all works.";

export const metadata: Metadata = {
  title: "Self-employed National Insurance 2026/27 explained — Sorted",
  description:
    "Self-employed National Insurance for 2026/27: Class 4 at 6% and 2%, how Class 2 works now, voluntary contributions for your State Pension, and a worked example.",
  alternates: { canonical: path },
  openGraph: { title, description: intro, url: path, type: "article" },
};

export default function SelfEmployedNationalInsurancePage() {
  return (
    <GuideLayout
      path={path}
      title={title}
      intro={intro}
      sources={[
        {
          label: "gov.uk: Self-employed National Insurance rates",
          url: "https://www.gov.uk/self-employed-national-insurance-rates",
        },
        {
          label: "gov.uk: Rates and allowances — National Insurance contributions",
          url: "https://www.gov.uk/government/publications/rates-and-allowances-national-insurance-contributions/rates-and-allowances-national-insurance-contributions",
        },
        {
          label: "gov.uk: Voluntary National Insurance — rates",
          url: "https://www.gov.uk/voluntary-national-insurance-contributions/rates",
        },
        {
          label: "gov.uk: Voluntary National Insurance",
          url: "https://www.gov.uk/voluntary-national-insurance-contributions",
        },
        {
          label: "gov.uk: Pay voluntary Class 2 National Insurance",
          url: "https://www.gov.uk/pay-class-2-national-insurance",
        },
        {
          label: "HMRC Self Assessment Manual SAM121665: Class 2 National Insurance",
          url: "https://www.gov.uk/hmrc-internal-manuals/self-assessment-manual/sam121665",
        },
        {
          label: "gov.uk: The new State Pension — how it's calculated",
          url: "https://www.gov.uk/new-state-pension/how-its-calculated",
        },
        {
          label: "gov.uk: The new State Pension — what you'll get",
          url: "https://www.gov.uk/new-state-pension/what-youll-get",
        },
        {
          label: "gov.uk: Income Tax rates and Personal Allowances",
          url: "https://www.gov.uk/income-tax-rates",
        },
        {
          label: "gov.uk: Understand your Self Assessment bill — payments on account",
          url: "https://www.gov.uk/understand-self-assessment-bill/payments-on-account",
        },
      ]}
      faqs={[
        {
          q: "How much National Insurance do I pay if I'm self-employed?",
          a: "For 2026/27 you pay Class 4 National Insurance of 6% on profits between £12,570 and £50,270, and 2% on profits above £50,270. If your profit is £12,570 or less, you pay no Class 4.",
        },
        {
          q: "Do I still have to pay Class 2 NI contributions?",
          a: "Not if your profit is £7,105 or more in 2026/27. Since 6 April 2024, Class 2 is treated as paid at that level, so you get the credit on your National Insurance record without paying it.",
        },
        {
          q: "Should I pay Class 2 voluntary contributions?",
          a: "If your profit is below £7,105, paying voluntary Class 2 at £3.65 a week can stop a gap in your National Insurance record, which can affect your State Pension. Check your record and State Pension forecast first, because it doesn't help everyone.",
        },
        {
          q: "How do I pay National Insurance when I'm self-employed?",
          a: "Most people pay it through Self Assessment. HMRC works out your Class 4 from the profit on your tax return and adds it to the same bill as your income tax, due by 31 January.",
        },
        {
          q: "Is Class 4 National Insurance included in payments on account?",
          a: "Yes. HMRC says payments on account cover your next tax bill, including Class 4 National Insurance if you're self-employed.",
        },
      ]}
    >
      <p>
        Self-employed National Insurance is worked out on your profit, not on
        your takings. Profit is what you earn from your business minus your
        allowable expenses. You don&apos;t pay it every month like an employee.
        Instead, HMRC adds it to your Self Assessment bill.
      </p>

      <h2>Self-employed National Insurance rates for 2026/27</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Your yearly profit</th>
              <th>What you pay</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Under £7,105</td>
              <td>Nothing. You can choose to pay voluntary Class 2 at £3.65 a week</td>
            </tr>
            <tr>
              <td>£7,105 to £12,570</td>
              <td>Nothing. Class 2 is treated as paid, so the year still counts</td>
            </tr>
            <tr>
              <td>£12,570 to £50,270</td>
              <td>Class 4 at 6% on the profit in this band</td>
            </tr>
            <tr>
              <td>Over £50,270</td>
              <td>Class 4 at 2% on the profit above £50,270</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        HMRC calls £7,105 the Small Profits Threshold, £12,570 the Lower
        Profits Limit and £50,270 the Upper Profits Limit.
      </p>

      <h2>How National Insurance Class 4 works</h2>
      <p>
        Class 4 is the part most sole traders actually pay. It works in bands,
        a bit like income tax. The first £12,570 of profit has no Class 4. You
        pay 6% on the slice between £12,570 and £50,270, then 2% on anything
        above that.
      </p>
      <p>
        Because it&apos;s based on profit, every allowable expense you record
        lowers your Class 4 as well as your income tax. If you&apos;re not sure
        what counts, see{" "}
        <Link href="/guides/sole-trader-allowable-expenses">
          what expenses a sole trader can claim
        </Link>
        .
      </p>

      <h2>Class 2 NI contributions since April 2024</h2>
      <p>
        Class 2 used to be a small weekly charge that most self-employed people
        paid. Since 6 April 2024, that has changed:
      </p>
      <ul>
        <li>
          <strong>Profit of £7,105 or more:</strong>{" "}
          Class 2 is treated as paid. You don&apos;t pay anything, but the year
          still goes on your National Insurance record.
        </li>
        <li>
          <strong>Profit below £7,105:</strong>{" "}
          you don&apos;t have to pay anything, but you can choose to pay
          voluntary Class 2.
        </li>
      </ul>
      <p>
        A few people, such as some exam markers and invigilators, some
        landlords and some ministers of religion, aren&apos;t treated as having
        paid Class 2. If that might be you, check gov.uk or ask HMRC.
      </p>

      <h2>Class 2 voluntary contributions and your State Pension</h2>
      <p>
        Your State Pension depends on your qualifying years. You need 10
        qualifying years on your National Insurance record to get any new
        State Pension. If your record started after April 2016, you need 35 for
        the full rate.
      </p>
      <p>
        A year with low profits can leave a gap. Voluntary Class 2 fills it
        cheaply: £3.65 a week in 2026/27, or about £190 for a whole year. The
        other way to fill a gap, voluntary Class 3, costs £18.40 a week.
      </p>
      <p>
        If you file a tax return, you can choose to pay voluntary Class 2 on
        it. HMRC&apos;s guidance says you must make that choice by the 31
        January after the tax year. If you don&apos;t pay through Self
        Assessment, you can register and pay HMRC directly instead.
      </p>
      <p className="callout">
        Voluntary contributions don&apos;t always increase your State Pension.
        Check your National Insurance record and State Pension forecast on
        gov.uk before you pay, and ask HMRC if you&apos;re unsure.
      </p>

      <h2>How to pay National Insurance self-employed</h2>
      <p>
        Most people pay Class 2 and Class 4 through Self Assessment. There is
        no separate bill. On your tax return you enter your income and
        expenses, and HMRC works out your income tax and Class 4 together. You
        pay the lot by 31 January after the tax year ends. For the 2025/26
        year that&apos;s 31 January 2027: see the{" "}
        <Link href="/guides/self-assessment-deadline">
          Self Assessment deadline guide
        </Link>{" "}
        for every date.
      </p>
      <p>
        If you have payments on account, they include Class 4 National
        Insurance too. So in your first years self-employed, your January bill
        can include last year&apos;s Class 4 plus an advance towards this
        year&apos;s.
      </p>

      <h2>Worked example: £30,000 profit</h2>
      <p>
        Say you live in England and your profit for 2026/27 is £30,000 after
        expenses, with no other income.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Working</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Class 2</td>
              <td>Profit is over £7,105, so treated as paid</td>
              <td>£0</td>
            </tr>
            <tr>
              <td>Class 4</td>
              <td>6% × (£30,000 − £12,570) = 6% × £17,430</td>
              <td>£1,045.80</td>
            </tr>
            <tr>
              <td>Income tax</td>
              <td>20% × £17,430 above the £12,570 Personal Allowance</td>
              <td>£3,486.00</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td></td>
              <td>
                <strong>£4,531.80</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        That&apos;s about 15% of your profit. Payments on account could make
        your first January bill bigger than this. Income tax bands are
        different in Scotland. To try your own numbers, use the{" "}
        <Link href="/tools/self-employed-tax-calculator">
          self-employed tax calculator
        </Link>
        .
      </p>

      <h2>How Sorted helps</h2>
      <p>
        Sorted keeps a live estimate of your income tax and Class 4 National
        Insurance as you add income and snap receipts, including your payments
        on account. You can see roughly what to put aside before January
        arrives. You still file your return yourself or through your
        accountant: Sorted doesn&apos;t send anything to HMRC.
      </p>
    </GuideLayout>
  );
}
