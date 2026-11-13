import { Careers } from "../../../components/Careers";
import { metadata, careersRoute } from "../../../lib/site";
export const generateMetadata = () =>
  metadata("en", "Careers | Codiva", "Join Codiva, a studio building web, custom software and blockchain solutions. No open position today; spontaneous applications from developers and designers are welcome.", careersRoute("fr"), careersRoute("en"));
export default function Page() {
  return <Careers lang="en" />;
}
