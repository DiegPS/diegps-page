import type { Metadata } from "next";
import { headers } from "next/headers";

export async function siteOrigin() {
  if (process.env.SITE_URL) return new URL(process.env.SITE_URL).origin;
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "localhost:3000";
  const protocol = /^(localhost|127\.0\.0\.1)(:|$)/.test(host) ? "http" : "https";
  return new URL(`${protocol}://${host}`).origin;
}

export async function pageMetadata(
  path: string,
  title: string,
  description: string,
  image = "portfolio",
): Promise<Metadata> {
  const origin = await siteOrigin();
  return {
    title,
    description,
    metadataBase: new URL(origin),
    alternates: { canonical: new URL(path, origin).href },
    openGraph: {
      title,
      description,
      url: new URL(path, origin).href,
      siteName: "DiegPS — Diego Pahua Silvan",
      locale: "es_MX",
      type: "website",
      images: [{ url: `/social/${image}.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`/social/${image}.png`] },
  };
}
