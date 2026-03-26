"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Product = {
  id: string;
  name: string;
  material: string;
  description: string;
  badge?: string;
  imageUrl: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#f0f2f5] hover:border-[#0055a5]/30 hover:shadow-2xl transition-all duration-300 hover-lift flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f8f9fb]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#0055a5] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {product.badge}
          </div>
        )}
        {/* Material chip */}
        <div className="absolute bottom-3 right-3 bg-[#0f1117]/70 backdrop-blur-sm text-white/80 text-xs font-medium px-2.5 py-1 rounded-full">
          {product.material}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-[#0f1117] font-bold text-lg mb-2 group-hover:text-[#0055a5] transition-colors duration-200"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {product.name}
        </h3>
        <p className="text-[#0f1117]/60 text-sm leading-relaxed mb-5 flex-1">
          {product.description}
        </p>
        <Link
          href="/#quote"
          className="inline-flex items-center gap-1.5 text-[#0055a5] hover:text-[#0274be] text-sm font-semibold transition-colors duration-200 group/link mt-auto"
        >
          Get a Quote
          <ArrowRight
            size={15}
            className="group-hover/link:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </div>
    </div>
  );
}
