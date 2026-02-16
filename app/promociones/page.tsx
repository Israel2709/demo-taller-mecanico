import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PromocionesFilters } from "@/components/PromocionesFilters";
import { PROMOCIONES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Promociones | Taller Atlas Garage",
  description: "Ofertas vigentes en diagnóstico, frenos, suspensión, afinación y más.",
};

export default function PromocionesPage() {
  return (
    <div className="py-12 lg:py-16">
      <Container>
        <h1 className="text-3xl font-bold text-steel-100 mb-2">
          Promociones
        </h1>
        <p className="text-steel-500 mb-8">
          Ofertas vigentes. Sujeto a evaluación del vehículo.
        </p>

        <PromocionesFilters promociones={PROMOCIONES} />

        <p className="mt-8 text-xs text-steel-500">
          * Las promociones están sujetas a disponibilidad y evaluación del estado
          del vehículo. Consulta al cotizar.
        </p>
      </Container>
    </div>
  );
}
