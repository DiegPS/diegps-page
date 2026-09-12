import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import "../../legal.css";

export const metadata: Metadata = {
  title: "Política de privacidad de Gachy",
  description: "Información transparente sobre el almacenamiento local en SQLite, claves en memoria y conexiones de Gachy para Windows.",
};

export default function GachyPrivacy() {
  return (
    <main className="legal">
      <nav className="legal-nav">
        <Link href="/gachy">
          <ArrowLeft /> Gachy
        </Link>
        <span>Vigente desde / 12 septiembre 2026</span>
      </nav>

      <header className="legal-head">
        <span className="mono">GACHY / PRIVACIDAD</span>
        <div>
          <h1>Tus registros se quedan en tu equipo.</h1>
          <p>
            Gachy es una aplicación de escritorio local para Windows desarrollada por Diego Pahua Silvan (DiegPS). Esta política detalla con total claridad cómo se gestiona tu información, dónde se guarda y cómo se comunican las sincronizaciones con servicios externos.
          </p>
        </div>
      </header>

      <article className="legal-body">
        <aside className="privacy-summary">
          <span className="mono">RESUMEN EN 30 SEGUNDOS</span>
          <ul>
            <li>Gachy no requiere registro de cuenta ni login propio.</li>
            <li>No contiene publicidad, compras dentro de la app ni funciones de pago.</li>
            <li>No incorpora SDKs de analítica, telemetría ni rastreadores de usuario.</li>
            <li>Tu base de datos SQLite y respaldos se almacenan únicamente en tu dispositivo.</li>
            <li>La clave temporal de sincronización (authkey) se usa solo en memoria y nunca se guarda en disco, registros ni portapapeles.</li>
          </ul>
        </aside>

        <section>
          <span>01</span>
          <div>
            <h2>Responsable y alcance</h2>
            <p>
              Esta política se aplica a la aplicación de escritorio Gachy para Windows y a sus módulos de seguimiento de tiradas, análisis de pity, planificador y respaldos. El responsable del desarrollo y publicación es Diego Pahua Silvan, quien publica bajo el sello <strong>DiegPS</strong>.
            </p>
            <p>
              Gachy es una herramienta complementaria no oficial y no opera servidores de base de datos en la nube, servicios de autenticación propios ni intermediarios para recolectar datos de juego.
            </p>
          </div>
        </section>

        <section>
          <span>02</span>
          <div>
            <h2>Información utilizada por Gachy</h2>
            <div className="privacy-table" role="table" aria-label="Información utilizada por Gachy">
              <div className="privacy-row privacy-table-head" role="row">
                <b role="columnheader">Información</b>
                <b role="columnheader">Finalidad</b>
                <b role="columnheader">Ubicación</b>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell">UIDs e identificadores de juego</span>
                <span role="cell">Aislar perfiles, historiales y cuentas independientes por juego.</span>
                <span role="cell">Base de datos SQLite local.</span>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell">Historial de tiradas y pity</span>
                <span role="cell">Calcular garantías (50/50), tiradas acumuladas y estadísticas históricas.</span>
                <span role="cell">Base de datos SQLite local.</span>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell">Clave temporal authkey</span>
                <span role="cell">Consultar el historial oficial a petición del usuario durante la sincronización.</span>
                <span role="cell">Memoria volátil (RAM); nunca se persiste en disco ni logs.</span>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell">Metas del planificador</span>
                <span role="cell">Calcular recursos y tiradas estimadas para personajes deseados.</span>
                <span role="cell">Base de datos SQLite local.</span>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell">Preferencias de la aplicación</span>
                <span role="cell">Recordar tema visual (sistema/oscuro/claro), idioma y juego activo.</span>
                <span role="cell">Archivo local de configuración.</span>
              </div>
              <div className="privacy-row" role="row">
                <span role="cell">Respaldos exportados</span>
                <span role="cell">Permitir al usuario migrar o salvaguardar su historial (UIGF 4.2 o snapshots).</span>
                <span role="cell">En las carpetas o archivos que el usuario elija guardar.</span>
              </div>
            </div>
            <p>
              Gachy no transmite estos registros a servidores operados por el desarrollador ni a terceras empresas de marketing.
            </p>
          </div>
        </section>

        <section>
          <span>03</span>
          <div>
            <h2>Sincronización del historial y tratamiento de claves</h2>
            <p>
              Cuando el usuario solicita una sincronización directa, Gachy lee la memoria caché local creada por el componente WebView del cliente del juego correspondiente (Genshin Impact, Honkai: Star Rail o Zenless Zone Zero).
            </p>
            <p>
              A partir de este enlace se extrae temporalmente una clave de autenticación (<code>authkey</code>) que se transmite de forma exclusiva al endpoint HTTPS oficial y allowlisteado de HoYoverse. Dicha clave:
            </p>
            <ul>
              <li>Se mantiene en memoria volátil únicamente durante el transcurso de la descarga de registros.</li>
              <li>Es completamente sanitizada y purgada de mensajes de error o diagnósticos.</li>
              <li><strong>Nunca</strong> se escribe en la base de datos local, copias de respaldo, archivos de registro, portapapeles ni en la interfaz gráfica.</li>
            </ul>
          </div>
        </section>

        <section>
          <span>04</span>
          <div>
            <h2>Conexiones de red con servicios externos</h2>
            <p>
              Gachy realiza llamadas a Internet estrictamente para la descarga de historiales y referencias públicas de los juegos:
            </p>
            <ul>
              <li>
                <strong>Endpoints oficiales de HoYoverse:</strong> Para obtener los lotes de tiradas autenticadas de la cuenta seleccionada.
              </li>
              <li>
                <strong>UIGF CurrentBannerWatcher en GitHub:</strong> Para obtener metadatos de los banners promocionales activos y conciliar históricos.
              </li>
              <li>
                <strong>Enka.Network, Project Amber / Yatta y fuentes compatibles con Nanoka:</strong> Para consultar nombres, metadatos y arte de personajes, armas y Bangboos.
              </li>
              <li>
                <strong>Microsoft Store:</strong> Para la distribución, verificación de integridad y actualización de la aplicación conforme a las políticas de Windows.
              </li>
            </ul>
            <p>
              Estos servicios reciben datos estándar de protocolo (como dirección IP y fecha de petición) y aplican sus propias políticas de privacidad independientes. Gachy no añade identificadores publicitarios ni IDs de seguimiento en dichas llamadas.
            </p>
          </div>
        </section>

        <section>
          <span>05</span>
          <div>
            <h2>Compartición y venta de información</h2>
            <p>
              Gachy <strong>no vende, no alquila y no comercializa</strong> datos personales ni registros de juego. No existen corredores de datos ni convenios publicitarios asociados a la aplicación.
            </p>
            <p>
              Cualquier archivo de exportación generado (por ejemplo, en formato UIGF JSON) permanece íntegramente bajo la custodia y decisión del usuario en su sistema de archivos.
            </p>
          </div>
        </section>

        <section>
          <span>06</span>
          <div>
            <h2>Conservación y eliminación de datos</h2>
            <p>
              Los registros permanecen en tu computadora hasta que decidas eliminarlos. Dentro de Gachy puedes:
            </p>
            <ul>
              <li>Eliminar un perfil de cuenta específico y todo su historial de tiradas.</li>
              <li>Purgar la caché local de imágenes y referencias descargadas.</li>
              <li>Restaurar un respaldo previo que sustituya la base de datos actual.</li>
              <li>Desinstalar la aplicación y eliminar la carpeta de datos de aplicación en Windows (<code>%LOCALAPPDATA%</code>).</li>
            </ul>
          </div>
        </section>

        <section>
          <span>07</span>
          <div>
            <h2>Menores de edad e información sensible</h2>
            <p>
              Gachy es una utilidad para el análisis de estadísticas de videojuegos y no está orientada a solicitar ni recopilar nombres reales, números telefónicos, datos bancarios, números de tarjeta de crédito, contraseñas de cuentas ni ubicación geográfica exacta.
            </p>
          </div>
        </section>

        <section>
          <span>08</span>
          <div>
            <h2>Aviso de propiedad intelectual</h2>
            <p>
              Genshin Impact, Honkai: Star Rail y Zenless Zone Zero, así como sus respectivos personajes, armas, nombres y materiales artísticos, son marcas comerciales o derechos de autor propiedad de <strong>HoYoverse</strong> (COGNOSPHERE PTE. LTD.).
            </p>
            <p>
              Gachy es un software independiente desarrollado por la comunidad y no está respaldado, patrocinado ni vinculado comercialmente a HoYoverse.
            </p>
          </div>
        </section>

        <section>
          <span>09</span>
          <div>
            <h2>Modificaciones y canales de contacto</h2>
            <p>
              Cualquier modificación sustancial de esta política se publicará junto con la actualización de la aplicación. La fecha de vigencia siempre figurará en la cabecera del documento.
            </p>
            <p>
              Para dudas sobre privacidad, soporte técnico o reportes de la aplicación, puedes abrir un ticket en el repositorio público de <a href="https://github.com/DiegPS" target="_blank" rel="noreferrer">GitHub de DiegPS</a> o comunicarte directamente por correo electrónico a <a href="mailto:dpahuas@gmail.com">dpahuas@gmail.com</a>.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
