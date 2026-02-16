"use client";

import { ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
}

export function Tabs({ items, activeId, onChange }: TabsProps) {
  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-steel-500/30 pb-4 mb-6">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-cta focus-visible:ring-offset-2 focus-visible:ring-offset-carbon-900 ${
              activeId === item.id
                ? "bg-amber-cta text-carbon-900"
                : "bg-carbon-700/50 text-steel-400 hover:text-amber-cta hover:bg-carbon-600/50"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div>
        {items.find((i) => i.id === activeId)?.content}
      </div>
    </div>
  );
}
