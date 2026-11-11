import { faq } from "../lib/faq";
import type { Lang } from "../lib/site";
export function Faq({ lang }: { lang: Lang }) {
  return (
    <section
      className="section section-alt"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="container split">
        <header className="split-label">
          <p className="index">FAQ</p>
          <h2 id="faq-title">
            {lang === "fr"
              ? "Votre projet, en pratique"
              : "Planning your project"}
          </h2>
        </header>
        <div className="faq-list">
          {faq[lang].map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
