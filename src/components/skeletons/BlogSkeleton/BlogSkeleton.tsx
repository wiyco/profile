import "@/styles/blog.scss";

import { CardPostSkeleton } from "@/components/cards/CardPost";
import { Pagination } from "@/components/navigations/Pagination";

export function BlogSkeleton() {
  return (
    <>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <CardPostSkeleton />
        <CardPostSkeleton />
        <CardPostSkeleton />
      </section>
      <Pagination className="mx-auto" count={3} itemsPerPage={3} initialPage={1} isDisabled />
    </>
  );
}
