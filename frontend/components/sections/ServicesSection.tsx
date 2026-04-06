"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

const services = [
  {
    id: "fences",
    title: "Fences",
    href: "/fences",
    description:
      "From classic cedar privacy fences to modern horizontal slat designs, we build fences that define your property with style and durability. Every fence includes our 5-year written warranty and property line guarantee.",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    highlights: ["Cedar & Pressure Treated", "Privacy & Picket Styles", "Property Line Guarantee"],
  },
  {
    id: "decks",
    title: "Decks",
    href: "/decks",
    description:
      "Whether you want a classic pressure-treated deck or a low-maintenance composite Trex build, our experienced crew delivers exceptional craftsmanship. Multi-level, wraparound, or simple — we do it all.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    highlights: ["Composite Trex & Cedar", "Custom Railings & Stairs", "Multi-Level Builds"],
  },
  {
    id: "gates",
    title: "Gates",
    href: "/gates",
    description:
      "From elegant walk gates to heavy-duty double drive driveway gates, we design and install gates that combine security with curb appeal. Iron inserts, auto-latch hardware, and custom sizing available.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca0d8d?w=800&q=80",
    highlights: ["Walk & Double Drive", "Iron Insert Designs", "Auto-Latch Hardware"],
  },
  {
    id: "cedar-work",
    title: "Cedar Work",
    href: "/fences",
    description:
      "Specialty cedar projects including pergolas, arbours, and custom garden structures. Natural western red cedar brings warmth and character to any outdoor space, with natural resistance to rot and insects.",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    highlights: ["Pergolas & Arbours", "Natural Rot Resistance", "Custom Designs"],
  },
  {
    id: "repairs",
    title: "Repairs & Replacements",
    href: "/contact",
    description:
      "Storm damage, rotting posts, or just time taking its toll? We repair and replace fences, decks, and gates of all types. Fast turnaround with the same quality materials and warranty as our new builds.",
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    highlights: ["Storm Damage Repair", "Post Replacement", "Full Rebuilds"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function ServicesSection() {
  return (
    <section className="section-pad bg-white" aria-label="Our services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* Alternating Service Rows */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-16`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 shrink-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="inline-flex items-center gap-2 bg-[#0055a5]/08 text-[#0055a5] text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0055a5]" />
                    Service
                  </div>
                  <h3
                    className="text-[#0f1117] text-3xl lg:text-4xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-8">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0274be] shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-[#0055a5] font-semibold text-sm hover:gap-3 transition-all duration-200"
                  >
                    View {service.title}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <AnimatedButton href="/#quote" variant="primary">
            Get a Free Quote
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
