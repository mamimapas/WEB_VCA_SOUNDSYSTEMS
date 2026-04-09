import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const SERVICIOS = [
  { label: "Sonido Profesional", href: "/servicios/sonido-profesional-eventos" },
  { label: "Iluminación", href: "/servicios/iluminacion-profesional-eventos" },
  { label: "Videoproyección LED", href: "/servicios/videoproyeccion-pantalla-led" },
  { label: "Streaming", href: "/servicios/streaming-retransmision-eventos" },
  { label: "Estructuras y Escenarios", href: "/servicios/estructuras-escenarios" },
  { label: "Grabación", href: "/servicios/grabacion-eventos" },
];

const EMPRESA = [
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Nuestros Trabajos", href: "/trabajos" },
  { label: "Marcas Distribuidoras", href: "/marcas" },
  { label: "Solicitar Presupuesto", href: "/presupuesto" },
];

const LEGALES = [
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] border-t border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna 1 — Logo + descripción */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo/logo-vca-hd.jpeg"
                alt="VCA Sound Systems"
                width={140}
                height={46}
                className="h-12 w-auto object-contain mb-4"
              />
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
              50 años haciendo que los eventos suenen diferente. Sonido, iluminación y video profesional en toda España.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/vcasoundsystems"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de VCA Sound Systems"
                className="text-[#9CA3AF] hover:text-[#FF6B35] transition-colors"
              >
                {/* Facebook icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/vca_soundsystems"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de VCA Sound Systems"
                className="text-[#9CA3AF] hover:text-[#FF6B35] transition-colors"
              >
                {/* Instagram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2 — Servicios */}
          <div>
            <h3 className="text-[#F9FAFB] text-xs font-semibold uppercase tracking-widest mb-4">
              Servicios
            </h3>
            <ul className="flex flex-col gap-2">
              {SERVICIOS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Empresa */}
          <div>
            <h3 className="text-[#F9FAFB] text-xs font-semibold uppercase tracking-widest mb-4">
              Empresa
            </h3>
            <ul className="flex flex-col gap-2">
              {EMPRESA.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-[#F9FAFB] text-xs font-semibold uppercase tracking-widest mb-4">
                Legal
              </h3>
              <ul className="flex flex-col gap-2">
                {LEGALES.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna 4 — Contacto */}
          <div>
            <h3 className="text-[#F9FAFB] text-xs font-semibold uppercase tracking-widest mb-4">
              Contacto
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#FF6B35] mt-0.5 flex-shrink-0" />
                <span className="text-[#9CA3AF] text-sm">
                  Logroño, La Rioja<br />
                  España — Cobertura nacional
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#FF6B35] flex-shrink-0" />
                <a
                  href="tel:+34610325421"
                  className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
                >
                  610 325 421
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#FF6B35] flex-shrink-0" />
                <a
                  href="tel:+34625538635"
                  className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
                >
                  625 538 635
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#FF6B35] flex-shrink-0" />
                <a
                  href="mailto:ecentenorobles@gmail.com"
                  className="text-[#9CA3AF] hover:text-white text-sm transition-colors break-all"
                >
                  ecentenorobles@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#374151] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9CA3AF] text-xs">
            &copy; {year} VCA Sound Systems. Todos los derechos reservados.
          </p>
          <p className="text-[#9CA3AF] text-xs">
            Distribuidor oficial JBL · Shure · QSC · dbx · MA Lighting
          </p>
        </div>
      </div>
    </footer>
  );
}
