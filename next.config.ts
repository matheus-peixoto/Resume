import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR ?? '.next',
  output: 'export',
  basePath: isProd ? '/cv' : '', // The repository name as the base path
  assetPrefix: isProd ? '/cv/' : '', // The repository name as the asset prefix
  trailingSlash: true, // Required for proper static export on GitHub Pages
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/cv' : ''
  }
};

export default nextConfig;
