"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Music,
  Users,
  Building2,
  Heart,
  BookOpen,
  Award,
  LandmarkIcon,
  Radio,
  Volume2,
  Lightbulb,
  Monitor,
  Mic,
  Layers,
  Globe,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";

// ─── Datos ────────────────────────────────────────────────────────────────────

const TIPOS_EVENTO = [
  { id: "concierto", label: "Concierto", icon: Music },
  { id: "festival", label: "Festival", icon: Radio },
  { id: "corporativo", label: "Corporativo", icon: Building2 },
  { id: "boda", label: "Boda", icon: Heart },
  { id: "congreso", label: "Congreso", icon: BookOpen },
  { id: "gala", label: "Gala", icon: Award },
  { id: "institucional", label: "Institucional", icon: LandmarkIcon },
  { id: "streaming", label: "Streaming", icon: Monitor },
];

const RANGOS_ASISTENTES = [
  { id: "50-500", label: "50 – 500", sublabel: "Evento privado o sala" },
  { id: "500-2000", label: "500 – 2.000", sublabel: "Auditorio o carpa" },
  { id: "2000-5000", label: "2.000 – 5.000", sublabel: "Festival mediano" },
  { id: "5000+", label: "5.000+", sublabel: "Gran festival o estadio" },
];

const SERVICIOS_DISPONIBLES = [
  { id: "sonido", label: "Sonido", icon: Volume2 },
  { id: "iluminación", label: "Iluminación", icon: Lightbulb },
  { id: "video-led", label: "Videoproyección o LED", icon: Monitor },
  { id: "streaming", label: "Streaming", icon: Radio },
  { id: "estructuras", label: "Estructuras y escenario", icon: Layers },
  { id: "traducción", label: "Traducción simultánea", icon: Globe },
  { id: "grabación", label: "Grabación", icon: Mic },
];

const DURACIONES = [
  { id: "1-día", label: "1 día" },
  { id: "2-3-días", label: "2 – 3 días" },
  { id: "4-más-días", label: "4+ días" },
  { id: "permanente", label: "Instalación permanente" },
];

// ─── Validacion ───────────────────────────────────────────────────────────────

const contactoSchema = z.object({
  nombre: z.string().min(2, "Introduce tu nombre"),
  empresa: z.string().optional(),
  email: z.string().email("Email no valido"),
  telefono: z.string().min(9, "Telefono no valido"),
  fechaEvento: z.string().optional(),
  lugar: z.string().optional(),
  mensaje: z.string().optional(),
});

type ContactoForm = z.infer<typeof contactoSchema>;

// ─── Animaciones ──────────────────────────────────────────────────────────────

const SLIDE = {
  initial: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  animate: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  transition: { duration: 0.28, ease: "easeInOut" as const },
};

