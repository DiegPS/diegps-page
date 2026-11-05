import { ProductPage } from "../components/product-page";
import { pageMetadata } from "../lib/seo";

export function generateMetadata() {
  return pageMetadata(
    "/workser",
    "Workser — Filtra el ruido en tu búsqueda de empleo",
    "Extensión para filtrar ofertas por empresa y palabras clave en LinkedIn, Indeed y Computrabajo. Reglas editables, modos de ocultamiento y estadísticas locales.",
    "workser",
  );
}

export default function Page() {
  return <ProductPage slug="workser" />;
}
