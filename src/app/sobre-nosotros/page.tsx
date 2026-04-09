import type { Metadata } from "next";
import SobreNosotrosClient from "./SobreNosotrosClient";

export const metadata: Metadata = {
  title: "50 Anos de Experiencia — VCA Sound Systems Historia",
  description:
    "Fundada en 1975 en Logrono, somos referentes en sonido e iluminacion profesional para eventos en La Rioja y la Peninsula. 50 anos de historia, mas de 1.000 eventos.",
  alternates: {
    canonical: "https://vca-soundsystems.es/sobre-nosotros",
  },
  openGraph: {
    title: "50 Anos de Experiencia — VCA Sound Systems",
    description:
      "Conoce la historia de VCA Sound Systems. Desde 1975 sonorizando los eventos mas importantes de La Rioja y toda Espana.",
    url: "https://vca-soundsystems.es/sobre-nosotros",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://vca-soundsystems.es/sobre-nosotros",
  name: "Sobre VCA Sound Systems — 50 Anos de Historia",
  url: "https://vca-soundsystems.es/sobre-nosotros",
  description:
    "Historia y trayectoria de VCA Sound Systems. Fundada en 1975 en Logrono, La Rioja. Mas de 50 anos de experiencia en sonido e iluminacion para eventos.",
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
