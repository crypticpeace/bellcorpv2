import { Phone, Mail, Globe, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";
import { COMPANY } from "@/lib/utils";

const QUICK = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
];
const CATS = [
  "Garments & Fashion Wear", "Baby Products", "Ladies Handbags & Purses",
  "Fashion Accessories", "Household & Lifestyle", "Gift Articles",
  "Seasonal Products", "Custom Sourcing",
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            We are committed to providing quality products, competitive prices, and reliable
            services to grow your business.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-coral hover:text-white">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-coral-light">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {QUICK.map((q) => (
              <li key={q.label}><a href={q.href} className="transition-colors hover:text-coral-light">{q.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-coral-light">Product Categories</h4>
          <ul className="space-y-2.5 text-sm">
            {CATS.map((c) => <li key={c}><a href="#products" className="transition-colors hover:text-coral-light">{c}</a></li>)}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-coral-light">Contact Us</h4>
          <p className="text-sm font-semibold text-white">{COMPANY.name}</p>
          <p className="mt-2 text-sm leading-relaxed">{COMPANY.address}</p>
          <div className="mt-4 space-y-2 text-sm">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 hover:text-coral-light"><Phone size={14} /> {COMPANY.phoneDisplay}</a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-coral-light"><Mail size={14} /> {COMPANY.email}</a>
            <a href={`https://${COMPANY.website}`} className="flex items-center gap-2 hover:text-coral-light"><Globe size={14} /> {COMPANY.website}</a>
          </div>
          <a href="#contact" className="mt-5 inline-block rounded-md bg-coral px-5 py-2.5 text-sm font-semibold text-white">Get in Touch</a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-5 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved. &nbsp;&middot;&nbsp;
          Global Sourcing &middot; China Imports &middot; Bulk Trading &middot; Shipment Consolidation
        </div>
      </div>
    </footer>
  );
}
