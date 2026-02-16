import type { Metadata } from "next";
import { FiTool, FiAward, FiCheckCircle } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros | Taller Atlas Garage",
  description: "Conoce la historia, valores y equipo de Taller Atlas Garage.",
};

const VALORES = [
  "Transparencia en diagnósticos y presupuestos",
  "Comunicación clara con el cliente",
  "Uso de refacciones verificadas",
  "Documentación del trabajo realizado",
];

const HERRAMIENTAS = [
  "Escáner OBD2 profesional",
  "Elevador de 2 columnas",
  "Llave de torque calibrada",
  "Máquina de balanceo",
  "Recuperador de refrigerante",
  "Multímetro y probador de batería",
];

const EQUIPO = [
  {
    nombre: "Miguel Torres",
    rol: "Mecánico titular",
    desc: "15 años de experiencia. Especialista en diagnóstico electrónico y sistemas de frenado.",
  },
  {
    nombre: "Laura Reyes",
    rol: "Mecánica / Eléctrico automotriz",
    desc: "Certificación en sistemas eléctricos. Enfocada en A/C y diagnóstico OBD2.",
  },
  {
    nombre: "Andrés López",
    rol: "Auxiliar de taller",
    desc: "Atención al cliente y apoyo en servicios preventivos. En formación continua.",
  },
];

const GARANTIA_CHECKLIST = [
  "Diagnóstico documentado antes de reparar",
  "Presupuesto por escrito",
  "Refacciones con factura o garantía de proveedor",
  "Prueba de funcionamiento post-reparación",
  "Entrega en tiempo acordado cuando es posible",
];

export default function NosotrosPage() {
  return (
    <div className="py-12 lg:py-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Columna 1: Historia + Valores */}
          <div>
            <h1 className="text-3xl font-bold text-steel-100 mb-6">
              Sobre nosotros
            </h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-steel-500 mb-6">
                Taller Atlas Garage nació con la idea de ofrecer un servicio mecánico
                donde el cliente entienda qué necesita su auto antes de invertir.
                Creemos que un buen diagnóstico es la base de una reparación exitosa.
              </p>
              <p className="text-steel-500 mb-8">
                Trabajamos con herramientas actualizadas y seguimos procedimientos
                que nos permiten dar un servicio confiable. No prometemos milagros,
                pero sí un trato honesto y un trabajo bien hecho.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-steel-200 mb-4">Valores</h2>
            <ul className="space-y-2">
              {VALORES.map((v) => (
                <li key={v} className="flex items-start gap-2 text-steel-500">
                  <FiCheckCircle className="flex-shrink-0 mt-0.5 text-amber-cta" />
                  {v}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 2: Herramientas + Equipo */}
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-semibold text-steel-200 mb-4">
                Herramientas y certificaciones
              </h2>
              <div className="flex flex-wrap gap-2">
                {HERRAMIENTAS.map((h) => (
                  <Badge key={h} variant="blue">
                    {h}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-steel-200 mb-4">Equipo</h2>
              <div className="space-y-4">
                {EQUIPO.map((e) => (
                  <Card key={e.nombre} className="p-6">
                    <h3 className="font-semibold text-steel-200">{e.nombre}</h3>
                    <p className="text-sm text-amber-cta mb-2">{e.rol}</p>
                    <p className="text-sm text-steel-500">{e.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Garantía de proceso */}
        <section className="mt-16 p-8 rounded-xl border border-steel-500/20 bg-carbon-800/50">
          <h2 className="text-xl font-semibold text-steel-200 mb-4 flex items-center gap-2">
            <FiAward className="text-amber-cta" />
            Garantía de proceso
          </h2>
          <p className="text-steel-500 mb-6 max-w-2xl">
            No prometemos garantías absolutas (cada caso es diferente), pero nos
            comprometemos con estas prácticas:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {GARANTIA_CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-2 text-steel-400">
                <FiTool className="flex-shrink-0 text-electric-blue" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </div>
  );
}
