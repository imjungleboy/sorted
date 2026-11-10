import type { Metadata } from "next";
import { Nunito, Inter, Anton, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

// Display face for the big words, mono for the bracket labels, and the
// handwriting on the pricing receipt.
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "700",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Worded for what people search (docs/seo/keyword-map.csv): "bookkeeping
// app", "receipt scanner app", "self employed tax", "mileage".
const description =
  "Bookkeeping app for UK sole traders: scan receipts, send invoices, track mileage at HMRC rates and see your self-employed tax as you go. Free to start.";

export const metadata: Metadata = {
  // Link previews (opengraph-image.png) need absolute URLs.
  metadataBase: new URL("https://mysorted.app"),
  title: "Sorted — receipt scanner and bookkeeping app for sole traders",
  description,
  openGraph: {
    title: "Sorted — bookkeeping app for UK sole traders",
    description,
    url: "https://mysorted.app",
    siteName: "Sorted",
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable} ${anton.variable} ${jetbrains.variable} ${caveat.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Page views and referrers; Analytics must also be on in the Vercel dashboard */}
        <Analytics />
      </body>
    </html>
  );
}
