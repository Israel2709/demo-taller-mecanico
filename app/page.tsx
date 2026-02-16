import Link from "next/link";
import Image from "next/image";
import { FiCheckCircle, FiClipboard, FiCalendar, FiPackage } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { KPIItem } from "@/components/ui/KPIItem";
import { Timeline } from "@/components/ui/Timeline";
import { SITE } from "@/lib/site";
import { SERVICIOS, CATEGORIAS } from "@/lib/data/servicios";
import { PROMOCIONES } from "@/lib/data/promociones";
import { CASOS } from "@/lib/data/casos";
import { TESTIMONIOS } from "@/lib/data/testimonios";
import { HomeTestimonials } from "@/components/HomeTestimonials";
import { ServiciosTabsClient } from "@/components/ServiciosTabsClient";

const DIAGNOSTICO_STEPS = [
  {
    number: 1,
    title: "Revisión y escaneo",
    description: "Conectamos el escáner OBD2 y revisamos el historial de códigos y sensores.",
  },
  {
    number: 2,
    title: "Hallazgos y presupuesto",
    description: "Te explicamos qué encontramos y te damos una cotización clara antes de trabajar.",
  },
  {
    number: 3,
    title: "Reparación y prueba",
    description: "Ejecutamos el trabajo acordado y verificamos que todo funcione correctamente.",
  },
];

