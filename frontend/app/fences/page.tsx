import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import fences from "@/data/fences";

export default function FencesPage() {

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
            Fence Styles
          </h1>
          <p className="text-white/65 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            From classic board-on-board to heavy-duty I-beam - browse our full
            range of premium pressure-treated fence styles.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-pad bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fences.map((fence) => (
              <ProductCard
                key={fence.id}
                product={fence}
                detailHref={`/fences/${fence.slug}`}
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
            Ready for a New Fence?
          </h2>
          <p className="text-white/75 mb-8">
            Get a free, no-obligation quote from the GTA&apos;s most trusted fence
            builder. We&apos;ll help you pick the right style and material for your
            property and budget.
          </p>
          <Link
            href="/contact"
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
