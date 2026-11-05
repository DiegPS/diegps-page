import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import { projects } from "../lib/projects";
import { details } from "../lib/product-details";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Screenshot } from "./screenshot";
import imageManifest from "../lib/image-manifest.json";
import "../product.css";
import "../home.css";

export function ProductPage({ slug }: { slug: string }) {
  const product = projects.find((project) => project.slug === slug)!;
  const detail = details[slug];
  const next = projects[(projects.indexOf(product) + 1) % projects.length];
  return (
    <div className="portfolio dossier">
      <SiteHeader />
      <main id="main-content" className={`product-shell tone-${product.tone}`}>
        <div className="product-breadcrumb section-container">
          <Link href="/#work">
            <ArrowLeft size={14} /> Todos los proyectos
          </Link>
          <span className="mono">
            {product.number} / {product.name}
          </span>
        </div>
        <section className="product-hero section-container">
          <div className="product-hero-copy">
            <div className="product-identity">
              <img src={`/assets/optimized/${product.logo}.webp`} alt="" width="56" height="56" />
              <div>
                <span className="product-name">{product.name}</span>
              </div>
            </div>
            <h1>
              {detail.headline.split("\n").map((line, index) => (
                <span key={line} className={index === 1 ? "product-headline-accent" : undefined}>
                  {line}
                  {index === 0 && <br />}
                </span>
              ))}
            </h1>
            <p className="product-lead">{detail.lead}</p>
            <div className="product-primary-actions">
              {product.storeUrl || product.releaseUrl ? (
                <a
                  className="button button-lime"
                  href={product.storeUrl || product.releaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.storeUrl ? "Obtener en Microsoft Store" : "Descargar desde GitHub"}{" "}
                  <ArrowUpRight size={16} />
                </a>
              ) : (
                <>
                  <span className="project-status">
                    <span />
                    {product.status}
                  </span>
                  <a
                    className="text-link"
                    href={`mailto:dpahuas@gmail.com?subject=${encodeURIComponent(`Consulta sobre ${product.name}`)}`}
                  >
                    Consultar el proyecto <ArrowUpRight size={16} />
                  </a>
                </>
              )}
            </div>
          </div>
          <div className="product-hero-visual">
            <span className="mono product-visual-label">
              {product.platform} / {product.status.toUpperCase()}
            </span>
            <div
              className={`product-hero-screen ${imageManifest[product.image as keyof typeof imageManifest].height > imageManifest[product.image as keyof typeof imageManifest].width ? "is-portrait" : ""}`}
            >
              <Screenshot
                name={product.image}
                alt={product.imageAlt}
                priority
                sizes="(max-width: 900px) 90vw, 80vw"
              />
            </div>
            <span className="mono product-visual-caption">
              {product.visualCaption || "CAPTURA REAL DEL PRODUCTO · AMPLÍA PARA EXPLORAR"}
            </span>
          </div>
        </section>
        <div className="product-facts section-container">
          {detail.facts.map(([value, label]) => (
            <div key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <section className="product-case section-container" aria-labelledby="case-title">
          <div className="section-heading">
            <div>
              <h2 id="case-title">
                Una decisión de ingeniería.
                <br />
                <span className="text-muted">Un flujo más claro.</span>
              </h2>
            </div>
          </div>
          <div className="case-grid">
            {[
              ["01", "El problema", detail.problem],
              ["02", "La decisión", detail.decision],
              ["03", "El resultado", detail.result],
            ].map(([number, title, copy]) => (
              <article key={number}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className="product-features section-container"
          aria-label={`Funciones de ${product.name}`}
        >
          {detail.features.map((feature) => (
            <article className="feature-row" key={feature.label}>
              <div className="feature-copy">
                <h2>
                  {feature.title.split("\n").map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h2>
                <p>{feature.description}</p>
              </div>
              <div
                className={`feature-image ${imageManifest[feature.image as keyof typeof imageManifest].height > imageManifest[feature.image as keyof typeof imageManifest].width ? "is-portrait" : ""}`}
              >
                <Screenshot
                  name={feature.image}
                  alt={feature.alt}
                  sizes="(max-width: 900px) 90vw, 55vw"
                />
              </div>
            </article>
          ))}
        </section>
        <section className="product-closing section-container">
          <div>
            <h2>{product.statement}</h2>
            <p>
              {detail.availability ||
                (product.storeUrl
                  ? "Disponible en Microsoft Store para Windows."
                  : "¿Quieres conocer más o conversar sobre su desarrollo? Escríbeme.")}
            </p>
          </div>
          <div>
            {product.storeUrl || product.releaseUrl ? (
              <a
                className="button button-lime"
                href={product.storeUrl || product.releaseUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar {product.name} <ArrowUpRight size={16} />
              </a>
            ) : (
              <a
                className="button button-lime"
                href={`mailto:dpahuas@gmail.com?subject=${encodeURIComponent(`Consulta sobre ${product.name}`)}`}
              >
                Hablemos del proyecto <ArrowUpRight size={16} />
              </a>
            )}
            {!["devscope", "onauto", "workser"].includes(slug) && (
              <Link className="product-privacy-link" href={`/${slug}/privacy`}>
                <ShieldCheck size={14} /> Política de privacidad
              </Link>
            )}
          </div>
        </section>
        {detail.notice && <p className="product-notice section-container">{detail.notice}</p>}
        <Link className="next-project section-container" href={`/${next.slug}`}>
          <div>
            <span className="mono">SIGUIENTE PROYECTO / {next.number}</span>
            <span className="next-project-name">{next.name}</span>
          </div>
          <ArrowUpRight size={40} strokeWidth={1} />
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
