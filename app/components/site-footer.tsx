import { BrandMark } from "./brand-mark";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon } from "./github-icon";
import Link from "next/link";
export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="section-container">
        <div className="footer-top">
          <span className="eyebrow">
            <span className="status-dot" /> DISPONIBLE PARA COLABORAR
          </span>
          <span className="mono">MÉXICO / TRABAJO REMOTO</span>
        </div>
        <div className="footer-heading">
          <h2>
            Tu próxima idea.
            <br />
            <em>Hagámosla real.</em>
          </h2>
          <a
            className="contact-orb"
            href="mailto:dpahuas@gmail.com"
            aria-label="Contactar a Diego por correo"
          >
            <ArrowUpRight strokeWidth={1} />
          </a>
        </div>
        <div className="footer-contact">
          <a href="mailto:dpahuas@gmail.com">
            <Mail size={18} /> dpahuas@gmail.com <ArrowUpRight size={17} />
          </a>
          <p>
            Aplicaciones de escritorio, productos web
            <br />y sistemas que conectan las piezas.
          </p>
        </div>
        <div className="footer-bottom">
          <Link className="wordmark" href="/">
            diegps
            <BrandMark className="brand-mark" />
          </Link>
          <span>© {new Date().getUTCFullYear()} Diego Pahua Silvan</span>
          <a href="https://github.com/DiegPS" target="_blank" rel="noopener noreferrer">
            <GithubIcon /> GitHub <ArrowUpRight size={14} />
          </a>
          <a href="#main-content" className="back-top">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
