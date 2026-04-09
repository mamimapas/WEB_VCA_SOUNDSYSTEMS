import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FactCounters from "@/components/home/FactCounters";
import ServiciosBento from "@/components/home/ServiciosBento";
import CustomerStories from "@/components/home/CustomerStories";
import MarcasMarquee from "@/components/home/MarcasMarquee";
import CTAFinal from "@/components/home/CTAFinal";

export const metadata: Metadata = {
  title: "VCA Sound Systems — Sonido e Iluminación Profesional Logroño",
  description:
    "Empresa lider en alquiler y venta de equipos de sonido, iluminación y video para eventos en La Rioja y toda España. 50 años de experiencia. JBL, QSC, Shure, dbx.",
  alternates: {
    canonical: "https://vca-soundsystems.es",
  },
  openGraph: {
    title: "VCA Sound Systems — Sonido e Iluminación Profesional Logroño",
    description:
      "50 años haciendo que los eventos suenen diferente. Sonido, iluminación y video profesional para festivales, conciertos y eventos corporativos.",
    url: "https://vca-soundsystems.es",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FactCounters />
      <ServiciosBento />
      <CustomerStories />
      <MarcasMarquee />
      <CTAFinal />
    </>
  );
}
