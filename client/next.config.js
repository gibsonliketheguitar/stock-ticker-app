/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["static2.finnhub.io"] },
};

module.exports = nextConfig;
