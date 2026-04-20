"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import decks from "@/data/decks";

const filters = ["All", "Pressure Treated", "Composite", "Cedar"];

export default function DecksPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? decks
      : decks.filter((d) => d.material === active);

  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-36 pb-20 flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f1117 0%, #1e2330 60%, #0055a5 100%)",
        }}
      >
        <div className="relative z-10 text-center px-4">
          <p className="text-[#0274be] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Products
          </p>
          <h1
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Deck Styles
          </h1>
          <p className="text-white/65 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            From budget-friendly pressure treated to premium Trex composite — find
            the perfect deck for your backyard and lifestyle.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-pad bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === f
                    ? "bg-[#0055a5] text-white shadow-lg"
                    : "bg-white text-[#0f1117]/70 border border-[#e8eaed] hover:border-[#0055a5]/40 hover:text-[#0055a5]"
                }`}
              >
                {f}
                {f !== "All" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({decks.filter((x) => x.material === f).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((deck) => (
              <ProductCard
                key={deck.id}
                product={deck}
                detailHref={`/decks/${deck.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{
          background: "linear-gradient(135deg, #0055a5 0%, #0274be 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-white font-bold text-3xl mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ready to Build Your Dream Deck?
          </h2>
          <p className="text-white/75 mb-8">
            Our team will help you design and build the perfect outdoor living
            space. Contact us today for a free, no-obligation estimate.
          </p>
          <Link
            href="/#quote"
            className="inline-flex items-center gap-2 bg-white text-[#0055a5] hover:bg-[#f0f4ff] font-bold px-8 py-4 rounded-md transition-all duration-300 group shadow-lg"
          >
            Get a Free Quote
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
