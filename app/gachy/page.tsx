import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, ShieldCheck } from "lucide-react";
import "../product.css";

export default function GachyPage() {
  return (
    <main className="product-shell gachy">
      <nav className="product-nav">
        <Link href="/">
          <ArrowLeft /> Diego / Portfolio
        </Link>
        <div className="product-nav-links">
          <Link href="/gachy/privacy">
            <ShieldCheck /> Privacidad
          </Link>
          <span>Gachy / 03</span>
        </div>
      </nav>

      <section className="product-hero">
        <div className="product-hero-copy">
          <Image
            className="product-logo"
            src="/assets/gachy-logo.png"
            width={84}
            height={84}
            alt="Gachy Logo"
            unoptimized
            priority
          />
          <span className="product-kicker">HoYoverse Companion for Windows</span>
          <h1>Gachy</h1>
          <p className="product-lead">
            Un historial gacha y analizador de pity privado, local y de alto rendimiento para tres juegos de HoYoverse en Windows.
          </p>
          <span className="store-button disabled">
            <Download /> Próximamente en Microsoft Store
          </span>
        </div>

        <div className="product-hero-visual">
          <span className="vertical-label">OVERVIEW / LIVE TRACKER</span>
          <div className="product-image-wrapper">
            <Image
              src="/assets/gachy-overview.png"
              width={1920}
              height={1080}
              alt="Panel principal de Gachy con resumen de cuentas y pity"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="product-facts">
        <div>
          <strong>3</strong>
          <span>juegos: Genshin, Star Rail y ZZZ</span>
        </div>
        <div>
          <strong>SQLite</strong>
          <span>base de datos local en tu máquina</span>
        </div>
        <div>
          <strong>UIGF 4.2</strong>
          <span>importación y exportación abierta</span>
        </div>
        <div>
          <strong>$0</strong>
          <span>sin anuncios ni servicios en la nube</span>
        </div>
      </section>

      <section className="product-story">
        <header>
          <span className="mono">CAPACIDADES / 01—03</span>
          <h2>Tu historial completo. Tus datos protegidos.</h2>
        </header>

        <article className="feature-row">
          <div className="feature-copy">
            <span className="mono">01 / HISTORIAL &amp; PITY</span>
            <h3>Cadenas de pity y garantías bajo control.</h3>
            <p>
              Gachy calcula el pity actual, tiradas acumuladas y estado de garantía (50/50) por cada tipo de banner: promocional de personaje, armas, permanente y Bangboo. Preserva tu historial para siempre, incluso después de que los servidores del juego purguen los registros tras seis meses.
            </p>
          </div>
          <div className="feature-image">
            <Image
              src="/assets/gachy-history.png"
              width={1920}
              height={1080}
              alt="Historial detallado de tiradas y pity en Gachy"
              unoptimized
            />
          </div>
        </article>

        <article className="feature-row">
          <div className="feature-copy">
            <span className="mono">02 / ESTADÍSTICAS &amp; ANÁLISIS</span>
            <h3>Tu suerte histórica, cuantificada.</h3>
            <p>
              Explora gráficos de distribución de tiradas, promedio de pity en personajes de cinco estrellas, cronología visual de adquisiciones y conciliación automática con las imágenes y banners oficiales de cada versión.
            </p>
          </div>
          <div className="feature-image">
            <Image
              src="/assets/gachy-statistics.png"
              width={1920}
              height={1080}
              alt="Gráficas y estadísticas de probabilidad en Gachy"
              unoptimized
            />
          </div>
        </article>

        <article className="feature-row">
          <div className="feature-copy">
            <span className="mono">03 / PLANIFICADOR &amp; RESPALDOS</span>
            <h3>Planifica tiradas y custodia tu información.</h3>
            <p>
              Calcula tiradas estimadas y recursos necesarios para tus próximos objetivos en Genshin Impact. Cuenta con interoperabilidad mediante el estándar comunitario UIGF 4.2 y creación de respaldos completos verificados en SQLite con un solo clic.
            </p>
          </div>
          <div className="feature-image">
            <Image
              src="/assets/gachy-planner.png"
              width={1920}
              height={1080}
              alt="Planificador de tiradas y recursos en Gachy"
              unoptimized
            />
          </div>
        </article>
      </section>

      <section className="product-cta">
        <h2>Tus tiradas.<br />Tu equipo.</h2>
        <Link href="/gachy/privacy">Leer política de privacidad →</Link>
      </section>
    </main>
  );
}
