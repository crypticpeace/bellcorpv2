"use client";

import { useEffect, useRef, useState } from "react";
import { COMPANY } from "@/lib/utils";

/**
 * Stats band with count-up animation.
 * Numbers animate once, when the band first scrolls into view.
 * To edit a figure, change `value` / `suffix` below.
 */
const STATS = [
  { value: Number(COMPANY.since), suffix: "", label: "Year of Establishment" },
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 1000, suffix: "+", label: "Successful Shipments" },
  { value: 100, suffix: "+", label: "Product Categories" },
];

const DURATION = 1800; // ms

function Counter({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;

    // Respect reduced-motion: show the final number immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / DURATION, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic — fast start, soft landing
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStart(true);
            io.unobserve(e.target); // animate once only
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-coral-dark text-white">
      <div ref={ref} className="container grid grid-cols-2 gap-y-8 py-12 sm:grid-cols-3 lg:grid-cols-5">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl font-bold leading-none md:text-4xl">
              <Counter value={s.value} suffix={s.suffix} start={start} />
            </div>
            <div className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-white/80">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
