import type { NextConfig } from "next";
const site = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ||
    "https://maryemhadjwannes.github.io/Codiva",
);
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: site.pathname.replace(/\/$/, ""),
  poweredByHeader: false,
};
export default config;
