import "@/styles/globals.scss";

import { ROOT_METADATA } from "@constants/metadata/root";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { inter, notoSansJP } from "@/styles/fonts";
import { cn } from "@/utils/cn";

import { Providers } from "./providers";

export const metadata: Metadata = ROOT_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* Prevents flicker in color mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){try{const e=document.documentElement,t=e.classList;t.remove("light","dark");const o=localStorage.getItem("theme");if("system"!==o&&o)o&&t.add(o||"");else{const o="(prefers-color-scheme: dark)",c=window.matchMedia(o);c.media!==o||c.matches?(e.style.colorScheme="dark",t.add("dark")):(e.style.colorScheme="light",t.add("light"))}"light"!==o&&"dark"!==o||(e.style.colorScheme=o)}catch(e){console.warn("Failed to initialize color mode.")}}();`,
          }}
        />
      </head>
      <body className={cn(inter.variable, notoSansJP.variable)}>
        <Providers
          nextThemeProviderProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            disableTransitionOnChange: false,
          }}
        >
          <Header />
          {children}
          <Footer />
        </Providers>
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID || ""} />
      </body>
    </html>
  );
}
