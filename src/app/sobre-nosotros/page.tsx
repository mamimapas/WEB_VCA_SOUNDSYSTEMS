import type { Metadata } from "next";
import SobreNosotrosClient from "./SobreNosotrosClient";

export const metadata: Metadata = {
  title: "50 Años de Experiencia — VCA Sound Systems Historia",
  description:
    "Fundada en 1975 en Logroño, somos referentes en sonido e iluminación profesional para eventos en La Rioja y la Península. 50 años de historia, más de 1.000 eventos.",
  alternates: {
    canonical: "https://vca-soundsystems.es/sobre-nosotros",
  },
  openGraph: {
    title: "50 Años de Experiencia — VCA Sound Systems",
    description:
      "Conoce la historia de VCA Sound Systems. Desde 1975 sonorizando los eventos más importantes de La Rioja y toda España.",
    url: "https://vca-soundsystems.es/sobre-nosotros",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://vca-soundsystems.es/sobre-nosotros",
  name: "Sobre VCA Sound Systems — 50 Años de Historia",
  url: "https://vca-soundsystems.es/sobre-nosotros",
  description:
    "Historia y trayectoria de VCA Sound Systems. Fundada en 1975 en Logroño, La Rioja. Más de 50 años de experiencia en sonido e iluminación para eventos.",
  about: {
    "@id": "https://vca-soundsystems.es",
  },
};

export default function SobreNosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <SobreNosotrosClient />
    </>
  );
}
