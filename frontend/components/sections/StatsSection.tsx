"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 25, suffix: "+", label: "Years in Business" },
  { value: 1000, suffix: "+", label: "Projects Completed" },
  { value: 180, suffix: "+", label: "5-Star Reviews" },
  { value: 33, suffix: "", label: "Cities Served" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(value, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const formatted = count >= 1000 ? count.toLocaleString() : count.toString();

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-5xl lg:text-6xl font-bold text-[#0055a5] mb-2"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {formatted}{suffix}
      </div>
      <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#f8f9fb]" aria-label="Company highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#0274be] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Track Record
          </p>
          <h2
            className="text-[#0f1117] mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Highlights
          </h2>
          <div className="divider-brand mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
