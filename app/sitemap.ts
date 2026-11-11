import type { MetadataRoute } from "next";
import { absolute } from "../lib/site";
import { services } from "../lib/services";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const pairs = [
    ["/", "/en/"],
    ...Object.keys(services).map((slug) => [
      `/services/${slug}/`,
      `/en/services/${slug}/`,
    ]),
  ];
  return pairs.flatMap(([fr, en]) =>
    [fr, en].map((path) => ({
      url: absolute(path),
      alternates: {
        languages: {
          fr: absolute(fr),
          en: absolute(en),
          "x-default": absolute(fr),
        },
      },
    })),
  );
}
