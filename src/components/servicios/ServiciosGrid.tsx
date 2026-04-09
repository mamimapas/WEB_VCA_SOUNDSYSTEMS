"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICIOS } from "@/data/servicios";
import ServicioIcon from "@/components/ui/ServicioIcon";

export default function ServiciosGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-10 pb-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICIOS.map((servicio, index) => {
            return (
              <motion.div
                key={servicio.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <Link
                  href={`/servicios/${servicio.slug}`}
                  className="flex flex-col h-full p-7 sm:p-8 bg-[#111827] border border-[#374151] rounded-sm hover:border-[#FF6B35]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,53,0.12)]"
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FF6B35]/10 rounded-sm mb-5 group-hover:bg-[#FF6B35]/20 transition-colors duration-300 flex-shrink-0">
                    <ServicioIcon name={servicio.iconName} size={22} className="text-[#FF6B35]" />
                  </div>

                  {/* Content */}
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-[#F9FAFB] uppercase mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {servicio.titulo}
                  </h2>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6 flex-1">
                    {servicio.descripcionCorta}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-1.5 text-[#FF6B35] text-xs font-semibold uppercase tracking-wide group-hover:gap-3 transition-all duration-200 mt-auto">
                    Ver servicio completo
                    <ArrowRight size={12} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
