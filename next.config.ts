/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"], // Prefer AVIF, fallback to WebP
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Common device widths
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Icon/thumbnail sizes
    minimumCacheTTL: 60 * 60 * 24 * 365, // Cache for 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Remove console.logs in prod
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ["lucide-react"], // Tree-shake lucide icons
  },

  // Production optimizations
  swcMinify: true, // Use SWC for faster minification
  reactStrictMode: true,

  // Compression
  compress: true,
};

module.exports = nextConfig;
