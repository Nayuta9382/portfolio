import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [50,60,75, 100], 
  },
  reactStrictMode: true,
  productionBrowserSourceMaps : true, // 本番環境ではfalse

};

export default nextConfig;