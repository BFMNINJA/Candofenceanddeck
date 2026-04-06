"use client";

import {
  Shield,
  Award,
  Users,
  Star,
  CheckCircle,
  Clock,
  FileCheck,
  ThumbsUp,
  Hammer,
  MapPin,
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const trustItems = [
  { icon: Award, stat: "25+ Years", label: "In Business Since 1998" },
  { icon: Shield, stat: "5-Year", label: "Written Warranty" },
  { icon: CheckCircle, stat: "WSIB", label: "Fully Insured & Covered" },
  { icon: Users, stat: "1,000s", label: "Of Satisfied Customers" },
  { icon: Star, stat: "Free", label: "No-Obligation Quotes" },
  { icon: Clock, stat: "Same Week", label: "Response Guaranteed" },
  { icon: FileCheck, stat: "Written", label: "Property Line Guarantee" },
  { icon: ThumbsUp, stat: "Top Rated", label: "On Google Reviews" },
  { icon: Hammer, stat: "Cedar & PT", label: "Premium Materials Used" },
  { icon: MapPin, stat: "33 Cities", label: "Across the GTA" },
];

function TrustItem({
  icon: Icon,
  stat,
  label,
}: {
  icon: React.ElementType;
  stat: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 mx-8 shrink-0">
      <div className="w-9 h-9 rounded-full bg-[#0055a5]/10 flex items-center justify-center shrink-0">
        <Icon size={16} className="text-[#0055a5]" />
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-[#0f1117] font-bold text-sm leading-none">{stat}</span>
        <span className="text-gray-500 text-xs leading-none">{label}</span>
      </div>
      {/* Dot separator */}
      <span className="w-1 h-1 rounded-full bg-gray-300 ml-4 shrink-0" aria-hidden="true" />
    </div>
  );
}

export default function TrustBar() {
  return (
    <section
      className="bg-[#f8f9fb] py-5 overflow-hidden"
      style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
      aria-label="Trust signals"
    >
      <Marquee duration={35} pauseOnHover fade fadeAmount={8}>
        {trustItems.map((item) => (
          <TrustItem key={item.stat + item.label} icon={item.icon} stat={item.stat} label={item.label} />
        ))}
      </Marquee>
    </section>
  );
}
