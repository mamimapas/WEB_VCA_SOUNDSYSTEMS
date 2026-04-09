import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GaleriaFiltrable from "@/components/trabajos/GaleriaFiltrable";

export const metadata: Metadata = {
  title: "Proyectos — Festivales y Eventos Sonorizados por VCA Sound",
  description:
    "Galeria de proyectos: Festival Jazz Breton, Ezcaray Fest, Gala Citroen, conciertos y eventos institucionales en toda España. Más de 1.000 eventos con sonido profesional.",
  alternates: {
    canonical: "https://vca-soundsystems.es/trabajos",
  },
  openGraph: {
    title: "Proyectos — Festivales y Eventos Sonorizados por VCA Sound",
    description:
      "Galeria de proyectos audiovisuales: festivales, conciertos, eventos corporativos e institucionales. 50 años de producción técnica en toda España.",
    url: "https://vca-soundsystems.es/trabajos",
  },
};

export default function TrabajosPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Header de pagina */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
              Portfolio
            </p>
            <h1
              className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[#F9FAFB] uppercase leading-none"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Nuestros{" "}
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#C026D3] bg-clip-text text-transparent">
                trabajos
              </span>
            </h1>
            <p className="mt-6 text-[#9CA3AF] text-lg leading-relaxed max-w-2xl">
              Más de 1.000 eventos a lo largo de 50 años. Festivales, conciertos,
              galas corporativas, actos institucionales y producciones de streaming.
              Filtra por tipo de evento para encontrar proyectos similares al tuyo.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/presupuesto"
              className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-semibold text-sm uppercase tracking-wide px-6 py-3 rounded-sm transition-colors duration-200"
            >
              Solicitar presupuesto
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Separador */}
        <div className="mt-12 h-px bg-gradient-to-r from-[#FF6B35]/30 via-[#374151] to-transparent" />
      </section>

      {/* Galeria con filtros */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <GaleriaFiltrable />
      </section>

      {/* CTA inferior */}
      <section className="bg-[#111827] border-t border-[#374151]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
            El próximo puede ser el tuyo
          </p>
          <h2
            className="text-5xl sm:text-6xl font-bold text-[#F9FAFB] uppercase mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Hablemos de tu evento
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-10 max-w-xl mx-auto">
            Cuantenos que tienes en mente. En 24 horas te enviamos una propuesta
            técnica adaptada a tu proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/presupuesto"
              className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-semibold text-sm uppercase tracking-wide px-8 py-4 rounded-sm transition-colors duration-200"
            >
              Solicitar presupuesto
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 border border-[#374151] hover:border-[#FF6B35] text-[#F9FAFB] hover:text-[#FF6B35] font-semibold text-sm uppercase tracking-wide px-8 py-4 rounded-sm transition-colors duration-200"
            >
              Contactar directamente
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
