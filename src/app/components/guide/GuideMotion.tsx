"use client";

import { useEffect, useRef, useState } from "react";

// Reading aids for guide pages, all read from the rendered article so the
// guides themselves stay plain server JSX:
// - GuideEffects: a thin reading bar at the top (motion-prompt #079) and the
//   highlighter stroke under <mark> figures as they scroll in (#080).
// - GuideToc: "On this page", built from the article's h2s, with the section
//   being read highlighted (#150 scrollspy).

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

function guideHeadings(): HTMLHeadingElement[] {
  const hs = Array.from(document.querySelectorAll<HTMLHeadingElement>("[data-guide] .guide-body h2"));
  for (const h of hs) if (!h.id) h.id = slug(h.textContent ?? "");
  return hs;
}

export function GuideEffects() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>("[data-guide]");
    if (!article) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = article.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const marks = article.querySelectorAll("mark");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-on");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    marks.forEach((m) => io.observe(m));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
      <div ref={bar} className="h-full origin-left bg-teal" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}

type Item = { id: string; text: string };

export function GuideToc({ variant }: { variant: "side" | "inline" }) {
  const [items, setItems] = useState<Item[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const hs = guideHeadings();
    const first = requestAnimationFrame(() => setItems(hs.map((h) => ({ id: h.id, text: h.textContent ?? "" }))));
    let raf = 0;
    const update = () => {
      raf = 0;
      // The section being read is the last heading above a line 30% down the screen.
      const line = window.innerHeight * 0.3;
      let current: string | null = null;
      for (const h of hs) if (h.getBoundingClientRect().top < line) current = h.id;
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(first);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (items.length < 3) return null;

  const list = (
    <ol className="flex flex-col gap-0.5 border-l border-forest/10">
      {items.map((it) => {
        const on = it.id === active;
        return (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              aria-current={on ? "location" : undefined}
              className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors duration-[250ms] ${
                on ? "border-teal font-semibold text-forest" : "border-transparent text-smoke hover:text-teal"
              }`}
            >
              {it.text}
            </a>
          </li>
        );
      })}
    </ol>
  );

  if (variant === "side") {
    return (
      <nav aria-label="On this page" className="flex flex-col gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[.14em] text-teal">( On this page )</span>
        {list}
      </nav>
    );
  }

  return (
    <details className="group mb-10 rounded-2xl border border-forest/10 bg-white px-5 py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between font-mono text-xs uppercase tracking-[.14em] text-teal">
        On this page
        <span aria-hidden className="transition-transform duration-300 group-open:rotate-180">▾</span>
      </summary>
      <nav aria-label="On this page" className="mt-3">
        {list}
      </nav>
    </details>
  );
}
