import type { Metadata } from "next";
import { Suspense } from "react";
import CalculadoraPresupuesto from "@/components/presupuesto/CalculadoraPresupuesto";

export const metadata: Metadata = {
  title: "Solicitar Presupuesto — Calculadora de Sonido e Iluminacion",
  description:
    "Solicita un presupuesto personalizado para tu evento en pocos pasos. Sonido, iluminacion, streaming, estructuras y mas. Respuesta garantizada en menos de 24 horas.",
  alternates: {
    canonical: "https://vca-soundsystems.es/presupuesto",
  },
  openGraph: {
    title: "Solicitar Presupuesto — VCA Sound Systems",
    description:
      "Configura tu solicitud de presupuesto paso a paso. Tipo de evento, asistentes, servicios y duracion. Te respondemos en menos de 24 horas.",
    url: "https://vca-soundsystems.es/presupuesto",
  },
};

const presupuestoSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://vca-soundsystems.es/presupuesto",
  name: "Solicitar Presupuesto — VCA Sound Systems",
  description:
    "Formulario de solicitud de presupuesto para equipos de sonido, iluminacion y video profesional para eventos.",
  url: "https://vca-soundsystems.es/presupuesto",
  provider: {
    "@id": "https://vca-soundsystems.es",
  },
};

export default function PresupuestoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(presupuestoSchema) }}
      />

      {/* Hero de seccion */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#FF6B35] text-xs font-bold uppercase tracking-widest mb-3">
            Sin compromiso
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F9FAFB] uppercase leading-tight mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Solicita tu presupuesto
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Cuéntanos como es tu evento y te enviamos una propuesta personalizada en menos de 24 horas. Sin letra pequena, sin sorpresas.
          </p>
        </div>
      </section>

      {/* Calculadora */}
      <section className="pb-24 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111827] border border-[#374151] rounded-2xl p-6 sm:p-10">
            <Suspense fallback={
              <div className="flex items-center justify-center py-20 text-[#9CA3AF]">
                Cargando calculadora...
              </div>
            }>
              <CalculadoraPresupuesto />
            </Suspense>
          </div>

          {/* Garantias debajo del formulario */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { label: "Respuesta en 24h", desc: "Te contactamos el mismo dia laboral" },
              { label: "Sin compromiso", desc: "Pedir presupuesto no te obliga a nada" },
              { label: "Atencion directa", desc: "Hablas con el tecnico, no con un bot" },
            ].map(({ label, desc }) => (
              <div key={label} className="bg-[#111827] border border-[#374151] rounded-lg p-4">
                <p
                  className="text-[#FF6B35] font-bold text-sm uppercase mb-1"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {label}
                </p>
                <p className="text-[#9CA3AF] text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
