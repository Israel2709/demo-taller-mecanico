import type { ServicioCategoria } from "./servicios";

export interface Caso {
  id: string;
  titulo: string;
  sintoma: string;
  diagnostico: string;
  solucion: string;
  tiempoEstimado: string;
  resultado: string;
  categoria: ServicioCategoria;
}

export const CASOS: Caso[] = [
  {
    id: "c1",
    titulo: "Frenos chillando",
    sintoma: "Chillido agudo al frenar, especialmente a bajas velocidades.",
    diagnostico: "Pastillas de freno desgastadas y discos con reborde. Indicador de desgaste activado.",
    solucion: "Reemplazo de pastillas delanteras y rectificado de discos. Limpieza de calipers.",
    tiempoEstimado: "2 hrs",
    resultado: "Frenado silencioso y efectivo. Cliente informado sobre vida útil estimada de las pastillas.",
    categoria: "frenos",
  },
  {
    id: "c2",
    titulo: "Vibración a 80 km/h",
    sintoma: "Vibración en el volante y piso al circular a velocidad constante en carretera.",
    diagnostico: "Desbalance en llantas delanteras. Ligera desalineación detectada.",
    solucion: "Balanceo de las 4 llantas y alineación. Revisión de presión.",
    tiempoEstimado: "1.5 hrs",
    resultado: "Vibración eliminada. Conducción estable en carretera.",
    categoria: "suspension",
  },
  {
    id: "c3",
    titulo: "A/C sin enfriar",
    sintoma: "Aire acondicionado sopla aire a temperatura ambiente.",
    diagnostico: "Nivel bajo de refrigerante R-134a. Fuga menor en conexión de manguera.",
    solucion: "Reparación de conexión, recarga de refrigerante y limpieza de filtro de cabina.",
    tiempoEstimado: "2 hrs",
    resultado: "Temperatura de salida correcta. Cliente orientado a revisar en 6 meses.",
    categoria: "ac",
  },
  {
    id: "c4",
    titulo: "Check engine encendido",
    sintoma: "Luz amarilla de motor encendida. Sin síntomas evidentes de conducción.",
    diagnostico: "Código P0420: eficiencia del catalizador por debajo del umbral. Sensor O2 posterior.",
    solucion: "Reemplazo de sensor de oxígeno posterior. Verificación post-reparación.",
    tiempoEstimado: "1 hr",
    resultado: "Luz apagada. Emisiones dentro de norma.",
    categoria: "preventivo",
  },
  {
    id: "c5",
    titulo: "Auto se va a la derecha",
    sintoma: "Tendencia constante a desviarse hacia la derecha al soltar el volante.",
    diagnostico: "Alineación fuera de especificación. Buje de barra estabilizadora desgastado.",
    solucion: "Reemplazo de buje y alineación completa.",
    tiempoEstimado: "2.5 hrs",
    resultado: "Dirección centrada. Sin desgaste anormal de llantas.",
    categoria: "suspension",
  },
  {
    id: "c6",
    titulo: "Arranque intermitente",
    sintoma: "A veces arranca al primer intento, otras requiere 2-3 intentos.",
    diagnostico: "Batería con capacidad reducida. Bornes con corrosión leve.",
    solucion: "Limpieza de bornes, carga de prueba. Batería reemplazada (4 años de uso).",
    tiempoEstimado: "45 min",
    resultado: "Arranque consistente. Alternador funcionando correctamente.",
    categoria: "electrico",
  },
];
