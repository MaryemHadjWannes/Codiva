import type { MetadataRoute } from "next";
import { absolute, serviceRoute, type ServiceSlug } from "../lib/site";
import { services } from "../lib/services";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const pairs = [
    ["/fr/", "/"],
    ...(Object.keys(services) as ServiceSlug[]).map((slug) => [
      serviceRoute(slug, "fr"),
      serviceRoute(slug, "en"),
    ]),
  ];
  return pairs.flatMap(([fr, en]) =>
    [en, fr].map((path) => ({
      url: absolute(path),
      alternates: {
        languages: {
          fr: absolute(fr),
          en: absolute(en),
          "x-default": absolute(en),
        },
      },
    })),
  );
}
