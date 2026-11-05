import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Pahua Silvan — Desarrollador de software",
  description:
    "Aplicaciones de escritorio, extensiones y sistemas web con Diego Pahua Silvan. Explora OnAuto, AirDown, AirStream Studio, Gachy, GodSense, DevScope y Workser.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/apple-icon.png" },
  applicationName: "DiegPS",
  authors: [{ name: "Diego Pahua Silvan" }],
};
export const viewport: Viewport = { themeColor: "#0a0b10", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="preload"
          href="/fonts/jakarta-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/instrument-italic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
