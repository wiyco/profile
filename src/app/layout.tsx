import "@/styles/globals.scss";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";

import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_ORIGIN_URL || "http://localhost:3000"),
  title: {
    default: "wiyco",
    template: "%s – wiyco",
  },
  description: "wiyco's personal website.",
  openGraph: {
    title: "wiyco",
    description: "wiyco's personal website.",
    type: "website",
    url: "/",
    siteName: "wiyco",
    images: [
      {
        type: "image/png",
        url: "/android-chrome-512x512.png?v=2.1",
        width: 512,
        height: 512,
        alt: "wiyco",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "wiyco",
    description: "wiyco's personal website.",
    images: [
      {
        type: "image/png",
        url: "/android-chrome-512x512.png?v=2.1",
        width: 512,
        height: 512,
        alt: "wiyco",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png?v=2.1",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png?v=2.1",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon.ico?v=2.1",
        sizes: "32x32",
      },
      {
        url: "/icon.svg?v=2.1",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png?v=2.1",
      sizes: "180x180",
      type: "image/png",
    },
  },
  manifest: "/site.webmanifest?v=2.1",
  appleWebApp: {
    title: "wiyco",
    statusBarStyle: "black",
    startupImage: "/android-chrome-512x512.png?v=2.1",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
