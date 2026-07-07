import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Content-Security-Policy: allows Google Maps embed, Google Fonts (Geist is self-hosted via next/font),
// and inline styles/scripts required by Next.js. Adjust if new third-party embeds are added.
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://www.google.com https://*.googleusercontent.com https://maps.gstatic.com https://maps.googleapis.com;
  font-src 'self' data:;
  connect-src 'self' https://www.google-analytics.com;
  frame-src 'self' https://www.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self' https://wa.me;
  frame-ancestors 'self';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      {
        // Apply security headers to every route
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Long-term caching for static assets (fonts, images) served from /public
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
