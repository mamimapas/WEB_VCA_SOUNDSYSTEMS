"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const NAV_ITEMS = [
  { label: "Trabajos", href: "/trabajos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Marcas", href: "/marcas" },
  { label: "Nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#374151]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/logo/logo-vca-hd.jpeg"
              alt="VCA Sound Systems"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegacion principal">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#9CA3AF] hover:text-[#F9FAFB] text-sm font-medium transition-colors duration-200 tracking-wide uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/presupuesto"
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-sm bg-[#FF6B35] text-white text-sm font-semibold tracking-wide uppercase hover:bg-[#FF6B35]/90 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
            >
              Presupuesto
            </Link>
            <button
              className="lg:hidden p-2 text-[#9CA3AF] hover:text-white"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#111827] border-t border-[#374151]">
          <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4" aria-label="Navegacion movil">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#9CA3AF] hover:text-white text-base font-medium uppercase tracking-wide py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/presupuesto"
              className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-sm bg-[#FF6B35] text-white text-sm font-semibold tracking-wide uppercase"
              onClick={() => setOpen(false)}
            >
              Solicitar presupuesto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
