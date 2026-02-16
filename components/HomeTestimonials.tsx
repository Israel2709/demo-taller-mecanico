"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Testimonio } from "@/lib/data/testimonios";
import { Card } from "./ui/Card";

export function HomeTestimonials({ testimonios }: { testimonios: Testimonio[] }) {
  const [index, setIndex] = useState(0);
  const current = testimonios[index % testimonios.length];

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-8">
        <blockquote className="text-steel-300 italic mb-4">
          &ldquo;{current.texto}&rdquo;
        </blockquote>
        <footer>
          <cite className="not-italic font-semibold text-amber-cta">
            {current.nombre}
          </cite>
          {(current.vehiculo || current.servicio) && (
            <p className="text-sm text-steel-500 mt-1">
              {[current.vehiculo, current.servicio].filter(Boolean).join(" • ")}
            </p>
          )}
        </footer>
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setIndex((i) => (i - 1 + testimonios.length) % testimonios.length)}
            className="p-2 rounded-lg text-steel-500 hover:text-amber-cta hover:bg-carbon-700/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-cta"
            aria-label="Anterior"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % testimonios.length)}
            className="p-2 rounded-lg text-steel-500 hover:text-amber-cta hover:bg-carbon-700/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-cta"
            aria-label="Siguiente"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </Card>
    </div>
  );
}
