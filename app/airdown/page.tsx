import { ProductPage } from "../components/product-page";
import { pageMetadata } from "../lib/seo";

export function generateMetadata() {
  return pageMetadata(
    "/airdown",
    "AirDown — Herramientas multimedia para Windows",
    "Descarga, inspecciona y procesa audio y video localmente con AirDown, una aplicación gratuita para Windows.",
    "airdown",
  );
}

export default function Page() {
  return <ProductPage slug="airdown" />;
}
