export type Categoria =
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
  categoria: Exclude<Categoria, "Todos">;
  asistentes: string;
  duracion: string;
  sistema: string;
  descripcion: string;
}

export const CATEGORIAS: Categoria[] = [
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
    categoria: "Festivales",
    asistentes: "aprox. 5.000",
    duracion: "3 dias",
    sistema: "JBL VTX line array",
    descripcion:
      "Sonorizacion completa del festival de jazz mas importante de La Rioja. Sistema JBL VTX line array, iluminacion de escenario y streaming en directo.",
  },
  {
    id: "ezcaray-fest",
    imagen: "/images/trabajos/evento-08.jpg",
    titulo: "Ezcaray Fest",
    categoria: "Festivales",
    asistentes: "aprox. 3.000",
    duracion: "2 dias",
    sistema: "Sonido + iluminacion integral",
    descripcion:
      "Diseno integral de sonido e iluminacion para el festival de musica de Ezcaray. Produccion completa de escenario y estructura.",
  },
  {
    id: "gala-citroen",
    imagen: "/images/trabajos/evento-05.jpeg",
    titulo: "Gala Citroen",
    categoria: "Corporativos",
    asistentes: "aprox. 500",
    duracion: "1 dia",
    sistema: "Sonido + pantalla LED + streaming",
    descripcion:
      "Evento corporativo premium. Sonido, iluminacion cinematografica, pantalla LED y streaming para distribuidores a nivel nacional.",
  },
  {
    id: "dia-policia-nacional",
    imagen: "/images/trabajos/evento-10.jpg",
    titulo: "Dia de la Policia Nacional",
    categoria: "Institucionales",
    asistentes: "aprox. 2.000",
    duracion: "1 dia",
    sistema: "Sonorizacion + iluminacion",
    descripcion:
      "Produccion tecnica del acto institucional oficial. Sonorizacion de gran aforo, iluminacion de protocolo y refuerzo de voz.",
  },
  {
    id: "pisado-uva-san-mateo",
    imagen: "/images/trabajos/evento-01.jpg",
    titulo: "Pisado de la Uva — San Mateo",
    categoria: "Institucionales",
    asistentes: "aprox. 10.000",
    duracion: "1 dia",
    sistema: "Line array + estructura de escenario",
    descripcion:
      "Sonorizacion del acto central de las Fiestas de San Mateo de Logro\u00f1o. El evento de mayor aforo que gestionamos anualmente en La Rioja.",
  },
  {
    id: "batalla-maestros-urban-roosters",
    imagen: "/images/trabajos/evento-07.jpeg",
    titulo: "Batalla de Maestros — Urban Roosters",
    categoria: "Conciertos",
    asistentes: "aprox. 3.000",
    duracion: "1 dia",
    sistema: "Sistema de sonido profesional",
    descripcion:
      "Produccion de audio para el evento de musica urbana. Gestion completa del sistema de PA, monitoraje de escenario e iluminacion de show.",
  },
  {
    id: "concierto-malevaje",
    imagen: "/images/trabajos/evento-04.jpeg",
    titulo: "Concierto Malevaje — Vieja Bodega",
    categoria: "Conciertos",
    asistentes: "aprox. 1.000",
    duracion: "1 dia",
    sistema: "PA + monitores + iluminacion",
    descripcion:
      "Produccion tecnica completa para el concierto en Vieja Bodega. Sonido de alta fidelidad para un recinto con acustica compleja.",
  },
  {
    id: "concierto-pablo-sainz-villegas",
    imagen: "/images/trabajos/evento-09.jpg",
    titulo: "Concierto Pablo Sainz Villegas",
    categoria: "Conciertos",
    asistentes: "aprox. 800",
    duracion: "1 dia",
    sistema: "Sonido clasico + iluminacion",
    descripcion:
      "Produccion de sonido para el guitarrista clasico de talla internacional. Diseno acustico especifico para musica clasica en sala.",
  },
  {
    id: "evento-streaming-02",
    imagen: "/images/trabajos/evento-02.jpg",
    titulo: "Retransmision en Directo",
    categoria: "Streaming",
    asistentes: "presencial + online",
    duracion: "1 dia",
    sistema: "Multicamara + streaming HD",
    descripcion:
      "Produccion de streaming profesional con multicamara, mezclador de video y codificacion HD para retransmision en tiempo real.",
  },
  {
    id: "evento-corporativo-06",
    imagen: "/images/trabajos/evento-06.jpg",
    titulo: "Evento Corporativo Premium",
    categoria: "Corporativos",
    asistentes: "aprox. 400",
    duracion: "1 dia",
    sistema: "Sonido + videoproyeccion",
    descripcion:
      "Produccion audiovisual integral para presentacion corporativa. Pantallas de gran formato, sonido envolvente y control tecnico en directo.",
  },
  {
    id: "evento-institucional-11",
    imagen: "/images/trabajos/evento-11.jpg",
    titulo: "Acto Institucional La Rioja",
    categoria: "Institucionales",
    asistentes: "aprox. 1.500",
    duracion: "1 dia",
    sistema: "Refuerzo de voz + iluminacion",
    descripcion:
      "Sonorizacion de acto oficial del Gobierno de La Rioja. Cobertura completa del recinto con sistema de refuerzo de voz de alta inteligibilidad.",
  },
  {
    id: "festival-verano-12",
    imagen: "/images/trabajos/evento-12.jpg",
    titulo: "Festival de Verano",
    categoria: "Festivales",
    asistentes: "aprox. 4.000",
    duracion: "2 dias",
    sistema: "Line array outdoor + luces de show",
    descripcion:
      "Festival de musica al aire libre con dos escenarios. Diseno del sistema de sonido, cobertura uniforme y produccion de iluminacion de espectaculo.",
  },
  {
    id: "concierto-sala-13",
    imagen: "/images/trabajos/evento-13.jpg",
    titulo: "Concierto en Sala",
    categoria: "Conciertos",
    asistentes: "aprox. 600",
    duracion: "1 dia",
    sistema: "PA compacto + monitores",
    descripcion:
      "Sonorizacion de sala de conciertos con sistema compacto de alta fidelidad. Mezcla en tiempo real por tecnico especializado.",
  },
  {
    id: "streaming-institucional-14",
    imagen: "/images/trabajos/evento-14.jpg",
    titulo: "Streaming Institucional",
    categoria: "Streaming",
    asistentes: "presencial + online",
    duracion: "1 dia",
    sistema: "Multicamara + codificacion 4K",
    descripcion:
      "Retransmision en directo de acto institucional de alto nivel. Produccion de video con multicamara, graficos en directo y streaming estable.",
  },
  {
    id: "evento-corporativo-15",
    imagen: "/images/trabajos/evento-15.jpg",
    titulo: "Gala de Premios",
    categoria: "Corporativos",
    asistentes: "aprox. 300",
    duracion: "1 dia",
    sistema: "Sonido + iluminacion cinematografica",
    descripcion:
      "Produccion de gala de premios empresariales. Iluminacion de escena, sonido de alta calidad y coordinacion tecnica integral del evento.",
  },
];
