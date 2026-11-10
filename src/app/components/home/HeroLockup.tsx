"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// The hero: four short lines in a tight lockup, with Hedgie's looping video
// sitting in the lockup like a word. The letters type on, a thin line draws
// out to each edge carrying a button, the brackets pop, then only Hedgie keeps
// moving. Change the words in LINES; everything else follows.

const APP_STORE_URL = "https://apps.apple.com/gb/app/sorted-self-employed-tax/id6761042935";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=app.mysorted.sorted";

const LINES = { first: "RECEIPTS", second: "IN, TAX", last: "SORTED." };
const LETTER_MS = 55;
const TICKER = "( RECEIPTS )   ( MILEAGE )   +   ( INCOME )   ( INVOICES )   +   ( TAX ESTIMATE )   +   ";

// Hedgie's tile colour is sampled from the video's own background, so the
// tile and the clip read as one surface.
const TILE_BG = "#C0DED1";

function TypeOn({ text, start, className = "" }: { text: string; start: number; className?: string }) {
  return (
    <span className={`flex ${className}`} aria-hidden>
      {[...text].map((ch, i) => (
        <span key={i} className="letter-in whitespace-pre" style={{ animationDelay: `${start + i * LETTER_MS}ms` }}>
          {ch}
        </span>
      ))}
    </span>
  );
}

function Ticker({ reverse = false }: { reverse?: boolean }) {
  return (
    <div aria-hidden className="overflow-hidden py-3">
      <div className={`${reverse ? "ticker-reverse" : "ticker"} flex w-max whitespace-pre font-mono text-xs tracking-[.06em] text-forest`}>
        <span>{TICKER.repeat(6)}</span>
        <span>{TICKER.repeat(6)}</span>
      </div>
    </div>
  );
}

