import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="section-container" style={{ paddingBlock: "100px" }}>
        <span className="eyebrow">404 / FUERA DEL MAPA</span>
        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 86px)",
            letterSpacing: "-.06em",
            lineHeight: 1.1,
            marginBlock: "30px",
          }}
        >
          Aquí todavía
          <br />
          no hay un proyecto.
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: "30px" }}>
          Esta dirección no existe. El trabajo seleccionado está por aquí.
        </p>
        <Link className="button button-lime" href="/#work">
          <ArrowLeft size={16} /> Volver a proyectos
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
