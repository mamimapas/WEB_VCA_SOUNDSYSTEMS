import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, Calendar } from "lucide-react";
import { SERVICIOS, getServicio } from "@/data/servicios";
import ServicioHero from "@/components/servicios/ServicioHero";
import ServicioIcon from "@/components/ui/ServicioIcon";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICIOS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servicio = getServicio(slug);

  if (!servicio) {
    return {
      title: "Servicio no encontrado — VCA Sound Systems",
    };
  }

  return {
    title: servicio.seo.title,
    description: servicio.seo.description,
    alternates: {
      canonical: servicio.seo.canonical,
    },
    openGraph: {
      title: servicio.seo.title,
      description: servicio.seo.description,
      url: servicio.seo.canonical,
      type: "website",
    },
  };
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const servicio = getServicio(slug);

  if (!servicio) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: servicio.titulo,
    description: servicio.seo.description,
    serviceType: servicio.titulo,
    url: servicio.seo.canonical,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://vca-soundsystems.es",
      name: "VCA Sound Systems",
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <ServicioHero servicio={servicio} />

      {/* Que incluye */}
      <section className="py-20 sm:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
                Alcance del servicio
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] uppercase leading-none mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Que incluye{" "}
                <span className="text-[#9CA3AF]">el servicio</span>
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-8">
                {servicio.descripcionLarga}
              </p>
              <Link
                href={`/presupuesto?servicio=${servicio.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B35] text-white font-semibold uppercase tracking-wide text-sm hover:bg-[#FF6B35]/90 transition-colors duration-200"
              >
                Solicitar presupuesto
                <ArrowRight size={14} />
              </Link>
            </div>

            <ul className="space-y-3" role="list" aria-label="Que incluye el servicio">
              {servicio.queIncluye.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-4 bg-[#111827] border border-[#374151] rounded-sm"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#FF6B35] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-[#9CA3AF] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Para que tipo de eventos */}
      <section className="py-20 sm:py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
              Donde trabajamos
            </p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] uppercase leading-none"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Tipos de evento
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {servicio.tiposDeEvento.map((tipo) =>
              tipo.slug ? (
                <Link
                  key={tipo.nombre}
                  href={`/sectores/${tipo.slug}`}
                  className="px-5 py-2.5 bg-[#0A0A0A] border border-[#374151] text-[#9CA3AF] text-sm font-medium hover:border-[#FF6B35]/50 hover:text-[#F9FAFB] transition-all duration-200 rounded-sm"
                >
                  {tipo.nombre}
                </Link>
              ) : (
                <span
                  key={tipo.nombre}
                  className="px-5 py-2.5 bg-[#0A0A0A] border border-[#374151] text-[#9CA3AF] text-sm font-medium rounded-sm"
                >
                  {tipo.nombre}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Marcas que usamos */}
      {servicio.marcasRelevantes.length > 0 && (
        <section className="py-20 sm:py-24 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
                Equipamiento
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] uppercase leading-none"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Marcas que utilizamos
              </h2>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
              {servicio.marcasRelevantes.map((marca) => (
                <div
                  key={marca.nombre}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-28 h-14 relative flex items-center justify-center">
                    <Image
                      src={marca.src}
                      alt={`${marca.nombre} — distribuidor oficial VCA Sound Systems`}
                      width={112}
                      height={56}
                      className="object-contain filter brightness-50 group-hover:brightness-100 transition-all duration-300 max-h-12 w-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-[#F9FAFB] text-xs font-semibold">{marca.nombre}</p>
                    <p className="text-[#9CA3AF] text-xs">{marca.categoría}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-[#9CA3AF] text-sm mt-10">
              Distribuidores oficiales en La Rioja y norte de España.{" "}
              <Link href="/marcas" className="text-[#FF6B35] hover:underline">
                Ver todas las marcas
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* Proyectos recientes */}
      <section className="py-20 sm:py-28 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
                Proyectos recientes
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] uppercase leading-none"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Lo que hemos hecho
              </h2>
            </div>
            <Link
              href="/trabajos"
              className="flex-shrink-0 inline-flex items-center gap-2 text-[#9CA3AF] hover:text-[#FF6B35] text-sm font-medium transition-colors"
            >
              Ver todos los trabajos
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicio.proyectosRelacionados.map((proyecto, index) => (
              <article
                key={proyecto.titulo}
                className="group relative bg-[#0A0A0A] border border-[#374151] rounded-sm overflow-hidden hover:border-[#FF6B35]/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={proyecto.imagen}
                    alt={`${proyecto.titulo} — producción audiovisual por VCA Sound Systems`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#FF6B35] text-white text-xs font-semibold uppercase tracking-wide rounded-sm">
                      {proyecto.categoría}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-2xl font-bold text-[#F9FAFB] uppercase mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {proyecto.titulo}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
                    {proyecto.descripción}
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-[#374151]">
                    <div className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
                      <Users size={12} className="text-[#FF6B35]" aria-hidden="true" />
                      <span>{proyecto.asistentes} asistentes</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
                      <Calendar size={12} className="text-[#FF6B35]" aria-hidden="true" />
                      <span>{proyecto.año}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 sm:py-20 bg-[#0A0A0A] border-t border-[#374151]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
            Da el siguiente paso
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Hablemos de tu evento
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-8 max-w-xl mx-auto">
            Cuando nos contratas, no eres un cliente — eres parte de nuestro equipo por el
            tiempo que dure el evento. Cuéntanos que necesitas y respondemos en 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/presupuesto?servicio=${servicio.slug}`}
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
