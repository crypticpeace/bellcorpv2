import Link from "next/link";
import { Search, HandCoins, ClipboardList, Ship, DoorOpen, ShieldCheck, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  { icon: Search, title: "China Product Sourcing", desc: "You choose the product; we source it from the right manufacturer, whole sellers and traders across China as per your requirement." },
  { icon: HandCoins, title: "Best Price Negotiation", desc: "We negotiate the best price for your selection and help you reduce your buying cost." },
  { icon: ClipboardList, title: "End-to-End Shipment Management", desc: "Your end-to-end shipment manager \u2014 from your supplier in China to your door in India." },
  { icon: Ship, title: "By Air & Sea, LCL & Full Loads", desc: "From small shipments (LCL) to full containers, by air and by sea \u2014 whatever your order needs." },
  { icon: DoorOpen, title: "Door-to-Door Delivery", desc: "Complete door-to-door service \u2014 we collect from your supplier and deliver your stock to you." },
  { icon: ShieldCheck, title: "Customs & Compliance Guidance", desc: "Complete guidance on customs and shipment \u2014 backed by an in-house lawyer, top CHA, warehouse and GST consultant." },
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
            One partner for the full journey &mdash; we simplify and reduce your cost, from your
            product selection in China to delivery at your door in India.
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
