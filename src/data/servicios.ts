export type ServicioIconName = "Volume2" | "Lightbulb" | "Monitor" | "Radio" | "Building2" | "Mic";

export interface Servicio {
  slug: string;
  iconName: ServicioIconName;
  titulo: string;
  subtitulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  queIncluye: string[];
  tiposDeEvento: { nombre: string; slug?: string }[];
  marcasRelevantes: { nombre: string; src: string; categoría: string }[];
  proyectosRelacionados: {
    imagen: string;
    titulo: string;
    categoría: string;
    asistentes: string;
    descripción: string;
    año: string;
  }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
}

export const SERVICIOS: Servicio[] = [
  {
    slug: "sonido-profesional-eventos",
    iconName: "Volume2",
    titulo: "Sonido Profesional para Eventos",
    subtitulo: "Sistemas de PA de primera línea para cualquier escala",
    descripcionCorta:
      "Sistemas de sonido JBL, QSC y dbx para conciertos, festivales y eventos corporativos en La Rioja y toda España. Técnicos especializados.",
    descripcionLarga:
      "El sonido es el corazon de cualquier evento en vivo. Desde un concierto de 200 personas hasta un festival de 50.000, disenaremos y operaremos el sistema exacto que necesita tu producción. Llevamos 50 años haciendo que la música llegue a todos y cada uno de los asistentes con la misma intensidad y claridad. Cuando nos contratas para el sonido de tu evento, no eres un cliente más — eres parte de nuestro equipo técnico por el tiempo que dure el show.",
    queIncluye: [
      "Sistemas de PA line array JBL y QSC para cobertura uniforme en todo el recinto",
      "Consolas digitales Soundcraft con escena de 96 canales para eventos de gran formato",
      "Procesadores de senial dbx para mezcla y control dinamico en tiempo real",
      "Monitores de escenario para artistas con mezclas independientes por musico",
      "Microfonos inalambricos Shure de sistemas de alta calidad de transmision",
      "Microfonia Crown para instalaciones fijas en auditorios y salas de conferencias",
      "Sistema de intercomunicacion entre el equipo técnico durante el evento",
      "Estudio movil de grabación multicanal integrado cuando se requiera",
      "Servicio de asistencia técnica durante el montaje, la prueba de sonido y el evento completo",
    ],
    tiposDeEvento: [
      { nombre: "Festivales de música", slug: "festivales" },
      { nombre: "Conciertos y actuaciones en vivo", slug: "conciertos" },
      { nombre: "Eventos corporativos y galas", slug: "corporativos" },
      { nombre: "Congresos y conferencias", slug: "institucionales" },
      { nombre: "Bodas y celebraciones" },
      { nombre: "Eventos deportivos" },
    ],
    marcasRelevantes: [
      { nombre: "JBL Professional", src: "/images/marcas/marca-jbl.jpeg", categoría: "Sonido" },
      { nombre: "QSC", src: "/images/marcas/marca-qsc.png", categoría: "Amplificación" },
      { nombre: "dbx Professional", src: "/images/marcas/marca-dbx.png", categoría: "Procesadores" },
      { nombre: "Soundcraft", src: "/images/marcas/marca-soundcraft.jpg", categoría: "Consolas" },
      { nombre: "Shure", src: "/images/marcas/marca-shure.png", categoría: "Microfonos" },
    ],
    proyectosRelacionados: [
      {
        imagen: "/images/trabajos/evento-03.jpg",
        titulo: "Festival de Jazz Breton",
        categoría: "Festival",
        asistentes: "5.000",
        descripción:
          "Sonorización completa del festival de jazz más importante de La Rioja. Sistema JBL line array, iluminación de escenario y streaming en directo.",
        año: "2020",
      },
      {
        imagen: "/images/trabajos/evento-08.jpg",
        titulo: "Ezcaray Fest",
        categoría: "Festival",
        asistentes: "3.500",
        descripción:
          "Diseño integral de sonido e iluminación para el festival de música de Ezcaray. Producción completa de escenario.",
        año: "2020",
      },
      {
        imagen: "/images/trabajos/evento-02.jpg",
        titulo: "Concierto Vieja Bodega",
        categoría: "Concierto",
        asistentes: "1.200",
        descripción:
          "Producción de sonido y monitoraje para concierto en recinto cerrado con alta demanda de calidad de escucha en escenario.",
        año: "2020",
      },
    ],
    seo: {
      title: "Sonido Profesional para Eventos en Logroño — VCA Sound Systems",
      description:
        "Sistemas de sonido JBL, QSC y dbx para conciertos, festivales y eventos corporativos en La Rioja. Técnicos especializados. 50 años de experiencia. Solicita presupuesto.",
      canonical: "https://vca-soundsystems.es/servicios/sonido-profesional-eventos",
    },
  },
  {
    slug: "iluminacion-profesional-eventos",
    iconName: "Lightbulb" as const,
    titulo: "Iluminación Profesional para Eventos",
    subtitulo: "Diseños de luz que transforman cualquier espacio",
    descripcionCorta:
      "Iluminación profesional con MA Lighting y Prolight para festivales, conciertos y eventos corporativos. Cabezas moviles, LED, wash, beam y efectos especiales.",
    descripcionLarga:
      "La iluminación es lo que convierte un espacio en una experiencia. Un diseño de luz bien ejecutado cambia completamente la percepcion del público, marca el ritmo del espectáculo y refuerza la identidad de marca de cada evento. Nuestro equipo de diseño e iluminación trabaja desde la preproduccion para crear un show de luz que hable el mismo idioma que la música y el contenido visual del evento.",
    queIncluye: [
      "Cabezas moviles de haz y wash con protocolo DMX/RDM para programacion avanzada",
      "Consolas MA Lighting con control total del espectáculo de luz desde front of house",
      "Focos LED de alta potencia para iluminación de escenario y wash de fondo",
      "Efectos especiales: maquinas de humo, hazer, estroboscopicos y laser de seguridad",
      "Estructuras de truss para posicionamiento optimo de las luminarias en recinto",
      "Cableado y dimmerizado DMX para espacios de hasta 500 luminarias",
      "Iluminación arquitectonica para recintos de bodas, galas y eventos de lujo",
      "Gobos y proyeccion de imagen en superficies para branding de evento",
      "Servicio técnico de iluminación durante toda la producción del evento",
    ],
    tiposDeEvento: [
      { nombre: "Festivales de música", slug: "festivales" },
      { nombre: "Conciertos y espectáculos en vivo", slug: "conciertos" },
      { nombre: "Galas y eventos de lujo", slug: "corporativos" },
      { nombre: "Presentaciones de producto" },
      { nombre: "Bodas y celebraciones" },
      { nombre: "Eventos institucionales", slug: "institucionales" },
    ],
    marcasRelevantes: [
      { nombre: "MA Lighting", src: "/images/marcas/marca-malighting.jpeg", categoría: "Consolas" },
      { nombre: "Prolight", src: "/images/marcas/marca-dbx.png", categoría: "Iluminación" },
    ],
    proyectosRelacionados: [
      {
        imagen: "/images/trabajos/evento-04.jpeg",
        titulo: "Gala Día de la Policia Nacional",
        categoría: "Institucional",
        asistentes: "600",
        descripción:
          "Producción de iluminación ceremonial para la gala oficial de la Policia Nacional en La Rioja con diseño de luz institucional.",
        año: "2020",
      },
      {
        imagen: "/images/trabajos/evento-05.jpeg",
        titulo: "Gala Citroen",
        categoría: "Corporativo",
        asistentes: "800",
        descripción:
          "Iluminación cinematografica para evento corporativo premium de Citroen con técnica de luz de gala para distribuidores nacionales.",
        año: "2020",
      },
      {
        imagen: "/images/trabajos/evento-08.jpg",
        titulo: "Ezcaray Fest",
        categoría: "Festival",
        asistentes: "3.500",
        descripción:
          "Diseño integral de iluminación para festival de música de Ezcaray con show de luz sincronizado con la programacion musical.",
        año: "2020",
      },
    ],
    seo: {
      title: "Iluminación Profesional para Eventos — VCA Sound Systems Logroño",
      description:
        "Iluminación de eventos con MA Lighting en La Rioja y toda España. Cabezas moviles, LED, efectos especiales. Festivales, galas y conciertos. Presupuesto sin compromiso.",
      canonical: "https://vca-soundsystems.es/servicios/iluminacion-profesional-eventos",
    },
  },
  {
    slug: "videoproyeccion-pantalla-led",
    iconName: "Monitor" as const,
    titulo: "Videoproyección y Pantalla LED para Eventos",
    subtitulo: "Imagen de alta resolución en cualquier escala",
    descripcionCorta:
      "Pantallas LED indoor/outdoor y sistemas de videoproyección Epson y Panasonic para conferencias, festivales y galas de gran formato.",
    descripcionLarga:
      "En la era del contenido visual, la pantalla es tan importante como el sonido. Ya sea una pantalla LED gigante para un festival al aire libre o una videoproyección de precision para un congreso medico, dimensionamos y operamos la solución visual exacta que necesita tu evento. Trabajamos con los mejores sistemas de videoproyección del mercado — Epson y Panasonic — para garantizar una imagen fiel, brillante y sin artefactos en cualquier condición de luz.",
    queIncluye: [
      "Pantallas LED indoor y outdoor en modulos de alta resolución pixel pitch 2.6-5mm",
      "Videoproyectores Epson de alta luminosidad (20.000-30.000 lumenes) para grandes superficies",
      "Proyectores Panasonic profesionales para instalaciones de sala oscura y semiscura",
      "Switchers y procesadores de video para gestion de multiples fuentes de sena",
      "Scaler y convertidores para compatibilidad con cualquier fuente HDMI, SDI, DisplayPort",
      "Pantallas secundarias para telepromter, contador de tiempo y monitores de escenario",
      "Soporte estructural especifico para montaje seguro de pantallas LED a cualquier altura",
      "Cableado de video profesional con redundancia para eventos sin riesgo de corte de senal",
      "Operador de video en directo para gestion de contenidos durante el evento",
    ],
    tiposDeEvento: [
      { nombre: "Congresos y conferencias", slug: "institucionales" },
      { nombre: "Festivales de música", slug: "festivales" },
      { nombre: "Presentaciones de producto" },
      { nombre: "Eventos corporativos", slug: "corporativos" },
      { nombre: "Galas de premios" },
      { nombre: "Actos institucionales", slug: "institucionales" },
    ],
    marcasRelevantes: [
      { nombre: "Epson", src: "/images/marcas/marca-epson.png", categoría: "Videoproyección" },
      { nombre: "Panasonic", src: "/images/marcas/marca-panasonic.png", categoría: "Videoproyección" },
    ],
    proyectosRelacionados: [
      {
        imagen: "/images/trabajos/evento-05.jpeg",
        titulo: "Gala Citroen",
        categoría: "Corporativo",
        asistentes: "800",
        descripción:
          "Pantalla LED y videoproyección de gran formato para la gala de distribuidores nacionales de Citroen con contenido de marca en alta resolución.",
        año: "2020",
      },
      {
        imagen: "/images/trabajos/evento-07.jpeg",
        titulo: "Pisado de la Uva — San Mateo",
        categoría: "Institucional",
        asistentes: "10.000",
        descripción:
          "Pantalla LED outdoor de gran formato para el acto central de las Fiestas de San Mateo de Logroño con retransmisión en directo.",
        año: "2020",
      },
      {
        imagen: "/images/trabajos/evento-11.jpg",
        titulo: "Batalla de Maestros Urban Roosters",
        categoría: "Corporativo",
        asistentes: "2.000",
        descripción:
          "Sistema de videoproyección multicanal para evento de gastronomia con emisión simultánea en multiples pantallas.",
        año: "2020",
      },
    ],
    seo: {
      title: "Videoproyección y Pantalla LED para Eventos — VCA Sound Systems",
      description:
        "Pantallas LED y videoproyección Epson y Panasonic para eventos en La Rioja y España. Festivales, congresos y galas. Técnicos especializados. Solicita presupuesto.",
      canonical: "https://vca-soundsystems.es/servicios/videoproyeccion-pantalla-led",
    },
  },
  {
    slug: "streaming-retransmision-eventos",
    iconName: "Radio" as const,
    titulo: "Streaming y Retransmisión de Eventos en Directo",
    subtitulo: "Tu evento, en directo para todo el mundo",
    descripcionCorta:
      "Retransmisión profesional de eventos en vivo. Multicamara, codificacion HD y distribucion a YouTube, Twitch, LinkedIn Live y plataformas privadas.",
    descripcionLarga:
      "El streaming profesional no es poner un movil en un tripe. Es disenar un sistema de producción multicamara en directo que lleve la experiencia del evento a miles de personas que no pueden estar alli fisicamente. Desde un congreso medico con 300 asistentes hasta un festival con 50.000 en sala y 200.000 online — dimensionamos la producción segun el alcance que necesitas.",
    queIncluye: [
      "Producción multicamara con camaras profesionales y cameraman experimentado",
      "Mezclador de video en directo para corte y composicion de planos en tiempo real",
      "Codificacion de senal HD y Full HD para distribucion online con baja latencia",
      "Distribucion simultánea a multiples plataformas: YouTube, Twitch, LinkedIn Live, Vimeo",
      "Plataformas privadas de streaming con acceso restringido para eventos corporativos",
      "Sistema de graphics en directo: titulos, logos, lower-thirds y transiciones de marca",
      "Audio profesional sincronizado con el sistema de PA del evento",
      "Grabación simultánea del stream para entrega de contenido post-evento",
      "Monitoring de calidad de senal en tiempo real durante toda la emisión",
    ],
    tiposDeEvento: [
      { nombre: "Congresos y conferencias", slug: "institucionales" },
      { nombre: "Festivales de música", slug: "festivales" },
      { nombre: "Presentaciones de producto" },
      { nombre: "Eventos corporativos", slug: "corporativos" },
      { nombre: "Actos institucionales", slug: "institucionales" },
      { nombre: "Torneos y eventos deportivos" },
    ],
    marcasRelevantes: [
      { nombre: "Panasonic", src: "/images/marcas/marca-panasonic.png", categoría: "Camaras" },
      { nombre: "Epson", src: "/images/marcas/marca-epson.png", categoría: "Video" },
    ],
    proyectosRelacionados: [
      {
        imagen: "/images/trabajos/evento-03.jpg",
        titulo: "Festival de Jazz Breton",
        categoría: "Festival",
        asistentes: "5.000",
        descripción:
          "Retransmisión en streaming del festival de jazz más importante de La Rioja con producción multicamara y distribucion online.",
        año: "2020",
      },
      {
        imagen: "/images/trabajos/evento-05.jpeg",
        titulo: "Gala Citroen",
        categoría: "Corporativo",
        asistentes: "800",
        descripción:
          "Streaming privado para distribuidores de Citroen fuera de la sala con acceso restringido y calidad de producción broadcast.",
        año: "2020",
      },
      {
        imagen: "/images/trabajos/evento-06.jpg",
        titulo: "Concierto Pablo Sainz Villegas",
        categoría: "Concierto",
        asistentes: "1.500",
        descripción:
          "Retransmisión multicamara de concierto clasico con audio sincronizado del sistema de PA de sala para plataformas de streaming.",
        año: "2020",
      },
    ],
    seo: {
      title: "Streaming y Retransmisión de Eventos en Directo — VCA Sound",
      description:
        "Streaming profesional multicamara de eventos en La Rioja y España. YouTube, LinkedIn Live, plataformas privadas. Congresos, festivales, corporativo. Presupuesto sin compromiso.",
      canonical: "https://vca-soundsystems.es/servicios/streaming-retransmision-eventos",
    },
  },
  {
    slug: "estructuras-escenarios",
    iconName: "Building2" as const,
    titulo: "Estructuras y Escenarios para Eventos",
    subtitulo: "Truss, Ground Support y escenarios adaptables a cualquier recinto",
    descripcionCorta:
      "Estructuras truss, ground support, puentes, torres elevadoras y escenarios adaptables a cualquier recinto y formato de evento.",
    descripcionLarga:
      "La estructura es la columna vertebral de cualquier producción de evento en vivo. Sin una estructura bien dimensionada y certificada, el sonido, la iluminación y el video no pueden desplegarse de forma segura y efectiva. Nuestro equipo de riggers y técnicos de estructuras trabaja con materiales certificados y siguiendo los protocolos de seguridad más exigentes del sector para garantizar que cada elemento aereo o de suelo este seguro durante todo el evento.",
    queIncluye: [
      "Estructuras de truss certificadas en aluminio para cargas de hasta 1.000 kg por punto",
      "Ground support modular para festivales y recintos sin puntos de anclaje en techo",
      "Puentes frontales y traseros para distribucion optima de iluminación y PA",
      "Torres elevadoras para iluminación lateral y posicionamiento de delay towers",
      "Escenarios modulares con alturas de 80cm a 2m adaptables al recinto",
      "Alas de escenario y plataformas de extensión para producciones de gran formato",
      "Foso de camara y separacion de público con valla certificada de primer nivel",
      "Calculo de cargas y planimetria previa al montaje incluidos en el servicio",
      "Equipo de riggers certificados con formacion en trabajos en altura",
    ],
    tiposDeEvento: [
      { nombre: "Festivales de música", slug: "festivales" },
      { nombre: "Conciertos y espectáculos en vivo", slug: "conciertos" },
      { nombre: "Eventos corporativos con escenario", slug: "corporativos" },
      { nombre: "Actos institucionales al aire libre", slug: "institucionales" },
      { nombre: "Ferias y exposiciones" },
    ],
    marcasRelevantes: [
      { nombre: "JBL Professional", src: "/images/marcas/marca-jbl.jpeg", categoría: "Sonido aereo" },
      { nombre: "MA Lighting", src: "/images/marcas/marca-malighting.jpeg", categoría: "Iluminación aerea" },
    ],
    proyectosRelacionados: [
      {
        imagen: "/images/trabajos/evento-08.jpg",
        titulo: "Ezcaray Fest",
        categoría: "Festival",
        asistentes: "3.500",
        descripción:
          "Montaje de estructura de escenario completa para festival de música de Ezcaray con ground support y torre de iluminación lateral.",
        año: "2020",
      },
      {
        imagen: "/images/trabajos/evento-07.jpeg",
        titulo: "Pisado de la Uva — San Mateo",
        categoría: "Institucional",
        asistentes: "10.000",
        descripción:
          "Estructura de escenario para el acto central de las Fiestas de San Mateo con plataforma elevada y cobertura de truss completa.",
        año: "2020",
      },
      {
        imagen: "/images/trabajos/evento-01.jpg",
        titulo: "Cafe Cantante",
        categoría: "Concierto",
        asistentes: "400",
        descripción:
          "Estructura modular de escenario para recinto de sala de conciertos con posicionamiento técnico de PA e iluminación en truss.",
        año: "2020",
      },
    ],
    seo: {
      title: "Estructuras y Escenarios para Eventos — Truss y Ground Support — VCA Sound",
      description:
        "Estructuras truss, escenarios y ground support certificados para festivales y eventos en La Rioja y España. Riggers especializados. Solicita presupuesto sin compromiso.",
      canonical: "https://vca-soundsystems.es/servicios/estructuras-escenarios",
    },
  },
  {
    slug: "grabacion-eventos",
    iconName: "Mic" as const,
    titulo: "Grabación de Eventos y Videos Corporativos",
    subtitulo: "Tu evento, documentado con calidad profesional",
    descripcionCorta:
      "Grabación multicanal de eventos en vivo, videoclips corporativos y directos de audio en estudio propio. Entrega en formatos broadcast y streaming.",
    descripcionLarga:
      "Un evento dura lo que dura. Una buena grabación dura para siempre. Documentamos tus eventos con la misma atención al detalle que ponemos en el sonido y la iluminación. Tanto si necesitas el registro completo de un congreso para distribucion online como si quieres un videoclip corporativo para tu empresa, nuestro equipo de grabación cuenta con el equipamiento y la experiencia para que el resultado final este a la altura de tu evento.",
    queIncluye: [
      "Grabación multicanal sincronizada con la mesa de sonido del evento (stems por instrumento)",
      "Grabación de video multiangulo con edicion de muestras en 48h tras el evento",
      "Grabación en estudio propio para directos de audio, podcasts y voiceovers corporativos",
      "Edicion y postproduccion de audio con correccion tonal y masterizacion",
      "Entrega de archivos en formatos WAV 48kHz/24bit y MP3 para distribucion digital",
      "Grabación de video en formato Full HD y 4K segun el destino del contenido",
      "Edicion de resumen de evento (highlight reel) para uso en redes sociales y web",
      "Subtitulacion y accesibilidad para contenidos de congreso o formacion corporativa",
    ],
    tiposDeEvento: [
      { nombre: "Congresos y conferencias", slug: "institucionales" },
      { nombre: "Conciertos y espectáculos", slug: "conciertos" },
      { nombre: "Eventos corporativos", slug: "corporativos" },
      { nombre: "Bodas y celebraciones" },
      { nombre: "Videos de empresa" },
    ],
    marcasRelevantes: [
      { nombre: "Shure", src: "/images/marcas/marca-shure.png", categoría: "Microfonos" },
      { nombre: "Panasonic", src: "/images/marcas/marca-panasonic.png", categoría: "Camaras" },
      { nombre: "Soundcraft", src: "/images/marcas/marca-soundcraft.jpg", categoría: "Consolas de grabación" },
    ],
    proyectosRelacionados: [
      {
        imagen: "/images/trabajos/evento-06.jpg",
        titulo: "Concierto Pablo Sainz Villegas",
        categoría: "Concierto",
        asistentes: "1.500",
        descripción:
          "Grabación multicanal de concierto de guitarra clasica con captura de audio de alta resolución y video multiangulo para edicion posterior.",
        año: "2020",
      },
      {
        imagen: "/images/trabajos/evento-09.jpg",
        titulo: "Concierto Malevaje",
        categoría: "Concierto",
        asistentes: "900",
        descripción:
          "Grabación en directo de concierto de tango en la Vieja Bodega con captura de stems para lanzamiento de album en vivo.",
        año: "2020",
      },
      {
        imagen: "/images/trabajos/evento-05.jpeg",
        titulo: "Gala Citroen",
        categoría: "Corporativo",
        asistentes: "800",
        descripción:
          "Grabación completa del evento corporativo de Citroen para uso interno de la marca con edicion de resumen ejecutivo de 5 minutos.",
        año: "2020",
      },
    ],
    seo: {
      title: "Grabación de Eventos y Videos Corporativos — VCA Sound Systems",
      description:
        "Grabación profesional de eventos en La Rioja y España. Grabación multicanal, video corporativo y directos de audio. Entrega en 48h. Solicita presupuesto.",
      canonical: "https://vca-soundsystems.es/servicios/grabacion-eventos",
    },
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return SERVICIOS.find((s) => s.slug === slug);
}

export function getServiciosResumen() {
  return SERVICIOS.map(({ slug, iconName, titulo, descripcionCorta }) => ({
    slug,
    iconName,
    titulo,
    descripcionCorta,
  }));
}
