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
    <main className="legal">
      <nav className="legal-nav">
        <Link href="/godsense">
          <ArrowLeft /> GodSense
        </Link>
        <span>Vigente desde / 19 septiembre 2026</span>
      </nav>

      <header className="legal-head">
        <span className="mono">GODSENSE / PRIVACIDAD</span>
        <div>
          <h1>Tus estadísticas y visión se procesan en tu equipo.</h1>
          <p>
            GodSense es una aplicación de escritorio nativa para Windows desarrollada por Diego Pahua Silvan (DiegPS). Esta política describe de forma exhaustiva y transparente cómo opera la captura de pantalla por duplicación de escritorio (DXGI), qué información se almacena localmente y la total ausencia de recolección de datos personales en la nube.
          </p>
        </div>
      </header>

      <article className="legal-body">
        <aside className="privacy-summary">
          <span className="mono">RESUMEN EN 30 SEGUNDOS</span>
          <ul>
            <li>GodSense no requiere registro de cuenta, login en la nube ni correo electrónico.</li>
            <li>No incluye publicidad comercial, compras internas ni muros de pago.</li>
            <li>No incorpora SDKs de analítica de terceros, telemetría ni rastreadores de comportamiento.</li>
            <li>La captura visual opera fuera del proceso (out-of-process) mediante la API DXGI de Windows sin inyección de DLLs ni acceso a memoria protegida por Vanguard.</li>
            <li>El reconocimiento de voz (Sherpa STT) y la síntesis (TTS) se ejecutan 100% de forma local en tu máquina; el audio de tu micrófono nunca se envía a servidores en la nube.</li>
            <li>Tu base de datos SQLite con el historial de partidas e información de scout se almacena exclusivamente en tu dispositivo.</li>
          </ul>
        </aside>

        <section>
          <span>01</span>
          <div>
            <h2>Responsable y alcance</h2>
            <p>
              Esta política rige el uso de la aplicación de escritorio GodSense para Windows y sus módulos de visión computacional, scout de invocadores, coach táctico determinista y reconocimiento de voz. El desarrollo y publicación está a cargo de Diego Pahua Silvan, bajo la firma <strong>DiegPS</strong>.
            </p>
            <p>
              GodSense funciona bajo una arquitectura <em>offline-first</em> y no opera servidores centrales de recopilación ni bases de datos remotas de usuarios.
            </p>
          </div>
        </section>

        <section>
          <span>02</span>
          <div>
            <h2>Información utilizada y almacenada</h2>
            <div className="privacy-table" role="table" aria-label="Información utilizada por GodSense">
              <div className="privacy-row privacy-table-head" role="row">
                <b role="columnheader">Información</b>
                <b role="columnheader">Finalidad</b>
                <b role="columnheader">Ubicación</b>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell">Riot ID e identificadores LCU</span>
                <span role="cell">Identificar la cuenta activa localmente y consultar estadísticas de partidas.</span>
                <span role="cell">Base de datos SQLite local.</span>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell">Historial de partidas y scoreboards</span>
                <span role="cell">Calcular KDA histórico, tasas de victoria por rol y composiciones de equipo.</span>
                <span role="cell">Base de datos SQLite local (Drift).</span>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell">Captura visual del minimapa (DXGI)</span>
                <span role="cell">Detección de retratos y trayectorias mediante visión por computadora (DartCV).</span>
                <span role="cell">Memoria RAM y textura GPU volátil; no se guardan grabaciones ni clips de video.</span>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell">Audio del micrófono (Push-to-Talk)</span>
                <span role="cell">Transcribir comandos y preguntas tácticas al coach de voz mediante Sherpa STT.</span>
                <span role="cell">Memoria volátil de procesamiento de audio; nunca se almacena ni transmite.</span>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell">Coordenadas de calibración</span>
                <span role="cell">Recordar la posición del minimapa en configuraciones multimonitor y DPI mixto.</span>
                <span role="cell">Almacenamiento de preferencias locales.</span>
              </div>
            </div>
            <p>
              Toda la información procesada permanece restringida al entorno de ejecución local del usuario.
            </p>
          </div>
        </section>

        <section>
          <span>03</span>
          <div>
            <h2>Metodología de visión y cumplimiento de políticas de juego</h2>
            <p>
              GodSense implementa su módulo de visión computacional mediante la API nativa de Windows <code>Desktop Duplication (DXGI)</code>, tratando la pantalla del monitor como una superficie óptica externa.
            </p>
            <ul>
              <li><strong>Cero inyección de código:</strong> GodSense no inyecta bibliotecas DLL ni hilos en el binario ejecutable de League of Legends.</li>
              <li><strong>Cero lectura de memoria del juego:</strong> La aplicación no lee direcciones de memoria virtual interna, estructuras de datos del cliente ni el espacio de direcciones supervisado por Riot Vanguard.</li>
              <li><strong>Procesamiento aislado:</strong> Las detecciones de visión se realizan a través de OpenCV (DartCV) en un hilo independiente, garantizando tiempos de respuesta de ~20 ms sin degradar los fotogramas por segundo (FPS) del juego.</li>
            </ul>
            <p>
              Este diseño respeta estrictamente los lineamientos de Riot Games para herramientas complementarias de terceros, operando de manera pasiva y equivalente a la percepción visual humana.
            </p>
          </div>
        </section>

        <section>
          <span>04</span>
          <div>
            <h2>Procesamiento de voz y privacidad del micrófono</h2>
            <p>
              El módulo de coach por voz utiliza el motor de inferencia local <strong>Sherpa ONNX</strong> con modelos acústicos alojados en tu almacenamiento:
            </p>
            <ul>
              <li>El micrófono solo se activa mediante la tecla configurada para <em>Push-to-Talk</em> y se apaga de inmediato al soltarla.</li>
              <li>La inferencia de voz a texto (STT) y de texto a voz (TTS) se procesa enteramente en tu CPU/GPU local.</li>
              <li><strong>Nunca</strong> se transmite streaming de audio ni archivos de voz a servidores externos o nubes de procesamiento de lenguaje.</li>
            </ul>
          </div>
        </section>

        <section>
          <span>05</span>
          <div>
            <h2>Conexiones de red locales y externas</h2>
            <p>
              GodSense realiza comunicaciones de red acotadas a las siguientes superficies autorizadas:
            </p>
            <ul>
              <li>
                <strong>Loopback local (127.0.0.1):</strong> Comunicación segura con el League Client Update (LCU) y la API oficial Live Client Data provista por el propio cliente de League of Legends en tu máquina.
              </li>
              <li>
                <strong>CDN oficial de Riot Games (Data Dragon y CommunityDragon):</strong> Descarga inicial y almacenamiento en caché de iconos de objetos, runas, habilidades y datos canónicos del parche en curso.
              </li>
              <li>
                <strong>Microsoft Store:</strong> Comprobación de licencias de plataforma, verificación de integridad y entrega de actualizaciones automáticas del paquete de Windows.
              </li>
            </ul>
            <p>
              GodSense no transmite ningún paquete de telemetría a servidores privados ni a redes publicitarias.
            </p>
          </div>
        </section>

        <section>
          <span>06</span>
          <div>
            <h2>Compartición y venta de datos</h2>
            <p>
              GodSense <strong>no vende, no comercializa y no comparte</strong> información de sus usuarios con ninguna empresa comercial, agregador de datos ni intermediario publicitario. No existen acuerdos de monetización de datos en el software.
            </p>
          </div>
        </section>

        <section>
          <span>07</span>
          <div>
            <h2>Control y eliminación de la información</h2>
            <p>
              El usuario conserva el control absoluto de los datos guardados en su sistema:
            </p>
            <ul>
              <li>Es posible limpiar el historial de partidas y los perfiles de invocador en cualquier momento desde los ajustes de la aplicación.</li>
              <li>La caché local de Data Dragon y modelos de voz puede eliminarse manualmente sin comprometer el funcionamiento de la aplicación.</li>
              <li>Al desinstalar la aplicación a través de la configuración de Windows, pueden purgarse por completo todos los archivos de datos residuales en <code>%LOCALAPPDATA%</code>.</li>
            </ul>
          </div>
        </section>

        <section>
          <span>08</span>
          <div>
            <h2>Aviso de propiedad intelectual</h2>
            <p>
              League of Legends y Riot Games son marcas comerciales o marcas comerciales registradas de <strong>Riot Games, Inc.</strong>
            </p>
            <p>
              GodSense es un proyecto de software independiente y no está aprobado, respaldado ni afiliado de manera oficial con Riot Games ni ninguna de sus propiedades intelectuales.
            </p>
          </div>
        </section>

        <section>
          <span>09</span>
          <div>
            <h2>Actualizaciones y canales de soporte</h2>
            <p>
              Cualquier cambio a esta política de privacidad se reflejará en las notas de la versión correspondiente de la aplicación. La fecha de vigencia se mantendrá actualizada en el encabezado.
            </p>
            <p>
              Para consultas relativas a la privacidad, soporte técnico o reportes, puedes visitar el perfil de <a href="https://github.com/DiegPS" target="_blank" rel="noreferrer">GitHub de DiegPS</a> o escribir por correo electrónico a <a href="mailto:dpahuas@gmail.com">dpahuas@gmail.com</a>.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
