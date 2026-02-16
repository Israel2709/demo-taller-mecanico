"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/Button";
import { SITE } from "@/lib/site";
import { SERVICIOS } from "@/lib/data/servicios";

const COTIZAR_STORAGE_KEY = "atlas-ultima-cotizacion";

const schema = z.object({
  marca: z.string().min(2, "Requerido"),
  modelo: z.string().min(2, "Requerido"),
  anio: z.string().min(4, "Año inválido"),
  transmision: z.enum(["automatico", "manual"]),
  servicio: z.string().min(1, "Selecciona un servicio"),
  sintoma: z.string().min(10, "Describe el síntoma (mín. 10 caracteres)"),
  lucesTablero: z.boolean(),
  fechaPreferida: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

function buildWhatsAppMessage(data: FormData): string {
  const servicio = SERVICIOS.find((s) => s.id === data.servicio)?.nombre ?? data.servicio;
  const trans = data.transmision === "automatico" ? "Automático" : "Manual";
  return [
    `Hola, solicito cotización:`,
    ``,
    `*Vehículo:* ${data.marca} ${data.modelo} ${data.anio} (${trans})`,
    `*Servicio:* ${servicio}`,
    `*Síntoma:* ${data.sintoma}`,
    data.lucesTablero ? `*Luces en tablero:* Sí` : ``,
    data.fechaPreferida ? `*Fecha preferida:* ${data.fechaPreferida}` : ``,
  ]
    .filter(Boolean)
    .join("\n");
}

export function CotizarForm() {
  const [enviado, setEnviado] = useState(false);
  const [datosEnviados, setDatosEnviados] = useState<FormData | null>(null);
  const [ultimaCotizacion, setUltimaCotizacion] = useState<FormData | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COTIZAR_STORAGE_KEY);
      if (stored) {
        setUltimaCotizacion(JSON.parse(stored) as FormData);
      }
    } catch {
      // ignore
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      transmision: "automatico",
      lucesTablero: false,
    },
  });

  const formData = watch();

  const onSubmit = (data: FormData) => {
    localStorage.setItem(COTIZAR_STORAGE_KEY, JSON.stringify(data));
    setDatosEnviados(data);
    setEnviado(true);
  };

  if (enviado && datosEnviados) {
    const msg = buildWhatsAppMessage(datosEnviados);
    const whatsappUrl = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;

    return (
      <div className="max-w-2xl space-y-8">
        <div className="p-8 rounded-lg border border-green-500/30 bg-green-500/10 text-green-400">
          <p className="font-medium">Cotización registrada</p>
          <p className="text-sm mt-2">
            Usa el botón para enviar los datos por WhatsApp y recibir tu presupuesto.
          </p>
        </div>

        <div className="p-6 rounded-lg border border-steel-500/20 bg-carbon-700/30">
          <h3 className="font-semibold text-steel-200 mb-4">Resumen</h3>
          <pre className="text-sm text-steel-500 whitespace-pre-wrap font-sans">
            {buildWhatsAppMessage(datosEnviados)}
          </pre>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold text-lg transition-colors"
        >
          Enviar por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      {ultimaCotizacion && (
        <div className="mb-8 p-4 rounded-lg border border-amber-cta/30 bg-amber-cta/10">
          <p className="text-sm text-amber-light font-medium">
            Última cotización: {ultimaCotizacion.marca} {ultimaCotizacion.modelo}{" "}
            {ultimaCotizacion.anio} – {SERVICIOS.find((s) => s.id === ultimaCotizacion.servicio)?.nombre}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Step 1: Datos del auto */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-steel-200">
            Paso 1: Datos del vehículo
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="marca" className="block text-sm font-medium text-steel-300 mb-2">
                Marca
              </label>
              <input
                id="marca"
                {...register("marca")}
                placeholder="Ej. Volkswagen"
                className="w-full px-4 py-2 rounded-lg bg-carbon-700 border border-steel-500/30 text-steel-200 focus:outline-none focus:ring-2 focus:ring-amber-cta"
              />
              {errors.marca && (
                <p className="mt-1 text-sm text-red-400">{errors.marca.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="modelo" className="block text-sm font-medium text-steel-300 mb-2">
                Modelo
              </label>
              <input
                id="modelo"
                {...register("modelo")}
                placeholder="Ej. Jetta"
                className="w-full px-4 py-2 rounded-lg bg-carbon-700 border border-steel-500/30 text-steel-200 focus:outline-none focus:ring-2 focus:ring-amber-cta"
              />
              {errors.modelo && (
                <p className="mt-1 text-sm text-red-400">{errors.modelo.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="anio" className="block text-sm font-medium text-steel-300 mb-2">
                Año
              </label>
              <input
                id="anio"
                {...register("anio")}
                type="number"
                min="1990"
                max={new Date().getFullYear() + 1}
                placeholder="Ej. 2018"
                className="w-full px-4 py-2 rounded-lg bg-carbon-700 border border-steel-500/30 text-steel-200 focus:outline-none focus:ring-2 focus:ring-amber-cta"
              />
              {errors.anio && (
                <p className="mt-1 text-sm text-red-400">{errors.anio.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-steel-300 mb-2">
                Transmisión
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    {...register("transmision")}
                    value="automatico"
                    className="rounded-full border-steel-500 text-amber-cta"
                  />
                  <span className="text-steel-400">Automático</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    {...register("transmision")}
                    value="manual"
                    className="rounded-full border-steel-500 text-amber-cta"
                  />
                  <span className="text-steel-400">Manual</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Servicio y síntoma */}
        <div className="space-y-6 pt-8 border-t border-steel-500/20">
          <h2 className="text-xl font-semibold text-steel-200">
            Paso 2: Servicio requerido
          </h2>
          <div>
            <label htmlFor="servicio" className="block text-sm font-medium text-steel-300 mb-2">
              Servicio
            </label>
            <select
              id="servicio"
              {...register("servicio")}
              className="w-full px-4 py-2 rounded-lg bg-carbon-700 border border-steel-500/30 text-steel-200 focus:outline-none focus:ring-2 focus:ring-amber-cta"
            >
              <option value="">Selecciona...</option>
              {SERVICIOS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.nombre}
                </option>
              ))}
            </select>
            {errors.servicio && (
              <p className="mt-1 text-sm text-red-400">{errors.servicio.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="sintoma" className="block text-sm font-medium text-steel-300 mb-2">
              Síntoma o descripción
            </label>
            <textarea
              id="sintoma"
              {...register("sintoma")}
              rows={4}
              placeholder="Describe qué le pasa a tu auto..."
              className="w-full px-4 py-2 rounded-lg bg-carbon-700 border border-steel-500/30 text-steel-200 focus:outline-none focus:ring-2 focus:ring-amber-cta resize-none"
            />
            {errors.sintoma && (
              <p className="mt-1 text-sm text-red-400">{errors.sintoma.message}</p>
            )}
          </div>
          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                {...register("lucesTablero")}
                className="rounded border-steel-500 text-amber-cta focus:ring-amber-cta"
              />
              <span className="text-steel-400">¿Luces encendidas en el tablero?</span>
            </label>
          </div>
          <div>
            <label htmlFor="fechaPreferida" className="block text-sm font-medium text-steel-300 mb-2">
              Fecha preferida (opcional)
            </label>
            <input
              id="fechaPreferida"
              type="date"
              {...register("fechaPreferida")}
              className="w-full px-4 py-2 rounded-lg bg-carbon-700 border border-steel-500/30 text-steel-200 focus:outline-none focus:ring-2 focus:ring-amber-cta"
            />
          </div>
        </div>

        {/* Subir fotos - solo UI */}
        <div className="pt-8 border-t border-steel-500/20">
          <h2 className="text-xl font-semibold text-steel-200 mb-4">
            Fotos (opcional)
          </h2>
          <div className="p-8 rounded-lg border-2 border-dashed border-steel-500/30 text-center text-steel-500">
            Arrastra fotos aquí o haz clic para seleccionar. Se enviarán por WhatsApp.
          </div>
        </div>

        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          Enviar cotización
        </Button>
      </form>
    </div>
  );
}
