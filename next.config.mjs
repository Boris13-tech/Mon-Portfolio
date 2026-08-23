/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }, // 8. HTTPS partout
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy",       value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options",       value: "DENY" },
  { key: "Permissions-Policy",    value: "camera=(), microphone=(), geolocation=()" },
];

const corsHeaders = [
  { key: "Access-Control-Allow-Credentials", value: "true" },
  { key: "Access-Control-Allow-Origin", value: "*" }, // 13. CORS configuré
  { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
  { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // 14. Erreurs détaillées coupées (cache la tech stack)
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // 15. console.log clean
  },
  images: { formats: ["image/avif", "image/webp"] },
  experimental: { mdxRs: false },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      { source: "/api/(.*)", headers: corsHeaders }
    ];
  },
};

export default nextConfig;
