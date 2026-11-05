import test from "node:test";
import assert from "node:assert/strict";

const base = process.env.TEST_URL || "http://localhost:3000";
const routes = [
  "/",
  "/onauto",
  "/workser",
  "/airdown",
  "/airstream",
  "/gachy",
  "/godsense",
  "/devscope",
  "/airdown/privacy",
  "/airstream/privacy",
  "/gachy/privacy",
  "/godsense/privacy",
];
const titles = new Set();
const assets = new Set();

for (const route of routes) {
  test(`${route}: HTML, unique SEO, main landmark, responsive assets`, async () => {
    const response = await fetch(new URL(route, base));
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /<html[^>]*lang="es"/);
    assert.match(html, /<main[^>]*id="main-content"/);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, "Exactly one h1");
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title, "Page title");
    assert.ok(!titles.has(title), `Unique title: ${title}`);
    titles.add(title);
    const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
    assert.ok(canonical, "Canonical URL present");
    assert.equal(
      new URL(canonical).href,
      new URL(route, base).href,
      "Canonical URL resolves to current page",
    );
    assert.match(html, /property="og:image"/);
    assert.ok(!html.includes("fonts.googleapis.com"), "Self-hosted fonts");
    for (const match of html.matchAll(
      /(?:src|href)="(\/(?:assets\/optimized|fonts|social)[^"]+)"/g,
    ))
      assets.add(match[1]);
    for (const match of html.matchAll(/srcSet="([^"]+)"/gi))
      for (const url of match[1].split(",").map((value) => value.trim().split(" ")[0]))
        assets.add(url);
  });
}
test("All referenced public images and fonts are served", async () => {
  assert.ok(assets.size > 20);
  for (const asset of assets) {
    const response = await fetch(new URL(asset, base));
    assert.equal(response.status, 200, asset);
    assert.ok((await response.arrayBuffer()).byteLength > 0, asset);
  }
});
test("Sitemap and robots cover the public routes", async () => {
  const response = await fetch(new URL("/sitemap.xml", base));
  assert.equal(response.status, 200);
  const xml = await response.text();
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => new URL(match[1]).href,
  );
  for (const route of routes) assert.ok(locations.includes(new URL(route, base).href), route);
  const robots = await fetch(new URL("/robots.txt", base));
  assert.equal(robots.status, 200);
  assert.ok((await robots.text()).includes(`${base}/sitemap.xml`));
});
test("Unknown route responds with 404 and recovery navigation", async () => {
  const response = await fetch(new URL("/this-route-does-not-exist", base));
  assert.equal(response.status, 404);
  assert.match(await response.text(), /Volver a proyectos/);
});
