/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
module.exports = {
  images: {
    domains: ["images.pexels.com", "api.pexels.com", "images.unsplash.com"],
  },
  env: {
    NEXT_PUBLIC_PEXELS_API_KEY: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
    NEXT_PUBLIC_UNSPLASH_API_KEY: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
  },
};
