import { BadgeCheck, IndianRupee, Truck, Network, MessageCircle, ArrowRight, Shirt, Baby, ShoppingBag } from "lucide-react";
import { COMPANY } from "@/lib/utils";

const BADGES = [
  { icon: BadgeCheck, label: "Quality Products" },
  { icon: IndianRupee, label: "Competitive Pricing" },
  { icon: Truck, label: "Timely Delivery" },
  { icon: Network, label: "Trusted Network" },
];

const TILES = [
  { icon: Shirt, label: "Garments & Fashion Wear" },
  { icon: Baby, label: "Baby Products" },
  { icon: ShoppingBag, label: "Ladies Handbags" },
];

export default function Hero() {
  return (
    <section id="home" className="bg-navy text-white">
      <div className="container grid gap-14 py-16 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="animate-fade-up">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-coral-light">
            Since {COMPANY.since} &middot; China to India
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.12] md:text-5xl">
            Your Trusted Import &amp;
            <br />
            Sourcing Partner from
            <br />
            <span className="text-coral-light">China to India</span>
          </h1>

          <div className="mt-6 h-1 w-16 bg-coral" />

          <p className="mt-6 max-w-md leading-relaxed text-white/70">
            Bellcorp International sources quality products from China and supplies them in bulk
            across India. We consolidate. We deliver. You grow.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-coral px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
            >
              Get a Quote <ArrowRight size={17} />
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
            >
              <MessageCircle size={17} /> WhatsApp
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4">
            {BADGES.map((b) => (
              <div key={b.label} className="flex flex-col gap-2.5">
                <b.icon size={22} className="text-coral-light" strokeWidth={1.75} />
                <span className="text-xs font-medium leading-snug text-white/75">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {TILES.map((t, i) => (
            <div key={t.label} className={`rounded-lg bg-white p-6 ${i === 0 ? "sm:col-span-2" : ""}`}>
              <span className="inline-grid h-12 w-12 place-items-center rounded-md bg-blush text-coral">
                <t.icon size={22} strokeWidth={1.75} />
              </span>
              <p className="mt-5 font-display text-base font-semibold text-navy">{t.label}</p>
              <p className="mt-1 text-xs text-navy/50">Sourced &middot; Consolidated &middot; Delivered</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
