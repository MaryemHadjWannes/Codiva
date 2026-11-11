import { absolute, home, linkedin, type Lang } from "../lib/site";
export function StructuredData({ lang }: { lang: Lang }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": absolute("/#organization"),
        name: "Codiva",
        legalName: "Maryem Hadj Wannes EI",
        url: absolute("/"),
        logo: absolute("/assets/icon-512.png"),
        email: "contact@codiva.fr",
        sameAs: [linkedin],
        founder: { "@id": absolute("/#founder") },
      },
      {
        "@type": "Person",
        "@id": absolute("/#founder"),
        name: "Maryem Hadj Wannes",
        jobTitle:
          lang === "fr"
            ? "Développeuse full-stack freelance"
            : "Freelance full-stack developer",
        worksFor: { "@id": absolute("/#organization") },
      },
      {
        "@type": "WebSite",
        "@id": absolute("/#website"),
        name: "Codiva",
        url: absolute("/"),
        inLanguage: ["fr", "en"],
        publisher: { "@id": absolute("/#organization") },
      },
      {
        "@type": "WebPage",
        "@id": absolute(home(lang) + "#webpage"),
        url: absolute(home(lang)),
        name:
          lang === "fr"
            ? "Codiva — Développement web, logiciels et blockchain"
            : "Codiva — Web, software and blockchain development",
        inLanguage: lang,
        isPartOf: { "@id": absolute("/#website") },
        about: { "@id": absolute("/#organization") },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
