// Static hosts cannot use Next.js HTTP redirects. Preserve old links with a
// canonical HTML redirect; configure 301s at the host if it supports them.
import { mkdir, writeFile } from "node:fs/promises";
const site = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://maryemhadjwannes.github.io/Codiva"
).replace(/\/$/, "");
const mappings = [
  ["en/", "/"],
  ["services/developpement-web/", "/fr/services/developpement-web/"],
  ["services/logiciels-sur-mesure/", "/fr/services/logiciels-sur-mesure/"],
  ["services/blockchain/", "/fr/services/blockchain/"],
  ["en/services/developpement-web/", "/services/web-development/"],
  ["en/services/logiciels-sur-mesure/", "/services/custom-software/"],
  ["en/services/blockchain/", "/services/blockchain-development/"],
];
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
for (const [from, to] of mappings) {
  const folder = "out/" + from;
  const target = escape(site + to);
  const destination = escape(new URL(site).pathname.replace(/\/$/, "") + to);
  await mkdir(folder, { recursive: true });
  await writeFile(
    folder + "index.html",
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex,follow"><link rel="canonical" href="${target}"><meta http-equiv="refresh" content="0;url=${destination}"><title>Codiva — page moved</title></head><body><a href="${destination}">Continue to Codiva</a></body></html>`,
  );
}
