/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // This allows next/image to load your ImageKit photos
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/**", // allows all folders & files on ImageKit
      },
    ],
  },
};

export default nextConfig;
