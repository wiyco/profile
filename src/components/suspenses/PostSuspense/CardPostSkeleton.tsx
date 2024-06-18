import { Card, CardBody, CardFooter, CardHeader, Skeleton } from "@nextui-org/react";

export function CardPostSkeleton() {
  return (
    <article>
      <Card
        shadow="none"
        classNames={{
          base: "h-full w-full overflow-clip border-none shadow-md p-2",
          footer: "pt-4",
        }}
        className="origin-bottom scale-100 bg-neutral-400/10 !transition-transform duration-250 ease-in-out hover:scale-[1.02] active:scale-[0.99] dark:bg-neutral-600/10"
      >
        <CardHeader>
          <Skeleton className="h-24 w-full rounded-lg" />
          <Skeleton classNames={{ base: "absolute right-3 top-3 z-10 w-8 h-8 rounded-full" }} />
        </CardHeader>
        <CardBody>
          <Skeleton className="h-6 w-full rounded-lg" />
        </CardBody>
        <CardFooter>
          <div className="grid w-full grid-cols-2 items-end gap-2.5 text-small text-neutral-500 dark:text-neutral-400">
            <Skeleton className="h-5 w-12 rounded-lg" />
            <Skeleton className="h-5 w-20 place-self-end rounded-lg" />
          </div>
        </CardFooter>
      </Card>
    </article>
  );
}
