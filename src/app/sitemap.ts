import type { MetadataRoute } from "next";
import { guides, LAST_CHECKED, SITE_URL } from "./guides/guides";

// Pages search engines should find. Payment and account-deletion pages are
// left out on purpose: nobody searches for them.
export default function sitemap(): MetadataRoute.Sitemap {
  const guideDate = new Date(LAST_CHECKED);
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/guides`, lastModified: guideDate, changeFrequency: "monthly", priority: 0.8 },
    ...guides.map((g) => ({
      url: `${SITE_URL}${g.href}`,
      lastModified: guideDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/support`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
