import { ImageLinks } from "@constants/links";
import { Card, CardFooter, Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import NextLink from "next/link";

import { cn } from "@/utils/cn";
import { isExternalPath } from "@/utils/path";

type CardFullProps = {
  title: string;
  thumbnail: string;
  isOGImage?: boolean;
  url: string;
  isExternal?: boolean;
  className?: string;
};

export function CardFull({
  title,
  thumbnail,
  isOGImage,
  url,
  isExternal,
  className,
}: CardFullProps) {
  return (
    <Link
      as={NextLink}
      href={url}
      isExternal={isExternal}
      title={title || undefined}
      className={cn("w-full overflow-clip rounded-xl shadow-md", className)}
    >
      <Card
        shadow="none"
        radius="none"
        isFooterBlurred
        classNames={{
          base: "aspect-16/10 w-full overflow-clip border-none",
        }}
        className="bg-neutral-400/10 dark:bg-neutral-600/10"
      >
        <Image
          as={NextImage}
          classNames={{ wrapper: "h-full w-full !max-w-none" }}
          className={cn(
            "h-full w-full",
            isOGImage ? "object-contain object-top" : "object-cover object-center"
          )}
          src={thumbnail || ImageLinks.FALLBACK}
          alt={title}
          sizes="(max-width: 768px) 100vw, 50vw"
          fill
          priority
          unoptimized={isExternalPath(thumbnail || ImageLinks.FALLBACK)}
        />
        <CardFooter className="absolute inset-x-0 bottom-1 z-10 mx-auto grid w-[calc(100%-0.5rem)] place-content-center rounded-medium py-2.5 backdrop-brightness-[.7] md:py-[1.375rem]">
          <span className="break-words text-center text-small text-white">{title}</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
