"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Users, Clock, Cpu } from "lucide-react";
import { CATEGORÍAS, TRABAJOS, type Categoría } from "@/data/trabajos";

export default function GaleriaFiltrable() {
  const [categoriaActiva, setCategoriaActiva] = useState<Categoría>("Todos");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const trabajosFiltrados =
    categoriaActiva === "Todos"
      ? TRABAJOS
      : TRABAJOS.filter((t) => t.categoría === categoriaActiva);

  const slides = trabajosFiltrados.map((t) => ({ src: t.imagen }));

  const abrirLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  return (
    <>
      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORÍAS.map((cat) => {
          const activo = categoriaActiva === cat;
          return (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className="relative px-5 py-2 text-sm font-semibold uppercase tracking-wide rounded-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
              style={{ color: activo ? "#F9FAFB" : "#9CA3AF" }}
              aria-pressed={activo}
            >
              {activo && (
                <motion.span
                  layoutId="filtro-activo"
                  className="absolute inset-0 bg-[#FF6B35] rounded-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Contador */}
      <p className="text-[#9CA3AF] text-sm mb-8">
        {trabajosFiltrados.length}{" "}
        {trabajosFiltrados.length === 1 ? "proyecto" : "proyectos"}
        {categoriaActiva !== "Todos" && ` en ${categoriaActiva}`}
      </p>

      {/* Galeria masonry */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        <AnimatePresence mode="popLayout">
          {trabajosFiltrados.map((trabajo, index) => (
            <motion.article
              key={trabajo.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="break-inside-avoid mb-4 group relative bg-[#111827] border border-[#374151] rounded-sm overflow-hidden hover:border-[#FF6B35]/40 transition-all duration-300 cursor-pointer"
              onClick={() => abrirLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") abrirLightbox(index);
              }}
              aria-label={`Ver ${trabajo.titulo} en pantalla completa`}
            >
              {/* Imagen */}
              <div className="relative overflow-hidden">
                <Image
                  src={trabajo.imagen}
                  alt={`${trabajo.titulo} — producción audiovisual VCA Sound Systems`}
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index < 3 ? "eager" : "lazy"}
                />
                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-[#0A0A0A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold uppercase tracking-widest border border-white/40 px-4 py-2 rounded-sm">
                    Ver foto
                  </span>
                </div>
                {/* Badge categoría */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 bg-[#FF6B35] text-white text-xs font-semibold uppercase tracking-wide rounded-sm">
                    {trabajo.categoría}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  className="text-xl font-bold text-[#F9FAFB] uppercase leading-tight mb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {trabajo.titulo}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
                  {trabajo.descripción}
                </p>

                {/* Métricas */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-[#374151]">
                  <div className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
                    <Users
                      size={11}
                      className="text-[#FF6B35] flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{trabajo.asistentes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
                    <Clock
                      size={11}
                      className="text-[#FF6B35] flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{trabajo.duracion}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
                    <Cpu
                      size={11}
                      className="text-[#FF6B35] flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{trabajo.sistema}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(10,10,10,0.97)" },
        }}
      />
    </>
  );
}
