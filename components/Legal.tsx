import { local } from "../lib/site";
export function Legal() {
  return (
    <main className="container legal">
      <a href={local("/")}>← Retour à l’accueil</a>
      <h1>{"Mentions légales"}</h1>

      <h2>{"Éditeur du site"}</h2>
      <p>
        <strong>{"Maryem Hadj Wannes EI"}</strong>
        {" — nom commercial : Codiva"}
        <br />
        {"\n      Entreprise individuelle"}
        <br />
        {"\n      SIREN : [À COMPLÉTER] — SIRET : [À COMPLÉTER]"}
        <br />
        {
          "\n      Code APE : [À COMPLÉTER — ex. 6201Z Programmation informatique]"
        }
        <br />
        {"\n      Adresse : [À COMPLÉTER — adresse de domiciliation]"}
        <br />
        {"\n      Email : "}
        <a href="mailto:contact@codiva.fr" data-config="email">
          {"contact@codiva.fr"}
        </a>
        <br />
        {
          "\n      TVA non applicable, art. 293 B du CGI (si micro-entreprise en franchise de TVA)\n    "
        }
      </p>
      <p>{"Directrice de la publication : Maryem Hadj Wannes."}</p>
      <h2>{"Hébergement"}</h2>
      <p>
        {"\n      GitHub Pages — GitHub, Inc."}
        <br />
        {
          "\n      88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis"
        }
        <br />
        <a href="https://github.com" target="_blank" rel="noopener">
          {"github.com"}
        </a>
      </p>
      <h2>{"Propriété intellectuelle"}</h2>
      <p>
        {
          "L'ensemble des contenus de ce site (textes, visuels, logo, code) est la propriété de Maryem Hadj Wannes EI, sauf mention contraire. Toute reproduction sans autorisation préalable est interdite."
        }
      </p>
      <h2>{"Données personnelles"}</h2>
      <p>
        {
          "Les informations transmises via le formulaire de contact (nom, email, description du projet) sont utilisées uniquement pour répondre à votre demande. Elles ne sont ni vendues ni cédées à des tiers et sont conservées au maximum 3 ans après le dernier échange."
        }
      </p>
      <p>
        {
          "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer, écrivez à "
        }
        <a href="mailto:contact@codiva.fr" data-config="email">
          {"contact@codiva.fr"}
        </a>
        {". Vous pouvez également introduire une réclamation auprès de la "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener">
          {"CNIL"}
        </a>
        {"."}
      </p>
      <h2>{"Cookies"}</h2>
      <p>
        {
          "Ce site n'utilise aucun cookie de suivi ni outil de mesure d'audience. Seule votre préférence de thème est enregistrée localement dans votre navigateur."
        }
      </p>
    </main>
  );
}
