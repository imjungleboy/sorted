"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScaledStage from "./ScaledStage";

// Pricing as a receipt printer. Press Free or Pro and that plan's receipt
// prints; click the receipt to tear it off and it prints again. The sky
// behind changes with the plan: sunrise for Free, evening for Pro.

type Plan = "free" | "pro";

const APPLE_MANAGE_SUBSCRIPTIONS_URL = "https://support.apple.com/en-gb/118428";
const GOOGLE_MANAGE_SUBSCRIPTIONS_URL = "https://support.google.com/googleplay/answer/7018481";

const ROWS: Record<Plan, [string, string][]> = {
  free: [
    ["RECEIPTS", "30 / MONTH"],
    ["INVOICES", "3 / MONTH"],
    ["MILEAGE TRACKING", "10 TRIPS / MONTH"],
    ["TAX ESTIMATE", "LIVE"],
    ["P&L REPORT + EXPORT", "YES"],
    ["CARD FEE ON INVOICES", "1.5%"],
  ],
  pro: [
    ["RECEIPT SCANNING", "UNLIMITED"],
    ["INVOICES + RECURRING", "UNLIMITED"],
    ["MILEAGE TRACKING", "UNLIMITED"],
    ["EMAIL RECEIPTS IN", "YES"],
    ["TAX PDF + ACCOUNTANT PACK", "YES"],
    ["CARD FEE ON INVOICES", "0.5%"],
    ["PRIORITY SUPPORT", "YES"],
  ],
};

const KEY_ON = { shift: "translateY(2px)", shadow: "inset 0 3px 8px rgb(0 0 0 / .55)", led: "#F5A623", glow: "0 0 10px 2px rgb(245 166 35 / .8)" };
const KEY_OFF = { shift: "none", shadow: "0 4px 0 #0E1A1D, 0 6px 14px rgb(0 0 0 / .35)", led: "#3B5359", glow: "none" };

