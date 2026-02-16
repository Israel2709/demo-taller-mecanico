import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "amber" | "blue";
  className?: string;
}

const variants = {
  default:
    "bg-steel-500/20 text-steel-300 border border-steel-500/30",
  amber:
    "bg-amber-cta/20 text-amber-light border border-amber-cta/40",
  blue:
    "bg-electric-blue/20 text-electric-blue-dim border border-electric-blue/40",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
