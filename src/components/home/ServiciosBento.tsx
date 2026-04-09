"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Volume2, Lightbulb, Monitor, Radio, Building2, Mic, ArrowRight } from "lucide-react";

const SERVICIOS = [
  {
    icon: Volume2,
    title: "Sonido Profesional",
    description:
      "Sistemas de PA de primera línea — JBL, QSC, dbx — para eventos de cualquier escala. Desde 200 hasta 50.000 asistentes.",
    href: "/servicios/sonido-profesional-eventos",
    size: "col-span-2 lg:col-span-1",
  },
  {
    icon: Lightbulb,
    title: "Iluminación",
    description:
      "Diseños de iluminación que transforman cualquier espacio. Cabezas moviles, LED, wash, beam y efectos especiales.",
    href: "/servicios/iluminacion-profesional-eventos",
    size: "col-span-2 lg:col-span-1",
  },
  {
    icon: Monitor,
    title: "Videoproyección y Pantalla LED",
    description:
      "Pantallas LED indoor/outdoor de alta resolución y sistemas de videoproyección para conferencias, festivales y galas.",
    href: "/servicios/videoproyeccion-pantalla-led",
    size: "col-span-2 lg:col-span-1",
  },
  {
    icon: Radio,
    title: "Streaming en Directo",
    description:
      "Retransmisión profesional de eventos en directo. Multicamara, codificacion HD y distribucion a cualquier plataforma.",
    href: "/servicios/streaming-retransmision-eventos",
    size: "col-span-2 lg:col-span-1",
  },
  {
    icon: Building2,
    title: "Estructuras y Escenarios",
    description:
      "Truss, Ground Support, puentes, torres elevadoras y escenarios adaptables a cualquier recinto.",
    href: "/servicios/estructuras-escenarios",
    size: "col-span-2 lg:col-span-1",
  },
  {
    icon: Mic,
    title: "Grabación",
    description:
      "Grabación multicanal de eventos, videoclips corporativos y directos de audio en nuestro estudio propio.",
    href: "/servicios/grabacion-eventos",
    size: "col-span-2 lg:col-span-1",
  },
];

export default function ServiciosBento() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-3">
            Servicios integrales
          </p>
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F9FAFB] uppercase leading-none mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Todo lo que necesitas{" "}
            <span className="text-[#9CA3AF]">bajo un mismo equipo</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl leading-relaxed">
            No somos un proveedor más. El día de tu evento, nos convertimos en parte de tu equipo técnico.
            50 años de experiencia respaldan cada show.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICIOS.map((servicio, index) => {
            const Icon = servicio.icon;
            return (
              <motion.div
                key={servicio.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href={servicio.href}
                  className="block h-full p-6 sm:p-8 bg-[#111827] border border-[#374151] rounded-sm hover:border-[#FF6B35]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,53,0.15)]"
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FF6B35]/10 rounded-sm mb-5 group-hover:bg-[#FF6B35]/20 transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-[#FF6B35]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#F9FAFB] uppercase mb-3"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {servicio.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
                    {servicio.description}
                  </p>

                  {/* Link indicator */}
                  <div className="flex items-center gap-1 text-[#FF6B35] text-xs font-semibold uppercase tracking-wide group-hover:gap-2 transition-all duration-200">
                    Ver más
                    <ArrowRight size={12} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Ver todos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-[#FF6B35] text-sm font-medium transition-colors"
          >
            Ver todos los servicios
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
