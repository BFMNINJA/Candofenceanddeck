"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceAreaSection() {
  return (
    <section
      className="section-pad bg-[#f8f9fb]"
      aria-labelledby="service-area-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#0274be] text-sm font-semibold uppercase tracking-widest mb-3">
            Coverage
          </p>
          <h2
            id="service-area-heading"
            className="text-[#0f1117] mb-5"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            We Serve the Greater Toronto Area
          </h2>
          <div className="divider-brand mx-auto mb-5" />
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            From Toronto to Barrie, Burlington to Oshawa - our crews cover the
            entire GTA and surrounding regions.
          </p>
        </motion.div>

        {/* Static Map Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src="/map.jpg"
            alt="Can Do Fence & Deck Service Area - Greater Toronto Area"
            width={1600}
            height={1200}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="w-full h-auto block"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
