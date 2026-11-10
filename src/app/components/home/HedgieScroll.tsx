"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScaledStage from "./ScaledStage";

// The hero. On desktop Hedgie stays pinned while the page scrolls through
// four steps (snap, read, file, sorted); he turns and his phone's scan light
// sweeps the receipt scrap again at each step. On phones it is a plain hero
// with the steps listed underneath.
//
// Hedgie's turned views (45°, 90°, 135°) are a tilt of the front render until
// the 3D renders exist; swap HEDGIE_VIEWS when they do.

const APP_STORE_URL = "https://apps.apple.com/gb/app/sorted-self-employed-tax/id6761042935";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=app.mysorted.sorted";

const ANGLES = [0, 45, 90, 135];
const BIG_WORDS = ["SNAP", "READ", "FILED", "SORTED"];

const STEPS = [
  {
    label: "( 02 / 04 ) READ · POWERED BY AI",
    title: ["HEDGIE", "READS IT"],
    body: "Most expense apps make you type everything in. Sorted's receipt scanner uses AI to read your receipts for you, even a crumpled or faded one.",
  },
  {
    label: "( 03 / 04 ) FILE",
    title: ["EVERY", "RECEIPT,", "KEPT"],
    body: "No typing, and no more lost receipts. You check it over and tap save.",
  },
  {
    label: "( 04 / 04 ) SORTED",
    title: ["TAX", "ESTIMATE", "UPDATED"],
    body: "A live self-employed tax estimate from your income, expenses and mileage.",
  },
];

// Scrap A (top right) and scrap B (the one being scanned), per step.
const SCRAP_A = [
  ["SCREWFIX · £24.99", "READ FOR YOU"],
  ["MERCHANT ✓ AMOUNT ✓", "DATE ✓ CATEGORY ✓"],
  ["SAVED TO YOUR VAULT", "PHOTO + DETAILS"],
  ["PAID BY CARD", "INV-001042"],
];
const SCRAP_B = [
  ["SCREWFIX", "25 OCT 2026", "TOTAL £24.99"],
  ["CATEGORY", "TOOLS & EQUIPMENT", "AUTO-DETECTED"],
  ["RECEIPT DATE", "25 OCT 2026", "→ TAX YEAR 2026/27"],
  ["TAX ESTIMATE", "UPDATED", "PUT ASIDE £1,240"],
];
const CARDS = [
  { label: "SPEED", big: ["A FEW", "SECONDS"], body: "Most receipts are read in a few seconds." },
  { label: "PICKS OUT", big: ["5 THINGS"], body: "Merchant, amount, date, category, and your tax estimate, updated." },
  { label: "UK TAX YEAR", big: ["6 APR –", "5 APR"], body: "Uses the receipt date, not today." },
  { label: "PUT ASIDE · EXAMPLE", big: ["£1,240"], body: "An estimate to plan with." },
];

function StoreBadges({ size = "md" }: { size?: "md" | "sm" }) {
  const apple = size === "md" ? "h-12" : "h-11";
  const google = size === "md" ? "h-[60px]" : "h-[56px]";
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href={APP_STORE_URL} target="_blank" rel="noopener" aria-label="Download Sorted on the App Store" className="block hover:scale-[1.03] transition-transform">
        <Image src="/images/app-store-badge.svg" alt="Download on the App Store" width={120} height={40} unoptimized loading="eager" className={`${apple} w-auto`} />
      </a>
      <a href={PLAY_STORE_URL} target="_blank" rel="noopener" aria-label="Get Sorted on Google Play" className="block hover:scale-[1.03] transition-transform">
        <Image src="/images/google-play-badge.png" alt="Get it on Google Play" width={646} height={250} unoptimized loading="eager" className={`${google} w-auto -mx-1.5`} />
      </a>
    </div>
  );
}

// Rendered once per layout; only one of the two is ever displayed.
function HeroIntro({ heading }: { heading: "h1" | "p" }) {
  const Heading = heading;
  return (
    <>
      <span className="inline-flex items-center gap-2 rounded-full border border-sage bg-mint px-3.5 py-1.5 text-xs font-semibold text-forest">
        <span className="h-2 w-2 rounded-full bg-teal" />
        Now live on App Store &amp; Google Play
      </span>
      <Heading className="font-display uppercase text-forest text-[40px] leading-[1.02] lg:text-[44px]">
        Bookkeeping for sole traders that actually feels sorted.
      </Heading>
      <p className="font-mono text-[13px] leading-relaxed tracking-wide text-charcoal">
        Scan receipts → log income and mileage → see your tax → year-end pack for your accountant.
      </p>
      <StoreBadges />
      <p className="text-sm text-smoke">
        Already using Sorted?{" "}
        <a href="https://app.mysorted.app" target="_blank" rel="noopener" className="font-semibold text-forest underline-offset-2 hover:underline">
          Sign in at app.mysorted.app →
        </a>
      </p>
    </>
  );
}

