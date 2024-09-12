import "@/styles/article.scss";

import { ImageLinks } from "@constants/links";
import { getArticleMetadata } from "@constants/metadata/article";
import User from "@icons/user.svg";
import { Image } from "@nextui-org/image";
import type { Metadata } from "next";
import NextImage from "next/image";
import { notFound } from "next/navigation";

import { MarkdownRenderer } from "@/components/renderers/MarkdownRenderer";
import type { RouteParams } from "@/types/next";
import { markdownToText } from "@/utils/converter/markdown-to-text";
import { getPost } from "@/utils/fetcher/post";
import { isExternalPath } from "@/utils/path";

import { HeaderDate } from "./client";

/** @see {@link https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config} */
export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = 3600;
export const maxDuration = 10;

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

  return getArticleMetadata({
    title: post.title,
    description,
    id: post.id,
    imageUrl,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
  });
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
