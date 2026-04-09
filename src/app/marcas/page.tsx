import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MarcasGrid from "@/components/marcas/MarcasGrid";

export const metadata: Metadata = {
  title: "Distribuidores Oficiales JBL, Shure, QSC en La Rioja — VCA Sound Systems",
  description:
    "Distribuidores oficiales de JBL, dbx, Shure, QSC, MA Lighting, Soundcraft y Crown en La Rioja y norte de Espana. Primeras marcas del audio profesional a tu alcance.",
  alternates: {
    canonical: "https://vca-soundsystems.es/marcas",
  },
  openGraph: {
    title: "Distribuidores Oficiales JBL, Shure, QSC en La Rioja — VCA Sound Systems",
    description:
      "11 marcas de primera linea. Distribuidores oficiales en La Rioja. JBL, dbx, Shure, QSC, MA Lighting, Soundcraft, Crown, ElectroVoice, Epson, Panasonic y Prolight.",
    url: "https://vca-soundsystems.es/marcas",
  },
};

const marcasSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Marcas distribuidoras — VCA Sound Systems",
  description:
    "Distribuidores oficiales de primeras marcas de audio profesional en La Rioja: JBL, dbx, Shure, QSC, MA Lighting, Soundcraft, Crown, ElectroVoice, Epson, Panasonic.",
  url: "https://vca-soundsystems.es/marcas",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://vca-soundsystems.es",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Marcas",
        item: "https://vca-soundsystems.es/marcas",
      },
    ],
  },
};

export default function MarcasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(marcasSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Ruta de navegacion" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[#9CA3AF]">
              <li>
                <Link href="/" className="hover:text-[#FF6B35] transition-colors">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">
                <ArrowRight size={12} className="text-[#374151]" />
              </li>
              <li className="text-[#F9FAFB]" aria-current="page">
                Marcas
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
              Distribuidores oficiales
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[#F9FAFB] uppercase leading-none mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Las mejores marcas{" "}
              <span className="text-[#9CA3AF]">en La Rioja</span>
            </h1>
            <p className="text-[#9CA3AF] text-lg sm:text-xl leading-relaxed max-w-2xl">
              Distribuidores oficiales desde hace decadas de las marcas en las que confian los
              profesionales del sector audiovisual en todo el mundo. Si los mejores festivales
              y las mejores salas del planeta usan estas marcas, hay una razon.
            </p>
          </div>
        </div>
      </section>

      {/* Intro autoridad */}
      <section className="pb-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { numero: "11", label: "marcas distribuidoras" },
              { numero: "50+", label: "anos de relacion con fabricantes" },
              { numero: "La Rioja", label: "y norte de Espana" },
              { numero: "Oficial", label: "garantia de fabricante incluida" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 bg-[#111827] border border-[#374151] rounded-sm text-center"
              >
                <p
                  className="text-2xl sm:text-3xl font-bold text-[#FF6B35] mb-1 uppercase"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {item.numero}
                </p>
                <p className="text-[#9CA3AF] text-xs leading-tight">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de marcas */}
      <MarcasGrid />

      {/* Copy de autoridad */}
      <section className="py-20 sm:py-28 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
                Por que importa la marca
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] uppercase leading-none mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                No todo el sonido{" "}
                <span className="bg-gradient-to-r from-[#FF6B35] to-[#C026D3] bg-clip-text text-transparent">
                  suena igual
                </span>
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">
                Cuando el Glastonbury Festival o el O2 Arena de Londres necesitan un sistema de
                sonido, no llaman a cualquier proveedor. Especifican JBL, QSC o dbx porque la
                diferencia entre una experiencia de audio mediocre y una que el publico recuerde
                durante anos se mide en el hardware.
              </p>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">
                Como distribuidores oficiales en La Rioja y el norte de Espana, podemos ofrecer
                los mismos sistemas que se usan en los eventos mas grandes del mundo — con
                garantia oficial del fabricante y soporte tecnico de primer nivel.
              </p>
              <p className="text-[#9CA3AF] text-base leading-relaxed">
                Tanto si necesitas un sistema de sonido JBL para un festival de 10.000 personas
                como una consola MA Lighting para un espectaculo de iluminacion de alta exigencia,
                tenemos el equipo y el conocimiento para hacerlo bien.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  titulo: "Garantia oficial de fabricante",
                  descripcion:
                    "Al ser distribuidores oficiales, todos los equipos tienen garantia directa del fabricante. Sin intermediarios, sin letra pequena.",
                },
                {
                  titulo: "Equipos siempre en stock",
                  descripcion:
                    "Mantenemos inventario propio de los modelos mas demandados para poder servir en los plazos que requiere cualquier produccion.",
                },
                {
                  titulo: "Soporte tecnico especializado",
                  descripcion:
                    "Nuestro equipo tecnico conoce a fondo cada pieza de equipamiento que distribuimos. No solo vendemos — formamos y damos soporte.",
                },
                {
                  titulo: "Acceso a ultimas novedades",
                  descripcion:
                    "Como distribuidores, tenemos acceso prioritario a las nuevas referencias antes de que lleguen al mercado general.",
                },
              ].map((item) => (
                <div
                  key={item.titulo}
                  className="p-5 bg-[#0A0A0A] border border-[#374151] rounded-sm"
                >
                  <h3
                    className="text-lg font-bold text-[#F9FAFB] uppercase mb-2"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {item.titulo}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#0A0A0A] border-t border-[#374151]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Solicita informacion
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-8 max-w-xl mx-auto">
            Tanto si quieres contratar un servicio como si necesitas informacion sobre una marca
            o un equipo especifico, estamos disponibles para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/presupuesto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B35] text-white font-semibold uppercase tracking-wide hover:bg-[#FF6B35]/90 transition-colors duration-200"
            >
              Solicitar presupuesto
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#374151] text-[#F9FAFB] font-semibold uppercase tracking-wide hover:border-[#FF6B35]/50 transition-colors duration-200 text-sm"
            >
              Contactar directamente
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
