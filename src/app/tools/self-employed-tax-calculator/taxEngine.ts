// Self-employed income tax + Class 4 National Insurance on trading profit.
// A trimmed copy of the Sorted app's engine (utils/taxCalculator.ts and
// constants/taxRates.ts): same rates, same rounding, no PAYE / CIS /
// student loan inputs.
//
// Sources, checked 6 Nov 2026:
//   gov.uk/government/publications/rates-and-allowances-income-tax/income-tax-rates-and-allowances-current-and-past
//   gov.uk/self-employed-national-insurance-rates
//   gov.uk/understand-self-assessment-bill/payments-on-account

export type TaxYear = "2026/27" | "2025/26";
export type Region = "england" | "scotland";

type Band = { name: string; upTo: number; rate: number }; // upTo = top of band, £ above the allowance

const PERSONAL_ALLOWANCE = 12570;
const TAPER_THRESHOLD = 100000;
const CLASS4_LOWER = 12570;
const CLASS4_UPPER = 50270;
const CLASS4_MAIN = 0.06;
const CLASS4_ADDITIONAL = 0.02;

const ENGLAND: Band[] = [
  { name: "Basic rate 20%", upTo: 37700, rate: 0.2 },
  { name: "Higher rate 40%", upTo: 125140, rate: 0.4 },
  { name: "Additional rate 45%", upTo: Infinity, rate: 0.45 },
];

function scotland(starterTop: number, basicTop: number): Band[] {
  return [
    { name: "Starter rate 19%", upTo: starterTop, rate: 0.19 },
    { name: "Basic rate 20%", upTo: basicTop, rate: 0.2 },
    { name: "Intermediate rate 21%", upTo: 31092, rate: 0.21 },
    { name: "Higher rate 42%", upTo: 62430, rate: 0.42 },
    { name: "Advanced rate 45%", upTo: 125140, rate: 0.45 },
    { name: "Top rate 48%", upTo: Infinity, rate: 0.48 },
  ];
}

const BANDS: Record<TaxYear, Record<Region, Band[]>> = {
  "2026/27": { england: ENGLAND, scotland: scotland(3967, 16956) },
  "2025/26": { england: ENGLAND, scotland: scotland(2827, 14921) },
};

export type TaxResult = {
  profit: number;
  personalAllowance: number;
  incomeTax: number;
  bands: { name: string; amount: number; tax: number }[];
  class4: number;
  total: number;
  /** Total as a share of profit, 0–1. */
  effectiveRate: number;
  /** Payments on account due if this is the whole bill (none under £1,000). */
  paymentOnAccount: number;
};

const round2 = (n: number) => Math.round(n * 100) / 100;

export function calculateSelfEmployedTax(
  taxYear: TaxYear,
  region: Region,
  income: number,
  expenses: number,
): TaxResult {
  const clean = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);
  const profit = Math.max(0, clean(income) - clean(expenses));

  // Personal allowance goes down £1 for every £2 over £100,000.
  const personalAllowance =
    profit <= TAPER_THRESHOLD
      ? PERSONAL_ALLOWANCE
      : Math.max(0, PERSONAL_ALLOWANCE - Math.floor((profit - TAPER_THRESHOLD) / 2));

  let remaining = Math.max(0, profit - personalAllowance);
  let lower = 0;
  let incomeTax = 0;
  const bands: TaxResult["bands"] = [];
  for (const band of BANDS[taxYear][region]) {
    if (remaining <= 0) break;
    const amount = Math.min(remaining, band.upTo - lower);
    const tax = round2(amount * band.rate);
    bands.push({ name: band.name, amount, tax });
    incomeTax += tax;
    remaining -= amount;
    lower = band.upTo;
  }

  let class4 = 0;
  if (profit > CLASS4_LOWER) {
    class4 += (Math.min(profit, CLASS4_UPPER) - CLASS4_LOWER) * CLASS4_MAIN;
    if (profit > CLASS4_UPPER) class4 += (profit - CLASS4_UPPER) * CLASS4_ADDITIONAL;
  }
  class4 = round2(class4);
  incomeTax = round2(incomeTax);
  const total = round2(incomeTax + class4);

  return {
    profit,
    personalAllowance,
    incomeTax,
    bands,
    class4,
    total,
    effectiveRate: profit > 0 ? total / profit : 0,
    paymentOnAccount: total >= 1000 ? round2(total / 2) : 0,
  };
}
