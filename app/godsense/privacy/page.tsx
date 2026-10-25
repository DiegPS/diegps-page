import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import "../../legal.css";

export const metadata: Metadata = {
  title: "Política de privacidad de GodSense",
  description: "Información sobre el procesamiento local de visión DXGI, almacenamiento en SQLite y conexiones de GodSense para Windows.",
};

export default function GodSensePrivacy() {
  return (
    <main id="main-content" className="legal">
      <nav className="legal-nav">
        <Link href="/godsense">
          <ArrowLeft /> GodSense
        </Link>
        <span>Vigente desde / 25 octubre 2026</span>
      </nav>

      <header className="legal-head">
        <span className="mono">GODSENSE / PRIVACIDAD</span>
        <div>
          <h1>Tus estadísticas y visión se procesan en tu equipo.</h1>
          <p>
            GodSense es una aplicación de escritorio nativa para Windows desarrollada por Diego
            Pahua Silvan (DiegPS). Esta política explica el procesamiento local de pantalla y voz,
            los datos guardados en el equipo y las conexiones externas, incluido el coaching con
            un proveedor de inteligencia artificial que el usuario decida configurar.
          </p>
        </div>
      </header>

      <article className="legal-body">
        <aside className="privacy-summary">
          <span className="mono">RESUMEN EN 30 SEGUNDOS</span>
          <ul>
            <li>
              Las funciones locales de GodSense no requieren una cuenta de GodSense. El coaching
              con IA puede requerir una cuenta, autorización o clave del proveedor elegido.
            </li>
            <li>No incluye publicidad comercial, compras internas ni muros de pago.</li>
            <li>
              No incorpora SDKs de analítica de terceros, telemetría ni rastreadores de
              comportamiento.
            </li>
            <li>
              La captura visual opera fuera del proceso (out-of-process) mediante la API DXGI de
              Windows sin inyección de DLLs ni acceso a memoria protegida por Vanguard.
            </li>
            <li>
              El reconocimiento de voz (Sherpa STT) y la síntesis (TTS) se ejecutan 100% de forma
              local en tu máquina; el audio de tu micrófono nunca se envía a servidores en la nube.
            </li>
            <li>
              Tu base de datos SQLite con el historial de partidas e información de scout se
              almacena exclusivamente en tu dispositivo.
            </li>
            <li>
              Si utilizas el chat con IA, tu pregunta, su transcripción y el contexto de partida
              preparado para responder pueden enviarse al proveedor seleccionado. El audio se
              transcribe localmente; una transcripción sí es texto que puede salir del equipo.
            </li>
          </ul>
        </aside>

        <section>
          <span>01</span>
          <div>
            <h2>Responsable y alcance</h2>
            <p>
              Esta política rige el uso de la aplicación de escritorio GodSense para Windows y sus
              módulos de visión computacional, scout de invocadores, coach táctico determinista y
              reconocimiento de voz. El desarrollo y publicación está a cargo de Diego Pahua Silvan,
              bajo la firma <strong>DiegPS</strong>.
            </p>
            <p>
              GodSense funciona bajo una arquitectura <em>offline-first</em> y no opera servidores
              centrales de recopilación ni bases de datos remotas de usuarios.
            </p>
          </div>
        </section>

        <section>
          <span>02</span>
          <div>
            <h2>Información utilizada y almacenada</h2>
            <div
              className="privacy-table"
              role="table"
              aria-label="Información utilizada por GodSense"
            >
              <div className="privacy-row privacy-table-head" role="row">
                <b role="columnheader">Información</b>
                <b role="columnheader">Finalidad</b>
                <b role="columnheader">Ubicación</b>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell" data-label="Información">
                  Riot ID e identificadores LCU
                </span>
                <span role="cell" data-label="Finalidad">
                  Identificar la cuenta activa localmente y consultar estadísticas de partidas.
                </span>
                <span role="cell" data-label="Ubicación">
                  Base de datos SQLite local.
                </span>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell" data-label="Información">
                  Historial de partidas y scoreboards
                </span>
                <span role="cell" data-label="Finalidad">
                  Calcular KDA histórico, tasas de victoria por rol y composiciones de equipo.
                </span>
                <span role="cell" data-label="Ubicación">
                  Base de datos SQLite local (Drift).
                </span>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell" data-label="Información">
                  Captura visual del minimapa (DXGI)
                </span>
                <span role="cell" data-label="Finalidad">
                  Detección de retratos y trayectorias mediante visión por computadora (DartCV).
                </span>
                <span role="cell" data-label="Ubicación">
                  Memoria RAM y textura GPU volátil; no se guardan grabaciones ni clips de video.
                </span>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell" data-label="Información">
                  Audio del micrófono (Push-to-Talk)
                </span>
                <span role="cell" data-label="Finalidad">
                  Transcribir comandos y preguntas tácticas al coach de voz mediante Sherpa STT.
                </span>
                <span role="cell" data-label="Ubicación">
                  Procesamiento local. Probar micrófono crea un WAV temporal de hasta tres
                  segundos para reproducirlo y lo elimina al terminar o cancelar. Si la aplicación
                  se interrumpe antes de la limpieza, puede quedar un archivo temporal residual.
                </span>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell" data-label="Información">
                  Coordenadas de calibración
                </span>
                <span role="cell" data-label="Finalidad">
                  Recordar la posición del minimapa en configuraciones multimonitor y DPI mixto.
                </span>
                <span role="cell" data-label="Ubicación">
                  Almacenamiento de preferencias locales.
                </span>
              </div>
            </div>
            <p>
              Historial, preferencias, diagnósticos y modelos se guardan localmente. Las preguntas
              y el contexto enviados a un proveedor de IA siguen también su política de privacidad.
              No se envían capturas del escritorio como parte del chat de texto implementado.
            </p>
          </div>
        </section>

        <section>
          <span>03</span>
          <div>
            <h2>Metodología de visión y límites de compatibilidad</h2>
            <p>
              GodSense implementa su módulo de visión computacional mediante la API nativa de
              Windows <code>Desktop Duplication (DXGI)</code>, tratando la pantalla del monitor como
              una superficie óptica externa.
            </p>
            <ul>
              <li>
                <strong>Cero inyección de código:</strong> GodSense no inyecta bibliotecas DLL ni
                hilos en el binario ejecutable de League of Legends.
              </li>
              <li>
                <strong>Cero lectura de memoria del juego:</strong> La aplicación no lee direcciones
                de memoria virtual interna, estructuras de datos del cliente ni el espacio de
                direcciones supervisado por Riot Vanguard.
              </li>
              <li>
                <strong>Procesamiento aislado:</strong> Las detecciones de visión se realizan a
                través de OpenCV (DartCV) en un hilo independiente, con un rendimiento que depende
                del hardware, la resolución y la configuración.
              </li>
            </ul>
            <p>
              Operar fuera del proceso del juego no implica aprobación de Riot Games ni garantiza
              compatibilidad con sus políticas o ausencia de sanciones. Las funciones deben
              revisarse frente a las condiciones vigentes antes de su distribución.
            </p>
          </div>
        </section>

        <section>
          <span>04</span>
          <div>
            <h2>Procesamiento de voz y privacidad del micrófono</h2>
            <p>
              El módulo de coach por voz utiliza el motor de inferencia local{" "}
              <strong>Sherpa ONNX</strong> con modelos acústicos alojados en tu almacenamiento:
            </p>
            <ul>
              <li>
                El micrófono se usa al mantener la tecla configurada para <em>Push-to-Talk</em>{" "}
                o al iniciar expresamente Probar micrófono. La prueba dura como máximo tres segundos
                y permite cancelarla.
              </li>
              <li>
                La inferencia de voz a texto (STT) y de texto a voz (TTS) se procesa enteramente en
                tu CPU/GPU local.
              </li>
              <li>
                <strong>Nunca</strong> se transmite streaming de audio ni archivos de voz a
                servidores externos o nubes de procesamiento de lenguaje.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <span>05</span>
          <div>
            <h2>Conexiones de red locales y externas</h2>
            <p>
              GodSense realiza comunicaciones de red acotadas a las siguientes superficies
              autorizadas:
            </p>
            <ul>
              <li>
                <strong>Loopback local (127.0.0.1):</strong> Comunicación segura con el League
                Client Update (LCU) y la API oficial Live Client Data provista por el propio cliente
                de League of Legends en tu máquina.
              </li>
              <li>
                <strong>Fuentes de recursos (Data Dragon y CommunityDragon):</strong> Descarga
                inicial y almacenamiento en caché de iconos de objetos, runas, habilidades y datos
                canónicos del parche en curso.
              </li>
              <li>
                <strong>Modelos y runtimes opcionales:</strong> Descargas de GitHub, Hugging Face
                y las ubicaciones indicadas en el catálogo. Esos servicios reciben los datos
                habituales de una conexión, como la dirección IP y el recurso solicitado.
              </li>
              <li>
                <strong>Coaching con IA:</strong> Un runtime local Kilo u OpenCode conecta con
                el proveedor y modelo seleccionados. Puede transmitir preguntas, transcripciones,
                contexto de partida e historial reciente incluido en la conversación. La retención,
                el tratamiento y los posibles costes del proveedor dependen de sus condiciones.
                No necesitas activar este chat para usar las funciones locales.
              </li>
              <li>
                <strong>Microsoft Store:</strong> Distribución y actualizaciones del paquete de
                Windows si la aplicación se publica en esta plataforma. Actualmente el producto está
                en desarrollo.
              </li>
            </ul>
            <p>
              GodSense no transmite ningún paquete de telemetría a servidores privados ni a redes
              publicitarias.
            </p>
          </div>
        </section>

        <section>
          <span>06</span>
          <div>
            <h2>Compartición y venta de datos</h2>
            <p>
              GodSense no vende datos ni integra redes publicitarias o analítica de comportamiento.
              El envío al proveedor de IA ocurre cuando utilizas ese servicio, según lo descrito
              arriba. Las autorizaciones y claves de ese servicio son administradas por el runtime;
              no se incluyen en el paquete distribuido ni deben compartirse en reportes públicos.
            </p>
          </div>
        </section>

        <section>
          <span>07</span>
          <div>
            <h2>Control y eliminación de la información</h2>
            <p>El usuario conserva el control absoluto de los datos guardados en su sistema:</p>
            <ul>
              <li>
                Desde Ajustes puedes exportar los datos locales administrados por GodSense,
                borrar el historial y aplicar la retención. El archivo exportado puede contener
                identificadores e información de partidas; tú eliges dónde guardarlo y compartirlo.
              </li>
              <li>
                La retención predeterminada elimina diagnósticos anteriores a siete días,
                registros transitorios de partida tras un margen de 24 horas y documentos de
                historial anteriores a 180 días. Algunos registros de referencia se conservan,
                incluida la última instantánea de clasificación por cuenta. Se aplica al ejecutar
                la limpieza, no como un borrado continuo a una hora exacta.
              </li>
              <li>
                Borrar el historial local no elimina automáticamente las conversaciones,
                credenciales o archivos administrados por Kilo, OpenCode o sus proveedores.
                Usa los controles correspondientes del chat, del runtime y del proveedor.
              </li>
              <li>
                El borrado de historial conserva la calibración y los modelos descargados.
                Si eliminas manualmente modelos o cachés, las funciones que dependen de ellos
                pueden requerir una nueva descarga.
              </li>
              <li>
                La desinstalación no garantiza eliminar exportaciones, archivos compartidos,
                modelos o datos de runtimes fuera del contenedor de la aplicación. El modo portable
                también puede conservar datos bajo las carpetas de perfil de Windows. Revisa esos
                archivos y las copias de seguridad que hayas creado por separado.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <span>08</span>
          <div>
            <h2>Aviso de propiedad intelectual</h2>
            <p>
              League of Legends y Riot Games son marcas comerciales o marcas comerciales registradas
              de <strong>Riot Games, Inc.</strong>
            </p>
            <p>
              GodSense es un proyecto de software independiente y no está aprobado, respaldado ni
              afiliado de manera oficial con Riot Games ni ninguna de sus propiedades intelectuales.
            </p>
          </div>
        </section>

        <section>
          <span>09</span>
          <div>
            <h2>Actualizaciones y canales de soporte</h2>
            <p>
              Cualquier cambio a esta política de privacidad se reflejará en las notas de la versión
              correspondiente de la aplicación. La fecha de vigencia se mantendrá actualizada en el
              encabezado.
            </p>
            <p>
              Para consultas relativas a la privacidad, soporte técnico o reportes, puedes visitar
              el perfil de{" "}
              <a href="https://github.com/DiegPS" target="_blank" rel="noreferrer">
                GitHub de DiegPS
              </a>{" "}
              o escribir por correo electrónico a{" "}
              <a href="mailto:support@diegps.com">support@diegps.com</a>.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
