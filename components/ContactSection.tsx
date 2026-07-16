"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Globe, MessageCircle, Send, CheckCircle2, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import { COMPANY } from "@/lib/utils";

const PRODUCTS = [
  "Garments & Fashion Wear",
  "Baby Products",
  "Ladies Handbags & Purses",
  "Fashion Accessories",
  "Household & Lifestyle",
  "Gift Articles",
  "Seasonal Products",
  "Custom Sourcing",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("website")) return; // honeypot: silently drop bots

    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      company: String(fd.get("company") || ""),
      product: String(fd.get("product") || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-navy-dark outline-none transition-colors placeholder:text-navy-dark/40 focus:border-coral focus:ring-2 focus:ring-coral/20";

  return (
    <section id="contact" className="section bg-blush">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        {/* details */}
        <Reveal>
          <span className="eyebrow">Contact Us</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Let&rsquo;s Talk Business
          </h2>
          <p className="mt-4 max-w-md text-navy-dark/70">
            Tell us what you&rsquo;re looking to import or source, and our team will get back to you
            with pricing and next steps.
          </p>

          <div className="mt-8 space-y-5">
            <a href={`tel:${COMPANY.phone}`} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-navy text-coral-light"><Phone size={18} /></span>
              <span><span className="block text-xs uppercase tracking-wider text-navy-dark/50">Phone</span><span className="font-medium text-navy">{COMPANY.phoneDisplay}</span></span>
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-navy text-coral-light"><Mail size={18} /></span>
              <span><span className="block text-xs uppercase tracking-wider text-navy-dark/50">Email</span><span className="font-medium text-navy break-all">{COMPANY.email}</span></span>
            </a>
            <a href={`https://${COMPANY.website}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-navy text-coral-light"><Globe size={18} /></span>
              <span><span className="block text-xs uppercase tracking-wider text-navy-dark/50">Website</span><span className="font-medium text-navy">{COMPANY.website}</span></span>
            </a>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-navy text-coral-light"><MapPin size={18} /></span>
              <span><span className="block text-xs uppercase tracking-wider text-navy-dark/50">Office</span><span className="font-medium text-navy">{COMPANY.address}</span></span>
            </div>
          </div>

          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
          >
            <MessageCircle size={17} /> Chat on WhatsApp
          </a>
        </Reveal>

        {/* form */}
        <Reveal delay={80}>
          <div className="rounded-lg border border-line bg-white p-6 sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center py-14 text-center">
                <CheckCircle2 size={54} className="text-coral" />
                <h3 className="mt-4 font-display text-xl font-bold text-navy">Enquiry Sent!</h3>
                <p className="mt-2 max-w-sm text-sm text-navy-dark/70">
                  Thank you for reaching out to Bellcorp International. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-md border border-line px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                {/* honeypot */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy">Name *</label>
                    <input name="name" required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy">Phone *</label>
                    <input name="phone" required placeholder="+91" className={inputClass} />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy">Email *</label>
                    <input name="email" type="email" required placeholder="you@company.com" className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy">Company</label>
                    <input name="company" placeholder="Business name" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy">Product Interest</label>
                  <select name="product" defaultValue="" className={inputClass}>
                    <option value="" disabled>Select a category</option>
                    {PRODUCTS.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy">Message</label>
                  <textarea name="message" rows={4} placeholder="Tell us what you'd like to import or source..." className={inputClass} />
                </div>

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error || "Could not send. Please try again or WhatsApp us."}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-coral px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <><Loader2 size={17} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={17} /> Send Enquiry</>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
