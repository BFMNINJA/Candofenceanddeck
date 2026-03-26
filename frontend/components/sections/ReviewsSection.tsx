"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    name: "Michael T.",
    role: "Vaughan, ON · September 2024",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Can Do did an absolutely incredible job on our backyard fence. From the first call to the final post, everything was professional and on time. The crew was clean, respectful of our property, and finished ahead of schedule.",
  },
  {
    name: "Sandra & James K.",
    role: "Richmond Hill, ON · July 2024",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "We had both a fence and a deck done by Can Do this summer and couldn't be happier. The deck turned out beautifully — cedar with a black picket rail, exactly what we wanted. The 5-year warranty gave us real peace of mind.",
  },
  {
    name: "David L.",
    role: "Markham, ON · May 2024",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
    text: "After getting quotes from four companies, Can Do stood out for their professionalism and competitive pricing. They were the only ones who offered a written guarantee on the property line. Five stars without hesitation.",
  },
  {
    name: "Priya N.",
    role: "Mississauga, ON · August 2024",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Second time using Can Do — first for a fence, now for a pressure treated deck. Both experiences were seamless. They're organized, show up when they say they will, and the quality is consistent. The real deal.",
  },
  {
    name: "Tony M.",
    role: "Brampton, ON · June 2024",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
    text: "Had Can Do install a double drive cedar gate with iron inserts. Looks absolutely stunning. The team was knowledgeable, worked fast, and cleaned up everything after. Neighbors keep asking who did it!",
  },
  {
    name: "Lisa & Rob F.",
    role: "Scarborough, ON · April 2024",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
    text: "We replaced our old rotting fence with a new cedar privacy fence. Can Do handled everything from permits to cleanup. Priced fairly and the workmanship is excellent. Very happy we chose them.",
  },
  {
    name: "Ahmed K.",
    role: "North York, ON · October 2024",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 5,
    text: "Couldn't be more pleased with the composite Trex deck they built. It looks premium and I know it'll last. The project manager kept me updated throughout and the final product exceeded my expectations.",
  },
  {
    name: "Grace T.",
    role: "Etobicoke, ON · March 2024",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    rating: 5,
    text: "From quote to completion in under 2 weeks. The pressure treated fence they installed has transformed our backyard. Professional crew, great communication, and the written warranty gives me total confidence.",
  },
  {
    name: "Steve & Carol B.",
    role: "Pickering, ON · November 2024",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    text: "Can Do built us a beautiful multi-level deck with built-in planters. The crew was respectful, clean, and genuinely proud of their craft. This is a company that stands behind its work. Highly recommend.",
  },
];

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

export default function ReviewsSection() {
  return (
    <section
      className="section-pad bg-[#0055a5] overflow-hidden relative"
      aria-labelledby="reviews-heading"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, #0274be 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
            Customer Reviews
          </p>
          <h2
            id="reviews-heading"
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            What Our Customers Say
          </h2>
          <div className="w-14 h-1 rounded-full bg-white/30 mb-6" />

          {/* Overall rating */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="fill-[#F5A623] text-[#F5A623]" />
              ))}
            </div>
            <span className="text-white font-bold text-2xl">4.9</span>
            <span className="text-white/60 text-sm">Based on hundreds of GTA reviews</span>
          </div>
        </motion.div>

        {/* Scrolling columns */}
        <div className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn}  duration={18} />
          <TestimonialsColumn testimonials={secondColumn} duration={22} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn}  duration={20} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
