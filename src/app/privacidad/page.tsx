import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de VCA Sound Systems. Información sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
  robots: { index: false, follow: false },
};

export default function PoliticaPrivacidadPage() {
  const fechaActualizacion = "9 de abril de 2026";

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="mb-12">
          <p className="text-[#FF6B35] text-sm font-semibold uppercase tracking-widest mb-3">
            Protección de datos
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F9FAFB] uppercase leading-tight mb-4">
            Política de Privacidad
          </h1>
          <p className="text-[#9CA3AF] text-sm">
            Última actualización: {fechaActualizacion}
          </p>
        </div>

        {/* Contenido */}
        <div className="prose prose-invert max-w-none space-y-10 text-[#D1D5DB] leading-relaxed">

          {/* Introducción */}
          <section>
            <p>
              En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo,
              de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que
              respecta al tratamiento de datos personales (RGPD), y de la Ley Orgánica 3/2018,
              de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos
              Digitales (LOPDGDD), VCA Sound Systems le informa sobre el tratamiento de los datos
              personales que usted nos facilita a través de este sitio web.
            </p>
          </section>

          {/* 1. Responsable */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              1. Responsable del tratamiento
            </h2>
            <ul className="space-y-2 list-none pl-0">
              <li>
                <span className="text-[#F9FAFB] font-semibold">Denominación:</span>{" "}
                VCA Sound Systems
              </li>
              <li>
                <span className="text-[#F9FAFB] font-semibold">CIF/NIF:</span>{" "}
                <em className="text-[#FF6B35]">(por confirmar con Eusebio)</em>
              </li>
              <li>
                <span className="text-[#F9FAFB] font-semibold">Domicilio:</span>{" "}
                Logroño, La Rioja, España{" "}
                <em className="text-[#FF6B35]">(dirección completa por confirmar con Eusebio)</em>
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
            </ul>
          </section>

          {/* 2. Datos recogidos */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              2. Datos personales que recogemos
            </h2>
            <p>
              A través de los formularios de este sitio web (formulario de contacto y formulario
              de solicitud de presupuesto) podemos recoger los siguientes datos personales:
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Información sobre el evento (tipo, fecha, ubicación, descripción)</li>
              <li>Cualquier otra información que usted incluya libremente en el campo de mensaje</li>
            </ul>
            <p className="mt-3">
              No recogemos datos especialmente protegidos según el artículo 9 del RGPD ni datos
              de menores de 14 años. Si usted es menor de 14 años, le rogamos que no nos facilite
              ningún dato personal sin el consentimiento de sus padres o tutores.
            </p>
          </section>

          {/* 3. Finalidad */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              3. Finalidad del tratamiento
            </h2>
            <p>
              Los datos personales que nos facilita se utilizarán exclusivamente para las
              siguientes finalidades:
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>
                <span className="text-[#F9FAFB] font-semibold">Formulario de contacto:</span>{" "}
                Gestionar y responder a su consulta o solicitud de información.
              </li>
              <li>
                <span className="text-[#F9FAFB] font-semibold">Formulario de presupuesto:</span>{" "}
                Elaborar y enviarle un presupuesto personalizado para los servicios de sonido,
                iluminación o audiovisual solicitados.
              </li>
              <li>
                <span className="text-[#F9FAFB] font-semibold">Comunicaciones comerciales:</span>{" "}
                Siempre que usted lo haya consentido expresamente, enviarle información sobre
                novedades, servicios y promociones de VCA Sound Systems.
              </li>
            </ul>
          </section>

          {/* 4. Base legal */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              4. Base legal del tratamiento
            </h2>
            <p>
              La base legal para el tratamiento de sus datos personales es el{" "}
              <strong className="text-[#F9FAFB]">consentimiento del interesado</strong>, que
              usted otorga de forma libre e inequívoca al cumplimentar y enviar cualquiera de
              los formularios de este sitio web (artículo 6.1.a del RGPD).
            </p>
            <p className="mt-3">
              Para el envío de comunicaciones comerciales, la base legal es igualmente su
              consentimiento expreso. Puede retirar dicho consentimiento en cualquier momento
              sin que ello afecte a la licitud del tratamiento previo.
            </p>
          </section>

          {/* 5. Plazo de conservación */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              5. Plazo de conservación de los datos
            </h2>
            <p>
              Los datos personales se conservarán durante el tiempo necesario para gestionar su
              consulta o presupuesto y, en todo caso, durante el plazo que establezca la
              normativa legal aplicable. Una vez finalizada dicha necesidad, los datos serán
              eliminados o, en su caso, bloqueados para atender posibles responsabilidades
              legales.
            </p>
            <p className="mt-3">
              En el caso de comunicaciones comerciales, los datos se conservarán hasta que usted
              retire su consentimiento.
            </p>
          </section>

          {/* 6. Destinatarios */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              6. Destinatarios
            </h2>
            <p>
              VCA Sound Systems no cederá sus datos personales a terceros, salvo obligación legal
              o intervención de terceros prestadores de servicios necesarios para la gestión de
              las solicitudes (por ejemplo, proveedores tecnológicos de alojamiento web), con
              quienes se han suscrito los correspondientes acuerdos de encargo de tratamiento.
            </p>
            <p className="mt-3">
              No se realizarán transferencias internacionales de datos fuera del Espacio Económico
              Europeo, salvo que sea estrictamente necesario y con las garantías adecuadas
              conforme al RGPD.
            </p>
          </section>

          {/* 7. Derechos ARSOPL */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              7. Sus derechos
            </h2>
            <p>
              Conforme al RGPD y la LOPDGDD, usted tiene derecho a:
            </p>
            <ul className="mt-4 space-y-3 list-none pl-0">
              <li className="flex gap-3">
                <span className="text-[#FF6B35] font-bold flex-shrink-0">A</span>
                <span>
                  <strong className="text-[#F9FAFB]">Acceso:</strong> conocer qué datos
                  personales suyos estamos tratando.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FF6B35] font-bold flex-shrink-0">R</span>
                <span>
                  <strong className="text-[#F9FAFB]">Rectificación:</strong> corregir datos
                  inexactos o incompletos.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FF6B35] font-bold flex-shrink-0">S</span>
                <span>
                  <strong className="text-[#F9FAFB]">Supresión:</strong> solicitar la
                  eliminación de sus datos cuando ya no sean necesarios.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FF6B35] font-bold flex-shrink-0">O</span>
                <span>
                  <strong className="text-[#F9FAFB]">Oposición:</strong> oponerse al
                  tratamiento de sus datos en determinadas circunstancias.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FF6B35] font-bold flex-shrink-0">P</span>
                <span>
                  <strong className="text-[#F9FAFB]">Portabilidad:</strong> recibir sus datos
                  en un formato estructurado y de uso común.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FF6B35] font-bold flex-shrink-0">L</span>
                <span>
                  <strong className="text-[#F9FAFB]">Limitación del tratamiento:</strong>{" "}
                  solicitar que se limite el tratamiento de sus datos en determinados supuestos.
                </span>
              </li>
            </ul>
            <p className="mt-4">
              Para ejercer cualquiera de estos derechos, puede dirigirse a VCA Sound Systems
              mediante correo electrónico a{" "}
              <a
                href="mailto:ecentenorobles@gmail.com"
                className="text-[#FF6B35] hover:text-white transition-colors"
              >
                ecentenorobles@gmail.com
              </a>
              , indicando en el asunto &quot;Ejercicio de derechos RGPD&quot; y adjuntando una
              copia de su documento de identidad.
            </p>
          </section>

          {/* 8. Autoridad de control */}
          <section>
            <h2 className="text-xl font-bold text-[#F9FAFB] uppercase tracking-wide mb-4 border-b border-[#374151] pb-2">
              8. Autoridad de control
            </h2>
            <p>
              Si considera que el tratamiento de sus datos personales infringe la normativa
              vigente, tiene derecho a presentar una reclamación ante la{" "}
              <strong className="text-[#F9FAFB]">
                Agencia Española de Protección de Datos (AEPD)
              </strong>
              , autoridad de control competente en España, a través de su sitio web{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6B35] hover:text-white transition-colors"
              >
                www.aepd.es
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
