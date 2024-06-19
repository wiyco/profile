/** @see {@link https://nextui.org/docs/guide/installation#tailwind-css-setup} */
import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
        "3/10": "30%",
      },
      minHeight: {
        screen: "100dvh",
      },
      maxHeight: {
        screen: "100dvh",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "16/10": "16 / 10",
      },
      fontSize: {
        md: ["1.075rem", "1.5rem"],
      },
      lineHeight: {
        casual: "1.75",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
