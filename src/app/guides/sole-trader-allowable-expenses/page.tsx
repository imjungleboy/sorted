import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";

const path = "/guides/sole-trader-allowable-expenses";
const title = "Sole trader expenses list: what can I claim?";
const intro =
  "Every allowable expense lowers the profit you pay tax on. Here is what HMRC lets you claim, what it doesn't, and the flat rates that save you keeping every bill.";

export const metadata: Metadata = {
  title: "Sole trader expenses list UK: what can I claim? — Sorted",
  description:
    "Sole trader expenses list for the UK: what self-employed people can claim, what they can't, and HMRC's flat rates for mileage and working from home.",
  alternates: { canonical: path },
  openGraph: { title, description: intro, url: path, type: "article" },
};

const categories: { name: string; examples: string }[] = [
  { name: "Office costs", examples: "Stationery, printer ink, phone bills" },
  { name: "Travel", examples: "Fuel, parking, train, bus, taxi and air fares, hotels on business trips" },
  { name: "Clothing", examples: "Uniforms, protective clothing, specialist clothing that isn't everyday wear" },
  { name: "Staff", examples: "Wages, subcontractor payments" },
  { name: "Things you buy to sell", examples: "Stock, raw materials" },
  { name: "Financial costs", examples: "Business insurance, bank charges" },
  { name: "Business premises", examples: "Rent, heating, lighting, business rates" },
  { name: "Advertising and marketing", examples: "Website costs, adverts" },
  { name: "Subscriptions", examples: "Trade or professional journals and bodies" },
  { name: "Training", examples: "Courses that refresh skills you already use in your business" },
];

const faqs = [
  {
    q: "What expenses can I claim as a sole trader?",
    a: "Costs you have only for your business: office costs, business travel, uniforms and protective clothing, staff, stock, insurance and bank charges, business premises, advertising, professional subscriptions and training that refreshes skills you already use.",
  },
  {
    q: "Can I claim my phone bill as self-employed?",
    a: "You can claim the business share. If you use one phone for work and personal calls, work out the proportion used for business and claim that part.",
  },
  {
    q: "Can I claim clothes I wear for work?",
    a: "Only uniforms, protective clothing and specialist clothing that isn't everyday wear. Everyday clothes such as suits, shirts or ordinary shoes can't be claimed, even if you only wear them for work.",
  },
  {
    q: "Should I use the £1,000 trading allowance or claim expenses?",
    a: "Claim expenses if they add up to more than £1,000. Use the trading allowance if your real costs are lower. You can't do both.",
  },
  {
    q: "Do I need to keep receipts for expenses?",
    a: "Yes. Keep records of what you claim for at least 5 years after the 31 January deadline for that tax year. You can keep them on paper or digitally.",
  },
];

export default function AllowableExpensesPage() {
  return (
    <GuideLayout
      path={path}
      title={title}
      intro={intro}
      faqs={faqs}
      sources={[
        {
          label: "gov.uk: Expenses if you're self-employed",
          url: "https://www.gov.uk/expenses-if-youre-self-employed",
        },
        {
          label: "gov.uk: Simplified expenses — vehicles",
          url: "https://www.gov.uk/simpler-income-tax-simplified-expenses/vehicles",
        },
        {
          label: "gov.uk: Simplified expenses — working from home",
          url: "https://www.gov.uk/simpler-income-tax-simplified-expenses/working-from-home",
        },
        {
          label: "gov.uk: Business records if you're self-employed",
          url: "https://www.gov.uk/self-employed-records",
        },
      ]}
    >
      <h2>The rule in one line</h2>
      <p>
        You can claim costs you have{" "}<mark><strong>only for your business</strong></mark>.
        If something is used for business and personal life, like your phone,
        you can only claim the business share.
      </p>

      <h2>What you can claim</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.name}>
                <td>{c.name}</td>
                <td>{c.examples}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What you can&apos;t claim</h2>
      <ul>
        <li>Money you take out of the business for yourself</li>
        <li>Everyday clothes, such as suits, shirts or ordinary shoes, even if you only wear them for work</li>
        <li>Travel between home and work</li>
        <li>Fines and penalty charges, such as parking tickets</li>
        <li>The personal share of anything you also use outside work</li>
      </ul>

      <h2>Flat rates: claim without keeping every bill</h2>
      <p>
        HMRC&apos;s <strong>simplified expenses</strong> let you use a flat
        rate instead of adding up real costs.
      </p>
      <h3>Mileage</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Vehicle</th>
              <th>2026/27</th>
              <th>Before 6 April 2026</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cars and vans, first 10,000 business miles</td>
              <td>55p a mile</td>
              <td>45p a mile</td>
            </tr>
            <tr>
              <td>Cars and vans, after 10,000 miles</td>
              <td>25p a mile</td>
              <td>25p a mile</td>
            </tr>
            <tr>
              <td>Motorcycles</td>
              <td>24p a mile</td>
              <td>24p a mile</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The flat rate replaces fuel, insurance, repairs and servicing for that
        vehicle, but you can still claim parking and train fares on top. Once
        you use flat rates for a vehicle, you keep using them for as long as
        you use it for work. Work out your claim with the{" "}
        <Link href="/tools/mileage-allowance-calculator">mileage allowance calculator</Link>.
      </p>
      <h3>Working from home</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Hours of business use a month</th>
              <th>Flat rate a month</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25 to 50</td>
              <td>£10</td>
            </tr>
            <tr>
              <td>51 to 100</td>
              <td>£18</td>
            </tr>
            <tr>
              <td>101 or more</td>
              <td>£26</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Phone and internet aren&apos;t included: claim the business share of those separately.</p>

      <h2>The £1,000 trading allowance</h2>
      <p>
        If your costs are small, you can take £1,000 off your income instead
        of claiming expenses. You can&apos;t do both, so it only helps when
        your real expenses are under £1,000.
      </p>

      <h2>Keep the receipts</h2>
      <p>
        HMRC can ask to see proof of what you claimed. Keep your records for at
        least 5 years after the 31 January deadline for that tax year. You can
        keep them on paper or digitally.
      </p>
      <p className="callout">
        Sorted reads a receipt photo in seconds, files it under the right
        category and keeps it safe, so your expenses are ready when the{" "}
        <Link href="/guides/self-assessment-deadline">Self Assessment deadline</Link>{" "}
        comes round.
      </p>
    </GuideLayout>
  );
}
