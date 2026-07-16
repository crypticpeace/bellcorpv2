import { Shirt, Baby, ShoppingBag, Watch, UtensilsCrossed, Gift, Snowflake, PackageSearch } from "lucide-react";
import Reveal from "./Reveal";

const CATS = [
  { icon: Shirt, label: "Garments & Fashion Wear" },
  { icon: Baby, label: "Baby Products" },
  { icon: ShoppingBag, label: "Ladies Handbags & Purses" },
  { icon: Watch, label: "Fashion Accessories" },
  { icon: UtensilsCrossed, label: "Household & Lifestyle" },
  { icon: Gift, label: "Gift Articles" },
  { icon: Snowflake, label: "Seasonal Products" },
  { icon: PackageSearch, label: "Custom Sourcing" },
];

export default function Categories() {
  return (
    <section id="products" className="section bg-blush">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What We Deal In</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Our Product Categories
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-coral" />
          <p className="mt-6 text-navy-dark/70">
            From everyday essentials to seasonal lines &mdash; sourced from vetted Chinese
            manufacturers and supplied in bulk across India.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {CATS.map((c, i) => (
            <Reveal key={c.label} delay={(i % 4) * 50}>
              <div className="group h-full rounded-lg border border-line bg-white p-6 text-center transition-colors hover:border-coral">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-md bg-blush text-coral transition-colors group-hover:bg-coral group-hover:text-white">
                  <c.icon size={22} strokeWidth={1.75} />
                </span>
                <p className="mt-4 text-sm font-semibold text-navy">{c.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
