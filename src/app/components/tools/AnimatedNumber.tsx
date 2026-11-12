"use client";

import { useEffect, useRef, useState } from "react";

// Counts from the old figure to the new one over 0.4 s, like the app's
// CountUpMoney. Snaps straight to the value when reduced motion is on.
export default function AnimatedNumber({ value, format }: { value: number; format: (n: number) => string }) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);

  useEffect(() => {
    const start = from.current;
    if (start === value) return;
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 400;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const k = duration ? Math.min(1, (t - t0) / duration) : 1;
      const eased = 1 - Math.pow(1 - k, 3);
      const n = start + (value - start) * eased;
      from.current = n;
      setShown(n);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return <>{format(shown)}</>;
}
