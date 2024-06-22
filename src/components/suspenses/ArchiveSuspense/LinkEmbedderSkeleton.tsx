import { Card, CardBody, Skeleton } from "@nextui-org/react";

import { cn } from "@/utils/cn";

type LinkEmbedderSkeletonProps = {
  className?: string;
};

export function LinkEmbedderSkeleton({ className }: LinkEmbedderSkeletonProps) {
  return (
    <Card
      shadow="none"
      radius="none"
      className={cn(
        "w-full overflow-clip rounded-xl border-1 border-neutral-600/15 bg-inherit dark:border-neutral-400/15",
        className
      )}
    >
      <CardBody className="flex h-36 w-full flex-row items-center justify-start p-0">
        <div className="relative aspect-square h-full w-fit md:aspect-[40/21]">
          <Skeleton className="absolute h-full w-full object-cover" />
        </div>
        <section className="grid h-full w-full content-center gap-3 px-6 py-3.5">
          <span className="grid gap-3">
            <Skeleton className="h-4 w-full md:h-5" />
            <Skeleton className="block h-4 w-3/4 md:hidden md:h-5" />
          </span>
          <span className="hidden md:grid md:gap-1.5">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </span>
          <small className="flex items-center space-x-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <span className="opacity-90">
              <Skeleton className="h-3 w-16" />
            </span>
          </small>
        </section>
      </CardBody>
    </Card>
  );
}
