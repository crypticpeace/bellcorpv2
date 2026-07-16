"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, cn } from "@/lib/utils";

// Hash links point at "/#id" so they work from ANY page (home + /services).
const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/#products" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href.startsWith("/") && !href.includes("#") && pathname === href;

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy text-white/85 md:block">
        <div className="container flex h-9 items-center justify-between text-xs">
          <span className="tracking-wide text-coral-light">
            Global Sourcing &nbsp;|&nbsp; Import Solutions &nbsp;|&nbsp; Bulk Trading
          </span>
          <div className="flex items-center gap-5">
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1.5 hover:text-coral-light">
              <Mail size={13} /> {COMPANY.email}
            </a>
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-1.5 hover:text-coral-light">
              <Phone size={13} /> {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className={cn("border-b transition-all", scrolled ? "bg-white border-line" : "bg-white border-line")}>
        <div className="container flex h-[68px] items-center justify-between">
          <Link href="/" aria-label="Bellcorp International home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-coral after:transition-all hover:text-navy",
                  isActive(l.href) ? "text-navy after:w-full" : "text-navy/80 after:w-0 hover:after:w-full"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden rounded-md bg-coral px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-dark sm:inline-block"
            >
              Enquire Now
            </Link>
            <button
              className="grid h-10 w-10 place-items-center rounded-lg border border-line text-navy lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-line bg-white lg:hidden">
            <nav className="container flex flex-col py-3">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "border-b border-line py-3 text-sm font-medium",
                    isActive(l.href) ? "text-navy" : "text-navy/80"
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-md bg-coral px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Enquire Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
