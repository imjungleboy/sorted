"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScaledStage from "./ScaledStage";

// Five real app screens. On desktop the middle phone rises and the other four
// fan out from behind it when the section scrolls into view; click a phone to
// lift it and read what it does. On phones it's a sideways-scrolling row.

const screens = [
  { src: "/images/app-receipt-scan.webp", label: "Scan receipts", alt: "Sorted ‘Confirm Details’ screen on iPhone after scanning a Robert Dyas receipt, with merchant, amount of £25.97 and date filled in.", desc: "Snap a photo. Sorted reads the shop, date and amount, and picks a category." },
  { src: "/images/app-invoices.webp", label: "Invoices", alt: "Sorted Invoices screen on iPhone, showing £662.00 invoiced this tax year, £1.00 outstanding, and a list of sent and paid invoices.", desc: "Every invoice gets a payment link. When your client pays, Sorted marks it paid." },
  // The middle phone: it rises first and is the one picked to start with.
  { src: "/images/app-dashboard-2026.jpg", label: "Dashboard", alt: "Sorted home dashboard on iPhone for 2026/27, showing an estimated self-employment tax of £2,417.83, quick actions for Scan, Invoice, Income, Mileage and P&L, income, expenses and profit totals, and income by source.", desc: "A live self-employed tax estimate from your income, expenses and mileage. An estimate to plan with." },
  { src: "/images/app-pl-report.webp", label: "P&L report", alt: "Sorted P&L Report screen on iPhone, with tax-year selector, income of £3,212.00, expenses of £105.56, net profit, estimated tax owed, income by client, and a Generate PDF Report button.", desc: "Profit & loss any time, for the tax year you pick." },
  { src: "/images/app-accountant-pack.webp", label: "Accountant pack", alt: "Sorted Data & Export settings on iPhone, showing Generate P&L Report, Business Mileage Log, Tax Summary Report, Export All Data, and an Email to my accountant form for sending a tax pack.", desc: "On Pro, a tax summary PDF and one-tap accountant pack, emailed straight to your accountant." },
];

// Notes pinned to the dashboard screenshot (motion-prompt #163 hotspots).
// x and y are percentages of the screenshot.
const dashboardNotes = [
  { x: 60, y: 26, title: "Tax so far", text: "Your estimated tax for the year. It updates every time you add income, a receipt or a trip." },
  { x: 21, y: 41, title: "One-tap actions", text: "Scan a receipt, send an invoice, log income or a trip, or open your P&L." },
  { x: 78, y: 55, title: "Profit", text: "Income minus expenses: the figure your tax is worked out on." },
  { x: 63, y: 71, title: "Tax return pages", text: "Each income source is matched to its return page: SA103 for self-employment, SA105 for property." },
];

function DashboardHotspots() {
  const [open, setOpen] = useState<number | null>(null);
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open === null) return;
    const close = (e: PointerEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !layer.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div ref={layer} className="fade-up pointer-events-none absolute left-2 top-2 aspect-[600/1245] w-[194px]">
      {dashboardNotes.map((n, i) => (
        <button
          key={n.title}
          type="button"
          onClick={() => setOpen(open === i ? null : i)}
          aria-expanded={open === i}
          aria-label={`What is ${n.title}?`}
          className="pointer-events-auto absolute grid h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <span aria-hidden className="hotspot-ring absolute h-3.5 w-3.5 rounded-full bg-teal" />
          <span aria-hidden className={`relative h-3.5 w-3.5 rounded-full border-2 border-white shadow-[0_2px_6px_rgb(15_26_30/.35)] transition-colors ${open === i ? "bg-amber" : "bg-teal"}`} />
        </button>
      ))}
      {open !== null && (
        <div
          role="note"
          className="note-pop pointer-events-auto absolute left-1/2 z-10 w-[228px] -translate-x-1/2 rounded-2xl bg-night p-4 text-left shadow-[0_18px_40px_rgb(15_26_30/.35)]"
          style={{ top: `calc(${dashboardNotes[open].y}% + 16px)` }}
        >
          <span className="block font-mono text-[11px] font-bold uppercase tracking-[.12em] text-gold">{dashboardNotes[open].title}</span>
          <span className="mt-1.5 block text-[13px] leading-snug text-warm">{dashboardNotes[open].text}</span>
        </div>
      )}
    </div>
  );
}

const layout = [
  { x: "-410px", y: "46px", r: "-13deg", s: ".86", z: 1, delay: "1.05s", sr: "-3deg" },
  { x: "-210px", y: "14px", r: "-6.5deg", s: ".93", z: 2, delay: ".85s", sr: "2deg" },
  { x: "0px", y: "0px", r: "0deg", s: "1", z: 3, delay: "0s", sr: "-1.5deg" },
  { x: "210px", y: "14px", r: "6.5deg", s: ".93", z: 2, delay: ".85s", sr: "-2deg" },
  { x: "410px", y: "46px", r: "13deg", s: ".86", z: 1, delay: "1.05s", sr: "3deg" },
];

// The title is drawn twice (desktop stage and phone layout), so the big words
// are hidden from screen readers here and the section's one real heading is
// the sr-only h2 at the top.
function Title() {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="font-mono text-xs tracking-[.12em] text-teal">( WHAT THE APP DOES )</span>
      <p aria-hidden className="font-display text-5xl leading-[.9] text-forest md:text-[84px]">SEE IT IN ACTION</p>
      <span className="font-mono text-xs tracking-wide text-smoke">REAL APP. REAL SIMPLE. NO ACCOUNTING DEGREE REQUIRED.</span>
    </div>
  );
}

