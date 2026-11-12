"use client";

import { useEffect, useId, useRef, useState } from "react";

// A number field for the calculators: type it, nudge it with − and +
// (motion-prompt #063 stepper: the number pops on each press), or drag the
// slider underneath, which shows the value in a bubble while it's held
// (#062 range slider, one handle). The text is the source of truth, so
// typing "6,500" keeps its comma.

const toNumber = (s: string) => Number(s.replace(/,/g, "")) || 0;
const withCommas = (n: number) => n.toLocaleString("en-GB");

export default function NumberSlider({
  label,
  text,
  onText,
  min = 0,
  max,
  step,
  nudge,
  prefix = "",
  suffix = "",
  placeholder,
  marks = [],
  describedBy,
}: {
  label: string;
  text: string;
  onText: (t: string) => void;
  min?: number;
  max: number;
  step: number;
  /** How much − and + change the value. */
  nudge: number;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
  marks?: { at: number; label: string }[];
  describedBy?: string;
}) {
  const id = useId();
  const value = toNumber(text);
  const clamped = Math.min(max, Math.max(min, value));
  const fill = ((clamped - min) / (max - min)) * 100;
  const [held, setHeld] = useState(false);
  const [pop, setPop] = useState(0);
  const numRef = useRef<HTMLInputElement>(null);

  // Re-trigger the pop animation on every press, even two in a row.
  useEffect(() => {
    const el = numRef.current;
    if (!pop || !el) return;
    el.classList.remove("num-pop");
    void el.offsetWidth;
    el.classList.add("num-pop");
  }, [pop]);

  const set = (n: number) => onText(n > 0 ? withCommas(n) : "");
  const bump = (dir: 1 | -1) => {
    set(Math.max(0, value + dir * nudge));
    setPop((p) => p + 1);
  };

  const btn =
    "grid h-12 w-12 flex-none cursor-pointer place-items-center rounded-xl border border-forest/15 bg-white text-xl font-bold text-forest transition-colors hover:border-teal hover:bg-mint active:scale-95 disabled:cursor-default disabled:opacity-40";

  return (
    <div className="block">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-forest">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <button type="button" className={btn} onClick={() => bump(-1)} disabled={value <= 0} aria-label={`Take off ${prefix}${withCommas(nudge)}${suffix}`}>
          −
        </button>
        <input
          ref={numRef}
          id={id}
          className="w-full min-w-0 rounded-xl border border-forest/15 bg-white px-4 py-3 text-center text-base font-semibold text-charcoal focus:outline-none focus:ring-2 focus:ring-teal/40"
          inputMode="numeric"
          placeholder={placeholder}
          value={text}
          onChange={(e) => onText(e.target.value.replace(/[^\d,]/g, ""))}
          aria-describedby={describedBy}
        />
        <button type="button" className={btn} onClick={() => bump(1)} aria-label={`Add ${prefix}${withCommas(nudge)}${suffix}`}>
          +
        </button>
      </div>

      <div className="relative mt-4 px-0.5 pb-5">
        <input
          type="range"
          className="range"
          min={min}
          max={max}
          step={step}
          value={clamped}
          onChange={(e) => set(Number(e.target.value))}
          onPointerDown={() => setHeld(true)}
          onPointerUp={() => setHeld(false)}
          onPointerCancel={() => setHeld(false)}
          onBlur={() => setHeld(false)}
          aria-label={`${label} slider`}
          aria-valuetext={`${prefix}${withCommas(clamped)}${suffix}`}
          style={{ "--fill": `${fill}%` } as React.CSSProperties}
        />
        {held && (
          <span
            aria-hidden
            className="note-pop pointer-events-none absolute -top-8 -translate-x-1/2 whitespace-nowrap rounded-lg bg-forest px-2.5 py-1 font-mono text-xs font-bold text-warm"
            style={{ left: `calc(${fill}% + ${12 - fill * 0.24}px)` }}
          >
            {prefix}
            {withCommas(clamped)}
            {suffix}
          </span>
        )}
        {marks.map((m) => {
          const at = ((m.at - min) / (max - min)) * 100;
          return (
            <span key={m.at} aria-hidden className="pointer-events-none absolute top-[26px] -translate-x-1/2 text-center" style={{ left: `calc(${at}% + ${12 - at * 0.24}px)` }}>
              <span className="mx-auto block h-2 w-px bg-forest/40" />
              <span className="block whitespace-nowrap font-mono text-[10px] tracking-wide text-smoke">{m.label}</span>
            </span>
          );
        })}
        <span aria-hidden className="absolute bottom-0 left-0 font-mono text-[10px] text-smoke">
          {prefix}
          {withCommas(min)}
        </span>
        <span aria-hidden className="absolute bottom-0 right-0 font-mono text-[10px] text-smoke">
          {prefix}
          {withCommas(max)}
          {suffix}+
        </span>
      </div>
    </div>
  );
}
