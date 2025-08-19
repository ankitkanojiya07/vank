import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization for static export
  images: {
    unoptimized: true, // CRITICAL: Required for static exports
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vanaashrya.com",
      },
      {
        protocol: "https",
        hostname: "www.vanaashrya.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Remove optimization-specific settings for static export
    // formats: ["image/webp", "image/avif"], // Not needed with unoptimized
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Not needed
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Not needed
    // minimumCacheTTL: 60 * 60 * 24 * 30, // Not needed for static
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations (keep these)
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },

  // Remove turbopack for static exports - it's for development
  // turbopack: {
  //   rules: {
  //     "*.svg": {
  //       loaders: ["@svgr/webpack"],
  //       as: "*.js",
  //     },
  //   },
  // },

  compress: true,

  // Static export configuration
  output: "export",
  trailingSlash: true, // Recommended for static hosting
  distDir: "out", // Default output directory for static export
};

export default nextConfig;