export default function PhoneFan() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(0); // 0 = not yet shown; bumps to replay
  const [focus, setFocus] = useState(2);
  // The dashboard's dots appear once the fan has finished opening.
  const [doneRun, setDoneRun] = useState(0);
  const fanDone = run > 0 && doneRun === run;

  useEffect(() => {
    if (!run) return;
    const t = window.setTimeout(() => setDoneRun(run), 1900);
    return () => window.clearTimeout(t);
  }, [run]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRun((r) => (r === 0 ? 1 : r));
        else if (entry.intersectionRatio === 0) {
          setRun(0);
          setDoneRun(0);
          setFocus(2);
        }
      },
      { threshold: [0, 0.35] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const replay = () => {
    setFocus(2);
    setRun((r) => r + 1);
  };

  return (
    <section aria-labelledby="see-it-in-action" className="scroll-mt-20 border-t border-forest/10 bg-cloud">
      <h2 id="see-it-in-action" className="sr-only">See it in action</h2>
      {/* Desktop */}
      <div ref={ref} className="hidden lg:block">
        <ScaledStage width={1280} height={800}>
          <div className="relative h-[800px] w-[1280px] overflow-hidden bg-[radial-gradient(ellipse_520px_420px_at_50%_62%,var(--color-mint),transparent_72%)]">
            <div className="absolute left-16 top-[72px]">
              <Title />
            </div>
            <div className="absolute right-16 top-20 grid w-80">
              {screens.map((s, i) => (
                <div key={s.label} className="flex flex-col gap-2 transition-opacity duration-300" style={{ gridArea: "1 / 1", opacity: focus === i ? 1 : 0 }} aria-hidden={focus !== i}>
                  <span className="font-mono text-xs font-bold tracking-widest text-forest">( 0{i + 1} / 05 ) {s.label.toUpperCase()}</span>
                  <span className="text-base leading-relaxed text-charcoal">{s.desc}</span>
                  {i === 2 && <span className="font-mono text-xs tracking-widest text-teal">( TAP THE GREEN DOTS )</span>}
                </div>
              ))}
            </div>

            {run > 0 && (
              <div key={run} className="absolute inset-x-0 top-[230px] h-[540px]">
                {screens.map((s, i) => {
                  const l = layout[i];
                  const on = focus === i;
                  return (
                    <div
                      key={s.label}
                      className={`absolute left-[535px] top-0 w-[210px] ${i === 2 ? "fan-rise" : "fan-out"}`}
                      style={{ zIndex: on ? 10 : l.z, animationDelay: l.delay, "--x": l.x, "--y": l.y, "--r": l.r, "--s": l.s } as React.CSSProperties}
                    >
                      <div
                        className="relative transition-transform duration-300 [transition-timing-function:cubic-bezier(.34,1.4,.64,1)]"
                        style={{ transform: on ? "translateY(-22px) scale(1.04)" : "none" }}
                      >
                        <button
                          type="button"
                          onClick={() => setFocus(i)}
                          aria-pressed={on}
                          aria-label={`Show ${s.label}`}
                          className="block w-[210px] cursor-pointer text-left"
                        >
                          <div className={`overflow-hidden rounded-[36px] border-8 border-night bg-night ${on ? "shadow-[0_30px_50px_rgb(15_26_30/.32)]" : "shadow-[0_16px_30px_rgb(15_26_30/.2)]"}`}>
                            <Image src={s.src} alt={s.alt} width={600} height={1245} sizes="210px" className="block h-auto w-full" />
                          </div>
                          <div className="scrap-in mx-auto mt-4 w-max drop-shadow-[0_6px_10px_rgb(15_26_30/.14)]" style={{ "--sr": l.sr, animationDelay: `${1.6 + i * 0.08}s` } as React.CSSProperties}>
                            <div className={`torn whitespace-nowrap px-3 py-2.5 text-center font-mono text-xs font-bold tracking-wider ${on ? "bg-forest text-warm" : "bg-paper text-forest"}`}>
                              ( 0{i + 1} ) {s.label.toUpperCase()}
                            </div>
                          </div>
                        </button>
                        {i === 2 && on && fanDone && <DashboardHotspots />}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <span aria-hidden className="absolute bottom-6 left-16 font-mono text-xs tracking-widest text-forest">CLICK A PHONE TO SEE WHAT IT DOES</span>
            <button type="button" onClick={replay} className="absolute bottom-5 right-6 h-11 cursor-pointer rounded-full border-[1.5px] border-forest bg-cloud px-[18px] font-mono text-[13px] tracking-wide text-forest">
              ↺ REPLAY
            </button>
          </div>
        </ScaledStage>
      </div>

      {/* Phones and tablets */}
      <div className="px-5 py-16 lg:hidden">
        <Title />
        <div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4">
          {screens.map((s, i) => (
            <figure key={s.label} className="w-[220px] flex-none snap-center">
              <div className="overflow-hidden rounded-[36px] border-8 border-night bg-night shadow-[0_16px_30px_rgb(15_26_30/.2)]">
                <Image src={s.src} alt={s.alt} width={600} height={1245} sizes="220px" className="block h-auto w-full" />
              </div>
              <figcaption className="mt-4">
                <span className="torn block bg-paper px-3 py-2 text-center font-mono text-xs font-bold tracking-wider text-forest">( 0{i + 1} ) {s.label.toUpperCase()}</span>
                <span className="mt-2 block text-sm leading-relaxed text-smoke">{s.desc}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
