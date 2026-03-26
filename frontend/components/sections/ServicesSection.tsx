"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";

const SLIDES = [
  {
    id: "fences",
    title: "Fences",
    href: "/fences",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80",
  },
  {
    id: "decks",
    title: "Decks",
    href: "/decks",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  },
  {
    id: "gates",
    title: "Gates",
    href: "/gates",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca0d8d?w=700&q=80",
  },
  {
    id: "cedar",
    title: "Cedar Work",
    href: "/fences",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80",
  },
  {
    id: "repairs",
    title: "Repairs",
    href: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-pad bg-[#f8f9fb]" aria-label="Our services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[#0274be] text-sm font-semibold uppercase tracking-widest mb-3">
            What We Build
          </p>
          <h2
            className="text-[#0f1117] mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Our Services
          </h2>
          <div className="divider-brand mx-auto mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Quality fencing, decking, and gate installation across the Greater
            Toronto Area — backed by a 5-year written warranty.
          </p>
        </div>

        {/* Animated Hover Slideshow */}
        <HoverSlider className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Service List */}
          <div className="flex flex-col space-y-3 md:space-y-5 w-full lg:w-auto">
            <p className="text-[#0274be] text-xs font-semibold uppercase tracking-widest mb-2">
              / our services
            </p>
            {SLIDES.map((slide, index) => (
              <Link key={slide.id} href={slide.href} className="group flex items-center gap-3">
                <TextStaggerHover
                  index={index}
                  text={slide.title}
                  className="cursor-pointer text-[#0f1117] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                />
                <ArrowRight
                  size={20}
                  className="text-[#0274be] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 mt-1"
                />
              </Link>
            ))}
          </div>

          {/* Image Panel */}
          <div className="w-full lg:w-[480px] shrink-0">
            <HoverSliderImageWrap className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              {SLIDES.map((slide, index) => (
                <div key={slide.id}>
                  <HoverSliderImage
                    index={index}
                    imageUrl={slide.imageUrl}
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="size-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              ))}
            </HoverSliderImageWrap>
          </div>
        </HoverSlider>
      </div>
    </section>
  );
}