export default function HomePage() {
  const tabItems = CATEGORIAS.map((cat) => ({
    id: cat.id,
    label: cat.label,
    content: (
      <div className="grid sm:grid-cols-2 gap-4">
        {SERVICIOS.filter((s) => s.categoria === cat.id)
          .slice(0, 4)
          .map((s) => (
            <div
              key={s.id}
              className="p-4 rounded-lg border border-steel-500/20 bg-carbon-700/30 dark:bg-carbon-800/50"
            >
              <h4 className="font-semibold text-steel-200 mb-1">{s.nombre}</h4>
              <p className="text-sm text-steel-500">{s.descripcion}</p>
            </div>
          ))}
      </div>
    ),
  }));

  return (
    <>
      {/* Hero - Split layout */}
      <section className="relative min-h-[85vh] flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col justify-center px-4 py-12 lg:py-24 order-2 lg:order-1">
          <Container>
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-steel-100 dark:text-steel-100 tracking-tight">
                {SITE.name}
              </h1>
              <p className="mt-4 text-xl text-steel-400">{SITE.slogan}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
                  variant="primary"
                  className="!inline-flex"
                >
                  Cotizar por WhatsApp
                </Button>
                <Button href="/servicios" variant="outline">
                  Ver servicios
                </Button>
              </div>
            </div>
          </Container>
        </div>

        <div className="flex-1 relative min-h-[35vh] lg:min-h-[85vh] order-1 lg:order-2">
          <div className="absolute inset-0 bg-carbon-800 bg-blueprint-pattern bg-blueprint bg-metal-texture" />
          <div className="absolute inset-0">
            <Image
              src="/hero-placeholder-mobile.png"
              alt="Taller mecánico"
              fill
              className="object-cover opacity-90 lg:hidden"
              priority
              sizes="100vw"
            />
            <Image
              src="/hero-placeholder.png"
              alt="Taller mecánico"
              fill
              className="object-cover opacity-90 hidden lg:block"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-carbon-900/90 via-carbon-900/40 to-transparent lg:from-carbon-900/70 pointer-events-none" />
        </div>
      </section>

      {/* KPI Rail - debajo del hero, flujo normal */}
      <section className="border-t border-gray-200 dark:border-steel-500/20 bg-gray-100 dark:bg-carbon-800/30 -mt-px">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8">
            <KPIItem
              icon={<FiCheckCircle className="w-5 h-5" />}
              title="Diagnóstico OBD2"
              description="Escaneo preciso"
            />
            <KPIItem
              icon={<FiClipboard className="w-5 h-5" />}
              title="Cotización clara"
              description="Sin sorpresas"
            />
            <KPIItem
              icon={<FiCalendar className="w-5 h-5" />}
              title="Entrega programada"
              description="Respetamos tiempos"
            />
            <KPIItem
              icon={<FiPackage className="w-5 h-5" />}
              title="Refacciones verificadas"
              description="Calidad asegurada"
            />
          </div>
        </Container>
      </section>

      {/* Diagnóstico en 3 pasos */}
      <section className="py-16 lg:py-24 bg-carbon-800/50 dark:bg-carbon-900/50 border-y border-steel-500/10">
        <Container>
          <h2 className="text-3xl font-bold text-center text-steel-100 mb-4">
            Diagnóstico en 3 pasos
          </h2>
          <p className="text-center text-steel-500 max-w-2xl mx-auto mb-12">
            Un proceso transparente para que sepas qué necesita tu auto antes de invertir.
          </p>
          <Timeline steps={DIAGNOSTICO_STEPS} />
        </Container>
      </section>

      {/* Servicios por categoría - Tabs */}
      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="text-3xl font-bold text-steel-100 mb-4">
            Servicios por categoría
          </h2>
          <p className="text-steel-500 mb-8 max-w-2xl">
            Desde mantenimiento preventivo hasta reparaciones especializadas.
          </p>
          <ServiciosTabsClient items={tabItems} />
        </Container>
      </section>

      {/* Promos del mes */}
      <section className="py-16 lg:py-24 bg-carbon-800/50 dark:bg-carbon-900/50">
        <Container>
          <h2 className="text-3xl font-bold text-steel-100 mb-4">
            Promos del mes
          </h2>
          <p className="text-steel-500 mb-8">
            Ofertas vigentes. Sujeto a evaluación del vehículo.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROMOCIONES.slice(0, 6).map((p) => (
              <Card key={p.id} className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-steel-200">{p.titulo}</h3>
                  {p.badge && <Badge variant="amber">{p.badge}</Badge>}
                </div>
                <p className="text-sm text-steel-500 mb-4">{p.descripcion}</p>
                <p className="text-xs text-electric-blue-dim mb-4">{p.vigencia}</p>
                <Button href="/cotizar" variant="ghost" className="!p-0 !h-auto">
                  Aplicar promo al cotizar →
                </Button>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/promociones" variant="outline">
              Ver todas las promociones
            </Button>
          </div>
        </Container>
      </section>

      {/* Casos reales */}
      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="text-3xl font-bold text-steel-100 mb-4">
            Casos reales
          </h2>
          <p className="text-steel-500 mb-8 max-w-2xl">
            Ejemplos de diagnósticos y soluciones. Cada vehículo es diferente.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASOS.slice(0, 6).map((c) => (
              <Card key={c.id} className="p-6">
                <Badge variant="blue" className="mb-3">
                  {c.categoria}
                </Badge>
                <h3 className="font-semibold text-steel-200 mb-2">{c.titulo}</h3>
                <p className="text-sm text-steel-500 mb-2">
                  <strong>Síntoma:</strong> {c.sintoma}
                </p>
                <p className="text-sm text-steel-500">
                  <strong>Solución:</strong> {c.solucion}
                </p>
                <Link
                  href="/casos"
                  className="mt-4 inline-block text-sm text-amber-cta hover:underline"
                >
                  Ver más casos →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Opiniones */}
      <section className="py-16 lg:py-24 bg-carbon-800/50 dark:bg-carbon-900/50">
        <Container>
          <h2 className="text-3xl font-bold text-steel-100 mb-4 text-center">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-steel-500 mb-12 text-center max-w-2xl mx-auto">
            Experiencias reales de quienes confían en nosotros.
          </p>
          <HomeTestimonials testimonios={TESTIMONIOS} />
        </Container>
      </section>

      {/* CTA final */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center p-8 rounded-xl border-2 border-amber-cta/30 bg-amber-cta/5">
            <h2 className="text-2xl md:text-3xl font-bold text-steel-100 mb-4">
              Agenda tu diagnóstico
            </h2>
            <p className="text-steel-500 mb-8">
              Cuéntanos qué necesita tu auto y te respondemos con una cotización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
                variant="primary"
                className="!inline-flex"
              >
                WhatsApp
              </Button>
              <Button href="/cotizar" variant="outline">
                Formulario de cotización
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* JSON-LD LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: SITE.name,
            description: SITE.slogan,
            telephone: SITE.phone,
            email: SITE.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: SITE.address,
              addressLocality: "Benito Juárez",
              addressRegion: "CDMX",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:30",
                closes: "18:30",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "14:00",
              },
            ],
          }),
        }}
      />
    </>
  );
}

