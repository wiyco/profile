import { Pagination } from "@/components/navigations/Pagination";

import { CardPostSkeleton } from "./CardPostSkeleton";

export function PostSuspense() {
  return (
    <>
      <article className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        <CardPostSkeleton />
        <CardPostSkeleton />
        <CardPostSkeleton />
      </article>
      <Pagination className="mx-auto" count={3} itemsPerPage={3} initialPage={1} />
    </>
  );
}