// ─── Sub-componentes ──────────────────────────────────────────────────────────

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = Math.round(((step - 1) / (total - 1)) * 100);
  return (
    <div className="mb-8">
      <div className="flex justify-between text-xs text-[#9CA3AF] mb-2">
        <span>Paso {step} de {total}</span>
        <span>{pct}% completado</span>
      </div>
      <div className="h-1 bg-[#374151] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#FF6B35] to-[#C026D3] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function StepTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6 sm:mb-8">
      <h2
        className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] mb-2 uppercase tracking-wide"
        style={{ fontFamily: "var(--font-barlow-condensed)" }}
      >
        {title}
      </h2>
      {subtitle && <p className="text-[#9CA3AF] text-sm">{subtitle}</p>}
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function CalculadoraPresupuesto() {
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [tipoEvento, setTipoEvento] = useState<string>("");
  const [asistentes, setAsistentes] = useState<string>("");
  const [servicios, setServicios] = useState<string[]>([]);
  const [duracion, setDuracion] = useState<string>("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState<string>("");

  const TOTAL_STEPS = 6;

  // Pre-selección desde query params (/sectores/festival → ?sector=festival)
  useEffect(() => {
    const sector = searchParams.get("sector");
    const servicio = searchParams.get("servicio");

    if (sector) {
      const match = TIPOS_EVENTO.find((t) => t.id === sector);
      if (match) setTipoEvento(match.id);
    }
    if (servicio) {
      const match = SERVICIOS_DISPONIBLES.find((s) => s.id === servicio);
      if (match) setServicios([match.id]);
    }
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactoForm>({ resolver: zodResolver(contactoSchema) });

  function go(next: number) {
    setDir(next > step ? 1 : -1);
    setStep(next);
  }

  function toggleServicio(id: string) {
    setServicios((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }

  function canNext(): boolean {
    if (step === 1) return !!tipoEvento;
    if (step === 2) return !!asistentes;
    if (step === 3) return servicios.length > 0;
    if (step === 4) return !!duracion;
    return true;
  }

  async function onSubmit(data: ContactoForm) {
    setEnviando(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipoEvento,
          asistentes,
          servicios,
          duracion,
          ...data,
        }),
      });
      if (!res.ok) throw new Error("Error de servidor");
      setEnviado(true);
      go(6);
    } catch {
      setError("Ha ocurrido un error. Intentalo de nuevo o contactanos por WhatsApp.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="min-h-[520px] relative">
      <ProgressBar step={step} total={TOTAL_STEPS} />

      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          {step === 1 && (
            <motion.div
              key="step1"
              custom={dir}
              variants={SLIDE}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={SLIDE.transition}
            >
              <StepTitle
                title="Tipo de evento"
                subtitle="Selecciona el tipo de evento que necesitas sonorizar"
              />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TIPOS_EVENTO.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setTipoEvento(id)}
                    className={`
                      flex flex-col items-center gap-3 p-4 sm:p-5 rounded-lg border transition-all duration-200 text-center
                      ${
                        tipoEvento === id
                          ? "border-[#FF6B35] bg-[#FF6B35]/10 text-[#FF6B35]"
                          : "border-[#374151] bg-[#111827] text-[#9CA3AF] hover:border-[#FF6B35]/50 hover:text-[#F9FAFB]"
                      }
                    `}
                    aria-pressed={tipoEvento === id}
                  >
                    <Icon size={28} />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={dir}
              variants={SLIDE}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={SLIDE.transition}
            >
              <StepTitle
                title="Numero de asistentes"
                subtitle="El aforo nos ayuda a dimensionar el equipo técnico necesario"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RANGOS_ASISTENTES.map(({ id, label, sublabel }) => (
                  <button
                    key={id}
                    onClick={() => setAsistentes(id)}
                    className={`
                      flex items-center gap-4 p-5 rounded-lg border text-left transition-all duration-200
                      ${
                        asistentes === id
                          ? "border-[#FF6B35] bg-[#FF6B35]/10"
                          : "border-[#374151] bg-[#111827] hover:border-[#FF6B35]/50"
                      }
                    `}
                    aria-pressed={asistentes === id}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors ${
                        asistentes === id ? "border-[#FF6B35] bg-[#FF6B35]" : "border-[#374151]"
                      }`}
                    />
                    <div>
                      <p
                        className={`font-bold text-lg ${asistentes === id ? "text-[#FF6B35]" : "text-[#F9FAFB]"}`}
                        style={{ fontFamily: "var(--font-barlow-condensed)" }}
                      >
                        {label}
                      </p>
                      <p className="text-[#9CA3AF] text-xs mt-0.5">{sublabel}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              custom={dir}
              variants={SLIDE}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={SLIDE.transition}
            >
              <StepTitle
                title="Servicios necesarios"
                subtitle="Selecciona uno o varios servicios (puedes elegir todos los que necesites)"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICIOS_DISPONIBLES.map(({ id, label, icon: Icon }) => {
                  const selected = servicios.includes(id);
                  return (
                    <button
                      key={id}
                      onClick={() => toggleServicio(id)}
                      className={`
                        flex items-center gap-4 p-4 rounded-lg border text-left transition-all duration-200
                        ${
                          selected
                            ? "border-[#FF6B35] bg-[#FF6B35]/10"
                            : "border-[#374151] bg-[#111827] hover:border-[#FF6B35]/50"
                        }
                      `}
                      aria-pressed={selected}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          selected ? "bg-[#FF6B35] text-white" : "bg-[#1F2937] text-[#9CA3AF]"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <span
                        className={`font-medium text-sm ${selected ? "text-[#FF6B35]" : "text-[#F9FAFB]"}`}
                      >
                        {label}
                      </span>
                      {selected && (
                        <CheckCircle2 size={18} className="ml-auto text-[#FF6B35] flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              custom={dir}
              variants={SLIDE}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={SLIDE.transition}
            >
              <StepTitle
                title="Duracion del evento"
                subtitle="El numero de días afecta al montaje, desmontaje y soporte técnico"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DURACIONES.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setDuracion(id)}
                    className={`
                      flex items-center gap-4 p-5 rounded-lg border text-left transition-all duration-200
                      ${
                        duracion === id
                          ? "border-[#FF6B35] bg-[#FF6B35]/10"
                          : "border-[#374151] bg-[#111827] hover:border-[#FF6B35]/50"
                      }
                    `}
                    aria-pressed={duracion === id}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors ${
                        duracion === id ? "border-[#FF6B35] bg-[#FF6B35]" : "border-[#374151]"
                      }`}
                    />
                    <span
                      className={`font-semibold text-base ${duracion === id ? "text-[#FF6B35]" : "text-[#F9FAFB]"}`}
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              custom={dir}
              variants={SLIDE}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={SLIDE.transition}
            >
              <StepTitle
                title="Tus datos de contacto"
                subtitle="Te enviamos el presupuesto personalizado en menos de 24 horas"
              />

              {/* Resumen de selección */}
              <div className="bg-[#111827] border border-[#374151] rounded-lg p-4 mb-6 text-sm text-[#9CA3AF] grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[#F9FAFB] font-medium">Evento:</span>{" "}
                  {TIPOS_EVENTO.find((t) => t.id === tipoEvento)?.label ?? "-"}
                </div>
                <div>
                  <span className="text-[#F9FAFB] font-medium">Asistentes:</span>{" "}
                  {asistentes}
                </div>
                <div className="col-span-2">
                  <span className="text-[#F9FAFB] font-medium">Servicios:</span>{" "}
                  {servicios.map((s) => SERVICIOS_DISPONIBLES.find((sv) => sv.id === s)?.label).join(", ")}
                </div>
                <div>
                  <span className="text-[#F9FAFB] font-medium">Duracion:</span>{" "}
                  {DURACIONES.find((d) => d.id === duracion)?.label ?? "-"}
                </div>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                noValidate
              >
                {/* Nombre */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-1.5">
                    Nombre *
                  </label>
                  <input
                    {...register("nombre")}
                    placeholder="Tu nombre"
                    className={`w-full bg-[#111827] border rounded-lg px-4 py-3 text-[#F9FAFB] text-sm placeholder-[#4B5563] outline-none transition-colors focus:border-[#FF6B35] ${
                      errors.nombre ? "border-red-500" : "border-[#374151]"
                    }`}
                  />
                  {errors.nombre && (
                    <p className="text-red-400 text-xs mt-1">{errors.nombre.message}</p>
                  )}
                </div>

                {/* Empresa */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-1.5">
                    Empresa (opcional)
                  </label>
                  <input
                    {...register("empresa")}
                    placeholder="Nombre de tu empresa o organizacion"
                    className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-[#F9FAFB] text-sm placeholder-[#4B5563] outline-none transition-colors focus:border-[#FF6B35]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-1.5">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="tu@email.com"
                    className={`w-full bg-[#111827] border rounded-lg px-4 py-3 text-[#F9FAFB] text-sm placeholder-[#4B5563] outline-none transition-colors focus:border-[#FF6B35] ${
                      errors.email ? "border-red-500" : "border-[#374151]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Telefono */}
                <div>
                  <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-1.5">
                    Telefono *
                  </label>
                  <input
                    {...register("telefono")}
                    type="tel"
                    placeholder="610 325 421"
                    className={`w-full bg-[#111827] border rounded-lg px-4 py-3 text-[#F9FAFB] text-sm placeholder-[#4B5563] outline-none transition-colors focus:border-[#FF6B35] ${
                      errors.telefono ? "border-red-500" : "border-[#374151]"
                    }`}
                  />
                  {errors.telefono && (
                    <p className="text-red-400 text-xs mt-1">{errors.telefono.message}</p>
                  )}
                </div>

                {/* Fecha evento */}
                <div>
                  <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-1.5">
                    Fecha aproximada del evento
                  </label>
                  <input
                    {...register("fechaEvento")}
                    type="date"
                    className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-[#F9FAFB] text-sm outline-none transition-colors focus:border-[#FF6B35]"
                  />
                </div>

                {/* Lugar */}
                <div>
                  <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-1.5">
                    Lugar del evento
                  </label>
                  <input
                    {...register("lugar")}
                    placeholder="Ciudad o recinto"
                    className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-[#F9FAFB] text-sm placeholder-[#4B5563] outline-none transition-colors focus:border-[#FF6B35]"
                  />
                </div>

                {/* Mensaje */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-1.5">
                    Información adicional
                  </label>
                  <textarea
                    {...register("mensaje")}
                    rows={3}
                    placeholder="Cuéntanos más sobre tu evento, requerimientos especiales, rider técnico..."
                    className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-[#F9FAFB] text-sm placeholder-[#4B5563] outline-none transition-colors focus:border-[#FF6B35] resize-none"
                  />
                </div>

                {error && (
                  <div className="sm:col-span-2 bg-red-900/20 border border-red-700 rounded-lg p-3 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={enviando}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6B35] hover:bg-[#FF6B35]/90 disabled:opacity-60 text-white font-bold uppercase tracking-wide rounded-sm transition-all duration-200"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {enviando ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Solicitar presupuesto personalizado"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 6 && (
            <motion.div
              key="step6"
              custom={dir}
              variants={SLIDE}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={SLIDE.transition}
              className="flex flex-col items-center text-center py-8"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="w-20 h-20 rounded-full bg-[#FF6B35]/10 border-2 border-[#FF6B35] flex items-center justify-center mb-6"
              >
                <CheckCircle2 size={40} className="text-[#FF6B35]" />
              </motion.div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] uppercase mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Solicitud recibida
              </h2>
              <p className="text-[#9CA3AF] text-base mb-2 max-w-md">
                Hemos recibido tu solicitud de presupuesto. Te contactamos en menos de 24 horas con una propuesta personalizada para tu evento.
              </p>
              <p className="text-[#9CA3AF] text-sm mb-8 max-w-md">
                Si necesitas respuesta inmediata, escribenos por WhatsApp.
              </p>
              <a
                href="https://wa.me/+34610325421?text=Hola%2C%20acabo%20de%20solicitar%20un%20presupuesto%20en%20vuestra%20web%20y%20me%20gustar%C3%ADa%20hablar%20con%20vosotros."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold uppercase tracking-wide rounded-sm transition-colors duration-200"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.532 5.85L0 24l6.29-1.51A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.944 0-3.757-.524-5.318-1.437l-.382-.227-3.736.898.941-3.628-.249-.398A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp — 610 325 421
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navegacion entre pasos */}
      {step < 6 && (
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-[#374151]">
          <button
            onClick={() => go(step - 1)}
            disabled={step === 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-sm border border-[#374151] text-[#9CA3AF] hover:text-[#F9FAFB] hover:border-[#4B5563] disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-medium"
          >
            <ChevronLeft size={16} />
            Anterior
          </button>

          {step < 5 && (
            <button
              onClick={() => go(step + 1)}
              disabled={!canNext()}
              className="flex items-center gap-2 px-6 py-2.5 rounded-sm bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-bold uppercase tracking-wide"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Siguiente
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
