import type { Categoría } from "./trabajos";

export interface SectorData {
  slug: string;
  nombre: string;
  categoriaFiltro: Exclude<Categoría, "Todos">;
  metaTitle: string;
  metaDescription: string;
  heroTitulo: string;
  heroSubtitulo: string;
  descripción: string;
  beneficios: string[];
  ctaCopy: string;
}

export const SECTORES: SectorData[] = [
  {
    slug: "festivales",
    nombre: "Festivales",
    categoriaFiltro: "Festivales",
    metaTitle:
      "Sonido e Iluminación para Festivales en Logro\u00f1o y La Rioja — VCA Sound",
    metaDescription:
      "Producción técnica integral para festivales de música. Line array, iluminación de show, estructuras y cobertura de todo el recinto. 50 años de experiencia. Solicita presupuesto.",
    heroTitulo: "Sonorizamos tu festival con garantías",
    heroSubtitulo:
      "Desde el planteamiento técnico hasta el último acorde, somos parte de tu equipo. Tu festival, nuestra responsabilidad.",
    descripción:
      "Organizas un festival y necesitas que el sonido suene igual en el primer metro que en el último. Que la iluminación sea espectáculo, no solo luz. Que el día del evento no haya sorpresas técnicas. Eso es lo que llevamos haciendo 50 años.",
    beneficios: [
      "Diseño previo del sistema de sonido adaptado al recinto: outdoor, carpa, pabellones",
      "Line array profesional con cobertura uniforme — sin zonas muertas ni puntos de exceso",
      "Iluminación de show: moving heads, laser, efectos especiales y video LED",
      "Estructuras de escenario certificadas — garantía de seguridad y rapidez de montaje",
      "Equipo técnico propio en cada jornada — no externalizamos la responsabilidad",
      "Experiencia en festivales de 300 a 10.000 asistentes en toda la Península",
    ],
    ctaCopy: "Habla con nuestro equipo de festivales",
  },
  {
    slug: "corporativos",
    nombre: "Corporativos",
    categoriaFiltro: "Corporativos",
    metaTitle:
      "Producción Audiovisual para Eventos Corporativos — VCA Sound Logro\u00f1o",
    metaDescription:
      "Sonido, videoproyección, pantallas LED y streaming para presentaciones, galas, lanzamientos y convenciones. Tu marca merece la mejor producción técnica. Presupuesto sin compromiso.",
    heroTitulo: "Tu evento corporativo en las mejores manos",
    heroSubtitulo:
      "Cuando tu empresa se presenta al mundo, los detalles técnicos no pueden fallar. Nos encargamos de todo para que tu solo pienses en el contenido.",
    descripción:
      "Una presentacion de producto, una convencion de ventas, una gala de premios. Cada evento corporativo lleva la imagen de tu empresa. Un fallo técnico no es solo un problema — es un impacto de marca. Por eso trabajamos con un protocolo de cero fallos.",
    beneficios: [
      "Sonido de alta inteligibilidad para discursos, ponencias y moderaciones",
      "Pantallas LED y videoproyección de gran formato para presentaciones impactantes",
      "Streaming profesional: llega a tu equipo donde este sin perder calidad",
      "Iluminación cinematografica que da presencia y valor a tu escenario",
      "Coordinación técnica integral — un interlocutor único para toda la producción",
      "Experiencia en galas, lanzamientos, convenciones y eventos de hasta 800 personas",
    ],
    ctaCopy: "Solicita presupuesto para tu evento corporativo",
  },
  {
    slug: "institucionales",
    nombre: "Institucionales",
    categoriaFiltro: "Institucionales",
    metaTitle:
      "Sonorización de Actos Institucionales y Ayuntamientos — VCA Sound La Rioja",
    metaDescription:
      "Producción técnica para actos oficiales, fiestas mayores, ceremonias y eventos de organismos publicos. Cobertura de grandes aforos. Experiencia con Gobierno de La Rioja y Ayuntamiento de Logro\u00f1o.",
    heroTitulo: "La voz de tu institucion, con la calidad que merece",
    heroSubtitulo:
      "Los actos publicos exigen fiabilidad absoluta. Con 50 años de experiencia en La Rioja, conocemos cada recinto y cada protocolo.",
    descripción:
      "Los actos institucionales no admiten improvisacion. La fiesta mayor, el acto oficial, la inauguracion — requieren un equipo que conozca los recintos, los tiempos y el protocolo. Llevamos decadas siendo el proveedor de confianza de ayuntamientos y organismos publicos de La Rioja.",
    beneficios: [
      "Experiencia en grandes aforos al aire libre: plazas, recintos feriales, parques",
      "Refuerzo de voz con alta inteligibilidad — el público escucha, no solo oye",
      "Montaje y desmontaje en plazos ajustados sin interferir con el espacio público",
      "Coordinación con protocolos institucionales y requerimientos de seguridad",
      "Presupuesto adaptado a licitaciones y concursos publicos",
      "Referencias en Gobierno de La Rioja y Ayuntamiento de Logro\u00f1o",
    ],
    ctaCopy: "Contacta con nosotros para tu acto institucional",
  },
  {
    slug: "conciertos",
    nombre: "Conciertos",
    categoriaFiltro: "Conciertos",
    metaTitle:
      "Producción de Sonido para Conciertos en La Rioja y España — VCA Sound",
    metaDescription:
      "Sonido profesional para conciertos, giras y actuaciones en vivo. Sistemas JBL, QSC y dbx. Técnicos especializados en música en directo. Salas, teatros y recintos al aire libre.",
    heroTitulo: "El sonido que un artista merece",
    heroSubtitulo:
      "No somos un proveedor de equipos. Somos el equipo técnico que hace que cada concierto suene exactamente como tiene que sonar.",
    descripción:
      "En un concierto el sonido lo es todo. El artista lleva meses preparando su show — nosotros llevamos 50 años asegurandonos de que cada nota llegue al público como fue pensada. Trabajamos con managers, bookers y salas de concierto para que la producción técnica no sea nunca el problema.",
    beneficios: [
      "Sistemas de PA profesional JBL, QSC y dbx para salas y recintos al aire libre",
      "Monitoraje de escenario — el artista oye lo que necesita para dar lo mejor",
      "Técnico de sonido especializado en música en directo: FOH + sistema",
      "Rider técnico cubierto: coordinación con el equipo de producción del artista",
      "Iluminación de show adaptada a la identidad visual del artista",
      "Experiencia en conciertos de música clasica, jazz, rock, música urbana y electronica",
    ],
    ctaCopy: "Hablemos de tu próximo concierto",
  },
  {
    slug: "streaming",
    nombre: "Streaming",
    categoriaFiltro: "Streaming",
    metaTitle:
      "Streaming Profesional para Eventos en Vivo — VCA Sound Logro\u00f1o",
    metaDescription:
      "Retransmisión en directo HD y 4K para eventos, conciertos, actos institucionales y presentaciones corporativas. Multicamara, graficos en directo y streaming estable. Solicita presupuesto.",
    heroTitulo: "Tu evento llega a todo el mundo",
    heroSubtitulo:
      "El streaming profesional no es poner una camara. Es producción audiovisual completa — para que quien no puede estar presente viva el evento con la misma calidad.",
    descripción:
      "Cada vez más eventos necesitan llegar más alla del recinto. Una presentacion a distribuidores en toda España, un concierto que quieres compartir, un acto institucional con audiencia nacional. El streaming mal ejecutado deja una imagen de aficionado. El streaming bien hecho amplifica tu mensaje.",
    beneficios: [
      "Producción multicamara: 2 a 6 camaras segun la envergadura del evento",
      "Mezclador de video en directo — cortes, transiciones y graficos en tiempo real",
      "Streaming estable a plataformas: YouTube, Vimeo, Twitch, plataformas propias",
      "Audio de estudio: el streaming recibe la misma mezcla que el público presencial",
      "Grabación en paralelo en alta resolución para el archivo del evento",
      "Técnicos especializados en producción audiovisual — no solo en streaming",
    ],
    ctaCopy: "Solicita presupuesto para streaming de tu evento",
  },
];

export function getSectorBySlug(slug: string): SectorData | undefined {
  return SECTORES.find((s) => s.slug === slug);
}
