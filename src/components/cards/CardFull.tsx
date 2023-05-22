import Image from "next/image";

import { imageLoader } from "@/hooks/loader";

export default function CardFull(data: { title: string; href: string; src: string }) {
  return (
    <>
      <a
        className="relative block group w-full h-full shadow-lg rounded"
        href={data.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="flex items-center justify-center aspect-4/3 object-cover rounded group-hover:brightness-75 bg-zinc-200 dark:bg-zinc-700 transition-all duration-300 ease-in-out">
          <Image
            className="w-full h-full rounded object-contain"
            loader={imageLoader}
            src={data.src === "" ? "/media-image.svg" : data.src}
            alt={data.title}
            width={640}
            height={640}
            sizes="100vw"
            priority
          />
        </span>
        <div className="w-full">
          <div className="hidden absolute md:flex items-center justify-center w-full h-3/10 top-7/10 left-0 rounded-b scale-y-0 group-hover:scale-y-100 origin-bottom overflow-hidden backdrop-brightness-50 backdrop-blur transition-all duration-300 ease-in-out">
            <span className="px-2 text-white line-clamp-1">{data.title}</span>
          </div>
          <div className="md:hidden absolute flex items-center justify-center w-full min-w-full h-3/10 top-7/10 left-0 rounded-b overflow-hidden backdrop-brightness-50 backdrop-blur">
            <span className="px-2 text-white line-clamp-1">{data.title}</span>
          </div>
        </div>
      </a>
    </>
  );
}