export default function HeroLockup() {
  const video = useRef<HTMLVideoElement>(null);

  // Respect reduced motion: show the still frame instead of the loop.
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) v.pause();
      else v.play().catch(() => {});
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const t1 = 400;
  const t2 = t1 + LINES.first.length * LETTER_MS + 80;
  const tPop = t2 + LINES.second.length * LETTER_MS + 60;
  const t4 = tPop + 220;
  const tEnd = t4 + LINES.last.length * LETTER_MS;

  return (
    <section aria-label="Sorted" className="relative overflow-hidden bg-cloud">
      <Ticker />

      <div className="flex min-h-[calc(100svh-5rem-5.5rem)] flex-col items-center justify-center gap-10 px-5 py-10">
        {/* The lockup. Screen readers get the sentence once, from the sr-only text. */}
        <div
          className="relative flex flex-col items-center font-display leading-[.9] text-forest"
          style={{ "--fs": "clamp(56px, 10.5vw, 140px)", fontSize: "var(--fs)" } as React.CSSProperties}
        >
          <span className="sr-only">Receipts in, tax sorted.</span>

          {/* Line 1, with a line out to the right edge carrying Get Sorted */}
          <div className="relative">
            <span aria-hidden className="fade-up absolute right-[calc(100%+20px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap font-mono text-xs leading-snug tracking-[.08em] text-charcoal lg:block" style={{ animationDelay: `${tEnd}ms` }}>
              ( SNAP IT )
            </span>
            <TypeOn text={LINES.first} start={t1} />
            <span aria-hidden className="draw-x absolute left-[calc(100%+14px)] top-1/2 hidden h-0.5 w-[100vw] origin-left bg-forest lg:block" style={{ animationDelay: `${t2 - 60}ms` }} />
            <a
              href="#download"
              className="pop-in-soft absolute left-[calc(100%+min(14vw,220px))] top-1/2 hidden h-14 -translate-y-1/2 items-center whitespace-nowrap rounded-2xl bg-amber px-8 font-sans text-base font-black leading-none text-night hover:bg-amber/90 lg:flex"
              style={{ animationDelay: `${t2 + 180}ms` }}
            >
              Get Sorted
            </a>
          </div>

          {/* Line 2, the one accent colour */}
          <TypeOn text={LINES.second} start={t2} className="text-coral" />

          {/* Line 3: *( Hedgie ) */}
          <div className="relative my-[.04em] flex items-center gap-[.08em]">
            <span aria-hidden className="pop-in-soft self-start text-[.7em] leading-[.8]" style={{ animationDelay: `${tPop + 100}ms` }}>*</span>
            <span aria-hidden className="pop-in-soft text-[1.3em] leading-[.8]" style={{ animationDelay: `${tPop}ms` }}>(</span>
            <div
              className="pop-in-soft relative overflow-hidden rounded-[.16em]"
              style={{ width: "calc(var(--fs) * 1.95)", height: "calc(var(--fs) * 1.3)", background: TILE_BG, animationDelay: `${t1 - 200}ms` }}
            >
              <video
                ref={video}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/video/hedgie-tile-poster.jpg"
                aria-hidden
              >
                <source src="/video/hedgie-tile.webm" type="video/webm" />
                <source src="/video/hedgie-tile.mp4" type="video/mp4" />
              </video>
            </div>
            <span aria-hidden className="pop-in-soft text-[1.3em] leading-[.8]" style={{ animationDelay: `${tPop + 50}ms` }}>)</span>
            <span aria-hidden className="fade-up absolute left-[calc(100%+20px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap font-mono text-xs leading-snug tracking-[.08em] text-charcoal lg:block" style={{ animationDelay: `${tEnd}ms` }}>
              ( NOW LIVE ON
              <br />
              iOS + ANDROID )
            </span>
          </div>

          {/* Line 4, with a line in from the left edge carrying Sign in */}
          <div className="relative">
            <span aria-hidden className="draw-x absolute right-[calc(100%+14px)] top-1/2 hidden h-0.5 w-[100vw] origin-right bg-forest lg:block" style={{ animationDelay: `${t4}ms` }} />
            <a
              href="https://app.mysorted.app"
              target="_blank"
              rel="noopener"
              className="pop-in-soft absolute right-[calc(100%+min(16vw,260px))] top-1/2 hidden h-14 -translate-y-1/2 items-center whitespace-nowrap rounded-2xl bg-forest px-8 font-sans text-base font-black leading-none text-warm hover:bg-forest/90 lg:flex"
              style={{ animationDelay: `${t4 + 250}ms` }}
            >
              Sign in
            </a>
            <TypeOn text={LINES.last} start={t4} />
          </div>
        </div>

        {/* The real headline (for search), what Sorted does, and the stores.
            Shown almost at once; it doesn't wait for the lockup to finish. */}
        <div className="fade-up flex w-full max-w-[1100px] flex-col items-center gap-5 text-center md:flex-row md:items-end md:justify-between md:text-left" style={{ animationDelay: "150ms" }}>
          <div className="flex max-w-[520px] flex-col gap-2">
            <h1 className="font-sans text-lg font-extrabold leading-snug text-forest md:text-xl">
              Bookkeeping for sole traders that actually feels sorted.
            </h1>
            <p className="font-mono text-xs leading-relaxed tracking-wide text-smoke">
              Scan receipts → log income and mileage → see your tax → year-end pack for your accountant.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 md:items-end">
            <div className="flex items-center gap-3">
              <a href={APP_STORE_URL} target="_blank" rel="noopener" aria-label="Download Sorted on the App Store" className="block transition-transform hover:scale-105">
                <Image src="/images/app-store-badge.svg" alt="Download on the App Store" width={120} height={40} unoptimized loading="eager" className="h-11 w-auto" />
              </a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener" aria-label="Get Sorted on Google Play" className="block transition-transform hover:scale-105">
                <Image src="/images/google-play-badge.png" alt="Get it on Google Play" width={646} height={250} unoptimized loading="eager" className="-mx-1.5 h-[54px] w-auto" />
              </a>
            </div>
            <a href="https://app.mysorted.app" target="_blank" rel="noopener" className="text-sm font-semibold text-forest underline-offset-2 hover:underline lg:hidden">
              Already using Sorted? Sign in →
            </a>
          </div>
        </div>
      </div>

      <Ticker reverse />
    </section>
  );
}
