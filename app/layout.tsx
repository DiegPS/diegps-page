import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Pahua Silvan — Full Stack Developer",
  description: "Portafolio de Diego Pahua Silvan: AirDown, AirStream Studio y DevScope Concept.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#090a0f" />
      </head>
      <body>{children}</body>
    </html>
  );
}
