/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "www.dropbox.com",
        port: "",
        pathname: "/**",
      },
    ],
    minimumCacheTTL: 43200,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: "1.5em",
            svgo: false,
            replaceAttrValues: {
              "#000000": "{props.color}",
              black: "{props.color}",
              "#FFFFFF": "{props.color}",
              white: "{props.color}",
            },
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
