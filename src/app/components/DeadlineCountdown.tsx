"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Countdown to the next Self Assessment deadline: 11:59pm on 31 January.
// January is GMT, so UK time and UTC match. Each digit that changes rolls in
// from below (motion-prompt #164). The server renders dashes; the numbers
// appear once the browser knows the time, so there's no hydration mismatch.

export function nextDeadline(now: Date) {
  const y = now.getUTCFullYear();
  const thisYear = Date.UTC(y, 0, 31, 23, 59, 59);
  const year = now.getTime() <= thisYear ? y : y + 1;
  return {
    at: new Date(Date.UTC(year, 0, 31, 23, 59, 59)),
    year,
    taxYear: `${year - 2}/${String(year - 1).slice(2)}`,
  };
}

function split(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
  };
}

function Digits({ value, pad = 2, unit }: { value: number | null; pad?: number; unit: string }) {
  const text = value === null ? "-".repeat(pad) : String(value).padStart(pad, "0");
  return (
    <div className="flex flex-col items-start gap-1">
      <span className="flex font-display leading-none tabular-nums">
        {text.split("").map((d, i) => (
          // Keyed by place and digit, so only a digit that changes remounts and rolls.
          <span key={`${text.length - i}-${d}`} className="digit-roll inline-block overflow-hidden">
            <span className="inline-block">{d}</span>
          </span>
        ))}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[.14em] opacity-75">{unit}</span>
    </div>
  );
}

export default function DeadlineCountdown({ variant = "band" }: { variant?: "band" | "card" }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const d = nextDeadline(now ?? new Date(Date.UTC(2026, 10, 1)));
  const t = now ? split(d.at.getTime() - now.getTime()) : null;
  const dateText = `31 January ${d.year}`;

  const clock = (
    <div aria-hidden className="flex items-end gap-5 sm:gap-7">
      <Digits value={t?.days ?? null} pad={t && t.days > 99 ? 3 : 2} unit="days" />
      <span className="pb-6 font-display text-3xl opacity-40">:</span>
      <Digits value={t?.hours ?? null} unit="hours" />
      <span className="pb-6 font-display text-3xl opacity-40">:</span>
      <Digits value={t?.mins ?? null} unit="mins" />
      <span className="hidden pb-6 font-display text-3xl opacity-40 sm:inline">:</span>
      <span className="hidden sm:block">
        <Digits value={t?.secs ?? null} unit="secs" />
      </span>
    </div>
  );

  if (variant === "card") {
    return (
      <div className="mb-10 rounded-2xl bg-forest p-6 text-warm md:p-7">
        <p className="font-mono text-xs uppercase tracking-[.14em] text-sage">( Time left to file and pay )</p>
        <div className="mt-3 text-5xl md:text-6xl">{clock}</div>
        <p className="mt-4 text-sm text-sage">
          Until 11:59pm on <time dateTime={d.at.toISOString()}>{dateText}</time>, for the {d.taxYear} tax year.
        </p>
      </div>
    );
  }

  return (
    <section aria-labelledby="deadline-countdown" className="bg-forest text-warm">
      <div className="mx-auto flex max-w-[1152px] flex-col gap-8 px-5 py-14 md:flex-row md:items-end md:justify-between md:py-16">
        <div className="flex max-w-md flex-col gap-3">
          <span className="font-mono text-xs tracking-[.12em] text-sage">( SELF ASSESSMENT {d.taxYear} )</span>
          <h2 id="deadline-countdown" className="font-display text-4xl uppercase leading-[.95] md:text-5xl">
            Tax return and payment due <time dateTime={d.at.toISOString()}>{dateText}</time>
          </h2>
          <Link href="/guides/self-assessment-deadline" className="w-max font-mono text-xs tracking-wider text-gold underline underline-offset-4 hover:text-warm">
            WHAT TO DO THIS WEEK →
          </Link>
        </div>
        <div className="text-6xl text-warm md:text-[88px]">{clock}</div>
      </div>
    </section>
  );
}
