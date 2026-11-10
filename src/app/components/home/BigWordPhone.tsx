"use client";

import { useEffect, useRef, useState } from "react";
import ScaledStage from "./ScaledStage";

// The big-word section: a giant SORTED flashes in letter by letter, a mint
// card rises, and the phone inside it rises more slowly (depth), playing
// Hedgie's full-body loop. Receipt scraps pop in around it and drift.

const WORD = ["S", "O", "R", "T", "E", "D"];
const FLASH_DELAYS = [0.9, 1.3, 0.6, 0.75, 1.1, 1.0]; // seconds, out of order on purpose
const SCREEN_BG = "#CBE0D0"; // sampled from the video's background

const SCRAPS = [
  { lines: ["SCREWFIX · £24.99", "READ FOR YOU"], pos: "left-[130px] top-[690px]", rot: "-6deg", delay: 1.75, tone: "bg-paper text-forest" },
  { lines: ["PUT ASIDE £1,240", "TAX ESTIMATE · EXAMPLE"], pos: "left-[860px] top-[440px]", rot: "5deg", delay: 1.85, tone: "bg-forest text-warm" },
  { lines: ["PAID BY CARD", "INV-001042"], pos: "left-[930px] top-[610px]", rot: "-3deg", delay: 1.95, tone: "bg-paper text-forest" },
  { lines: ["55P A MILE", "HMRC RATE 2026/27"], pos: "left-[245px] top-[800px]", rot: "4deg", delay: 2.05, tone: "bg-sage text-forest" },
];

function useLoopVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // No autoPlay on the video, so it never moves for people who've asked
    // for reduced motion; they see the poster. Everyone else gets play() once
    // the page is up. Muted + playsInline let iOS Safari start it without a tap.
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) v.pause();
      else {
        v.muted = true;
        v.play().catch(() => {});
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return ref;
}

function Phone({ width }: { width: number }) {
  const video = useLoopVideo();
  const height = Math.round(width * 2.09);
  return (
    <div className="relative overflow-hidden rounded-[52px] border-[10px] border-night shadow-[0_30px_60px_rgb(15_26_30/.3)]" style={{ width, height, background: SCREEN_BG }}>
      <div aria-hidden className="absolute left-1/2 top-3 z-10 h-[30px] w-[104px] -translate-x-1/2 rounded-full bg-[#0B0F10]" />
      <div className="absolute inset-x-5 top-14 flex justify-between font-mono text-[10px] tracking-[.08em] text-forest">
        <span>( RECEIPTS ) +</span>
        <span>( SORTED )</span>
      </div>
      <p aria-hidden className="absolute inset-x-0 top-[78px] text-center font-display text-[76px] leading-[.85] text-forest">SORTED</p>
      <video
        ref={video}
        className="absolute inset-x-0 bottom-[70px] w-full"
        style={{ maskImage: "linear-gradient(to bottom, transparent 0%, #000 18%, #000 88%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 18%, #000 88%, transparent 100%)" }}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video/hedgie-phone-poster.jpg"
        aria-hidden
      >
        <source src="/video/hedgie-phone.webm" type="video/webm" />
        <source src="/video/hedgie-phone.mp4" type="video/mp4" />
      </video>
      <a href="#download" className="absolute inset-x-5 bottom-6 flex h-12 items-center justify-center rounded-2xl bg-amber font-sans text-lg font-black text-night">
        Get started
      </a>
    </div>
  );
}

