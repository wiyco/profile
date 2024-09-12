import type { Metadata } from "next";

export function getArticleMetadata({
  title,
  description,
  id,
  imageUrl,
  createdAt,
  updatedAt,
}: {
  title: string;
  description: string;
  id: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}): Metadata {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_ORIGIN_URL || "http://localhost:3000"),
    title: title,
    description: description,
    openGraph: {
      title: `${title} | wiyco`,
      description: description,
      type: "article",
      url: `/blog/${id}`,
      siteName: "wiyco",
      images: [
        {
          type: "image/png",
          url: imageUrl,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
      publishedTime: String(createdAt),
      modifiedTime: String(updatedAt),
    },
    twitter: {
      card: "summary",
      title: `${title} | wiyco`,
      description: description,
      images: [
        {
          type: "image/png",
          url: imageUrl,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
    },
  };
}
