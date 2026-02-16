import type { Metadata } from "next";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { ContactoForm } from "@/components/ContactoForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto | Taller Atlas Garage",
  description: "Contáctanos por formulario, teléfono, WhatsApp o visítanos.",
};

export default function ContactoPage() {
  return (
    <div className="py-12 lg:py-16">
      <Container>
        <h1 className="text-3xl font-bold text-steel-100 mb-2">
          Contacto
        </h1>
        <p className="text-steel-500 mb-12">
          Escríbenos o llámanos. Te respondemos lo antes posible.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <ContactoForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-semibold text-steel-200 mb-4">Datos de contacto</h2>
              <ul className="space-y-3 text-steel-500">
                <li className="flex items-start gap-3">
                  <FiMapPin className="flex-shrink-0 mt-0.5" />
                  {SITE.address}
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone />
                  <a href={`tel:${SITE.phone}`} className="hover:text-amber-cta">
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FiMail />
                  <a href={`mailto:${SITE.email}`} className="hover:text-amber-cta">
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-steel-200 mb-4">Horario</h2>
              <ul className="space-y-1 text-steel-500">
                <li className="flex items-center gap-2">
                  <FiClock />
                  {SITE.schedule.weekdays}
                </li>
                <li className="pl-6">{SITE.schedule.saturday}</li>
                <li className="pl-6">{SITE.schedule.sunday}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-steel-200 mb-4">Ubicación</h2>
              <div className="aspect-video rounded-lg bg-carbon-700 border border-steel-500/20 flex items-center justify-center text-steel-500">
                Mapa placeholder
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
