"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTAFinal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden bg-[#0A0A0A]"
      aria-labelledby="cta-heading"
    >
      {/* Gradiente de fondo */}
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,107,53,0.15) 0%, rgba(192,38,211,0.10) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-5"
        >
          Hablemos de tu proximo evento
        </motion.p>

        {/* Headline */}
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[#F9FAFB] uppercase leading-none mb-6"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Tienes un evento.{" "}
          <span className="bg-gradient-to-r from-[#FF6B35] to-[#C026D3] bg-clip-text text-transparent">
            Nosotros lo hacemos sonar.
          </span>
        </motion.h2>

        {/* Subtitulo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#9CA3AF] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Cuantenos su proyecto. En menos de 24 horas le enviamos un presupuesto detallado
          sin compromiso. 50 anos de experiencia a su servicio en toda la Peninsula.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/presupuesto"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#FF6B35] text-white font-semibold text-sm uppercase tracking-wide rounded-sm hover:bg-[#FF6B35]/90 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
          >
            Solicitar presupuesto gratis
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+34610325421"
            className="inline-flex items-center gap-2 px-10 py-4 border border-[#374151] text-[#F9FAFB] font-semibold text-sm uppercase tracking-wide rounded-sm hover:border-[#FF6B35]/60 hover:text-[#FF6B35] transition-colors duration-200"
          >
            <Phone size={14} />
            610 325 421
          </a>
        </motion.div>
      </div>
    </section>
  );
}
