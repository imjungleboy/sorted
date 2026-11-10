"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScaledStage from "./ScaledStage";

// "Know what to put aside": a drawn phone that tilts toward the mouse. Tap
// "Tax so far" and a breakdown sheet grows out of the bubble, the numbers
// count up, then the receipt scraps pop out past the phone frame.
// The percentages are example numbers, labelled as such on the screen.

const TILT = 16;
const EXAMPLE = { fuel: 42, tools: 31, phone: 9 };
const FLAT = "translate3d(0,0,0) rotate(0deg) scale(1)";

export default function TapPop() {
  const [m, setM] = useState({ x: 0.5, y: 0.5 });
  const [open, setOpen] = useState(false);
  const [popped, setPopped] = useState(false);
  const [k, setK] = useState(0);
  const raf = useRef(0);
  const next = useRef(m);
  const timers = useRef<{ iv?: ReturnType<typeof setInterval>; to?: ReturnType<typeof setTimeout> }>({});

  useEffect(() => {
    const t = timers.current;
    return () => {
      clearInterval(t.iv);
      clearTimeout(t.to);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    next.current = {
      x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)),
      y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)),
    };
    if (!raf.current) {
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        setM(next.current);
      });
    }
  };

  const openSheet = () => {
    if (open) return;
    const t = timers.current;
    clearInterval(t.iv);
    clearTimeout(t.to);
    setOpen(true);
    setPopped(false);
    setK(0);
    t.to = setTimeout(() => {
      const start = Date.now();
      t.iv = setInterval(() => {
        const p = Math.min(1, (Date.now() - start) / 1600);
        setK(1 - Math.pow(1 - p, 3));
        if (p >= 1) {
          clearInterval(t.iv);
          t.to = setTimeout(() => setPopped(true), 250);
        }
      }, 40);
    }, 450);
  };

  const closeSheet = () => {
    const t = timers.current;
    clearInterval(t.iv);
    clearTimeout(t.to);
    setOpen(false);
    setPopped(false);
    setK(0);
  };

  const ry = (m.x - 0.5) * 2 * TILT;
  const rx = -(m.y - 0.5) * 2 * TILT * 0.6;

  const scraps = [
    { label: "FUEL", value: Math.round(EXAMPLE.fuel * k), cls: "bg-forest text-warm", size: "text-[58px]", pos: "left-[30px] top-[205px] w-[200px]", out: "translate3d(-120px,-40px,150px) rotate(-3deg) scale(1.1)" },
    { label: "TOOLS", value: Math.round(EXAMPLE.tools * k), cls: "bg-paper text-forest", size: "text-[52px]", pos: "left-[110px] top-[345px] w-[190px]", out: "translate3d(130px,-10px,120px) rotate(2deg) scale(1.08)" },
    { label: "PHONE", value: Math.round(EXAMPLE.phone * k), cls: "bg-sage text-forest", size: "text-[46px]", pos: "left-[40px] top-[480px] w-[170px]", out: "translate3d(-100px,90px,90px) rotate(-2deg) scale(1.06)" },
  ];

  return (
    <section
      aria-label="Know what to put aside"
      onMouseMove={onMove}
      onMouseLeave={() => setM({ x: 0.5, y: 0.5 })}
      className="relative overflow-hidden border-t border-forest/10 bg-cloud py-16 lg:py-10"
      style={{ background: `radial-gradient(ellipse 560px 460px at ${40 + m.x * 30}% ${40 + m.y * 30}%, var(--color-mint) 0%, transparent 72%), var(--color-cloud)` }}
    >
      <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-10 px-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-[380px] flex-col items-start gap-4 self-start lg:self-center">
          <span className="font-mono text-xs tracking-[.12em] text-teal">( YOUR TAX, LIVE )</span>
          <h2 className="font-display text-5xl leading-[.92] text-forest md:text-[78px]">KNOW WHAT TO PUT ASIDE</h2>
          <p className="text-[17px] leading-relaxed text-smoke">
            A live self-employed tax estimate from your income, expenses and mileage. An estimate to plan with.
          </p>
          <span className="rounded-xl border-[1.5px] border-dashed border-forest px-3.5 py-2.5 font-mono text-xs tracking-wider text-forest">
            {open ? "TAP × ON THE PHONE TO CLOSE" : "TAP “TAX SO FAR” ON THE PHONE"}
          </span>
        </div>

        <div className="w-full max-w-[420px] lg:mr-16" style={{ width: "min(100%, 420px, calc((100svh - 7rem) * 0.525))" }}>
          <ScaledStage width={420} height={800}>
            <div className="relative h-[800px] w-[420px]" style={{ perspective: 1300 }}>
              <div
                className="absolute left-[45px] top-[43px] h-[714px] w-[330px] transition-transform duration-200 ease-out"
                style={{ transformStyle: "preserve-3d", transform: `rotateX(${rx}deg) rotateY(${ry}deg)` }}
              >
                <div aria-hidden className="absolute -bottom-[34px] left-[30px] right-[30px] h-[30px] rounded-[50%] bg-forest/20" style={{ transform: `translateX(${-ry * 1.2}px)` }} />

                {/* Phone */}
                <div className="absolute inset-0 overflow-hidden rounded-[50px] border-[10px] border-[#10181A] bg-cloud shadow-[0_30px_60px_rgb(15_26_30/.22)]">
                  <div aria-hidden className="absolute left-1/2 top-2.5 z-[4] h-7 w-24 -translate-x-1/2 rounded-full bg-[#0B0F10]" />

                  {/* Home screen */}
                  <div className="absolute inset-0">
                    <p className="absolute left-[22px] top-14 font-display text-5xl leading-[.95] text-forest">Receipts</p>
                    <p className="absolute left-[22px] top-28 w-[190px] font-sans text-[13px] font-bold leading-snug text-smoke">Snap it. Hedgie reads it and files it for you.</p>
                    <Image src="/images/hedgie-portrait.png" alt="" width={644} height={644} sizes="54px" className="absolute right-[18px] top-[58px] h-[54px] w-[54px] rounded-full" />
                    <div className="absolute left-2.5 top-[230px] flex gap-2.5">
                      <div className="flex h-[90px] w-[90px] flex-col items-center justify-center gap-1 rounded-full bg-forest text-warm">
                        <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M8 12h8" /></svg>
                        <span className="font-sans text-[13px] font-black">Scan</span>
                      </div>
                      <div className="relative h-[90px] w-[90px]">
                        {!open && <span aria-hidden className="ring-pulse absolute inset-0 rounded-full border-[3px] border-teal" />}
                        <button type="button" onClick={openSheet} aria-label="Open Tax so far" className="relative h-[90px] w-[90px] cursor-pointer rounded-full bg-teal font-display text-xl leading-none text-white">
                          Tax<br />so far
                        </button>
                      </div>
                      <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-sage font-display text-xl text-forest">Miles</div>
                    </div>
                    <div className="absolute inset-x-3 top-[352px] flex flex-col gap-3 rounded-[22px] bg-mint p-4">
                      <p className="font-sans text-[13px] font-bold leading-snug text-smoke">Hedgie reads the shop, the date and the total from every photo.</p>
                      <span className="font-sans text-xs font-extrabold text-smoke">Top spend</span>
                      <div className="flex gap-4 whitespace-nowrap font-display text-[32px] leading-[.95]">
                        <span className="text-forest">Fuel</span>
                        <span className="text-smoke">Tools</span>
                        <span className="text-smoke">Phone</span>
                      </div>
                    </div>
                  </div>

                  {/* Breakdown sheet, grows out of the bubble */}
                  <div
                    className="absolute inset-0 z-[3] bg-cloud transition-[clip-path] duration-500 [transition-timing-function:cubic-bezier(.2,.8,.2,1)]"
                    style={{ clipPath: `circle(${open ? "820px" : "0px"} at 155px 275px)` }}
                    aria-hidden={!open}
                  >
                    <p className="absolute left-[22px] top-14 font-display text-5xl leading-[.95] text-forest">Where it<br />went</p>
                    <button type="button" onClick={closeSheet} aria-label="Close" tabIndex={open ? 0 : -1} className="absolute right-4 top-[58px] flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-mint">
                      <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A5C50" strokeWidth={2.4} strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
                    </button>
                    <span className="absolute left-[22px] top-40 font-mono text-[11px] tracking-widest text-smoke">EXPENSES BY CATEGORY</span>
                    <span className="absolute bottom-[30px] left-[22px] font-mono text-[11px] tracking-widest text-[#B4472F]">EXAMPLE NUMBERS</span>
                  </div>
                </div>

                {/* Scraps: sit on the screen, then pop out past the frame */}
                {scraps.map((s) => (
                  <div
                    key={s.label}
                    className={`pointer-events-none absolute z-[6] ${s.pos}`}
                    style={{ opacity: open ? 1 : 0, transform: popped ? s.out : FLAT, transition: "transform .6s cubic-bezier(.34,1.56,.64,1), opacity .35s ease" }}
                  >
                    <div className="drop-shadow-[0_12px_18px_rgb(15_26_30/.22)]">
                      <div className={`torn flex items-baseline justify-between px-[18px] pb-3.5 pt-4 ${s.cls}`}>
                        <span className={`font-display leading-none ${s.size}`}>{s.value}%</span>
                        <span className="font-mono text-[13px] font-bold tracking-widest">{s.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScaledStage>
        </div>
      </div>
      <span aria-hidden className="absolute bottom-6 right-10 hidden font-mono text-xs tracking-widest text-forest lg:block">MOVE YOUR MOUSE · THE PHONE FOLLOWS</span>
    </section>
  );
}
