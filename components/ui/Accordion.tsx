"use client";

import { ReactNode, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border border-steel-500/20 rounded-lg overflow-hidden bg-carbon-700/30"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between px-4 py-4 text-left font-medium text-steel-200 hover:bg-carbon-600/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-cta focus-visible:ring-inset"
              aria-expanded={isOpen}
            >
              {item.title}
              <FiChevronDown
                className={`w-5 h-5 text-steel-400 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-steel-400 text-sm">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
