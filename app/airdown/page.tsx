import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, ShieldCheck } from "lucide-react";
import "../product.css";

export default function AirDownPage() {
  return (
    <main className="product-shell">
      <nav className="product-nav">
        <Link href="/">
          <ArrowLeft /> Diego / Portfolio
        </Link>
        <div className="product-nav-links">
          <Link href="/airdown/privacy">
            <ShieldCheck /> Privacidad
          </Link>
          <span>AirDown / 01</span>
        </div>
      </nav>

      <section className="product-hero">
        <div className="product-hero-copy">
          <Image
            className="product-logo"
            src="/assets/airdown-logo.png"
            width={92}
            height={92}
            alt="AirDown"
            unoptimized
            priority
          />
          <span className="product-kicker">Native Windows media toolkit</span>
          <h1>Air<br />Down</h1>
          <p className="product-lead">
            Descarga, inspecciona y procesa video o audio desde una aplicación nativa, rápida y completamente gratuita.
          </p>
          <span className="store-button disabled">
            <Download /> Próximamente en Microsoft Store
          </span>
        </div>

        <div className="product-hero-visual">
          <span className="vertical-label">PRODUCT VIEW / DARK MODE</span>
          <div className="product-image-wrapper">
            <Image
              src="/assets/airdown-main-dark.png"
              width={1226}
              height={793}
              alt="Selector de formatos de AirDown"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="product-facts">
        <div>
          <strong>1,000+</strong>
          <span>sitios compatibles</span>
        </div>
        <div>
          <strong>Local</strong>
          <span>procesamiento de archivos</span>
        </div>
        <div>
          <strong>GPU</strong>
          <span>aceleración compatible</span>
        </div>
        <div>
          <strong>$0</strong>
          <span>sin plan pro ni anuncios</span>
        </div>
      </section>

      <section className="product-story">
        <header>
          <span className="mono">CAPACIDADES / 01—03</span>
          <h2>Control real sobre tus medios.</h2>
        </header>

        <article className="feature-row">
          <div className="feature-copy">
            <span className="mono">01 / INSPECCIONAR</span>
            <h3>Elige la pista, no sólo la calidad.</h3>
            <p>
              AirDown muestra video, audio, contenedor, códec, bitrate y tamaño antes de descargar. También permite extraer audio o conservar el formato original.
            </p>
          </div>
          <div className="feature-image">
            <Image
              src="/assets/airdown-main-light.png"
              width={1226}
              height={793}
              alt="AirDown en modo claro"
              unoptimized
            />
          </div>
        </article>

        <article className="feature-row">
          <div className="feature-copy">
            <span className="mono">02 / PROCESAR</span>
            <h3>Herramientas locales después de descargar.</h3>
            <p>
              Inspecciona archivos, extrae audio, normaliza volumen, recorta segmentos y cambia contenedores sin convertir cada operación en una subida a Internet.
            </p>
          </div>
          <div className="feature-image">
            <Image
              src="/assets/airdown-tools.png"
              width={1226}
              height={793}
              alt="Herramientas locales de AirDown"
              unoptimized
            />
          </div>
        </article>

        <article className="feature-row">
          <div className="feature-copy">
            <span className="mono">03 / MANTENER</span>
            <h3>Motores desacoplados y actualizables.</h3>
            <p>
              yt-dlp, FFmpeg y Deno se administran como componentes independientes, con comprobación de versiones e integración con aceleración por hardware.
            </p>
          </div>
          <div className="feature-image">
            <Image
              src="/assets/airdown-components.png"
              width={1226}
              height={793}
              alt="Componentes de AirDown"
              unoptimized
            />
          </div>
        </article>
      </section>

      <section className="product-cta">
        <h2>Gratuita.<br />Sin letra pequeña.</h2>
        <Link href="/airdown/privacy">Leer política de privacidad →</Link>
      </section>
    </main>
  );
}
