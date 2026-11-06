import type { MetadataRoute } from "next";
import { SITE_URL } from "./guides/guides";

// Cloudflare adds its own AI-crawler rules in front of this file; this part
// lets search engines in and tells them where the sitemap is.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/payment/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
