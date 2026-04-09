"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Settings, Check, Shield } from "lucide-react";

const STORAGE_KEY = "vca-cookie-consent";

type ConsentState = {
  analytics: boolean;
  timestamp: number;
};

function loadConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean) {
  const state: ConsentState = { analytics, timestamp: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = loadConsent();
    if (!consent) {
      // Primera visita — mostrar banner tras 600ms
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  function acceptAll() {
    saveConsent(true);
    setVisible(false);
  }

  function acceptNecessary() {
    saveConsent(false);
    setVisible(false);
  }

  function saveConfig() {
    saveConsent(analyticsEnabled);
    setConfigOpen(false);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Overlay oscuro cuando el modal de configuración está abierto */}
          {configOpen && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[9998]"
              onClick={() => setConfigOpen(false)}
            />
          )}

          {/* Modal de configuración */}
          <AnimatePresence>
            {configOpen && (
              <motion.div
                key="config-modal"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 bottom-4 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 w-auto sm:w-full sm:max-w-md z-[9999] bg-[#111827] border border-[#FF6B35]/60 rounded-sm shadow-2xl"
              >
                {/* Cabecera del modal */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#374151]">
                  <div className="flex items-center gap-2">
                    <Settings size={16} className="text-[#FF6B35]" />
                    <span className="text-[#F9FAFB] text-sm font-semibold uppercase tracking-wide">
                      Configurar cookies
                    </span>
                  </div>
                  <button
                    onClick={() => setConfigOpen(false)}
                    className="text-[#9CA3AF] hover:text-white transition-colors p-1"
                    aria-label="Cerrar configuración"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Opciones */}
                <div className="px-5 py-5 space-y-4">
                  {/* Técnicas — siempre activas */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[#F9FAFB] text-sm font-semibold">
                        Cookies técnicas
                      </p>
                      <p className="text-[#9CA3AF] text-xs mt-1 leading-relaxed">
                        Necesarias para el funcionamiento del sitio. No se pueden desactivar.
                      </p>
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-6 bg-[#4ADE80]/20 border border-[#4ADE80]/40 rounded-full">
                      <Check size={12} className="text-[#4ADE80]" />
                    </div>
                  </div>

                  <div className="border-t border-[#374151]" />

                  {/* Analíticas — opcionales */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[#F9FAFB] text-sm font-semibold">
                        Cookies analíticas
                      </p>
                      <p className="text-[#9CA3AF] text-xs mt-1 leading-relaxed">
                        Vercel Analytics — métricas anónimas para mejorar el sitio. Sin datos
                        personales identificables.
                      </p>
                    </div>
                    {/* Toggle */}
                    <button
                      role="switch"
                      aria-checked={analyticsEnabled}
                      aria-label="Activar cookies analíticas"
                      onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                      className={`flex-shrink-0 relative w-10 h-6 rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#FF6B35] ${
                        analyticsEnabled ? "bg-[#FF6B35]" : "bg-[#374151]"
                      }`}
                    >
                      <span
                        className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                          analyticsEnabled ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Botón guardar */}
                <div className="px-5 pb-5">
                  <button
                    onClick={saveConfig}
                    className="w-full py-3 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-sm font-semibold uppercase tracking-wide rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
                  >
                    Guardar preferencias
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Banner principal — slide-up desde abajo */}
          <motion.div
            key="cookie-banner"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-[9997] bg-[#0A0A0A]/95 backdrop-blur-md border-t border-[#FF6B35]/40 shadow-[0_-4px_32px_rgba(255,107,53,0.15)]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* Icono + texto */}
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <Shield
                    size={20}
                    className="text-[#FF6B35] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[#F9FAFB] text-sm font-semibold mb-0.5">
                      Utilizamos cookies
                    </p>
                    <p className="text-[#9CA3AF] text-xs leading-relaxed">
                      Usamos cookies técnicas (necesarias) y, con su consentimiento, cookies
                      analíticas anónimas para mejorar el sitio.{" "}
                      <Link
                        href="/cookies"
                        className="text-[#FF6B35] hover:text-white underline underline-offset-2 transition-colors"
                      >
                        Más información
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                {/* Botones */}
                <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setAnalyticsEnabled(false);
                      setConfigOpen(true);
                    }}
                    className="flex-1 sm:flex-none px-4 py-2 border border-[#374151] text-[#9CA3AF] hover:text-white hover:border-[#9CA3AF] text-xs font-semibold uppercase tracking-wide rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
                  >
                    Configurar
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 sm:flex-none px-4 py-2 border border-[#374151] text-[#9CA3AF] hover:text-white hover:border-[#9CA3AF] text-xs font-semibold uppercase tracking-wide rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
                  >
                    Solo necesarias
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 sm:flex-none px-4 py-2.5 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-xs font-semibold uppercase tracking-wide rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#FF6B35] whitespace-nowrap"
                  >
                    Aceptar todas
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
