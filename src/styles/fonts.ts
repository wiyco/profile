import { Inter, JetBrains_Mono, Noto_Sans_JP, Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], display: "swap" });

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export { inter, jetBrainsMono, notoSansJP, raleway };
