import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const description =
  "Scan receipts. Send invoices. Know what you owe. The simplest way for UK self-employed people to track expenses and estimate tax.";

export const metadata: Metadata = {
  // Link previews (opengraph-image.png) need absolute URLs.
  metadataBase: new URL("https://mysorted.app"),
  title: "Sorted — The anti-accounting app for UK freelancers",
  description,
  openGraph: {
    title: "Sorted — bookkeeping for UK sole traders",
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
    <html lang="en" className={`${nunito.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
