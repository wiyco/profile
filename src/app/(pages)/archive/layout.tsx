import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Archive",
    template: "%s @ Archive – wiyco",
  },
  description: "wiyco's archive.",
  openGraph: {
    title: "Archive – wiyco",
    description: "wiyco's archive.",
    type: "website",
    url: "/archive",
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
    title: "Archive – wiyco",
    description: "wiyco's archive.",
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
