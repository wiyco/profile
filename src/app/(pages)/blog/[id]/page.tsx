import "@/styles/blog.scss";

import { ImageLinks } from "@constants/links";
import User from "@icons/user.svg";
import { Image } from "@nextui-org/react";
import type { Metadata } from "next";
import NextImage from "next/image";
import { notFound } from "next/navigation";

import { MarkdownRenderer } from "@/components/renderers/MarkdownRenderer";
import type { RouteParams } from "@/types";
import { markdownToText } from "@/utils/converter/markdown-to-text";
import { getPost } from "@/utils/fetcher/post";
import { isExternalPath } from "@/utils/path";

import { HeaderDate } from "./client";

type MetadataProps = {
  params: RouteParams;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const post = await getPost(params.id);
  if (!post)
    return {
      title: "Not Found",
      description: "Page not found.",
    };

  const description = markdownToText(post.content);
  const imageUrl = post.thumbnail || ImageLinks.EMOJI_ANIMATE_FALLBACK;

  return {
    title: post.title,
    description: description,
    openGraph: {
      title: `${post.title} @ Blog – wiyco`,
      description: description,
      type: "article",
      url: `/blog/${post.id}`,
      siteName: "wiyco",
      images: [
        {
          type: "image/png",
          url: imageUrl,
          width: 512,
          height: 512,
          alt: post.title,
        },
      ],
      publishedTime: String(post.createdAt),
      modifiedTime: String(post.updatedAt),
    },
    twitter: {
      card: "summary",
      title: `${post.title} @ Blog – wiyco`,
      description: description,
      images: [
        {
          type: "image/png",
          url: imageUrl,
          width: 512,
          height: 512,
          alt: post.title,
        },
      ],
    },
  };
}

type PageProps = {
  params: RouteParams;
};

export default async function Page({ params }: PageProps) {
  const post = await getPost(params.id);
  if (!post) return notFound();

  return (
    <div className="default-wrap mx-auto max-w-screen-md">
      <section className="grid w-full gap-6 py-6">
        <div className="relative mx-auto aspect-square h-32 w-fit">
          <Image
            as={NextImage}
            classNames={{ wrapper: "h-full w-full !max-w-none" }}
            className="h-full w-full object-cover p-1.5"
            src={post.thumbnail || ImageLinks.EMOJI_ANIMATE_FALLBACK}
            alt={post.title}
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
            priority
            unoptimized={isExternalPath(post.thumbnail || ImageLinks.EMOJI_ANIMATE_FALLBACK)}
          />
        </div>
        <h1>
          <span>{post.title}</span>
        </h1>
        <div className="header-wrap flex items-center justify-center space-x-6 text-sm md:space-x-8 [&>*]:w-24">
          <HeaderDate publishedAt={post.createdAt} updatedAt={post.updatedAt} />
          <section className="grid h-full content-start gap-1">
            <div className="flex items-center justify-items-center space-x-1.5">
              <span className="stroke-current text-[.75em]">
                <User />
              </span>
              <span className="text-center text-[.875em] font-bold">Written by</span>
            </div>
            <span className="justify-self-center text-center">{post.user?.username || ""}</span>
          </section>
        </div>
      </section>
      <MarkdownRenderer>{post.content}</MarkdownRenderer>
    </div>
  );
}
