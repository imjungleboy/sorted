"use client";

import { useEffect, useRef, useState } from "react";

// Lays out a fixed-size design (e.g. 1280×800) and scales it down to fit its
// container, so the approved mockups keep their exact composition on any
// desktop width. "width" fits the container's width; "contain" fits both
// width and height (for a stage inside a sticky, full-height box).
export default function ScaledStage({
  width,
  height,
  fit = "width",
  maxScale = 1,
  className = "",
  children,
}: {
  width: number;
  height: number;
  fit?: "width" | "contain";
  maxScale?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth / width;
      const h = fit === "contain" ? el.clientHeight / height : Infinity;
      setScale(Math.min(maxScale, w, h));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width, height, fit, maxScale]);

  return (
    <div
      ref={ref}
      className={`relative w-full ${fit === "contain" ? "h-full" : ""} ${className}`}
      style={fit === "width" ? { height: height * scale } : undefined}
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width,
          height,
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
