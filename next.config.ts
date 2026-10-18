import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
] as const;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "@phosphor-icons/react/ssr"],
  },
  async headers() {
    return [{ source: "/:path*", headers: [...securityHeaders] }];
  },
  // The 2026 repositioning renamed three top-level routes and retired the five
  // product pages. These keep existing inbound links and search results alive.
  async redirects() {
    return [
      { source: "/platform", destination: "/approach", permanent: true },
      { source: "/partners", destination: "/engagements", permanent: true },
      { source: "/products", destination: "/services", permanent: true },
      { source: "/products/notary", destination: "/services/product-engineering", permanent: true },
      { source: "/products/work", destination: "/services/product-engineering", permanent: true },
      { source: "/products/studio", destination: "/services/automation", permanent: true },
      { source: "/products/corporate", destination: "/services/platform", permanent: true },
      { source: "/products/intelligence", destination: "/services/ai-engineering", permanent: true },
      { source: "/products/:slug", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
