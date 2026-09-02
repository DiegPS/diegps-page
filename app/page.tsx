import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface Project {
  number: string;
  name: string;
  route: string;
  kind: string;
  tone: "cyan" | "green" | "amber";
  image: string;
  statement: string;
  description: string;
  facts: string[];
}

const projects: Project[] = [
  {
    number: "01",
    name: "AirDown",
    route: "/airdown",
    kind: "Windows · Multimedia Nativo",
    tone: "cyan",
    image: "/assets/airdown-main-dark.png",
    statement: "Descargar es sólo el principio.",
    description: "Una aplicación nativa para inspeccionar enlaces, elegir pistas y formatos de forma granular, y procesar audio o video directamente en tu máquina sin depender de la nube.",
    facts: ["+1,000 sitios compatibles", "FFmpeg + yt-dlp desacoplados", "Aceleración por GPU"],
  },
  {
    number: "02",
    name: "AirStream Studio",
    route: "/airstream",
    kind: "Windows · Streaming de Alta Producción",
    tone: "green",
    image: "/assets/airstream-connections.png",
    statement: "El chat también es una superficie de producción.",
    description: "Conexión simultánea a Twitch y Kick en una sola ventana con text-to-speech local, subtitulado por voz en tiempo real e integración directa a OBS vía WebSocket.",
    facts: ["Chat unificado en tiempo real", "TTS local sin latencia de red", "OBS WebSocket directo"],
  },
  {
    number: "03",
    name: "DevScope Concept",
    route: "#devscope",
    kind: "Terminal · Developer Architecture Tool",
    tone: "amber",
    image: "/assets/devscope-main.png",
    statement: "Setenta proyectos. Una sola vista instantánea.",
    description: "Un explorador de terminal de alta velocidad que reconoce stacks, actividad git, salud de repositorios, ramas y comandos sin la fricción de abrir proyecto por proyecto.",
    facts: ["70 proyectos / 245 ms", "Git-aware en tiempo real", "Keyboard-first workflow"],
  },
];

