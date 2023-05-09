/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "omxocowxdonmbrvtjdht.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/public/**",
      },
    ],
  },
  experimental: {
    runtime: "edge",
  },
};

module.exports = nextConfig;
