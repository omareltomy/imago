/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "api.unsplash.com",
      "cdn.imago-images.com",
    ],
  },
  env: {
    NEXT_PUBLIC_UNSPLASH_API_KEY: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
  },
};
