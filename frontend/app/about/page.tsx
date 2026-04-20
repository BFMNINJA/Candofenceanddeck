import Link from "next/link";
import { Shield, Award, FileCheck, Users, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Can Do Fence & Deck has been serving the GTA since 1998. Learn about our history, warranty, insurance coverage, and commitment to quality.",
};

const values = [
  {
    icon: Award,
    title: "25+ Years in Business",
    description:
      "Founded in 1998, we've spent over two decades building fences and decks that GTA homeowners are proud of. Our experience shows in every post we set and every board we nail.",
  },
  {
    icon: Shield,
    title: "Industry-Leading Warranty",
    description:
      "We back every project with a 5-year written warranty covering structural integrity, loose sections, and post stability. It's the longest written warranty in the business.",
  },
  {
    icon: FileCheck,
    title: "Fully Insured & WSIB Covered",
    description:
      "We carry WSIB coverage for every worker on your property, plus Survey Liability Insurance. You're protected from start to finish — no exceptions.",
  },
  {
    icon: Users,
    title: "Built on Referrals",
    description:
      "Our best marketing is word of mouth. A large portion of our business comes from referrals by homeowners who were happy with their project and recommended us to neighbors, family, and friends.",
  },
];

export default function AboutPage() {
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
            Our Story
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
            About Can Do Fence &amp; Deck
          </h1>
          <p className="text-white/65 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            25+ years of building quality, reliability, and trust across the Greater
            Toronto Area.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-pad bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[#0f1117] mb-4"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
              }}
            >
              GTA&apos;s Most Trusted Builder Since 1998
            </h2>
            <div className="divider-brand mx-auto mb-6" />
          </div>

          <div className="prose prose-lg max-w-none text-[#0f1117]/70 space-y-5" style={{ lineHeight: 1.8 }}>
            <p>
              Can Do Fence &amp; Deck was founded in 1998 with one simple idea: build
              residential fences and decks the right way, the first time. Over the
              past 25+ years, that commitment has grown into one of the GTA&apos;s
              most respected fence and deck companies.
            </p>
            <p>
              We&apos;re a family-oriented business that takes pride in every project —
              whether it&apos;s a single fence panel replacement or a full backyard
              transformation with a new deck and perimeter fence. Our crews
              bring decades of collective experience to every job site, and we use
              only quality materials that stand up to Canadian weather.
            </p>
            <p>
              Our head office is located in Whitchurch-Stouffville and we serve
              homeowners across the entire Greater Toronto Area, from Burlington to
              Barrie, Georgetown to Oshawa. We work with municipalities and
              professional home builders alike.
            </p>
            <p>
              What sets us apart is simple: we show up, we do great work, and we
              stand behind it with the strongest warranty in the business.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-pad bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-[#0f1117] mb-4"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
              }}
            >
              What We Stand For
            </h2>
            <div className="divider-brand mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="flex gap-5 p-7 bg-white rounded-2xl border border-[#f0f2f5] hover:border-[#0055a5]/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="shrink-0 mt-1 w-12 h-12 rounded-xl bg-[#0055a5]/08 flex items-center justify-center">
                    <Icon size={22} className="text-[#0055a5]" />
                  </div>
                  <div>
                    <h3
                      className="text-[#0f1117] font-bold text-lg mb-2"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-[#0f1117]/60 text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warranty Detail */}
      <section className="section-pad bg-[#0f1117]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#0274be] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Promise
          </p>
          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
            }}
          >
            The Best Warranty in the Business
          </h2>
          <div className="w-14 h-1 mx-auto mb-6 rounded-full bg-[#0055a5]" />
          <p className="text-white/65 mb-4" style={{ lineHeight: 1.8 }}>
            Every fence and deck we build is covered by our{" "}
            <span className="text-white font-semibold">5-year written warranty</span>.
            This covers structural integrity, loose sections, and post stability. Our
            warranty is provided in writing as part of every contract — not just a
            verbal promise.
          </p>
          <p className="text-white/45 text-sm">
            Note: Natural wood behavior such as splitting, shrinking, and warping are
            excluded as these are unavoidable cosmetic characteristics of natural wood.
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
            Ready to Work With Us?
          </h2>
          <p className="text-white/75 mb-8">
            Get a free, no-obligation quote today and see why thousands of GTA
            homeowners have trusted Can Do for over 25 years.
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
