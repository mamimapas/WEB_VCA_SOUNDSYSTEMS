import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies de VCA Sound Systems. Información sobre las cookies que utilizamos y cómo gestionarlas.",
  robots: { index: false, follow: false },
};

export default function PoliticaCookiesPage() {
  const fechaActualizacion = "9 de abril de 2026";

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="mb-12">
          <p className="text-[#FF6B35] text-sm font-semibold uppercase tracking-widest mb-3">
            Cookies
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F9FAFB] uppercase leading-tight mb-4">
            Política de Cookies
          </h1>
          <p className="text-[#9CA3AF] text-sm">
            Última actualización: {fechaActualizacion}
          </p>
        </div>

        {/* Contenido */}
        <div className="prose prose-invert max-w-none space-y-10 text-[#D1D5DB] leading-relaxed">

          {/* 1. ¿Qué son las cookies? */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              1. ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en el
              dispositivo del usuario (ordenador, tablet o teléfono móvil) cuando estos los
              visitan. Permiten al sitio web recordar las acciones y preferencias del usuario
              durante un período de tiempo determinado, de manera que no tenga que volver a
              introducir ciertos datos cada vez que visite el sitio o navegue de una página a otra.
            </p>
            <p className="mt-3">
              El presente sitio web utiliza únicamente las cookies estrictamente necesarias para
              su funcionamiento técnico correcto y, en caso de que usted lo acepte, cookies de
              análisis anónimas para mejorar nuestros servicios.
            </p>
          </section>

          {/* 2. Tipos de cookies */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              2. Tipos de cookies que utilizamos
            </h2>

            {/* Técnicas */}
            <div className="mt-4 p-5 bg-[#111827] border border-[#374151] rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block px-3 py-1 bg-[#1F2937] text-[#F9FAFB] text-xs font-semibold uppercase tracking-wide rounded-sm">
                  Técnicas — Necesarias
                </span>
                <span className="text-[#4ADE80] text-xs font-medium">Siempre activas</span>
              </div>
              <p className="text-sm">
                Son imprescindibles para el funcionamiento del sitio web. Sin ellas no es posible
                navegar correctamente ni utilizar sus funciones básicas. No almacenan ningún tipo
                de información personal identificable.
              </p>
              <table className="w-full mt-4 text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#374151]">
                    <th className="text-left text-[#F9FAFB] font-semibold pb-2 pr-4">Cookie</th>
                    <th className="text-left text-[#F9FAFB] font-semibold pb-2 pr-4">Origen</th>
                    <th className="text-left text-[#F9FAFB] font-semibold pb-2">Propósito</th>
                  </tr>
                </thead>
                <tbody className="text-[#9CA3AF]">
                  <tr className="border-b border-[#1F2937]">
                    <td className="py-2 pr-4 font-mono text-xs">__vercel_*</td>
                    <td className="py-2 pr-4">Vercel</td>
                    <td className="py-2">Enrutamiento y rendimiento del servidor</td>
                  </tr>
                  <tr className="border-b border-[#1F2937]">
                    <td className="py-2 pr-4 font-mono text-xs">next-*</td>
                    <td className="py-2 pr-4">Next.js</td>
                    <td className="py-2">Caché y navegación del lado del cliente</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">vca-cookie-consent</td>
                    <td className="py-2 pr-4">Este sitio</td>
                    <td className="py-2">Guarda sus preferencias de cookies</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Analíticas */}
            <div className="mt-4 p-5 bg-[#111827] border border-[#374151] rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block px-3 py-1 bg-[#1F2937] text-[#F9FAFB] text-xs font-semibold uppercase tracking-wide rounded-sm">
                  Analíticas — Opcionales
                </span>
                <span className="text-[#FBBF24] text-xs font-medium">Requieren su consentimiento</span>
              </div>
              <p className="text-sm">
                Nos permiten conocer de forma anónima y agregada cómo interactúan los usuarios con
                el sitio web (páginas visitadas, tiempo de permanencia, fuente de acceso, etc.).
                Esta información se usa exclusivamente para mejorar la experiencia de usuario.
                No se comparte con terceros con fines publicitarios.
              </p>
              <table className="w-full mt-4 text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#374151]">
                    <th className="text-left text-[#F9FAFB] font-semibold pb-2 pr-4">Cookie</th>
                    <th className="text-left text-[#F9FAFB] font-semibold pb-2 pr-4">Origen</th>
                    <th className="text-left text-[#F9FAFB] font-semibold pb-2">Propósito</th>
                  </tr>
                </thead>
                <tbody className="text-[#9CA3AF]">
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">va_*</td>
                    <td className="py-2 pr-4">Vercel Analytics</td>
                    <td className="py-2">Métricas anónimas de visitas (sin datos personales)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Gestión y desactivación */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              3. Cómo gestionar o desactivar las cookies
            </h2>
            <p>
              Puede aceptar, rechazar o configurar las cookies en cualquier momento a través del
              panel de preferencias disponible en el banner de cookies de este sitio. Además,
              puede gestionar las cookies directamente desde su navegador:
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Chrome */}
              <div className="p-4 bg-[#111827] border border-[#374151] rounded-sm">
                <h3 className="text-[#F9FAFB] font-semibold text-sm mb-2">Google Chrome</h3>
                <ol className="text-[#9CA3AF] text-sm space-y-1 list-decimal pl-4">
                  <li>Menú (⋮) → Configuración</li>
                  <li>Privacidad y seguridad</li>
                  <li>Cookies y otros datos de sitios</li>
                  <li>Seleccione su preferencia</li>
                </ol>
              </div>

              {/* Firefox */}
              <div className="p-4 bg-[#111827] border border-[#374151] rounded-sm">
                <h3 className="text-[#F9FAFB] font-semibold text-sm mb-2">Mozilla Firefox</h3>
                <ol className="text-[#9CA3AF] text-sm space-y-1 list-decimal pl-4">
                  <li>Menú (☰) → Configuración</li>
                  <li>Privacidad y seguridad</li>
                  <li>Cookies y datos del sitio</li>
                  <li>Seleccione su nivel de protección</li>
                </ol>
              </div>

              {/* Safari */}
              <div className="p-4 bg-[#111827] border border-[#374151] rounded-sm">
                <h3 className="text-[#F9FAFB] font-semibold text-sm mb-2">Apple Safari</h3>
                <ol className="text-[#9CA3AF] text-sm space-y-1 list-decimal pl-4">
                  <li>Safari → Preferencias</li>
                  <li>Pestaña Privacidad</li>
                  <li>Cookies y datos de sitio web</li>
                  <li>Seleccione su preferencia</li>
                </ol>
              </div>

              {/* Edge */}
              <div className="p-4 bg-[#111827] border border-[#374151] rounded-sm">
                <h3 className="text-[#F9FAFB] font-semibold text-sm mb-2">Microsoft Edge</h3>
                <ol className="text-[#9CA3AF] text-sm space-y-1 list-decimal pl-4">
                  <li>Menú (⋯) → Configuración</li>
                  <li>Cookies y permisos del sitio</li>
                  <li>Cookies y datos del sitio</li>
                  <li>Seleccione su preferencia</li>
                </ol>
              </div>
            </div>

            <p className="mt-4 text-sm text-[#9CA3AF]">
              Tenga en cuenta que deshabilitar las cookies técnicas puede impedir el correcto
              funcionamiento de algunas partes del sitio web.
            </p>
          </section>

          {/* 4. Más información */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              4. Más información
            </h2>
            <p>
              Para cualquier consulta sobre el uso de cookies en este sitio, puede contactar con
              VCA Sound Systems en{" "}
              <a
                href="mailto:ecentenorobles@gmail.com"
                className="text-[#FF6B35] hover:text-white transition-colors"
              >
                ecentenorobles@gmail.com
              </a>
              .
            </p>
            <p className="mt-3">
              Para más información sobre cookies y su regulación, puede consultar la{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6B35] hover:text-white transition-colors"
              >
                Agencia Española de Protección de Datos (www.aepd.es)
              </a>
              .
            </p>
          </section>

          {/* Volver */}
          <div className="pt-6 border-t border-[#374151]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-white text-sm font-semibold uppercase tracking-wide transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
