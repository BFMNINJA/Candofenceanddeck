"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "fences",
    title: "Fences",
    href: "/fences",
    description:
      "Pressure-treated fences from classic privacy styles to heavy-duty I-beam designs. Property line guarantee on every build.",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    highlights: ["Premium Pressure Treated", "Privacy & Picket Styles", "Property Line Guarantee"],
  },
  {
    id: "decks",
    title: "Decks",
    href: "/decks",
    description:
      "Classic pressure-treated or low-maintenance composite Trex builds. Multi-level, walkout, or simple - we do it all.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    highlights: ["PT & Composite Trex", "Custom Railings & Stairs", "Multi-Level Builds"],
  },
  {
    id: "repairs",
    title: "Repairs & Replacements",
    href: "/contact",
    description:
      "Storm damage, rotting posts, or just time taking its toll? Fast turnaround with quality materials and our full warranty.",
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    highlights: ["Storm Damage Repair", "Post Replacement", "Full Rebuilds"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ServicesSection() {
  return (
    <section className="section-pad bg-white" aria-label="Our services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
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
            Quality fencing and decking across the Greater Toronto Area -
            backed by a 5-year written warranty.
          </p>
        </div>

        {/* Compact 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#0055a5]/30 hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3
                    className="text-[#0f1117] text-xl lg:text-2xl font-bold mb-3 group-hover:text-[#0055a5] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="w-1 h-1 rounded-full bg-[#0274be] shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-1.5 text-[#0055a5] font-semibold text-sm group-hover:gap-2.5 transition-all duration-200 mt-auto">
                    View {service.title}
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
