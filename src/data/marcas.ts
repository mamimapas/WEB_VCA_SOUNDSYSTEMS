export interface Marca {
  nombre: string;
  src: string;
  categoria: "Sonido" | "Iluminacion" | "Video" | "Microfonos" | "Amplificacion" | "Consolas";
  descripcion: string;
  serviciosRelacionados: string[];
}

export const MARCAS_DISTRIBUIDORAS: Marca[] = [
  {
    nombre: "JBL Professional",
    src: "/images/marcas/marca-jbl.jpeg",
    categoria: "Sonido",
    descripcion:
      "Referencia mundial en sistemas de sonido profesional para eventos en vivo. Sus line arrays son el estandar de la industria en festivales y grandes recintos de todo el mundo.",
    serviciosRelacionados: ["sonido-profesional-eventos", "estructuras-escenarios"],
  },
  {
    nombre: "dbx Professional",
    src: "/images/marcas/marca-dbx.png",
    categoria: "Sonido",
    descripcion:
      "Procesadores de senal de audio de alta precision. Sus equipos de gestion de dinamica y ecualizacion son imprescindibles en cualquier sistema de sonido profesional.",
    serviciosRelacionados: ["sonido-profesional-eventos"],
  },
  {
    nombre: "Soundcraft",
    src: "/images/marcas/marca-soundcraft.jpg",
    categoria: "Consolas",
    descripcion:
      "Fabricante britanico de consolas de mezcla profesional. Sus mesas digitales son una referencia en eventos en vivo y grabacion en estudio por su fiabilidad y calidad de sonido.",
    serviciosRelacionados: ["sonido-profesional-eventos", "grabacion-eventos"],
  },
  {
    nombre: "Crown International",
    src: "/images/marcas/marca-dbx.png",
    categoria: "Amplificacion",
    descripcion:
      "Amplificadores de potencia para instalaciones profesionales. La combinacion de eficiencia energetica y calidad de audio los hace la opcion preferida en auditorios y salas de evento.",
    serviciosRelacionados: ["sonido-profesional-eventos"],
  },
  {
    nombre: "ElectroVoice",
    src: "/images/marcas/marca-shure.png",
    categoria: "Sonido",
    descripcion:
      "Marca historica del audio profesional con mas de 90 anos de historia. Sus altavoces y microfonos son una referencia de durabilidad y calidad en el sector de los eventos en vivo.",
    serviciosRelacionados: ["sonido-profesional-eventos", "grabacion-eventos"],
  },
  {
    nombre: "Shure",
    src: "/images/marcas/marca-shure.png",
    categoria: "Microfonos",
    descripcion:
      "El fabricante de microfonos mas reconocido del mundo. Sus sistemas inalambricos y microfonos de condensador son el estandar de la industria en actuaciones en vivo y grabacion.",
    serviciosRelacionados: ["sonido-profesional-eventos", "grabacion-eventos"],
  },
  {
    nombre: "MA Lighting",
    src: "/images/marcas/marca-malighting.jpeg",
    categoria: "Iluminacion",
    descripcion:
      "La consola de iluminacion profesional mas utilizada en los festivales y espectaculos de mayor nivel mundial. El estandar de referencia para diseñadores de luz de primer nivel.",
    serviciosRelacionados: ["iluminacion-profesional-eventos"],
  },
  {
    nombre: "Prolight",
    src: "/images/marcas/marca-dbx.png",
    categoria: "Iluminacion",
    descripcion:
      "Luminarias profesionales para eventos de alta calidad. Sus cabezas moviles y efectos LED ofrecen fiabilidad y versatilidad en producciones de cualquier escala.",
    serviciosRelacionados: ["iluminacion-profesional-eventos"],
  },
  {
    nombre: "Epson Professional",
    src: "/images/marcas/marca-epson.png",
    categoria: "Video",
    descripcion:
      "Videoproyectores de alta luminosidad para eventos y presentaciones en condiciones de luz adversas. Su tecnologia laser garantiza una imagen estable y de alta fidelidad cromatica.",
    serviciosRelacionados: ["videoproyeccion-pantalla-led", "streaming-retransmision-eventos"],
  },
  {
    nombre: "QSC",
    src: "/images/marcas/marca-qsc.png",
    categoria: "Amplificacion",
    descripcion:
      "Amplificadores y procesadores de audio de alto rendimiento para instalaciones profesionales. Su plataforma Q-SYS es la referencia en control de audio y video distribuido.",
    serviciosRelacionados: ["sonido-profesional-eventos"],
  },
  {
    nombre: "Panasonic Professional",
    src: "/images/marcas/marca-panasonic.png",
    categoria: "Video",
    descripcion:
      "Equipos de video profesional de alta fiabilidad. Sus camaras y videoproyectores son la eleccion preferida por productoras y empresas de AV para eventos de primer nivel.",
    serviciosRelacionados: ["videoproyeccion-pantalla-led", "streaming-retransmision-eventos", "grabacion-eventos"],
  },
];

export const CATEGORIAS_MARCAS = [
  "Sonido",
  "Amplificacion",
  "Consolas",
  "Microfonos",
  "Iluminacion",
  "Video",
] as const;
