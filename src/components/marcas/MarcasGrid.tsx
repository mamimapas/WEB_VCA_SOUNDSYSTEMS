"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MARCAS_DISTRIBUIDORAS, CATEGORIAS_MARCAS } from "@/data/marcas";

type Categoría = (typeof CATEGORIAS_MARCAS)[number] | "Todas";

export default function MarcasGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [categoriaActiva, setCategoriaActiva] = useState<Categoría>("Todas");

  const categorías: Categoría[] = ["Todas", ...CATEGORIAS_MARCAS];

  const marcasFiltradas =
    categoriaActiva === "Todas"
      ? MARCAS_DISTRIBUIDORAS
      : MARCAS_DISTRIBUIDORAS.filter((m) => m.categoría === categoriaActiva);

  return (
    <section ref={ref} className="py-16 pb-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filtrar marcas por categoría"
        >
          {categorías.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={categoriaActiva === cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-200 rounded-sm ${
                categoriaActiva === cat
                  ? "bg-[#FF6B35] text-white"
                  : "bg-[#111827] border border-[#374151] text-[#9CA3AF] hover:border-[#FF6B35]/50 hover:text-[#F9FAFB]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid de cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="tabpanel"
          aria-label={`Marcas de la categoría ${categoriaActiva}`}
        >
          {marcasFiltradas.map((marca, index) => (
            <motion.article
              key={marca.nombre}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.4) }}
              className="group p-6 sm:p-8 bg-[#111827] border border-[#374151] rounded-sm hover:border-[#FF6B35]/50 transition-all duration-300 hover:shadow-[0_0_24px_rgba(255,107,53,0.10)] flex flex-col"
            >
              {/* Logo */}
              <div className="flex items-center justify-center h-16 mb-6">
                <Image
                  src={marca.src}
                  alt={`${marca.nombre} — distribuidor oficial en La Rioja`}
                  width={120}
                  height={60}
                  className="object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300 max-h-14 w-auto"
                  loading="lazy"
                />
              </div>

              {/* Badge categoría */}
              <div className="mb-3">
                <span className="inline-block px-2.5 py-1 bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-semibold uppercase tracking-wide rounded-sm">
                  {marca.categoría}
                </span>
              </div>

              {/* Nombre */}
              <h2
                className="text-2xl font-bold text-[#F9FAFB] uppercase mb-3 leading-tight"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {marca.nombre}
              </h2>

              {/* Descripción */}
              <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5 flex-1">
                {marca.descripción}
              </p>

              {/* Servicios relacionados */}
              {marca.serviciosRelacionados.length > 0 && (
                <div className="pt-4 border-t border-[#374151] mb-5">
                  <p className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-wide mb-2">
                    Usada en
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {marca.serviciosRelacionados.map((slug) => (
                      <Link
                        key={slug}
                        href={`/servicios/${slug}`}
                        className="px-2.5 py-1 bg-[#0A0A0A] border border-[#374151] text-[#9CA3AF] text-xs hover:border-[#FF6B35]/50 hover:text-[#FF6B35] transition-colors duration-200 rounded-sm"
                      >
                        {formatSlug(slug)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <Link
                href="/contacto"
                className="inline-flex items-center gap-1.5 text-[#FF6B35] text-xs font-semibold uppercase tracking-wide group-hover:gap-2.5 transition-all duration-200 mt-auto"
              >
                Solicitar información
                <ArrowRight size={11} />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mensaje si no hay resultados */}
        {marcasFiltradas.length === 0 && (
          <p className="text-center text-[#9CA3AF] py-16">
            No hay marcas en esta categoría. Prueba otra opcion.
          </p>
        )}
      </div>
    </section>
  );
}

function formatSlug(slug: string): string {
  const nombres: Record<string, string> = {
    "sonido-profesional-eventos": "Sonido",
    "iluminacion-profesional-eventos": "Iluminación",
    "videoproyeccion-pantalla-led": "Video LED",
    "streaming-retransmision-eventos": "Streaming",
    "estructuras-escenarios": "Estructuras",
    "grabacion-eventos": "Grabación",
  };
  return nombres[slug] ?? slug;
}
