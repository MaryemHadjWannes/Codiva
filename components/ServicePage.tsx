import { services, type ServiceSlug } from "../lib/services";
import {
  absolute,
  home,
  local,
  serviceRoute,
  servicePath,
  type Lang,
} from "../lib/site";
export function ServicePage({ slug, lang }: { slug: ServiceSlug; lang: Lang }) {
  const service = services[slug][lang];
  const path = serviceRoute(slug, lang);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: absolute(path),
        provider: {
          "@type": "Organization",
          name: "Codiva",
          url: absolute("/"),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Codiva",
            item: absolute(home(lang)),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: service.title,
            item: absolute(path),
          },
        ],
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, "\\u003c"),
        }}
      />
      <header className="container detail-header">
        <a href={local(home(lang))}>Codiva</a>
        <a
          href={servicePath(slug, lang === "fr" ? "en" : "fr")}
          hrefLang={lang === "fr" ? "en" : "fr"}
        >
          {lang === "fr" ? "EN" : "FR"}
        </a>
      </header>
      <main id="main" className="container detail">
        <nav aria-label={lang === "fr" ? "Fil d’Ariane" : "Breadcrumb"}>
          <a href={local(home(lang))}>{lang === "fr" ? "Accueil" : "Home"}</a> /{" "}
          {service.title}
        </nav>
        <h1>{service.title}</h1>
        <p className="lead">{service.intro}</p>
        {service.sections.map(([title, body]) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </section>
        ))}
        <h2>
          {lang === "fr"
            ? "Parlons de votre projet"
            : "Let’s discuss your project"}
        </h2>
        <p>
          {lang === "fr"
            ? "Expliquez votre besoin, vos contraintes et votre calendrier. Codiva vous répond sous 48 h avec une première estimation gratuite et sans engagement."
            : "Tell Codiva about your goals, constraints and timeline. Get a free initial estimate within 48 hours, with no commitment."}
        </p>
        <a className="btn btn-gold" href={local(home(lang) + "#contact")}>
          {lang === "fr" ? "Demander un devis" : "Request a quote"}
        </a>
        <nav
          className="related"
          aria-label={lang === "fr" ? "Autres services" : "Other services"}
        >
          {(Object.keys(services) as ServiceSlug[])
            .filter((key) => key !== slug)
            .map((key) => (
              <a key={key} href={servicePath(key, lang)}>
                {services[key][lang].title}
              </a>
            ))}
        </nav>
      </main>
      <footer className="container detail-header">
        © Codiva
        <a href={local("/mentions-legales/")}>
          {lang === "fr" ? "Mentions légales" : "Legal notice (French)"}
        </a>
      </footer>
    </>
  );
}
