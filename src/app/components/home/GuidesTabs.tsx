"use client";

import Link from "next/link";
import { useState } from "react";
import { guides, type GuideCategory } from "../../guides/guides";

// Free tools and guides, read from the same list as /guides and the sitemap.

const TABS: { id: GuideCategory; label: string; kind: string }[] = [
  { id: "tool", label: "CALCULATORS", kind: "FREE CALCULATOR" },
  { id: "guide", label: "TAX GUIDES", kind: "GUIDE" },
  { id: "job", label: "BY JOB", kind: "TAX BY JOB" },
];

export default function GuidesTabs() {
  const [tab, setTab] = useState<GuideCategory>("guide");
  const current = TABS.find((t) => t.id === tab)!;
  const list = guides.filter((g) => g.category === tab);

  return (
    <section id="guides" aria-label="Free tools and guides" className="scroll-mt-20 border-t border-forest/10 bg-cloud py-20 md:py-28">
      <div className="mx-auto max-w-[1152px] px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[.12em] text-teal">( FREE TOOLS AND GUIDES )</span>
            <h2 className="font-display text-5xl leading-[.92] text-forest md:text-[76px]">GUIDES FOR SOLE TRADERS</h2>
          </div>
          <Link href="/guides" className="inline-flex h-11 items-center rounded-xl bg-forest px-[18px] font-sans font-black text-warm hover:bg-forest/90">
            All guides →
          </Link>
        </div>

        <div role="tablist" aria-label="Guide type" className="mt-10 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls="guides-panel"
              onClick={() => setTab(t.id)}
              className={`h-11 cursor-pointer rounded-full border-[1.5px] border-forest px-[18px] font-mono text-xs tracking-wider ${tab === t.id ? "bg-forest text-warm" : "bg-cloud text-forest"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div id="guides-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group flex flex-col justify-between gap-3 rounded-[18px] border-[1.5px] border-line bg-white px-5 py-4 transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-forest"
            >
              <span className="flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-widest text-teal">{current.kind}</span>
                <span className="font-sans text-[17px] font-black leading-snug text-forest">{g.title}</span>
                <span className="text-[13px] leading-normal text-smoke">{g.summary}</span>
              </span>
              <span className="font-mono text-xs font-bold text-forest transition-transform group-hover:translate-x-1">READ →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
