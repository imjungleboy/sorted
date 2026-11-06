import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";
import MileageCalculator from "./MileageCalculator";

const path = "/tools/mileage-allowance-calculator";
const title = "Mileage allowance calculator for the self-employed";
const intro =
  "Enter your business miles and get your claim at HMRC's flat rates: 55p a mile for cars and vans in 2026/27, 45p for 2025/26.";

export const metadata: Metadata = {
  title: "Mileage allowance calculator 2026/27 (55p a mile) for sole traders — Sorted",
  description:
    "Free UK mileage allowance calculator for self-employed sole traders. HMRC simplified expenses: 55p a mile for the first 10,000 miles in 2026/27 (45p in 2025/26), then 25p. Motorcycles 24p.",
  alternates: { canonical: path },
  openGraph: { title, description: intro, url: path, type: "website" },
};

export default function MileageCalculatorPage() {
  return (
    <GuideLayout
      path={path}
      title={title}
      intro={intro}
      sources={[
        {
          label: "gov.uk: Simplified expenses — vehicles",
          url: "https://www.gov.uk/simpler-income-tax-simplified-expenses/vehicles",
        },
        {
          label: "gov.uk: Travel expenses if you're self-employed",
          url: "https://www.gov.uk/expenses-if-youre-self-employed/travel",
        },
      ]}
    >
      <MileageCalculator />

      <h2>HMRC mileage rates for the self-employed</h2>
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
        Bicycles aren&apos;t covered by these flat rates: claim the real costs
        instead.
      </p>

      <h2>How the mileage allowance works</h2>
      <ul>
        <li>
          The flat rate covers fuel, insurance, repairs and servicing, so you
          don&apos;t claim those separately for the same vehicle.
        </li>
        <li>You can still claim parking and train or bus fares on top.</li>
        <li>
          Once you use the flat rate for a vehicle, you keep using it for as
          long as that vehicle is used in your business.
        </li>
        <li>
          You can&apos;t use it for a vehicle you have already claimed capital
          allowances on.
        </li>
        <li>Only business journeys count. Travel between home and work doesn&apos;t.</li>
      </ul>

      <h2>Keep a mileage log</h2>
      <p>
        HMRC can ask how you got your number. Record the date, where you went,
        why, and the miles for every business trip. Sorted can log trips with
        GPS as you drive, applies the right rate for each tax year, and exports
        the log for your accountant.
      </p>
      <p>
        Mileage is one of many{" "}
        <Link href="/guides/sole-trader-allowable-expenses">
          expenses a sole trader can claim
        </Link>
        .
      </p>
    </GuideLayout>
  );
}
