"use client";

import { Card, CardBody, CardFooter, CardHeader, Skeleton } from "@nextui-org/react";
import { motion } from "framer-motion";

type CardPostSkeletonProps = {
  animation?: {
    delay?: number;
  };
};

export function CardPostSkeleton({ animation }: CardPostSkeletonProps) {
  return (
    <motion.article
      initial={{ y: "2rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 20,
        bounce: 0,
        delay: animation?.delay || 0,
      }}
    >
      <Card
        shadow="none"
        classNames={{
          base: "h-full w-full overflow-clip border-none shadow-md p-2",
          footer: "pt-4",
        }}
        className="origin-bottom scale-100 bg-zinc-400/10 !transition-transform duration-250 ease-in-out hover:scale-[1.02] active:scale-[0.99] dark:bg-zinc-600/10"
      >
        <CardHeader>
          <Skeleton className="h-24 w-full rounded-lg" />
          <Skeleton classNames={{ base: "absolute right-3 top-3 z-10 w-8 h-8 rounded-full" }} />
        </CardHeader>
        <CardBody>
          <Skeleton className="h-6 w-full rounded-lg" />
        </CardBody>
        <CardFooter>
          <div className="grid w-full grid-cols-2 items-end gap-2.5 text-small text-zinc-500 dark:text-zinc-400">
            <Skeleton className="h-5 w-12 rounded-lg" />
            <Skeleton className="h-5 w-20 place-self-end rounded-lg" />
          </div>
        </CardFooter>
      </Card>
    </motion.article>
  );
}
