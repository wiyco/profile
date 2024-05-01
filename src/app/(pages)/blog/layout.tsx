import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s @ Blog – wiyco",
  },
  description: "wiyco's blog.",
  openGraph: {
    title: "Blog – wiyco",
    description: "wiyco's blog.",
    type: "website",
    url: "/blog",
    siteName: "wiyco",
    images: [
      {
        type: "image/png",
        url: "/android-chrome-512x512.png?v=1.0",
        width: 512,
        height: 512,
        alt: "wiyco",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Blog – wiyco",
    description: "wiyco's blog.",
    images: [
      {
        type: "image/png",
        url: "/android-chrome-512x512.png?v=1.0",
        width: 512,
        height: 512,
        alt: "wiyco",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
