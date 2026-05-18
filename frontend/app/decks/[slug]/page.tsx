import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import type { Metadata } from "next";
import decks from "@/data/decks";
import { AnimatedButton } from "@/components/ui/animated-button";
import ProductCard from "@/components/ui/ProductCard";

export async function generateStaticParams() {
  return decks.map((deck) => ({ slug: deck.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const deck = decks.find((d) => d.slug === slug);
  if (!deck) return { title: "Deck Style Not Found" };
  return {
    title: `${deck.name} - ${deck.material} Deck`,
    description: deck.description,
  };
}

export default async function DeckDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const deck = decks.find((d) => d.slug === slug);

  if (!deck) notFound();

  const related = decks
    .filter((d) => d.material === deck.material && d.id !== deck.id)
    .slice(0, 3);

  // If fewer than 3 related from same material, pad with others
  if (related.length < 3) {
    const others = decks
      .filter((d) => d.material !== deck.material && d.id !== deck.id)
      .slice(0, 3 - related.length);
    related.push(...others);
  }

  return (
    <>
      {/* Back navigation */}
      <div className="bg-[#f8f9fb] pt-24 pb-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/decks"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#0055a5] transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Back to Deck Styles
          </Link>
        </div>
      </div>

      {/* Main Detail Section */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3] relative">
                <Image
                  src={deck.imageUrl}
                  alt={deck.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                {deck.badge && (
                  <div className="absolute top-4 left-4 bg-[#0055a5] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {deck.badge}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0055a5]/08 text-[#0055a5] text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055a5]" />
                {deck.material}
              </div>
              <h1
                className="text-[#0f1117] text-3xl lg:text-5xl font-bold mb-5"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {deck.name}
              </h1>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                {deck.description}
              </p>

              <div className="border-t border-gray-100 pt-6 mb-6">
                <h2
                  className="text-[#0f1117] text-lg font-semibold mb-3"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  About {deck.name}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {deck.fullDescription}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6 mb-8">
                <h2
                  className="text-[#0f1117] text-lg font-semibold mb-4"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Key Features
                </h2>
                <ul className="space-y-2.5">
                  {deck.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-gray-600"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#0055a5]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-[#0055a5]" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <AnimatedButton href="/contact" variant="primary">
                  Get a Free Quote
                </AnimatedButton>
                <Link
                  href="tel:+14166303325"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#0055a5] text-[#0055a5] font-semibold text-sm hover:bg-[#0055a5] hover:text-white transition-colors duration-200"
                >
                  <Phone size={16} />
                  (416) 630-3325
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Styles */}
      {related.length > 0 && (
        <section className="py-14 lg:py-20 bg-[#f8f9fb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <p className="text-[#0274be] text-sm font-semibold uppercase tracking-widest mb-2">
                  You Might Also Like
                </p>
                <h2
                  className="text-[#0f1117] text-2xl lg:text-3xl font-bold"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  More Deck Styles
                </h2>
              </div>
              <Link
                href="/decks"
                className="inline-flex items-center gap-2 text-sm text-[#0055a5] font-semibold hover:gap-3 transition-all duration-200"
              >
                View All Decks
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  detailHref={`/decks/${item.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
