import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
