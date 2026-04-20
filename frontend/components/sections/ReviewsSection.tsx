"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    name: "Michael T.",
    role: "Vaughan, ON",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Can Do did an absolutely incredible job on our backyard fence. From the first call to the final post, everything was professional and on time. The crew was clean, respectful of our property, and finished ahead of schedule.",
  },
  {
    name: "Sandra & James K.",
    role: "Richmond Hill, ON",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "We had both a fence and a deck done by Can Do this summer and couldn't be happier. The deck turned out beautifully — cedar with a black picket rail, exactly what we wanted. The 5-year warranty gave us real peace of mind.",
  },
  {
    name: "David L.",
    role: "Markham, ON",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
    text: "After getting quotes from four companies, Can Do stood out for their professionalism and competitive pricing. They were the only ones who offered a written guarantee on the property line. Five stars without hesitation.",
  },
  {
    name: "Priya N.",
    role: "Mississauga, ON",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Second time using Can Do — first for a fence, now for a pressure treated deck. Both experiences were seamless. They're organized, show up when they say they will, and the quality is consistent. The real deal.",
  },
  {
    name: "Tony M.",
    role: "Brampton, ON",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
    text: "Had Can Do install a cedar board-on-board privacy fence along our entire backyard. Looks absolutely stunning. The team was knowledgeable, worked fast, and cleaned up everything after. Neighbors keep asking who did it!",
  },
  {
    name: "Lisa & Rob F.",
    role: "Scarborough, ON",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
    text: "We replaced our old rotting fence with a new cedar privacy fence. Can Do handled everything from permits to cleanup. Priced fairly and the workmanship is excellent. Very happy we chose them.",
  },
  {
    name: "Ahmed K.",
    role: "North York, ON",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 5,
    text: "Couldn't be more pleased with the composite Trex deck they built. It looks premium and I know it'll last. The project manager kept me updated throughout and the final product exceeded my expectations.",
  },
  {
    name: "Grace T.",
    role: "Etobicoke, ON",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    rating: 5,
    text: "From quote to completion in under 2 weeks. The pressure treated fence they installed has transformed our backyard. Professional crew, great communication, and the written warranty gives me total confidence.",
  },
  {
    name: "Steve & Carol B.",
    role: "Pickering, ON",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    text: "Can Do built us a beautiful multi-level deck with built-in planters. The crew was respectful, clean, and genuinely proud of their craft. This is a company that stands behind its work. Highly recommend.",
  },
];

function ReviewCard({ name, role, image, rating, text }: typeof testimonials[number]) {
  return (
    <div className="w-[340px] shrink-0 mx-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: rating }).map((_, s) => (
          <Star key={s} size={16} className="fill-[#F5A623] text-[#F5A623]" />
        ))}
      </div>
      {/* Text */}
      <p className="text-gray-600 text-sm leading-relaxed mb-5">
        &ldquo;{text}&rdquo;
      </p>
      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-100"
        />
        <div>
          <div className="text-[#0f1117] font-semibold text-sm leading-tight">{name}</div>
          <div className="text-gray-400 text-xs leading-tight mt-0.5">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      className="section-pad bg-white overflow-hidden relative"
      aria-labelledby="reviews-heading"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <p className="text-[#0274be] text-sm font-semibold uppercase tracking-widest mb-3">
            Customer Reviews
          </p>
          <h2
            id="reviews-heading"
            className="text-[#0f1117] mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            What Our Customers Say
          </h2>
          <div className="divider-brand mx-auto mb-6" />

          {/* Overall rating */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="fill-[#F5A623] text-[#F5A623]" />
              ))}
            </div>
            <span className="text-[#0f1117] font-bold text-2xl">4.9</span>
            <span className="text-gray-500 text-sm">Based on hundreds of GTA reviews</span>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scrolling reviews */}
      <Marquee duration={40} pauseOnHover fade fadeAmount={6}>
        {testimonials.map((t) => (
          <ReviewCard key={t.name} {...t} />
        ))}
      </Marquee>
    </section>
  );
}
