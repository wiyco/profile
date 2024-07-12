import { Pagination } from "@/components/navigations/Pagination";

import { CardPostSkeleton } from "./CardPostSkeleton";

export function PostSuspense() {
  return (
    <>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <CardPostSkeleton />
        <CardPostSkeleton />
        <CardPostSkeleton />
      </section>
      <Pagination className="mx-auto" count={3} itemsPerPage={3} initialPage={1} />
    </>
  );
}
