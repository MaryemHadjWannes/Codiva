import type { Metadata, Viewport } from "next";
export const metadata: Metadata = {
  authors: [{ name: "Codiva" }],
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};
export const viewport: Viewport = {
  themeColor: "#0F2A47",
  width: "device-width",
  initialScale: 1,
};
