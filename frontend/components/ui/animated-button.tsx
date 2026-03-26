"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
  className?: string;
  disabled?: boolean;
}

export function AnimatedButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className,
  disabled,
}: AnimatedButtonProps) {
  const base = cn(
    "relative text-sm font-semibold rounded-full h-12 p-1 ps-6 pe-14",
    "group transition-all duration-500 hover:ps-14 hover:pe-6",
    "w-fit overflow-hidden cursor-pointer inline-flex items-center",
    variant === "primary"
      ? "bg-[#0055a5] text-white hover:bg-[#0274be]"
      : "bg-transparent border-2 border-[#0274be] text-[#0274be] hover:text-white hover:bg-[#0274be]",
    disabled && "opacity-60 pointer-events-none",
    className
  );

  const inner = (
    <>
      <span className="relative z-10 transition-all duration-500 whitespace-nowrap">
        {children}
      </span>
      <div
        className={cn(
          "absolute right-1 w-10 h-10 rounded-full flex items-center justify-center",
          "transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45",
          variant === "primary"
            ? "bg-white text-[#0055a5]"
            : "bg-[#0274be] text-white group-hover:bg-white group-hover:text-[#0274be]"
        )}
      >
        <ArrowUpRight size={16} />
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {inner}
    </button>
  );
}