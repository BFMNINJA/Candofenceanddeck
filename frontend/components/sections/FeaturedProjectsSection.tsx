"use client";

import { Fence, Home, DoorOpen, Layers, Trees, Hammer } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ExpandingCards, CardItem } from "@/components/ui/expanding-cards";

const projects: CardItem[] = [
  {
    id: "cedar-privacy-fence",
    title: "Cedar Privacy Fence",
    description:
      "6ft natural cedar board-on-board privacy fence with post caps. Built to last decades with zero-maintenance finishing.",
    imgSrc:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    icon: <Fence size={24} />,
    linkHref: "/fences",
  },
  {
    id: "pressure-treated-deck",
    title: "Pressure Treated Deck",
    description:
      "Custom pressure-treated deck with cable railings and built-in seating. Perfect for GTA summers.",
    imgSrc:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    icon: <Home size={24} />,
    linkHref: "/decks",
  },
  {
    id: "wooden-driveway-gate",
    title: "Wooden Driveway Gate",
    description:
      "Double drive cedar gate with steel frame, auto-latch hardware and decorative iron inserts.",
    imgSrc:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca0d8d?w=800&q=80",
    icon: <DoorOpen size={24} />,
    linkHref: "/gates",
  },
  {
    id: "composite-deck",
    title: "Composite Trex Deck",
    description:
      "Low-maintenance Trex composite deck with hidden fasteners and glass panel railings for a modern finish.",
    imgSrc:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    icon: <Layers size={24} />,
    linkHref: "/decks",
  },
  {
    id: "cedar-board-fence",
    title: "Cedar Board Fence",
    description:
      "Horizontal cedar slat fence with steel post system — a modern alternative to the traditional privacy fence.",
    imgSrc:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    icon: <Trees size={24} />,
    linkHref: "/fences",
  },
  {
    id: "backyard-renovation",
    title: "Full Backyard Build",
    description:
      "Complete backyard transformation: new fence perimeter, multi-level deck, and walk gate — all in one project.",
    imgSrc:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    icon: <Hammer size={24} />,
    linkHref: "/gallery",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section className="section-pad bg-white" aria-label="Featured projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#0274be] text-sm font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2
            className="text-[#0f1117] mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Our Work Speaks for Itself
          </h2>
          <div className="divider-brand mx-auto mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            A glimpse at recent projects across the GTA — every fence, deck, and
            gate built to last decades.
          </p>
        </div>

        {/* Expanding Cards */}
        <ExpandingCards items={projects} defaultActiveIndex={0} />

        {/* CTA */}
        <div className="text-center mt-10">
          <AnimatedButton href="/gallery" variant="outline">
            View Full Gallery
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
