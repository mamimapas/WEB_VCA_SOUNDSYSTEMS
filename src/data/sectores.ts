import type { Categoria } from "./trabajos";

export interface SectorData {
  slug: string;
  nombre: string;
  categoriaFiltro: Exclude<Categoria, "Todos">;
  metaTitle: string;
  metaDescription: string;
  heroTitulo: string;
  heroSubtitulo: string;
  descripcion: string;
  beneficios: string[];
  ctaCopy: string;
}

export const SECTORES: SectorData[] = [
  {
    slug: "festivales",
    nombre: "Festivales",
    categoriaFiltro: "Festivales",
    metaTitle:
      "Sonido e Iluminacion para Festivales en Logro\u00f1o y La Rioja — VCA Sound",
    metaDescription:
      "Produccion tecnica integral para festivales de musica. Line array, iluminacion de show, estructuras y cobertura de todo el recinto. 50 anos de experiencia. Solicita presupuesto.",
    heroTitulo: "Sonorizamos tu festival con garantias",
    heroSubtitulo:
      "Desde el planteamiento tecnico hasta el ultimo acorde, somos parte de tu equipo. Tu festival, nuestra responsabilidad.",
    descripcion:
      "Organizas un festival y necesitas que el sonido suene igual en el primer metro que en el ultimo. Que la iluminacion sea espectaculo, no solo luz. Que el dia del evento no haya sorpresas tecnicas. Eso es lo que llevamos haciendo 50 anos.",
    beneficios: [
      "Diseno previo del sistema de sonido adaptado al recinto: outdoor, carpa, pabellones",
      "Line array profesional con cobertura uniforme — sin zonas muertas ni puntos de exceso",
      "Iluminacion de show: moving heads, laser, efectos especiales y video LED",
      "Estructuras de escenario certificadas — garantia de seguridad y rapidez de montaje",
      "Equipo tecnico propio en cada jornada — no externalizamos la responsabilidad",
      "Experiencia en festivales de 300 a 10.000 asistentes en toda la Peninsula",
    ],
    ctaCopy: "Habla con nuestro equipo de festivales",
  },
  {
    slug: "corporativos",
    nombre: "Corporativos",
    categoriaFiltro: "Corporativos",
    metaTitle:
      "Produccion Audiovisual para Eventos Corporativos — VCA Sound Logro\u00f1o",
    metaDescription:
      "Sonido, videoproyeccion, pantallas LED y streaming para presentaciones, galas, lanzamientos y convenciones. Tu marca merece la mejor produccion tecnica. Presupuesto sin compromiso.",
    heroTitulo: "Tu evento corporativo en las mejores manos",
    heroSubtitulo:
      "Cuando tu empresa se presenta al mundo, los detalles tecnicos no pueden fallar. Nos encargamos de todo para que tu solo pienses en el contenido.",
    descripcion:
      "Una presentacion de producto, una convencion de ventas, una gala de premios. Cada evento corporativo lleva la imagen de tu empresa. Un fallo tecnico no es solo un problema — es un impacto de marca. Por eso trabajamos con un protocolo de cero fallos.",
    beneficios: [
      "Sonido de alta inteligibilidad para discursos, ponencias y moderaciones",
      "Pantallas LED y videoproyeccion de gran formato para presentaciones impactantes",
      "Streaming profesional: llega a tu equipo donde este sin perder calidad",
      "Iluminacion cinematografica que da presencia y valor a tu escenario",
      "Coordinacion tecnica integral — un interlocutor unico para toda la produccion",
      "Experiencia en galas, lanzamientos, convenciones y eventos de hasta 800 personas",
    ],
    ctaCopy: "Solicita presupuesto para tu evento corporativo",
  },
  {
    slug: "institucionales",
    nombre: "Institucionales",
    categoriaFiltro: "Institucionales",
    metaTitle:
      "Sonorizacion de Actos Institucionales y Ayuntamientos — VCA Sound La Rioja",
    metaDescription:
      "Produccion tecnica para actos oficiales, fiestas mayores, ceremonias y eventos de organismos publicos. Cobertura de grandes aforos. Experiencia con Gobierno de La Rioja y Ayuntamiento de Logro\u00f1o.",
    heroTitulo: "La voz de tu institucion, con la calidad que merece",
    heroSubtitulo:
      "Los actos publicos exigen fiabilidad absoluta. Con 50 anos de experiencia en La Rioja, conocemos cada recinto y cada protocolo.",
    descripcion:
      "Los actos institucionales no admiten improvisacion. La fiesta mayor, el acto oficial, la inauguracion — requieren un equipo que conozca los recintos, los tiempos y el protocolo. Llevamos decadas siendo el proveedor de confianza de ayuntamientos y organismos publicos de La Rioja.",
    beneficios: [
      "Experiencia en grandes aforos al aire libre: plazas, recintos feriales, parques",
      "Refuerzo de voz con alta inteligibilidad — el publico escucha, no solo oye",
      "Montaje y desmontaje en plazos ajustados sin interferir con el espacio publico",
      "Coordinacion con protocolos institucionales y requerimientos de seguridad",
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
      "Produccion de Sonido para Conciertos en La Rioja y Espana — VCA Sound",
    metaDescription:
      "Sonido profesional para conciertos, giras y actuaciones en vivo. Sistemas JBL, QSC y dbx. Tecnicos especializados en musica en directo. Salas, teatros y recintos al aire libre.",
    heroTitulo: "El sonido que un artista merece",
    heroSubtitulo:
      "No somos un proveedor de equipos. Somos el equipo tecnico que hace que cada concierto suene exactamente como tiene que sonar.",
    descripcion:
      "En un concierto el sonido lo es todo. El artista lleva meses preparando su show — nosotros llevamos 50 anos asegurandonos de que cada nota llegue al publico como fue pensada. Trabajamos con managers, bookers y salas de concierto para que la produccion tecnica no sea nunca el problema.",
    beneficios: [
      "Sistemas de PA profesional JBL, QSC y dbx para salas y recintos al aire libre",
      "Monitoraje de escenario — el artista oye lo que necesita para dar lo mejor",
      "Tecnico de sonido especializado en musica en directo: FOH + sistema",
      "Rider tecnico cubierto: coordinacion con el equipo de produccion del artista",
      "Iluminacion de show adaptada a la identidad visual del artista",
      "Experiencia en conciertos de musica clasica, jazz, rock, musica urbana y electronica",
    ],
    ctaCopy: "Hablemos de tu proximo concierto",
  },
  {
    slug: "streaming",
    nombre: "Streaming",
    categoriaFiltro: "Streaming",
    metaTitle:
      "Streaming Profesional para Eventos en Vivo — VCA Sound Logro\u00f1o",
    metaDescription:
      "Retransmision en directo HD y 4K para eventos, conciertos, actos institucionales y presentaciones corporativas. Multicamara, graficos en directo y streaming estable. Solicita presupuesto.",
    heroTitulo: "Tu evento llega a todo el mundo",
    heroSubtitulo:
      "El streaming profesional no es poner una camara. Es produccion audiovisual completa — para que quien no puede estar presente viva el evento con la misma calidad.",
    descripcion:
      "Cada vez mas eventos necesitan llegar mas alla del recinto. Una presentacion a distribuidores en toda Espana, un concierto que quieres compartir, un acto institucional con audiencia nacional. El streaming mal ejecutado deja una imagen de aficionado. El streaming bien hecho amplifica tu mensaje.",
    beneficios: [
      "Produccion multicamara: 2 a 6 camaras segun la envergadura del evento",
      "Mezclador de video en directo — cortes, transiciones y graficos en tiempo real",
      "Streaming estable a plataformas: YouTube, Vimeo, Twitch, plataformas propias",
      "Audio de estudio: el streaming recibe la misma mezcla que el publico presencial",
      "Grabacion en paralelo en alta resolucion para el archivo del evento",
      "Tecnicos especializados en produccion audiovisual — no solo en streaming",
    ],
    ctaCopy: "Solicita presupuesto para streaming de tu evento",
  },
];

export function getSectorBySlug(slug: string): SectorData | undefined {
  return SECTORES.find((s) => s.slug === slug);
}
