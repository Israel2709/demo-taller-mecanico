"use client";

import { useState } from "react";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import type { Caso } from "@/lib/data/casos";
import { CATEGORIAS } from "@/lib/data/servicios";

export function CasosFilters({ casos }: { casos: Caso[] }) {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? casos : casos.filter((c) => c.categoria === filter);

  const categoryLabel = (id: string) =>
    CATEGORIAS.find((c) => c.id === id)?.label ?? id;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === "all"
              ? "bg-amber-cta text-carbon-900"
              : "bg-carbon-700/50 text-steel-400 hover:text-amber-cta"
          }`}
        >
          Todos
        </button>
        {CATEGORIAS.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === cat.id
                ? "bg-amber-cta text-carbon-900"
                : "bg-carbon-700/50 text-steel-400 hover:text-amber-cta"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((c) => (
          <Card key={c.id} className="p-6">
            <Badge variant="blue" className="mb-3">
              {categoryLabel(c.categoria)}
            </Badge>
            <h3 className="font-semibold text-steel-200 mb-4">{c.titulo}</h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong className="text-steel-300">Síntoma:</strong>{" "}
                <span className="text-steel-500">{c.sintoma}</span>
              </p>
              <p>
                <strong className="text-steel-300">Diagnóstico:</strong>{" "}
                <span className="text-steel-500">{c.diagnostico}</span>
              </p>
              <p>
                <strong className="text-steel-300">Solución:</strong>{" "}
                <span className="text-steel-500">{c.solucion}</span>
              </p>
              <p>
                <strong className="text-steel-300">Tiempo:</strong>{" "}
                <span className="text-steel-500">{c.tiempoEstimado}</span>
              </p>
              <p>
                <strong className="text-steel-300">Resultado:</strong>{" "}
                <span className="text-steel-500">{c.resultado}</span>
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
