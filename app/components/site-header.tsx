"use client";
import { BrandMark } from "./brand-mark";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "Proyectos" },
  { href: "/#experience", label: "Experiencia" },
  { href: "/#capabilities", label: "Capacidades" },
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <Link
        className="wordmark"
        href="/"
        aria-label="Diego Pahua Silvan — Inicio"
        onClick={() => setOpen(false)}
      >
        diegps
        <BrandMark className="brand-mark" />
      </Link>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="header-contact" href="mailto:dpahuas@gmail.com">
        Hablemos <ArrowUpRight size={15} />
      </a>
      <button
        id="menu-toggle"
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav id="mobile-menu" className="mobile-menu" aria-label="Navegación móvil" hidden={!open}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
            <ArrowUpRight size={18} />
          </a>
        ))}
        <a href="/#contact" onClick={() => setOpen(false)}>
          Contacto <ArrowUpRight size={18} />
        </a>
      </nav>
    </header>
  );
}