function Torn({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`torn bg-paper font-mono text-xs leading-normal tracking-wide text-charcoal ${className}`}>{children}</div>;
}

function Stage({ p, onJump }: { p: number; onJump: (i: number) => void }) {
  const step = Math.min(3, Math.round(p * 3));
  const rotY = p * 135 * 0.4;
  const fade = (i: number) => ({ opacity: step === i ? 1 : 0, transition: "opacity .45s ease" });
  const sweep = step % 2 ? "sweep-b" : "sweep-a";

  return (
    <div
      className="relative h-[800px] w-[1280px] overflow-hidden"
      style={{ background: `radial-gradient(ellipse 560px 440px at ${50 + p * 6}% 60%, var(--color-mint) 0%, transparent 72%)` }}
    >
      {/* Big word behind Hedgie */}
      <div aria-hidden className="absolute inset-x-0 top-10 grid justify-items-center font-display text-[300px] leading-[.8] text-forest">
        {BIG_WORDS.map((w, i) => (
          <span key={w} style={{ gridArea: "1 / 1", ...fade(i) }}>{w}</span>
        ))}
      </div>

      {/* Left column: the hero copy, then one block per step */}
      <div className="absolute left-16 top-[300px] grid w-[380px]">
        <div className="flex flex-col items-start gap-3.5" style={{ gridArea: "1 / 1", ...fade(0), pointerEvents: step === 0 ? "auto" : "none" }}>
          <HeroIntro heading="h1" />
        </div>
        {STEPS.map((s, i) => (
          <div key={s.label} className="flex flex-col gap-3.5" style={{ gridArea: "1 / 1", ...fade(i + 1) }} aria-hidden={step !== i + 1}>
            <span className="font-mono text-xs tracking-[.12em] text-teal">{s.label}</span>
            <h2 className="font-display text-[72px] leading-[.95] text-forest">
              {s.title.map((t) => <span key={t} className="block">{t}</span>)}
            </h2>
            <p className="text-[15px] leading-relaxed text-smoke">{s.body}</p>
          </div>
        ))}
      </div>

      {/* Floor shadow */}
      <div aria-hidden className="absolute left-[590px] top-[628px] h-[34px] w-[260px] rounded-[50%] bg-forest/15" style={{ transform: `scaleX(${Math.max(0.6, Math.cos((rotY * Math.PI) / 180))})` }} />

      {/* Hedgie, turning with the scroll */}
      <div className="absolute left-[412px] top-[249px] h-[480px] w-[480px]" style={{ perspective: 1400 }}>
        <Image
          src="/images/hedgie-receipt-scan.png"
          alt="Hedgie the hedgehog scanning a receipt with his phone"
          width={768}
          height={768}
          preload
          sizes="480px"
          className="h-[480px] w-[480px] object-contain"
          style={{ transform: `rotateY(${rotY}deg)`, transformOrigin: "62% 50%" }}
        />
      </div>

      {/* Scan light from his phone onto the receipt scrap */}
      <div key={`beam-${step}`} className={`${sweep} pointer-events-none absolute left-[450px] top-[497px] h-[156px] w-[190px]`}>
        <div
          aria-hidden
          className="beam absolute inset-0"
          style={{ clipPath: "polygon(58% 0, 66% 0, 100% 100%, 0 100%)", background: "linear-gradient(180deg, rgb(184 221 208 / .95), rgb(184 221 208 / .25))" }}
        />
      </div>

      {/* Scrap B: the receipt being scanned */}
      <div className={`${sweep} absolute left-[450px] top-[650px] w-[190px] -rotate-[4deg] drop-shadow-[0_8px_14px_rgb(15_26_30/.16)]`}>
        <Torn className="relative overflow-hidden p-4">
          <div aria-hidden className="sweep-line absolute inset-x-0 h-[3px] bg-teal shadow-[0_0_10px_rgb(45_125_111/.7)]" />
          <div className="grid">
            {SCRAP_B.map((lines, i) => (
              <div key={i} style={{ gridArea: "1 / 1", ...fade(i) }}>
                <div className="font-bold">{lines[0]}</div>
                <div>{lines[1]}</div>
                <div className="font-bold text-forest">{lines[2]}</div>
              </div>
            ))}
          </div>
        </Torn>
      </div>

      {/* Scrap A */}
      <div className="absolute left-[900px] top-[330px] w-[180px] rotate-[5deg] drop-shadow-[0_8px_14px_rgb(15_26_30/.14)]">
        <Torn className="px-4 py-[15px]">
          <div className="grid">
            {SCRAP_A.map((lines, i) => (
              <div key={i} style={{ gridArea: "1 / 1", ...fade(i) }}>
                <div className="font-bold">{lines[0]}</div>
                <div className="text-forest">{lines[1]}</div>
              </div>
            ))}
          </div>
        </Torn>
      </div>

      {/* Right card */}
      <div className="absolute right-14 top-[404px] grid w-[224px] border border-line bg-white px-[22px] py-5">
        {CARDS.map((c, i) => (
          <div key={c.label} className="flex flex-col gap-2" style={{ gridArea: "1 / 1", ...fade(i) }}>
            <span className="font-mono text-[11px] tracking-[.14em] text-smoke">{c.label}</span>
            <span className="font-display text-[40px] leading-[.95] text-forest">
              {c.big.map((b) => <span key={b} className="block">{b}</span>)}
            </span>
            <span className="text-[13px] leading-normal text-smoke">{c.body}</span>
          </div>
        ))}
      </div>

      {/* Angle */}
      <div aria-hidden className="absolute left-[680px] top-[690px] flex gap-2.5 font-mono text-xs tracking-widest text-forest">
        <span className="font-bold">( {ANGLES[step]}° )</span>
        {step === 0 && <span>HEDGIE SCANNING</span>}
      </div>

      {/* Progress line */}
      <div aria-hidden className="absolute right-6 top-[120px] h-[520px] w-0.5 bg-line">
        <div className="w-0.5 bg-forest" style={{ height: `${p * 100}%` }} />
      </div>
      <span aria-hidden className="absolute bottom-7 left-16 font-mono text-xs tracking-[.12em] text-forest">↓ SCROLL TO SORT</span>

      {/* Jump buttons */}
      <div role="group" aria-label="Jump to a step" className="absolute bottom-6 right-14 flex gap-1.5">
        {ANGLES.map((a, i) => (
          <button
            key={a}
            type="button"
            onClick={() => onJump(i)}
            aria-pressed={step === i}
            className={`h-11 w-[60px] cursor-pointer rounded-xl border-[1.5px] border-forest font-mono text-[13px] ${step === i ? "bg-forest text-warm" : "bg-cloud text-forest"}`}
          >
            {a}°
          </button>
        ))}
      </div>
    </div>
  );
}

