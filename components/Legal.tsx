import { home, local } from "../lib/site";
import { business } from "../lib/business";
export function Legal() {
  return (
    <main className="container legal">
      <a href={local(home("fr"))}>← Retour à l’accueil en français</a>
      <h1>Informations légales et confidentialité</h1>
      <h2>Codiva</h2>
      <p>
        Nom commercial : <strong>Codiva</strong>
        <br />
        Activité : développement web, logiciels sur mesure et blockchain.
      </p>
      <p>
        Contact : <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>
      <h2>Hébergement</h2>
      <p>
        GitHub Pages — GitHub, Inc.
        <br />
        88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.
        <br />
        <a href="https://github.com" rel="noopener" target="_blank">
          github.com
        </a>
      </p>
      <h2>Propriété intellectuelle</h2>
      <p>
        Les contenus et éléments de marque du site Codiva sont protégés par le
        droit de la propriété intellectuelle. Toute reproduction sans
        autorisation préalable est interdite, sauf mentions ou licences
        contraires.
      </p>
      <h2>Données personnelles</h2>
      <p>
        Le formulaire prépare un email dans votre messagerie. Le site ne
        transmet pas le formulaire à un serveur de collecte. Les informations
        que vous choisissez ensuite d’envoyer par email servent à répondre à
        votre demande et à suivre les échanges relatifs à votre projet.
      </p>
      <p>
        Pour exercer vos droits d’accès, de rectification ou de suppression,
        contactez <a href={`mailto:${business.email}`}>{business.email}</a>. Vous
        pouvez également adresser une réclamation à la{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener">
          CNIL
        </a>
        .
      </p>
      <h2>Cookies et préférences</h2>
      <p>
        Aucun cookie publicitaire ni outil de suivi d’audience n’est ajouté par
        ce site. Votre préférence de thème est conservée localement dans votre
        navigateur.
      </p>
    </main>
  );
}
