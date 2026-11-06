"use client";

import { useState } from "react";

// HMRC simplified expenses for the self-employed.
// Source: gov.uk/simpler-income-tax-simplified-expenses/vehicles
// Cars and vans: 55p a mile for the first 10,000 business miles from 2026/27
// (45p before 6 April 2026), then 25p. Motorcycles: 24p flat.
// Matches utils/mileageEngine.ts in the Sorted app.

type TaxYear = "2026/27" | "2025/26";
type Vehicle = "car" | "motorcycle";

const CAR_FIRST_BAND_MILES = 10000;
const CAR_FIRST_BAND_PENCE: Record<TaxYear, number> = { "2026/27": 55, "2025/26": 45 };
const CAR_SECOND_BAND_PENCE = 25;
const MOTORCYCLE_PENCE = 24;

export type MileageClaim = {
  lines: { miles: number; pence: number }[];
  totalPounds: number;
};

export function calculateClaim(taxYear: TaxYear, vehicle: Vehicle, miles: number): MileageClaim {
  const safeMiles = Number.isFinite(miles) && miles > 0 ? Math.floor(miles) : 0;
  const lines =
    vehicle === "motorcycle"
      ? [{ miles: safeMiles, pence: MOTORCYCLE_PENCE }]
      : [
          { miles: Math.min(safeMiles, CAR_FIRST_BAND_MILES), pence: CAR_FIRST_BAND_PENCE[taxYear] },
          { miles: Math.max(0, safeMiles - CAR_FIRST_BAND_MILES), pence: CAR_SECOND_BAND_PENCE },
        ].filter((l) => l.miles > 0);
  const totalPence = lines.reduce((sum, l) => sum + l.miles * l.pence, 0);
  return { lines, totalPounds: totalPence / 100 };
}

const gbp = (n: number) =>
  n.toLocaleString("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 2 });

export default function MileageCalculator() {
  const [taxYear, setTaxYear] = useState<TaxYear>("2026/27");
  const [vehicle, setVehicle] = useState<Vehicle>("car");
  const [milesText, setMilesText] = useState("");

  const miles = Number(milesText.replace(/,/g, ""));
  const claim = calculateClaim(taxYear, vehicle, miles);

  const field =
    "w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-teal/40";

  return (
    <div className="rounded-2xl bg-white border border-forest/5 shadow-sm p-6 md:p-8 mb-10">
      <div className="grid gap-5 md:grid-cols-3">
        <label className="block">
          <span className="block text-sm font-semibold text-forest mb-2">Tax year</span>
          <select
            className={field}
            value={taxYear}
            onChange={(e) => setTaxYear(e.target.value as TaxYear)}
          >
            <option value="2026/27">2026/27 (from 6 April 2026)</option>
            <option value="2025/26">2025/26</option>
          </select>
        </label>
        <label className="block">
          <span className="block text-sm font-semibold text-forest mb-2">Vehicle</span>
          <select
            className={field}
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value as Vehicle)}
          >
            <option value="car">Car or van</option>
            <option value="motorcycle">Motorcycle</option>
          </select>
        </label>
        <label className="block">
          <span className="block text-sm font-semibold text-forest mb-2">Business miles</span>
          <input
            className={field}
            inputMode="numeric"
            placeholder="e.g. 6,500"
            value={milesText}
            onChange={(e) => setMilesText(e.target.value.replace(/[^\d,]/g, ""))}
            aria-describedby="miles-help"
          />
        </label>
      </div>
      <p id="miles-help" className="mt-3 text-sm text-smoke">
        Business miles only, for the whole tax year (6 April to 5 April). For
        cars and vans, add all your cars and vans together.
      </p>

      <div className="mt-6 rounded-xl bg-mint/60 p-5" aria-live="polite">
        <p className="text-sm text-forest font-semibold">Your mileage claim</p>
        <p className="font-[family-name:var(--font-nunito)] text-4xl font-bold text-forest mt-1">
          {gbp(claim.totalPounds)}
        </p>
        {claim.lines.length > 0 && (
          <ul className="mt-2 text-sm text-charcoal/80">
            {claim.lines.map((l) => (
              <li key={l.pence}>
                {l.miles.toLocaleString("en-GB")} miles × {l.pence}p ={" "}
                {gbp((l.miles * l.pence) / 100)}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-3 text-xs text-charcoal/60">
          This is the amount you take off your profit, not the tax you save.
        </p>
      </div>
    </div>
  );
}
