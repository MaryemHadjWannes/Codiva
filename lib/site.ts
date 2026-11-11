import type { Metadata } from "next";
export type Lang = "fr" | "en";
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://maryemhadjwannes.github.io/Codiva"
).replace(/\/$/, "");
export const basePath = new URL(siteUrl).pathname.replace(/\/$/, "");
export const local = (path = "/") => `${basePath}${path}`;
export const absolute = (path = "/") => `${siteUrl}${path}`;
export const home = (lang: Lang) => (lang === "en" ? "/en/" : "/");
export const linkedin = "https://www.linkedin.com/company/codiva-fr/";
export function metadata(
  lang: Lang,
  title: string,
  description: string,
  fr: string,
  en: string,
): Metadata {
  const path = lang === "fr" ? fr : en;
  return {
    title,
    description,
    metadataBase: new URL(siteUrl + "/"),
    alternates: {
      canonical: absolute(path),
      languages: {
        fr: absolute(fr),
        en: absolute(en),
        "x-default": absolute(fr),
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
          alt: "Codiva — développement web, logiciels et blockchain",
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
