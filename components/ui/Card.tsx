import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 dark:border-steel-500/20 bg-white dark:bg-carbon-700/50 backdrop-blur-sm dark:bg-carbon-800/80 shadow-sm dark:shadow-none ${className}`}
    >
      {children}
    </div>
  );
}
