"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const phones = [
  {
    src: "/images/app-receipt-scan.webp",
    alt: "Sorted ‘Add Receipt’ screen on iPhone, with options to pick a photo from library, use the camera, or enter a receipt manually.",
    label: "Scan receipts",
  },
  {
    src: "/images/app-dashboard.webp",
    alt: "Sorted home dashboard on iPhone, showing an estimated self-employment tax of £4,209.18, quick actions for Scan, Invoice, Income, Mileage and P&L, and an income-by-source breakdown.",
    label: "Dashboard",
  },
  {
    src: "/images/app-email-receipts.webp",
    alt: "Sorted settings screen on iPhone, showing the user’s unique mysorted.app email alias for forwarding online receipts.",
    label: "Email receipts in",
  },
  {
    src: "/images/app-pl-report.webp",
    alt: "Sorted P&L Report screen on iPhone, with tax-year selector, income, expenses, net profit and an estimated tax owed of £4,209.18, plus a Generate PDF Report button.",
    label: "P&L report",
  },
  {
    src: "/images/app-accountant-pack.webp",
    alt: "Sorted settings screen on iPhone, showing Generate P&L Report, Tax Summary Report, Export All Data and a Share with Accountant option.",
    label: "Accountant pack",
  },
  {
    src: "/images/app-vault.webp",
    alt: "Sorted Vault screen on iPhone, showing total expenses of £148.80, tax saved of £29.76, and a list of categorised receipts from Tesco, Boots and Costa Coffee.",
    label: "Vault",
  },
];

function PhoneMockup({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#1a1a1a] rounded-[2.5rem] p-[6px] shadow-2xl ${className}`}
    >
      <div className="rounded-[2.2rem] overflow-hidden bg-white">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={1245}
          loading="lazy"
          className="block w-full h-auto"
        />
      </div>
    </div>
  );
}

export default function PhoneCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const center = el.scrollLeft + el.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(center - childCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIdx(closest);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    if (first) {
      el.scrollLeft =
        first.offsetLeft - el.offsetWidth / 2 + first.offsetWidth / 2;
    }
  }, []);

  return (
    <div>
      {/* Horizontal scroll carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-5 md:gap-8 overflow-x-auto snap-x snap-mandatory px-8 md:px-16 pb-4 no-scrollbar"
      >
        {phones.map((p) => (
          <figure
            key={p.label}
            className="snap-center flex-shrink-0 w-[240px] md:w-[260px]"
          >
            <PhoneMockup src={p.src} alt={p.alt} className="w-full" />
            <figcaption className="mt-4 text-center text-sm font-medium text-smoke">
              {p.label}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {phones.map((p, i) => (
          <span
            key={p.label}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === activeIdx ? "bg-teal" : "bg-smoke/30"
            }`}
          />
        ))}
      </div>

      {/* Swipe hint */}
      <p className="text-center text-sm text-smoke mt-2 flex items-center justify-center gap-1">
        Swipe to explore
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </p>

      {/* Platform note */}
      <p className="text-center text-sm text-smoke mt-6 flex items-center justify-center gap-2">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
        </svg>
        Works on iPhone and Android
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-2.21-1.2-4.15-2.97-5.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
        </svg>
      </p>
    </div>
  );
}
