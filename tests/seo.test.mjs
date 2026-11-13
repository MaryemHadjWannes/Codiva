import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const site = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://maryemhadjwannes.github.io/Codiva"
).replace(/\/$/, "");
const pairs = [
  ["/fr/", "/"],
  ["/fr/services/developpement-web/", "/services/web-development/"],
  ["/fr/services/logiciels-sur-mesure/", "/services/custom-software/"],
  ["/fr/services/blockchain/", "/services/blockchain-development/"],
];
const pages = pairs.flat();
const schemas = (html) =>
  [
    ...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g),
  ].map((match) => JSON.parse(match[1]));
for (const path of pages)
  test("localized metadata and canonical: " + path, async () => {
    const html = await readFile("out" + path + "index.html", "utf8");
    const lang = path.startsWith("/fr/") ? "fr" : "en";
    assert.match(html, new RegExp(`<html[^>]*lang="${lang}"`));
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
    assert.ok(html.includes(`rel="canonical" href="${site}${path}"`));
    const [fr, en] = pairs.find((pair) => pair.includes(path));
    for (const [language, target] of [
      ["fr", fr],
      ["en", en],
      ["x-default", en],
    ])
      assert.ok(
        html.includes(`hrefLang="${language}" href="${site}${target}"`),
      );
    assert.match(html, /<meta name="description" content="[^"]{60,}"/);
    assert.match(html, /<meta property="og:image"/);
    assert.match(
      html,
      /<meta name="twitter:card" content="summary_large_image"/,
    );
    assert.doesNotMatch(html, /<meta name="robots" content="[^"]*noindex/);
    assert.ok(schemas(html).length);
    for (const schema of schemas(html))
      assert.equal(schema["@context"], "https://schema.org");
  });
test("sitemap includes only current language routes and English x-default", async () => {
  const xml = await readFile("out/sitemap.xml", "utf8");
  for (const path of pages)
    assert.ok(xml.includes(`<loc>${site}${path}</loc>`));
  assert.equal((xml.match(/<loc>/g) || []).length, 8);
  assert.doesNotMatch(xml, /<loc>[^<]*\/en\//);
  assert.ok(
    (await readFile("out/robots.txt", "utf8")).includes(
      `Sitemap: ${site}/sitemap.xml`,
    ),
  );
});
test("Codiva organization identifies the business without a personal profile or address", async () => {
  const html = await readFile("out/index.html", "utf8");
  const graph = schemas(html).flatMap((schema) => schema["@graph"] || []);
  const org = graph.find((item) => item["@type"] === "Organization");
  assert.equal(org.name, "Codiva");
  assert.ok(!org.identifier);
  assert.equal(org.email, "Maryem.hadjwannes@codiva.eu");
  assert.ok(org.sameAs.includes("https://www.linkedin.com/company/codiva-fr/"));
  assert.ok(!graph.some((item) => item["@type"] === "Person"));
  assert.ok(!org.founder && !org.legalName);
  if (!process.env.NEXT_PUBLIC_BUSINESS_CITY) assert.ok(!org.address);
  assert.match(html, /<meta name="author" content="Codiva"/);
});
test("legal page is excluded from index and exposes no private identifiers", async () => {
  const html = await readFile("out/mentions-legales/index.html", "utf8");
  assert.match(html, /name="robots" content="noindex, follow"/);
  for (const value of ["13106891800013", "131068918", "6201Z"])
    assert.ok(!html.includes(value));
  assert.ok(html.includes("Maryem.hadjwannes@codiva.eu"));
  assert.doesNotMatch(
    html,
    /À COMPLÉTER|Directrice de la publication|TVA non applicable/,
  );
});
test("home pages contain indexable FAQs, translated forms and current service links", async () => {
  for (const [path, label, service] of [
    ["/", "Send", "/services/web-development/"],
    ["/fr/", "Envoyer", "/fr/services/developpement-web/"],
  ]) {
    const html = await readFile("out" + path + "index.html", "utf8");
    assert.ok(html.includes(label));
    assert.equal((html.match(/<summary>/g) || []).length, 6);
    assert.ok(
      html.includes(
        'href="' + new URL(site).pathname.replace(/\/$/, "") + service + '"',
      ),
    );
    for (const name of ["name", "email", "message"])
      assert.ok(html.includes(`for="${name}"`));
  }
});
test("legacy English and French links lead to their matching new routes", async () => {
  for (const [from, to] of [
    ["en/", "/"],
    ["services/developpement-web/", "/fr/services/developpement-web/"],
    ["en/services/developpement-web/", "/services/web-development/"],
  ]) {
    const html = await readFile("out/" + from + "index.html", "utf8");
    assert.ok(html.includes(`rel="canonical" href="${site}${to}"`));
    assert.ok(
      html.includes(
        `content="0;url=${new URL(site).pathname.replace(/\/$/, "")}${to}"`,
      ),
    );
    assert.ok(html.includes('content="noindex,follow"'));
  }
});
