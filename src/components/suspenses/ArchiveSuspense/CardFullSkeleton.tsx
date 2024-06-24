import { Card, Skeleton } from "@nextui-org/react";

type CardFullSkeletonProps = {
  className?: string;
};

export function CardFullSkeleton({ className }: CardFullSkeletonProps) {
  return (
    <article className={className}>
      <Card
        shadow="none"
        classNames={{
          base: "aspect-16/10 w-full overflow-clip border-none shadow-md",
        }}
        className="origin-left scale-100 bg-neutral-400/10 !transition-transform duration-250 ease-in-out hover:scale-[1.0125] active:scale-[0.99] dark:bg-neutral-600/10"
      >
        <Skeleton className="h-full w-full object-cover" />
      </Card>
    </article>
  );
}
