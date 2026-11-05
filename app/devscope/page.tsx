import { ProductPage } from "../components/product-page";
import { pageMetadata } from "../lib/seo";

export function generateMetadata() {
  return pageMetadata(
    "/devscope",
    "DevScope — Tus repositorios en una vista",
    "Un explorador de terminal para recorrer tus proyectos con rapidez, consultar su actividad y detectar cuáles necesitan atención.",
    "devscope",
  );
}

export default function Page() {
  return <ProductPage slug="devscope" />;
}
