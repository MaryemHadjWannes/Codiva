import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const site = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://maryemhadjwannes.github.io/Codiva"
).replace(/\/$/, "");
const slugs = ["developpement-web", "logiciels-sur-mesure", "blockchain"];
const pages = [
  "/",
  "/en/",
  ...slugs.flatMap((slug) => [`/services/${slug}/`, `/en/services/${slug}/`]),
];
for (const path of pages)
  test("indexable localized SEO: " + path, async () => {
    const html = await readFile("out" + path + "index.html", "utf8");
    const lang = path.startsWith("/en/") ? "en" : "fr";
    assert.match(html, new RegExp(`<html[^>]*lang="${lang}"`));
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
    assert.ok(html.includes(`href="${site}${path}"`));
    for (const language of ["fr", "en", "x-default"])
      assert.ok(
        html.includes(`hrefLang="${language}"`) ||
          html.includes(`hreflang="${language}"`),
      );
    assert.match(html, /<meta name="description" content="[^"]{60,}"/);
    assert.match(html, /<meta property="og:image"/);
    assert.match(
      html,
      /<meta name="twitter:card" content="summary_large_image"/,
    );
    assert.doesNotMatch(html, /<meta name="robots" content="[^"]*noindex/);
    const schemas = [
      ...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g),
    ].map((m) => JSON.parse(m[1]));
    assert.ok(schemas.length);
    for (const schema of schemas)
      assert.equal(schema["@context"], "https://schema.org");
    assert.ok(
      html.includes(
        path.includes("/services/") ? "<section>" : "contact@codiva.fr",
      ),
    );
  });
test("sitemap includes all indexable pages; robots advertises sitemap", async () => {
  const xml = await readFile("out/sitemap.xml", "utf8");
  for (const path of pages)
    assert.ok(xml.includes(`<loc>${site}${path}</loc>`));
  assert.equal((xml.match(/<loc>/g) || []).length, pages.length);
  assert.ok(
    (await readFile("out/robots.txt", "utf8")).includes(
      `Sitemap: ${site}/sitemap.xml`,
    ),
  );
});
test("legal page excluded from index, company identity linked", async () => {
  const html = await readFile("out/mentions-legales/index.html", "utf8");
  assert.match(html, /name="robots" content="noindex, follow"/);
  assert.ok(
    (await readFile("out/index.html", "utf8")).includes(
      "https://www.linkedin.com/company/codiva-fr/",
    ),
  );
});

test('both home pages render translated form labels before JavaScript', async () => {
  for (const [path, label] of [['/', 'Envoyer'], ['/en/', 'Send']]) {
    const html = await readFile('out' + path + 'index.html', 'utf8');
    assert.ok(html.includes(label));
    for (const name of ['name','email','message']) assert.ok(html.includes(`for="${name}"`));
  }
});
