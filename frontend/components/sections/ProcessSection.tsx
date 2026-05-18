import { AnimatedButton } from "@/components/ui/animated-button";

const steps = [
  {
    number: "01",
    title: "Request a Free Quote",
    description:
      "Fill out our quick online form or give us a call. We'll get back to you promptly to discuss your project, timeline, and budget - no pressure, no obligation.",
  },
  {
    number: "02",
    title: "We Plan & Build",
    description:
      "Our experienced crew handles everything from permits to post-setting to finishing. We use quality materials and proven techniques to ensure your project is built to last.",
  },
  {
    number: "03",
    title: "Enjoy Your Property",
    description:
      "Walk around your finished fence or deck and see craftsmanship you'll be proud of for decades. Backed by our industry-leading 5-year written warranty.",
  },
];

export default function ProcessSection() {
  return (
    <section
      className="section-pad bg-[#f8f9fb]"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#0274be] text-sm font-semibold uppercase tracking-widest mb-3">
            Simple Process
          </p>
          <h2
            id="process-heading"
            className="text-[#0f1117] mb-5"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            How It Works
          </h2>
          <div className="divider-brand mx-auto mb-5" />
          <p
            className="text-[#0f1117]/60 max-w-lg mx-auto"
            style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            Getting a new fence or deck is easier than you think. Here&apos;s
            what to expect when you work with Can Do.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #0055a5, transparent)" }}
            aria-hidden="true"
          />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              {/* Number circle */}
              <div className="relative mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #0055a5 0%, #0274be 100%)",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  {step.number}
                </div>
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-30"
                  style={{ background: "#0055a5" }}
                  aria-hidden="true"
                />
              </div>

              <h3
                className="text-[#0f1117] font-bold text-xl mb-3"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {step.title}
              </h3>
              <p className="text-[#0f1117]/60 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <AnimatedButton href="/contact" variant="primary">
            Start Your Project Today
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
