"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import municipalities from "@/data/municipalities";
import { AnimatedButton } from "@/components/ui/animated-button";

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
            From Toronto to Barrie, Burlington to Oshawa — our crews cover the
            entire GTA and surrounding regions.
          </p>
        </motion.div>

        {/* Map — full width, prominent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative">
            <iframe
              title="Can Do Fence & Deck Service Area — Greater Toronto Area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368831.1539654088!2d-79.9165545!3d43.8555305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sGreater%20Toronto%20Area%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="480"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Municipality list */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin size={20} className="text-[#0055a5]" />
            <h3
              className="text-[#0f1117] font-semibold text-lg"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Communities We Serve
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3 max-w-5xl mx-auto">
            {municipalities.map((city) => (
              <div
                key={city.name}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055a5] shrink-0" />
                {city.name}
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-6 text-center italic">
            Not seeing your city? Give us a call — we may still service your area.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <AnimatedButton href="/#quote" variant="primary">
            Request a Quote in Your Area
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
