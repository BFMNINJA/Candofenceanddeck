"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Category = "All" | "Fences" | "Decks";

const allPhotos: { src: string; alt: string; category: Exclude<Category, "All"> }[] = [
  // Fences
  { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80", alt: "Pressure treated privacy fence - board-on-board style", category: "Fences" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Brown pressure treated fence with lattice top", category: "Fences" },
  { src: "/970e5c066c5147f1d61325a2c62a35af97828afc.webp", alt: "Scallop top pressure treated fence", category: "Fences" },
  { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", alt: "Traditional style pressure treated fence", category: "Fences" },
  { src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80", alt: "I-Beam heavy duty privacy fence", category: "Fences" },
  // Decks
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Pressure treated deck with black railing", category: "Decks" },
  { src: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800&q=80", alt: "Trex composite deck - two tone design", category: "Decks" },
  { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80", alt: "Large pressure treated upper deck with walkout", category: "Decks" },
  { src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80", alt: "Deck with built-in privacy screen", category: "Decks" },
];

const categories: Category[] = ["All", "Fences", "Decks"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered =
    activeCategory === "All"
      ? allPhotos
      : allPhotos.filter((p) => p.category === activeCategory);

  const lightboxSlides = filtered.map((p) => ({ src: p.src, alt: p.alt }));

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 text-center"
        style={{
          background: "linear-gradient(135deg, #0f1117 0%, #1e2330 60%, #0055a5 100%)",
        }}
      >
        <div className="relative z-10 px-4">
          <p className="text-[#0274be] text-sm font-semibold uppercase tracking-widest mb-3">
            Portfolio
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
            Project Gallery
          </h1>
          <p className="text-white/65 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            Browse completed fence and deck projects across the Greater
            Toronto Area. Click any photo to view full size.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-pad bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#0055a5] text-white shadow-lg"
                    : "bg-white text-[#0f1117]/70 border border-[#e8eaed] hover:border-[#0055a5]/40 hover:text-[#0055a5]"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({allPhotos.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="masonry-grid">
            {filtered.map((photo, index) => (
              <div
                key={`${photo.src}-${index}`}
                className="masonry-item group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={450}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0f1117]/0 group-hover:bg-[#0f1117]/40 transition-all duration-300 rounded-xl flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-full">
                    View Full Size
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-[#0055a5] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {photo.category.slice(0, -1)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={lightboxSlides}
      />
    </>
  );
}
