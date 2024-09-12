import type { Metadata } from "next";

export const BLOG_METADATA: Readonly<Metadata> = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_ORIGIN_URL || "http://localhost:3000"),
  title: {
    default: "Blog",
    template: "%s | wiyco",
  },
  description: "wiyco's blog.",
  openGraph: {
    title: "Blog | wiyco",
    description: "wiyco's blog.",
    type: "website",
    url: "/blog",
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
    title: "Blog | wiyco",
    description: "wiyco's blog.",
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
};
