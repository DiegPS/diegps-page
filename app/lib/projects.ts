export type Project = {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  category: string;
  platform: string;
  tone: string;
  status: "Publicado" | "En desarrollo" | "Terminado";
  logo: string;
  image: string;
  imageAlt: string;
  statement: string;
  description: string;
  tags: string[];
  storeUrl?: string;
  visualCaption?: string;
  releaseUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "onauto",
    number: "01",
    name: "OnAuto",
    shortName: "ONAUTO",
    category: "TALLERES / FLOTILLAS",
    platform: "MÓVIL / WEB / ESCRITORIO",
    tone: "blue",
    status: "Publicado",
    logo: "onauto-logo",
    image: "onauto-dashboard",
    imageAlt: "Panel de OnAuto Demo con órdenes activas, prioridades e indicadores del taller",
    visualCaption: "CAPTURA REAL · ONAUTO DEMO 1.0.6 · DATOS FICTICIOS",
    statement: "Toda la operación. Una sola plataforma.",
    description:
      "Del ingreso del vehículo a la entrega: órdenes, cotizaciones, reparaciones, inventario y cobranza conectados. Una plataforma configurable para cada taller.",
    tags: ["Flutter", "Fastify / TypeScript", "PostgreSQL"],
  },
  {
    slug: "airdown",
    number: "02",
    name: "AirDown",
    shortName: "AIRDOWN",
    category: "MULTIMEDIA",
    platform: "WINDOWS / DESKTOP",
    tone: "cyan",
    status: "Publicado",
    logo: "airdown-logo",
    image: "airdown-main-dark",
    imageAlt: "AirDown: pistas de audio y video disponibles antes de descargar",
    statement: "Tus medios. A tu manera.",
    description:
      "Inspecciona enlaces, elige pistas y procesa audio o video en tu equipo. Una herramienta que te da control antes y después de descargar.",
    tags: ["Flutter / Dart", "FFmpeg", "yt-dlp"],
    storeUrl: "https://apps.microsoft.com/detail/9nfq8dc65h14?hl=es-ES&gl=US",
  },
  {
    slug: "airstream",
    number: "03",
    name: "AirStream Studio",
    shortName: "AIRSTREAM",
    category: "CREADORES",
    platform: "WINDOWS / DESKTOP",
    tone: "green",
    status: "En desarrollo",
    logo: "airstream-icon",
    image: "airstream-connections",
    imageAlt: "AirStream Studio: conexiones de Twitch y Kick en una sola interfaz",
    statement: "Todo tu directo. Un solo lugar.",
    description:
      "Chats de Twitch y Kick, voz local, subtítulos en tiempo real y conexión a OBS. Menos ventanas entre tú y tu comunidad.",
    tags: ["TTS local", "WebSockets", "OBS"],
  },
  {
    slug: "gachy",
    number: "04",
    name: "Gachy",
    shortName: "GACHY",
    category: "GAMING / DATOS",
    platform: "WINDOWS / DESKTOP",
    tone: "purple",
    status: "En desarrollo",
    logo: "gachy-logo",
    image: "gachy-overview",
    imageAlt: "Gachy: panel de historial y progreso de tiradas",
    statement: "La suerte también tiene historia.",
    description:
      "Historial, pity y planificación para Genshin Impact, Star Rail y ZZZ. Tus registros se guardan en una base de datos local.",
    tags: ["SQLite", "HoYoverse", "UIGF 4.2"],
  },
  {
    slug: "godsense",
    number: "05",
    name: "GodSense",
    shortName: "GODSENSE",
    category: "VISIÓN / GAMING",
    platform: "WINDOWS / DESKTOP",
    tone: "blue",
    status: "En desarrollo",
    logo: "godsense-logo",
    image: "godsense-scout",
    imageAlt: "GodSense: panel de scout e historial de partidas",
    statement: "Una nueva lectura de la partida.",
    description:
      "Visión por computadora, coach táctico y análisis de partidas para League of Legends. Captura de pantalla, voz offline y almacenamiento local.",
    tags: ["DXGI / DartCV", "Sherpa", "SQLite"],
  },
  {
    slug: "devscope",
    number: "06",
    name: "DevScope",
    shortName: "DEVSCOPE",
    category: "DEVELOPER TOOLS",
    platform: "TERMINAL / CLI",
    tone: "amber",
    status: "Terminado",
    logo: "devscope-logo",
    image: "devscope-main",
    imageAlt: "DevScope: explorador de repositorios y stacks desde la terminal",
    statement: "Tu universo de código. En una vista.",
    description:
      "Explora tus proyectos desde la terminal con rapidez. Consulta su actividad y detecta cuáles necesitan atención sin abrir cada repositorio.",
    tags: ["Git-aware", "CLI", "Keyboard-first"],
  },
  {
    slug: "workser",
    number: "07",
    name: "Workser",
    shortName: "WORKSER",
    category: "EMPLEO / PRODUCTIVIDAD",
    platform: "EXTENSIÓN DE NAVEGADOR",
    tone: "purple",
    status: "Publicado",
    logo: "workser-icon",
    image: "workser-filters",
    imageAlt: "Workser: reglas de filtrado de ofertas por empresa en el panel de la extensión",
    statement: "Busca trabajo. Reduce el ruido.",
    description:
      "Oculta o difumina ofertas por empresa y palabras clave en LinkedIn, Indeed y Computrabajo. Controla tus reglas y consulta cuánto filtra la extensión.",
    tags: ["React", "TypeScript", "WXT"],
    releaseUrl: "https://github.com/DiegPS/workser/releases/tag/v0.2.0",
  },
];
