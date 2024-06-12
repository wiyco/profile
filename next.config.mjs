import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import("next").NextConfig} */
const nextConfig = {
  /** @see {@link https://nextjs.org/docs/app/building-your-application/styling/sass} */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    /** @see {@link https://nextjs.org/docs/app/api-reference/components/image#minimumcachettl} */
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

export default nextConfig;