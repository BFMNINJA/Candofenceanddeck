import * as React from "react";
import { cn } from "@/lib/utils";

interface FlowHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  variant?: "white" | "blue";
}

export const FlowHoverButton = React.forwardRef<
  HTMLButtonElement,
  FlowHoverButtonProps
>(({ icon, children, href, variant = "white", className, ...props }, ref) => {
  const base = cn(
    "relative cursor-pointer z-0 flex items-center justify-center gap-2 overflow-hidden rounded-full",
    "h-12 px-8 font-semibold transition-all duration-500",
    "before:absolute before:inset-0 before:-z-10",
    "before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]",
    "before:rounded-[100%] before:transition-transform before:duration-700 before:content-['']",
    "hover:scale-[1.03] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95",
    variant === "white"
      ? "border-2 border-white/50 text-white hover:border-white before:bg-white hover:text-[#0055a5]"
      : "border-2 border-[#0274be] text-[#0274be] before:bg-[#0055a5] hover:text-white hover:border-[#0055a5]",
    className
  );

  const inner = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={base}>
        {inner}
      </a>
    );
  }

  return (
    <button ref={ref} className={base} {...props}>
      {inner}
    </button>
  );
});
FlowHoverButton.displayName = "FlowHoverButton";