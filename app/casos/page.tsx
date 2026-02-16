import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CasosFilters } from "@/components/CasosFilters";
import { CASOS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Casos reales | Taller Atlas Garage",
  description:
    "Ejemplos de diagnósticos y soluciones: frenos, suspensión, A/C, eléctrico y más.",
};

export default function CasosPage() {
  return (
    <div className="py-12 lg:py-16">
      <Container>
        <h1 className="text-3xl font-bold text-steel-100 mb-2">
          Casos reales
        </h1>
        <p className="text-steel-500 mb-8 max-w-2xl">
          Ejemplos de diagnósticos y soluciones. Cada vehículo es diferente; estos
          casos son ilustrativos.
        </p>

        <CasosFilters casos={CASOS} />
      </Container>
    </div>
  );
}
