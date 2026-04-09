"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Target,
  ShieldCheck,
  Headphones,
  Zap,
  Users,
} from "lucide-react";

// ─── Timeline ─────────────────────────────────────────────────────────────────
// NOTA: Las fechas de los hitos son aproximaciones basadas en los ~50 anos de
// trayectoria confirmada (fundacion 1975). Actualizar cuando Eusebio confirme
// las fechas exactas de cada hito historico.

const TIMELINE = [
  {
    year: "1975",
    title: "Fundacion en Logrono",
    desc: "VCA Sound Systems nace en Logrono con la mision de ofrecer sonido profesional a los eventos de La Rioja. Los primeros equipos, la primera huella.",
    approximate: false,
  },
  {
    year: "1985",
    title: "Primer gran festival regional",
    desc: "Sonorizacion del primer festival de musica en directo de alcance regional. Una confirmacion de que el equipo tecnico estaba a la altura de los escenarios mas exigentes.",
    approximate: true,
  },
  {
    year: "1995",
    title: "Equipos digitales de primera generacion",
    desc: "Incorporacion de las primeras consolas de sonido digitales y sistemas de procesamiento avanzado, marcando el salto hacia la era digital del audio profesional.",
    approximate: true,
  },
  {
    year: "2005",
    title: "Iluminacion profesional y LED",
    desc: "Ampliacion del catalogo con sistemas de iluminacion profesional y las primeras soluciones LED para escenarios. Un nuevo servicio, la misma exigencia tecnica.",
    approximate: true,
  },
  {
    year: "2015",
    title: "Streaming en directo",
    desc: "Lanzamiento de los servicios de retransmision en directo. Los eventos de nuestros clientes dejan de tener fronteras geograficas.",
    approximate: true,
  },
  {
    year: "2020",
    title: "Pantallas LED y videoproyeccion avanzada",
    desc: "Nuevas soluciones de pantallas LED de gran formato y videoproyeccion de alta resolucion para festivales, congresos y eventos corporativos de primer nivel.",
    approximate: true,
  },
  {
    year: "2026",
    title: "50 anos, la misma pasion",
    desc: "Medio siglo haciendo que los eventos suenen, brillen y lleguen a cualquier rincon. Mas de 1.000 eventos, 47 provincias y una sola regla: el show siempre debe continuar.",
    approximate: false,
  },
];

const VALORES = [
  {
    icon: ShieldCheck,
    title: "Garantia el dia del show",
    desc: "No somos un proveedor mas. Cuando el telon se levanta, somos parte de tu equipo. 50 anos de experiencia respaldan cada decision tecnica.",
  },
  {
    icon: Headphones,
    title: "Tecnicos especializados",
    desc: "Cada evento cuenta con tecnicos que conocen el equipo, la sala y las necesidades del espectaculo. La tecnica al servicio de la emocion.",
  },
  {
    icon: Target,
    title: "Solucion integral",
    desc: "Sonido, iluminacion, video, streaming y estructuras bajo un solo equipo. Coordinacion perfecta, un solo interlocutor, cero fricciones.",
  },
  {
    icon: Users,
    title: "Relacion a largo plazo",
    desc: "Nuestros clientes repiten. No porque no tengan opciones, sino porque saben que con VCA el dia del evento no hay sorpresas.",
  },
  {
    icon: Zap,
    title: "Respuesta rapida",
    desc: "El mundo del directo no espera. Nuestro equipo esta disponible para urgencias tecnicas y cambios de ultima hora sin incremento de coste.",
  },
  {
    icon: MapPin,
    title: "Cobertura nacional",
    desc: "Con base en Logrono y presencia en toda la Peninsula Iberica. Llevamos el equipo, el know-how y la garantia tecnica hasta donde lo necesites.",
  },
];

const CIUDADES = [
  "Logrono",
  "Madrid",
  "Bilbao",
  "Zaragoza",
  "Pamplona",
  "Barcelona",
  "Valencia",
  "Vitoria",
  "Burgos",
  "Santander",
  "San Sebastian",
  "Valladolid",
];

// ─── Componentes hoja (cada uno llama hooks en el nivel correcto) ──────────────

function ContentCard({ item }: { item: (typeof TIMELINE)[0] }) {
  return (
    <div className="bg-[#111827] border border-[#374151] rounded-xl p-5 mb-10 md:mb-0">
      <div className="flex items-center gap-3 mb-2">
        <span
          className="text-[#FF6B35] text-2xl font-bold"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          {item.year}
        </span>
        {item.approximate && (
          <span className="text-[#4B5563] text-xs italic">(aprox.)</span>
        )}
      </div>
      <h3
        className="text-[#F9FAFB] text-lg font-bold uppercase mb-2"
        style={{ fontFamily: "var(--font-barlow-condensed)" }}
      >
        {item.title}
      </h3>
      <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.desc}</p>
    </div>
  );
}

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof TIMELINE)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start">
      {!isLast && (
        <div className="absolute left-1/2 top-10 bottom-0 w-px -translate-x-1/2 bg-[#374151]" />
      )}

      {/* Desktop: alternado */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-8 w-full">
        <div className="pr-8">
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ContentCard item={item} />
            </motion.div>
          )}
        </div>

        <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="w-4 h-4 rounded-full bg-[#FF6B35] border-4 border-[#0A0A0A] shadow-[0_0_12px_rgba(255,107,53,0.5)]"
          />
        </div>

        <div className="pl-8">
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ContentCard item={item} />
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden gap-4 pb-10">
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="w-4 h-4 rounded-full bg-[#FF6B35] border-4 border-[#0A0A0A] flex-shrink-0 mt-1"
          />
          {!isLast && <div className="w-px flex-1 bg-[#374151] mt-2" />}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1"
        >
          <ContentCard item={item} />
        </motion.div>
      </div>
    </div>
  );
}

