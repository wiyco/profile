import type { Metadata } from "next";

export const ARCHIVE_METADATA: Readonly<Metadata> = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_ORIGIN_URL || "http://localhost:3000"),
  title: {
    default: "Archive",
    template: "%s | wiyco",
  },
  description: "wiyco's archive.",
  openGraph: {
    title: "Archive | wiyco",
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
    title: "Archive | wiyco",
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
