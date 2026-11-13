import { Controls } from "./Controls";
import { ContactForm } from "./ContactForm";
import { Geometry } from "./Geometry";
import { local, servicePath, type Lang } from "../lib/site";
import { business } from "../lib/business";
import { Dynamic } from "./Dynamic";
import { Faq } from "./Faq";
import { translations } from "../lib/translations";

function Brand() {
  return (
    <span className="official-brand" aria-hidden="true">
      <img
        className="brand-on-dark"
        src={local("/assets/codiva-logo-horizontal-dark.svg")}
        alt=""
        width={528}
        height={170}
      />
      <img
        className="brand-on-light"
        src={local("/assets/codiva-logo-horizontal-light.svg")}
        alt=""
        width={528}
        height={170}
      />
    </span>
  );
}
export function Home({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const fr = lang === "fr";
  const services = [
    { key: "web", slug: "developpement-web", art: "web" },
    { key: "software", slug: "logiciels-sur-mesure", art: "software" },
    { key: "blockchain", slug: "blockchain", art: "blockchain" },
  ] as const;
  return (
    <div className="studio">
      <Dynamic />
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="logo" aria-label="Codiva">
            <Brand />
          </a>
          <nav
            className="nav"
            id="nav"
            aria-label={fr ? "Navigation principale" : "Main navigation"}
          >
            <a href="#services">{t["nav.services"]}</a>
            <a href="#approche">{t["nav.process"]}</a>
            <a href="#apropos">{t["nav.about"]}</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="nav-cta">
              {t["nav.contact"]}
            </a>
          </nav>
          <Controls lang={lang} />
        </div>
      </header>
      <main id="main">
        <section className="studio-hero container" id="top">
          <div className="hero-copy">
            <p className="eyebrow">{t["hero.prompt"]}</p>
            <h1>
              {t["hero.title1"]}
              <span className="handwritten underline">{t["hero.title2"]}</span>
            </h1>
            <p className="studio-lead">{t["hero.lead"]}</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-gold">
                {t["hero.cta1"]}
              </a>
              <a href="#services" className="text-link">
                {t["hero.cta2"]}
              </a>
            </div>
          </div>
          <div className="hero-art">
            <p className="handwritten idea-note">
              {fr ? "De l’idée au lancement" : "From idea to launch"}
              <svg viewBox="0 0 100 65" aria-hidden="true">
                <path d="M8 5q5 44 77 45m-13-12 15 12-17 7" />
              </svg>
            </p>
            <Geometry />
          </div>
          <ul className="promises">
            <li>{fr ? "Un périmètre clair" : "Clear scope"}</li>
            <li>{fr ? "Des livraisons régulières" : "Regular delivery"}</li>
            <li>{fr ? "Pensé pour évoluer" : "Built to evolve"}</li>
          </ul>
        </section>
        <section className="figures container" aria-label={fr ? "Chiffres clés" : "Key figures"} data-reveal>
          <ul>
            <li>
              <strong><span data-count="48">48</span> h</strong>
              <span>{fr ? "pour recevoir une réponse" : "to get a reply"}</span>
            </li>
            <li>
              <strong><span data-count="3">3</span></strong>
              <span>{fr ? "domaines d’expertise" : "areas of expertise"}</span>
            </li>
            <li>
              <strong><span data-count="4">4</span></strong>
              <span>{fr ? "étapes, de l’idée au lancement" : "steps, from idea to launch"}</span>
            </li>
            <li>
              <strong><span data-count="100">100</span> %</strong>
              <span>{fr ? "d’attention dédiée à votre projet" : "dedicated attention to your project"}</span>
            </li>
          </ul>
        </section>
        <section
          className="studio-services container"
          id="services"
          aria-labelledby="services-title"
        >
          <p className="eyebrow">
            01 / {fr ? "NOS SOLUTIONS" : "WHAT WE BUILD"}
          </p>
          <h2 id="services-title">
            {fr ? "Les bons outils." : "The right tools."}
            <span className="handwritten underline">
              {fr ? "pour la suite de votre histoire" : "for your next chapter"}
            </span>
          </h2>
          <div className="service-grid">
            {services.map(({ key, slug, art }) => (
              <article className="studio-service" key={key} data-reveal>
                <Geometry kind={art} />
                <h3>
                  <a href={servicePath(slug, lang)}>
                    {t[`services.${key}.title`]}
                  </a>
                </h3>
                <p>{t[`services.${key}.text`]}</p>
                <a
                  className="service-next"
                  href={servicePath(slug, lang)}
                  aria-label={`${fr ? "Découvrir" : "Explore"} — ${t[`services.${key}.title`]}`}
                >
                  <span aria-hidden="true">⟶</span>
                </a>
              </article>
            ))}
          </div>
        </section>
        <section
          className="studio-process"
          id="approche"
          aria-labelledby="process-title"
        >
          <div className="container">
            <div className="process-heading">
              <h2 id="process-title">{t["process.title"]}</h2>
              <p className="handwritten underline">
                {fr ? "Avec soin, pas à pas" : "Thoughtfully, step by step"}
              </p>
            </div>
            <ol className="journey">
              {([1, 2, 3, 4] as const).map((n) => (
                <li key={n} data-reveal>
                  <span className="journey-dot" aria-hidden="true" />
                  <h3>{t[`process.s${n}.title`]}</h3>
                  <p>{t[`process.s${n}.text`]}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="section studio-about" id="apropos" data-reveal>
          <div className="container split">
            <header className="split-label">
              <p className="eyebrow">02 / {t["about.title"]}</p>
              <h2>{t["about.quote"]}</h2>
            </header>
            <div className="about">
              <p>{t["about.p1"]}</p>
              <p>{t["about.p2"]}</p>
              <ul className="commitments">
                {([1, 2, 3] as const).map((n) => (
                  <li key={n}>
                    <span className="chev" aria-hidden="true">
                      ↗
                    </span>
                    {t[`about.v${n}`]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Faq lang={lang} />
        <section className="contact" id="contact">
          <div className="container contact-inner">
            <div className="contact-intro">
              <p className="eyebrow">
                03 / {fr ? "VOTRE PROJET" : "YOUR NEXT CHAPTER"}
              </p>
              <h2>{t["contact.title"]}</h2>
              <p>{t["contact.text"]}</p>
              {business.city && (
                <p>
                  {fr ? "Localisation : " : "Based in "}
                  {business.city}
                </p>
              )}
              <ul className="contact-links">
                <li>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/codiva-fr/"
                    target="_blank"
                    rel="noopener"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <ContactForm lang={lang} />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#top" className="logo" aria-label="Codiva">
            <Brand />
          </a>
          <p className="footer-tag">
            <span aria-hidden="true">/</span>{" "}
            {fr
              ? "Créons quelque chose d’utile."
              : "Let's build something useful."}
          </p>
          <p className="footer-legal">
            © {new Date().getFullYear()} Codiva ·{" "}
            <a href={local("/mentions-legales/")}>{t["footer.legal"]}</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
