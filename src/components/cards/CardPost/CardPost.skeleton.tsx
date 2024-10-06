import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

import { cn } from "@/utils/cn";

type CardPostSkeletonProps = {
  className?: string;
};

export function CardPostSkeleton({ className }: CardPostSkeletonProps) {
  return (
    <Card
      shadow="none"
      radius="none"
      classNames={{
        base: "h-full w-full overflow-clip rounded-xl border-none shadow-md p-2",
        footer: "pt-4",
      }}
      className={cn("bg-neutral-400/10 dark:bg-neutral-600/10", className)}
    >
      <CardHeader>
        <Skeleton className="h-24 w-full rounded-medium" />
        <Skeleton classNames={{ base: "absolute left-3 top-3 z-10 w-8 h-8 rounded-full" }} />
      </CardHeader>
      <CardBody>
        <Skeleton className="h-6 w-full rounded-full" />
      </CardBody>
      <CardFooter>
        <div className="grid w-full grid-cols-2 items-end gap-2.5 text-small text-neutral-500 dark:text-neutral-400">
          <Skeleton className="h-5 w-12 rounded-full" />
          <Skeleton className="h-5 w-20 place-self-end rounded-full" />
        </div>
      </CardFooter>
    </Card>
  );
}
