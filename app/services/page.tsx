import type { Metadata } from "next";
import Link from "next/link";
import {
  Search, HandCoins, ClipboardList, Ship, DoorOpen, ShieldCheck,
  Gavel, Warehouse, Calculator, MessageSquare, Package, Truck, ArrowRight, Check,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services | Bellcorp International — China to India Import",
  description:
    "China product sourcing, best-price negotiation, end-to-end shipment management, LCL & full loads by air and sea, door-to-door delivery, and complete customs guidance from China to India.",
};

const SERVICES = [
  {
    icon: Search,
    title: "China Product Sourcing",
    desc: "You choose the product; we source it from the right manufacturer anywhere across China as per your requirement.",
    points: ["Sourcing all over China", "Right manufacturer for your product", "As per your specification"],
  },
  {
    icon: HandCoins,
    title: "Best Price Negotiation",
    desc: "We negotiate the best price for your selection and help you reduce your buying cost.",
    points: ["Best price for your selection", "Reduce your buying cost", "Competitive as per requirement"],
  },
  {
    icon: ClipboardList,
    title: "End-to-End Shipment Management",
    desc: "Your end-to-end shipment manager \u2014 from your supplier in China all the way to your door in India.",
    points: ["From supplier to your door", "One point of contact", "We simplify your shipment"],
  },
  {
    icon: Ship,
    title: "By Air & Sea \u00B7 LCL & Full Loads",
    desc: "From small shipments (LCL) to full containers, by air and by sea \u2014 whatever your order needs.",
    points: ["Small shipment service (LCL)", "Full container loads", "By air and by sea"],
  },
  {
    icon: DoorOpen,
    title: "Door-to-Door Delivery",
    desc: "Complete door-to-door service \u2014 we collect from your supplier and deliver your stock to you.",
    points: ["Pickup from your supplier", "Delivered to your door", "Your stock, handled end to end"],
  },
  {
    icon: ShieldCheck,
    title: "Customs & Compliance Guidance",
    desc: "Complete guidance and solutions on customs and shipment, from China to India \u2014 backed by our in-house team.",
    points: ["In-house lawyer & top CHA", "GST consultant", "Own warehouse"],
  },
];

const RESOURCES = [
  { icon: Gavel, label: "In-House Lawyer" },
  { icon: ShieldCheck, label: "Top CHA (Customs House Agent)" },
  { icon: Warehouse, label: "Own Warehouse" },
  { icon: Calculator, label: "GST Consultant" },
];

const PROCESS = [
  { icon: MessageSquare, title: "Share Your Requirement", desc: "Tell us the product and your target." },
  { icon: Search, title: "Sourcing Across China", desc: "We find the right manufacturer for you." },
  { icon: HandCoins, title: "Best Price & Quotation", desc: "Transparent best price for your sign-off." },
  { icon: ShieldCheck, title: "Quality & Compliance", desc: "Checks plus customs guidance." },
  { icon: Package, title: "Shipment Management", desc: "LCL or full load, by air or sea." },
  { icon: Ship, title: "Shipping & Customs", desc: "Shipping booked and customs cleared." },
  { icon: Truck, title: "Door-to-Door Delivery", desc: "Your stock delivered to your door." },
];

export default function ServicesPage() {
  return (
    <main>
      {/* banner */}
      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-coral-light">Home</Link>
            <span>/</span>
            <span className="text-coral-light">Services</span>
          </nav>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Our Services</h1>
          <div className="mt-4 h-1 w-16 bg-coral" />
          <p className="mt-5 max-w-xl text-white/75">
            We are your business partner from China to India. You choose the product &mdash; we give
            you the best price, manage your shipment end to end, and deliver door to door.
          </p>
        </div>
      </section>

      {/* services detail */}
      <section className="section bg-white">
        <div className="container grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 80}>
              <div className="group flex h-full flex-col rounded-lg border border-line bg-white p-7 transition-colors hover:border-coral">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-blush text-coral transition-colors group-hover:bg-coral group-hover:text-white">
                    <s.icon size={22} strokeWidth={1.75} />
                  </span>
                  <h2 className="font-display text-lg font-semibold text-navy">{s.title}</h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-navy-dark/75">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-navy">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-sm bg-coral text-white">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* in-house team band */}
      <section className="bg-navy py-16 text-white">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-coral-light">
              Complete Solutions, In-House
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              Everything Your Import Needs, Under One Roof
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-coral" />
            <p className="mt-5 text-white/70">
              We give you proper guidance and complete solutions from China to India &mdash; supported
              by our own specialists.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 lg:grid-cols-4">
            {RESOURCES.map((r) => (
              <div key={r.label} className="flex flex-col items-center gap-3 bg-navy px-4 py-8 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-md bg-white/10 text-coral-light">
                  <r.icon size={22} strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium text-white/85">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="section bg-blush">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How We Work</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              Our China-to-India Process
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-coral" />
            <p className="mt-6 text-navy-dark/70">
              A simple, transparent workflow from your first enquiry to door-to-door delivery.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.title} delay={(i % 4) * 60}>
                <div className="h-full rounded-lg border border-line bg-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-md bg-blush text-coral">
                      <step.icon size={20} strokeWidth={1.75} />
                    </span>
                    <span className="font-display text-3xl font-bold text-coral/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-navy-dark/70">{step.desc}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={180}>
              <Link
                href="/#contact"
                className="flex h-full min-h-[150px] flex-col items-center justify-center gap-2 rounded-lg bg-coral p-6 text-center font-semibold text-white transition-colors hover:bg-coral-dark"
              >
                <DoorOpen size={26} />
                Start Your Order
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
