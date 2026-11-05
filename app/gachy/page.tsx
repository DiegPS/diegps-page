import { ProductPage } from "../components/product-page";
import { pageMetadata } from "../lib/seo";

export function generateMetadata() {
  return pageMetadata(
    "/gachy",
    "Gachy — Historial y pity en tu equipo",
    "Historial, estadísticas y planificación para Genshin Impact, Honkai: Star Rail y Zenless Zone Zero con SQLite local.",
    "gachy",
  );
}

export default function Page() {
  return <ProductPage slug="gachy" />;
}
