import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {

        protocol: 'https',
        hostname: 'pixabay.com/photos/**',
      }
    ],
  },
};

export default nextConfig;
