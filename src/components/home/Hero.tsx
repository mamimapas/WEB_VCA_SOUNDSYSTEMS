"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image (video se añadirá cuando Eusebio entregue material real) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/trabajos/evento-01.jpg)" }}
          aria-hidden="true"
        />
        {/* Overlay oscuro multi-capa */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]/90" />
        <div className="absolute inset-0 bg-[#0A0A0A]/30" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B35]/40 bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-8"
        >
          <Play size={10} fill="currentColor" />
          Desde 1975 — 50 años de experiencia
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-6xl sm:text-7xl lg:text-9xl font-bold text-[#F9FAFB] leading-none tracking-tight mb-6 uppercase"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          50 Años Haciendo{" "}
          <span className="bg-gradient-to-r from-[#FF6B35] to-[#C026D3] bg-clip-text text-transparent">
            Que los Eventos
          </span>{" "}
          Suenen Diferente
        </motion.h1>

        {/* Subtitulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#9CA3AF] text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Sonido, iluminación y video profesional para festivales, conciertos y eventos
          corporativos en toda la Península. El día de tu evento, somos parte de tu equipo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/presupuesto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B35] text-white font-semibold text-sm uppercase tracking-wide rounded-sm hover:bg-[#FF6B35]/90 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
          >
            Solicitar presupuesto
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/trabajos"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#374151] text-[#F9FAFB] font-semibold text-sm uppercase tracking-wide rounded-sm hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors duration-200"
          >
            Ver trabajos
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[#9CA3AF] text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#FF6B35] to-transparent" />
      </motion.div>
    </section>
  );
}
