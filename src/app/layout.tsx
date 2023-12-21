import "@/styles/globals.scss";

import type { Metadata } from "next";

import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "wiyco",
    template: "%s | wiyco",
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
        url: "/favicon/android-chrome-512x512.png",
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
        url: "/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "wiyco",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: {
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#27272a",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  appleWebApp: {
    title: "wiyco",
    statusBarStyle: "black",
    startupImage: "/favicon/android-chrome-512x512.png",
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
      </body>
    </html>
  );
}
