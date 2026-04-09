"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Servicio } from "@/data/servicios";
import ServicioIcon from "@/components/ui/ServicioIcon";

interface Props {
  servicio: Servicio;
}

export default function ServicioHero({ servicio }: Props) {

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* Glow de fondo sutil */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #FF6B35 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Ruta de navegacion"
          className="mb-10"
        >
          <ol className="flex items-center gap-2 text-sm text-[#9CA3AF]">
            <li>
              <Link href="/" className="hover:text-[#FF6B35] transition-colors">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">
              <ArrowRight size={12} className="text-[#374151]" />
            </li>
            <li>
              <Link href="/servicios" className="hover:text-[#FF6B35] transition-colors">
                Servicios
              </Link>
            </li>
            <li aria-hidden="true">
              <ArrowRight size={12} className="text-[#374151]" />
            </li>
            <li className="text-[#F9FAFB] truncate max-w-[200px]" aria-current="page">
              {servicio.titulo}
            </li>
          </ol>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Icono + categoria */}
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-[#FF6B35]/10 rounded-sm">
                <ServicioIcon name={servicio.iconName} size={20} className="text-[#FF6B35]" />
              </div>
              <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest">
                Servicio profesional
              </p>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F9FAFB] uppercase leading-none mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              {servicio.titulo}
            </h1>

            <p className="text-[#9CA3AF] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              {servicio.subtitulo}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href={`/presupuesto?servicio=${servicio.slug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF6B35] text-white font-semibold uppercase tracking-wide text-sm hover:bg-[#FF6B35]/90 transition-colors duration-200"
              >
                Solicitar presupuesto
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/servicios"
                className="text-[#9CA3AF] hover:text-[#F9FAFB] text-sm font-medium transition-colors flex items-center gap-1"
              >
                Ver todos los servicios
                <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>

          {/* Tarjeta de stats / descripcion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="p-8 bg-[#111827] border border-[#374151] rounded-sm"
          >
            <p className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest mb-4">
              Descripcion del servicio
            </p>
            <p className="text-[#F9FAFB] text-base leading-relaxed mb-6">
              {servicio.descripcionCorta}
            </p>

            <div className="pt-6 border-t border-[#374151]">
              <p className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest mb-3">
                Cobertura
              </p>
              <div className="flex flex-wrap gap-2">
                {["La Rioja", "Navarra", "Pais Vasco", "Aragon", "Madrid", "Peninsula Iberica"].map(
                  (zona) => (
                    <span
                      key={zona}
                      className="px-3 py-1 bg-[#0A0A0A] border border-[#374151] text-[#9CA3AF] text-xs rounded-sm"
                    >
                      {zona}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#374151]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
                <p className="text-[#9CA3AF] text-sm">
                  Disponibilidad: consultar fechas por{" "}
                  <Link
                    href="https://wa.me/+34610325421"
                    className="text-[#FF6B35] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
