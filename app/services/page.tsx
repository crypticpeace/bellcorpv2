import type { Metadata } from "next";
import Link from "next/link";
import {
  Search, ClipboardList, Boxes, MapPinned, Handshake,
  FileText, ShieldCheck, Truck, Ship, PackageCheck, MessageSquare, ArrowRight, Check,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services | Bellcorp International — China Sourcing & Import",
  description:
    "China product sourcing, import management, shipment consolidation, bulk supply across India and vendor development — Bellcorp International's end-to-end import services.",
};

const SERVICES = [
  {
    icon: Search,
    title: "China Product Sourcing",
    desc: "We identify reliable manufacturers and suppliers in China that match your exact product, quality and budget requirements.",
    points: ["Supplier identification & verification", "Sample coordination", "Best factory pricing"],
  },
  {
    icon: ClipboardList,
    title: "Import Management",
    desc: "Complete, end-to-end import support — from supplier selection all the way to shipment and customs coordination.",
    points: ["Documentation handling", "Customs coordination", "Logistics management"],
  },
  {
    icon: Boxes,
    title: "Shipment Consolidation",
    desc: "We combine products from multiple suppliers into a single shipment, reducing freight costs and simplifying your logistics.",
    points: ["Multi-supplier pickup", "Warehouse consolidation", "Optimised container loading"],
  },
  {
    icon: MapPinned,
    title: "Bulk Supply Across India",
    desc: "We supply products in bulk to wholesalers, distributors, retailers, supermarkets and online sellers throughout India.",
    points: ["Pan-India distribution", "Flexible order sizes", "Reliable restocking"],
  },
  {
    icon: Handshake,
    title: "Vendor Development",
    desc: "Looking for a specific product? We locate the right factory, vet it, and negotiate the best possible pricing on your behalf.",
    points: ["Factory scouting", "Price & MOQ negotiation", "Long-term partnerships"],
  },
];

const PROCESS = [
  { icon: MessageSquare, title: "Share Your Requirement", desc: "Tell us the product, quantity and target price." },
  { icon: Search, title: "Sourcing & Supplier Match", desc: "We find and vet the right Chinese manufacturers." },
  { icon: FileText, title: "Quotation & Approval", desc: "Transparent pricing and terms for your sign-off." },
  { icon: ShieldCheck, title: "Quality Inspection Support", desc: "Checks to ensure goods meet your standard." },
  { icon: Boxes, title: "Shipment Consolidation", desc: "Multiple suppliers combined into one shipment." },
  { icon: Ship, title: "Shipping & Customs", desc: "Freight booking and customs coordination." },
  { icon: Truck, title: "Delivery Across India", desc: "Bulk stock delivered to your doorstep." },
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
          <p className="mt-4 max-w-xl text-white/75">
            One partner for the entire journey — from finding the right factory in China to
            delivering bulk stock to your doorstep in India.
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
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-blush text-coral transition-colors group-hover:bg-coral group-hover:text-white">
                    <s.icon size={24} />
                  </span>
                  <h2 className="font-display text-xl font-semibold text-navy">{s.title}</h2>
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

          {/* CTA card fills the 6th grid cell */}
          <Reveal delay={80}>
            <div className="flex h-full flex-col justify-center rounded-lg bg-navy p-8 text-white">
              <h3 className="font-display text-2xl font-bold">Have a product in mind?</h3>
              <p className="mt-3 text-sm text-white/75">
                Send us your requirement and we&rsquo;ll come back with sourcing options and pricing.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/#contact" className="inline-flex items-center gap-2 rounded-md bg-coral px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral-dark">
                  Get a Quote <ArrowRight size={16} />
                </Link>
                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/5">
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* process */}
      <section className="section bg-blush">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How We Work</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              Our China Sourcing Process
            </h2>
            <p className="mt-4 text-navy-dark/70">
              A simple, transparent workflow from your first enquiry to final delivery.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.title} delay={(i % 4) * 60}>
                <div className="relative h-full rounded-lg border border-line bg-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-md bg-blush text-coral">
                      <step.icon size={20} />
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
                <PackageCheck size={26} />
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
