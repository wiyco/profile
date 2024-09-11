import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

import { cn } from "@/utils/cn";

type CardFullSkeletonProps = {
  className?: string;
};

export function CardFullSkeleton({ className }: CardFullSkeletonProps) {
  return (
    <Card
      shadow="none"
      radius="none"
      classNames={{
        base: "aspect-16/10 w-full overflow-clip rounded-xl border-none shadow-md",
      }}
      className={cn("bg-neutral-400/10 dark:bg-neutral-600/10", className)}
    >
      <Skeleton className="h-full w-full object-cover" />
    </Card>
  );
}
