import { business } from "../lib/business";
import { absolute, careersPath, careersRoute, home, local, type Lang } from "../lib/site";
import { Dynamic } from "./Dynamic";

const copy = {
  en: {
    title: "Careers at Codiva",
    lead: "Codiva is a young studio building websites, custom software and blockchain solutions. There is no open position today, but we like meeting curious developers, designers and collaborators for future projects.",
    areasTitle: "Profiles we may look for",
    areas: [
      ["Front-end developer", "React, Next.js and TypeScript, with a care for accessibility and performance."],
      ["Back-end developer", "APIs, databases, integrations and automation for business tools."],
      ["Blockchain developer", "Solidity smart contracts, testing, audits and Web3 integration."],
      ["UI / UX designer", "Interfaces and design systems that are clear and usable."],
    ],
    valuesTitle: "How we work",
    values: [
      "Clear scope and honest communication",
      "Clean, tested and documented code",
      "Learning, curiosity and shared ownership",
      "Flexible, remote-friendly collaboration",
    ],
    statusTitle: "Current status",
    status: "No open positions. Spontaneous applications are welcome and kept for future needs.",
    cta: "Send an open application",
    how: "Email a short introduction, your area of expertise and a link to your work (portfolio, GitHub or LinkedIn). Only send what you are comfortable sharing; your message is used solely to follow up on your application.",
    subject: "Open application — Codiva",
    back: "Home",
    legal: "Legal notice (French)",
  },
  fr: {
    title: "Rejoindre Codiva",
    lead: "Codiva est un jeune studio qui crée des sites web, des logiciels sur mesure et des solutions blockchain. Aucun poste n’est ouvert aujourd’hui, mais nous aimons rencontrer des développeurs, designers et collaborateurs curieux pour de futurs projets.",
    areasTitle: "Profils susceptibles de nous intéresser",
    areas: [
      ["Développeur front-end", "React, Next.js et TypeScript, avec le souci de l’accessibilité et de la performance."],
      ["Développeur back-end", "API, bases de données, intégrations et automatisations pour des outils métier."],
      ["Développeur blockchain", "Smart contracts Solidity, tests, audits et intégration Web3."],
      ["Designer UI / UX", "Des interfaces et des systèmes de design clairs et utilisables."],
    ],
    valuesTitle: "Notre façon de travailler",
    values: [
      "Périmètre clair et communication honnête",
      "Code propre, testé et documenté",
      "Curiosité, apprentissage et responsabilité partagée",
      "Collaboration flexible, compatible télétravail",
    ],
    statusTitle: "Situation actuelle",
    status: "Aucun poste ouvert. Les candidatures spontanées sont les bienvenues et conservées pour de futurs besoins.",
    cta: "Envoyer une candidature spontanée",
    how: "Envoyez par email une courte présentation, votre domaine d’expertise et un lien vers vos réalisations (portfolio, GitHub ou LinkedIn). N’envoyez que ce que vous souhaitez partager ; votre message sert uniquement au suivi de votre candidature.",
    subject: "Candidature spontanée — Codiva",
    back: "Accueil",
    legal: "Mentions légales",
  },
} as const;

export function Careers({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const other: Lang = lang === "fr" ? "en" : "fr";
  const path = careersRoute(lang);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absolute(path + "#webpage"),
        url: absolute(path),
        name: c.title,
        inLanguage: lang,
        isPartOf: { "@id": absolute("/#website") },
        about: { "@id": absolute("/#organization") },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Codiva", item: absolute(home(lang)) },
          { "@type": "ListItem", position: 2, name: c.title, item: absolute(path) },
        ],
      },
    ],
  };
  return (
    <>
      <Dynamic />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
      />
      <header className="container detail-header">
        <a href={local(home(lang))}>Codiva</a>
        <a href={careersPath(other)} hrefLang={other}>
          {other.toUpperCase()}
        </a>
      </header>
      <main id="main" className="container detail">
        <nav aria-label={lang === "fr" ? "Fil d’Ariane" : "Breadcrumb"}>
          <a href={local(home(lang))}>{c.back}</a> / {c.title}
        </nav>
        <h1>{c.title}</h1>
        <p className="lead">{c.lead}</p>
        <section data-reveal>
          <h2>{c.statusTitle}</h2>
          <p>
            <span className="status-pill">{lang === "fr" ? "Candidatures spontanées" : "Open applications"}</span>{" "}
            {c.status}
          </p>
        </section>
        <section data-reveal>
          <h2>{c.areasTitle}</h2>
          <ul className="role-grid">
            {c.areas.map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </section>
        <section data-reveal>
          <h2>{c.valuesTitle}</h2>
          <ul className="commitments">
            {c.values.map((v) => (
              <li key={v}>
                <span className="chev" aria-hidden="true">↗</span>
                {v}
              </li>
            ))}
          </ul>
        </section>
        <section data-reveal>
          <p>{c.how}</p>
          <a className="btn btn-gold" href={`mailto:${business.email}?subject=${encodeURIComponent(c.subject)}`}>
            {c.cta}
          </a>
        </section>
      </main>
      <footer className="container detail-header">
        <span>© Codiva · <a href={`mailto:${business.email}`}>{business.email}</a></span>
        <a href={local("/mentions-legales/")}>{c.legal}</a>
      </footer>
    </>
  );
}
