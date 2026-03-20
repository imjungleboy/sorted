import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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

export const metadata: Metadata = {
  title: "Sorted — The anti-accounting app for UK freelancers",
  description:
    "Scan receipts. Send invoices. Know what you owe. The simplest way for UK self-employed people to track expenses and estimate tax.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <header className="w-full px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
          <Link href="/" className="font-[family-name:var(--font-nunito)] text-2xl font-extrabold text-forest">
            sorted.
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-charcoal/70">
            <Link href="/support" className="hover:text-teal transition-colors">
              Support
            </Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-forest/10 mt-16">
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-charcoal/60">
            <p>&copy; {new Date().getFullYear()} MySorted Ltd</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-teal transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-teal transition-colors">
                Terms of Service
              </Link>
              <Link href="/support" className="hover:text-teal transition-colors">
                Support
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
