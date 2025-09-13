import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
};

export default nextConfig;
