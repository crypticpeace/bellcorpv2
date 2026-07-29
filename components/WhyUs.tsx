import { Award, Globe, DoorOpen, Boxes, Plane, Gavel, Calculator, Warehouse } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  { icon: Award, label: "25+ Years of Experience" },
  { icon: Globe, label: "Across China \u2014 We Help Everywhere" },
  { icon: DoorOpen, label: "Door-to-Door Service" },
  { icon: Boxes, label: "Small Shipments (LCL) & Full Loads" },
  { icon: Plane, label: "By Air & Sea" },
  { icon: Gavel, label: "In-House Lawyer & Top CHA" },
  { icon: Calculator, label: "GST Consultant" },
  { icon: Warehouse, label: "Own Warehouse" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-navy py-20 text-white md:py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-coral-light">
            The Bellcorp Advantage
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Why Choose Bellcorp International?
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-coral" />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 sm:grid-cols-3 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.label} delay={(i % 4) * 50}>
              <div className="flex h-full flex-col items-center gap-3 bg-navy px-3 py-7 text-center transition-colors hover:bg-navy-light">
                <it.icon size={22} strokeWidth={1.75} className="text-coral-light" />
                <span className="text-xs font-medium leading-snug text-white/80">{it.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
