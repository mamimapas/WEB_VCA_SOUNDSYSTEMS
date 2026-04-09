import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Analytics } from "@vercel/analytics/react";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vca-soundsystems.es"),
  title: {
    default: "VCA Sound Systems — Sonido e Iluminacion Profesional Logrono",
    template: "%s | VCA Sound Systems",
  },
  description:
    "Empresa lider en alquiler y venta de equipos de sonido, iluminacion y video para eventos en La Rioja y toda Espana. 50 anos de experiencia. JBL, QSC, Shure.",
  keywords: [
    "sonido profesional logrono",
    "alquiler sonido rioja",
    "iluminacion eventos logrono",
    "pantalla led eventos",
    "equipos audiovisuales rioja",
    "empresa sonido rioja",
    "sonorizacion eventos espana",
  ],
  authors: [{ name: "VCA Sound Systems" }],
  creator: "VCA Sound Systems",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://vca-soundsystems.es",
    siteName: "VCA Sound Systems",
    title: "VCA Sound Systems — Sonido e Iluminacion Profesional Logrono",
    description:
      "50 anos haciendo que los eventos suenen diferente. Sonido, iluminacion y video profesional para festivales, conciertos y eventos corporativos en toda la Peninsula.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "VCA Sound Systems — Sonido profesional para eventos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VCA Sound Systems — Sonido e Iluminacion Profesional",
    description:
      "50 anos de experiencia en sonido, iluminacion y video para eventos en toda Espana.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://vca-soundsystems.es",
  name: "VCA Sound Systems",
  description:
    "Empresa de sonido e iluminacion profesional para eventos. 50 anos de experiencia en La Rioja y toda Espana.",
  foundingDate: "1975",
  url: "https://vca-soundsystems.es",
  telephone: "+34610325421",
  email: "ecentenorobles@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Logrono",
    addressRegion: "La Rioja",
    addressCountry: "ES",
  },
  areaServed: {
    "@type": "Country",
    name: "Espana",
  },
  sameAs: [
    "https://www.facebook.com/vcasoundsystems",
    "https://instagram.com/vca_soundsystems",
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${barlowCondensed.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#F9FAFB] antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
