import Link from "next/link";
import { Search, ClipboardList, Boxes, MapPinned, Handshake, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  { icon: Search, title: "China Product Sourcing", desc: "We identify reliable manufacturers and suppliers according to your business requirements." },
  { icon: ClipboardList, title: "Import Management", desc: "End-to-end import support from supplier selection to shipment and customs coordination." },
  { icon: Boxes, title: "Shipment Consolidation", desc: "We combine products from multiple suppliers into one shipment to cut freight costs." },
  { icon: MapPinned, title: "Bulk Supply Across India", desc: "Bulk supply to wholesalers, distributors, retailers, supermarkets and online sellers." },
  { icon: Handshake, title: "Vendor Development", desc: "Need a specific product? We locate the right factory and negotiate the best pricing." },
];

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How We Help</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">Our Services</h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-coral" />
          <p className="mt-6 text-navy-dark/70">
            One partner for the full journey &mdash; from finding the right factory in China to
            delivering bulk stock to your doorstep in India.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 50}>
              <div className="group h-full rounded-lg border border-line bg-white p-7 transition-colors hover:border-coral">
                <span className="grid h-12 w-12 place-items-center rounded-md bg-blush text-coral transition-colors group-hover:bg-coral group-hover:text-white">
                  <s.icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-dark/70">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
          >
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
