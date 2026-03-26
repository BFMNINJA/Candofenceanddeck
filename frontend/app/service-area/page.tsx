import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import municipalities from "@/data/municipalities";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Can Do Fence & Deck serves the entire Greater Toronto Area — Toronto, Vaughan, Markham, Mississauga, Brampton, and 25+ more municipalities.",
};

export default function ServiceAreaPage() {
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
            Where We Build
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
            Our Service Area
          </h1>
          <p className="text-white/65 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            We proudly serve homeowners across the Greater Toronto Area and
            surrounding regions — from Burlington to Barrie.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#f0f2f5]">
            <iframe
              title="Can Do Fence & Deck Service Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368831.1539654088!2d-79.9165545!3d43.8555305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sGreater%20Toronto%20Area%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="520"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Municipality Grid */}
      <section className="section-pad bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin size={20} className="text-[#0055a5]" />
              <h2
                className="text-[#0f1117] font-bold text-2xl"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Communities We Serve
              </h2>
            </div>
            <div className="divider-brand mx-auto mb-5" />
            <p className="text-[#0f1117]/60 max-w-lg mx-auto">
              Our crews cover the entire GTA and surrounding areas. If you don&apos;t see
              your city below, give us a call — we may still service your area.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {municipalities.map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-xl border border-[#f0f2f5] px-4 py-3 flex items-center gap-2.5 hover:border-[#0055a5]/30 hover:shadow-md transition-all duration-200 group"
              >
                <span className="w-2 h-2 rounded-full bg-[#0055a5] shrink-0 group-hover:scale-125 transition-transform duration-200" />
                <span className="text-[#0f1117]/75 text-sm font-medium">{city.name}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-[#0f1117]/40 text-sm mt-8 italic">
            Not seeing your city? Call us at (416) 630-3325 — we may still cover your area.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #0055a5 0%, #0274be 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-white font-bold text-3xl mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            We Build in Your Neighbourhood
          </h2>
          <p className="text-white/75 mb-8">
            Ready for a new fence, deck, or gate? Get a free, no-obligation quote
            from your local GTA contractor.
          </p>
          <Link
            href="/#quote"
            className="inline-flex items-center gap-2 bg-white text-[#0055a5] hover:bg-[#f0f4ff] font-bold px-8 py-4 rounded-md transition-all duration-300 group shadow-lg"
          >
            Get a Free Quote
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </>
  );
}
