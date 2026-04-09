"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface CounterProps {
  end: number;
  suffix: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix, prefix = "", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, { duration, ease: "easeOut" });
      const unsubscribe = rounded.on("change", (v) => setDisplayed(v));
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, end, duration, count, rounded]);

  return (
    <span ref={ref}>
      {prefix}
      {displayed}
      {suffix}
    </span>
  );
}

const FACTS = [
  {
    value: 50,
    suffix: "+",
    label: "Años en el sector",
    description: "Desde 1975 sonorizando los eventos más importantes de La Rioja y toda España",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Eventos producidos",
    description: "Festivales, conciertos, galas corporativas, eventos institucionales y mucho más",
  },
  {
    value: 6,
    suffix: "",
    label: "Servicios integrales",
    description: "Sonido, iluminación, video, streaming, estructuras y grabación bajo un mismo equipo",
  },
  {
    value: 47,
    suffix: "+",
    label: "Provincias cubiertas",
    description: "Trabajamos en toda la Península Ibérica con nuestro propio equipo técnico",
  },
];

export default function FactCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#111827] border-y border-[#374151] py-16 sm:py-20"
      aria-label="Cifras de VCA Sound Systems"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {FACTS.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FF6B35] mb-2 leading-none"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {isInView && (
                  <AnimatedCounter
                    end={fact.value}
                    suffix={fact.suffix}
                    duration={2 + index * 0.3}
                  />
                )}
                {!isInView && (
                  <span>0{fact.suffix}</span>
                )}
              </div>
              <div className="text-[#F9FAFB] text-sm font-semibold uppercase tracking-widest mb-2">
                {fact.label}
              </div>
              <div className="text-[#9CA3AF] text-xs leading-relaxed hidden sm:block">
                {fact.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
