"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  "Merchant name",
  "Amount",
  "Date",
  "Category (auto-detected)",
  "Tax saving (calculated instantly)",
];

export default function ScannerChecklist() {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          items.forEach((_, i) => {
            setTimeout(() => setVisibleCount((c) => c + 1), (i + 1) * 200);
          });
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-2.5 my-6">
      {items.map((item, i) => (
        <div
          key={item}
          className="flex items-center gap-3 transition-all duration-500"
          style={{
            opacity: i < visibleCount ? 1 : 0,
            transform: i < visibleCount ? "translateX(0)" : "translateX(-12px)",
          }}
        >
          <span className="text-gold font-bold text-lg">✓</span>
          <span className="text-cream text-lg">{item}</span>
        </div>
      ))}
    </div>
  );
}
