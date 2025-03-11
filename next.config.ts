/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Keeps static export
  images: {
    unoptimized: true, // Disable image optimization
  },
};

module.exports = nextConfig;
