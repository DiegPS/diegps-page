import type { MetadataRoute } from "next";
import { siteOrigin } from "./lib/seo";
import { projects } from "./lib/projects";
export const dynamic = "force-dynamic";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = await siteOrigin();
  return [
    { url: origin, changeFrequency: "monthly", priority: 1 },
    ...projects.flatMap((project) => [
      { url: `${origin}/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.8 },
      ...(["devscope", "onauto", "workser"].includes(project.slug)
        ? []
        : [
            {
              url: `${origin}/${project.slug}/privacy`,
              changeFrequency: "yearly" as const,
              priority: 0.3,
            },
          ]),
    ]),
  ];
}
