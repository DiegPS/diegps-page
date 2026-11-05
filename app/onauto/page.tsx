import { ProductPage } from "../components/product-page";
import { pageMetadata } from "../lib/seo";

export function generateMetadata() {
  return pageMetadata(
    "/onauto",
    "OnAuto — Plataforma para talleres y flotillas",
    "Gestión de vehículos, órdenes, cotizaciones, reparaciones, inventario y cobranza. Una plataforma configurable para cada taller, con cliente Flutter y API Fastify.",
    "onauto",
  );
}

export default function Page() {
  return <ProductPage slug="onauto" />;
}
