// Local production-export preview. Deploy out/ through a static hosting provider.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = resolve("out");
const site = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ||
    "https://maryemhadjwannes.github.io/Codiva",
);
const base = site.pathname.replace(/\/$/, "");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".json": "application/json",
  ".webmanifest": "application/manifest+json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
};
createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    if (url.pathname === base && base) {
      res.writeHead(308, { Location: base + "/" });
      return res.end();
    }
    if (!url.pathname.startsWith(base + "/")) {
      res.writeHead(404);
      return res.end("Not found");
    }
    const path = decodeURIComponent(url.pathname.slice(base.length));
    let file = resolve(root, "." + path);
    if (file !== root && !file.startsWith(root + sep)) {
      res.writeHead(404);
      return res.end("Not found");
    }
    const info = await stat(file);
    if (info.isDirectory()) {
      if (!url.pathname.endsWith("/")) {
        res.writeHead(308, { Location: url.pathname + "/" });
        return res.end();
      }
      file = resolve(file, "index.html");
    }
    const data = await readFile(file);
    res.writeHead(200, {
      "Content-Type": types[extname(file)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
    });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(await readFile(resolve(root, "404.html")).catch(() => "Not found"));
  }
}).listen(Number(process.env.PORT || 3000), "127.0.0.1", () =>
  console.log(
    "Production export preview listening on port " + (process.env.PORT || 3000),
  ),
);
