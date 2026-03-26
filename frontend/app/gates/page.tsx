"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import gates from "@/data/gates";

const filters = ["All", "Pressure Treated", "Cedar", "Mixed"];

export default function GatesPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? gates
      : gates.filter((g) => g.material === active);

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
            Gate Styles
          </h1>
          <p className="text-white/65 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            Matching or custom — every gate we build is designed to complement your
            fence and enhance your property&apos;s curb appeal.
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
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((gate) => (
              <ProductCard key={gate.id} product={gate} />
            ))}
          </div>
        </div>
      </section>

      {/* Matching Gate Callout */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-[#0f1117] font-bold text-2xl mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Want a Gate That Matches Your Fence?
          </h2>
          <p className="text-[#0f1117]/60 mb-8">
            Most of our customers choose a matching gate that complements their fence
            style. Just let us know your fence style when requesting a quote and
            we&apos;ll match it perfectly.
          </p>
          <Link
            href="/#quote"
            className="inline-flex items-center gap-2 bg-[#0055a5] hover:bg-[#0274be] text-white font-bold px-8 py-4 rounded-md transition-all duration-300 btn-glow group"
          >
            Request a Matching Gate Quote
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
