/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 21600,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dropbox.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "emojiapi.dev",
        port: "",
        pathname: "/api/v1/**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
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