export default function HedgieScroll() {
  const trackRef = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = trackRef.current;
      if (!el || el.offsetParent === null) return;
      const total = el.offsetHeight - window.innerHeight;
      const next = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / Math.max(1, total)));
      setP((prev) => (Math.abs(prev - next) > 0.002 ? next : prev));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const jump = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (i / 3) * total, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop: pinned stage, four screens of scroll */}
      <section ref={trackRef} aria-label="How Sorted reads a receipt" className="relative hidden h-[400vh] lg:block">
        <div className="sticky top-20 h-[calc(100svh-5rem)] overflow-hidden">
          <ScaledStage width={1280} height={800} fit="contain">
            <Stage p={p} onJump={jump} />
          </ScaledStage>
        </div>
      </section>

      {/* Phones and tablets: the same story, stacked */}
      <section aria-label="How Sorted reads a receipt" className="lg:hidden bg-[radial-gradient(ellipse_at_50%_55%,var(--color-mint),transparent_70%)] px-5 pb-16 pt-8">
        <div className="mx-auto flex max-w-xl flex-col items-start gap-4">
          <HeroIntro heading="h1" />
        </div>
        <div className="relative mx-auto mt-6 h-[360px] max-w-[360px]">
          <Image src="/images/hedgie-receipt-scan.png" alt="Hedgie the hedgehog scanning a receipt with his phone" width={768} height={768} sizes="340px" loading="eager" className="mx-auto h-[340px] w-[340px] object-contain" />
          <div className="absolute right-0 top-6 w-[160px] rotate-[5deg] drop-shadow-[0_8px_14px_rgb(15_26_30/.14)]">
            <Torn className="px-3.5 py-3">
              <div className="font-bold">SCREWFIX · £24.99</div>
              <div className="text-forest">READ FOR YOU</div>
            </Torn>
          </div>
        </div>
        <ol className="mx-auto mt-6 flex max-w-xl flex-col gap-4">
          {STEPS.map((s, i) => (
            <li key={s.label} className={`torn p-5 ${i === 2 ? "bg-forest text-warm" : "bg-paper"}`}>
              <span className={`font-mono text-xs tracking-[.12em] ${i === 2 ? "text-sage" : "text-teal"}`}>{s.label}</span>
              <h2 className={`mt-1 font-display text-4xl leading-none ${i === 2 ? "text-warm" : "text-forest"}`}>{s.title.join(" ")}</h2>
              <p className={`mt-2 text-[15px] leading-relaxed ${i === 2 ? "text-mint" : "text-smoke"}`}>{s.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
