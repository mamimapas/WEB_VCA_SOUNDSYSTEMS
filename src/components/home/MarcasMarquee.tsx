"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const MARCAS = [
  { nombre: "JBL Professional", src: "/images/marcas/marca-jbl.jpeg" },
  { nombre: "dbx Professional", src: "/images/marcas/marca-dbx.png" },
  { nombre: "Shure", src: "/images/marcas/marca-shure.png" },
  { nombre: "QSC", src: "/images/marcas/marca-qsc.png" },
  { nombre: "MA Lighting", src: "/images/marcas/marca-malighting.jpeg" },
  { nombre: "Soundcraft", src: "/images/marcas/marca-soundcraft.jpg" },
  { nombre: "Epson", src: "/images/marcas/marca-epson.png" },
  { nombre: "Panasonic", src: "/images/marcas/marca-panasonic.png" },
];

export default function MarcasMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Duplicamos las marcas para crear el efecto de loop continuo
  const marcasLoop = [...MARCAS, ...MARCAS];

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest mb-2">
            Distribuidores oficiales
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#F9FAFB] uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Primeras marcas del mundo del audio
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div
        className="relative"
        aria-label="Marcas distribuidoras: JBL, dbx, Shure, QSC, MA Lighting, Soundcraft, Epson, Panasonic"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex items-center gap-12 animate-marquee">
            {marcasLoop.map((marca, index) => (
              <div
                key={`${marca.nombre}-${index}`}
                className="flex-shrink-0 w-28 h-14 relative flex items-center justify-center"
              >
                <Image
                  src={marca.src}
                  alt={`${marca.nombre} — distribuidor oficial VCA Sound Systems`}
                  width={112}
                  height={56}
                  className="object-contain filter brightness-50 hover:brightness-100 transition-all duration-300 max-h-12 w-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
