import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/cv' : '', // The repository name as the base path
  assetPrefix: isProd ? '/cv/' : '', // The repository name as the asset prefix
  trailingSlash: true // Required for proper static export on GitHub Pages
};

export default nextConfig;