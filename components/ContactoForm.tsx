"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/Button";

const schema = z.object({
  nombre: z.string().min(2, "Mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefono: z.string().min(10, "Teléfono inválido"),
  mensaje: z.string().min(10, "Mínimo 10 caracteres"),
  preferencia: z.enum(["whatsapp", "llamada", "correo"]),
});

type FormData = z.infer<typeof schema>;

export function ContactoForm() {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { preferencia: "whatsapp" },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="p-8 rounded-lg border border-green-500/30 bg-green-500/10 text-green-400">
        <p className="font-medium">Mensaje enviado</p>
        <p className="text-sm mt-2">
          Te contactaremos pronto según tu preferencia indicada.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-steel-300 mb-2">
          Nombre
        </label>
        <input
          id="nombre"
          {...register("nombre")}
          className="w-full px-4 py-2 rounded-lg bg-carbon-700 border border-steel-500/30 text-steel-200 focus:outline-none focus:ring-2 focus:ring-amber-cta focus:border-transparent"
        />
        {errors.nombre && (
          <p className="mt-1 text-sm text-red-400">{errors.nombre.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-steel-300 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full px-4 py-2 rounded-lg bg-carbon-700 border border-steel-500/30 text-steel-200 focus:outline-none focus:ring-2 focus:ring-amber-cta focus:border-transparent"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-steel-300 mb-2">
          Teléfono
        </label>
        <input
          id="telefono"
          type="tel"
          {...register("telefono")}
          className="w-full px-4 py-2 rounded-lg bg-carbon-700 border border-steel-500/30 text-steel-200 focus:outline-none focus:ring-2 focus:ring-amber-cta focus:border-transparent"
        />
        {errors.telefono && (
          <p className="mt-1 text-sm text-red-400">{errors.telefono.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-steel-300 mb-2">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          {...register("mensaje")}
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-carbon-700 border border-steel-500/30 text-steel-200 focus:outline-none focus:ring-2 focus:ring-amber-cta focus:border-transparent resize-none"
        />
        {errors.mensaje && (
          <p className="mt-1 text-sm text-red-400">{errors.mensaje.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-steel-300 mb-2">
          Preferencia de contacto
        </label>
        <div className="space-y-2">
          {[
            { value: "whatsapp", label: "WhatsApp" },
            { value: "llamada", label: "Llamada" },
            { value: "correo", label: "Correo" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                {...register("preferencia")}
                value={opt.value}
                className="rounded-full border-steel-500 text-amber-cta focus:ring-amber-cta"
              />
              <span className="text-steel-400">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Button type="submit" variant="primary">
        Enviar mensaje
      </Button>
    </form>
  );
}
