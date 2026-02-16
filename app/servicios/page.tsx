import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ServiciosContent } from "@/components/ServiciosContent";
import { SERVICIOS, CATEGORIAS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicios | Taller Atlas Garage",
  description:
    "Diagnóstico OBD2, frenos, suspensión, afinación, aire acondicionado, eléctrico y servicios preventivos.",
};

export default function ServiciosPage() {
  return (
    <div className="py-12 lg:py-16">
      <Container>
        <div className="lg:flex gap-12">
          {/* Sidebar - Servicios rápidos */}
          <aside className="lg:w-56 flex-shrink-0 mb-8 lg:mb-0">
            <h3 className="font-semibold text-steel-200 mb-4">Servicios rápidos</h3>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {CATEGORIAS.map((cat) => (
                <Link
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-3 py-2 rounded-lg text-sm bg-carbon-700/50 text-steel-400 hover:text-amber-cta hover:bg-carbon-600/50 transition-colors"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold text-steel-100 mb-2">
              Nuestros servicios
            </h1>
            <p className="text-steel-500 mb-12">
              Lista detallada de lo que ofrecemos. Cada servicio incluye diagnóstico previo cuando aplica.
            </p>
            <ServiciosContent servicios={SERVICIOS} />
          </div>
        </div>
      </Container>
    </div>
  );
}
