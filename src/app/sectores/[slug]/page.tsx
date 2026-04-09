import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Users, Clock, Cpu } from "lucide-react";
import { SECTORES, getSectorBySlug } from "@/data/sectores";
import { TRABAJOS } from "@/data/trabajos";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SECTORES.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return {};

  return {
    title: sector.metaTitle,
    description: sector.metaDescription,
    alternates: {
      canonical: `https://vca-soundsystems.es/sectores/${sector.slug}`,
    },
    openGraph: {
      title: sector.metaTitle,
      description: sector.metaDescription,
      url: `https://vca-soundsystems.es/sectores/${sector.slug}`,
    },
  };
}

export default async function SectorPage({ params }: Props) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const trabajosSector = TRABAJOS.filter(
    (t) => t.categoría === sector.categoriaFiltro
  );

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero del sector */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-10" aria-label="Ruta">
            <Link href="/" className="hover:text-[#FF6B35] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-[#FF6B35]">{sector.nombre}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-5">
                {sector.nombre}
              </p>
              <h1
                className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[#F9FAFB] uppercase leading-none mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {sector.heroTitulo.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="bg-gradient-to-r from-[#FF6B35] to-[#C026D3] bg-clip-text text-transparent">
                  {sector.heroTitulo.split(" ").slice(-2).join(" ")}
                </span>
              </h1>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8">
                {sector.heroSubtitulo}
              </p>
              <Link
                href={`/presupuesto?sector=${sector.slug}`}
                className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-semibold text-sm uppercase tracking-wide px-8 py-4 rounded-sm transition-colors duration-200"
              >
                {sector.ctaCopy}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {/* Foto destacada del sector (primera disponible) */}
            {trabajosSector.length > 0 && (
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#374151]">
                <Image
                  src={trabajosSector[0].imagen}
                  alt={`${sector.nombre} — VCA Sound Systems`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-[#FF6B35]/30 via-[#374151] to-transparent" />
      </div>

      {/* Descripción + beneficios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Descripción */}
            <div>
              <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
                Por que elegirnos
              </p>
              <h2
                className="text-4xl sm:text-5xl font-bold text-[#F9FAFB] uppercase mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Somos parte de tu equipo
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed">
                {sector.descripción}
              </p>
              <p className="text-[#9CA3AF] text-base leading-relaxed mt-4">
                No somos un proveedor más. El día de tu evento somos parte de tu
                equipo. 50 años de experiencia respaldan cada proyecto.
              </p>
            </div>

            {/* Beneficios */}
            <div>
              <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
                Lo que incluye
              </p>
              <ul className="space-y-4">
                {sector.beneficios.map((beneficio, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-[#FF6B35] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-[#9CA3AF] text-sm leading-relaxed">
                      {beneficio}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos del sector */}
      {trabajosSector.length > 0 && (
        <section className="bg-[#111827] border-t border-[#374151] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
                Casos reales
              </p>
              <h2
                className="text-5xl sm:text-6xl font-bold text-[#F9FAFB] uppercase"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Proyectos de{" "}
                <span className="bg-gradient-to-r from-[#FF6B35] to-[#C026D3] bg-clip-text text-transparent">
                  {sector.nombre.toLowerCase()}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trabajosSector.map((trabajo) => (
                <article
                  key={trabajo.id}
                  className="group bg-[#0A0A0A] border border-[#374151] rounded-sm overflow-hidden hover:border-[#FF6B35]/40 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={trabajo.imagen}
                      alt={`${trabajo.titulo} — VCA Sound Systems`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-1 bg-[#FF6B35] text-white text-xs font-semibold uppercase tracking-wide rounded-sm">
                        {trabajo.categoría}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3
                      className="text-xl font-bold text-[#F9FAFB] uppercase leading-tight mb-2"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {trabajo.titulo}
                    </h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
                      {trabajo.descripción}
                    </p>
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-[#374151]">
                      <div className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
                        <Users size={11} className="text-[#FF6B35] flex-shrink-0" aria-hidden="true" />
                        <span>{trabajo.asistentes}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
                        <Clock size={11} className="text-[#FF6B35] flex-shrink-0" aria-hidden="true" />
                        <span>{trabajo.duracion}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
                        <Cpu size={11} className="text-[#FF6B35] flex-shrink-0" aria-hidden="true" />
                        <span>{trabajo.sistema}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/trabajos"
                className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-[#FF6B35] text-sm font-medium transition-colors"
              >
                Ver todos los proyectos
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-widest mb-4">
            Hablemos
          </p>
          <h2
            className="text-5xl sm:text-6xl font-bold text-[#F9FAFB] uppercase mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Tu evento, nuestro compromiso
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-10">
            Cuentanos que tienes en mente. Sin rodeos — en 24 horas tienes una
            propuesta técnica en tu bandeja de entrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/presupuesto?sector=${sector.slug}`}
              className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-semibold text-sm uppercase tracking-wide px-8 py-4 rounded-sm transition-colors duration-200"
            >
              {sector.ctaCopy}
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 border border-[#374151] hover:border-[#FF6B35] text-[#F9FAFB] hover:text-[#FF6B35] font-semibold text-sm uppercase tracking-wide px-8 py-4 rounded-sm transition-colors duration-200"
            >
              Contactar directamente
            </Link>
          </div>
        </div>
      </section>

      {/* Navegacion entre sectores */}
      <section className="border-t border-[#374151] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#9CA3AF] text-xs uppercase tracking-widest mb-6">
            Otros sectores
          </p>
          <div className="flex flex-wrap gap-3">
            {SECTORES.filter((s) => s.slug !== sector.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/sectores/${s.slug}`}
                className="px-4 py-2 border border-[#374151] hover:border-[#FF6B35] text-[#9CA3AF] hover:text-[#FF6B35] text-sm font-semibold uppercase tracking-wide rounded-sm transition-colors duration-200"
              >
                {s.nombre}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
