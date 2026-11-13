import type { Metadata } from "next";
import { business } from "./business";
export type Lang = "fr" | "en";
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://maryemhadjwannes.github.io/Codiva"
).replace(/\/$/, "");
export const basePath = new URL(siteUrl).pathname.replace(/\/$/, "");
export const local = (path = "/") => `${basePath}${path}`;
export const absolute = (path = "/") => `${siteUrl}${path}`;
export const home = (lang: Lang) => (lang === "en" ? "/" : "/fr/");
export const serviceSegments = {
  "developpement-web": { fr: "developpement-web", en: "web-development" },
  "logiciels-sur-mesure": { fr: "logiciels-sur-mesure", en: "custom-software" },
  blockchain: { fr: "blockchain", en: "blockchain-development" },
} as const;
export type ServiceSlug = keyof typeof serviceSegments;
export const serviceSegment = (slug: ServiceSlug, lang: Lang) =>
  serviceSegments[slug][lang];
export const serviceRoute = (slug: ServiceSlug, lang: Lang) =>
  `${lang === "fr" ? "/fr" : ""}/services/${serviceSegment(slug, lang)}/`;
export const servicePath = (slug: ServiceSlug, lang: Lang) =>
  local(serviceRoute(slug, lang));
export const serviceFromSegment = (segment: string, lang: Lang) =>
  (Object.keys(serviceSegments) as ServiceSlug[]).find(
    (key) => serviceSegments[key][lang] === segment,
  );
export const careersRoute = (lang: Lang) =>
  lang === "fr" ? "/fr/recrutement/" : "/careers/";
export const careersPath = (lang: Lang) => local(careersRoute(lang));
export const linkedin = "https://www.linkedin.com/company/codiva-fr/";
export function metadata(
  lang: Lang,
  title: string,
  description: string,
  fr: string,
  en: string,
): Metadata {
  const path = lang === "fr" ? fr : en;
  if (business.city)
    description +=
      lang === "fr"
        ? ` Basé à ${business.city}.`
        : ` Based in ${business.city}.`;
  return {
    title,
    description,
    metadataBase: new URL(siteUrl + "/"),
    alternates: {
      canonical: absolute(path),
      languages: {
        fr: absolute(fr),
        en: absolute(en),
        "x-default": absolute(en),
      },
    },
    openGraph: {
      type: "website",
      siteName: "Codiva",
      title,
      description,
      url: absolute(path),
      locale: lang === "fr" ? "fr_FR" : "en_GB",
      alternateLocale: lang === "fr" ? "en_GB" : "fr_FR",
      images: [
        {
          url: absolute("/assets/og-image.png"),
          width: 1200,
          height: 630,
          alt:
            lang === "fr"
              ? "Codiva — développement web, logiciels et blockchain"
              : "Codiva — web, software and blockchain development",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absolute("/assets/og-image.png")],
    },
  };
}
