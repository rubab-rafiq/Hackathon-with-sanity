// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
// next.config.js

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["cdn.sanity.io"], // Add Sanity's CDN domain
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Sanity's CDN domain
      },
    ],
  },
};

module.exports = nextConfig;
