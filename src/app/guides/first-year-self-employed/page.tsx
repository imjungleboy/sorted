import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";

const path = "/guides/first-year-self-employed";
const title = "Your first year self-employed: when do you pay tax?";
const intro =
  "In your first year self-employed, you pay tax later than you might expect, and the first bill can be bigger than you expect. Here is how to register, when you pay, and how to be ready.";

export const metadata: Metadata = {
  title: "First year self-employed: when do I pay tax? — Sorted",
  description:
    "Your first year self-employed: how to register as a sole trader, when your UTR arrives, when you pay tax, and why the first 31 January bill can be so big.",
  alternates: { canonical: path },
  openGraph: { title, description: intro, url: path, type: "article" },
};

export default function FirstYearSelfEmployedPage() {
  return (
    <GuideLayout
      path={path}
      title={title}
      intro={intro}
      sources={[
        {
          label: "gov.uk: Set up as a sole trader",
          url: "https://www.gov.uk/set-up-sole-trader",
        },
        {
          label: "gov.uk: Register for Self Assessment",
          url: "https://www.gov.uk/register-for-self-assessment",
        },
        {
          label: "gov.uk: Find your UTR number",
          url: "https://www.gov.uk/find-utr-number",
        },
        {
          label: "gov.uk: Self Assessment tax returns — deadlines",
          url: "https://www.gov.uk/self-assessment-tax-returns/deadlines",
        },
        {
          label: "gov.uk: Understand your Self Assessment bill — payments on account",
          url: "https://www.gov.uk/understand-self-assessment-bill/payments-on-account",
        },
        {
          label: "gov.uk: Income Tax rates and Personal Allowances",
          url: "https://www.gov.uk/income-tax-rates",
        },
        {
          label: "gov.uk: Self-employed National Insurance rates",
          url: "https://www.gov.uk/self-employed-national-insurance-rates",
        },
        {
          label: "gov.uk: Business records if you're self-employed — what records to keep",
          url: "https://www.gov.uk/self-employed-records/what-records-to-keep",
        },
        {
          label: "gov.uk: Business records if you're self-employed — how long to keep them",
          url: "https://www.gov.uk/self-employed-records/how-long-to-keep-your-records",
        },
        {
          label: "gov.uk: Working for yourself",
          url: "https://www.gov.uk/working-for-yourself",
        },
      ]}
      faqs={[
        {
          q: "In my first year self-employed, when do I pay tax?",
          a: "You pay on 31 January after the end of the tax year you started in. If you started between 6 April 2025 and 5 April 2026, your first tax is due by 31 January 2027.",
        },
        {
          q: "How do I register as a self-employed sole trader?",
          a: "You register for Self Assessment on gov.uk. You need to do it if you earn more than £1,000 from self-employment in a tax year, by 5 October after the end of that tax year.",
        },
        {
          q: "Do I need to register for self employment if I earn under £1,000?",
          a: "Usually not, because of the £1,000 trading allowance. You may still need to register if you have to send a tax return for another reason, so check on gov.uk.",
        },
        {
          q: "How long does it take to get a UTR?",
          a: "HMRC says you will usually get your Unique Taxpayer Reference by post around 15 days after you register. It takes longer if you live abroad.",
        },
        {
          q: "Why is my first self-employed tax bill so high?",
          a: "Your first 31 January bill can include a whole year of tax plus a first payment on account towards the next year, which is half as much again. This applies if your bill is £1,000 or more and less than 80% of your tax was paid at source.",
        },
        {
          q: "Can I be employed and self-employed at the same time?",
          a: "Yes. You can work for an employer and run your own business too. Your job is taxed through PAYE, and your business profit goes on your Self Assessment tax return.",
        },
      ]}
    >
      <p>
        If this is your first year self-employed, the question most people
        ask is &quot;when do I pay tax?&quot; The short answer: not until 31
        January after the tax year you started in ends. That gap can be well
        over a year, which is why the first bill catches so many people out.
      </p>

      <h2>When do I pay tax in my first year self-employed?</h2>
      <p>
        The UK tax year runs from 6 April to 5 April. Your deadlines depend on
        which tax year you started trading in.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>What</th>
              <th>Started 6 April 2025 – 5 April 2026</th>
              <th>Started 6 April 2026 – 5 April 2027</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Register for Self Assessment</td>
              <td>By 5 October 2026</td>
              <td>By 5 October 2027</td>
            </tr>
            <tr>
              <td>File your first return online</td>
              <td>By 31 January 2027</td>
              <td>By 31 January 2028</td>
            </tr>
            <tr>
              <td>Pay your first tax bill</td>
              <td>By 31 January 2027</td>
              <td>By 31 January 2028</td>
            </tr>
            <tr>
              <td>Second payment on account, if you have one</td>
              <td>By 31 July 2027</td>
              <td>By 31 July 2028</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        You can file and pay any time before the deadline. Filing early
        doesn&apos;t mean paying early, but it tells you the bill sooner. For
        the penalties if you&apos;re late, see the{" "}
        <Link href="/guides/self-assessment-deadline">Self Assessment deadline guide</Link>.
      </p>

      <h2>How to register as a self-employed sole trader</h2>
      <p>
        You need to register for Self Assessment as a sole trader if you earn
        more than £1,000 from self-employment in a tax year. That figure is
        your income before expenses, not your profit. You can register earlier
        if you want to.
      </p>
      <ol>
        <li>Check you are trading, for example selling regularly to make a profit.</li>
        <li>
          Register for Self Assessment on{" "}
          <a href="https://www.gov.uk/register-for-self-assessment" target="_blank" rel="noopener">
            gov.uk
          </a>
          . The deadline is 5 October after the end of the tax year you started
          in. Register after that and you could get a penalty.
        </li>
        <li>Wait for your UTR to arrive by post.</li>
        <li>Start keeping records straight away (see below).</li>
      </ol>
      <p>
        You can register for self employment and keep a job. Plenty of people
        work for an employer in the day and run their own business in the
        evenings.
      </p>
      <h3>Your UTR</h3>
      <p>
        Your Unique Taxpayer Reference (UTR) is a 10-digit number that HMRC
        gives you when you sign up for Self Assessment. It usually arrives by
        post around 15 days after you register, longer if you live abroad.
        Keep it safe: you need it to file your return. You can also find it in
        your Personal Tax Account or the HMRC app.
      </p>

      <h2>Why your first 31 January bill can be bigger than you expect</h2>
      <p>
        Once you&apos;re in Self Assessment, HMRC usually asks you to pay
        towards next year&apos;s tax in advance. These are{" "}
        <strong>payments on account</strong>. Each one is half of last
        year&apos;s bill, due on 31 January and 31 July. They cover income tax
        and Class 4 National Insurance.
      </p>
      <p>
        You don&apos;t have to make them if last year&apos;s Self Assessment
        bill was under £1,000, or if more than 80% of your tax was already
        paid another way, such as through PAYE.
      </p>
      <h3>A worked example</h3>
      <p>
        Say you started in 2025/26 and your tax and Class 4 National Insurance
        for that year come to <strong>£3,000</strong>. You have made no
        payments on account before, because this is your first return.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>What you pay</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>31 January 2027</td>
              <td>The whole 2025/26 bill, plus a first payment on account for 2026/27 (half of £3,000)</td>
              <td>£3,000 + £1,500 = £4,500</td>
            </tr>
            <tr>
              <td>31 July 2027</td>
              <td>Second payment on account for 2026/27</td>
              <td>£1,500</td>
            </tr>
            <tr>
              <td>31 January 2028</td>
              <td>
                Any balance for 2026/27 if your bill was more than £3,000, plus
                your first payment on account for 2027/28
              </td>
              <td>Depends on your profit</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="callout">
        So a £3,000 tax bill means paying £4,500 in your first January. From
        then on the payments even out, but that first one is a lot to find if
        you haven&apos;t put money aside.
      </p>
      <p>
        If you expect your profit to fall, you can ask HMRC to reduce your
        payments on account, online or with form SA303. If you reduce them too
        far, you pay interest on the difference.
      </p>

      <h2>How much to set aside</h2>
      <p>
        In 2026/27 the first £12,570 of your income is usually tax-free (your
        Personal Allowance). In England, Wales and Northern Ireland you then
        pay 20% income tax up to £50,270. Scotland has different bands. On top,
        you pay Class 4 National Insurance of 6% on profits between £12,570
        and £50,270.
      </p>
      <p>
        So for a basic-rate taxpayer, roughly 26p of every pound of profit
        above £12,570 goes in tax and National Insurance. If you also have a
        job, your salary has probably used up your Personal Allowance, so
        income tax starts from your first pound of profit. In your first year,
        aim to put aside enough for the payment on account too. The{" "}
        <Link href="/tools/self-employed-tax-calculator">self-employed tax calculator</Link>{" "}
        shows what to put aside for your own profit.
      </p>

      <h2>Records to keep from day one</h2>
      <p>HMRC says you must keep records of:</p>
      <ul>
        <li>all sales and income</li>
        <li>all business expenses</li>
        <li>VAT records, if you register for VAT</li>
        <li>PAYE records, if you employ people</li>
        <li>your personal income</li>
      </ul>
      <p>
        Keep the proof too: receipts, bank statements and sales invoices. You
        must keep records for at least 5 years after the 31 January deadline
        for that tax year. Every allowable expense lowers your profit, so it
        pays to know{" "}
        <Link href="/guides/sole-trader-allowable-expenses">what a sole trader can claim</Link>{" "}
        before you start spending.
      </p>

      <h2>How Sorted helps</h2>
      <p>
        Snap a receipt and Sorted reads the shop, date, amount and category,
        so your records build up from the first week. It keeps a live
        estimate of your tax, including payments on account, so the first
        January bill isn&apos;t a surprise. Sorted doesn&apos;t file your
        return: you or your accountant still do that with HMRC.
      </p>
    </GuideLayout>
  );
}
