"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Download", href: "#download" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cloud/90 backdrop-blur-md border-b border-forest/10">
      <div className="max-w-6xl mx-auto px-5 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/hedgie-icon.png"
            alt="Sorted mascot"
            width={72}
            height={72}
            className="rounded-full w-[72px] h-[72px]"
          />
          <span className="font-[family-name:var(--font-nunito)] text-xl font-extrabold text-forest">
            Sorted
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-charcoal cursor-pointer hover:text-teal transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            className="inline-flex items-center cursor-pointer rounded-xl bg-amber px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-amber/25 hover:bg-amber/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Get Sorted
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cloud border-t border-forest/10 px-5 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-charcoal hover:text-teal transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-2 block text-center rounded-xl bg-amber px-5 py-2.5 text-sm font-bold text-white"
          >
            Get Sorted
          </a>
        </div>
      )}
    </header>
  );
}
