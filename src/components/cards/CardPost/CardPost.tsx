import { ImageLinks } from "@constants/links";
import User from "@icons/user.svg";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import NextImage from "next/image";
import NextLink from "next/link";

import { cn } from "@/utils/cn";
import { isExternalPath } from "@/utils/path";

import { TimeDiff } from "./TimeDiff";

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
  prefetch?: React.ComponentProps<typeof NextLink>["prefetch"];
};

export function CardPost({
  title,
  thumbnail,
  url,
  author,
  timestamp,
  className,
  prefetch,
}: CardPostProps) {
  return (
    <Link
      as={NextLink}
      href={url}
      prefetch={prefetch}
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
              <span className="animate-pulse stroke-current">
                <User />
              </span>
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
              <TimeDiff timestamp={timestamp} className="place-self-end break-words text-end" />
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
