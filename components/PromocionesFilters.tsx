"use client";

import { useState } from "react";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import type { Promocion } from "@/lib/data/promociones";
import { CATEGORIAS } from "@/lib/data/servicios";

export function PromocionesFilters({ promociones }: { promociones: Promocion[] }) {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? promociones
      : promociones.filter((p) => p.categoria === filter);

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
          Todas
        </button>
        {["preventivo", "frenos", "suspension", "motor", "ac"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === cat
                ? "bg-amber-cta text-carbon-900"
                : "bg-carbon-700/50 text-steel-400 hover:text-amber-cta"
            }`}
          >
            {categoryLabel(cat)}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <Card key={p.id} className="p-6">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-steel-200">{p.titulo}</h3>
              {p.badge && <Badge variant="amber">{p.badge}</Badge>}
            </div>
            <p className="text-sm text-steel-500 mb-2">{p.descripcion}</p>
            <p className="text-xs text-electric-blue-dim mb-4">{p.vigencia}</p>
            <Button href="/cotizar" variant="primary" className="w-full">
              Aplicar promo al cotizar
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
