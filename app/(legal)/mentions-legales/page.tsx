import { Legal } from "../../../components/Legal";
import { absolute } from "../../../lib/site";
export const metadata = {
  title: "Mentions légales et confidentialité | Codiva",
  description:
    "Informations légales et protection des données personnelles du site Codiva, entreprise individuelle.",
  alternates: { canonical: absolute("/mentions-legales/") },
  robots: { index: false, follow: true },
};
export default function Page() {
  return <Legal />;
}