export default function BigWordPhone() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [p, setP] = useState(0); // 0 = section just entering, 1 = top reached

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
      else if (e.intersectionRatio === 0) setInView(false);
    }, { threshold: [0, 0.3] });
    io.observe(el);

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const next = Math.min(1, Math.max(0, 1 - r.top / window.innerHeight));
      setP((prev) => (Math.abs(prev - next) > 0.003 ? next : prev));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // The card rises 260px over the scroll in; the phone only 60% of that, so
  // it seems to sit deeper.
  const cardY = (1 - p) * 260;
  const phoneY = (1 - p) * 156;

  return (
    <section ref={ref} aria-label="Receipts, mileage and income in one place" className={`bg-cloud ${inView ? "is-in" : ""}`}>
      {/* Desktop */}
      <div className="hidden lg:block">
        <ScaledStage width={1280} height={900}>
          <div className="relative h-[900px] w-[1280px] overflow-hidden">
            <div aria-hidden className="absolute inset-x-5 top-6 flex justify-between font-display text-[390px] leading-[.8] text-forest">
              {WORD.map((l, i) => (
                <span key={i} className="letter-flash" style={{ animationDelay: `${FLASH_DELAYS[i]}s` }}>{l}</span>
              ))}
            </div>

            {/* Card */}
            <div className="absolute inset-x-2.5 bottom-2.5 h-[470px] rounded-[28px] bg-mint" style={{ transform: `translateY(${cardY}px)` }}>
              <span aria-hidden className="absolute bottom-6 left-3.5 top-6 flex w-4 items-center justify-center">
                <span className="-rotate-90 whitespace-nowrap font-mono text-[11px] tracking-widest text-forest">( RECEIPTS ) + ( MILEAGE ) + ( INCOME )</span>
              </span>
              <span aria-hidden className="absolute bottom-6 right-3.5 top-6 flex w-4 items-center justify-center">
                <span className="rotate-90 whitespace-nowrap font-mono text-[11px] tracking-widest text-forest">( TAX ESTIMATE ) + ( ALL YEAR )</span>
              </span>
              <p className="absolute left-32 top-14 w-[310px] font-mono text-[13px] uppercase leading-normal tracking-wide text-forest">
                + ( Snap a photo. Sorted reads the shop, date and amount, and picks a category )
              </p>
              <a href="#download" className="absolute left-32 top-[150px] flex h-[52px] items-center rounded-[14px] bg-forest px-7 font-sans text-base font-black text-warm hover:bg-forest/90">
                Download the app
              </a>
              <p className="absolute bottom-14 right-28 w-[330px] font-mono text-[13px] uppercase leading-normal tracking-wide text-forest">
                ( Receipts, invoices, mileage and a tax estimate in one phone app )
              </p>
            </div>

            {/* Scraps where the reference had shapes */}
            {SCRAPS.map((s) => (
              <div key={s.lines[0]} className={`absolute ${s.pos}`} style={{ transform: `translateY(${cardY}px)` }}>
                <div className={inView ? "pop-in-soft" : "opacity-0"} style={{ animationDelay: `${s.delay}s` }}>
                <div className="animate-float-slow">
                  <div className="drop-shadow-[0_8px_14px_rgb(15_26_30/.14)]">
                    <div className={`torn px-4 py-3 font-mono text-xs leading-normal tracking-wide ${s.tone}`}>
                      <div className="font-bold">{s.lines[0]}</div>
                      <div>{s.lines[1]}</div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            ))}

            {/* Phone */}
            <div className="absolute left-[475px] top-[190px]" style={{ transform: `translateY(${phoneY}px)` }}>
              <Phone width={330} />
            </div>
          </div>
        </ScaledStage>
      </div>

      {/* Phones and tablets */}
      <div className="flex flex-col items-center gap-8 px-5 py-16 lg:hidden">
        <div aria-hidden className="flex w-full justify-between font-display text-[26vw] leading-[.8] text-forest">
          {WORD.map((l, i) => (
            <span key={i} className="letter-flash" style={{ animationDelay: `${FLASH_DELAYS[i]}s` }}>{l}</span>
          ))}
        </div>
        <div className="flex w-full flex-col items-center gap-6 rounded-[28px] bg-mint px-5 py-10">
          <Phone width={260} />
          <p className="max-w-sm text-center font-mono text-[13px] uppercase leading-normal tracking-wide text-forest">
            ( Receipts, invoices, mileage and a tax estimate in one phone app )
          </p>
        </div>
      </div>
    </section>
  );
}
