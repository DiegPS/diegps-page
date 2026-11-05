export type Feature = {
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};
export type Detail = {
  headline: string;
  lead: string;
  facts: [string, string][];
  problem: string;
  decision: string;
  result: string;
  features: Feature[];
  notice?: string;
  availability?: string;
};
export const details: Record<string, Detail> = {
  workser: {
    headline: "Menos ruido.\nMás oportunidades.",
    lead: "Decide qué ofertas quieres dejar de ver. Workser filtra empresas y palabras clave en LinkedIn, Indeed y Computrabajo, con reglas editables y estadísticas desde el navegador.",
    facts: [
      ["v0.2.0", "Release pública en GitHub"],
      ["3 portales", "LinkedIn, Indeed y Computrabajo"],
      ["2 modos", "Ocultar o difuminar"],
      ["Local", "Reglas y métricas en el navegador"],
    ],
    problem:
      "Buscar empleo exige revisar ofertas repetidas de empresas o con términos que no encajan con lo que buscas. Los filtros de cada portal no siempre permiten excluir ese ruido de forma consistente.",
    decision:
      "Una extensión construida con WXT, React y TypeScript aplica reglas por empresa y palabras clave sobre las tarjetas de ofertas. Cada portal tiene su integración y las reglas se guardan localmente, con opciones para ocultar, difuminar o mantener coincidencias en una lista permitida.",
    result:
      "Una extensión con release pública v0.2.0 y paquetes para Chrome y Firefox. Reúne edición de reglas, importación y exportación TXT, una lista permitida, métricas por portal y un contador de ofertas bloqueadas en el icono de la extensión.",
    availability:
      "Descarga los paquetes para Chrome o Firefox desde GitHub. La instalación es manual; el repositorio incluye las instrucciones para cargar la extensión en Chrome o Edge.",
    notice:
      "Las capturas del repositorio muestran una versión anterior de la interfaz. La release enlazada es v0.2.0.",
    features: [
      {
        label: "01 / FILTRAR",
        title: "Tus reglas.\nTu búsqueda.",
        description:
          "Añade empresas y palabras clave, busca entre tus reglas y edítalas directamente. Ordena o agrupa los filtros y conserva excepciones con la lista permitida.",
        image: "workser-filters",
        alt: "Panel de Workser con filtros por empresa y búsqueda de reglas",
      },
      {
        label: "02 / MEDIR",
        title: "El ruido que\nya no ves.",
        description:
          "Consulta los conteos de hoy, semana y total, la tendencia de siete días, la distribución por portal y las reglas con más coincidencias. Son métricas de ofertas filtradas, no de resultados de contratación.",
        image: "workser-analytics",
        alt: "Estadísticas de Workser con tendencia de siete días y distribución por portal",
      },
      {
        label: "03 / AJUSTAR",
        title: "Oculta. Difumina.\nO pausa.",
        description:
          "Activa o desactiva la extensión, elige cómo tratar las ofertas bloqueadas y configura la retención de métricas en 30, 90 o 180 días.",
        image: "workser-settings",
        alt: "Configuración de Workser: activación, modo de ocultamiento y retención de métricas",
      },
    ],
  },
  onauto: {
    headline: "Del ingreso\na la entrega.",
    lead: "Talleres y flotillas en una sola operación. OnAuto conecta vehículos, órdenes, cotizaciones, reparaciones, inventario y cobranza desde una aplicación adaptada a móvil, web y escritorio.",
    facts: [
      ["Publicado", "Con uso en un taller real"],
      ["Flutter", "Cliente multiplataforma"],
      ["PostgreSQL", "Datos e historial persistentes"],
      ["White-label", "Identidad por taller"],
    ],
    problem:
      "Cuando recepción, cotizaciones, refacciones y pagos se gestionan por separado, el mismo vehículo termina repartido entre hojas, documentos y conversaciones. Cada traspaso exige volver a buscar o capturar información.",
    decision:
      "Conectar el ciclo de servicio alrededor de una orden: estados y autorizaciones explícitos, cotizaciones versionadas, evidencia adjunta y documentos PDF. Una API Fastify con PostgreSQL conserva el historial; Flutter presenta el flujo según el dispositivo y los permisos de cada usuario.",
    result:
      "Una plataforma publicada y utilizada por un taller real. Desde la recepción y el diagnóstico hasta reparación, control de calidad, entrega y garantías, cada etapa conserva su contexto. Inventario, compras y cobranza forman parte del mismo sistema.",
    availability:
      "Plataforma publicada con configuración e identidad por taller. Escríbeme para conocer el producto o conversar sobre una implementación.",
    features: [
      {
        label: "01 / OPERACIÓN",
        title: "El taller completo.\nUn flujo conectado.",
        description:
          "Un panel con órdenes activas, prioridades, flujo del taller e indicadores de inventario y cobranza. Captura de la aplicación de Windows en una instancia Demo con datos ficticios.",
        image: "onauto-dashboard",
        alt: "Panel operativo de OnAuto Demo en Windows con datos ficticios",
      },
      {
        label: "02 / REPORTES",
        title: "De la operación\na las decisiones.",
        description:
          "Consulta tiempos por estado, cumplimiento de SLA, inventario y cobranza por periodo. El dashboard de Reportes reúne el resumen operativo y las opciones de exportación y cierre mensual.",
        image: "onauto-reports",
        alt: "Dashboard de Reportes de OnAuto Demo con tiempos por estado y resumen operativo",
      },
      {
        label: "03 / AUDITORÍA",
        title: "Cada acción\ndeja su historia.",
        description:
          "Una bitácora consultable de creaciones, modificaciones, transiciones y operaciones rechazadas. Los filtros permiten localizar eventos por referencia, tipo, resultado y fecha sin perder el contexto de cada acción.",
        image: "onauto-audit",
        alt: "Bitácora de Auditoría de OnAuto Demo con eventos y filtros de búsqueda",
      },
      {
        label: "04 / CONFIGURACIÓN",
        title: "El flujo se adapta\na cada taller.",
        description:
          "Configura el diagnóstico, la recepción rápida y sus campos obligatorios. La aplicación también reúne costos, unidades de medida, personal y documentos en secciones propias.",
        image: "onauto-settings",
        alt: "Configuración de recepción de OnAuto Demo con opciones y campos obligatorios",
      },
      {
        label: "05 / ÓRDENES",
        title: "El avance\na la vista.",
        description:
          "Busca por folio y filtra por estado para consultar las órdenes de servicio. Cada registro abre su detalle y conserva el contexto del vehículo y del trabajo.",
        image: "onauto-orders",
        alt: "Listado de órdenes de servicio de OnAuto Demo con folios, estados y kilometraje",
      },
    ],
    notice:
      "Todas las capturas corresponden a OnAuto Demo 1.0.6 para Windows y muestran datos ficticios. Las cifras ilustran esa instancia de demostración.",
  },
  airdown: {
    headline: "El control está\nen tus manos.",
    lead: "Descarga, inspecciona y transforma tus medios desde una aplicación nativa para Windows. Sin subir tus archivos para procesarlos.",
    facts: [
      ["Windows", "Aplicación nativa"],
      ["FFmpeg", "Procesamiento local"],
      ["GPU", "Aceleración compatible"],
      ["Gratis", "Sin plan pro ni anuncios"],
    ],
    problem:
      "Elegir una calidad no siempre basta. Un mismo enlace puede tener distintas pistas, códecs y contenedores; después de descargar, suele hacer falta otra herramienta para trabajar el archivo.",
    decision:
      "Separar la interfaz de los motores yt-dlp, FFmpeg y Deno. Mostrar los formatos antes de descargar y reunir las operaciones posteriores en la misma aplicación.",
    result:
      "Un flujo completo: inspeccionar el enlace, escoger el formato y procesar el resultado en el equipo. AirDown está publicado en Microsoft Store.",
    features: [
      {
        label: "01 / INSPECCIONAR",
        title: "Elige la pista.\nNo solo la calidad.",
        description:
          "Video, audio, contenedor, códec, bitrate y tamaño antes de descargar. Extrae audio o conserva el formato original con la información a la vista.",
        image: "airdown-main-light",
        alt: "AirDown en modo claro: selector de formatos",
      },
      {
        label: "02 / PROCESAR",
        title: "La descarga es\nsolo el principio.",
        description:
          "Inspecciona archivos, extrae audio, normaliza volumen, recorta segmentos y cambia contenedores. Todo desde herramientas locales.",
        image: "airdown-tools",
        alt: "Herramientas locales de procesamiento multimedia de AirDown",
      },
      {
        label: "03 / MANTENER",
        title: "Motores independientes.\nUn flujo integrado.",
        description:
          "yt-dlp, FFmpeg y Deno se administran como componentes desacoplados, con comprobación de versiones e integración de aceleración por hardware.",
        image: "airdown-components",
        alt: "Administración de componentes de AirDown",
      },
    ],
  },
  airstream: {
    headline: "Tu comunidad.\nSin perder el hilo.",
    lead: "Chats de Twitch y Kick, voz, subtítulos y OBS en una sola superficie de producción. Más atención al directo. Menos cambio de ventanas.",
    facts: [
      ["2 chats", "Twitch y Kick"],
      ["TTS", "Voz local"],
      ["OBS", "Integración WebSocket"],
      ["Local", "Audio en tu equipo"],
    ],
    problem:
      "Un directo multicanal obliga a repartir la atención entre chats, subtítulos y herramientas de producción.",
    decision:
      "Reunir conexiones y mensajes en una interfaz, procesar la voz localmente y conectar la producción con OBS mediante WebSocket y overlays locales.",
    result:
      "Una interfaz de producción con chat unificado, configuración de voz y controles para OBS. El producto sigue en desarrollo; aún no tiene una descarga pública en esta web.",
    features: [
      {
        label: "01 / ESCUCHAR",
        title: "El chat también\ntiene voz.",
        description:
          "Configura idioma, voz, calidad y velocidad. Los modelos se descargan cuando decides utilizarlos y ejecutan la síntesis en tu equipo.",
        image: "airstream-tts",
        alt: "Configuración de texto a voz de AirStream Studio",
      },
      {
        label: "02 / SUBTITULAR",
        title: "Tu voz.\nTambién en texto.",
        description:
          "Reconocimiento, traducción y reducción de ruido para generar subtítulos en tiempo real con procesamiento local del audio.",
        image: "airstream-subtitles",
        alt: "Configuración de subtítulos y reconocimiento de voz",
      },
      {
        label: "03 / PRODUCIR",
        title: "Listo para\nconectar con OBS.",
        description:
          "Superposición de navegador servida localmente e integración WebSocket para incorporar estado y escenas a tu producción.",
        image: "airstream-obs",
        alt: "Integración de AirStream Studio con OBS",
      },
    ],
  },
  gachy: {
    headline: "Cada tirada\ncuenta una historia.",
    lead: "Historial, estadísticas de pity y planificación para Genshin Impact, Honkai: Star Rail y Zenless Zone Zero. Tus registros, en tu equipo.",
    facts: [
      ["3 juegos", "Genshin · Star Rail · ZZZ"],
      ["SQLite", "Almacenamiento local"],
      ["UIGF 4.2", "Interoperabilidad"],
      ["Pity", "Seguimiento por banner"],
    ],
    problem:
      "Los registros están repartidos entre juegos y cuentas. Consultar el historial no basta para entender garantías, progreso y recursos para un próximo objetivo.",
    decision:
      "Sincronización incremental a una base SQLite local, análisis por banner y respaldos interoperables mediante UIGF 4.2.",
    result:
      "Un panel para revisar cuentas, analizar tiradas y planificar recursos. El producto está en desarrollo y las capturas muestran su interfaz actual.",
    notice:
      "Gachy es un proyecto independiente y no está afiliado ni respaldado por HoYoverse. Las marcas de los juegos pertenecen a sus respectivos titulares.",
    features: [
      {
        label: "01 / HISTORIAL",
        title: "Tu progreso,\ncon contexto.",
        description:
          "Consulta tiradas acumuladas, pity y garantías por tipo de banner. Guarda los registros importados en tu equipo para conservar tu propia copia.",
        image: "gachy-history",
        alt: "Historial detallado de tiradas de Gachy",
      },
      {
        label: "02 / ESTADÍSTICAS",
        title: "Mira la historia\ndetrás de los números.",
        description:
          "Distribución de tiradas, promedios de pity y cronología de adquisiciones para explorar tus registros desde distintas perspectivas.",
        image: "gachy-statistics",
        alt: "Estadísticas y gráficos de tiradas de Gachy",
      },
      {
        label: "03 / PLANIFICAR",
        title: "Del historial\nal siguiente objetivo.",
        description:
          "Planificación de recursos para Genshin Impact, importación y exportación UIGF 4.2 y respaldos de la base de datos local.",
        image: "gachy-planner",
        alt: "Planificador de recursos y tiradas de Gachy",
      },
    ],
  },
  godsense: {
    headline: "Otra perspectiva\nde la partida.",
    lead: "Visión por computadora, un coach táctico con voz offline y análisis de partidas para League of Legends. Diseñado alrededor de captura de pantalla y datos locales.",
    facts: [
      ["DXGI", "Captura de escritorio"],
      ["DartCV", "Visión por computadora"],
      ["Sherpa", "STT y TTS offline"],
      ["SQLite", "Historial local"],
    ],
    problem:
      "Durante una partida, interpretar la pantalla, consultar historial y seguir indicaciones tácticas requiere alternar entre distintas fuentes de información.",
    decision:
      "Combinar captura DXGI, procesamiento con DartCV, un motor táctico determinista y voz local. Separar la aplicación del proceso del juego.",
    result:
      "Un prototipo de HUD, coach y scout con persistencia local. El producto está en desarrollo; las capturas permiten revisar los flujos implementados.",
    notice:
      "GodSense es independiente y no está aprobado ni respaldado por Riot Games. Operar fuera del proceso del juego no garantiza compatibilidad con sus políticas ni ausencia de sanciones. La disponibilidad está sujeta a revisión de las funciones y condiciones aplicables.",
    features: [
      {
        label: "01 / VISIÓN",
        title: "La pantalla como\nfuente de información.",
        description:
          "Desktop Duplication (DXGI) captura la superficie del escritorio; DartCV procesa las imágenes fuera del proceso del juego. El rendimiento depende del equipo y de la configuración.",
        image: "godsense-vision",
        alt: "Interfaz del HUD táctico y minimapa de GodSense",
      },
      {
        label: "02 / COACH",
        title: "Información táctica.\nVoz local.",
        description:
          "Un motor determinista organiza indicaciones por fase de partida. Sherpa permite reconocimiento mediante Push-to-Talk y síntesis offline, sin enviar el audio para su procesamiento.",
        image: "godsense-coach",
        alt: "Coach táctico y recomendaciones en GodSense",
      },
      {
        label: "03 / SCOUT",
        title: "El historial\na un vistazo.",
        description:
          "Consulta partidas recientes, campeones y estadísticas de invocadores desde una interfaz unificada. SQLite y Drift guardan progresivamente el historial en tu equipo.",
        image: "godsense-scout",
        alt: "Scout e historial de partidas de GodSense",
      },
    ],
  },
  devscope: {
    headline: "Menos contexto\nque cambiar.",
    lead: "Recorre tus proyectos con rapidez, consulta su actividad y detecta cuáles necesitan atención. Todo desde la terminal y con el teclado.",
    facts: [
      ["CLI", "Interfaz de terminal"],
      ["Git", "Contexto por proyecto"],
      ["Stacks", "Detección de tecnologías"],
      ["Terminado", "Aplicación funcional"],
    ],
    problem:
      "Una carpeta con muchos repositorios oculta el contexto. Para encontrar tecnologías, ramas y comandos, acabas abriendo proyectos uno por uno.",
    decision:
      "Un índice de repositorios que reúne detección de stack, actividad Git y comandos en una interfaz de terminal operada por teclado.",
    result:
      "Una aplicación terminada para explorar proyectos desde la terminal, revisar su actividad y reconocer cuáles están desactualizados o llevan tiempo sin cambios.",
    features: [
      {
        label: "01 / EXPLORAR",
        title: "Un mapa de\ntus repositorios.",
        description:
          "Stack, actividad y contexto de cada proyecto en una sola vista. El objetivo es reducir el tiempo entre encontrar un repositorio y comenzar a trabajar.",
        image: "devscope-main",
        alt: "Vista principal del explorador de repositorios DevScope",
      },
      {
        label: "02 / NAVEGAR",
        title: "El teclado\nmarca el ritmo.",
        description:
          "Navegación y ayuda contextual desde la propia terminal para recorrer tus proyectos sin interrumpir el flujo de trabajo.",
        image: "devscope-help",
        alt: "Atajos y ayuda contextual de DevScope",
      },
    ],
  },
};
