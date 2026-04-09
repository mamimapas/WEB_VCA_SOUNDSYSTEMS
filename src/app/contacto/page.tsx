import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto — VCA Sound Systems Logroño",
  description:
    "Llamanos al 610 325 421 o escribenos por WhatsApp. Atendemos toda La Rioja y la Península Ibérica. Respuesta garantizada en 24 horas.",
  alternates: {
    canonical: "https://vca-soundsystems.es/contacto",
  },
  openGraph: {
    title: "Contacto — VCA Sound Systems",
    description:
      "Llama al 610 325 421, escribe un email o usa WhatsApp. Estamos en Logroño y trabajamos en toda la Península.",
    url: "https://vca-soundsystems.es/contacto",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://vca-soundsystems.es/contacto",
  name: "Contacto — VCA Sound Systems Logroño",
  url: "https://vca-soundsystems.es/contacto",
  description:
    "Pagina de contacto de VCA Sound Systems. Llama, escribe o visita nuestras instalaciones en Logroño, La Rioja.",
  provider: {
    "@id": "https://vca-soundsystems.es",
  },
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactoClient />
    </>
  );
}
