import type { ServicioCategoria } from "./servicios";

export interface Promocion {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: ServicioCategoria | "general";
  vigencia: string;
  badge?: string;
}

export const PROMOCIONES: Promocion[] = [
  {
    id: "p1",
    titulo: "Diagnóstico OBD2 sin costo",
    descripcion: "Al realizar cualquier servicio de reparación, el diagnóstico electrónico va incluido.",
    categoria: "preventivo",
    vigencia: "Válido todo el mes",
    badge: "Popular",
  },
  {
    id: "p2",
    titulo: "Cambio de aceite + filtro",
    descripcion: "Aceite sintético 5W-30 + filtro. Incluye revisión de niveles y presión de llantas.",
    categoria: "preventivo",
    vigencia: "Hasta fin de mes",
    badge: "Ahorro",
  },
  {
    id: "p3",
    titulo: "Kit de frenos delanteros",
    descripcion: "Pastillas y discos delanteros. Incluye mano de obra y líquido de frenos.",
    categoria: "frenos",
    vigencia: "Válido 15 días",
  },
  {
    id: "p4",
    titulo: "Alineación + balanceo",
    descripcion: "Combo alineación 4 ruedas y balanceo. Ideal antes de viajes largos.",
    categoria: "suspension",
    vigencia: "Todo febrero",
  },
  {
    id: "p5",
    titulo: "Recarga de A/C",
    descripcion: "Recarga R-134a + revisión de fugas. Incluye limpieza de filtro de cabina.",
    categoria: "ac",
    vigencia: "Hasta agotar existencias",
  },
  {
    id: "p6",
    titulo: "Afinación mayor",
    descripcion: "Bujías, filtros de aire y combustible. Descuento en mano de obra.",
    categoria: "motor",
    vigencia: "Válido todo el mes",
    badge: "Mantenimiento",
  },
];
