import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Pahua Silvan — Full Stack Developer",
  description: "Portafolio de Diego Pahua Silvan: AirDown, AirStream Studio y DevScope Concept.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
