import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, 
  devIndicators: false,
  images: {
    domains: ["images.unsplash.com", "e-commerce-bruno0289.s3.us-east-2.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "e-commerce-bruno0289.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
