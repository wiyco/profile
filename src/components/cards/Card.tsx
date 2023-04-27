import Link from "next/link";
import Image from "next/image";
import { postParams } from "@/types";

export default function Card({ post }: { post: postParams }) {
  return (
    <>
      <div className="w-full rounded overflow-hidden shadow-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
        <div className="relative aspect-video object-fit bg-zinc-200 dark:bg-zinc-700">
          <Image className={`invert`} src={`/media-image.svg`} alt={`No image`} fill />
        </div>
        <div className="px-6 py-4">
          <h3 className="text-xl">
            <Link href={`/blog/${post.id}`}>
              <span className="line-clamp-1">{post.title}</span>
            </Link>
          </h3>
          <div className="mt-4">
            <p className="text-base line-clamp-3">{post.body.replaceAll("\n", " ")}</p>
          </div>
        </div>
        <div className="text-xs flex items-center justify-start space-x-2 px-3 mb-4">
          <span className="inline-block rounded-full px-3 py-1 bg-zinc-200 dark:bg-zinc-700">
            {`#${post.userId}`}
          </span>
          <span className="inline-block rounded-full px-3 py-1 bg-zinc-200 dark:bg-zinc-700">
            {`#post`}
          </span>
        </div>
      </div>
    </>
  );
}
