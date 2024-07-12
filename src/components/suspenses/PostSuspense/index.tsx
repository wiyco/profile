import "@/styles/blog.scss";

import { Pagination } from "@/components/navigations/Pagination";

import { CardPostSkeleton } from "./CardPostSkeleton";

export function PostSuspense() {
  return (
    <>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <CardPostSkeleton className="blog-item-animation" />
        <CardPostSkeleton className="blog-item-animation" />
        <CardPostSkeleton className="blog-item-animation" />
      </section>
      <Pagination className="mx-auto" count={3} itemsPerPage={3} initialPage={1} isDisabled />
    </>
  );
}
