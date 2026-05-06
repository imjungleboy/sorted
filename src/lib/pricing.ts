const APP_ID = "6761042935";
const COUNTRY = "gb";

export type Pricing = {
  monthlyPrice: string;
  trialDays: number;
  appStoreUrl: string;
  source: "live" | "fallback";
};

const FALLBACK: Pricing = {
  monthlyPrice: "£4.99",
  trialDays: 30,
  appStoreUrl: `https://apps.apple.com/app/id${APP_ID}`,
  source: "fallback",
};

export async function getPricing(): Promise<Pricing> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/lookup?id=${APP_ID}&country=${COUNTRY}`,
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) return FALLBACK;
    const data: { results?: { description?: string; trackViewUrl?: string }[] } =
      await res.json();
    const result = data.results?.[0];
    if (!result?.description) return FALLBACK;

    const desc = result.description;
    const priceMatch = desc.match(/(£\d+(?:\.\d{2})?)\s*\/\s*month/i);
    const trialMatch = desc.match(/(\d+)[\s-]?day(?:s)?\s+free\s+trial/i);

    if (!priceMatch) return FALLBACK;

    return {
      monthlyPrice: priceMatch[1],
      trialDays: trialMatch ? parseInt(trialMatch[1], 10) : FALLBACK.trialDays,
      appStoreUrl: result.trackViewUrl ?? FALLBACK.appStoreUrl,
      source: "live",
    };
  } catch {
    return FALLBACK;
  }
}
