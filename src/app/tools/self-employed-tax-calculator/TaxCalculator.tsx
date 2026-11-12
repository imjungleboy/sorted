"use client";

import { useState } from "react";
import { calculateSelfEmployedTax, type Region, type TaxYear } from "./taxEngine";
import NumberSlider from "../../components/tools/NumberSlider";
import AnimatedNumber from "../../components/tools/AnimatedNumber";

const gbp = (n: number) =>
  n.toLocaleString("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 2 });

const toNumber = (s: string) => Number(s.replace(/,/g, ""));

export default function TaxCalculator() {
  const [taxYear, setTaxYear] = useState<TaxYear>("2026/27");
  const [region, setRegion] = useState<Region>("england");
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");

  const r = calculateSelfEmployedTax(taxYear, region, toNumber(income), toNumber(expenses));

  const field =
    "w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-teal/40";
  const label = "block text-sm font-semibold text-forest mb-2";

  return (
    <div className="rounded-2xl bg-white border border-forest/5 shadow-sm p-6 md:p-8 mb-10">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className={label}>Tax year</span>
          <select className={field} value={taxYear} onChange={(e) => setTaxYear(e.target.value as TaxYear)}>
            <option value="2026/27">2026/27 (6 April 2026 to 5 April 2027)</option>
            <option value="2025/26">2025/26 (return due 31 January 2027)</option>
          </select>
        </label>
        <label className="block">
          <span className={label}>Where you live</span>
          <select className={field} value={region} onChange={(e) => setRegion(e.target.value as Region)}>
            <option value="england">England, Wales or Northern Ireland</option>
            <option value="scotland">Scotland</option>
          </select>
        </label>
        <NumberSlider
          label="Self-employed income for the year (£)"
          text={income}
          onText={setIncome}
          max={150000}
          step={500}
          nudge={500}
          prefix="£"
          placeholder="e.g. 35,000"
        />
        <NumberSlider
          label="Allowable expenses (£)"
          text={expenses}
          onText={setExpenses}
          max={50000}
          step={100}
          nudge={100}
          prefix="£"
          placeholder="e.g. 5,000"
        />
      </div>
      <p className="mt-3 text-sm text-smoke">
        For people whose only income is self-employment. A job, pension, rental
        income, student loan or CIS deductions change the answer.
      </p>

      <div className="mt-6 rounded-xl bg-mint/60 p-5" aria-live="polite">
        <p className="text-sm text-forest font-semibold">Estimated tax and National Insurance</p>
        <p className="font-[family-name:var(--font-nunito)] text-4xl font-bold text-forest mt-1">
          <AnimatedNumber value={r.total} format={gbp} />
        </p>
        {r.profit > 0 && (
          <p className="text-sm text-charcoal/70 mt-1">
            {Math.round(r.effectiveRate * 100)}% of your {gbp(r.profit)} profit
          </p>
        )}
        <dl className="mt-4 grid gap-1 text-sm text-charcoal/80">
          <div className="flex justify-between gap-4">
            <dt>Profit (income minus expenses)</dt>
            <dd>{gbp(r.profit)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Personal Allowance (tax-free)</dt>
            <dd>{gbp(r.personalAllowance)}</dd>
          </div>
          {r.bands.map((b) => (
            <div key={b.name} className="flex justify-between gap-4">
              <dt>
                {b.name} on {gbp(b.amount)}
              </dt>
              <dd>{gbp(b.tax)}</dd>
            </div>
          ))}
          <div className="flex justify-between gap-4">
            <dt>Class 4 National Insurance</dt>
            <dd>{gbp(r.class4)}</dd>
          </div>
        </dl>
        {r.paymentOnAccount > 0 && (
          <p className="mt-4 text-sm text-charcoal/80">
            Because the bill is £1,000 or more, HMRC will usually also ask for
            payments on account towards next year: {gbp(r.paymentOnAccount)} on
            31 January and again on 31 July. In your first year that can make
            the 31 January payment {gbp(r.total + r.paymentOnAccount)}.
          </p>
        )}
        {r.total > 0 && (
          <p className="mt-3 text-sm text-charcoal/80">
            Spread over 12 months, that&apos;s about {gbp(r.total / 12)} a month
            to put aside.
          </p>
        )}
      </div>
    </div>
  );
}
