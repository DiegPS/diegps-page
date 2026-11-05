import { ProductPage } from "../components/product-page";
import { pageMetadata } from "../lib/seo";

export function generateMetadata() {
  return pageMetadata(
    "/godsense",
    "GodSense — Visión y análisis de partidas",
    "Proyecto de visión por computadora, coach táctico con voz offline y scout de partidas para League of Legends.",
    "godsense",
  );
}

export default function Page() {
  return <ProductPage slug="godsense" />;
}
