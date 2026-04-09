import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso legal de VCA Sound Systems. Información sobre el titular del sitio web, condiciones de uso y propiedad intelectual.",
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  const fechaActualizacion = "9 de abril de 2026";

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="mb-12">
          <p className="text-[#FF6B35] text-sm font-semibold uppercase tracking-widest mb-3">
            Información legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F9FAFB] uppercase leading-tight mb-4">
            Aviso Legal
          </h1>
          <p className="text-[#9CA3AF] text-sm">
            Última actualización: {fechaActualizacion}
          </p>
        </div>

        {/* Contenido */}
        <div className="prose prose-invert max-w-none space-y-10 text-[#D1D5DB] leading-relaxed">

          {/* 1. Datos identificativos */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              1. Datos identificativos del titular
            </h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de
              la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se pone a
              disposición del usuario la siguiente información sobre el titular del presente sitio
              web:
            </p>
            <ul className="mt-4 space-y-2 list-none pl-0">
              <li>
                <span className="text-[#F9FAFB] font-semibold">Denominación social:</span>{" "}
                VCA Sound Systems
              </li>
              <li>
                <span className="text-[#F9FAFB] font-semibold">CIF/NIF:</span>{" "}
                <em className="text-[#FF6B35]">(por confirmar con Eusebio)</em>
              </li>
              <li>
                <span className="text-[#F9FAFB] font-semibold">Domicilio social:</span>{" "}
                Logroño, La Rioja, España{" "}
                <em className="text-[#FF6B35]">(dirección completa por confirmar con Eusebio)</em>
              </li>
              <li>
                <span className="text-[#F9FAFB] font-semibold">Teléfono:</span>{" "}
                <a href="tel:+34610325421" className="text-[#FF6B35] hover:text-white transition-colors">
                  610 325 421
                </a>
              </li>
              <li>
                <span className="text-[#F9FAFB] font-semibold">Correo electrónico:</span>{" "}
                <a
                  href="mailto:ecentenorobles@gmail.com"
                  className="text-[#FF6B35] hover:text-white transition-colors"
                >
                  ecentenorobles@gmail.com
                </a>
              </li>
              <li>
                <span className="text-[#F9FAFB] font-semibold">Sitio web:</span>{" "}
                <a
                  href="https://vca-soundsystems.es"
                  className="text-[#FF6B35] hover:text-white transition-colors"
                >
                  https://vca-soundsystems.es
                </a>
              </li>
            </ul>
          </section>

          {/* 2. Objeto */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              2. Objeto del sitio web
            </h2>
            <p>
              El presente sitio web tiene como finalidad ofrecer información sobre los servicios
              de sonido profesional, iluminación, videoproyección, streaming, estructuras y
              grabación de eventos prestados por VCA Sound Systems, así como facilitar el contacto
              con la empresa y la solicitud de presupuestos para eventos en España.
            </p>
          </section>

          {/* 3. Condiciones de uso */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              3. Condiciones de uso
            </h2>
            <p>
              El acceso y uso de este sitio web atribuye la condición de usuario e implica la
              aceptación plena y sin reservas de todas y cada una de las condiciones incluidas en
              el presente aviso legal.
            </p>
            <p className="mt-3">
              El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que
              VCA Sound Systems ofrece a través de este sitio y, con carácter enunciativo pero no
              limitativo, a no emplearlos para:
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>
                Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden
                público.
              </li>
              <li>
                Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico o
                que atente contra los derechos humanos.
              </li>
              <li>
                Introducir o difundir en la red virus informáticos o cualquier otro sistema físico
                o lógico susceptible de provocar daños.
              </li>
              <li>
                Intentar acceder, utilizar y/o manipular los datos de VCA Sound Systems o de
                terceros.
              </li>
            </ul>
            <p className="mt-3">
              VCA Sound Systems se reserva el derecho de retirar el acceso al sitio web a aquellos
              usuarios que incumplan las presentes condiciones.
            </p>
          </section>

          {/* 4. Propiedad intelectual e industrial */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              4. Propiedad intelectual e industrial
            </h2>
            <p>
              Todos los contenidos de este sitio web —incluyendo, sin carácter limitativo, textos,
              fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás
              contenidos audiovisuales o sonoros, así como su diseño gráfico y código fuente—
              son propiedad intelectual de VCA Sound Systems o de terceros, sin que puedan
              entenderse cedidos al usuario ninguno de los derechos de explotación sobre los
              mismos más allá de lo estrictamente necesario para el correcto uso de la web.
            </p>
            <p className="mt-3">
              Queda expresamente prohibida la reproducción, distribución, comunicación pública y
              transformación de cualquier parte de los contenidos sin la autorización expresa y
              por escrito de VCA Sound Systems. El incumplimiento de esta prohibición podrá dar
              lugar al ejercicio de las acciones legales correspondientes.
            </p>
            <p className="mt-3">
              Las marcas y logotipos de terceros que aparecen en este sitio web (JBL, QSC, Shure,
              dbx, MA Lighting, etc.) son propiedad de sus respectivos titulares y se muestran
              únicamente a efectos informativos, sin que ello implique ninguna asociación o
              respaldo por parte de dichos titulares.
            </p>
          </section>

          {/* 5. Responsabilidad */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              5. Limitación de responsabilidad
            </h2>
            <p>
              VCA Sound Systems no se hace responsable de los daños y perjuicios de cualquier
              naturaleza que pudieran derivarse del acceso o del uso de los contenidos del sitio
              web, ni de los producidos por virus informáticos, errores u omisiones en los
              contenidos, o por la indisponibilidad temporal del sitio.
            </p>
            <p className="mt-3">
              Este sitio web puede contener enlaces a páginas de terceros. VCA Sound Systems no
              asume ninguna responsabilidad sobre dichas páginas, sus contenidos, su
              disponibilidad ni sus políticas de privacidad.
            </p>
          </section>

          {/* 6. Legislación aplicable */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              6. Legislación aplicable y jurisdicción
            </h2>
            <p>
              Las presentes condiciones de uso se rigen en su totalidad por la legislación
              española. Para la resolución de cualquier controversia o conflicto derivado del
              acceso o uso de este sitio web, las partes se someten a la jurisdicción de los
              Juzgados y Tribunales de la ciudad de Logroño (La Rioja, España), con renuncia
              expresa a cualquier otro fuero que pudiera corresponderles.
            </p>
            <p className="mt-3">
              Normativa de referencia aplicable:
            </p>
            <ul className="mt-3 space-y-1 list-disc pl-6">
              <li>
                Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y
                de Comercio Electrónico (LSSI-CE).
              </li>
              <li>
                Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el Texto
                Refundido de la Ley de Propiedad Intelectual.
              </li>
              <li>
                Ley 17/2001, de 7 de diciembre, de Marcas.
              </li>
            </ul>
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
