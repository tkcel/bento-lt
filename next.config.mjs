/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/bento-lt" : "",
  basePath: process.env.NODE_ENV === "production" ? "/bento-lt" : "",
};

module.exports = nextConfig;
