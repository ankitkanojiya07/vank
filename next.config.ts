import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
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
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // Compression
  compress: true,

  // Redirects for better SEO
  // // TypeScript configuration
  // typescript: {
  //   ignoreBuildErrors: false,
  // },

  // // ESLint configuration
  // eslint: {
  //   ignoreDuringBuilds: false,
  // },

  // Output configuration for deployment
  output: "export", // Remove this if not using Docker/containerized deployment
};

export default nextConfig;
