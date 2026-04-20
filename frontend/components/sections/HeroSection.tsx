"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { PulsingBorder } from "@paper-design/shaders-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 1, delay },
  }),
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#0a0e1a]"
      aria-label="Hero"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Dark overlay — heavier at bottom-left to ensure text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,14,26,0.72) 0%, rgba(10,14,26,0.35) 60%, rgba(10,14,26,0.15) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom fade into TrustBar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── BOTTOM-LEFT: Hero content ── */}
      <motion.main
        className="absolute bottom-16 left-8 md:left-12 lg:left-16 z-20 max-w-lg"
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          custom={0.1}
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-white/08 backdrop-blur-sm border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0274be] animate-pulse" />
          Serving the GTA Since 1998
        </motion.div>

        {/* Headline — mixed weights like the demo */}
        <motion.h1
          custom={0.2}
          variants={fadeUp}
          className="text-white mb-4 leading-tight"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
          }}
        >
          <span className="font-light">GTA&apos;s Most</span>
          <br />
          <span
            className="font-bold italic"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #5bb3f0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Trusted
          </span>{" "}
          <span className="font-light">Fence</span>
          <br />
          <span className="font-light">&amp; Deck Builder</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          custom={0.32}
          variants={fadeUp}
          className="text-white/60 text-sm leading-relaxed mb-7 max-w-sm font-light"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Quality craftsmanship, industry-leading reliability, and the{" "}
          <span className="text-white/90 font-medium">longest written warranty</span>{" "}
          in the business.
        </motion.p>

        {/* Pill Buttons */}
        <motion.div
          custom={0.44}
          variants={fadeUp}
          className="flex items-center gap-3 flex-wrap"
        >
          <FlowHoverButton
            href="tel:+14166303325"
            variant="white"
            icon={<Phone size={16} />}
            className="h-11 text-sm px-6"
          >
            (416) 630-3325
          </FlowHoverButton>
          <AnimatedButton href="/#quote" variant="primary" className="h-11 text-sm">
            Get a Free Quote
          </AnimatedButton>
        </motion.div>
      </motion.main>

      {/* ── BOTTOM-RIGHT: Pulsing circle with rotating text ── */}
      <motion.div
        custom={0.8}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="absolute bottom-10 right-8 md:right-12 z-20 w-24 h-24 flex items-center justify-center"
      >
        {/* Pulsing border ring */}
        <PulsingBorder
          colors={["#0274be", "#5bb3f0", "#ffffff", "#0055a5", "#0274be"]}
          speed={1.2}
          roundness={1}
          thickness={0.08}
          softness={0.3}
          intensity={4}
          pulse={0.15}
          style={{ width: "64px", height: "64px", borderRadius: "50%" }}
        />
        {/* Rotating "CAN DO • FENCE & DECK •" text */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ transform: "scale(1.55)" }}
          aria-hidden="true"
        >
          <defs>
            <path id="orbit" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text style={{ fontSize: "8.5px", fill: "rgba(255,255,255,0.65)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, letterSpacing: "0.05em" }}>
            <textPath href="#orbit" startOffset="0%">
              CAN DO • FENCE &amp; DECK • GTA •&nbsp;
            </textPath>
          </text>
        </motion.svg>
      </motion.div>

      {/* Trust strip — top of bottom fade */}
      <motion.div
        custom={0.65}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-6 text-white/40 text-xs whitespace-nowrap"
      >
        {["25+ Years in Business", "5-Year Written Warranty", "WSIB Insured", "Free Quotes"].map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="w-1 h-1 rounded-full bg-white/25" aria-hidden="true" />}
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
