import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/net-banking',
        destination: 'https://netbanking.mnsbankbhopal.com',
      },
    ];
  },
};

export default nextConfig;
