import { Check, Handshake } from "lucide-react";
import Reveal from "./Reveal";
import { COMPANY } from "@/lib/utils";

const POINTS = [
  "Strong Vendor Base Across China",
  "Best Prices as per Your Requirement",
  "Quality-Assured Products",
  "Door-to-Door Delivery",
  "Long-Term Relationships",
];

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <div className="relative">
            {/* Replace with a real office/handshake photo via next/image */}
            <div className="grid aspect-[4/3] place-items-center rounded-lg bg-navy text-white/20">
              <Handshake size={88} strokeWidth={1} />
            </div>
            <div className="absolute -bottom-5 -right-4 hidden rounded-lg bg-coral px-6 py-5 text-white sm:block">
              <div className="font-display text-3xl font-bold leading-none">25+</div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest">
                Years of Experience
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <span className="eyebrow">About {COMPANY.name}</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Experience You Can Trust
          </h2>
          <div className="mt-4 h-1 w-16 bg-coral" />

          <div className="mt-6 space-y-4 leading-relaxed text-navy-dark/75">
            <p>
              Bellcorp International is a trusted import and sourcing company connecting
              manufacturers across China with Indian businesses &mdash; making global sourcing easy,
              reliable, and cost-effective.
            </p>
            <p>
              With over 25 years of practical experience, our founder brings deep expertise in China
              sourcing, vendor development, customs, shipment management, and trading &mdash; backed
              by strong relationships with manufacturers all over China.
            </p>
            <p>
              We serve manufacturers, wholesalers, traders, distributors and retailers with
              competitive prices as per each buyer&rsquo;s requirement &mdash; and we help you reduce
              your buying cost while simplifying your shipment.
            </p>
          </div>

          <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-navy">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-sm bg-coral text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
          >
            Work With Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
