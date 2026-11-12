import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";

const path = "/guides/side-hustle-tax";
const title = "Side hustle tax in the UK and the £1,000 trading allowance";
const intro =
  "Selling on Vinted or eBay, doing odd jobs, or running a small business next to your job. Here is when HMRC needs to know, how the £1,000 trading allowance works, and what platform reporting really means.";

export const metadata: Metadata = {
  title: "Side hustle tax UK: the £1,000 trading allowance — Sorted",
  description:
    "Side hustle tax in the UK explained: when to tell HMRC, how the £1,000 trading allowance works with a job, Vinted and eBay sales, and platform reporting.",
  alternates: { canonical: path },
  openGraph: { title, description: intro, url: path, type: "article" },
};

export default function SideHustleTaxPage() {
  return (
    <GuideLayout
      path={path}
      title={title}
      intro={intro}
      sources={[
        {
          label: "gov.uk: Tax-free allowances on property and trading income",
          url: "https://www.gov.uk/guidance/tax-free-allowances-on-property-and-trading-income",
        },
        {
          label: "gov.uk: Set up as a sole trader",
          url: "https://www.gov.uk/set-up-sole-trader",
        },
        {
          label: "gov.uk: Working for yourself",
          url: "https://www.gov.uk/working-for-yourself",
        },
        {
          label: "gov.uk: Check if you need to tell HMRC about your income from online platforms",
          url: "https://www.gov.uk/guidance/check-if-you-need-to-tell-hmrc-about-your-income-from-online-platforms",
        },
        {
          label: "gov.uk: Selling online and paying taxes — information sheet",
          url: "https://www.gov.uk/government/publications/selling-online-and-paying-taxes/selling-online-and-paying-taxes-information-sheet",
        },
        {
          label: "gov.uk: Selling goods or services on a digital platform",
          url: "https://www.gov.uk/guidance/selling-goods-or-services-on-a-digital-platform",
        },
        {
          label: "gov.uk: Check if you need to register as a digital platform operator",
          url: "https://www.gov.uk/guidance/reporting-rules-for-digital-platforms",
        },
        {
          label: "gov.uk: No tax changes for online sellers (HMRC, December 2024)",
          url: "https://www.gov.uk/government/news/no-tax-changes-for-online-sellers",
        },
      ]}
      faqs={[
        {
          q: "Do I pay tax on a side hustle in the UK?",
          a: "You need to tell HMRC if your side hustle is trading and your income from it is more than £1,000 in a tax year. At £1,000 or less, the trading allowance usually means no tax and no need to tell HMRC.",
        },
        {
          q: "How does the HMRC trading allowance work?",
          a: "Up to £1,000 a year of trading income is tax-free. If you earn more, you can take £1,000 off your income instead of claiming your real expenses, but not both.",
        },
        {
          q: "Do I have to pay tax on Vinted sales?",
          a: "Not if you're just selling your own unwanted things; HMRC says there is no tax due in that case. If you buy or make things to sell for a profit, that is likely to be trading.",
        },
        {
          q: "Does eBay report sellers to HMRC in the UK?",
          a: "Yes. Since 1 January 2024, platforms like eBay collect sellers' details and report them to HMRC if they sell 30 or more items, or more than about £1,700, in a calendar year. Being reported doesn't automatically mean you owe tax.",
        },
        {
          q: "Can I use the trading allowance if I have a full-time job?",
          a: "Yes. Having a job doesn't stop you using the £1,000 trading allowance on your side income. You can't use it on income you get from your own employer.",
        },
      ]}
    >
      <p>
        Side hustle tax in the UK comes down to two questions: is what
        you&apos;re doing trading, and did you earn more than £1,000 from it
        in the tax year? If the answer to either is no, you usually have
        nothing to pay and nothing to tell HMRC. If both are yes, you need to
        register for Self Assessment.
      </p>

      <h2>When does a side hustle need reporting to HMRC?</h2>
      <p>
        You need to register for Self Assessment if your trading income is
        more than £1,000 in a tax year (6 April to 5 April). That is your
        income before expenses, not your profit. The deadline is 5 October
        after the end of the tax year. So if you went over £1,000 between 6
        April 2026 and 5 April 2027, you would need to register by 5 October
        2027.
      </p>
      <p>
        If your income from all your side hustles added together is £1,000
        or less, you don&apos;t need to tell HMRC, unless you have to send a
        tax return for another reason. You must still keep records.
      </p>
      <p>
        Selling goods, offering services and making online content all count
        towards the same £1,000. Three small side hustles of £600 each make
        £1,800, which is over the limit.
      </p>

      <h2>How the £1,000 trading allowance works</h2>
      <p>
        The trading allowance makes <mark>the first £1,000 of trading income
        tax-free</mark>. Above that, you choose one of two ways to work out your
        taxable profit:
      </p>
      <ul>
        <li>take £1,000 off your income (the allowance), or</li>
        <li>take off your real business expenses.</li>
      </ul>
      <p>You can&apos;t do both, so pick whichever is bigger.</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Income</th>
              <th>Real expenses</th>
              <th>Better choice</th>
              <th>Taxable profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>£3,000</td>
              <td>£400</td>
              <td>Trading allowance</td>
              <td>£3,000 − £1,000 = £2,000</td>
            </tr>
            <tr>
              <td>£3,000</td>
              <td>£1,500</td>
              <td>Real expenses</td>
              <td>£3,000 − £1,500 = £1,500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        You can&apos;t use the allowance on income from your own employer (or
        your spouse&apos;s or civil partner&apos;s employer), from a company
        you or someone connected to you controls, or from a partnership. If
        your costs are high, see{" "}
        <Link href="/guides/sole-trader-allowable-expenses">what expenses you can claim</Link>.
      </p>

      <h2>Tax on a side hustle alongside a job</h2>
      <p>
        You can be employed and run a business at the same time. Your job
        stays on PAYE, and your side income goes on a Self Assessment tax
        return. Having a job doesn&apos;t stop you using the trading
        allowance.
      </p>
      <p>
        What the job does change is your tax rate. Your salary usually uses
        up your £12,570 Personal Allowance first, so your side hustle profit
        is taxed at your normal rate, often 20%. The rules depend on your
        circumstances, so check with HMRC or an accountant if you&apos;re not
        sure. Our guide to{" "}
        <Link href="/guides/first-year-self-employed">your first year self-employed</Link>{" "}
        covers registering and when the first bill is due.
      </p>

      <h2>Vinted and eBay: selling your own things vs trading</h2>
      <p>
        HMRC says that if you&apos;re not trading and just occasionally sell
        unwanted items online, there is no tax due. Clearing out your
        wardrobe on Vinted or selling the contents of your loft on eBay is
        not a side hustle in tax terms.
      </p>
      <p>It is likely to be trading if you:</p>
      <ul>
        <li>buy things to sell on for a profit</li>
        <li>make things to sell, including hobby items</li>
        <li>sell regularly to make a profit</li>
      </ul>
      <p>
        One thing to watch: if you sell a single personal item, or a set of
        items, for more than £6,000, you may need to pay Capital Gains Tax.
        If you&apos;re not sure whether you&apos;re trading, HMRC suggests
        contacting them for advice.
      </p>

      <h2>Online platforms now report sellers to HMRC</h2>
      <p>
        Since 1 January 2024, online platforms like eBay and Vinted have had
        to collect details about their sellers, including name, address, date
        of birth and tax identification number, and report sellers&apos;
        income to HMRC. The first reports, covering 2024, went to HMRC by 31
        January 2025.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>If you sell goods and, in a calendar year, you make</th>
              <th>Reported to HMRC?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fewer than 30 sales, totalling about £1,700 (€2,000) or less</td>
              <td>No</td>
            </tr>
            <tr>
              <td>30 or more sales, or more than about £1,700</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        That exception only covers selling goods. If you sell services, or
        rent out a vehicle or property through a platform, you can be
        reported whatever the amount. The platform has to give you a copy of
        what it reported.
      </p>
      <p className="callout">
        Being reported doesn&apos;t mean you owe tax. HMRC says a platform
        reporting your details does not automatically mean you owe tax or
        need to fill in a return. The tax rules haven&apos;t changed: what
        matters is still whether you&apos;re trading and whether you&apos;re
        over £1,000.
      </p>
      <p>
        Platform reports run on the calendar year (1 January to 31 December),
        but tax runs from 6 April to 5 April. To check whether you&apos;re
        over £1,000, add up your income for the tax year, not the figure on
        the platform report.
      </p>

      <h2>How Sorted helps</h2>
      <p>
        If your side hustle has become a business, Sorted keeps the records:
        snap a receipt and it reads the shop, date, amount and category, and
        it keeps a live estimate of your tax as income comes in. The free
        plan includes 30 receipts and 3 invoices a month. Sorted
        doesn&apos;t file your return with HMRC; you or your accountant still
        do that.
      </p>
    </GuideLayout>
  );
}
