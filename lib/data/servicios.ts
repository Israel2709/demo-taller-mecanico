export type ServicioCategoria =
  | "preventivo"
  | "frenos"
  | "suspension"
  | "motor"
  | "electrico"
  | "ac";

export interface Servicio {
  id: string;
  nombre: string;
  categoria: ServicioCategoria;
  descripcion: string;
  incluye: string[];
  tiempoEstimado: string;
  senales: string[];
}

export const SERVICIOS: Servicio[] = [
  {
    id: "diagnostico-obd2",
    nombre: "Diagnóstico OBD2",
    categoria: "preventivo",
    descripcion: "Escaneo electrónico completo para identificar códigos de falla y monitorear sensores.",
    incluye: [
      "Lectura de códigos DTC",
      "Revisión de sensores",
      "Informe impreso o digital",
    ],
    tiempoEstimado: "30-45 min",
    senales: [
      "Luces de tablero encendidas",
      "Rendimiento irregular",
      "Consumo excesivo de combustible",
    ],
  },
  {
    id: "cambio-aceite",
    nombre: "Cambio de aceite y filtro",
    categoria: "preventivo",
    descripcion: "Aceite de calidad y filtro nuevo para mantener el motor en óptimas condiciones.",
    incluye: [
      "Aceite sintético o mineral",
      "Filtro de aceite",
      "Revisión de niveles",
    ],
    tiempoEstimado: "45-60 min",
    senales: [
      "Aceite oscuro o sucio",
      "Kilometraje recomendado alcanzado",
      "Motor con ruidos extraños",
    ],
  },
  {
    id: "frenos-completos",
    nombre: "Servicio de frenos",
    categoria: "frenos",
    descripcion: "Revisión y reparación del sistema de frenado: pastillas, discos, líquido.",
    incluye: [
      "Revisión de pastillas y discos",
      "Líquido de frenos",
      "Prueba de frenado",
    ],
    tiempoEstimado: "1-2 hrs",
    senales: [
      "Chillidos o vibración al frenar",
      "Pedal esponjoso",
      "Luz de frenos en tablero",
    ],
  },
  {
    id: "alineacion",
    nombre: "Alineación y balanceo",
    categoria: "suspension",
    descripcion: "Alineación de geometría y balanceo de llantas para manejo estable.",
    incluye: [
      "Alineación 4 ruedas",
      "Balanceo",
      "Revisión de presión",
    ],
    tiempoEstimado: "1-1.5 hrs",
    senales: [
      "Auto se va a un lado",
      "Vibración a velocidad constante",
      "Desgaste irregular de llantas",
    ],
  },
  {
    id: "amortiguadores",
    nombre: "Amortiguadores y suspensión",
    categoria: "suspension",
    descripcion: "Revisión y reemplazo de amortiguadores, bujes y componentes de suspensión.",
    incluye: [
      "Diagnóstico de suspensión",
      "Reemplazo de amortiguadores",
      "Revisión de bujes",
    ],
    tiempoEstimado: "2-4 hrs",
    senales: [
      "Rebotes excesivos",
      "Ruidos al pasar baches",
      'Auto "baja" o hundido',
    ],
  },
  {
    id: "afinacion",
    nombre: "Afinación mayor",
    categoria: "motor",
    descripcion: "Mantenimiento completo del motor: bujías, filtros, limpieza de inyectores.",
    incluye: [
      "Bujías",
      "Filtro de aire",
      "Filtro de combustible",
      "Revisión de correas",
    ],
    tiempoEstimado: "2-3 hrs",
    senales: [
      "Arranque difícil",
      "Pérdida de potencia",
      "Más de 40,000 km sin afinación",
    ],
  },
  {
    id: "bateria",
    nombre: "Sistema eléctrico y batería",
    categoria: "electrico",
    descripcion: "Prueba de batería, alternador y sistema de carga.",
    incluye: [
      "Prueba de carga",
      "Revisión de bornes",
      "Diagnóstico de alternador",
    ],
    tiempoEstimado: "30-60 min",
    senales: [
      "Arranque lento",
      "Luces tenues",
      "Batería con más de 3 años",
    ],
  },
  {
    id: "aire-acondicionado",
    nombre: "Aire acondicionado",
    categoria: "ac",
    descripcion: "Recarga de refrigerante, revisión de fugas y limpieza del sistema.",
    incluye: [
      "Recarga de R-134a",
      "Revisión de fugas",
      "Limpieza de filtro de cabina",
    ],
    tiempoEstimado: "1-2 hrs",
    senales: [
      "No enfría o enfría poco",
      "Olor extraño",
      "Ruidos al activar A/C",
    ],
  },
];

export const CATEGORIAS: { id: ServicioCategoria; label: string }[] = [
  { id: "preventivo", label: "Preventivo" },
  { id: "frenos", label: "Frenos" },
  { id: "suspension", label: "Suspensión" },
  { id: "motor", label: "Motor" },
  { id: "electrico", label: "Eléctrico" },
  { id: "ac", label: "A/C" },
];
