import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR ?? '.next',
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Required for proper static export on GitHub Pages
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
};

export default nextConfig;