function Header() {
  return (
    <header className="site-header">
      <div className="header-brand">
        <Link className="wordmark" href="/" aria-label="Inicio">
          DP<span>/</span>S
        </Link>
        <span className="brand-meta">Diego Pahua Silvan</span>
      </div>

      <nav aria-label="Navegación principal">
        <a className="nav-link" href="#work">Trabajo</a>
        <a className="nav-link" href="#experience">Experiencia</a>
        <a className="nav-link" href="#capabilities">Capacidades</a>
        <a className="nav-link" href="#contact">Contacto</a>
      </nav>

      <div className="availability">
        <span className="status-dot" aria-hidden="true" />
        <span>Disponible para proyectos</span>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-badge-row">
          <span className="eyebrow-pill">
            <i>●</i> Full-Stack Developer · Systems &amp; Desktop Builder
          </span>
        </div>

        <h1 id="hero-title">
          Software que llega hasta el escritorio.
        </h1>

        <p className="hero-lead">
          Diseño y construyo productos completos: desde interfaces de usuario nativas, rápidas y táctiles, hasta microservicios de alto volumen e infraestructura cloud resiliente.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn-primary">
            <span>Explorar proyectos seleccionados</span>
            <ArrowDown />
          </a>
          <a href="mailto:dpahuas@gmail.com" className="btn-secondary">
            <span>Contactar directamente</span>
            <ArrowUpRight />
          </a>
        </div>

        {/* High-Impact Metrics */}
        <div className="hero-metrics">
          <div className="metric-box">
            <span className="metric-num">03</span>
            <span className="metric-label">Productos independientes de software nativo</span>
          </div>
          <div className="metric-box">
            <span className="metric-num">+1,000</span>
            <span className="metric-label">Sitios web compatibles procesados localmente</span>
          </div>
          <div className="metric-box">
            <span className="metric-num">245 ms</span>
            <span className="metric-label">Tiempo de escaneo de 70 proyectos en DevScope</span>
          </div>
          <div className="metric-box">
            <span className="metric-num">+3 Años</span>
            <span className="metric-label">Desarrollando software en producción empresarial</span>
          </div>
        </div>

        {/* Tech Rail */}
        <div className="tech-rail" aria-label="Tecnologías destacadas">
          <span className="tech-rail-label">CORE STACK</span>
          <span className="tech-tag">Java / Jakarta EE</span>
          <span className="tech-tag">Go</span>
          <span className="tech-tag">Flutter / Dart</span>
          <span className="tech-tag">React / Next.js</span>
          <span className="tech-tag">TypeScript</span>
          <span className="tech-tag">Azure</span>
          <span className="tech-tag">Docker</span>
          <span className="tech-tag">FFmpeg</span>
        </div>
      </section>

      {/* Manifesto / Philosophy */}
      <section className="manifesto-section" aria-label="Filosofía de desarrollo">
        <div className="manifesto-card">
          <span className="mono manifesto-tag">[ PRINCIPIO DE INGENIERÍA ]</span>
          <p className="manifesto-text">
            No construyo demos que parecen productos.
            <span className="manifesto-emphasis">Construyo productos que ya se pueden usar.</span>
          </p>
        </div>
      </section>

      {/* Work / Projects Showcase */}
      <section className="section-wrapper" id="work" aria-labelledby="work-title">
        <div className="section-head">
          <span className="mono section-eyebrow">TRABAJO SELECCIONADO</span>
          <h2 id="work-title">Tres herramientas.<br />Tres problemas reales.</h2>
          <p>
            Herramientas nativas y de terminal construidas con foco en rendimiento, procesamiento local en tu máquina y respeto a la privacidad.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card project-card-${project.tone}`}
              id={project.name.startsWith("DevScope") ? "devscope" : undefined}
              key={project.name}
            >
              <div className="project-info">
                <div>
                  <div className="project-header-meta">
                    <span className="project-num">{project.number}</span>
                    <span className="project-kind-badge">{project.kind}</span>
                  </div>

                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-statement">{project.statement}</p>
                  <p className="project-desc">{project.description}</p>
                </div>

                <div>
                  <ul className="project-facts-list" aria-label="Especificaciones técnicas">
                    {project.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>

                  {project.route.startsWith("/") ? (
                    <Link className="project-action-btn" href={project.route}>
                      <span>Ver ficha técnica y detalles</span>
                      <ArrowUpRight />
                    </Link>
                  ) : (
                    <span className="concept-badge">
                      <span>Concepto arquitectónico en desarrollo</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="project-window">
                <div className="window-frame">
                  <div className="window-content">
                    <Image
                      src={project.image}
                      alt={`Interfaz de usuario real de ${project.name}`}
                      width={1415}
                      height={996}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      priority={project.number === "01"}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-wrapper" id="experience" aria-labelledby="experience-title">
        <div className="section-head">
          <span className="mono section-eyebrow">TRAYECTORIA PROFESIONAL</span>
          <h2 id="experience-title">Del sistema empresarial<br />al producto independiente.</h2>
          <p>
            Experiencia comprobada en entornos de alta exigencia, microservicios distribuidos, procesamiento masivo y software corporativo.
          </p>
        </div>

        <div className="timeline-list">
          <article className="timeline-card">
            <div className="timeline-top">
              <div className="timeline-company">Akali Marine</div>
              <div className="timeline-role">Full Stack Web Developer</div>
            </div>
            <p className="timeline-desc">
              Desarrollo de módulos core en Java EE para compras y operaciones marítimas de gran escala, microservicios en Go de alto rendimiento para generación y procesamiento de reportes PDF, aplicaciones internas en Flutter y pipelines de despliegue en Azure.
            </p>
            <div className="timeline-stack">
              <span>JAVA EE</span>
              <span>GO</span>
              <span>FLUTTER</span>
              <span>MYSQL</span>
              <span>AZURE CLOUD</span>
              <span>MICROSERVICIOS</span>
            </div>
          </article>

          <article className="timeline-card">
            <div className="timeline-top">
              <div className="timeline-company">DataCross</div>
              <div className="timeline-role">Full Stack Web Developer</div>
            </div>
            <p className="timeline-desc">
              Diseño de módulos críticos para la trazabilidad y logística de inventario médico para ISSEA, procesamiento masivo de datos tabulares en Excel y optimización de consultas SQL para operaciones con altos volúmenes de concurrencia.
            </p>
            <div className="timeline-stack">
              <span>JAVA EE</span>
              <span>ANGULAR</span>
              <span>MYSQL</span>
              <span>JASMINE</span>
              <span>KARMA</span>
              <span>OPTIMIZACIÓN SQL</span>
            </div>
          </article>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-wrapper" id="capabilities" aria-labelledby="capabilities-title">
        <div className="section-head">
          <span className="mono section-eyebrow">STACK &amp; HABILIDADES</span>
          <h2 id="capabilities-title">Capacidades técnicas.</h2>
          <p>
            Un conjunto de herramientas y tecnologías dominadas a través de la práctica en sistemas reales y aplicaciones de escritorio.
          </p>
        </div>

        <div className="capabilities-grid">
          <div className="capability-card">
            <span className="capability-category">SISTEMAS &amp; ESCRITORIO</span>
            <div className="capability-tags">
              <span>Java / Jakarta</span>
              <span>Go</span>
              <span>Flutter / Dart</span>
              <span>FFmpeg &amp; yt-dlp</span>
              <span>Windows APIs</span>
            </div>
          </div>

          <div className="capability-card">
            <span className="capability-category">BACKEND &amp; ARQUITECTURA</span>
            <div className="capability-tags">
              <span>Microservicios</span>
              <span>REST &amp; WebSockets</span>
              <span>MySQL</span>
              <span>Docker</span>
              <span>Caché &amp; Workers</span>
            </div>
          </div>

          <div className="capability-card">
            <span className="capability-category">FRONTEND &amp; WEB</span>
            <div className="capability-tags">
              <span>React</span>
              <span>Next.js / Vinext</span>
              <span>TypeScript</span>
              <span>Angular</span>
              <span>Modern CSS</span>
            </div>
          </div>

          <div className="capability-card">
            <span className="capability-category">CLOUD &amp; DEVOPS</span>
            <div className="capability-tags">
              <span>Azure</span>
              <span>Cloudflare Workers</span>
              <span>CI/CD Pipelines</span>
              <span>Git Workflows</span>
              <span>Linux CLI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" aria-labelledby="contact-title">
        <div className="footer-container">
          <div className="footer-cta">
            <span className="mono footer-cta-tag">SIGUIENTE PROYECTO</span>
            <h2 id="contact-title">¿Qué necesita existir?</h2>
            <p>
              Disponible para colaborar en productos de software ambiciosos, herramientas nativas, arquitectura de sistemas o consultoría técnica.
            </p>
            <a className="mail-btn" href="mailto:dpahuas@gmail.com">
              <Mail />
              <span>dpahuas@gmail.com</span>
              <ArrowUpRight />
            </a>
          </div>

          <div className="footer-bottom">
            <div className="footer-links">
              <a href="https://github.com/DiegPS" target="_blank" rel="noreferrer">
                <GithubIcon />
                <span>github.com/DiegPS</span>
              </a>
              <span className="footer-location">
                <MapPin />
                <span>Ciudad de México</span>
              </span>
            </div>
            <span>© 2026 Diego Pahua Silvan — Desarrollado con Vinext sobre Vite</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
