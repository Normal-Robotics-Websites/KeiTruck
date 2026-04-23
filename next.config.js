/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = "";

const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix: "",
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

module.exports = nextConfig;
