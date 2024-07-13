import { ImageLinks } from "@constants/links";
import { Avatar, Card, CardBody, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import NextLink from "next/link";

import { TimeDiffClient } from "@/components/times/TimeDiffClient";
import { cn } from "@/utils/cn";
import { isExternalPath } from "@/utils/path";

type CardPostProps = {
  title: string;
  thumbnail: string;
  url: string;
  author?: {
    name?: string | null;
    avatar?: string | null;
  };
  timestamp?: Date;
  className?: string;
};

export function CardPost({ title, thumbnail, url, author, timestamp, className }: CardPostProps) {
  return (
    <Link
      as={NextLink}
      href={url}
      className={cn("w-full overflow-clip rounded-xl shadow-md", className)}
    >
      <Card
        shadow="none"
        radius="none"
        classNames={{
          base: "h-full w-full overflow-clip border-none p-2",
          footer: "pt-4",
        }}
        className="bg-neutral-400/10 dark:bg-neutral-600/10"
      >
        <CardHeader>
          <div className="relative mx-auto aspect-square h-24 w-fit">
            <Image
              as={NextImage}
              classNames={{ wrapper: "h-full w-full !max-w-none" }}
              className="h-full w-full object-cover p-1.5"
              src={thumbnail || ImageLinks.EMOJI_ANIMATE_FALLBACK}
              alt={title}
              sizes="(max-width: 768px) 100vw, 33vw"
              fill
              priority
              unoptimized={isExternalPath(thumbnail || ImageLinks.EMOJI_ANIMATE_FALLBACK)}
            />
          </div>
          <Avatar
            size="sm"
            classNames={{ base: "absolute right-3 top-3 z-10" }}
            src={author?.avatar || undefined}
            alt={author?.name || undefined}
            showFallback
            fallback={
              <Image
                as={NextImage}
                src={ImageLinks.EMOJI_FALLBACK}
                alt="turtle"
                width={96}
                height={96}
                priority={false}
                unoptimized={isExternalPath(ImageLinks.EMOJI_FALLBACK)}
              />
            }
          />
        </CardHeader>
        <CardBody>
          <span className="line-clamp-3 break-words text-center text-medium font-semibold">
            {title}
          </span>
        </CardBody>
        <CardFooter>
          <div className="grid w-full grid-cols-2 items-end gap-2.5 text-small text-neutral-500 dark:text-neutral-400">
            <span className="break-words text-start">{author?.name || ""}</span>
            {timestamp && (
              <TimeDiffClient
                timestamp={timestamp}
                className="place-self-end break-words text-end"
              />
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
