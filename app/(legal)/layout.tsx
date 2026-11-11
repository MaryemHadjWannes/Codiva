import { Document } from "../../components/Document";
import "../globals.css";
export { metadata, viewport } from "../../lib/root-metadata";
export default function Layout({ children }: { children: React.ReactNode }) {
  return <Document lang="fr">{children}</Document>;
}
