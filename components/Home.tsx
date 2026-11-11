import { Controls } from "./Controls";
import { ContactForm } from "./ContactForm";
import { local, type Lang } from "../lib/site";
import { translations } from "../lib/translations";
export function Home({ lang }: { lang: Lang }) {
  const t = translations[lang];
  return (
    <>
      <a className="skip-link" href="#main">
        {t["skip"]}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="logo">
            <svg
              className="logo-svg"
              viewBox="24 24 480 122"
              role="img"
              aria-label="Codiva"
            >
              <g transform="translate(31.72 31.72)">
                <g transform="translate(0 92.52)">
                  <g transform="translate(48.06 -39.65) scale(1.2015) translate(5 0)">
                    <path
                      d="M25.46 -25.46 A36 36 0 1 0 25.46 25.46"
                      fill="none"
                      className="logo-inks"
                      strokeWidth="16"
                      strokeLinecap="round"
                    ></path>
                    <polyline
                      points="-8,-15 11,0 -8,15"
                      fill="none"
                      className="logo-dots"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></polyline>
                  </g>
                  <g transform="translate(127.36 0)">
                    <g transform="translate(-2.80 0)">
                      <path
                        d="M30.80 -56.60Q41.30 -56.60 48.35 -51.10Q55.40 -45.60 57.60 -35.60H39.40Q37.10 -42.00 30.50 -42.00Q25.80 -42.00 23.00 -38.35Q20.20 -34.70 20.20 -27.90Q20.20 -21.10 23.00 -17.45Q25.80 -13.80 30.50 -13.80Q37.10 -13.80 39.40 -20.20H57.60Q55.40 -10.40 48.30 -4.80Q41.20 0.80 30.80 0.80Q22.60 0.80 16.25 -2.70Q9.90 -6.20 6.35 -12.70Q2.80 -19.20 2.80 -27.90Q2.80 -36.60 6.35 -43.10Q9.90 -49.60 16.25 -53.10Q22.60 -56.60 30.80 -56.60Z"
                        className="logo-ink"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M62.10 -27.90Q62.10 -36.50 65.90 -43.05Q69.70 -49.60 76.30 -53.10Q82.90 -56.60 91.10 -56.60Q99.30 -56.60 105.90 -53.10Q112.50 -49.60 116.30 -43.05Q120.10 -36.50 120.10 -27.90Q120.10 -19.30 116.25 -12.75Q112.40 -6.20 105.75 -2.70Q99.10 0.80 90.90 0.80Q82.70 0.80 76.15 -2.70Q69.60 -6.20 65.85 -12.70Q62.10 -19.20 62.10 -27.90Z M102.70 -27.90Q102.70 -34.60 99.35 -38.20Q96.00 -41.80 91.10 -41.80Q86.10 -41.80 82.80 -38.25Q79.50 -34.70 79.50 -27.90Q79.50 -21.20 82.75 -17.60Q86.00 -14.00 90.90 -14.00Q95.80 -14.00 99.25 -17.60Q102.70 -21.20 102.70 -27.90Z"
                        className="logo-ink"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M149.20 -56.60Q154.70 -56.60 159.25 -54.30Q163.80 -52.00 166.40 -48.10V-74.00H183.50V0.00H166.40V-8.00Q164.00 -4.00 159.55 -1.60Q155.10 0.80 149.20 0.80Q142.30 0.80 136.70 -2.75Q131.10 -6.30 127.85 -12.85Q124.60 -19.40 124.60 -28.00Q124.60 -36.60 127.85 -43.10Q131.10 -49.60 136.70 -53.10Q142.30 -56.60 149.20 -56.60Z M154.20 -41.70Q149.10 -41.70 145.55 -38.05Q142.00 -34.40 142.00 -28.00Q142.00 -21.60 145.55 -17.85Q149.10 -14.10 154.20 -14.10Q159.30 -14.10 162.85 -17.80Q166.40 -21.50 166.40 -27.90Q166.40 -34.30 162.85 -38.00Q159.30 -41.70 154.20 -41.70Z"
                        className="logo-ink"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M211.80 -55.80V0.00H194.70V-55.80Z"
                        className="logo-ink"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M193.10 -70.80Q193.10 -74.80 195.95 -77.45Q198.80 -80.10 203.30 -80.10Q207.70 -80.10 210.55 -77.45Q213.40 -74.80 213.40 -70.80Q213.40 -66.90 210.55 -64.25Q207.70 -61.60 203.30 -61.60Q198.80 -61.60 195.95 -64.25Q193.10 -66.90 193.10 -70.80Z"
                        className="logo-dot"
                      ></path>
                      <path
                        d="M248.10 -16.00 260.20 -55.80H278.40L258.60 0.00H237.50L217.70 -55.80H236.00Z"
                        className="logo-ink"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M305.60 -56.60Q311.50 -56.60 315.95 -54.20Q320.40 -51.80 322.80 -47.90V-55.80H339.90V0.00H322.80V-7.90Q320.30 -4.00 315.85 -1.60Q311.40 0.80 305.50 0.80Q298.70 0.80 293.10 -2.75Q287.50 -6.30 284.25 -12.85Q281.00 -19.40 281.00 -28.00Q281.00 -36.60 284.25 -43.10Q287.50 -49.60 293.10 -53.10Q298.70 -56.60 305.60 -56.60Z M310.60 -41.70Q305.50 -41.70 301.95 -38.05Q298.40 -34.40 298.40 -28.00Q298.40 -21.60 301.95 -17.85Q305.50 -14.10 310.60 -14.10Q315.70 -14.10 319.25 -17.80Q322.80 -21.50 322.80 -27.90Q322.80 -34.30 319.25 -38.00Q315.70 -41.70 310.60 -41.70Z"
                        className="logo-ink"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <nav className="nav" id="nav" aria-label="Navigation principale">
            <a href="#services">{t["nav.services"]}</a>
            <a href="#approche">{t["nav.process"]}</a>
            <a href="#outils">{t["nav.stack"]}</a>
            <a href="#apropos">{t["nav.about"]}</a>
            <a href="#contact" className="nav-cta">
              {t["nav.contact"]}
            </a>
          </nav>
          <Controls lang={lang} />
        </div>
      </header>
      <main id="main">
        <section className="hero" id="top">
          <div className="hero-symbol" aria-hidden="true">
            <svg viewBox="0 0 256 256" aria-hidden="true" focusable="false">
              <g transform="translate(128.00 128.00) scale(2.0000) translate(5 0)">
                <path
                  d="M25.46 -25.46 A36 36 0 1 0 25.46 25.46"
                  fill="none"
                  className="logo-inks"
                  strokeWidth="16"
                  strokeLinecap="round"
                ></path>
                <polyline
                  points="-8,-15 11,0 -8,15"
                  fill="none"
                  className="logo-dots"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></polyline>
              </g>
            </svg>
          </div>
          <div className="container hero-inner">
            <p className="prompt">
              <span className="chev">{">"}</span>
              <span>{t["hero.prompt"]}</span>
            </p>
            <h1 className="hero-title">
              <span>{t["hero.title1"]}</span>
              <span className="line2">
                <span>{t["hero.title2"]}</span>
                <span className="cursor" aria-hidden="true"></span>
              </span>
            </h1>
            <div className="hero-bottom">
              <p className="lead">{t["hero.lead"]}</p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-gold">
                  <span>{t["hero.cta1"]}</span>
                  <span className="btn-chev" aria-hidden="true">
                    {">"}
                  </span>
                </a>
                <a href="#approche" className="link-arrow">
                  {t["hero.cta2"]}
                </a>
              </div>
            </div>
            <dl className="hero-meta">
              <div>
                <dt>{t["meta.status.k"]}</dt>
                <dd>
                  <span className="live" aria-hidden="true"></span>
                  <span>{t["meta.status.v"]}</span>
                </dd>
              </div>
              <div>
                <dt>{t["meta.reply.k"]}</dt>
                <dd>{t["meta.reply.v"]}</dd>
              </div>
              <div>
                <dt>{t["meta.quote.k"]}</dt>
                <dd>{t["meta.quote.v"]}</dd>
              </div>
              <div>
                <dt>{t["meta.lang.k"]}</dt>
                <dd>{"FR · EN"}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container split">
            <header className="split-label">
              <p className="index">{"01"}</p>
              <h2>{t["services.title"]}</h2>
            </header>
            <ol className="services">
              <li className="service">
                <span className="service-num">{"01"}</span>
                <div>
                  <h3>
                    <span className="service-chev" aria-hidden="true">
                      {">"}
                    </span>
                    <span>{t["services.web.title"]}</span>
                  </h3>
                  <p>{t["services.web.text"]}</p>
                  <p className="service-items">{t["services.web.items"]}</p>
                  <a
                    className="link-arrow"
                    href={local(
                      (lang === "fr" ? "/services/" : "/en/services/") +
                        "developpement-web/",
                    )}
                  >
                    {lang === "fr"
                      ? "Découvrir le service"
                      : "Explore this service"}
                  </a>
                </div>
              </li>
              <li className="service">
                <span className="service-num">{"02"}</span>
                <div>
                  <h3>
                    <span className="service-chev" aria-hidden="true">
                      {">"}
                    </span>
                    <span>{t["services.software.title"]}</span>
                  </h3>
                  <p>{t["services.software.text"]}</p>
                  <p className="service-items">
                    {t["services.software.items"]}
                  </p>
                  <a
                    className="link-arrow"
                    href={local(
                      (lang === "fr" ? "/services/" : "/en/services/") +
                        "logiciels-sur-mesure/",
                    )}
                  >
                    {lang === "fr"
                      ? "Découvrir le service"
                      : "Explore this service"}
                  </a>
                </div>
              </li>
              <li className="service">
                <span className="service-num">{"03"}</span>
                <div>
                  <h3>
                    <span className="service-chev" aria-hidden="true">
                      {">"}
                    </span>
                    <span>{t["services.blockchain.title"]}</span>
                  </h3>
                  <p>{t["services.blockchain.text"]}</p>
                  <p className="service-items">
                    {t["services.blockchain.items"]}
                  </p>
                  <a
                    className="link-arrow"
                    href={local(
                      (lang === "fr" ? "/services/" : "/en/services/") +
                        "blockchain/",
                    )}
                  >
                    {lang === "fr"
                      ? "Découvrir le service"
                      : "Explore this service"}
                  </a>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section section-alt" id="approche">
          <div className="container split">
            <header className="split-label">
              <p className="index">{"02"}</p>
              <h2>{t["process.title"]}</h2>
            </header>
            <ol className="pipeline">
              <li className="stage">
                <p className="stage-cmd">{t["process.s1.cmd"]}</p>
                <h3>{t["process.s1.title"]}</h3>
                <p>{t["process.s1.text"]}</p>
              </li>
              <li className="stage">
                <p className="stage-cmd">{t["process.s2.cmd"]}</p>
                <h3>{t["process.s2.title"]}</h3>
                <p>{t["process.s2.text"]}</p>
              </li>
              <li className="stage">
                <p className="stage-cmd">{t["process.s3.cmd"]}</p>
                <h3>{t["process.s3.title"]}</h3>
                <p>{t["process.s3.text"]}</p>
              </li>
              <li className="stage">
                <p className="stage-cmd">{t["process.s4.cmd"]}</p>
                <h3>{t["process.s4.title"]}</h3>
                <p>{t["process.s4.text"]}</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="section" id="outils">
          <div className="container split">
            <header className="split-label">
              <p className="index">{"03"}</p>
              <h2>{t["stack.title"]}</h2>
            </header>

            <div className="stack">
              <div className="stack-col">
                <h3>{"Frontend"}</h3>
                <ul>
                  <li>{"TypeScript"}</li>
                  <li>{"React"}</li>
                  <li>{"Next.js"}</li>
                  <li>{"HTML / CSS"}</li>
                  <li>{"Tailwind"}</li>
                </ul>
              </div>
              <div className="stack-col">
                <h3>{"Backend"}</h3>
                <ul>
                  <li>{"Node.js"}</li>
                  <li>{"NestJS / Express"}</li>
                  <li>{"REST · GraphQL"}</li>
                  <li>{"Python"}</li>
                </ul>
              </div>
              <div className="stack-col">
                <h3>{"Blockchain"}</h3>
                <ul>
                  <li>{"Solidity"}</li>
                  <li>{"Ethereum / EVM"}</li>
                  <li>{"Hardhat"}</li>
                  <li>{"ethers.js"}</li>
                </ul>
              </div>
              <div className="stack-col">
                <h3>{t["stack.tools"]}</h3>
                <ul>
                  <li>{"PostgreSQL"}</li>
                  <li>{"MongoDB"}</li>
                  <li>{"Docker"}</li>
                  <li>{"CI/CD · Git"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="projets">
          <div className="container split">
            <header className="split-label">
              <p className="index">{"04"}</p>
              <h2>{t["projects.title"]}</h2>
            </header>

            <article className="ticket">
              <div className="ticket-head">
                <span className="ticket-brand">
                  <svg
                    viewBox="40 40 176 176"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <g transform="translate(128.00 128.00) scale(2.0000) translate(5 0)">
                      <path
                        d="M25.46 -25.46 A36 36 0 1 0 25.46 25.46"
                        fill="none"
                        className="logo-inks"
                        strokeWidth="16"
                        strokeLinecap="round"
                      ></path>
                      <polyline
                        points="-8,-15 11,0 -8,15"
                        fill="none"
                        className="logo-dots"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </g>
                  </svg>
                  {" codiva"}
                </span>
                <span className="ticket-no">
                  <span>{t["ticket.label"]}</span>
                  {" N° 2026-001"}
                </span>
              </div>
              <dl className="ticket-rows">
                <div>
                  <dt>{t["ticket.client.k"]}</dt>
                  <dd>{t["ticket.client.v"]}</dd>
                </div>
                <div>
                  <dt>{t["ticket.status.k"]}</dt>
                  <dd>{t["ticket.status.v"]}</dd>
                </div>
                <div>
                  <dt>{t["ticket.start.k"]}</dt>
                  <dd>{t["ticket.start.v"]}</dd>
                </div>
                <div>
                  <dt>{t["ticket.focus.k"]}</dt>
                  <dd>{t["ticket.focus.v"]}</dd>
                </div>
              </dl>
              <p className="ticket-note">{t["ticket.note"]}</p>
              <div className="ticket-foot">
                <a href="#contact" className="btn btn-gold">
                  <span>{t["ticket.cta"]}</span>
                  <span className="btn-chev" aria-hidden="true">
                    {">"}
                  </span>
                </a>
                <a
                  href="https://github.com/MaryemHadjWannes"
                  className="link-arrow"
                  target="_blank"
                  rel="noopener"
                >
                  {t["ticket.github"]}
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="apropos">
          <div className="container split">
            <header className="split-label">
              <p className="index">{"05"}</p>
              <h2>{t["about.title"]}</h2>
            </header>
            <div className="about">
              <blockquote className="quote">{t["about.quote"]}</blockquote>
              <div className="about-body">
                <div>
                  <p className="about-name">{"Maryem Hadj Wannes"}</p>
                  <p className="about-role">{t["about.role"]}</p>
                  <p>{t["about.p1"]}</p>
                  <p>{t["about.p2"]}</p>
                </div>
                <ul className="commitments">
                  <li>
                    <span className="chev" aria-hidden="true">
                      {">"}
                    </span>
                    <span>{t["about.v1"]}</span>
                  </li>
                  <li>
                    <span className="chev" aria-hidden="true">
                      {">"}
                    </span>
                    <span>{t["about.v2"]}</span>
                  </li>
                  <li>
                    <span className="chev" aria-hidden="true">
                      {">"}
                    </span>
                    <span>{t["about.v3"]}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-inner">
            <div className="contact-intro">
              <p className="index index-light">{"06"}</p>
              <h2>{t["contact.title"]}</h2>
              <p>{t["contact.text"]}</p>
              <ul className="contact-links">
                <li>
                  <a
                    href="mailto:contact@codiva.fr"
                    id="link-email"
                    data-config="email"
                  >
                    {"contact@codiva.fr"}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/codiva-fr/"
                    target="_blank"
                    rel="noopener"
                    id="link-linkedin"
                  >
                    {"LinkedIn"}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/MaryemHadjWannes"
                    target="_blank"
                    rel="noopener"
                  >
                    {"GitHub"}
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
          <a href="#top" className="logo footer-logo">
            <svg
              className="logo-svg"
              viewBox="24 24 480 122"
              role="img"
              aria-label="Codiva"
            >
              <g transform="translate(31.72 31.72)">
                <g transform="translate(0 92.52)">
                  <g transform="translate(48.06 -39.65) scale(1.2015) translate(5 0)">
                    <path
                      d="M25.46 -25.46 A36 36 0 1 0 25.46 25.46"
                      fill="none"
                      className="logo-inks"
                      strokeWidth="16"
                      strokeLinecap="round"
                    ></path>
                    <polyline
                      points="-8,-15 11,0 -8,15"
                      fill="none"
                      className="logo-dots"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></polyline>
                  </g>
                  <g transform="translate(127.36 0)">
                    <g transform="translate(-2.80 0)">
                      <path
                        d="M30.80 -56.60Q41.30 -56.60 48.35 -51.10Q55.40 -45.60 57.60 -35.60H39.40Q37.10 -42.00 30.50 -42.00Q25.80 -42.00 23.00 -38.35Q20.20 -34.70 20.20 -27.90Q20.20 -21.10 23.00 -17.45Q25.80 -13.80 30.50 -13.80Q37.10 -13.80 39.40 -20.20H57.60Q55.40 -10.40 48.30 -4.80Q41.20 0.80 30.80 0.80Q22.60 0.80 16.25 -2.70Q9.90 -6.20 6.35 -12.70Q2.80 -19.20 2.80 -27.90Q2.80 -36.60 6.35 -43.10Q9.90 -49.60 16.25 -53.10Q22.60 -56.60 30.80 -56.60Z"
                        className="logo-ink"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M62.10 -27.90Q62.10 -36.50 65.90 -43.05Q69.70 -49.60 76.30 -53.10Q82.90 -56.60 91.10 -56.60Q99.30 -56.60 105.90 -53.10Q112.50 -49.60 116.30 -43.05Q120.10 -36.50 120.10 -27.90Q120.10 -19.30 116.25 -12.75Q112.40 -6.20 105.75 -2.70Q99.10 0.80 90.90 0.80Q82.70 0.80 76.15 -2.70Q69.60 -6.20 65.85 -12.70Q62.10 -19.20 62.10 -27.90Z M102.70 -27.90Q102.70 -34.60 99.35 -38.20Q96.00 -41.80 91.10 -41.80Q86.10 -41.80 82.80 -38.25Q79.50 -34.70 79.50 -27.90Q79.50 -21.20 82.75 -17.60Q86.00 -14.00 90.90 -14.00Q95.80 -14.00 99.25 -17.60Q102.70 -21.20 102.70 -27.90Z"
                        className="logo-ink"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M149.20 -56.60Q154.70 -56.60 159.25 -54.30Q163.80 -52.00 166.40 -48.10V-74.00H183.50V0.00H166.40V-8.00Q164.00 -4.00 159.55 -1.60Q155.10 0.80 149.20 0.80Q142.30 0.80 136.70 -2.75Q131.10 -6.30 127.85 -12.85Q124.60 -19.40 124.60 -28.00Q124.60 -36.60 127.85 -43.10Q131.10 -49.60 136.70 -53.10Q142.30 -56.60 149.20 -56.60Z M154.20 -41.70Q149.10 -41.70 145.55 -38.05Q142.00 -34.40 142.00 -28.00Q142.00 -21.60 145.55 -17.85Q149.10 -14.10 154.20 -14.10Q159.30 -14.10 162.85 -17.80Q166.40 -21.50 166.40 -27.90Q166.40 -34.30 162.85 -38.00Q159.30 -41.70 154.20 -41.70Z"
                        className="logo-ink"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M211.80 -55.80V0.00H194.70V-55.80Z"
                        className="logo-ink"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M193.10 -70.80Q193.10 -74.80 195.95 -77.45Q198.80 -80.10 203.30 -80.10Q207.70 -80.10 210.55 -77.45Q213.40 -74.80 213.40 -70.80Q213.40 -66.90 210.55 -64.25Q207.70 -61.60 203.30 -61.60Q198.80 -61.60 195.95 -64.25Q193.10 -66.90 193.10 -70.80Z"
                        className="logo-dot"
                      ></path>
                      <path
                        d="M248.10 -16.00 260.20 -55.80H278.40L258.60 0.00H237.50L217.70 -55.80H236.00Z"
                        className="logo-ink"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M305.60 -56.60Q311.50 -56.60 315.95 -54.20Q320.40 -51.80 322.80 -47.90V-55.80H339.90V0.00H322.80V-7.90Q320.30 -4.00 315.85 -1.60Q311.40 0.80 305.50 0.80Q298.70 0.80 293.10 -2.75Q287.50 -6.30 284.25 -12.85Q281.00 -19.40 281.00 -28.00Q281.00 -36.60 284.25 -43.10Q287.50 -49.60 293.10 -53.10Q298.70 -56.60 305.60 -56.60Z M310.60 -41.70Q305.50 -41.70 301.95 -38.05Q298.40 -34.40 298.40 -28.00Q298.40 -21.60 301.95 -17.85Q305.50 -14.10 310.60 -14.10Q315.70 -14.10 319.25 -17.80Q322.80 -21.50 322.80 -27.90Q322.80 -34.30 319.25 -38.00Q315.70 -41.70 310.60 -41.70Z"
                        className="logo-ink"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <p className="footer-tag">{t["footer.tag"]}</p>
          <p className="footer-legal">
            {"© "}
            <span>{new Date().getFullYear()}</span>
            {" Maryem Hadj Wannes EI · "}
            <a href={local("/mentions-legales/")}>{t["footer.legal"]}</a>
          </p>
        </div>
      </footer>
    </>
  );
}
