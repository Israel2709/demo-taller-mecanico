"use client";

import { Accordion } from "./ui/Accordion";
import { Badge } from "./ui/Badge";
import type { Servicio } from "@/lib/data/servicios";
import { CATEGORIAS } from "@/lib/data/servicios";

export function ServiciosContent({ servicios }: { servicios: Servicio[] }) {
  const byCategory = CATEGORIAS.map((cat) => ({
    ...cat,
    items: servicios.filter((s) => s.categoria === cat.id),
  }));

  return (
    <div className="space-y-16">
      {byCategory.map(({ id, label, items }) =>
        items.length > 0 ? (
          <section key={id} id={id} className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-steel-200 mb-6">{label}</h2>
            <Accordion
              items={items.map((s) => ({
                id: s.id,
                title: s.nombre,
                content: (
                  <div className="space-y-4">
                    <p>{s.descripcion}</p>
                    <div>
                      <h4 className="font-medium text-steel-300 mb-2">Qué incluye</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {s.incluye.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-steel-300 mb-2">Tiempo estimado</h4>
                      <p>{s.tiempoEstimado}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-steel-300 mb-2">
                        Señales de que lo necesitas
                      </h4>
                      <ul className="flex flex-wrap gap-2">
                        {s.senales.map((sen) => (
                          <Badge key={sen} variant="blue">
                            {sen}
                          </Badge>
                        ))}
                      </ul>
                    </div>
                  </div>
                ),
              }))}
            />
          </section>
        ) : null
      )}
    </div>
  );
}
