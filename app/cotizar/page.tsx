import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CotizarForm } from "@/components/CotizarForm";

export const metadata: Metadata = {
  title: "Cotizar | Taller Atlas Garage",
  description: "Solicita una cotización para tu vehículo. Diagnóstico y presupuesto sin compromiso.",
};

export default function CotizarPage() {
  return (
    <div className="py-12 lg:py-16">
      <Container>
        <h1 className="text-3xl font-bold text-steel-100 mb-2">
          Solicitar cotización
        </h1>
        <p className="text-steel-500 mb-12 max-w-2xl">
          Completa los datos de tu auto y el servicio que necesitas. Te respondemos
          con un presupuesto estimado.
        </p>

        <CotizarForm />
      </Container>
    </div>
  );
}
