"use client";

import { Card, CardFooter, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";

import { cn } from "@/utils/cn";

type CardFullProps = {
  title: string;
  thumbnail: string;
  isOGImage?: boolean;
  url: string;
  isExternal?: boolean;
  animation?: {
    delay?: number;
  };
  className?: string;
};

export function CardFull({
  title,
  thumbnail,
  isOGImage,
  url,
  isExternal,
  animation,
  className,
}: CardFullProps) {
  const externalOptions = isExternal && {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <motion.article
      className={className}
      initial={{ y: "2rem", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 20,
        bounce: 0,
        delay: animation?.delay || 0,
      }}
    >
      <Link href={url} style={{ textDecoration: "none" }} {...externalOptions}>
        <Card
          shadow="none"
          isFooterBlurred
          classNames={{
            base: "aspect-16/10 w-full overflow-clip border-none shadow-md",
          }}
          className="origin-left scale-100 bg-zinc-400/10 !transition-transform duration-250 ease-in-out hover:scale-[1.02] active:scale-[0.99] dark:bg-zinc-600/10"
        >
          <Image
            as={NextImage}
            classNames={{ wrapper: "h-full w-full !max-w-none" }}
            className={cn(
              "h-full w-full",
              isOGImage ? "object-contain object-top" : "object-cover object-center"
            )}
            src={thumbnail || "/fallback/noimage-padding.svg"}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
            fill
            priority
            unoptimized={isExternal}
          />
          <CardFooter className="absolute inset-x-0 bottom-1 z-10 mx-auto grid w-[calc(100%-0.5rem)] place-content-center rounded-medium py-2.5 backdrop-brightness-[.7] md:py-[1.375rem]">
            <span className="break-words text-center text-small text-white">{title}</span>
          </CardFooter>
        </Card>
      </Link>
    </motion.article>
  );
}
