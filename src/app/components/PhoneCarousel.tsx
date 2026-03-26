"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const phones = [
  {
    src: "/images/app-settings.png",
    alt: "Sorted app settings screen with profile, subscription plan, email receipts, and Stripe payments",
    label: "Settings",
  },
  {
    src: "/images/app-receipts.png",
    alt: "Sorted app receipts screen showing category filters, total expenses, tax saved, and itemised receipt list",
    label: "Receipts",
  },
  {
    src: "/images/app-dashboard.png",
    alt: "Sorted app dashboard with Hedgie greeting, tax estimate, quick actions, spending breakdown, and next payment deadline",
    label: "Dashboard",
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
      <div className="rounded-[2.2rem] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={260}
          height={520}
          loading="lazy"
          className="w-full h-[440px] md:h-[520px] object-cover object-top"
        />
      </div>
    </div>
  );
}

export default function PhoneCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(1);

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
    // Scroll to center phone (dashboard) on mount
    const centerChild = el.children[1] as HTMLElement;
    if (centerChild) {
      el.scrollLeft =
        centerChild.offsetLeft -
        el.offsetWidth / 2 +
        centerChild.offsetWidth / 2;
    }
  }, []);

  return (
    <div>
      {/* Desktop: three phones with tilt */}
      <div className="hidden md:flex items-end justify-center gap-8">
        <PhoneMockup
          src={phones[0].src}
          alt={phones[0].alt}
          className="w-[240px] -rotate-[4deg]"
        />
        <PhoneMockup
          src={phones[1].src}
          alt={phones[1].alt}
          className="w-[260px] scale-105 z-10"
        />
        <PhoneMockup
          src={phones[2].src}
          alt={phones[2].alt}
          className="w-[240px] rotate-[4deg]"
        />
      </div>

      {/* Desktop captions */}
      <div className="hidden md:flex justify-center gap-8 mt-5">
        {phones.map((p) => (
          <span
            key={p.label}
            className="w-[240px] text-center text-sm font-medium text-smoke"
          >
            {p.label}
          </span>
        ))}
      </div>

      {/* Mobile: horizontal scroll */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="md:hidden flex gap-5 overflow-x-auto snap-x snap-mandatory px-8 pb-4 no-scrollbar"
      >
        {phones.map((p) => (
          <div key={p.label} className="snap-center flex-shrink-0 w-[240px]">
            <PhoneMockup src={p.src} alt={p.alt} className="w-full" />
          </div>
        ))}
      </div>

      {/* Mobile dots */}
      <div className="md:hidden flex justify-center gap-2 mt-4">
        {phones.map((p, i) => (
          <span
            key={p.label}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === activeIdx ? "bg-teal" : "bg-smoke/30"
            }`}
          />
        ))}
      </div>

      {/* Mobile swipe hint */}
      <p className="md:hidden text-center text-sm text-smoke mt-2 flex items-center justify-center gap-1">
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
