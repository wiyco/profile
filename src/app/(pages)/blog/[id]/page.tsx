import Clock from "@icons/clock.svg";
import ClockRotateRight from "@icons/clock-rotate-right.svg";
import User from "@icons/user.svg";
import { Image } from "@nextui-org/react";
import type { Metadata } from "next";
import NextImage from "next/image";
import { notFound } from "next/navigation";

import { MarkdownRenderer } from "@/components/renderers/MarkdownRenderer";
import type { RouteParams } from "@/types";
import { getPost } from "@/utils/fetch/post";
import { markdownToText } from "@/utils/render/markdown-to-text";

type MetadataProps = {
  params: RouteParams;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const post = await getPost(params.id);
  if (!post) return notFound();

  const description = markdownToText(post.content);

  /** Optionally access and extend (rather than replace) parent metadata */
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: description,
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
      <div className="grid w-full gap-6 py-6">
        <div className="relative mx-auto aspect-square h-32 w-fit">
          <Image
            as={NextImage}
            classNames={{ wrapper: "h-full w-full !max-w-none" }}
            className="h-full w-full object-cover p-1.5"
            src={post.thumbnail || "https://emojiapi.dev/api/v1/turtle.svg"}
            alt={post.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, (max-width: 1536px) 25vw, 20vw"
            fill
            priority
          />
        </div>
        <h1>
          <span>{post.title}</span>
        </h1>
        <div className="header-wrap flex items-center justify-center space-x-7 text-sm">
          <section className="grid place-content-center gap-1">
            <div className="flex w-24 items-center justify-items-center space-x-1.5">
              <span className="stroke-current text-[.75em]">
                <Clock />
              </span>
              <span className="text-[.875em] font-semibold">Published</span>
            </div>
            <time className="justify-self-center" dateTime={String(post.createdAt)}>
              {new Date(post.createdAt).toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </section>
          {new Date(post.createdAt).toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }) !==
            new Date(post.updatedAt).toLocaleString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }) && (
            <section className="grid place-content-center gap-1">
              <div className="flex items-center justify-items-center space-x-1.5">
                <span className="stroke-current text-[.75em]">
                  <ClockRotateRight />
                </span>
                <span className="text-[.875em] font-semibold">Updated</span>
              </div>
              <time className="justify-self-center" dateTime={String(post.updatedAt)}>
                {new Date(post.updatedAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </section>
          )}
          <section className="grid place-content-center gap-1">
            <div className="flex items-center justify-items-center space-x-1.5">
              <span className="stroke-current text-[.75em]">
                <User />
              </span>
              <span className="text-[.875em] font-semibold">Written by</span>
            </div>
            <span className="justify-self-center">{post.user?.username || "unknown"}</span>
          </section>
        </div>
      </div>
      <MarkdownRenderer>{post.content}</MarkdownRenderer>
    </div>
  );
}