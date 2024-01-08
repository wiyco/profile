import { Avatar, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import NextImage from "next/image";
import Link from "next/link";

import { TimeDiffClient } from "@/components/times/TimeDiffClient";

type CardPostProps = {
  title: string;
  thumbnail: string;
  url: string;
  author?: {
    name?: string | null;
    avatar?: string | null;
  };
  timestamp?: Date;
};

export function CardPost({ title, thumbnail, url, author, timestamp }: CardPostProps) {
  return (
    <Link href={url} style={{ textDecoration: "none" }}>
      <Card
        shadow="none"
        classNames={{
          base: "w-full overflow-clip border-none shadow-md p-2",
          footer: "pt-4",
        }}
        className="origin-bottom scale-100 bg-zinc-400/10 !transition-transform duration-250 ease-in-out hover:scale-[1.02] active:scale-[0.99] dark:bg-zinc-600/10"
      >
        <CardHeader>
          <div className="relative mx-auto aspect-square h-24 w-fit">
            <Image
              as={NextImage}
              classNames={{ wrapper: "h-full w-full !max-w-none" }}
              className="h-full w-full object-cover p-1.5"
              src={thumbnail || "https://emojiapi.dev/api/v1/turtle.svg"}
              alt={title}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, (max-width: 1536px) 25vw, 20vw"
              fill
              priority
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
                src="https://emojiapi.dev/api/v1/turtle.svg"
                alt="turtle"
                width={96}
                height={96}
                priority
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
          <div className="grid w-full grid-cols-2 gap-2.5 text-small text-zinc-500 dark:text-zinc-400">
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
