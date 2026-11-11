import { Home } from "../../components/Home";
import { StructuredData } from "../../components/StructuredData";
import { metadata } from "../../lib/site";
export const generateMetadata = () =>
  metadata(
    "fr",
    "Codiva | Développeuse freelance web, logiciels & blockchain",
    "Maryem Hadj Wannes, développeuse full-stack freelance : applications web, logiciels sur mesure et blockchain. Un suivi de la conception au lancement. Devis gratuit.",
    "/",
    "/en/",
  );
export default function Page() {
  return (
    <>
      <StructuredData lang="fr" />
      <Home lang="fr" />
    </>
  );
}
