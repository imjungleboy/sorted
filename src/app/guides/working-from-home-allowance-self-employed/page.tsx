import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";

const path = "/guides/working-from-home-allowance-self-employed";
const title = "Working from home allowance for the self-employed";
const intro =
  "If you run your business from home, you can take part of your household costs off your profit. Use HMRC's flat rate of £10 to £26 a month, or work out the business share of your real bills.";

export const metadata: Metadata = {
  title: "Working from home allowance for the self-employed — Sorted",
  description:
    "HMRC's working from home allowance for the self-employed: flat rates of £10, £18 or £26 a month, or the business share of real bills. Worked example included.",
  alternates: { canonical: path },
  openGraph: { title, description: intro, url: path, type: "article" },
};

const flatRates: { hours: string; rate: string }[] = [
  { hours: "25 to 50", rate: "£10" },
  { hours: "51 to 100", rate: "£18" },
  { hours: "101 or more", rate: "£26" },
];

export default function WorkingFromHomeAllowancePage() {
  return (
    <GuideLayout
      path={path}
      title={title}
      intro={intro}
      sources={[
        {
          label: "gov.uk: Simplified expenses — working from home",
          url: "https://www.gov.uk/simpler-income-tax-simplified-expenses/working-from-home",
        },
        {
          label: "gov.uk: Simplified expenses if you're self-employed",
          url: "https://www.gov.uk/simpler-income-tax-simplified-expenses",
        },
        {
          label: "gov.uk: Expenses if you're self-employed — working from home",
          url: "https://www.gov.uk/expenses-if-youre-self-employed/working-from-home",
        },
        {
          label: "gov.uk: Claim tax relief for your job expenses — working at home",
          url: "https://www.gov.uk/tax-relief-for-employees/working-at-home",
        },
      ]}
      faqs={[
        {
          q: "What is the HMRC working from home allowance for the self-employed?",
          a: "It is a flat rate you can take off your profit instead of working out your real household costs: £10 a month for 25 to 50 hours of work at home, £18 for 51 to 100 hours and £26 for 101 hours or more.",
        },
        {
          q: "Can I claim the use of home office allowance if I work less than 25 hours a month at home?",
          a: "Not with the flat rate, which needs 25 hours or more a month. You can still claim the business share of your real bills if you can show a reasonable way of working it out.",
        },
        {
          q: "Does the use of home allowance include my broadband and phone?",
          a: "No. The flat rate doesn't include phone or internet. Claim the business share of those bills separately.",
        },
        {
          q: "Can I claim £6 a week for working from home if I'm self-employed?",
          a: "No. The £6 a week figure is tax relief for employees who have to work from home, and gov.uk says it can't be claimed from the 2026/27 tax year. As a sole trader you claim through your business expenses instead.",
        },
        {
          q: "Can a limited company director use the flat rate?",
          a: "No. HMRC says limited companies, and partnerships with a limited company as a partner, can't use simplified expenses. It is for sole traders and partnerships with no company partners.",
        },
      ]}
    >
      <p>
        The working from home allowance for the self-employed is HMRC&apos;s
        name for a simple way to claim your home costs. If you work from home
        for your business, you can take a share of costs like heating and
        electricity off your profit, which lowers your tax. There are two ways
        to do it, and you can pick the one that suits you.
      </p>

      <h2>HMRC&apos;s working from home allowance: the flat rates</h2>
      <p>
        The flat rate is part of HMRC&apos;s <strong>simplified expenses</strong>.
        You count the hours you work at home each month and <mark>claim a set amount</mark>.
        You don&apos;t have to work out how much of each bill is personal and
        how much is business.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Hours of business use a month</th>
              <th>Flat rate a month</th>
            </tr>
          </thead>
          <tbody>
            {flatRates.map((r) => (
              <tr key={r.hours}>
                <td>{r.hours}</td>
                <td>{r.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        You work it out month by month. HMRC&apos;s own example: you work 40
        hours at home in 10 months of the year and 60 hours in the other 2.
        That&apos;s 10 × £10 plus 2 × £18, so you claim £136 for the year.
      </p>

      <h2>Who can use the flat rate</h2>
      <ul>
        <li>Sole traders, and business partnerships with no companies as partners.</li>
        <li>Only if you work 25 hours or more a month from home.</li>
        <li>
          Not limited companies, or partnerships that include a limited
          company.
        </li>
      </ul>
      <p>
        Using it is optional. HMRC has a{" "}
        <a
          href="https://www.gov.uk/simplified-expenses-checker"
          target="_blank"
          rel="noopener"
        >
          simplified expenses checker
        </a>{" "}
        to compare it with what you would get by working out your real costs.
      </p>

      <h2>The alternative: the business share of your real bills</h2>
      <p>
        Instead of the flat rate, you can claim a proportion of what you
        actually pay for things like:
      </p>
      <ul>
        <li>heating</li>
        <li>electricity</li>
        <li>Council Tax</li>
        <li>mortgage interest or rent</li>
        <li>internet and telephone use</li>
      </ul>
      <p>
        HMRC asks for &quot;a reasonable method&quot; of dividing your costs,
        for example by the number of rooms you use for business, or by the
        amount of time you spend working from home. In HMRC&apos;s example, a
        home has 4 rooms, one used as an office, and an electricity bill of
        £1,120. The office&apos;s share is £280. If the room is only used for
        work one day a week, the claim is £280 divided by 7, which is £40.
      </p>
      <p>
        This takes more work, and you need to keep the bills and be able to
        explain your method if HMRC asks. It can be worth it if you work at
        home full time in a dedicated room.
      </p>

      <h2>A worked example: flat rate or real bills?</h2>
      <p>
        Say you&apos;re a sole trader who does your admin and design work at
        home two days a week, 8 hours a day, in one of the 4 rooms of your
        flat. Your heating, electricity and Council Tax come to £2,800 a year.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Working</th>
              <th>Claim for the year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Flat rate</td>
              <td>16 hours a week is about 69 hours a month, so £18 a month × 12</td>
              <td>£216</td>
            </tr>
            <tr>
              <td>Real bills</td>
              <td>£2,800 ÷ 4 rooms = £700 for the room, used for work 2 days in 7: £700 × 2 ÷ 7</td>
              <td>£200</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Here the flat rate gives a slightly bigger claim and needs no
        sums on your bills. If you worked at home five days a week, the real
        bills method would come out ahead. Your numbers will differ, so run
        both before you choose.
      </p>

      <h2>Phone and internet are claimed separately</h2>
      <p>
        The flat rate doesn&apos;t include phone or internet. Whichever method
        you use for the house, claim the business share of these bills on
        their own. HMRC&apos;s example: a £200 mobile bill where £70 of the
        calls were for business, so you claim £70. For other costs you can
        claim, see the{" "}
        <Link href="/guides/sole-trader-allowable-expenses">sole trader expenses list</Link>.
      </p>

      <h2>What about the £6 a week (£312 a year) allowance?</h2>
      <p>
        Many websites mention tax relief of £6 a week for working from home.
        That relief is for <strong>employees</strong>{" "}who have to work from
        home for their employer, not for the self-employed. gov.uk also says
        that from the 2026/27 tax year, employees can&apos;t claim it at all.
      </p>
      <p className="callout">
        If you&apos;re a sole trader, ignore the £6 a week figure. Your
        working from home costs go on your Self Assessment tax return as a
        business expense, using the flat rate or your real bills.
      </p>

      <h2>How Sorted helps</h2>
      <p>
        In Sorted, pick how many hours a month you work at home and the flat
        rate is taken off your profit in your live tax estimate. Snap a bill
        or receipt and Sorted reads the date, amount and category, and keeps
        it with the rest of your records. To see what you might owe overall,
        try the{" "}
        <Link href="/tools/self-employed-tax-calculator">self-employed tax calculator</Link>.
      </p>
    </GuideLayout>
  );
}
