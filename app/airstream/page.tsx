import { ProductPage } from "../components/product-page";
import { pageMetadata } from "../lib/seo";

export function generateMetadata() {
  return pageMetadata(
    "/airstream",
    "AirStream Studio — Chat, voz y OBS",
    "Un proyecto de producción para reunir chats de Twitch y Kick, texto a voz local, subtítulos e integración con OBS.",
    "airstream",
  );
}

export default function Page() {
  return <ProductPage slug="airstream" />;
}
