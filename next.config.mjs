import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import("next").NextConfig} */
const nextConfig = {
  /** @see {@link https://nextjs.org/docs/app/building-your-application/styling/sass} */
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  images: {
    /** @see {@link https://nextjs.org/docs/app/api-reference/components/image#minimumcachettl} */
    minimumCacheTTL: 1800, // 30 minutes
    remotePatterns: [
      /** @see {@link https://github.com/wiyco/fluentui-emoji} */
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/wiyco/fluentui-emoji/main/assets/**",
      },
      /** @see {@link https://github.com/wiyco/Animated-Fluent-Emojis} */
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/wiyco/Animated-Fluent-Emojis/master/Emojis/**",
      },
    ],
  },
  /** @see {@link https://nextjs.org/docs/pages/api-reference/next-config-js/webpack} */
  webpack: (config) => {
    /** @see {@link https://react-svgr.com/docs/next} */
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: "@svgr/webpack",
            /** @see {@link https://react-svgr.com/docs/options} */
            options: {
              icon: "1.5em",
              memo: true,
              replaceAttrValues: {
                "#000": "currentColor",
              },
            },
          },
        ],
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

export default nextConfig;
