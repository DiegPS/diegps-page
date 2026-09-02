import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";

const projects = [
  { number: "01", name: "AirDown", route: "/airdown", kind: "Windows · Multimedia", tone: "cyan", image: "/assets/airdown-main-dark.png", statement: "Descargar es sólo el principio.", description: "Una aplicación nativa para inspeccionar enlaces, elegir pistas y formatos, y procesar audio o video localmente.", facts: ["+1,000 sitios", "FFmpeg + yt-dlp", "GPU cuando importa"] },
  { number: "02", name: "AirStream Studio", route: "/airstream", kind: "Windows · Streaming", tone: "green", image: "/assets/airstream-connections.png", statement: "El chat también es una superficie de producción.", description: "Twitch y Kick en una sola ventana con TTS, subtítulos locales, personalización e integración directa con OBS.", facts: ["Chat unificado", "TTS local", "OBS WebSocket"] },
  { number: "03", name: "DevScope Concept", route: "#devscope", kind: "Terminal · Developer tool", tone: "amber", image: "/assets/devscope-main.png", statement: "Setenta proyectos. Una sola vista.", description: "Un explorador de terminal que reconoce stacks, actividad, salud, ramas, comandos y artefactos sin abrir proyecto por proyecto.", facts: ["70 proyectos / 245 ms", "Git-aware", "Keyboard-first"] },
];

function Header() {
  return <header className="site-header">
    <Link className="wordmark" href="/" aria-label="Inicio">DP<span>/</span>S</Link>
    <nav aria-label="Navegación principal"><a href="#work">Trabajo</a><a href="#experience">Experiencia</a><a href="#contact">Contacto</a></nav>
    <span className="availability"><i /> Disponible para proyectos</span>
  </header>;
}

export default function Home() {
  return <main>
    <Header />
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-index mono">PORTFOLIO / 2026</div>
      <div className="hero-copy"><p className="eyebrow">Full-stack developer · Product builder</p><h1 id="hero-title">Software que llega<br />hasta el escritorio.</h1><p className="hero-deck">Soy Diego Pahua Silvan. Diseño y construyo productos completos: desde la interfaz que toca el usuario hasta los servicios que la mantienen viva.</p></div>
      <aside className="hero-note"><span>03</span><p>productos seleccionados<br />Windows · Web · Terminal</p><a href="#work" aria-label="Ver trabajo"><ArrowDownRight /></a></aside>
      <div className="hero-rail" aria-hidden="true"><span>JAVA</span><span>FLUTTER</span><span>GO</span><span>REACT</span><span>AZURE</span></div>
    </section>

    <section className="manifesto"><p className="mono">[ PRINCIPIO ]</p><p>No construyo demos que parecen productos.</p><p className="manifesto-emphasis">Construyo productos que ya se pueden usar.</p></section>

    <section className="work" id="work" aria-labelledby="work-title">
      <div className="section-heading"><p className="mono">TRABAJO SELECCIONADO</p><h2 id="work-title">Tres herramientas.<br />Tres problemas reales.</h2></div>
      {projects.map((project) => <article className={`project project-${project.tone}`} id={project.name.startsWith("DevScope") ? "devscope" : undefined} key={project.name}>
        <div className="project-meta"><span className="project-number">{project.number}</span><p className="mono">{project.kind}</p></div>
        <div className="project-copy"><h3>{project.name}</h3><p className="project-statement">{project.statement}</p><p className="project-description">{project.description}</p><ul>{project.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>{project.route.startsWith("/") ? <Link className="text-link" href={project.route}>Ver producto <ArrowUpRight /></Link> : <span className="concept-label">Concepto en desarrollo</span>}</div>
        <Link href={project.route} className="project-visual" aria-label={`Abrir ${project.name}`}><span className="window-label mono">REAL PRODUCT CAPTURE / {project.number}</span><Image src={project.image} alt={`Interfaz de ${project.name}`} width={1415} height={996} sizes="(max-width: 800px) 100vw, 58vw" /></Link>
      </article>)}
    </section>

    <section className="experience" id="experience" aria-labelledby="experience-title">
      <div className="experience-intro"><p className="mono">EXPERIENCIA / +3 AÑOS</p><h2 id="experience-title">Del sistema empresarial<br />al producto independiente.</h2></div>
      <div className="timeline">
        <article><div><span>Akali Marine</span><small>Full Stack Web Developer</small></div><p>Java EE para compras y operaciones marítimas, microservicios en Go para reportes PDF, una aplicación interna en Flutter y despliegues sobre Azure.</p><strong>JAVA EE · GO · FLUTTER · MYSQL · AZURE</strong></article>
        <article><div><span>DataCross</span><small>Full Stack Web Developer</small></div><p>Módulos para trazabilidad de inventario médico de ISSEA, procesamiento masivo de Excel y optimización de consultas para operaciones de gran volumen.</p><strong>JAVA EE · ANGULAR · MYSQL · JASMINE · KARMA</strong></article>
      </div>
    </section>

    <section className="capabilities" aria-label="Capacidades"><p className="mono">CAPACIDADES</p><div><span>Java / Jakarta</span><span>Flutter / Dart</span><span>Go</span><span>React / Angular</span><span>Docker</span><span>CI/CD</span><span>AWS / Azure</span><span>MySQL</span></div></section>

    <footer id="contact"><div><p className="mono">SIGUIENTE PROYECTO</p><h2>¿Qué necesita existir?</h2><a className="mail-link" href="mailto:dpahuas@gmail.com">dpahuas@gmail.com <ArrowUpRight /></a></div><div className="footer-meta"><a href="https://github.com/DiegPS" target="_blank" rel="noreferrer">↗ GitHub</a><span><MapPin /> Ciudad de México</span><span>© 2026 Diego Pahua Silvan</span></div></footer>
  </main>;
}
