export interface Testimonio {
  id: string;
  nombre: string;
  texto: string;
  vehiculo?: string;
  servicio?: string;
}

export const TESTIMONIOS: Testimonio[] = [
  {
    id: "t1",
    nombre: "Roberto M.",
    texto: "Llevé mi Jetta por los frenos. Me explicaron bien qué necesitaba y el presupuesto fue claro desde el inicio. Sin sorpresas.",
    vehiculo: "VW Jetta 2018",
    servicio: "Frenos",
  },
  {
    id: "t2",
    nombre: "Ana L.",
    texto: "El diagnóstico OBD2 me ayudó a entender el problema antes de gastar. Muy profesionales y puntuales con la entrega.",
    vehiculo: "Nissan Versa 2020",
    servicio: "Diagnóstico",
  },
  {
    id: "t3",
    nombre: "Carlos G.",
    texto: "Tenía vibración en carretera. Balanceo y alineación solucionaron el problema. Precio justo.",
    vehiculo: "Honda Civic 2019",
    servicio: "Suspensión",
  },
  {
    id: "t4",
    nombre: "María S.",
    texto: "El A/C no enfriaba. En un par de horas quedó listo. Me dieron recomendaciones para mantenerlo.",
    vehiculo: "Mazda 3 2017",
    servicio: "A/C",
  },
];
