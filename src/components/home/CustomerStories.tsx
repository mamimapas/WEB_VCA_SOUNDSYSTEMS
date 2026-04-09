"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Users, Calendar } from "lucide-react";

const HISTORIAS_DESTACADAS = [
  {
    imagen: "/images/trabajos/evento-03.jpg",
    titulo: "Festival de Jazz Breton",
    categoria: "Festival",
    asistentes: "5.000",
    descripcion:
      "Sonorizacion completa del festival de jazz mas importante de La Rioja. Sistema JBL VTX line array, iluminacion de escenario y streaming en directo.",
    ano: "2020",
    slug: "festival-jazz-breton",
  },
  {
    imagen: "/images/trabajos/evento-08.jpg",
    titulo: "Ezcaray Fest",
    categoria: "Festival",
    asistentes: "3.500",
    descripcion:
      "Diseno integral de sonido e iluminacion para el festival de musica de Ezcaray. Produccion completa de escenario y estructura.",
    ano: "2020",
    slug: "ezcaray-fest",
  },
  {
    imagen: "/images/trabajos/evento-05.jpeg",
    titulo: "Gala Citroen",
    categoria: "Corporativo",
    asistentes: "800",
    descripcion:
      "Evento corporativo premium para Citroen. Sonido, iluminacion cinematografica, pantalla LED y streaming para distribuidores a nivel nacional.",
    ano: "2020",
    slug: "gala-citroen",
  },
];

export default function CustomerStories() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-3">
              Nuestros proyectos
            </p>
            <h2
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F9FAFB] uppercase leading-none"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Eventos que{" "}
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#C026D3] bg-clip-text text-transparent">
                hablaron
              </span>{" "}
              por si solos
            </h2>
          </div>
          <Link
            href="/trabajos"
            className="flex-shrink-0 inline-flex items-center gap-2 text-[#9CA3AF] hover:text-[#FF6B35] text-sm font-medium transition-colors"
          >
            Ver todos los trabajos
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HISTORIAS_DESTACADAS.map((historia, index) => (
            <motion.article
              key={historia.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-[#0A0A0A] border border-[#374151] rounded-sm overflow-hidden hover:border-[#FF6B35]/40 transition-all duration-300"
            >
              {/* Imagen */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={historia.imagen}
                  alt={`${historia.titulo} — Produccion audiovisual por VCA Sound Systems`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* Overlay degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                {/* Badge categoria */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-[#FF6B35] text-white text-xs font-semibold uppercase tracking-wide rounded-sm">
                    {historia.categoria}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3
                  className="text-2xl font-bold text-[#F9FAFB] uppercase mb-3"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {historia.titulo}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
                  {historia.descripcion}
                </p>

                {/* Metricas */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#374151]">
                  <div className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
                    <Users size={12} className="text-[#FF6B35]" aria-hidden="true" />
                    <span>{historia.asistentes} asistentes</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
                    <Calendar size={12} className="text-[#FF6B35]" aria-hidden="true" />
                    <span>{historia.ano}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