function Printer({ plan, n, torn, printing, price, trialDays, onPick, onTear }: {
  plan: Plan; n: number; torn: boolean; printing: boolean; price: string; trialDays: number;
  onPick: (p: Plan) => void; onTear: () => void;
}) {
  const pro = plan === "pro";
  const shown = pro ? price : "0.00";
  const status = torn ? "TORN OFF" : printing ? "PRINTING" : "READY";
  const receiptClass = torn ? "rc tear-off" : n % 2 ? "rc feed-b" : "rc feed-a";
  const key = (p: Plan) => (plan === p ? KEY_ON : KEY_OFF);

  return (
    <div className="relative h-[900px] w-[680px] overflow-hidden rounded-[28px] bg-night font-mono text-charcoal">
      {/* Sunrise (Free) */}
      <div aria-hidden className="absolute inset-0 transition-opacity duration-700" style={{ opacity: pro ? 0 : 1, background: "linear-gradient(180deg, #FDEBD0 0%, #FFF8F0 40%, #E8F5EE 72%, #B8DDD0 100%)" }}>
        <div className="absolute left-[520px] top-[300px] h-[130px] w-[130px] rounded-full" style={{ background: "radial-gradient(circle, #FFF3C4 0%, #FFD54F 55%, transparent 72%)" }} />
        <div className="absolute -left-[220px] bottom-[120px] h-[300px] w-[760px] rounded-[50%] bg-sage" />
        <div className="absolute bottom-20 left-[280px] h-[280px] w-[760px] rounded-[50%] bg-teal" />
        <div className="absolute inset-x-0 bottom-0 h-[150px] bg-forest" style={{ borderRadius: "50% 50% 0 0 / 46px 46px 0 0" }} />
      </div>
      {/* Evening (Pro) */}
      <div aria-hidden className="absolute inset-0 transition-opacity duration-700" style={{ opacity: pro ? 1 : 0, background: "linear-gradient(180deg, #0F1A1E 0%, #1A2C30 50%, #243B40 100%)" }}>
        <div className="absolute left-[66px] top-[250px] h-[66px] w-[66px] rounded-full shadow-[inset_-16px_8px_0_0_#FDEBD0]" />
        {[[40, 360, 3], [112, 420, 2], [590, 260, 3], [620, 380, 2], [560, 470, 2], [30, 500, 2]].map(([x, y, s]) => (
          <div key={`${x}-${y}`} className="absolute rounded-full bg-warm" style={{ left: x, top: y, width: s, height: s }} />
        ))}
        <div className="absolute -left-[220px] bottom-[120px] h-[300px] w-[760px] rounded-[50%] bg-[#1E3A3A]" />
        <div className="absolute bottom-20 left-[280px] h-[280px] w-[760px] rounded-[50%] bg-[#1A4A42]" />
        <div className="absolute inset-x-0 bottom-0 h-[150px] bg-[#12282A]" style={{ borderRadius: "50% 50% 0 0 / 46px 46px 0 0" }} />
      </div>

      <Image src="/images/hedgie-pointing.png" alt="" width={768} height={768} sizes="178px" className="absolute -left-1.5 bottom-[18px] h-[178px] w-[178px] object-contain" />

      {/* Receipt */}
      <div className="absolute left-[150px] top-[182px] h-[718px] w-[380px] overflow-hidden">
        <button key={`${n}-${torn}`} type="button" onClick={onTear} aria-label="Tear off the receipt" className={`${receiptClass} block w-[380px] cursor-grab text-left`}>
          <div className="relative bg-paper px-[26px] pb-[18px] pt-[26px] shadow-[0_18px_30px_rgb(15_26_30/.28)]">
            <div className="flex items-center justify-center gap-2.5">
              <Image src="/images/hedgie-portrait.png" alt="" width={644} height={644} sizes="34px" className="h-[34px] w-[34px] rounded-full grayscale contrast-125" />
              <span className="font-sans text-[26px] font-black tracking-[.22em] text-charcoal">SORTED</span>
            </div>
            <div className="mt-1 text-center text-[11px] tracking-[.18em] text-smoke">RECEIPTS IN · TAX SORTED</div>
            <div className="mt-[18px] flex justify-between text-[11px] text-smoke">
              <span>NO. 000418</span>
              <span>{pro ? "SORTED PRO" : "FREE"}</span>
            </div>
            <div className="my-3 border-t-[1.5px] border-dashed border-[#8C9BAA]" />
            <div className="flex flex-col gap-2.5">
              {ROWS[plan].map(([k, v]) => (
                <div key={k} className="flex items-end text-[13px]">
                  <span>{k}</span>
                  <span className="mx-2 mb-1 grow border-b-[1.5px] border-dotted border-line" />
                  <span className="font-bold">{v}</span>
                </div>
              ))}
            </div>
            <div className="mb-2.5 mt-3.5 border-t-[1.5px] border-dashed border-[#8C9BAA]" />
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold tracking-[.12em]">TOTAL</span>
                <span className="text-[10px] tracking-[.14em] text-smoke">{pro ? `PER MONTH · ${trialDays}-DAY FREE TRIAL` : "FOREVER · NO CARD NEEDED"}</span>
              </div>
              <div className="relative px-2.5 py-1.5">
                <svg aria-hidden viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute -left-3 -top-2 h-[calc(100%+16px)] w-[calc(100%+24px)] -rotate-3 overflow-visible">
                  <ellipse className="ring" cx="50" cy="20" rx="49" ry="18" fill="none" stroke="#E57373" strokeWidth="2.2" vectorEffect="non-scaling-stroke" pathLength={1} strokeDasharray="1" strokeDashoffset="0" />
                </svg>
                <span className="relative text-[38px] font-medium tracking-tight text-surface">£{shown}</span>
              </div>
            </div>
            <div className="note mt-1.5 -rotate-3 text-right font-hand text-[25px] text-teal">{pro ? "every receipt, sorted." : "plenty to get you started."}</div>
            <div className="mt-4 flex flex-col items-center gap-1.5">
              <div className="h-[54px] w-[240px]" style={{ background: "repeating-linear-gradient(90deg, #2C3E50 0 2px, transparent 2px 4px, #2C3E50 4px 5px, transparent 5px 8px, #2C3E50 8px 11px, transparent 11px 12px, #2C3E50 12px 13px, transparent 13px 16px, #2C3E50 16px 17px, transparent 17px 19px)" }} />
              <span className="text-[10px] tracking-[.2em] text-smoke">SRT-000418</span>
            </div>
            <div className="mt-3.5 text-center text-[11px] tracking-[.16em] text-smoke">SHOEBOX NOT REQUIRED.</div>
            <svg aria-hidden viewBox="0 0 100 100" className="stamp absolute bottom-24 right-5 h-[92px] w-[92px] -rotate-12 opacity-85">
              <defs><path id="stampRing" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" /></defs>
              <circle cx="50" cy="50" r="47" fill="none" stroke="#2D7D6F" strokeWidth="3" />
              <circle cx="50" cy="50" r="33" fill="none" stroke="#2D7D6F" strokeWidth="1.4" />
              <text fontFamily="var(--font-jetbrains), monospace" fontSize="9" fontWeight="700" letterSpacing="2.2" fill="#2D7D6F"><textPath href="#stampRing">SORTED · RECEIPT KEPT · SORTED ·</textPath></text>
              <path d="M37 51 l9 9 l17 -19" fill="none" stroke="#2D7D6F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div aria-hidden className="receipt-edge" />
        </button>
      </div>

      {/* Printer body */}
      <div className="absolute left-10 top-9 flex h-[168px] w-[600px] flex-col gap-3 rounded-[26px] px-[22px] py-4 shadow-[0_22px_40px_rgb(8_14_16/.45),inset_0_1px_0_rgb(255_255_255/.08)]" style={{ background: "linear-gradient(180deg, #24383D 0%, #1A2C30 60%, #142327 100%)" }}>
        <div className="flex h-6 items-baseline gap-2.5">
          <span className="font-sans text-lg font-extrabold text-warm">sorted</span>
          <span className="text-[10px] tracking-[.16em] text-sage">SR-01 · RECEIPTS</span>
        </div>
        <div className="flex gap-3.5">
          <div className="flex h-[88px] w-[300px] flex-col justify-between rounded-[14px] bg-[#0A1315] px-4 py-2.5 shadow-[inset_0_2px_8px_rgb(0_0_0/.6)]">
            <div className="flex justify-between text-[10px] tracking-[.14em] text-amber">
              <span>● {status}</span>
              <span>{pro ? `${trialDays}-DAY TRIAL` : "NO CARD"}</span>
            </div>
            <div key={n} className={`flex items-baseline gap-2 ${n % 2 ? "lcd-b" : "lcd-a"}`}>
              <span className="text-[40px] font-bold leading-none text-amber [text-shadow:0_0_12px_rgb(245_166_35/.55)]">£{shown}</span>
              <span className="text-[11px] tracking-widest text-amber">{pro ? "/MO" : "FREE"}</span>
            </div>
          </div>
          {(["free", "pro"] as Plan[]).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => onPick(p)}
              aria-pressed={plan === p}
              className="flex h-[88px] w-[113px] cursor-pointer flex-col items-center justify-between rounded-2xl pb-3.5 pt-3 transition-[transform,box-shadow] duration-75"
              style={{ background: "linear-gradient(180deg, #2C4247 0%, #20343A 100%)", transform: key(p).shift, boxShadow: key(p).shadow }}
            >
              <span className="h-[7px] w-[7px] rounded-full" style={{ background: key(p).led, boxShadow: key(p).glow }} />
              <span className="font-sans text-[17px] font-extrabold text-warm">{p === "free" ? "Free" : "Pro"}</span>
            </button>
          ))}
        </div>
        <div aria-hidden className="absolute bottom-3.5 left-[100px] right-[100px] h-2 rounded bg-[#050A0B] shadow-[0_1px_0_rgb(255_255_255/.1)]" />
      </div>
    </div>
  );
}

