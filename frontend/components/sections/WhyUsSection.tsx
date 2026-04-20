"use client";

import { Shield, Clock, FileCheck, Star, Users, Award, CheckCircle } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

const reasons = [
  {
    icon: Award,
    title: "Best Warranty in the Business",
    description:
      "We back every project with a 5-year written warranty — the longest in the industry. Structural integrity, loose sections, and post stability all covered in writing.",
    highlight: "5-Year Written Warranty",
    accent: "from-[#0055a5] to-[#0274be]",
  },
  {
    icon: Clock,
    title: "25+ Years of Proven Experience",
    description:
      "Since 1998, we've built thousands of fences and decks across the GTA. Our reputation is built on referrals from happy homeowners.",
    highlight: "Since 1998",
    accent: "from-[#0274be] to-[#5bb3f0]",
  },
  {
    icon: Shield,
    title: "Fully Insured & WSIB Covered",
    description:
      "We carry full WSIB coverage to protect our workers, and Survey Liability Insurance to protect you. Every crew that steps on your property is covered.",
    highlight: "WSIB + Survey Liability",
    accent: "from-[#0055a5] to-[#0274be]",
  },
  {
    icon: FileCheck,
    title: "Written Property Line Guarantee",
    description:
      "We provide a written guarantee on property line accuracy — something most residential contractors won't do. Your fence will be built exactly where it should be.",
    highlight: "Rare in the Industry",
    accent: "from-[#0274be] to-[#5bb3f0]",
  },
];

export default function WhyUsSection() {
  return (
    <section
      className="section-pad bg-[#f8f9fb] relative overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, #0055a5 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#0274be] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Difference
          </p>
          <h2
            id="why-us-heading"
            className="text-[#0f1117] mb-5"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Why Choose Can Do?
          </h2>
          <div className="divider-brand mx-auto mb-5" />
          <p className="text-[#0f1117]/55 max-w-xl mx-auto" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            We don&apos;t just build fences and decks — we build relationships.
            Here&apos;s what sets us apart from every other contractor in the GTA.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative flex gap-5 p-7 rounded-2xl bg-white border border-[#e8ecf0] hover:border-[#0055a5]/25 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient left accent bar */}
                <div
                  className={`absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b ${reason.accent} opacity-60 group-hover:opacity-100 group-hover:top-4 group-hover:bottom-4 transition-all duration-300`}
                />

                {/* Icon */}
                <div className="shrink-0 mt-1 ml-3">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(0, 85, 165, 0.08)" }}
                  >
                    <Icon size={26} className="text-[#0274be]" />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-[#0055a5]/08 text-[#0055a5] text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                    <CheckCircle size={11} />
                    {reason.highlight}
                  </div>
                  <h3
                    className="text-[#0f1117] font-bold text-lg mb-2"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-[#0f1117]/55 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-7 rounded-2xl border border-[#0055a5]/20 bg-[#0055a5]/05">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[Star, Users, Award].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-[#0055a5] border-2 border-white flex items-center justify-center"
                >
                  <Icon size={14} className="text-white" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-[#0f1117] font-semibold text-sm">Trusted by thousands of GTA homeowners</p>
              <p className="text-[#0f1117]/45 text-xs">Scarborough · Mississauga · Brampton · Markham & more</p>
            </div>
          </div>
          <AnimatedButton href="/#quote" variant="primary">
            Get a Free Quote
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}