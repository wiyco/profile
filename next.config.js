/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 14400, // 4 hours
    remotePatterns: [
      /** @see {@link https://emojiapi.dev} */
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