export default function PricingPrinter({ monthlyPrice, trialDays, appStoreUrl }: { monthlyPrice: string; trialDays: number; appStoreUrl: string }) {
  const [plan, setPlan] = useState<Plan>("pro");
  const [n, setN] = useState(0);
  const [torn, setTorn] = useState(false);
  const [printing, setPrinting] = useState(true);
  const t1 = useRef<ReturnType<typeof setTimeout>>(undefined);
  const t2 = useRef<ReturnType<typeof setTimeout>>(undefined);
  const ref = useRef<HTMLDivElement>(null);
  const price = monthlyPrice.replace(/^£/, "");

  const print = (p: Plan) => {
    clearTimeout(t1.current);
    clearTimeout(t2.current);
    setPlan(p);
    setN((x) => x + 1);
    setTorn(false);
    setPrinting(true);
    t1.current = setTimeout(() => setPrinting(false), 1500);
  };

  const tear = () => {
    if (torn) return;
    clearTimeout(t1.current);
    setTorn(true);
    setPrinting(false);
    t2.current = setTimeout(() => print(plan), 850);
  };

  // Print once when the printer scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let seen = false;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !seen) {
        seen = true;
        setN((x) => x + 1);
        setPrinting(true);
        t1.current = setTimeout(() => setPrinting(false), 1500);
      }
      if (e.intersectionRatio === 0) seen = false;
    }, { threshold: [0, 0.3] });
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(t1.current);
      clearTimeout(t2.current);
    };
  }, []);

  return (
    <section id="pricing" className="scroll-mt-20 border-t border-forest/10 bg-cloud py-20 md:py-24">
      <div className="mx-auto flex max-w-[1152px] flex-col gap-12 px-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-[420px] flex-col items-start gap-4">
          <span className="font-mono text-xs tracking-[.12em] text-teal">( PRICING )</span>
          <h2 className="font-display text-5xl leading-[.92] text-forest md:text-[78px]">FREE OR SORTED PRO</h2>
          <p className="text-[17px] leading-relaxed text-smoke">Start free. Upgrade when you outgrow the monthly limits.</p>
          <span className="rounded-xl border-[1.5px] border-dashed border-forest px-3.5 py-2.5 font-mono text-xs tracking-wider text-forest">
            PRESS FREE OR PRO · CLICK THE RECEIPT TO TEAR IT
          </span>
          <dl className="mt-2 grid w-full gap-3 text-sm">
            <div className="rounded-2xl border border-line bg-white p-4">
              <dt className="font-mono text-xs tracking-widest text-smoke">FREE · £0 FOREVER</dt>
              <dd className="mt-1 text-charcoal">30 receipts, 3 invoices and 10 trips a month. No card needed.</dd>
            </div>
            <div className="rounded-2xl border-2 border-teal bg-white p-4">
              <dt className="font-mono text-xs tracking-widest text-teal">SORTED PRO · {monthlyPrice}/MONTH</dt>
              <dd className="mt-1 text-charcoal">{trialDays}-day free trial • cancel anytime</dd>
            </div>
          </dl>
          <div className="flex flex-wrap gap-3">
            <a href={appStoreUrl} target="_blank" rel="noopener" className="inline-flex h-12 items-center rounded-2xl border-2 border-forest px-5 font-sans font-black text-forest hover:bg-forest/5">
              Get Sorted free
            </a>
            <a href={appStoreUrl} target="_blank" rel="noopener" className="inline-flex h-12 items-center rounded-2xl bg-amber px-5 font-sans font-black text-night hover:bg-amber/90">
              Start {trialDays}-day free trial
            </a>
          </div>
          <p className="text-[13px] leading-relaxed text-smoke">
            Subscriptions are managed through the App Store and Google Play, not on this site.{" "}
            <a href={APPLE_MANAGE_SUBSCRIPTIONS_URL} target="_blank" rel="noopener" className="text-forest underline">Manage Apple subscriptions</a>
            {" · "}
            <a href={GOOGLE_MANAGE_SUBSCRIPTIONS_URL} target="_blank" rel="noopener" className="text-forest underline">Manage Google Play subscriptions</a>.
          </p>
        </div>

        <div ref={ref} className="w-full max-w-[680px]">
          <ScaledStage width={680} height={900}>
            <Printer plan={plan} n={n} torn={torn} printing={printing} price={price} trialDays={trialDays} onPick={print} onTear={tear} />
          </ScaledStage>
        </div>
      </div>
    </section>
  );
}
