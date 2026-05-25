/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export", // enables static export for GitHub Pages
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio" : "",
};

export default nextConfig;
