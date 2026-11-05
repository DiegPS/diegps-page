"use client";
import { Expand, X } from "lucide-react";
import { useRef } from "react";
import manifest from "../lib/image-manifest.json";
type Props = { name: string; alt: string; sizes?: string; priority?: boolean };
export function Screenshot({
  name,
  alt,
  sizes = "(max-width: 760px) 90vw, 55vw",
  priority = false,
}: Props) {
  const dimensions = manifest[name as keyof typeof manifest];
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const close = () => {
    dialog.current?.close();
    trigger.current?.focus();
  };
  return (
    <>
      <button
        ref={trigger}
        className="screenshot-button"
        type="button"
        aria-haspopup="dialog"
        aria-label={`Ampliar imagen: ${alt}`}
        onClick={() => dialog.current?.showModal()}
      >
        <img
          src={`/assets/optimized/${name}-1280.webp`}
          srcSet={[640, 960, 1280, 1920]
            .map((width) => `/assets/optimized/${name}-${width}.webp ${width}w`)
            .join(", ")}
          sizes={sizes}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          width={dimensions.width}
          height={dimensions.height}
        />
        <span className="screenshot-expand" aria-hidden="true">
          <Expand size={14} /> Ampliar
        </span>
      </button>
      <dialog
        ref={dialog}
        className="image-dialog"
        aria-label={alt}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onClose={() => trigger.current?.focus()}
      >
        <div className="image-dialog-toolbar">
          <span>{alt}</span>
          <button type="button" onClick={close} aria-label="Cerrar imagen">
            <X size={23} />
          </button>
        </div>
        <img
          src={`/assets/optimized/${name}-1920.webp`}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          loading="lazy"
        />
        <p>Vista ampliada · Pulsa Escape o el botón de cierre para volver.</p>
      </dialog>
    </>
  );
}
