/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // enables static export for GitHub Pages
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
};

export default nextConfig;
