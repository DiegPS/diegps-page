"use client";
import { useEffect } from "react";

/** Motion follows native scrolling; content stays usable before hydration. */
export function SpatialMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".portfolio");
    if (!root) return;
    const hero = root.querySelector<HTMLElement>(".spatial-hero");
    const pieces = [...root.querySelectorAll<HTMLElement>("[data-depth]")];
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const compact = matchMedia("(max-width: 760px)");
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let visible = new Set<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) visible.add(element);
          else visible.delete(element);
        }
        schedule();
      },
      { rootMargin: "100px" },
    );
    pieces.forEach((piece) => observer.observe(piece));
    function draw() {
      frame = 0;
      if (!root) return;
      const height = innerHeight;
      const motionEnabled = !reduced.matches && !compact.matches;
      const measurements = [...visible].map((piece) => ({
        piece,
        bounds: piece.getBoundingClientRect(),
      }));
      if (hero) {
        const bounds = hero.getBoundingClientRect();
        const progress = motionEnabled
          ? Math.max(0, Math.min(1, -bounds.top / Math.max(1, bounds.height - height)))
          : 0;
        hero.style.setProperty("--journey", progress.toFixed(4));
        hero.style.setProperty("--pointer-x", motionEnabled ? pointerX.toFixed(3) : "0");
        hero.style.setProperty("--pointer-y", motionEnabled ? pointerY.toFixed(3) : "0");
      }
      measurements.forEach(({ piece, bounds }) => {
        const progress = !motionEnabled
          ? 0
          : Math.max(-1, Math.min(1, (bounds.top + bounds.height / 2 - height / 2) / height));
        piece.style.setProperty("--depth", progress.toFixed(4));
      });
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(draw);
    }
    const pointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !hero || reduced.matches || compact.matches) return;
      const bounds = hero.getBoundingClientRect();
      pointerX = Math.max(-1, Math.min(1, (event.clientX / innerWidth - 0.5) * 2));
      pointerY = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / innerHeight - 0.5));
      schedule();
    };
    const resetPointer = () => {
      pointerX = 0;
      pointerY = 0;
      schedule();
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    compact.addEventListener("change", schedule);
    hero?.addEventListener("pointermove", pointer, { passive: true });
    hero?.addEventListener("pointerleave", resetPointer);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      visible.clear();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
      compact.removeEventListener("change", schedule);
      hero?.removeEventListener("pointermove", pointer);
      hero?.removeEventListener("pointerleave", resetPointer);
    };
  }, []);
  return null;
}