function ValorCard({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: (typeof VALORES)[0]["icon"];
  title: string;
  desc: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-[#0A0A0A] border border-[#374151] rounded-xl p-6 hover:border-[#FF6B35]/40 transition-colors duration-300 group"
    >
      <div className="w-12 h-12 rounded-lg bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center mb-4 group-hover:bg-[#FF6B35]/20 transition-colors">
        <Icon size={22} className="text-[#FF6B35]" />
      </div>
      <h3
        className="text-[#F9FAFB] font-bold text-xl uppercase mb-2"
        style={{ fontFamily: "var(--font-barlow-condensed)" }}
      >
        {title}
      </h3>
      <p className="text-[#9CA3AF] text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function CiudadCard({ ciudad, delay }: { ciudad: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col items-center gap-1.5 bg-[#111827] border border-[#374151] rounded-lg p-3 text-center"
    >
      <MapPin size={14} className="text-[#FF6B35]" />
      <span className="text-[#F9FAFB] text-xs font-medium">{ciudad}</span>
    </motion.div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function SobreNosotrosClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-24 bg-[#0A0A0A] overflow-hidden">
        <div
          className="absolute top-8 left-4 text-[10rem] sm:text-[14rem] lg:text-[18rem] font-bold leading-none text-white opacity-5 pointer-events-none select-none"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
          aria-hidden="true"
        >
          50
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#FF6B35] text-xs font-bold uppercase tracking-widest mb-3">
              Desde 1975
            </p>
            <h1
              className="text-5xl sm:text-7xl lg:text-8xl font-bold text-[#F9FAFB] uppercase leading-tight mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              50 anos
              <br />
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#C026D3] bg-clip-text text-transparent">
                sonorizando
              </span>{" "}
              <br />
              La Rioja y Espana
            </h1>
            <p className="text-[#9CA3AF] text-lg max-w-2xl leading-relaxed">
              No somos un proveedor mas. Desde 1975, el dia de tu evento somos
              parte de tu equipo. Mas de 1.000 eventos, 47 provincias y una sola
              regla: el show siempre debe continuar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#FF6B35] text-xs font-bold uppercase tracking-widest mb-3">
              Nuestra historia
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#F9FAFB] uppercase"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              5 décadas de experiencia
            </h2>
            <p className="text-[#4B5563] text-xs mt-4 italic">
              Las fechas marcadas como (aprox.) son estimaciones. Eusebio
              Centeno confirmara las fechas exactas de cada hito historico.
            </p>
          </div>

          <div className="relative">
            {TIMELINE.map((item, index) => (
              <TimelineItem
                key={item.year}
                item={item}
                index={index}
                isLast={index === TIMELINE.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mision y valores */}
      <section className="py-20 sm:py-28 bg-[#111827] border-y border-[#374151]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#FF6B35] text-xs font-bold uppercase tracking-widest mb-3">
              Lo que nos define
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#F9FAFB] uppercase"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Mision y valores
            </h2>
            <p className="text-[#9CA3AF] mt-4 max-w-2xl mx-auto text-base">
              En VCA Sound Systems no vendemos equipos. Vendemos la certeza de
              que el dia de tu evento todo va a funcionar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALORES.map(({ icon, title, desc }, i) => (
              <ValorCard
                key={title}
                icon={icon}
                title={title}
                desc={desc}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-20 sm:py-28 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] text-xs font-bold uppercase tracking-widest mb-3">
              Cobertura
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#F9FAFB] uppercase"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Toda la Peninsula Iberica
            </h2>
            <p className="text-[#9CA3AF] mt-4 max-w-xl mx-auto">
              Trabajamos en mas de 47 provincias con nuestro propio equipo
              tecnico y vehiculos especializados. Donde sea tu evento, llegamos.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-12">
            {CIUDADES.map((ciudad, i) => (
              <CiudadCard key={ciudad} ciudad={ciudad} delay={i * 0.06} />
            ))}
            <div className="flex flex-col items-center gap-1.5 bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-lg p-3 text-center">
              <MapPin size={14} className="text-[#FF6B35]" />
              <span className="text-[#FF6B35] text-xs font-bold">+40 mas</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[#9CA3AF] text-sm mb-6">
              Organizas un evento fuera de La Rioja? Consultanos. Llevamos el
              equipo y el equipo tecnico hasta donde lo necesites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/presupuesto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold uppercase tracking-wide rounded-sm transition-colors duration-200"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Solicitar presupuesto
              </a>
              <a
                href="https://wa.me/+34610325421?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20cobertura%20para%20un%20evento%20fuera%20de%20La%20Rioja."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#374151] hover:border-[#FF6B35]/60 text-[#F9FAFB] font-bold uppercase tracking-wide rounded-sm transition-colors duration-200"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
