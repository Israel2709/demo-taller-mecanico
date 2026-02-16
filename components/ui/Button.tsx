import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-amber-cta text-carbon-900 font-semibold hover:bg-amber-cta-hover focus-visible:ring-2 focus-visible:ring-amber-cta focus-visible:ring-offset-2 focus-visible:ring-offset-carbon-900",
  secondary:
    "bg-electric-blue text-white font-semibold hover:bg-electric-blue-dim focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 dark:focus-visible:ring-offset-carbon-800",
  outline:
    "border-2 border-steel-400 text-steel-400 hover:border-amber-cta hover:text-amber-cta focus-visible:ring-2 focus-visible:ring-amber-cta",
  ghost:
    "text-steel-400 hover:text-amber-cta hover:bg-carbon-700/50 focus-visible:ring-2 focus-visible:ring-amber-cta",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  const combined = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combined}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
