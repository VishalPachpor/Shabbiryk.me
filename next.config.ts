/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  // Ensure consistent font rendering
  experimental: {
    optimizeFonts: true,
  },
  // Enable static exports if needed
  // output: 'export',
};

module.exports = nextConfig;
