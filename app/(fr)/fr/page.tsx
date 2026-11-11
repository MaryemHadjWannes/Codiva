import { Home } from "../../../components/Home";
import { StructuredData } from "../../../components/StructuredData";
import { metadata } from "../../../lib/site";
export const generateMetadata = () =>
  metadata(
    "fr",
    "Codiva | Développement web, logiciels sur mesure & blockchain",
    "Codiva développe vos sites internet, applications web, logiciels métier et solutions blockchain. De la conception au déploiement, avec une estimation gratuite.",
    "/fr/",
    "/",
  );
export default function Page() {
  return (
    <>
      <StructuredData lang="fr" />
      <Home lang="fr" />
    </>
  );
}
