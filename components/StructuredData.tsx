import { absolute, home, type Lang } from "../lib/site";
import { faq } from "../lib/faq";
import { organization } from "../lib/organization";
export function StructuredData({ lang }: { lang: Lang }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": absolute("/#website"),
        name: "Codiva",
        url: absolute("/"),
        inLanguage: ["en", "fr"],
        publisher: { "@id": absolute("/#organization") },
      },
      {
        "@type": "WebPage",
        "@id": absolute(home(lang) + "#webpage"),
        url: absolute(home(lang)),
        name:
          lang === "fr"
            ? "Codiva — Développement web, logiciels et blockchain"
            : "Codiva — Web development, custom software and blockchain",
        inLanguage: lang,
        isPartOf: { "@id": absolute("/#website") },
        about: { "@id": absolute("/#organization") },
      },
      {
        "@type": "FAQPage",
        "@id": absolute(home(lang) + "#faq"),
        inLanguage: lang,
        mainEntity: faq[lang].map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
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
