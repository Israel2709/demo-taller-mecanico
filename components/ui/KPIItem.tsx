import { ReactNode } from "react";

interface KPIItemProps {
  icon: ReactNode;
  title: string;
  description?: string;
}

export function KPIItem({ icon, title, description }: KPIItemProps) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border border-steel-500/20 bg-carbon-700/30 hover:border-amber-cta/30 transition-colors">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-amber-cta/20 text-amber-cta">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-steel-200">{title}</h3>
        {description && (
          <p className="text-sm text-steel-500 mt-0.5">{description}</p>
        )}
      </div>
    </div>
  );
}
