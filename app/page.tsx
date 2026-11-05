import type { CSSProperties } from "react";
import imageManifest from "./lib/image-manifest.json";
import { SpatialMotion } from "./components/spatial-motion";
import "./home.css";
import { Workbench } from "./components/workbench";
import { pageMetadata } from "./lib/seo";
import Link from "next/link";
import { ArrowUpRight, Code2, Layers3, Monitor, Server, Terminal } from "lucide-react";
import { SiteHeader } from "./components/site-header";
import { Screenshot } from "./components/screenshot";
import { SiteFooter } from "./components/site-footer";
import { PersonSchema } from "./components/person-schema";
import { projects } from "./lib/projects";

export function generateMetadata() {
  return pageMetadata(
    "/",
    "Diego Pahua Silvan — Software que cobra vida.",
    "Aplicaciones de escritorio, extensiones y sistemas web. Explora OnAuto, AirDown, AirStream Studio, Gachy, GodSense, DevScope y Workser con Diego Pahua Silvan.",
  );
}

export default function Home() {
  return (
    <div className="portfolio">
      <PersonSchema />
      <SpatialMotion />
      <SiteHeader />
      <main id="main-content">
        <section className="spatial-hero" aria-labelledby="hero-title">
          <div className="spatial-pin">
            <div className="spatial-atmosphere" aria-hidden="true" />
            <div className="spatial-heading">
              <p>
                Diego Pahua Silvan <span>· Desarrollador independiente</span>
              </p>
              <h1 id="hero-title">
                De una idea
                <br />
                <span>a tu pantalla.</span>
              </h1>
            </div>
            <Workbench />
            <div className="spatial-footnote">
              <p>
                Escritorio. Web. Sistemas.
                <br />
                <span>Software propio, de principio a fin.</span>
              </p>
              <a href="#work" aria-label="Explorar todos los proyectos">
                <span>Desliza para descubrir</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>
        <section id="work" className="work-section section-container" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <h2 id="work-title">
                Siete ideas.
                <br />
                <span className="text-muted">Siete universos.</span>
              </h2>
            </div>
            <p>
              Siete proyectos propios. Gestión de talleres, multimedia, streaming, juegos, empleo y
              herramientas de desarrollo. Cada uno, una respuesta a un problema concreto.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article
                className={`project-card tone-${project.tone}`}
                id={project.slug}
                key={project.slug}
                style={
                  {
                    "--project-ratio":
                      imageManifest[project.image as keyof typeof imageManifest].width /
                      imageManifest[project.image as keyof typeof imageManifest].height,
                  } as CSSProperties
                }
              >
                <div className="project-visual" data-depth>
                  <div className="project-visual-meta">
                    <span className="mono">
                      {project.number} / {project.category}
                    </span>
                    <span
                      className={`project-status ${project.status === "Publicado" ? "is-live" : ""}`}
                    >
                      <span />
                      {project.status}
                    </span>
                  </div>
                  <div className="project-screen">
                    <Screenshot
                      name={project.image}
                      alt={project.imageAlt}
                      sizes="(max-width: 760px) 90vw, 50vw"
                    />
                  </div>
                  <span className="project-visual-name" aria-hidden="true">
                    {project.shortName}
                  </span>
                </div>
                <div className="project-copy">
                  <div className="project-title-row">
                    <img
                      className="project-logo"
                      src={`/assets/optimized/${project.logo}.webp`}
                      width="48"
                      height="48"
                      alt=""
                      loading="lazy"
                    />
                    <span className="mono">{project.platform}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p className="project-statement">{project.statement}</p>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="project-actions">
                    <Link className="text-link" href={`/${project.slug}`}>
                      Explorar proyecto <ArrowUpRight size={18} />
                    </Link>
                    {project.storeUrl && (
                      <a
                        className="project-store"
                        href={project.storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Microsoft Store <ArrowUpRight size={14} />
                      </a>
                    )}
                    {project.releaseUrl && (
                      <a
                        className="project-store"
                        href={project.releaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Releases <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="approach-section" data-depth aria-labelledby="approach-title">
          <div className="section-container approach-inner">
            <h2 id="approach-title">
              Me gusta resolver
              <br />
              <em>lo que estorba.</em>
            </h2>
            <div className="approach-bottom">
              <span className="approach-annotation mono">
                MENOS FRICCIÓN.
                <br />
                MÁS CONTROL.
                <br />
                MEJOR SOFTWARE.
              </span>
              <p>
                Interfaces que se entienden. Sistemas que responden. Decisiones técnicas que tienen
                una razón de ser. Así abordo cada proyecto, de principio a fin.
              </p>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="experience-section section-container"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <div>
              <h2 id="experience-title">
                Productos propios.
                <br />
                <span className="text-muted">Problemas a escala.</span>
              </h2>
            </div>
            <p>
              La misma atención al detalle, aplicada a operaciones marítimas, logística médica y
              sistemas empresariales.
            </p>
          </div>
          <div className="experience-list">
            <article className="experience-row">
              <span className="mono experience-index">01 /</span>
              <div>
                <h3>Akali Marine</h3>
                <span className="experience-role">Full Stack Web Developer</span>
              </div>
              <div>
                <p>
                  Desarrollo de módulos de compras y operaciones marítimas en Java EE,
                  microservicios de reportes PDF en Go y aplicaciones internas con Flutter.
                </p>
                <div className="experience-contribution">
                  <span className="mono">CONTRIBUCIÓN</span>
                  <p>
                    Conectar interfaces, procesamiento de reportes y despliegues en Azure dentro de
                    un mismo flujo de trabajo.
                  </p>
                </div>
                <ul className="project-tags">
                  <li>Java EE</li>
                  <li>Go</li>
                  <li>Flutter</li>
                  <li>MySQL</li>
                  <li>Azure</li>
                </ul>
              </div>
            </article>
            <article className="experience-row">
              <span className="mono experience-index">02 /</span>
              <div>
                <h3>DataCross</h3>
                <span className="experience-role">Full Stack Web Developer</span>
              </div>
              <div>
                <p>
                  Desarrollo de módulos de trazabilidad y logística de inventario médico para ISSEA,
                  procesamiento de archivos Excel y optimización de consultas SQL.
                </p>
                <div className="experience-contribution">
                  <span className="mono">CONTRIBUCIÓN</span>
                  <p>
                    Traducir operaciones de inventario en herramientas web y consultas que sostienen
                    el trabajo diario.
                  </p>
                </div>
                <ul className="project-tags">
                  <li>Java EE</li>
                  <li>Angular</li>
                  <li>MySQL</li>
                  <li>Jasmine / Karma</li>
                </ul>
              </div>
            </article>
          </div>
        </section>
        <section
          id="capabilities"
          className="capabilities-section section-container"
          aria-labelledby="capabilities-title"
        >
          <div className="section-heading">
            <div>
              <h2 id="capabilities-title">
                Una visión completa.
                <br />
                <span className="text-muted">De extremo a extremo.</span>
              </h2>
            </div>
            <p>
              Elijo las herramientas por el problema que resuelven. Este es el terreno donde
              trabajo.
            </p>
          </div>
          <div className="capability-grid">
            {[
              {
                icon: Monitor,
                number: "01",
                title: "Escritorio & sistemas",
                copy: "Aplicaciones nativas con integración real al sistema operativo.",
                tags: "Flutter · Dart · Windows APIs · FFmpeg",
              },
              {
                icon: Server,
                number: "02",
                title: "Backend & datos",
                copy: "Servicios, procesamiento y almacenamiento con responsabilidades claras.",
                tags: "Java · Go · REST · WebSockets · SQL",
              },
              {
                icon: Code2,
                number: "03",
                title: "Interfaces web",
                copy: "Experiencias accesibles, adaptables y cuidadas hasta el último estado.",
                tags: "React · TypeScript · Angular · CSS",
              },
              {
                icon: Layers3,
                number: "04",
                title: "Cloud & despliegue",
                copy: "Del código al entorno donde el producto funciona todos los días.",
                tags: "Azure · Cloudflare · Docker · CI/CD",
              },
            ].map((item) => (
              <article className="capability" key={item.number}>
                <div className="capability-top">
                  <item.icon size={25} strokeWidth={1.5} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span className="capability-stack mono">{item.tags}</span>
              </article>
            ))}
          </div>
        </section>
        <section className="build-note section-container">
          <Terminal size={20} />
          <p>
            De una herramienta local a un sistema distribuido.
            <br />
            <strong>El objetivo siempre es que funcione mejor para quien lo usa.</strong>
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
