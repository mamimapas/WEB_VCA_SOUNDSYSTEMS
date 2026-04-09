import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiciosGrid from "@/components/servicios/ServiciosGrid";

export const metadata: Metadata = {
  title: "Servicios de Sonido e Iluminación para Eventos — VCA Sound Systems",
  description:
    "Alquiler e instalación de sonido, iluminación, videoproyección, streaming y estructuras para festivales, eventos corporativos y conciertos en La Rioja y toda España.",
  alternates: {
    canonical: "https://vca-soundsystems.es/servicios",
  },
  openGraph: {
    title: "Servicios de Sonido e Iluminación para Eventos — VCA Sound Systems",
    description:
      "6 servicios integrales para cualquier tipo de evento. Sonido JBL, iluminación MA Lighting, streaming multicamara y más. 50 años de experiencia en La Rioja.",
    url: "https://vca-soundsystems.es/servicios",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Servicios de VCA Sound Systems",
  description: "Servicios profesionales de sonido, iluminación y video para eventos",
  url: "https://vca-soundsystems.es/servicios",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Sonido Profesional para Eventos",
      url: "https://vca-soundsystems.es/servicios/sonido-profesional-eventos",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Iluminación Profesional para Eventos",
      url: "https://vca-soundsystems.es/servicios/iluminacion-profesional-eventos",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Videoproyección y Pantalla LED",
      url: "https://vca-soundsystems.es/servicios/videoproyeccion-pantalla-led",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Streaming y Retransmisión de Eventos",
      url: "https://vca-soundsystems.es/servicios/streaming-retransmision-eventos",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Estructuras y Escenarios",
      url: "https://vca-soundsystems.es/servicios/estructuras-escenarios",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Grabación de Eventos y Videos Corporativos",
      url: "https://vca-soundsystems.es/servicios/grabacion-eventos",
    },
  ],
};

export default function ServiciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero de seccion */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Ruta de navegacion" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[#9CA3AF]">
              <li>
                <Link href="/" className="hover:text-[#FF6B35] transition-colors">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">
                <ArrowRight size={12} className="text-[#374151]" />
              </li>
              <li className="text-[#F9FAFB]" aria-current="page">
                Servicios
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
              Servicios integrales
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[#F9FAFB] uppercase leading-none mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Todo lo que necesita{" "}
              <span className="text-[#9CA3AF]">tu evento</span>
            </h1>
            <p className="text-[#9CA3AF] text-lg sm:text-xl leading-relaxed max-w-2xl">
              Desde el primer cable hasta el último foco. Llevamos 50 años haciendo que cada evento
              suene, se vea y se sienta exactamente como debe. No somos un proveedor más — somos
              parte de tu equipo técnico el día que más importa.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de servicios */}
      <ServiciosGrid />

      {/* Seccion por que elegirnos */}
      <section className="py-20 sm:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
                Por que trabajar con nosotros
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] uppercase leading-none mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Un equipo,{" "}
                <span className="bg-gradient-to-r from-[#FF6B35] to-[#C026D3] bg-clip-text text-transparent">
                  no un proveedor
                </span>
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-8">
                Cuando nos contratas para tu evento, no firmas un contrato con una empresa de
                alquiler de equipos. Te incorporas a un equipo técnico de 50 años de experiencia
                que conoce cada escenario, cada sala y cada tipo de evento que se puede producir
                en La Rioja y en la Península.
              </p>
              <p className="text-[#9CA3AF] text-base leading-relaxed">
                El día de tu evento no eres un cliente — eres el centro de todo lo que hacemos.
                Llegamos antes, nos quedamos hasta que el último asistente se va y resolvemos
                cualquier imprevisto antes de que el público lo note.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  numero: "50",
                  unidad: "años",
                  descripción: "de experiencia en producción de eventos en vivo",
                },
                {
                  numero: "+1.000",
                  unidad: "eventos",
                  descripción: "sonorizados y producidos en toda España",
                },
                {
                  numero: "6",
                  unidad: "servicios",
                  descripción: "integrales bajo un mismo equipo técnico",
                },
                {
                  numero: "100%",
                  unidad: "Península",
                  descripción: "cobertura nacional de servicio técnico",
                },
              ].map((stat) => (
                <div
                  key={stat.numero}
                  className="p-6 bg-[#111827] border border-[#374151] rounded-sm"
                >
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className="text-4xl font-bold text-[#FF6B35]"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {stat.numero}
                    </span>
                    <span
                      className="text-xl font-bold text-[#F9FAFB] uppercase"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {stat.unidad}
                    </span>
                  </div>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{stat.descripción}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA presupuesto */}
      <section className="py-16 sm:py-20 bg-[#111827] border-t border-[#374151]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Cuéntanos tu evento
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-8 max-w-xl mx-auto">
            Respondemos en menos de 24 horas con una propuesta técnica adaptada a tu producción
            y tu presupuesto.
          </p>
          <Link
            href="/presupuesto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B35] text-white font-semibold uppercase tracking-wide hover:bg-[#FF6B35]/90 transition-colors duration-200"
          >
            Solicitar presupuesto
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
