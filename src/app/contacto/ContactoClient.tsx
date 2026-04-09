"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2 } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Telefono principal",
    value: "610 325 421",
    href: "tel:+34610325421",
    desc: "Llamadas y WhatsApp",
  },
  {
    icon: Phone,
    label: "Telefono alternativo",
    value: "625 538 635",
    href: "tel:+34625538635",
    desc: "Alternativo",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ecentenorobles@gmail.com",
    href: "mailto:ecentenorobles@gmail.com",
    desc: "Respuesta en 24h",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Logroño, La Rioja",
    href: "https://maps.google.com/?q=Logroño,La+Rioja,España",
    desc: "Trabajamos en toda la Península",
  },
  {
    icon: Clock,
    label: "Horario de oficina",
    value: "Lun – Vie: 9:00 – 18:00",
    href: undefined,
    desc: "Urgencias de evento: disponibles 24h",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "610 325 421",
    href: "https://wa.me/+34610325421?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20vuestros%20servicios%20para%20un%20evento.",
    desc: "El canal más rápido para respuesta inmediata",
  },
];

function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nombre || !email || !mensaje) return;
    setEnviando(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipoEvento: "consulta-general",
          asistentes: "-",
          servicios: [],
          duracion: "-",
          nombre,
          email,
          mensaje,
        }),
      });
      if (!res.ok) throw new Error();
      setEnviado(true);
    } catch {
      setError(
        "Error al enviar. Contactanos directamente por WhatsApp o telefono."
      );
    } finally {
      setEnviando(false);
    }
  }

  if (enviado) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-[#FF6B35]/10 border-2 border-[#FF6B35] flex items-center justify-center mb-4">
          <Send size={28} className="text-[#FF6B35]" />
        </div>
        <h3
          className="text-2xl font-bold text-[#F9FAFB] uppercase mb-2"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Mensaje recibido
        </h3>
        <p className="text-[#9CA3AF] text-sm max-w-xs">
          Te respondemos antes de 24 horas. Si necesitas respuesta inmediata,
          escribenos por WhatsApp al 610 325 421.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-1.5">
          Nombre *
        </label>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          placeholder="Tu nombre"
          className="w-full bg-[#0A0A0A] border border-[#374151] rounded-lg px-4 py-3 text-[#F9FAFB] text-sm placeholder-[#4B5563] outline-none transition-colors focus:border-[#FF6B35]"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-1.5">
          Email *
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="tu@email.com"
          className="w-full bg-[#0A0A0A] border border-[#374151] rounded-lg px-4 py-3 text-[#F9FAFB] text-sm placeholder-[#4B5563] outline-none transition-colors focus:border-[#FF6B35]"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-1.5">
          Mensaje *
        </label>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
          rows={5}
          placeholder="Cuéntanos en que podemos ayudarte..."
          className="w-full bg-[#0A0A0A] border border-[#374151] rounded-lg px-4 py-3 text-[#F9FAFB] text-sm placeholder-[#4B5563] outline-none transition-colors focus:border-[#FF6B35] resize-none"
        />
      </div>
      {error && (
        <p className="text-red-400 text-sm bg-red-900/20 border border-red-700 rounded-lg p-3">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={enviando || !nombre || !email || !mensaje}
        className="flex items-center justify-center gap-2 px-6 py-4 bg-[#FF6B35] hover:bg-[#FF6B35]/90 disabled:opacity-50 text-white font-bold uppercase tracking-wide rounded-sm transition-all duration-200"
        style={{ fontFamily: "var(--font-barlow-condensed)" }}
      >
        {enviando ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <Send size={18} />
        )}
        {enviando ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}

export default function ContactoClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#FF6B35] text-xs font-bold uppercase tracking-widest mb-3">
            Estamos para ayudarte
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F9FAFB] uppercase leading-tight mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Hablemos
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
            Cuéntanos tu evento y buscamos juntos la mejor solución técnica. Sin
            rodeos, sin intermediarios.
          </p>
        </div>
      </section>

      {/* Grid: formulario + info contacto */}
      <section className="pb-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Columna izquierda: formulario */}
            <div className="bg-[#111827] border border-[#374151] rounded-2xl p-6 sm:p-8">
              <h2
                className="text-2xl font-bold text-[#F9FAFB] uppercase mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Envianos un mensaje
              </h2>
              <ContactForm />
              <p className="text-[#4B5563] text-xs mt-4 text-center">
                Para presupuestos detallados, usa nuestra{" "}
                <a
                  href="/presupuesto"
                  className="text-[#FF6B35] hover:underline"
                >
                  calculadora de presupuesto
                </a>
              </p>
            </div>

            {/* Columna derecha: info + mapa */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#111827] border border-[#374151] rounded-2xl p-6 sm:p-8">
                <h2
                  className="text-2xl font-bold text-[#F9FAFB] uppercase mb-6"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  Información de contacto
                </h2>
                <div className="flex flex-col gap-5">
                  {CONTACT_INFO.map(({ icon: Icon, label, value, href, desc }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 border border-[#FF6B35]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={18} className="text-[#FF6B35]" />
                      </div>
                      <div>
                        <p className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-wide mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            target={
                              href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-[#F9FAFB] text-sm font-medium hover:text-[#FF6B35] transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-[#F9FAFB] text-sm font-medium">
                            {value}
                          </p>
                        )}
                        <p className="text-[#4B5563] text-xs mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/+34610325421?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20vuestros%20servicios%20para%20un%20evento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-3 w-full px-5 py-3.5 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold uppercase tracking-wide rounded-sm transition-colors duration-200 text-sm"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.532 5.85L0 24l6.29-1.51A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.944 0-3.757-.524-5.318-1.437l-.382-.227-3.736.898.941-3.628-.249-.398A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Escribir por WhatsApp — respuesta inmediata
                </a>
              </div>

              {/* Mapa Logroño */}
              <div className="bg-[#111827] border border-[#374151] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47048.19289671127!2d-2.4855699!3d42.4627195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd49b4dca4ef5d5f%3A0x4e95a77f5fca50de!2sLogro%C3%B1o%2C%20La%20Rioja!5e0!3m2!1ses!2ses!4v1712700000000!5m2!1ses!2ses"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VCA Sound Systems — Logroño, La Rioja"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
                <div className="p-4 border-t border-[#374151]">
                  <p className="text-[#9CA3AF] text-xs">
                    Logroño, La Rioja — Trabajamos en toda la Península Ibérica
                    con equipo técnico propio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
