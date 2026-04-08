import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure that trailing slashes are handled correctly for static exports
  trailingSlash: true,
};

export default nextConfig;
