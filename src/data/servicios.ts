import { Volume2, Lightbulb, Monitor, Radio, Building2, Mic, LucideIcon } from "lucide-react";

export interface Servicio {
  slug: string;
  icon: LucideIcon;
  titulo: string;
  subtitulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  queIncluye: string[];
  tiposDeEvento: { nombre: string; slug?: string }[];
  marcasRelevantes: { nombre: string; src: string; categoria: string }[];
  proyectosRelacionados: {
    imagen: string;
    titulo: string;
    categoria: string;
    asistentes: string;
    descripcion: string;
    ano: string;
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
    icon: Volume2,
    titulo: "Sonido Profesional para Eventos",
    subtitulo: "Sistemas de PA de primera linea para cualquier escala",
    descripcionCorta:
      "Sistemas de sonido JBL, QSC y dbx para conciertos, festivales y eventos corporativos en La Rioja y toda Espana. Tecnicos especializados.",
    descripcionLarga:
      "El sonido es el corazon de cualquier evento en vivo. Desde un concierto de 200 personas hasta un festival de 50.000, disenaremos y operaremos el sistema exacto que necesita tu produccion. Llevamos 50 anos haciendo que la musica llegue a todos y cada uno de los asistentes con la misma intensidad y claridad. Cuando nos contratas para el sonido de tu evento, no eres un cliente mas — eres parte de nuestro equipo tecnico por el tiempo que dure el show.",
    queIncluye: [
      "Sistemas de PA line array JBL y QSC para cobertura uniforme en todo el recinto",
      "Consolas digitales Soundcraft con escena de 96 canales para eventos de gran formato",
      "Procesadores de senial dbx para mezcla y control dinamico en tiempo real",
      "Monitores de escenario para artistas con mezclas independientes por musico",
      "Microfonos inalambricos Shure de sistemas de alta calidad de transmision",
      "Microfonia Crown para instalaciones fijas en auditorios y salas de conferencias",
      "Sistema de intercomunicacion entre el equipo tecnico durante el evento",
      "Estudio movil de grabacion multicanal integrado cuando se requiera",
      "Servicio de asistencia tecnica durante el montaje, la prueba de sonido y el evento completo",
    ],
    tiposDeEvento: [
      { nombre: "Festivales de musica", slug: "festivales" },
      { nombre: "Conciertos y actuaciones en vivo", slug: "conciertos" },
      { nombre: "Eventos corporativos y galas", slug: "corporativos" },
      { nombre: "Congresos y conferencias", slug: "institucionales" },
      { nombre: "Bodas y celebraciones" },
      { nombre: "Eventos deportivos" },
    ],
    marcasRelevantes: [
      { nombre: "JBL Professional", src: "/images/marcas/marca-jbl.jpeg", categoria: "Sonido" },
      { nombre: "QSC", src: "/images/marcas/marca-qsc.png", categoria: "Amplificacion" },
      { nombre: "dbx Professional", src: "/images/marcas/marca-dbx.png", categoria: "Procesadores" },
      { nombre: "Soundcraft", src: "/images/marcas/marca-soundcraft.jpg", categoria: "Consolas" },
      { nombre: "Shure", src: "/images/marcas/marca-shure.png", categoria: "Microfonos" },
    ],
    proyectosRelacionados: [
      {
        imagen: "/images/trabajos/evento-03.jpg",
        titulo: "Festival de Jazz Breton",
        categoria: "Festival",
        asistentes: "5.000",
        descripcion:
          "Sonorizacion completa del festival de jazz mas importante de La Rioja. Sistema JBL line array, iluminacion de escenario y streaming en directo.",
        ano: "2020",
      },
      {
        imagen: "/images/trabajos/evento-08.jpg",
        titulo: "Ezcaray Fest",
        categoria: "Festival",
        asistentes: "3.500",
        descripcion:
          "Diseno integral de sonido e iluminacion para el festival de musica de Ezcaray. Produccion completa de escenario.",
        ano: "2020",
      },
      {
        imagen: "/images/trabajos/evento-02.jpg",
        titulo: "Concierto Vieja Bodega",
        categoria: "Concierto",
        asistentes: "1.200",
        descripcion:
          "Produccion de sonido y monitoraje para concierto en recinto cerrado con alta demanda de calidad de escucha en escenario.",
        ano: "2020",
      },
    ],
    seo: {
      title: "Sonido Profesional para Eventos en Logrono — VCA Sound Systems",
      description:
        "Sistemas de sonido JBL, QSC y dbx para conciertos, festivales y eventos corporativos en La Rioja. Tecnicos especializados. 50 anos de experiencia. Solicita presupuesto.",
      canonical: "https://vca-soundsystems.es/servicios/sonido-profesional-eventos",
    },
  },
  {
    slug: "iluminacion-profesional-eventos",
    icon: Lightbulb,
    titulo: "Iluminacion Profesional para Eventos",
    subtitulo: "Disenos de luz que transforman cualquier espacio",
    descripcionCorta:
      "Iluminacion profesional con MA Lighting y Prolight para festivales, conciertos y eventos corporativos. Cabezas moviles, LED, wash, beam y efectos especiales.",
    descripcionLarga:
      "La iluminacion es lo que convierte un espacio en una experiencia. Un diseno de luz bien ejecutado cambia completamente la percepcion del publico, marca el ritmo del espectaculo y refuerza la identidad de marca de cada evento. Nuestro equipo de diseno e iluminacion trabaja desde la preproduccion para crear un show de luz que hable el mismo idioma que la musica y el contenido visual del evento.",
    queIncluye: [
      "Cabezas moviles de haz y wash con protocolo DMX/RDM para programacion avanzada",
      "Consolas MA Lighting con control total del espectaculo de luz desde front of house",
      "Focos LED de alta potencia para iluminacion de escenario y wash de fondo",
      "Efectos especiales: maquinas de humo, hazer, estroboscopicos y laser de seguridad",
      "Estructuras de truss para posicionamiento optimo de las luminarias en recinto",
      "Cableado y dimmerizado DMX para espacios de hasta 500 luminarias",
      "Iluminacion arquitectonica para recintos de bodas, galas y eventos de lujo",
      "Gobos y proyeccion de imagen en superficies para branding de evento",
      "Servicio tecnico de iluminacion durante toda la produccion del evento",
    ],
    tiposDeEvento: [
      { nombre: "Festivales de musica", slug: "festivales" },
      { nombre: "Conciertos y espectaculos en vivo", slug: "conciertos" },
      { nombre: "Galas y eventos de lujo", slug: "corporativos" },
      { nombre: "Presentaciones de producto" },
      { nombre: "Bodas y celebraciones" },
      { nombre: "Eventos institucionales", slug: "institucionales" },
    ],
    marcasRelevantes: [
      { nombre: "MA Lighting", src: "/images/marcas/marca-malighting.jpeg", categoria: "Consolas" },
      { nombre: "Prolight", src: "/images/marcas/marca-dbx.png", categoria: "Iluminacion" },
    ],
    proyectosRelacionados: [
      {
        imagen: "/images/trabajos/evento-04.jpeg",
        titulo: "Gala Dia de la Policia Nacional",
        categoria: "Institucional",
        asistentes: "600",
        descripcion:
          "Produccion de iluminacion ceremonial para la gala oficial de la Policia Nacional en La Rioja con diseno de luz institucional.",
        ano: "2020",
      },
      {
        imagen: "/images/trabajos/evento-05.jpeg",
        titulo: "Gala Citroen",
        categoria: "Corporativo",
        asistentes: "800",
        descripcion:
          "Iluminacion cinematografica para evento corporativo premium de Citroen con tecnica de luz de gala para distribuidores nacionales.",
        ano: "2020",
      },
      {
        imagen: "/images/trabajos/evento-08.jpg",
        titulo: "Ezcaray Fest",
        categoria: "Festival",
        asistentes: "3.500",
        descripcion:
          "Diseno integral de iluminacion para festival de musica de Ezcaray con show de luz sincronizado con la programacion musical.",
        ano: "2020",
      },
    ],
    seo: {
      title: "Iluminacion Profesional para Eventos — VCA Sound Systems Logrono",
      description:
        "Iluminacion de eventos con MA Lighting en La Rioja y toda Espana. Cabezas moviles, LED, efectos especiales. Festivales, galas y conciertos. Presupuesto sin compromiso.",
      canonical: "https://vca-soundsystems.es/servicios/iluminacion-profesional-eventos",
    },
  },
  {
    slug: "videoproyeccion-pantalla-led",
    icon: Monitor,
    titulo: "Videoproyeccion y Pantalla LED para Eventos",
    subtitulo: "Imagen de alta resolucion en cualquier escala",
    descripcionCorta:
      "Pantallas LED indoor/outdoor y sistemas de videoproyeccion Epson y Panasonic para conferencias, festivales y galas de gran formato.",
    descripcionLarga:
      "En la era del contenido visual, la pantalla es tan importante como el sonido. Ya sea una pantalla LED gigante para un festival al aire libre o una videoproyeccion de precision para un congreso medico, dimensionamos y operamos la solucion visual exacta que necesita tu evento. Trabajamos con los mejores sistemas de videoproyeccion del mercado — Epson y Panasonic — para garantizar una imagen fiel, brillante y sin artefactos en cualquier condicion de luz.",
    queIncluye: [
      "Pantallas LED indoor y outdoor en modulos de alta resolucion pixel pitch 2.6-5mm",
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
      { nombre: "Festivales de musica", slug: "festivales" },
      { nombre: "Presentaciones de producto" },
      { nombre: "Eventos corporativos", slug: "corporativos" },
      { nombre: "Galas de premios" },
      { nombre: "Actos institucionales", slug: "institucionales" },
    ],
    marcasRelevantes: [
      { nombre: "Epson", src: "/images/marcas/marca-epson.png", categoria: "Videoproyeccion" },
      { nombre: "Panasonic", src: "/images/marcas/marca-panasonic.png", categoria: "Videoproyeccion" },
    ],
    proyectosRelacionados: [
      {
        imagen: "/images/trabajos/evento-05.jpeg",
        titulo: "Gala Citroen",
        categoria: "Corporativo",
        asistentes: "800",
        descripcion:
          "Pantalla LED y videoproyeccion de gran formato para la gala de distribuidores nacionales de Citroen con contenido de marca en alta resolucion.",
        ano: "2020",
      },
      {
        imagen: "/images/trabajos/evento-07.jpeg",
        titulo: "Pisado de la Uva — San Mateo",
        categoria: "Institucional",
        asistentes: "10.000",
        descripcion:
          "Pantalla LED outdoor de gran formato para el acto central de las Fiestas de San Mateo de Logrono con retransmision en directo.",
        ano: "2020",
      },
      {
        imagen: "/images/trabajos/evento-11.jpg",
        titulo: "Batalla de Maestros Urban Roosters",
        categoria: "Corporativo",
        asistentes: "2.000",
        descripcion:
          "Sistema de videoproyeccion multicanal para evento de gastronomia con emision simultanea en multiples pantallas.",
        ano: "2020",
      },
    ],
    seo: {
      title: "Videoproyeccion y Pantalla LED para Eventos — VCA Sound Systems",
      description:
        "Pantallas LED y videoproyeccion Epson y Panasonic para eventos en La Rioja y Espana. Festivales, congresos y galas. Tecnicos especializados. Solicita presupuesto.",
      canonical: "https://vca-soundsystems.es/servicios/videoproyeccion-pantalla-led",
    },
  },
  {
    slug: "streaming-retransmision-eventos",
    icon: Radio,
    titulo: "Streaming y Retransmision de Eventos en Directo",
    subtitulo: "Tu evento, en directo para todo el mundo",
    descripcionCorta:
      "Retransmision profesional de eventos en vivo. Multicamara, codificacion HD y distribucion a YouTube, Twitch, LinkedIn Live y plataformas privadas.",
    descripcionLarga:
      "El streaming profesional no es poner un movil en un tripe. Es disenar un sistema de produccion multicamara en directo que lleve la experiencia del evento a miles de personas que no pueden estar alli fisicamente. Desde un congreso medico con 300 asistentes hasta un festival con 50.000 en sala y 200.000 online — dimensionamos la produccion segun el alcance que necesitas.",
    queIncluye: [
      "Produccion multicamara con camaras profesionales y cameraman experimentado",
      "Mezclador de video en directo para corte y composicion de planos en tiempo real",
      "Codificacion de senal HD y Full HD para distribucion online con baja latencia",
      "Distribucion simultanea a multiples plataformas: YouTube, Twitch, LinkedIn Live, Vimeo",
      "Plataformas privadas de streaming con acceso restringido para eventos corporativos",
      "Sistema de graphics en directo: titulos, logos, lower-thirds y transiciones de marca",
      "Audio profesional sincronizado con el sistema de PA del evento",
      "Grabacion simultanea del stream para entrega de contenido post-evento",
      "Monitoring de calidad de senal en tiempo real durante toda la emision",
    ],
    tiposDeEvento: [
      { nombre: "Congresos y conferencias", slug: "institucionales" },
      { nombre: "Festivales de musica", slug: "festivales" },
      { nombre: "Presentaciones de producto" },
      { nombre: "Eventos corporativos", slug: "corporativos" },
      { nombre: "Actos institucionales", slug: "institucionales" },
      { nombre: "Torneos y eventos deportivos" },
    ],
    marcasRelevantes: [
      { nombre: "Panasonic", src: "/images/marcas/marca-panasonic.png", categoria: "Camaras" },
      { nombre: "Epson", src: "/images/marcas/marca-epson.png", categoria: "Video" },
    ],
    proyectosRelacionados: [
      {
        imagen: "/images/trabajos/evento-03.jpg",
        titulo: "Festival de Jazz Breton",
        categoria: "Festival",
        asistentes: "5.000",
        descripcion:
          "Retransmision en streaming del festival de jazz mas importante de La Rioja con produccion multicamara y distribucion online.",
        ano: "2020",
      },
      {
        imagen: "/images/trabajos/evento-05.jpeg",
        titulo: "Gala Citroen",
        categoria: "Corporativo",
        asistentes: "800",
        descripcion:
          "Streaming privado para distribuidores de Citroen fuera de la sala con acceso restringido y calidad de produccion broadcast.",
        ano: "2020",
      },
      {
        imagen: "/images/trabajos/evento-06.jpg",
        titulo: "Concierto Pablo Sainz Villegas",
        categoria: "Concierto",
        asistentes: "1.500",
        descripcion:
          "Retransmision multicamara de concierto clasico con audio sincronizado del sistema de PA de sala para plataformas de streaming.",
        ano: "2020",
      },
    ],
    seo: {
      title: "Streaming y Retransmision de Eventos en Directo — VCA Sound",
      description:
        "Streaming profesional multicamara de eventos en La Rioja y Espana. YouTube, LinkedIn Live, plataformas privadas. Congresos, festivales, corporativo. Presupuesto sin compromiso.",
      canonical: "https://vca-soundsystems.es/servicios/streaming-retransmision-eventos",
    },
  },
  {
    slug: "estructuras-escenarios",
    icon: Building2,
    titulo: "Estructuras y Escenarios para Eventos",
    subtitulo: "Truss, Ground Support y escenarios adaptables a cualquier recinto",
    descripcionCorta:
      "Estructuras truss, ground support, puentes, torres elevadoras y escenarios adaptables a cualquier recinto y formato de evento.",
    descripcionLarga:
      "La estructura es la columna vertebral de cualquier produccion de evento en vivo. Sin una estructura bien dimensionada y certificada, el sonido, la iluminacion y el video no pueden desplegarse de forma segura y efectiva. Nuestro equipo de riggers y tecnicos de estructuras trabaja con materiales certificados y siguiendo los protocolos de seguridad mas exigentes del sector para garantizar que cada elemento aereo o de suelo este seguro durante todo el evento.",
    queIncluye: [
      "Estructuras de truss certificadas en aluminio para cargas de hasta 1.000 kg por punto",
      "Ground support modular para festivales y recintos sin puntos de anclaje en techo",
      "Puentes frontales y traseros para distribucion optima de iluminacion y PA",
      "Torres elevadoras para iluminacion lateral y posicionamiento de delay towers",
      "Escenarios modulares con alturas de 80cm a 2m adaptables al recinto",
      "Alas de escenario y plataformas de extension para producciones de gran formato",
      "Foso de camara y separacion de publico con valla certificada de primer nivel",
      "Calculo de cargas y planimetria previa al montaje incluidos en el servicio",
      "Equipo de riggers certificados con formacion en trabajos en altura",
    ],
    tiposDeEvento: [
      { nombre: "Festivales de musica", slug: "festivales" },
      { nombre: "Conciertos y espectaculos en vivo", slug: "conciertos" },
      { nombre: "Eventos corporativos con escenario", slug: "corporativos" },
      { nombre: "Actos institucionales al aire libre", slug: "institucionales" },
      { nombre: "Ferias y exposiciones" },
    ],
    marcasRelevantes: [
      { nombre: "JBL Professional", src: "/images/marcas/marca-jbl.jpeg", categoria: "Sonido aereo" },
      { nombre: "MA Lighting", src: "/images/marcas/marca-malighting.jpeg", categoria: "Iluminacion aerea" },
    ],
    proyectosRelacionados: [
      {
        imagen: "/images/trabajos/evento-08.jpg",
        titulo: "Ezcaray Fest",
        categoria: "Festival",
        asistentes: "3.500",
        descripcion:
          "Montaje de estructura de escenario completa para festival de musica de Ezcaray con ground support y torre de iluminacion lateral.",
        ano: "2020",
      },
      {
        imagen: "/images/trabajos/evento-07.jpeg",
        titulo: "Pisado de la Uva — San Mateo",
        categoria: "Institucional",
        asistentes: "10.000",
        descripcion:
          "Estructura de escenario para el acto central de las Fiestas de San Mateo con plataforma elevada y cobertura de truss completa.",
        ano: "2020",
      },
      {
        imagen: "/images/trabajos/evento-01.jpg",
        titulo: "Cafe Cantante",
        categoria: "Concierto",
        asistentes: "400",
        descripcion:
          "Estructura modular de escenario para recinto de sala de conciertos con posicionamiento tecnico de PA e iluminacion en truss.",
        ano: "2020",
      },
    ],
    seo: {
      title: "Estructuras y Escenarios para Eventos — Truss y Ground Support — VCA Sound",
      description:
        "Estructuras truss, escenarios y ground support certificados para festivales y eventos en La Rioja y Espana. Riggers especializados. Solicita presupuesto sin compromiso.",
      canonical: "https://vca-soundsystems.es/servicios/estructuras-escenarios",
    },
  },
  {
    slug: "grabacion-eventos",
    icon: Mic,
    titulo: "Grabacion de Eventos y Videos Corporativos",
    subtitulo: "Tu evento, documentado con calidad profesional",
    descripcionCorta:
      "Grabacion multicanal de eventos en vivo, videoclips corporativos y directos de audio en estudio propio. Entrega en formatos broadcast y streaming.",
    descripcionLarga:
      "Un evento dura lo que dura. Una buena grabacion dura para siempre. Documentamos tus eventos con la misma atencion al detalle que ponemos en el sonido y la iluminacion. Tanto si necesitas el registro completo de un congreso para distribucion online como si quieres un videoclip corporativo para tu empresa, nuestro equipo de grabacion cuenta con el equipamiento y la experiencia para que el resultado final este a la altura de tu evento.",
    queIncluye: [
      "Grabacion multicanal sincronizada con la mesa de sonido del evento (stems por instrumento)",
      "Grabacion de video multiangulo con edicion de muestras en 48h tras el evento",
      "Grabacion en estudio propio para directos de audio, podcasts y voiceovers corporativos",
      "Edicion y postproduccion de audio con correccion tonal y masterizacion",
      "Entrega de archivos en formatos WAV 48kHz/24bit y MP3 para distribucion digital",
      "Grabacion de video en formato Full HD y 4K segun el destino del contenido",
      "Edicion de resumen de evento (highlight reel) para uso en redes sociales y web",
      "Subtitulacion y accesibilidad para contenidos de congreso o formacion corporativa",
    ],
    tiposDeEvento: [
      { nombre: "Congresos y conferencias", slug: "institucionales" },
      { nombre: "Conciertos y espectaculos", slug: "conciertos" },
      { nombre: "Eventos corporativos", slug: "corporativos" },
      { nombre: "Bodas y celebraciones" },
      { nombre: "Videos de empresa" },
    ],
    marcasRelevantes: [
      { nombre: "Shure", src: "/images/marcas/marca-shure.png", categoria: "Microfonos" },
      { nombre: "Panasonic", src: "/images/marcas/marca-panasonic.png", categoria: "Camaras" },
      { nombre: "Soundcraft", src: "/images/marcas/marca-soundcraft.jpg", categoria: "Consolas de grabacion" },
    ],
    proyectosRelacionados: [
      {
        imagen: "/images/trabajos/evento-06.jpg",
        titulo: "Concierto Pablo Sainz Villegas",
        categoria: "Concierto",
        asistentes: "1.500",
        descripcion:
          "Grabacion multicanal de concierto de guitarra clasica con captura de audio de alta resolucion y video multiangulo para edicion posterior.",
        ano: "2020",
      },
      {
        imagen: "/images/trabajos/evento-09.jpg",
        titulo: "Concierto Malevaje",
        categoria: "Concierto",
        asistentes: "900",
        descripcion:
          "Grabacion en directo de concierto de tango en la Vieja Bodega con captura de stems para lanzamiento de album en vivo.",
        ano: "2020",
      },
      {
        imagen: "/images/trabajos/evento-05.jpeg",
        titulo: "Gala Citroen",
        categoria: "Corporativo",
        asistentes: "800",
        descripcion:
          "Grabacion completa del evento corporativo de Citroen para uso interno de la marca con edicion de resumen ejecutivo de 5 minutos.",
        ano: "2020",
      },
    ],
    seo: {
      title: "Grabacion de Eventos y Videos Corporativos — VCA Sound Systems",
      description:
        "Grabacion profesional de eventos en La Rioja y Espana. Grabacion multicanal, video corporativo y directos de audio. Entrega en 48h. Solicita presupuesto.",
      canonical: "https://vca-soundsystems.es/servicios/grabacion-eventos",
    },
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return SERVICIOS.find((s) => s.slug === slug);
}

export function getServiciosResumen() {
  return SERVICIOS.map(({ slug, icon, titulo, descripcionCorta }) => ({
    slug,
    icon,
    titulo,
    descripcionCorta,
  }));
}
