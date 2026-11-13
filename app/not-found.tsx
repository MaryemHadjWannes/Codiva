import "./globals.css";
import { Document } from "../components/Document";
import { home, local } from "../lib/site";
export const metadata = { title: "404 | Codiva", robots: { index: false } };
export default function NotFound() {
  return (
    <Document lang="en">
      <main className="container detail">
        <h1>404 — Page not found / Page introuvable</h1>
        <p className="lead">
          <a href={local(home("en"))}>Home</a> · <a href={local(home("fr"))}>Accueil</a>
        </p>
      </main>
    </Document>
  );
}
