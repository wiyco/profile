import Link from "next/link";
import Image from "next/image";
import { ClockRotateRight } from "iconoir-react";
import { postsData } from "@/types";

export default function Card({ post }: { post: postsData }) {
  return (
    <>
      <div className="flex flex-col items-stretch justify-stretch w-full h-full rounded overflow-hidden shadow-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
        <span className="relative aspect-video object-cover bg-zinc-200 dark:bg-zinc-700">
          <Image
            src={post.thumbnail === "" ? `/media-image.svg` : post.thumbnail}
            alt={post.thumbnail === "" ? `No image` : post.thumbnail}
            fill
          />
        </span>
        <div className="flex-1 flex flex-col items-stretch justify-between">
          <div className="px-6 py-4">
            <h3 className="text-xl">
              <Link href={`/blog/${post.id}`}>
                <span className="line-clamp-1">{post.title}</span>
              </Link>
            </h3>
            <div className="mt-4">
              <span className="text-base line-clamp-2">{post.body.replaceAll("\n", " ")}</span>
            </div>
          </div>
          <div className="text-sm w-full px-3 mb-4 flex flex-col items-end justify-between space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <span className="h-5 relative aspect-square object-contain rounded-full bg-zinc-200 dark:bg-zinc-700">
                <Image
                  className="rounded-full"
                  src={
                    post.avatar === ""
                      ? `/people-tag.svg`
                      : `https://omxocowxdonmbrvtjdht.supabase.co/storage/v1/object/public/public/avatars/${post.avatar}.webp`
                  }
                  alt={post.avatar === "" ? "Anon. avatar" : `${post.user_name} avatar`}
                  fill
                />
              </span>
              <span className="">{post.user_name === "" ? "Anon." : `${post.user_name}`}</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xs">
                <ClockRotateRight />
              </span>
              <span className="">
                {`${new Date(post.updated_at).toLocaleString("en-US", {
                  timeZone: "America/New_York",
                  dateStyle: "short",
                })}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
