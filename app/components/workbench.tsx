"use client";
import { useState, type CSSProperties } from "react";
import manifest from "../lib/image-manifest.json";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "../lib/projects";
import { Screenshot } from "./screenshot";

export function Workbench() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];
  const dimensions = manifest[project.image as keyof typeof manifest];
  const previous = projects[(selected + projects.length - 1) % projects.length];
  const next = projects[(selected + 1) % projects.length];
  function move(direction: number) {
    setSelected((current) => (current + direction + projects.length) % projects.length);
  }
  return (
    <div
      className="spatial-gallery"
      role="group"
      aria-label="Galería de proyectos. Selecciona las capturas laterales para explorar."
      onKeyDown={(event) => {
        if (event.target instanceof HTMLElement && event.target.closest("dialog")) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="spatial-orbit orbit-one" aria-hidden="true" />
      <div className="spatial-orbit orbit-two" aria-hidden="true" />
      <div className="spatial-camera">
        <div
          className="spatial-side spatial-left"
          style={
            {
              "--side-ratio":
                manifest[previous.image as keyof typeof manifest].width /
                manifest[previous.image as keyof typeof manifest].height,
            } as CSSProperties
          }
        >
          <img
            src={`/assets/optimized/${previous.image}-640.webp`}
            alt={`Vista previa de ${previous.name}`}
            width="640"
            height="400"
            loading="lazy"
          />
          <button
            className="spatial-hit"
            type="button"
            aria-label={`Explorar ${previous.name}`}
            onClick={() => move(-1)}
          />
        </div>
        <div
          className="spatial-front"
          key={project.slug}
          style={{ "--screen-ratio": dimensions.width / dimensions.height } as CSSProperties}
        >
          <Screenshot
            name={project.image}
            alt={project.imageAlt}
            priority={selected === 0}
            sizes="(max-width: 760px) 80vw, 60vw"
          />
        </div>
        <div
          className="spatial-side spatial-right"
          style={
            {
              "--side-ratio":
                manifest[next.image as keyof typeof manifest].width /
                manifest[next.image as keyof typeof manifest].height,
            } as CSSProperties
          }
        >
          <img
            src={`/assets/optimized/${next.image}-640.webp`}
            alt={`Vista previa de ${next.name}`}
            width="640"
            height="400"
            loading="lazy"
          />
          <button
            className="spatial-hit"
            type="button"
            aria-label={`Explorar ${next.name}`}
            onClick={() => move(1)}
          />
        </div>
      </div>
      <div className="spatial-caption">
        <button
          className="spatial-neighbor neighbor-left"
          type="button"
          onClick={() => move(-1)}
          aria-label={`Proyecto anterior: ${previous.name}`}
        >
          <ArrowLeft size={18} aria-hidden="true" /> <span>{previous.shortName}</span>
        </button>
        <Link href={`/${project.slug}`} aria-live="polite" aria-atomic="true">
          <span>{project.name}</span>
          <span className="spatial-status">{project.status}</span>
          <ArrowUpRight size={16} />
        </Link>
        <button
          className="spatial-neighbor neighbor-right"
          type="button"
          onClick={() => move(1)}
          aria-label={`Proyecto siguiente: ${next.name}`}
        >
          <span>{next.shortName}</span> <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
      <p className="spatial-guidance">
        Usa las flechas para explorar. Abre la imagen para verla en detalle.
      </p>
    </div>
  );
}
