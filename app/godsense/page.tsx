import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, ShieldCheck } from "lucide-react";
import "../product.css";

function MicrosoftIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <rect x="1" y="1" width="6.5" height="6.5" fill="#F25022" />
      <rect x="8.5" y="1" width="6.5" height="6.5" fill="#7FBA00" />
      <rect x="1" y="8.5" width="6.5" height="6.5" fill="#00A4EF" />
      <rect x="8.5" y="8.5" width="6.5" height="6.5" fill="#FFB900" />
    </svg>
  );
}

export default function GodSensePage() {
  return (
    <main className="product-shell godsense">
      <nav className="product-nav">
        <Link href="/">
          <ArrowLeft /> Diego / Portfolio
        </Link>
        <div className="product-nav-links">
          <Link href="/godsense/privacy">
            <ShieldCheck /> Privacidad
          </Link>
          <span>GodSense / 04</span>
        </div>
      </nav>

      <section className="product-hero">
        <div className="product-hero-copy">
          <Image
            className="product-logo"
            src="/assets/godsense-logo.png"
            width={84}
            height={84}
            alt="GodSense Logo"
            unoptimized
            priority
          />
          <span className="product-kicker">League of Legends Tactical HUD &amp; Scout for Windows</span>
          <h1>GodSense</h1>
          <p className="product-lead">
            Visión por computadora nativa, coach táctico determinista con voz offline y scout de partidas sin inyección de memoria ni riesgos de baneo.
          </p>
          <span className="store-button disabled">
            <MicrosoftIcon />
            <span>Próximamente en Microsoft Store</span>
          </span>
        </div>

        <div className="product-hero-visual">
          <span className="vertical-label">SCOUT / LIVE ROSTER &amp; COMBINED HISTORY</span>
          <div className="product-image-wrapper">
            <Image
              src="/assets/godsense-scout.png"
              width={1022}
              height={648}
              alt="Panel de Scout y análisis de partidas en GodSense"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="product-facts">
        <div>
          <strong>~20 ms</strong>
          <span>tiempo de inferencia en DartCV C++</span>
        </div>
        <div>
          <strong>DXGI</strong>
          <span>captura out-of-process sin inyección en League</span>
        </div>
        <div>
          <strong>Offline</strong>
          <span>Sherpa STT &amp; TTS de voz en tu equipo</span>
        </div>
        <div>
          <strong>SQLite</strong>
          <span>historial progresivo de 30 partidas local</span>
        </div>
      </section>

      <section className="product-story">
        <header>
          <span className="mono">CAPACIDADES / 01—03</span>
          <h2>Tu visión táctica. Tus datos en tu máquina.</h2>
        </header>

        <article className="feature-row">
          <div className="feature-copy">
            <span className="mono">01 / VISIÓN NATIVA DXGI &amp; DARTCV</span>
            <h3>Detección en tiempo real sin inyección de memoria.</h3>
            <p>
              GodSense monitorea el minimapa mediante Desktop Duplication API (DXGI) de Windows y visión por computadora nativa con OpenCV (DartCV). Al operar completamente fuera del proceso del juego y sin hooks en la memoria de League of Legends, cumple rigurosamente con los lineamientos de Riot Games y Vanguard. Detecta trayectorias enemigas, tiempos de wards y avistamientos tácticos en menos de 20 ms por cuadro.
            </p>
          </div>
          <div className="feature-image">
            <Image
              src="/assets/godsense-vision.png"
              width={1376}
              height={768}
              alt="HUD táctico de visión y minimapa en tiempo real de GodSense"
              unoptimized
            />
          </div>
        </article>

        <article className="feature-row">
          <div className="feature-copy">
            <span className="mono">02 / COACH TÁCTICO &amp; VOZ OFFLINE</span>
            <h3>Directivas en vivo y reconocimiento de voz local.</h3>
            <p>
              Motor determinista adaptado a cada fase: Champ Select (recomendación nativa de runas por LCU, builds validadas de la versión exacta de Data Dragon y rutas de jungla de CommunityDragon), In-Game (balance de oro, directivas de mapa y alertas de roaming) y Post-Game. Incluye reconocimiento de voz local con Sherpa STT mediante Push-to-Talk y síntesis de voz offline sin enviar audio a servidores externos.
            </p>
          </div>
          <div className="feature-image">
            <Image
              src="/assets/godsense-coach.png"
              width={1376}
              height={768}
              alt="Panel de coach táctico, recomendaciones de runas y directivas en GodSense"
              unoptimized
            />
          </div>
        </article>

        <article className="feature-row">
          <div className="feature-copy">
            <span className="mono">03 / SCOUT &amp; HISTORIAL OFFLINE</span>
            <h3>Rendimiento de aliados y rivales en SQLite local.</h3>
            <p>
              Conexión con el cliente de League para inspección instantánea de invocadores en sala. Analiza 30 partidas recientes, tasas de victoria por rol, KDA histórico, campeones firma y scoreboards combinados. Toda la información se almacena progresivamente en tu máquina en una base de datos SQLite con Drift, garantizando privacidad absoluta y acceso instantáneo sin conexión.
            </p>
          </div>
          <div className="feature-image">
            <Image
              src="/assets/godsense-scout.png"
              width={1022}
              height={648}
              alt="Historial detallado y scout de invocadores en GodSense"
              unoptimized
            />
          </div>
        </article>
      </section>

      <section className="product-cta">
        <h2>Tu visión táctica.<br />Tu ventaja en la grieta.</h2>
        <Link href="/godsense/privacy">Leer política de privacidad →</Link>
      </section>
    </main>
  );
}
