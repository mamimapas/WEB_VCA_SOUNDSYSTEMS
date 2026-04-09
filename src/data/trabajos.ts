export type Categoría =
  | "Todos"
  | "Festivales"
  | "Conciertos"
  | "Corporativos"
  | "Institucionales"
  | "Streaming";

export interface Trabajo {
  id: string;
  imagen: string;
  titulo: string;
  categoría: Exclude<Categoría, "Todos">;
  asistentes: string;
  duracion: string;
  sistema: string;
  descripción: string;
}

export const CATEGORÍAS: Categoría[] = [
  "Todos",
  "Festivales",
  "Conciertos",
  "Corporativos",
  "Institucionales",
  "Streaming",
];

export const TRABAJOS: Trabajo[] = [
  {
    id: "festival-jazz-breton",
    imagen: "/images/trabajos/evento-03.jpg",
    titulo: "Festival de Jazz Breton",
    categoría: "Festivales",
    asistentes: "aprox. 5.000",
    duracion: "3 días",
    sistema: "JBL VTX line array",
    descripción:
      "Sonorización completa del festival de jazz más importante de La Rioja. Sistema JBL VTX line array, iluminación de escenario y streaming en directo.",
  },
  {
    id: "ezcaray-fest",
    imagen: "/images/trabajos/evento-08.jpg",
    titulo: "Ezcaray Fest",
    categoría: "Festivales",
    asistentes: "aprox. 3.000",
    duracion: "2 días",
    sistema: "Sonido + iluminación integral",
    descripción:
      "Diseño integral de sonido e iluminación para el festival de música de Ezcaray. Producción completa de escenario y estructura.",
  },
  {
    id: "gala-citroen",
    imagen: "/images/trabajos/evento-05.jpeg",
    titulo: "Gala Citroen",
    categoría: "Corporativos",
    asistentes: "aprox. 500",
    duracion: "1 día",
    sistema: "Sonido + pantalla LED + streaming",
    descripción:
      "Evento corporativo premium. Sonido, iluminación cinematografica, pantalla LED y streaming para distribuidores a nivel nacional.",
  },
  {
    id: "día-policia-nacional",
    imagen: "/images/trabajos/evento-10.jpg",
    titulo: "Día de la Policia Nacional",
    categoría: "Institucionales",
    asistentes: "aprox. 2.000",
    duracion: "1 día",
    sistema: "Sonorización + iluminación",
    descripción:
      "Producción técnica del acto institucional oficial. Sonorización de gran aforo, iluminación de protocolo y refuerzo de voz.",
  },
  {
    id: "pisado-uva-san-mateo",
    imagen: "/images/trabajos/evento-01.jpg",
    titulo: "Pisado de la Uva — San Mateo",
    categoría: "Institucionales",
    asistentes: "aprox. 10.000",
    duracion: "1 día",
    sistema: "Line array + estructura de escenario",
    descripción:
      "Sonorización del acto central de las Fiestas de San Mateo de Logro\u00f1o. El evento de mayor aforo que gestionamos anualmente en La Rioja.",
  },
  {
    id: "batalla-maestros-urban-roosters",
    imagen: "/images/trabajos/evento-07.jpeg",
    titulo: "Batalla de Maestros — Urban Roosters",
    categoría: "Conciertos",
    asistentes: "aprox. 3.000",
    duracion: "1 día",
    sistema: "Sistema de sonido profesional",
    descripción:
      "Producción de audio para el evento de música urbana. Gestion completa del sistema de PA, monitoraje de escenario e iluminación de show.",
  },
  {
    id: "concierto-malevaje",
    imagen: "/images/trabajos/evento-04.jpeg",
    titulo: "Concierto Malevaje — Vieja Bodega",
    categoría: "Conciertos",
    asistentes: "aprox. 1.000",
    duracion: "1 día",
    sistema: "PA + monitores + iluminación",
    descripción:
      "Producción técnica completa para el concierto en Vieja Bodega. Sonido de alta fidelidad para un recinto con acústica compleja.",
  },
  {
    id: "concierto-pablo-sainz-villegas",
    imagen: "/images/trabajos/evento-09.jpg",
    titulo: "Concierto Pablo Sainz Villegas",
    categoría: "Conciertos",
    asistentes: "aprox. 800",
    duracion: "1 día",
    sistema: "Sonido clasico + iluminación",
    descripción:
      "Producción de sonido para el guitarrista clasico de talla internacional. Diseño acústico especifico para música clasica en sala.",
  },
  {
    id: "evento-streaming-02",
    imagen: "/images/trabajos/evento-02.jpg",
    titulo: "Retransmisión en Directo",
    categoría: "Streaming",
    asistentes: "presencial + online",
    duracion: "1 día",
    sistema: "Multicamara + streaming HD",
    descripción:
      "Producción de streaming profesional con multicamara, mezclador de video y codificacion HD para retransmisión en tiempo real.",
  },
  {
    id: "evento-corporativo-06",
    imagen: "/images/trabajos/evento-06.jpg",
    titulo: "Evento Corporativo Premium",
    categoría: "Corporativos",
    asistentes: "aprox. 400",
    duracion: "1 día",
    sistema: "Sonido + videoproyección",
    descripción:
      "Producción audiovisual integral para presentacion corporativa. Pantallas de gran formato, sonido envolvente y control técnico en directo.",
  },
  {
    id: "evento-institucional-11",
    imagen: "/images/trabajos/evento-11.jpg",
    titulo: "Acto Institucional La Rioja",
    categoría: "Institucionales",
    asistentes: "aprox. 1.500",
    duracion: "1 día",
    sistema: "Refuerzo de voz + iluminación",
    descripción:
      "Sonorización de acto oficial del Gobierno de La Rioja. Cobertura completa del recinto con sistema de refuerzo de voz de alta inteligibilidad.",
  },
  {
    id: "festival-verano-12",
    imagen: "/images/trabajos/evento-12.jpg",
    titulo: "Festival de Verano",
    categoría: "Festivales",
    asistentes: "aprox. 4.000",
    duracion: "2 días",
    sistema: "Line array outdoor + luces de show",
    descripción:
      "Festival de música al aire libre con dos escenarios. Diseño del sistema de sonido, cobertura uniforme y producción de iluminación de espectáculo.",
  },
  {
    id: "concierto-sala-13",
    imagen: "/images/trabajos/evento-13.jpg",
    titulo: "Concierto en Sala",
    categoría: "Conciertos",
    asistentes: "aprox. 600",
    duracion: "1 día",
    sistema: "PA compacto + monitores",
    descripción:
      "Sonorización de sala de conciertos con sistema compacto de alta fidelidad. Mezcla en tiempo real por técnico especializado.",
  },
  {
    id: "streaming-institucional-14",
    imagen: "/images/trabajos/evento-14.jpg",
    titulo: "Streaming Institucional",
    categoría: "Streaming",
    asistentes: "presencial + online",
    duracion: "1 día",
    sistema: "Multicamara + codificacion 4K",
    descripción:
      "Retransmisión en directo de acto institucional de alto nivel. Producción de video con multicamara, graficos en directo y streaming estable.",
  },
  {
    id: "evento-corporativo-15",
    imagen: "/images/trabajos/evento-15.jpg",
    titulo: "Gala de Premios",
    categoría: "Corporativos",
    asistentes: "aprox. 300",
    duracion: "1 día",
    sistema: "Sonido + iluminación cinematografica",
    descripción:
      "Producción de gala de premios empresariales. Iluminación de escena, sonido de alta calidad y coordinación técnica integral del evento.",
  },
];
