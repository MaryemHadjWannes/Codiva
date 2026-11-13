import { Careers } from "../../../../components/Careers";
import { metadata, careersRoute } from "../../../../lib/site";
export const generateMetadata = () =>
  metadata("fr", "Recrutement | Codiva", "Rejoignez Codiva, studio de développement web, logiciels sur mesure et blockchain. Aucun poste ouvert aujourd’hui ; les candidatures spontanées sont bienvenues.", careersRoute("fr"), careersRoute("en"));
export default function Page() {
  return <Careers lang="fr" />;
}
